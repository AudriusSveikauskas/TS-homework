import React from 'react';
import styles from './heading-element.module.scss';

type HeadingElementProps = {
  tag?: 'h1' | 'h2' | 'h3';
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

const HeadingElement: React.FC<HeadingElementProps> = function headingElement({
  tag,
  id,
  className,
  children,
}) {
  switch (tag) {
    case 'h1':
      return (
        <h1 id={id} className={styles[`${className}`]}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 id={id} className={styles[`${className}`]}>
          {children}
        </h2>
      );
    case 'h3':
    default:
      return (
        <h3 id={id} className={styles[`${className}`]}>
          {children}
        </h3>
      );
  }
};

HeadingElement.defaultProps = {
  tag: undefined,
  id: undefined,
  className: undefined,
  children: '',
};

export default HeadingElement;
