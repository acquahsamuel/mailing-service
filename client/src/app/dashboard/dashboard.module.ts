import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { MaterialModule } from "src/app/material.module";

@NgModule({
  declarations: [DashboardComponent, NavbarComponent],
  imports: [CommonModule, MaterialModule],
})
export class DashboardModule {}
