import React from 'react';
import BlockElement from './components/block-element';
import HeadingElement from './components/heading-element';
import LinkElement from './components/link-element';

function App() {
  return (
    <div>
      <BlockElement tag="section" id="hero" className="hero">
        <BlockElement tag="div" className="container">
          <BlockElement>
            <HeadingElement tag="h1">This is a title</HeadingElement>
            <HeadingElement tag="h2">
              Lorem ipsum dolor sit amet consectetur.
            </HeadingElement>
            <BlockElement tag="p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem vero ratione vitae dicta explicabo perferendis amet
              quis provident molestiae magni!
            </BlockElement>
            <LinkElement href="https://codepen.io/Web_Cifar/pen/oNzPXRY">
              Click Me
            </LinkElement>
          </BlockElement>
        </BlockElement>
      </BlockElement>
    </div>
  );
}

export default App;
