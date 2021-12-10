import {Component} from '@angular/core';
import {VariantCard} from '../../models/variant-card';

@Component({
    selector: 'app-number-format',
    templateUrl: './number-format.component.html',
    styleUrls: ['./number-format.component.scss'],
})
export class NumberFormatComponent {
    // -------------------------------------------------------------------------------------------------------- original
    public original = 48151623.42;

    // ---------------------------------------------------------------------------------------------------------- format
    public enDefault = new Intl.NumberFormat('en').format(this.original);
    public faDefault = new Intl.NumberFormat('fa').format(this.original);

    // ----------------------------------------------------------------------------------------------------------- cards
    public cards: VariantCard[] = [
        {
            key: 'currency',
            variants: ['USD', 'EUR', 'IRR'],
            staticOptions: {
                style: 'currency',
            },
        },
        {
            key: 'currencyDisplay',
            variants: ['symbol', 'narrowSymbol', 'code', 'name'],
            staticOptions: {
                style: 'currency',
                currency: 'EUR',
            },
        },
        {
            key: 'currencySign',
            variants: ['standard', 'accounting'],
            staticOptions: {
                style: 'currency',
                currency: 'EUR',
            },
        },
        {
            key: 'notation',
            variants: ['standard', 'scientific', 'engineering', 'compact'],
        },
        {
            key: 'numberingSystem',
            variants: ['arab', 'arabext', 'fullwide', 'gujr', 'thai'],
        },
        {
            key: 'signDisplay',
            variants: ['auto', 'never', 'always', 'exceptZero'],
        },
        {
            key: 'style',
            variants: ['decimal', 'currency', 'percent', 'unit'],
            staticOptions: {
                currency: 'EUR',
                unit: 'meter-per-second',
            },
            footnotes: [
                'If "style" option is set to "currency", the "currency" option has to be present as well.',
                'If "style" option is set to "unit", the "unit" option has to be present as well.',
            ],
        },
        {
            key: 'unit',
            variants: ['kilometer', 'gram', 'second', 'meter-per-second'],
            staticOptions: {
                style: 'unit',
            },
        },
        {
            key: 'unitDisplay',
            variants: ['narrow', 'short', 'long'],
            staticOptions: {
                style: 'unit',
                unit: 'meter-per-second',
            },
        },
        {
            key: 'minimumIntegerDigits',
            variants: [1, 2, 3, 21],
        },
        {
            key: 'minimumFractionDigits',
            variants: [0, 1, 4, 8, 20],
        },
        {
            key: 'maximumFractionDigits',
            variants: [0, 1, 2, 3, 20],
        },
        {
            key: 'minimumSignificantDigits',
            variants: [1, 2, 4, 8, 12, 21],
        },
        {
            key: 'maximumSignificantDigits',
            variants: [1, 2, 4, 8, 21],
        },
    ];

    public format(locales: string | string[], card: VariantCard, variant: string): string {
        const optionsObject: any = {
            ...(card.staticOptions ?? {}),
            [card.key]: variant,
        };

        const conditions = [card.key === 'currencySign'];
        const coefficient = conditions.some(Boolean) ? -1 : 1;

        return new Intl.NumberFormat(locales, optionsObject).format(coefficient * this.original);
    }
}
