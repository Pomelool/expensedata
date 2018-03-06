import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ContactService {
    constructor(private http: HttpClient){

    }

    public getCall(){
        return this.http.get("/api/contacts")
    }
    
}