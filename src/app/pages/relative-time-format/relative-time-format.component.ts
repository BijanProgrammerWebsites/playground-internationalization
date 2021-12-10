import {Component} from '@angular/core';
import {VariantCard} from '../../models/variant-card';

@Component({
    selector: 'app-relative-time-format',
    templateUrl: './relative-time-format.component.html',
    styleUrls: ['./relative-time-format.component.scss'],
})
export class RelativeTimeFormatComponent {
    // -------------------------------------------------------------------------------------------------------- original
    public original = -1;

    // ---------------------------------------------------------------------------------------------------------- format
    // @ts-ignore
    public enDefault = new Intl.RelativeTimeFormat('en').format(this.original, 'year');
    // @ts-ignore
    public faDefault = new Intl.RelativeTimeFormat('fa').format(this.original, 'year');

    // ----------------------------------------------------------------------------------------------------------- cards
    public cards: VariantCard[] = [
        {
            key: 'numeric',
            variants: ['always', 'auto'],
        },
        {
            key: 'style',
            variants: ['narrow', 'short', 'long'],
        },
    ];

    public format(locales: string | string[], card: VariantCard, variant: string): string {
        const optionsObject: any = {
            ...(card.staticOptions ?? {}),
            [card.key]: variant,
        };

        const value = card.key === 'numeric' ? 1 : -1;
        const unit = card.key === 'numeric' ? 'day' : 'month';

        // @ts-ignore
        return new Intl.RelativeTimeFormat(locales, optionsObject).format(value, unit);
    }
}
