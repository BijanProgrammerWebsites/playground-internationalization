import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {CollatorComponent} from './collator/collator.component';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
    declarations: [HomeComponent, CollatorComponent],
    imports: [CommonModule, PipesModule],
})
export class PagesModule {}
