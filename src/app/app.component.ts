import { Component, OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Router } from '@angular/router';
import { FirebaseService } from './core/services/firebase.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'iphone-store';
  isSignedIn = false;
  isMember = false;
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

  handleMemberLogin(){
    this.isMember = !this.isMember;
  }


  async logOut() {
    if (confirm('Are you sure you log out ?')){
      await this.firebaseService.logout();
       this.isSignedIn = false;
    }
  }
}
