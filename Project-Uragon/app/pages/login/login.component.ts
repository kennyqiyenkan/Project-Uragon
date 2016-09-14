import { Component, OnInit } from "@angular/core";
@Component({
  selector: "login-component",
  templateUrl: "pages/login/login.component.html",
})
export class LoginComponent implements OnInit
{
  private username = "";
  private password = "";

  ngOnInit()
  {
    console.log(`
      DEBUG LOG: LoginComponent - ngOnInit()
      `);
  }

  private login()
  {//TODO: Pull in username and password and send to server securely
    console.log(`
      DEBUG LOG: LoginComponent - login()
      username: ${this.username}
      password: ${this.password}
      `);
  }

  private success()
  {//TODO: Handle login success
    console.log(`
      DEBUG LOG: LoginComponent - success()
      `);
  }

  private failed()
  {//TODO: Handle login failure
    console.log(`
      DEBUG LOG: LoginComponent - failed()
      `);
  }

  private register()
  {//TODO: Move to Register Page
    console.log(`
      DEBUG LOG: LoginComponent - register()
      `);
  }
}
