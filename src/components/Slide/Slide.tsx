import React, { useRef, useEffect, useState } from 'react';
import css from './slide.module.css';

interface SlideProps {
  children: React.ReactNode;
  translate: number;
  transition: number;
}

export const Slide = ({ children, translate, transition }:SlideProps) => {

  const container = useRef<HTMLDivElement>(null);
  const [offsetLeft, updateOffsetLeft] = useState<number>(0);
  const [width, updateWidth] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => {
      if (container.current) {
        const parent = container.current.parentElement;
        if (parent) {
          updateOffsetLeft(parent.offsetLeft);
          updateWidth(parent.offsetWidth);
        }
      }
    }, 0);
  }, []);

  const x = -translate - offsetLeft;
  const k = 1 - x / width; // [0 : 1]

  const style: React.CSSProperties = x >= -1 ? {
    transform: `translateX(${x}px) scale(${k * 0.2 + 0.8})`, // [0.8 : 1]
    opacity: k < 0 ? 0 : k * 0.5 + 0.5, // [0.5 : 1]
    transition: `${transition}ms`,
  } : {};

  return (
    <div ref={container} className={css.container}>

        {children}
      
    </div>
  );
};
