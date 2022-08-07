import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NewsComponent} from "./components/news/news.component";
import {BoxNewsDetailComponent} from "./components/box-news-detail/box-news-detail.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'news/:id',component:BoxNewsDetailComponent},
  { path: 'news', component:NewsComponent},
  { path: 'news-international', component:NewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
