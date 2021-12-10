import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {NavigationComponent} from './navigation/navigation.component';
import {IconsModule} from '../icons/icons.module';
import {VariantCardComponent} from './variant-card/variant-card.component';

@NgModule({
    declarations: [HeaderComponent, NavigationComponent, VariantCardComponent],
    imports: [CommonModule, RouterModule, IconsModule],
    exports: [HeaderComponent, NavigationComponent, VariantCardComponent],
})
export class ComponentsModule {}
