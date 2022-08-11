import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {NewsComponent} from "./components/news/news.component";
import {NewsDetailComponent} from "./components/news/news-detail/news-detail.component";
// import {BoxNewsDetailComponent} from "./components/box-news-detail/box-news-detail.component";

const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: NewsDetailComponent },
  { path: 'news', component:NewsComponent},
  { path: 'news-international', component:NewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
