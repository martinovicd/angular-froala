import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-froala';
  public options = {
    events:{
      initialized(){
        console.log('Hello Froala!')
      }
    }
  }
}
