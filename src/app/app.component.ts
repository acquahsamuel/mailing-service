import { Component } from "@angular/core";
import { WikipediaService } from "./shared/services/wikipedia.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  pages = [];

  constructor(public wikipedia: WikipediaService) {}

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
    });
  }


  posts = [
    {
      title: "Neat tree",
      imageUrl: "assets/images/products/imags.png",
      content: "This is swing on the lorem on engineering and life",
      username: "username",
    },
    {
      title: "Freee winter",
      imageUrl: "assets/images/products/imags.png",
      content: "This is swing demo of testing account and cleaning",
      username: "username",
    },
    {
      title: "Closed cyber",
      imageUrl: "assets/images/products/imags.png",
      content:
        "This is swing on cleaning and learning of cyber space of engineer",
      username: "username",
    },
  ];
}
