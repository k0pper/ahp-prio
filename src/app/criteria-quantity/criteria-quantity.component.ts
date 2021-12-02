import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-criteria-quantity',
  templateUrl: './criteria-quantity.component.html',
  styleUrls: ['./criteria-quantity.component.scss']
})
export class CriteriaQuantityComponent implements OnInit {
  quantity = new FormControl(2);
  
  constructor() { }

  ngOnInit(): void {
  }

}
