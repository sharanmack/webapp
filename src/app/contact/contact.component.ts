import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ENV } from 'src/environments/environment';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  endpoint = '/sendemail';
  domain: string;
  loading = false;
  
  constructor(private router: Router, private http: HttpClient) {
    this.domain = ENV.apiUrl
  }
  formData: any = {};
  
  onSubmit(f:any) {
    this.loading = true;
    const userData = {
      name: f.value.Name,
      phone: f.value.Phone,
      email : f.value.Email,
      message  : f.value.Message
    };
    
    console.log('Form submitted:', userData);
    this.http.post(`${this.domain}${this.endpoint}`, userData).subscribe(
      (response: any) => {
        if (response.emailsent) {
          this.loading = false;
          alert('You will be contacted Soon');
        }
        else{
          this.loading = false;
          alert('Sorry Email Not Sent');
        }
      },

    ); 
  }

}