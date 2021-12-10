import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {CollatorComponent} from './collator/collator.component';
import {PipesModule} from '../pipes/pipes.module';
import {DateTimeFormatComponent} from './date-time-format/date-time-format.component';

@NgModule({
    declarations: [HomeComponent, CollatorComponent, DateTimeFormatComponent],
    imports: [CommonModule, PipesModule],
})
export class PagesModule {}
