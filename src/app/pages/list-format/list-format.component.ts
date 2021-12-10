import {Component} from '@angular/core';
import {VariantCard} from '../../models/variant-card';

@Component({
    selector: 'app-list-format',
    templateUrl: './list-format.component.html',
    styleUrls: ['./list-format.component.scss'],
})
export class ListFormatComponent {
    // -------------------------------------------------------------------------------------------------------- original
    public original = ['بیژن', 'رضا', 'علی', 'علیرضا'];

    // ---------------------------------------------------------------------------------------------------------- format
    // @ts-ignore
    public enDefault = new Intl.ListFormat('en').format(this.original);
    // @ts-ignore
    public faDefault = new Intl.ListFormat('fa').format(this.original);

    // ----------------------------------------------------------------------------------------------------------- cards
    public cards: VariantCard[] = [
        {
            key: 'type',
            variants: ['conjunction', 'disjunction', 'unit'],
        },
        {
            key: 'style',
            variants: ['narrow'],
            staticOptions: {
                type: 'unit',
            },
            footnote: 'The "type" option has been set to "unit".',
        },
        {
            key: 'style',
            variants: ['short', 'long'],
        },
    ];

    public format(locales: string | string[], card: VariantCard, variant: string): string {
        const optionsObject: any = {
            ...(card.staticOptions ?? {}),
            [card.key]: variant,
        };

        // @ts-ignore
        return new Intl.ListFormat(locales, optionsObject).format(this.original);
    }
}
