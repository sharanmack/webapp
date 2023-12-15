import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private maillogin: string = '';

  constructor() {}

  getDataArray(): string {
    return this.maillogin;
  }

  setDataArray(data: string): void {
    this.maillogin = data;
  }
 
}
