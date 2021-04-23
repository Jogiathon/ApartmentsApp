import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IPropertyBase } from 'src/app/model/ipropertybase';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm;
  @ViewChild('formTabs') formTabs!: TabsetComponent;

  //Will come from masters
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfunished']

  propertyView: IPropertyBase = {
    Id: 0,
    Name: "",
    Price: "",
    SellRent: 0,
    PType: "",
    FType: "",
    BHK: 0,
    BuiltArea: 0,
    City: "",
    RTM: 0,
    Image: "",
  };

  constructor(private router: Router) { }

  ngOnInit() {

    setTimeout(() => {
      //this.addPropertyForm.controls['Name'].setValue('Default Value');
    });
  }

  onBack()
  {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log('Congrats, form Submitted');
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
