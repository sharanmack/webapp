import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { AppComponent } from './app.component';   
import { WebappComponent } from './webapp/webapp.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/intro/intro.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { FormsModule } from '@angular/forms';

import { GalleryComponent } from './gallery/gallery.component';
import { RegisterComponent } from './register/register.component';

import { HttpClient,HttpClientModule } from '@angular/common/http';
import { UplodecarComponent } from './uplodecar/uplodecar.component';
import { CarlistComponent } from './carlist/carlist.component';
import { CarimageComponent } from './carimage/carimage.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    AppComponent,
    WebappComponent,
    NavbarComponent,
    IntroComponent,
    CardComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,

    GalleryComponent,
    RegisterComponent,
    UplodecarComponent,
    CarlistComponent,
    CarimageComponent,
    
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




   