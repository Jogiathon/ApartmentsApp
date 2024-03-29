import { registerLocaleData } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IPropertyBase } from 'src/app/model/ipropertybase';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  //@ViewChild('Form') addPropertyForm!: NgForm;
  @ViewChild('formTabs') formTabs!: TabsetComponent;

  addPropertyForm!: FormGroup;

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
    BuiltArea: "",
    City: "",
    RTM: 0,
    Image: "",
  };

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    setTimeout(() => {
      //this.addPropertyForm.controls['Name'].setValue('Default Value');
    });

    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      SellRent: [0, Validators.required],
      PType: ["", Validators.required],
      FType: ["", Validators.required],
      Name: ["", Validators.required],
      Price: ["", Validators.required],
      BuiltArea: [0, Validators.required],
      BHK: [0, Validators.required]
    })
  }

  onBack()
  {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log('Congrats, form Submitted');
    console.log('SellRent=' + this.addPropertyForm.value.SellRent);
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
