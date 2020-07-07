import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlcontentComponent } from './htmlcontent/htmlcontent.component';
import { HtmlComponent } from './html/html.component';


const routes: Routes = [
  {
    path:"htmlcontent/:id",
    component:HtmlcontentComponent
  },
  {
    path:"",
    component:HtmlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
