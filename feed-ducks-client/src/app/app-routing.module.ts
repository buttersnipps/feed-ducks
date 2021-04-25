import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedDucksDataComponent } from './feed-ducks-data/feed-ducks-data.component';
import { FeedDucksFormComponent } from './feed-ducks-form/feed-ducks-form.component';

const routes: Routes = [
  { path: '',     component: FeedDucksFormComponent},
  { path: 'allData',     component: FeedDucksDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }