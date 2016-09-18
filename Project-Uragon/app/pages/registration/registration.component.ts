import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
@Component({
  selector: "registration-component",
  templateUrl: "pages/registration/registration.component.html",
})
export class RegistrationComponent implements OnInit
{
  private username = "";
  private password = "";
  private confirmPassword = "";
  private email = "";
  private confirmEmail = "";

  constructor(private routerExtensions: RouterExtensions, private page: Page) {}

  ngOnInit()
  {
    console.log(`
      DEBUG LOG: RegistrationComponent - ngOnInit()
      `);
    this.page.actionBarHidden = true;
  }

  private register()
  {//TODO: Pull in username and password and send to server securely
    console.log(`
      DEBUG LOG: RegistrationComponent - login()
      username: ${this.username}
      password: ${this.password}
      email   : ${this.email}
      `);
  }

  private success()
  {//TODO: Handle login success
    console.log(`
      DEBUG LOG: RegistrationComponent - success()
      `);
  }

  private failed()
  {//TODO: Handle login failure
    console.log(`
      DEBUG LOG: RegistrationComponent - failed()
      `);
  }

  private back()
  {//TODO: Move to Register Page
    console.log(`
      DEBUG LOG: RegistrationComponent - back()
      `);
    this.routerExtensions.back();
  }
}
