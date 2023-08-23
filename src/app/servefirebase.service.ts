import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { AngularFireAuth} from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class ServefirebaseService {

  constructor(
    public auth: AngularFireAuth,
    public firestore: AngularFirestore
  ) { }

  LoginWithEmailAndPassword(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  Details(data: any) {
    return this.firestore.collection('users').doc(data.uid).valueChanges();
  }
}
