import { Component } from '@angular/core';
import { ContactService } from './app.test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string;
  constructor(private service: ContactService){
    this.service.getCall().subscribe(res=>{
      this.title = res["text"];
    });
  }
}
