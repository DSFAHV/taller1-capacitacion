import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//* Nuestros componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';
import { Error404Component } from './pages/error404/error404.component';
import { CardExampleComponent } from './components/card-example/card-example.component';
import { ContainerPhotosComponent } from './pages/container-photos/container-photos.component';
import { GaleryComponent } from './pages/galery/galery.component';
import { PhotoViewComponent } from './components/photo-view/photo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserComponent,
    UsersComponent,
    Error404Component,
    CardExampleComponent,
    ContainerPhotosComponent,
    GaleryComponent,
    PhotoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
