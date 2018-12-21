import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { NewsComponent } from './news/news.component';



const routes: Routes = [
{
  path: '',
  component: ListingComponent
},
{
  path:'news',
  component: NewsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
