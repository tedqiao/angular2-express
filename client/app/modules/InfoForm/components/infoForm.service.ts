/**
 * Created by jianqiao on 10/18/16.
 */


import {Injectable} from '@angular/core';
import {Http, Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class infoFormService{

    private _baseUrl:string = 'api/';

    constructor(private _http:Http){

    }

    public submit(data){
        let bodyString = JSON.stringify(data); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        return this._http.post(this._baseUrl+'email',data,options).map(data=>data.json());
    }


}