import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditComponent } from "./edit/edit.component";
import { ProfileComponent } from "../app/profile/profile.component";

const routes: Routes = [
  { path: "profile", component: ProfileComponent },
  { path: "edit", component: EditComponent },
  { path: "**", redirectTo: "profile" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
