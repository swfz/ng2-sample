export class Units extends Array<Unit>{
  public constructor(...args: Unit[]) {
    let data: any = super(...args);
    let array = data.map(row => new Unit(row));

    Object.setPrototypeOf(array,this.constructor.prototype);

    return array;
  }

  public toJson() {
    return JSON.stringify(this);
  }

  public getValues(){
    return this.map( (u: Unit) => u.value);
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


