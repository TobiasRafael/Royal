
import { HousingService } from './services/housing/housing.service';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';



const appRoutes: Routes = [
  { path: '', component: PropertyListComponent, data: { navbar: true } },
  { path: 'rent-property', component: PropertyListComponent, data: { navbar: true } },
  { path: 'add-property', component: AddPropertyComponent, data: { navbar: true } },
  { path: 'property-detail/:id', component: PropertyDetailComponent, data: { navbar: true } },
  { path: 'user/login', component: UserLoginComponent, data: { navbar: true } },
  { path: 'user/register', component: UserRegisterComponent, data: {navbar: true }},
  { path: '404', component: NotFoundComponent, data: { navbar: false } },
  { path: '**', redirectTo: '/404', data: { navbar: false } }
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
    UserRegisterComponent,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
