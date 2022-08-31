import React from 'react';
import BlockElementsEnum from '../enums/block-elements-enum';
import BlockElement from './helpers/block-element';

const SectionCBlock: React.FC = function sectionCBlock() {
  return (
    <BlockElement tag={BlockElementsEnum.section} className="section-c">
      <BlockElement tag={BlockElementsEnum.div} className="box-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum
        est, molestias dolores quis sunt nobis temporibus veritatis libero odio!
      </BlockElement>

      <BlockElement tag={BlockElementsEnum.div} className="box-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum
        est, molestias dolores quis sunt nobis temporibus veritatis libero odio!
      </BlockElement>

      <BlockElement tag={BlockElementsEnum.div} className="box-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum
        est, molestias dolores quis sunt nobis temporibus veritatis libero odio!
      </BlockElement>
    </BlockElement>
  );
};

export default SectionCBlock;
