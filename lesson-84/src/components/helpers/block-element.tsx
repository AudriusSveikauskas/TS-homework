import React from 'react';
import styles from './block-element.module.scss';
import BlockElementsEnum from '../../enums/block-elements-enum';

type BlockElementProps = {
  tag: BlockElementsEnum;
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

const BlockElement: React.FC<BlockElementProps> = function blockElement({
  tag,
  id,
  className,
  children,
}) {
  const BlockEl = tag;
  return (
    <BlockEl id={id} className={styles[`${className}`]}>
      {children}
    </BlockEl>
  );
};

BlockElement.defaultProps = {
  id: undefined,
  className: undefined,
  children: '',
};

export default BlockElement;
