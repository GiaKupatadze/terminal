import { Component } from '@angular/core';
import { Empty } from '../interface/interface.zoomer';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.css'
})
export class Home2Component {
  zoomers!: Empty
  zoomers1!:Empty
  constructor(private data:DataService){
    data.getZummer().subscribe(data =>{
      this.zoomers = data;
    })
    this.giveTab()
  }
  giveTab(){
    this.data.getZummer1().subscribe((data)=>{
      this.zoomers1 = data
    })
  }
}
