import React from 'react';
import styles from './link-element.module.scss';

type LinkElementProps = {
  href: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
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
    <a href={href} id={id} className={styles[`${className}`]} target={target}>
      {children}
    </a>
  );
};

LinkElement.defaultProps = {
  target: '_blank',
  id: undefined,
  className: undefined,
  children: '',
};

export default LinkElement;
