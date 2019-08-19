import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  userProfile: object = {
    name: "Amber Metz",
    contactInfo: "ambermetz88@gmail.com",
    bio:
      "Front-End Developer with a background in Client Services and working at start-ups. I believe in the power of design to change the world and looking at problems in a new way."
  };

  constructor(private router: Router) {}

  getUserProfile() {
    return { ...this.userProfile };
  }

  setUserProfile(name: string, contactInfo: string, bio: string): void {
    this.userProfile = {
      name: name,
      contactInfo: contactInfo,
      bio: bio
    };
    this.router.navigate(["profile"]);
  }

  editProfile() {
    this.router.navigate(["edit"]);
  }
}
