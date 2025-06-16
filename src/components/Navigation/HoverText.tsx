import { useState, useRef } from 'react';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*';

function randomChar() {
  return LETTERS[Math.floor(Math.random() * LETTERS.length)];
}

export default function HoverText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = (target: string, callback: () => void) => {
    let iteration = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(prev =>
        prev
          .split('')
          .map((char, i) => {
            if (i < iteration) return target[i];
            return randomChar();
          })
          .join('')
      );

      iteration += 1 / 2;

      if (iteration >= target.length) {
        clearInterval(intervalRef.current!);
        setDisplayText(target);
        callback();
      }
    }, 40);
  };

  const handleMouseEnter = () => {
    scramble(text, () => {});
  };

  const handleMouseLeave = () => {
    scramble(text, () => {});
  };

  return (
    <p
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="hover:scale-110 transition-transform ease-in-out duration-200 cursor-pointer tracking-wider"
    >
      {displayText}
    </p>
  );
}
