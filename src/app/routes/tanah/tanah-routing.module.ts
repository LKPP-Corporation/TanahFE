import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TanahListComponent } from './list/list.component';
import { TanahBorangComponent } from './borang/borang.component';
import { TanahList2Component } from './list2/list2.component';
import { TanahList3Component } from './list3/list3.component';
import { TanahBorang2Component } from './borang2/borang2.component';

const routes: Routes = [
  { path: '', redirectTo: 'list3' },
  { path: 'list', component: TanahListComponent },
  { path: 'borang', component: TanahBorangComponent },
  { path: 'list2', component: TanahList2Component },
  { path: 'list3', component: TanahList3Component },
  { path: 'borang2', component: TanahBorang2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TanahRoutingModule {}
