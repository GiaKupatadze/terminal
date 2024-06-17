import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  change(value: boolean): void {
    console.log(value);
  }


}

