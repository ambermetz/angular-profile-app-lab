import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { EditComponent } from "./edit/edit.component";
import { ProfileService } from "./profile.service";

@NgModule({
  declarations: [AppComponent, ProfileComponent, EditComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
