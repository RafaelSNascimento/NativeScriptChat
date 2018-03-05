import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { TextField } from "ui/text-field";
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonFunctionsService } from "../../services/common-functions-service/common-functions.service";
import { SingletonService } from "../../services/singleton-service/singleton.service";
import { alert } from "tns-core-modules/ui/dialogs/dialogs";
@Component({
  selector: "my-app",
  templateUrl: "./pages/login/login.html",
  styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
})
export class LoginComponent implements OnInit {
    @ViewChild("container") container: ElementRef;
    @ViewChild("main") main: ElementRef;
    loginForm : FormGroup;
    registerForm : FormGroup;
  isLoggingIn = true;
  constructor(public router: Router, fb : FormBuilder, public cfs : CommonFunctionsService, public singleton : SingletonService, private page: Page) {
    
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    
    this.registerForm = fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void 
  {
    this.page.actionBarHidden = true;
    this.page.backgroundColor = "#e74c3c";
    this.main.nativeElement.backgroundColor = "white";
  }

  submit()
  {
    if (this.isLoggingIn && this.loginForm.valid)
    {
      this.login();
    } 
    else if(!this.isLoggingIn && this.registerForm.valid)
    {
      this.signUp();
    }
    else
    {
      let container = <View>this.container.nativeElement;
      container.animate({ translate: { x: -5, y: 0 }, duration: 50 })
      .then(() => container.animate({ translate: { x: 5, y: 0 } , duration: 50}))
      .then(() => container.animate({ translate: { x: -5, y: 0 }, duration: 50 }))
      .then(() => container.animate({ translate: { x: 5, y: 0 }, duration: 50 }))
      .then(() => container.animate({ translate: { x: -5, y: 0 }, duration: 50 }))
      .then(() => container.animate({ translate: { x: 5, y: 0 }, duration: 50 }))
      .then(() => container.animate({ translate: { x: -5, y: 0 }, duration: 50 }))
      .then(() => container.animate({ translate: { x: 0, y: 0 }, duration: 50 }))
      .then(() => {
        console.log("Animation finished");
      })
      .catch((e) => {
        console.log(e.message);
      });
    }
  }

  login()
  {
    this.cfs.postObserver('/api/login', '', this.loginForm.value ).subscribe(data=>
    {
      this.singleton.user = data;
      this.singleton.userLogged = data;
      this.cfs.storeToken(data.token);
      this.router.navigate(['/chat']);
    }, error =>
    {
      console.dir(error);
      alert({
        title: "Ops..",
        message: error.json()["message"],
        okButtonText: "Ok"
      });
    })
    return;
  }

  signUp() 
  {
    this.cfs.postObserver('/api/user/new', '', this.registerForm.value ).subscribe(data=>
    {
      this.singleton.user = data;
      this.singleton.userLogged = data;
      this.cfs.storeToken(data.token);
      this.router.navigate(['/chat']);
    }, error =>
    {
      alert({
        title: "Ops..",
        message: error.json()["message"],
        okButtonText: "Ok"
      });
    });
  }

  toggleDisplay() 
  {
    this.isLoggingIn = !this.isLoggingIn;
    let main = <View>this.main.nativeElement;
    main.animate({
      backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#ecf0f1"),
      duration: 200
    });
  }
}