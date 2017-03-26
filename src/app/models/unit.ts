export class Units<T> extends Array<T> {
  public constructor(...args: T[]) {
    let data: any = super(...args);
    let array = data.map(row => new Unit(row));

    Object.setPrototypeOf(array,this.constructor.prototype);

    return array;
  }

  public toJson() {
    return JSON.stringify(this);
  }
}

export class Unit {
  selected: boolean;
  display: string;
  value: string;

  constructor(data: any = {}) {
    this.selected = data.selected || false;
    this.display = data.display || '';
    this.value   = data.value || '';
  }
}


