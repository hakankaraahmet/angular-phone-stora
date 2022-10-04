import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Router } from '@angular/router';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'myApp';
  isSignedIn = false;
  constructor(
    public router: Router,
    public firebaseService: FirebaseService,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) this.isSignedIn = true;
    else this.isSignedIn = false;
  }

  async onSignUp(email: string, password: string) {
    await this.firebaseService.signup(email, password);
    if (this.firebaseService.isLoggedIn) this.isSignedIn = true;
  }

  async onSignIn(email: string, password: string) {
    await this.firebaseService.signin(email, password);
    if (this.firebaseService.isLoggedIn) this.isSignedIn = true;
  }

  logOut() {
    return this.afAuth.signOut().then(() => {
      if (confirm('Are you sure you want to Log out ?')) {
        this.isSignedIn = false;
      }
    });
  }
}
