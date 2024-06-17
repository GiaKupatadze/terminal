import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar1',
  templateUrl: './nav-bar1.component.html',
  styleUrl: './nav-bar1.component.css'
})
export class NavBar1Component {
  clickgeo(){
    alert("geo"),
    alert("eng")
  }
}
