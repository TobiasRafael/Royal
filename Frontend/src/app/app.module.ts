
import { HousingService } from './services/housing.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyComponent } from './property/property.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';



const appRoutes: Routes = [
  { path: '', component: PropertyListComponent, data: {navbar: true} },
  { path: 'rent-property', component: PropertyListComponent, data: { navbar: true } },
  { path: 'add-property', component: AddPropertyComponent, data: { navbar: true } },
  { path: 'property-detail/:id', component: PropertyDetailComponent, data: { navbar: true } },
  { path: '404', component: NotFoundComponent, data: {navbar: false} },
  { path: '**', redirectTo: '/404', data: {navbar: false}}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    NotFoundComponent,
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
