/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

export type ButtonElementProps = {
  name: string;
  onClick: () => void;
  divClassName?: string;
  buttonClassName?: string;
};

class ButtonElement {
  private static instanceId = 0;

  private _props: ButtonElementProps;

  private _htmlDivElement: HTMLDivElement;

  private _htmlButtonElement: HTMLButtonElement;

  constructor(props: ButtonElementProps) {
    this._props = props;

    this._htmlDivElement = document.createElement('div');
    this._htmlButtonElement = document.createElement('button');

    ButtonElement.instanceId += 1;

    this.init();
    this.render();
  }

  private init = () => {
    const buttonElementId = `button-el-${ButtonElement.instanceId}`;

    if (this._props.divClassName) {
      this._htmlDivElement.className = this._props.divClassName;
    }

    if (this._props.buttonClassName) {
      this._htmlButtonElement.className = this._props.buttonClassName;
    }

    this._htmlButtonElement.setAttribute('id', buttonElementId);

    this._htmlDivElement.append(this._htmlButtonElement);
  };

  private render = () => {
    const { name, onClick } = this._props;

    this._htmlButtonElement.textContent = name;
    this._htmlButtonElement.addEventListener('click', () => onClick());
  };
}

export default ButtonElement;
