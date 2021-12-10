import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {NavigationComponent} from './navigation/navigation.component';
import {IconsModule} from '../icons/icons.module';

@NgModule({
    declarations: [HeaderComponent, NavigationComponent],
    imports: [CommonModule, RouterModule, IconsModule],
    exports: [HeaderComponent, NavigationComponent],
})
export class ComponentsModule {}
