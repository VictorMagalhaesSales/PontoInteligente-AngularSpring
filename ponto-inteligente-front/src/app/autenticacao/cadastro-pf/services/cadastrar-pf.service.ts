import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment';

import { CadastroPf } from '../';

@Injectable()
export class CadastrarPfService {

  private readonly PATH: string = 'api/cadastrar-pf';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPf: CadastroPf): Observable<any> {
  	  return this.http.post(env.baseUrl + this.PATH, cadastroPf);
  }

}
