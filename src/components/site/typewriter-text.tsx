"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  text: string;
};

const typeDelay = 220;

export function TypewriterText({ text }: TypewriterTextProps) {
  const initialLength = text.length > 0 ? 1 : 0;
  const [visibleLength, setVisibleLength] = useState(initialLength);
  const isComplete = visibleLength >= text.length;

  useEffect(() => {
    let timeout: number;
    let currentLength = initialLength;
    let isActive = true;

    setVisibleLength(initialLength);

    const typeNextCharacter = () => {
      if (!isActive) {
        return;
      }

      if (currentLength >= text.length) {
        return;
      }

      currentLength += 1;
      setVisibleLength(currentLength);
      timeout = window.setTimeout(typeNextCharacter, typeDelay);
    };

    timeout = window.setTimeout(typeNextCharacter, typeDelay);

    return () => {
      isActive = false;
      window.clearTimeout(timeout);
    };
  }, [initialLength, text]);

  return (
    <span>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{text.slice(0, visibleLength)}</span>
      {!isComplete && (
        <span aria-hidden="true" className="ml-1 inline-block h-[0.9em] w-px translate-y-1 animate-caret bg-ink" />
      )}
    </span>
  );
}
