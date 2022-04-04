import { ApiIbgeMunicipiosService } from './../../services/api-ibge/api-ibge-municipios.service';
import { Municipios } from './../../models/municipios';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-body-ibge',
  templateUrl: './body-ibge.component.html',
  styleUrls: ['./body-ibge.component.scss']
})
export class BodyIbgeComponent implements OnInit {

  cidades$ = new Observable<Municipios[]>();

  constructor(private ibgeService: ApiIbgeMunicipiosService) { }

  ngOnInit(): void {
    this.loadMunicipiosByUF('SC');
  }

  loadMunicipiosByUF(event: any){
    const uf = (event.target as HTMLSelectElement)?.value;
    console.log(uf);
    this.cidades$ = this.ibgeService.getCidadeById(uf);
    this.ibgeService
        .getCidadeById(uf)
        .subscribe(
        (response) => {
          console.log(response)
        }
        );
  }

}
