import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TanahRoutingModule } from './tanah-routing.module';
import { TanahListComponent } from './list/list.component';
import { TanahBorangComponent } from './borang/borang.component';
import { TanahList2Component } from './list2/list2.component';
import { TanahList3Component } from './list3/list3.component';
import { TanahBorang2Component } from './borang2/borang2.component';

const COMPONENTS = [TanahListComponent, TanahBorangComponent, TanahList2Component, TanahList3Component, TanahBorang2Component];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    TanahRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class TanahModule { }
