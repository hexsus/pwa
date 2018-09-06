import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
// import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          of(null);
        }
      }));
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAthLogin(provider);
  }

  private oAthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider).then(credentials => {
      this.updateUserData(credentials.user);
    });
  }

  updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      displayName: user.displayName
    };

    return userRef.set(data);
  }
}
