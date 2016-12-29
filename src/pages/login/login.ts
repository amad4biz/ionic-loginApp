import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService} from '../../providers/auth-service';
import { RegisterPage} from '../register/register';
import {HomePage} from '../home/home';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

      loading: Loading;
      registerCredentials = {email: '', password: ''};

  constructor(public navCtrl: NavController, private auth : AuthService, private alertCtrl : AlertController, private loadingCtrl: LoadingController) {}

  public createAccount(){

    this.navCtrl.push(RegisterPage);

  } // end of create an account

  public login(){

    this.showLoading();

    this.auth.login(this.registerCredentials).subscribe(allowed => {

         if(allowed){
           setTimeout(()=> {
              
              this.loading.dismiss();
              this.navCtrl.setRoot(HomePage);

           });

         }else {
           this.showError("Access denied");
         }

    }, error =>{
       
       this.showError(error);

    });
  } // end of login
   
 showLoading(){

      this.loading = this.loadingCtrl.create({
        content: 'Please Wait...'
      });

      this.loading.present();
    }

   showError(text){

     setTimeout(()=>{

          this.loading.dismiss();

     });

     let alert = this.alertCtrl.create({
        title: 'fail',
        subTitle: text,
        buttons: ['OK']

     });

     alert.present(prompt);

   }
     

  }




