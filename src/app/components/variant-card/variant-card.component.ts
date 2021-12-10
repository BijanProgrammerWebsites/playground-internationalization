import {Component, Input} from '@angular/core';
import {VariantCard} from '../../models/variant-card';

@Component({
    selector: 'app-variant-card',
    templateUrl: './variant-card.component.html',
    styleUrls: ['./variant-card.component.scss'],
})
export class VariantCardComponent {
    @Input() public card!: VariantCard;
    @Input() public format!: Function;
}
