import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


export class User {

    name: string;
    email: string;

    constructor(name: string, email: string){
        
        this.name = name;
        this.email = email;

    }

}  // end of user class

@Injectable()
export class AuthService {
  
  currentUser : User;


public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User('thierno', 'tadiall1@gmail.com');
        observer.next(access);
        observer.complete();
      });
    }
  }  // end of login



  public register(credentials){
          if(credentials.email===null || credentials.password===null){

             return Observable.throw("please enter your credentials");

          }else{
            // sending credentials to backend
            return Observable.create(observer =>{
               
               observer.next(true);
               observer.complete();

            });
          }

  }  // end of register

  public getUserInfo() : User{ // inheritting from the user class

    return this.currentUser;
  } // end of getUser info

  public logout(){
        return Observable.create(observer =>{
             
             observer.next(true);
             observer.complete();

        }); 

  }  // end of logout 

}
