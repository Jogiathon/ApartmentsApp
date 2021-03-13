import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-rent-property',
  templateUrl: './rent-property.component.html',
  styleUrls: ['./rent-property.component.scss']
})
export class RentPropertyComponent implements OnInit {
  SellRent = 2;
  properties: Array<IProperty> = [];

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit() {
    console.log(this.route.snapshot.toString());
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=>{
      this.properties=data;
      console.log(data);
    }, error => {
      console.log('httperror:');
      console.log(error);
    }
  )
  }

}
