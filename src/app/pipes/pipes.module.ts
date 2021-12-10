import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListPipe} from './list.pipe';

@NgModule({
    declarations: [ListPipe],
    exports: [ListPipe],
    imports: [CommonModule],
})
export class PipesModule {}
