export class Municipios {
  id?:string;
  nome?:string;

  constructor(obj: Partial<Municipios>){
    Object.assign(this, obj);
  }

}
