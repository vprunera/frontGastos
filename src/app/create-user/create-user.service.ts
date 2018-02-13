import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";

import { UserModel } from './../model/user.model';
import { RestResponse } from './../model/restResponse.model';
import {  } from "module";
@Injectable()
export class CreateUserService {

  constructor(private http:HttpClient) { }

  /**
   * Metodo que valida campos obligatorios
   * @param user 
   */
  public validate(user: UserModel):boolean{
    let isValid = true;

    if(!user.nombre){
      isValid = false;
    }

    return isValid;
  }

  public saveOrUpdate(user: UserModel): Observable<RestResponse>{
    return this.http.post<RestResponse>("http://localhost:8080/users/",JSON.stringify(user));
  }
}
