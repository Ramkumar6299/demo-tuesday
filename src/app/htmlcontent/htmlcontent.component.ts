import { Component, OnInit } from '@angular/core';
import {AuthorsService} from '../authors.service';
import {ActivatedRoute} from'@angular/router'

@Component({
  selector: 'app-htmlcontent',
  templateUrl: './htmlcontent.component.html',
  styleUrls: ['./htmlcontent.component.css']
})
export class HtmlcontentComponent implements OnInit {

 
  lists;
  currentProductId
  constructor(private http:AuthorsService, private activatedRoute:ActivatedRoute) { 
    this.currentProductId = this.activatedRoute.snapshot.params.id
    this.http.getSpecificObject(this.currentProductId).subscribe(
      data=>{
        this.lists= data
        console.log(this.lists)
      },
      err => {console.log("error",err)},
      () => {}
    )
    
  }

  ngOnInit(): void {
  }

}
