import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private _http:HttpClient) { }

  dameUsuarios(){
    return this._http.get('http://127.0.0.1:8000/api/dameUsuarios');
  }
}
