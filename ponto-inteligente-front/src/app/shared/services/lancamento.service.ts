import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';

import { Lancamento } from '../models';
import { HttpUtilService } from './http-util.service';

@Injectable()
export class LancamentoService {

  private readonly PATH: string = 'lancamentos';
  private readonly PATH_ULTIMO_LANC = '/funcionario/{funcionarioId}/ultimo';
    private readonly PATH_LANCAMENTOS = '/funcionario/{funcionarioId}';
  private readonly PATH_TODOS_LANC = '/funcionario/{funcionarioId}/todos';

  constructor(
  	private http: HttpClient,
  	private httpUtil: HttpUtilService) { }

  buscarUltimoTipoLancado(): Observable<any> {
    return this.http.get(
        env.baseApiUrl + this.PATH + 
          this.PATH_ULTIMO_LANC.replace(
            '{funcionarioId}', this.httpUtil.obterIdUsuario()),
        this.httpUtil.headers()
    );
  }

  cadastrar(lancamento: Lancamento): Observable<any> {
    console.log(JSON.stringify(lancamento));
  	return this.http.post(
  	  	env.baseApiUrl + this.PATH, 
  	  	lancamento,
  	  	this.httpUtil.headers()
  	);
  }

  listarTodosLancamentos(): Observable<any> {
    return this.http.get(
        env.baseApiUrl + this.PATH + 
          this.PATH_TODOS_LANC.replace(
            '{funcionarioId}', this.httpUtil.obterIdUsuario()),
        this.httpUtil.headers()
    );
  }


}