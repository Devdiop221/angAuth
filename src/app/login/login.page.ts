import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';
import { ServefirebaseService } from '../servefirebase.service';
import {user} from "@angular/fire/auth";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LoginPage implements OnInit {
  constructor(
    public router: Router,
    public servefirebase: ServefirebaseService
  ) { }

  ngOnInit() {
  }

  LoginWithEmailAndPassword(email: string, password: string) {
    this.servefirebase.LoginWithEmailAndPassword(email, password)
    .then((res => {
    console.log(res);
    if (res.user?.uid) {
    this.servefirebase.Details({uid:res.user?.uid}).subscribe(res => {
    console.log(res);
    //alert("BIEVENUE" + res['nom']);
    },
      err => {
      console.log(err);
      alert("ERREUR" + err);
       }
        );
       }
      }
    ))
  }





}
