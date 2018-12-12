import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment';

import { CadastroPj } from '../';

@Injectable()
export class CadastrarPjService {

  private readonly PATH: string = 'api/cadastrar-pj';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPj: CadastroPj): Observable<any> {
  	  return this.http.post(env.baseUrl + this.PATH, cadastroPj);
  }

}