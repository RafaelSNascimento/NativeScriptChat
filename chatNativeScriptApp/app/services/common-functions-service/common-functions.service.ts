import { Injectable, NgZone } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, FormArray } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { SingletonService } from '../../services/singleton-service/singleton.service';
require( "nativescript-localstorage" );
import { alert, confirm } from "ui/dialogs";
import * as utilModule from "utils/utils";
import * as fs from "tns-core-modules/file-system";
import * as platformModule from "tns-core-modules/platform";
declare var android :any;

@Injectable()
export class CommonFunctionsService {
  constructor(private http: Http, public singleton: SingletonService, public ngZone: NgZone) {
    console.log("intializing cfs...");
  }

  validateAllFormFields(control: AbstractControl) {
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
      Object.keys(control.controls).forEach((field: string) => {
      const groupControl = control.get(field);
      this.validateAllFormFields(groupControl);
      });
      } else if (control instanceof FormArray) {
      const controlAsFormArray = control as FormArray;
      controlAsFormArray.controls.forEach((arrayControl: AbstractControl) => this.validateAllFormFields(arrayControl));
    }
  }

  public postObserver(url:string="", token:string = "", content:any =null, form: boolean = false){
		let header = new Headers();
    if(!form) header.append('Content-Type', "application/json");
  
		if(token) header.append('authorization', token);
    let options = new RequestOptions({headers: header});
		return this.http.post(this.singleton.serverUrl+url, content, options).map((res:Response) => res.json());
  }
  
	public getObserver(url:string="", token:string = ""){
		let header = new Headers();
		if(token) header.append('authorization', token);
		let options = new RequestOptions({headers: header});
		return this.http.get(this.singleton.serverUrl+url, options).map((res:Response) => res.json());
  }
  
  public storeToken(token: string)
  {
    localStorage.setItem('token', token);
  }

  public getToken() : string
  {
    return localStorage.getItem('token');
  }

  public orderByProperty(value: any[], property: any,): any{
    if (!value || !value.length) {
      return value;
    }
    value.sort((first: any, second: any): number => {
        return (first[property] === second[property]) ? 0 : first[property] ? -1 : 1;
    });
    return value;
  }
}
