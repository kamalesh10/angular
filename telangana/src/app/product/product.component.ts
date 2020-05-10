import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../covid19.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  resources: any;

  constructor(service: Covid19Service) {
    this.resources = service.getResources();

   }

  ngOnInit() {
  }

}
