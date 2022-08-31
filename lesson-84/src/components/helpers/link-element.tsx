import React from 'react';
import styles from './link-element.module.scss';

type LinkElementProps = {
  href: string;
  target?: string;
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

const LinkElement: React.FC<LinkElementProps> = function linkElement({
  href,
  target,
  id,
  className,
  children,
}) {
  return (
    <a href={href} target={target} id={id} className={styles[`${className}`]}>
      {children}
    </a>
  );
};

LinkElement.defaultProps = {
  target: 'blank',
  id: undefined,
  className: undefined,
  children: '',
};

export default LinkElement;
