/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

import countObjectProperties from '../helpers/count-object-properties';
import HeadingElement, { HeadingElementProps } from './heading-element';
import SelectElement, { SelectElementProps } from './select-element';

export type TableElementProp<T> = {
  theadColumnsLabels: T;
  tbodyRowsData: T[];
  tableTitle: HeadingElementProps;
  brandSelect: SelectElementProps;
  divClassName?: string;
  tableClassName?: string;
  theadClassName?: string;
};

class TableElement<T> {
  private _props: TableElementProp<T>;

  private readonly _htmlDivElement: HTMLDivElement;

  private readonly _htmlTableElement: HTMLTableElement;

  private readonly _tableTitle: HeadingElement;

  private readonly _brandSelect: SelectElement;

  private readonly _thead: HTMLTableSectionElement;

  private readonly _tbody: HTMLTableSectionElement;

  constructor(props: TableElementProp<T>) {
    this._props = props;

    this.checkColumnsCompatibleWithRows();

    this._htmlDivElement = document.createElement('div');
    this._htmlTableElement = document.createElement('table');
    this._thead = document.createElement('thead');
    this._tbody = document.createElement('tbody');
    this._tableTitle = new HeadingElement(this.initTableTitle());
    this._brandSelect = new SelectElement(this.initBrandSelect());

    this.init();
    this.render();
  }

  private checkColumnsCompatibleWithRows = () => {
    const { theadColumnsLabels, tbodyRowsData } = this._props;

    const headerCellsCount = countObjectProperties(theadColumnsLabels);
    const isColumnsCompatibleWithRows = tbodyRowsData.every((row) => {
      const rowCellsCount = countObjectProperties(row);
      return headerCellsCount === rowCellsCount;
    });

    if (!isColumnsCompatibleWithRows) {
      throw new Error('Table header and/or body data are incompatible!');
    }
  };

  private init = () => {
    this.initDiv();
    this.initTable();
    this.initThead();

    this._htmlTableElement.append(this._thead, this._tbody);
    this._htmlDivElement.append(this._htmlTableElement);
  };

  private initDiv = () => {
    if (this._props.divClassName) {
      this._htmlDivElement.className = this._props.divClassName;
    }
  };

  private initTable = () => {
    if (this._props.tableClassName) {
      this._htmlTableElement.className = this._props.tableClassName;
    }
  };

  private initThead = () => {
    if (this._props.theadClassName) {
      this._thead.className = this._props.theadClassName;
    }
  };

  private initTableTitle = () => {
    const obj: HeadingElementProps = {
      headingText: this._props.tableTitle.headingText,
      tag: this._props.tableTitle.tag,
    };

    if (this._props.tableTitle.divClassName !== undefined) {
      obj.divClassName = this._props.tableTitle.divClassName;
    }

    if (this._props.tableTitle.headingClassName !== undefined) {
      obj.headingClassName = this._props.tableTitle.headingClassName;
    }

    return obj;
  };

  private initBrandSelect = () => {
    const obj: SelectElementProps = <SelectElementProps>{
      labelElText: this._props.brandSelect.labelElText,
      options: this._props.brandSelect.options,
    };

    if (this._props.brandSelect.divClassName !== undefined) {
      obj.divClassName = this._props.brandSelect.divClassName;
    }

    if (this._props.brandSelect.selectClassName !== undefined) {
      obj.selectClassName = this._props.brandSelect.selectClassName;
    }

    if (this._props.brandSelect.labelClassName !== undefined) {
      obj.labelClassName = this._props.brandSelect.labelClassName;
    }

    obj.onChange = (str: string) => {
      this._props.brandSelect.onChange(str);
    };

    return obj;
  };

  private render = () => {
    this.renderThead();
    this.renderTbody();
  };

  private renderThead = () => {
    this._thead.innerHTML = '';

    const row = document.createElement('tr');

    for (const key in this._props.theadColumnsLabels) {
      const cell = document.createElement('th');
      cell.textContent = `${this._props.theadColumnsLabels[key]}`;
      row.append(cell);
    }

    this._thead.append(row);
  };

  private renderTbody = () => {
    this._tbody.innerHTML = '';

    this._props.tbodyRowsData.forEach((car) => {
      const row = document.createElement('tr');

      for (const key in this._props.theadColumnsLabels) {
        const cell = document.createElement('td');
        cell.textContent = `${car[key]}`;
        row.append(cell);
      }

      this._tbody.append(row);
    });
  };

  public updateProps = (newProps: Partial<TableElementProp<T>>) => {
    this._props = {
      ...this._props,
      ...newProps,
    };

    this.render();
  };

  get htmlDivElement(): HTMLDivElement {
    return this._htmlDivElement;
  }

  get tableTitle(): HeadingElement {
    return this._tableTitle;
  }

  get brandSelect(): SelectElement {
    return this._brandSelect;
  }
}

export default TableElement;
