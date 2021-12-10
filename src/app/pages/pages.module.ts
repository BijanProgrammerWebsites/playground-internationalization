import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {CollatorComponent} from './collator/collator.component';

@NgModule({
    declarations: [HomeComponent, CollatorComponent],
    imports: [CommonModule],
})
export class PagesModule {}
