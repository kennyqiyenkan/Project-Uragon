import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "login-component",
    templateUrl: "pages/login/login.component.html",
})
export class LoginComponent implements OnInit
{
    private email = "";
    private password = "";

    constructor(private routerExtensions: RouterExtensions) {}

    ngOnInit()
    {
      console.log(`
        DEBUG: LoginComponent - ngOnInit()
        `);
    }

    private login()
    {
      console.log(`
        DEBUG: LoginComponent - login()
        email    : ${this.email}
        password : ${this.password}
        `);
    }

    private success()
    {
      console.log(`
        DEBUG: LoginComponent - success()
        `);
    }

    private failure()
    {
      console.log(`
        DEBUG: LoginComponent - failure()
        `);
    }

    private register()
    {
      console.log(`
        DEBUG: LoginComponent - register()
        `);
      this.routerExtensions.navigate(["/registration"], {
        transition: {
            name: "flip",
            duration: 2000,
            curve: "linear"
        }
      });
    }
}
