import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/services/news.service';


interface IArticle {
  date? : string;
  author : string;
  title : string;
  content : string;
  description : string;
  url : string;
  urlToImage : string;
  publishedAt : string;
  
}


@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit {
  
  articles! : any;

  constructor(
    private newService : NewsService
    ) { }

  ngOnInit(): void {
    this.getAllNews();
  }



  getAllNews(){
    this.newService.getAllNews().subscribe(( xresponse:any) =>{
      console.log(xresponse);
      this.articles = xresponse?.articles;
    });
  }

  renderDescription(template : any) {
    // template.innerHTML = this.articles.content;   
  }


}
