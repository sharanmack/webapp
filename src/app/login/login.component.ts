import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ENV} from 'src/environments/environment';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  endpoint = '/login';
  domain: string;

  valid: boolean = true;

  constructor(private router: Router, private http: HttpClient,private loginservice : LoginService) {
    this.domain = ENV.apiUrl
  }

  ngOnInit(): void {}

  showRegistrationForm() {}

  login(f: any) {
    this.loginservice.setDataArray(f.value.phone)
    const userData = {
      phone: f.value.phone,
      pass: f.value.pass
    };
    console.log(userData);

    this.http.post(`${this.domain}${this.endpoint}`, userData).subscribe(
      (response: any) => {
        this.valid = response.userExists;
        if (response.userExists) {
          localStorage.setItem('userEmail', f.value.phone);
          this.router.navigate(['/about']);
        } else {
          console.log("USER DOES NOT EXIST");
        }
      },
      (error) => {
        console.error('Login failed:', error);
        alert("LOGIN FAILED")
      }
    );
  }
}
