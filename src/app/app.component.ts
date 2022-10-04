import { Component, OnInit,DoCheck, EventEmitter, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'myApp';
  loggedIn = new BehaviorSubject<boolean>(false);
  isSignedIn = false;
  constructor(
    public router: Router,
    public firebaseService: FirebaseService,
    public afAuth: AngularFireAuth
  ) {
    
  }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) this.isSignedIn = true;
    else this.isSignedIn = false;
    
  }
  
  ngDoCheck(): void {
    console.log("isloggedin", this.isSignedIn)

  }

  async onSignUp(email: string, password: string) {
    await this.firebaseService.signup(email, password);
    if (this.firebaseService.isLoggedIn) this.isSignedIn = true;
  }

  async onSignIn(email: string, password: string) {
    await this.firebaseService.signin(email, password);
    if (this.firebaseService.isLoggedIn) this.isSignedIn = true;
  }

  handleLogout() {
    this.isSignedIn = false;
  }
  
  logOut() {
    return this.afAuth.signOut().then(() => {
      window.alert('Logged out!');
      this.isSignedIn = false;
    });
  }
}
