import React from 'react';
import BlockElementsEnum from '../enums/block-elements-enum';
import BlockElement from './helpers/block-element';

const SectionBBlock: React.FC = function sectionBBlock() {
  return (
    <BlockElement tag={BlockElementsEnum.section} className="section-b">
      <BlockElement tag={BlockElementsEnum.p}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus
        impedit maxime, quae soluta quis cumque perferendis! Doloribus quaerat,
        placeat iste facere, aspernatur ex cum veritatis laudantium, officia,
        non porro exercitationem incidunt quis dolore? Officia ex accusamus
        expedita optio, voluptatem minus? In maiores omnis aperiam earum ab
        molestiae beatae laborum blanditiis incidunt, delectus dolor, id
        voluptates optio aspernatur aliquam saepe atque labore? Tempore
        reprehenderit ab ipsam perspiciatis ut, provident perferendis sapiente
        in numquam blanditiis, enim, illo error nulla incidunt quos quidem
        ratione repellat ipsa molestias veritatis? Mollitia, fugit dolore
        commodi porro repudiandae atque, eos, ipsum quam culpa fuga deleniti
        quae.
      </BlockElement>
    </BlockElement>
  );
};

export default SectionBBlock;
