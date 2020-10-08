import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ModifyMenu',
  templateUrl: './ModifyMenu.component.html',
  styleUrls: ['./ModifyMenu.component.css']
})
export class ModifyMenuComponent implements OnInit {

  @Input () modify:any[];
  h_menu:boolean;

  constructor() {
    this.h_menu=true;
   }

  ngOnInit() {
  }

  
  guardar(){}
}
