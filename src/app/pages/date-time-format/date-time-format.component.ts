import {Component} from '@angular/core';
import {VariantCard} from 'src/app/models/variant-card';

@Component({
    selector: 'app-date-time-format',
    templateUrl: './date-time-format.component.html',
    styleUrls: ['./date-time-format.component.scss'],
})
export class DateTimeFormatComponent {
    private static readonly STATIC_TIME_OPTIONS = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    // -------------------------------------------------------------------------------------------------------- original
    public original = new Date(2001, 1, 3, 0, 2, 3, 815);

    // ---------------------------------------------------------------------------------------------------------- format
    public enDefault = new Intl.DateTimeFormat('en').format(this.original);
    public faDefault = new Intl.DateTimeFormat('fa').format(this.original);

    // --------------------------------------------------------------------------------------------------- formatToParts
    public enFormatToParts = new Intl.DateTimeFormat('en').formatToParts(this.original);
    public faFormatToParts = new Intl.DateTimeFormat('fa').formatToParts(this.original);

    // ----------------------------------------------------------------------------------------------------------- cards
    public cards: VariantCard[] = [
        {
            key: 'dateStyle',
            variants: ['short', 'medium', 'long', 'full'],
        },
        {
            key: 'timeStyle',
            variants: ['short', 'medium', 'long', 'full'],
        },
        {
            key: 'dayPeriod',
            variants: ['narrow', 'short', 'long'],
        },
        {
            key: 'numberingSystem',
            variants: ['arab', 'arabext', 'fullwide', 'gujr', 'thai'],
        },
        {
            key: 'weekday',
            variants: ['narrow', 'short', 'long'],
        },
        {
            key: 'year',
            variants: ['numeric', '2-digit'],
        },
        {
            key: 'month',
            variants: ['numeric', '2-digit', 'narrow', 'short', 'long'],
        },
        {
            key: 'day',
            variants: ['numeric', '2-digit'],
        },
        {
            key: 'hour',
            variants: ['numeric', '2-digit'],
            staticOptions: DateTimeFormatComponent.STATIC_TIME_OPTIONS,
        },
        {
            key: 'minute',
            variants: ['numeric', '2-digit'],
            staticOptions: DateTimeFormatComponent.STATIC_TIME_OPTIONS,
        },
        {
            key: 'second',
            variants: ['numeric', '2-digit'],
            staticOptions: DateTimeFormatComponent.STATIC_TIME_OPTIONS,
        },
        {
            key: 'fractionalSecondDigits',
            variants: [1, 2, 3],
            staticOptions: DateTimeFormatComponent.STATIC_TIME_OPTIONS,
        },
        {
            key: 'timeZoneName',
            variants: ['long', 'short', 'shortOffset', 'longOffset', 'shortGeneric', 'longGeneric'],
        },
    ];

    public format(locales: string | string[], card: VariantCard, variant: string): string {
        const optionsObject: any = {
            ...(card.staticOptions ?? {}),
            [card.key]: variant,
        };

        return new Intl.DateTimeFormat(locales, optionsObject).format(this.original);
    }
}
