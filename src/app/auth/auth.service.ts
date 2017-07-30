import { Injectable } from '@angular/core';
import {User} from './user-interface';



@Injectable()
export class AuthService {

  constructor() { }

  signUp(user: User){
    //auth.createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
      // Handle Errors.

      //var errorMessage = error.message;
      //console.log(errorMessage);
      // ...
    //});
  }

}
