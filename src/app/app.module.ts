import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { RentPropertyComponent } from './property/rent-property/rent-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

const appRoutes: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'rent-property', component: RentPropertyComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-detail/:id', component: PropertyDetailComponent},
  {path: '**', component: PropertyListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
