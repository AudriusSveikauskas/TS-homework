/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

import HeadingTag from '../enums/heading-tag';

export type HeadingElementProps = {
  headingText: string;
  tag: HeadingTag;
  divClassName?: string;
  headingClassName?: string;
};

class HeadingElement {
  private static instanceId = 0;

  private _props: HeadingElementProps;

  protected _htmlDivElement: HTMLDivElement;

  private readonly _htmlHeadingElement: HTMLHeadingElement;

  constructor(props: HeadingElementProps) {
    this._props = props;

    this._htmlDivElement = document.createElement('div');
    this._htmlHeadingElement = document.createElement(this._props.tag);

    HeadingElement.instanceId += 1;

    this.init();
    this.render();
  }

  private init = () => {
    const headingElementId = `heading-el-${HeadingElement.instanceId}`;

    if (this._props.divClassName) {
      this._htmlDivElement.className = this._props.divClassName;
    }

    if (this._props.headingClassName) {
      this._htmlHeadingElement.className = this._props.headingClassName;
    }

    this._htmlHeadingElement.setAttribute('id', headingElementId);

    this._htmlDivElement.append(this._htmlHeadingElement);
  };

  private render = () => {
    this._htmlHeadingElement.textContent = this._props.headingText;
  };

  get htmlDivElement(): HTMLDivElement {
    return this._htmlDivElement;
  }

  public setHTMLlHeadingElement = (value: string) => {
    this._htmlHeadingElement.textContent = value;
  };
}

export default HeadingElement;
