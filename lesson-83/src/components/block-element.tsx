import React from 'react';
import styles from './block-element.module.scss';

interface BlockElementProps {
  tag?: 'p' | 'div' | 'section';
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

const BlockElement: React.FC<BlockElementProps> = function blockElement({
  tag,
  id,
  className,
  children,
}) {
  switch (tag) {
    case 'p':
      return (
        <p id={id} className={styles[`${className}`]}>
          {children}
        </p>
      );
    case 'section':
      return (
        <section id={id} className={styles[`${className}`]}>
          {children}
        </section>
      );
    case 'div':
    default:
      return (
        <div id={id} className={styles[`${className}`]}>
          {children}
        </div>
      );
  }
};

BlockElement.defaultProps = {
  tag: undefined,
  id: undefined,
  className: undefined,
  children: '',
};

export default BlockElement;
