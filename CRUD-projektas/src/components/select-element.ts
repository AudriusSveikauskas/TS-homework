/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
/* eslint implicit-arrow-linebreak: ["error", "below"] */

export type OptionElement = {
  value: string;
  label: string;
};

export type SelectElementProps = {
  labelElText: string;
  options: OptionElement[];
  onChange: (value: string) => void;
  divClassName?: string;
  labelClassName?: string;
  selectClassName?: string;
};

class SelectElement {
  private static instanceId = 0;

  private readonly _props: SelectElementProps;

  private readonly _htmlDivElement: HTMLDivElement;

  private readonly _htmlSelectElement: HTMLSelectElement;

  private readonly _htmlLabelElement: HTMLLabelElement;

  constructor(props: SelectElementProps) {
    this._props = props;

    this._htmlDivElement = document.createElement('div');
    this._htmlSelectElement = document.createElement('select');
    this._htmlLabelElement = document.createElement('label');

    SelectElement.instanceId += 1;

    this.init();
    this.render();
  }

  private init = () => {
    const selectElementId = `select-el-${SelectElement.instanceId}`;

    if (typeof this._props.divClassName === 'string') {
      this._htmlDivElement.className = this._props.divClassName;
    }

    if (typeof this._props.selectClassName === 'string') {
      this._htmlSelectElement.className = this._props.selectClassName;
    }

    if (typeof this._props.labelClassName === 'string') {
      this._htmlLabelElement.className = this._props.labelClassName;
    }

    this._htmlSelectElement.setAttribute('id', selectElementId);
    this._htmlLabelElement.setAttribute('for', selectElementId);

    this._htmlDivElement.append(
      this._htmlLabelElement,
      this._htmlSelectElement,
    );
  };

  private render = () => {
    this._htmlLabelElement.textContent = this._props.labelElText;

    this._props.options.forEach((item) => {
      const option = document.createElement('option');
      option.value = item.value;
      option.label = item.label;
      this._htmlSelectElement.append(option);
    });

    const { onChange } = this._props;

    this._htmlSelectElement.addEventListener('change', () =>
      onChange(this._htmlSelectElement.value),
    );
  };

  get htmlDivElement(): HTMLDivElement {
    return this._htmlDivElement;
  }
}

export default SelectElement;
