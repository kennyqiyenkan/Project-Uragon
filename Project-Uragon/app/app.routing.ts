import { LoginComponent } from "./pages/login/login.component";
import { RegistrationComponent } from "./pages/registration/registration.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "registration", component: RegistrationComponent }
];

export const navigatableComponents = [
  LoginComponent,
  RegistrationComponent
];
