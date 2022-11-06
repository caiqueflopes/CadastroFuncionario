import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'environments/environment';
import { CadFunc } from '../models/cadastro-func';

@Injectable({
  providedIn: 'root'
})
export class CadastroFuncService {
  private url="CadastroFuncionario"
  constructor(private http:HttpClient) { }

  public getFuncionarios(): Observable<CadFunc[]>{
    return this.http.get<CadFunc[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateFuncionario(funcionario:CadFunc): Observable<CadFunc[]>{
    return this.http.put<CadFunc[]>(`${environment.apiUrl}/${this.url}`,funcionario);
  }

  public createFuncionario(funcionario:CadFunc): Observable<CadFunc[]>{
    return this.http.post<CadFunc[]>(`${environment.apiUrl}/${this.url}`,funcionario);
  }

  public deleteFuncionario(funcionario:CadFunc): Observable<CadFunc[]>{
    return this.http.delete<CadFunc[]>(`${environment.apiUrl}/${this.url}/${funcionario.id}`);
  }
}
