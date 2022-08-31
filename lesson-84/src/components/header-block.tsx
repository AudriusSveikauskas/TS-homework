import React from 'react';
import BlockElementsEnum from '../enums/block-elements-enum';
import BlockElement from './helpers/block-element';
import LinkElement from './helpers/link-element';

const HeaderBlock: React.FC = function headerBlock() {
  return (
    <BlockElement tag={BlockElementsEnum.header} className="showcase">
      <BlockElement tag={BlockElementsEnum.h1}>
        Welcome To The Beach
      </BlockElement>
      <BlockElement tag={BlockElementsEnum.p}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officiis
        ipsum officia numquam expedita ullam.
      </BlockElement>

      <LinkElement
        href="https://codepen.io/bradtraversy/pen/XerXYV"
        className="button"
      >
        Read More
      </LinkElement>
    </BlockElement>
  );
};

export default HeaderBlock;
