import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  list: Array<any>= [];
  maxPost: number= 5;

  constructor(private httpService: AuthorsService){
    this.httpService.getObjects().subscribe(
      (data)=>{
        this.list= data;
      },
      err=>{
        console.log("error",err)
      },
      ()=>{
      
      }
    )
  }


  increasePost(){
    this.maxPost += 5;
  }

  ngOnInit(): void {
  }

}
