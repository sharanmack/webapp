import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ENV } from 'src/environments/environment';

@Component({

  selector: 'app-register',

  templateUrl: './register.component.html',

  styleUrls: ['./register.component.css']

})

export class RegisterComponent {
  goBack(): void {
    window.history.back();
  }
  endpoint = '/register';
  domain: string;
  valid: boolean = true;

  constructor(private router: Router, private http: HttpClient) {
    this.domain = ENV.apiUrl
  }

 register(f:any){
  const userData = {
    phone: f.value.phone,
    pass: f.value.pass,
    naming : f.value.naming,
    
  };
  console.log(userData);

  this.http.post(`${this.domain}${this.endpoint}`, userData).subscribe(
    (response: any) => {
      alert("Your Data Is Registered")
      if (confirm("Do you want to want to go to login page")){
        this.router.navigate(['/login'])
      }
     console.log(response.message)
    },
    (error) => {
      console.error('ERROR', error);
    }
  );
}
 }
