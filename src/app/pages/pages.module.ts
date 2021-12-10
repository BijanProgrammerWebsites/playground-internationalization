import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {CollatorComponent} from './collator/collator.component';
import {PipesModule} from '../pipes/pipes.module';
import {DateTimeFormatComponent} from './date-time-format/date-time-format.component';
import {ListFormatComponent} from './list-format/list-format.component';
import {ComponentsModule} from '../components/components.module';
import {NumberFormatComponent} from './number-format/number-format.component';

@NgModule({
    declarations: [
        HomeComponent,
        CollatorComponent,
        DateTimeFormatComponent,
        ListFormatComponent,
        NumberFormatComponent,
    ],
    imports: [CommonModule, PipesModule, ComponentsModule],
})
export class PagesModule {}
