import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private loggedIn = new BehaviorSubject<boolean>(false);
  private user = new BehaviorSubject<string>('');

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isUser() {
    return this.user.asObservable();
  }



  login(userType: string) {
    this.loggedIn.next(true);
    this.user.next(userType);
  }

  logout() {
    this.loggedIn.next(false);
    this.user.next('');
  }
}
