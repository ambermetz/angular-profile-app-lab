import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  currentUser: object;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.currentUser = this.profileService.getUserProfile();
  }

  userProfile(form: any) {
    this.profileService.setUserProfile(
      form.value.name,
      form.value.contactInfo,
      form.value.bio
    );
  }
}
