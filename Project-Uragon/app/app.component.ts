import { Component, OnInit } from "@angular/core";

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent implements OnInit
{
  ngOnInit()
  {
    console.log(`
      DEBUG: AppComponent - ngOnInit()
      `);
  }
}
