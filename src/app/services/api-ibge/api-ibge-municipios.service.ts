import { environment } from './../../../environments/environment';
import { Municipios } from './../../models/municipios';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiIbgeMunicipiosService {

  constructor(private http: HttpClient) { }

    getCidadeById(uf:string){
      const url=`${environment.urlApiCidades}/${uf}/municipios`;
      return this.http.get<Municipios[]>(url);
    }

}
