/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

import CarsCollection from '../helpers/cars-collection';
import TableElement from './table-element';
import cars from '../data/cars';
import models from '../data/models';
import brands from '../data/brands';
import HeadingTag from '../enums/heading-tag';

class App {
  private _rootElement: HTMLElement;

  private _carsCollection: CarsCollection;

  // @ts-ignore
  private _carTable: TableElement;

  private _selectedBrandId: string;

  constructor(selector: string) {
    const htmlElement = document.querySelector<HTMLElement>(selector);

    if (htmlElement === null) {
      throw new Error(`Element "${selector}" not found!`);
    }

    this._rootElement = htmlElement;

    this._selectedBrandId = '-1';

    this._carsCollection = new CarsCollection({ cars, models, brands });

    this._carTable = new TableElement({
      theadColumnsLabels: {
        id: 'id',
        brand: 'Brand',
        model: 'Model',
        // @ts-ignore
        price: 'Price',
        // @ts-ignore
        year: 'Year',
      },
      tbodyRowsData: this._carsCollection.allCars(),
      tableClassName: 'table table-striped',
      theadClassName: 'table-dark',
      tableTitle: {
        headingText: 'All cars',
        tag: HeadingTag.H3,
        headingClassName: 'text-center',
        divClassName: 'p-2',
      },
      brandSelect: {
        labelElText: 'Brands:',
        options: this._carsCollection.brand(),
        onChange: this.handleCategoryChange,
        divClassName: 'p-2',
        labelClassName: 'form-label',
        selectClassName: 'form-select',
      },
    });
  }

  initialize = (): void => {
    const container = document.createElement('div');
    container.className = 'container my-5';

    container.append(
      this._carTable.brandSelect.htmlDivElement,
      this._carTable.tableTitle.htmlDivElement,
      this._carTable.htmlDivElement,
    );

    this._rootElement.append(container);
  };

  public handleCategoryChange = (brandId: string) => {
    this._selectedBrandId = brandId;

    this.update();
  };

  private update = (): void => {
    const brandTitle = this._carsCollection.getBrandTitleByBrandId(
      this._selectedBrandId,
    );

    this._carTable.tableTitle.setHTMLlHeadingElement(brandTitle);
    if (this._selectedBrandId === '-1') {
      this._carTable.updateProps({
        tbodyRowsData: this._carsCollection.allCars(),
      });
    } else {
      this._carTable.updateProps({
        tbodyRowsData: this._carsCollection.getCarsByBrandId(
          this._selectedBrandId,
        ),
      });
    }
  };
}

export default App;
