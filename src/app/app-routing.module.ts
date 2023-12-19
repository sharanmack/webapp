import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebappComponent } from './webapp/webapp.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './components/card/card.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegisterComponent } from './register/register.component';
import { UplodecarComponent } from './uplodecar/uplodecar.component';
import { CarlistComponent } from './carlist/carlist.component';
import { CartComponent } from './cart/cart.component';

// const routes: Routes = [
//   // { path: 'card', component: CardComponent },
//   { path: 'about', component: CardComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
// ];


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'about', component: CardComponent },
  { path: 'login', component: LoginComponent },
    { path: 'contact', component: ContactComponent },
    {path :'gallery',component:GalleryComponent},
    {path : 'register',component:RegisterComponent},
    {path : 'uplodecar' , component:UplodecarComponent},
    {path : 'webapp',component:WebappComponent},
    {path : 'carlist',component:CarlistComponent  },
    {path : 'cart',component:CartComponent}
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}