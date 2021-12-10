import {Component} from '@angular/core';

@Component({
    selector: 'app-date-time-format',
    templateUrl: './date-time-format.component.html',
    styleUrls: ['./date-time-format.component.scss'],
})
export class DateTimeFormatComponent {
    public original = new Date(2001, 1, 3, 10, 30, 23, 815);

    public enDefault = new Intl.DateTimeFormat('en').format(this.original);
    public faDefault = new Intl.DateTimeFormat('fa').format(this.original);

    // ------------------------------------------------------------------------------------------------------- dateStyle
    public enDateStyleShort = new Intl.DateTimeFormat('en', {
        // @ts-ignore
        dateStyle: 'short',
    }).format(this.original);
    public faDateStyleShort = new Intl.DateTimeFormat('fa', {
        // @ts-ignore
        dateStyle: 'short',
    }).format(this.original);

    public enDateStyleLong = new Intl.DateTimeFormat('en', {
        // @ts-ignore
        dateStyle: 'long',
    }).format(this.original);
    public faDateStyleLong = new Intl.DateTimeFormat('fa', {
        // @ts-ignore
        dateStyle: 'long',
    }).format(this.original);

    // ------------------------------------------------------------------------------------------------------- timeStyle
    public enTimeStyleShort = new Intl.DateTimeFormat('en', {
        // @ts-ignore
        timeStyle: 'short',
    }).format(this.original);
    public faTimeStyleShort = new Intl.DateTimeFormat('fa', {
        // @ts-ignore
        timeStyle: 'short',
    }).format(this.original);

    public enTimeStyleMedium = new Intl.DateTimeFormat('en', {
        // @ts-ignore
        timeStyle: 'medium',
    }).format(this.original);
    public faTimeStyleMedium = new Intl.DateTimeFormat('fa', {
        // @ts-ignore
        timeStyle: 'medium',
    }).format(this.original);

    public enTimeStyleLong = new Intl.DateTimeFormat('en', {
        // @ts-ignore
        timeStyle: 'long',
    }).format(this.original);
    public faTimeStyleLong = new Intl.DateTimeFormat('fa', {
        // @ts-ignore
        timeStyle: 'long',
    }).format(this.original);

    public enTimeStyleFull = new Intl.DateTimeFormat('en', {
        // @ts-ignore
        timeStyle: 'full',
    }).format(this.original);
    public faTimeStyleFull = new Intl.DateTimeFormat('fa', {
        // @ts-ignore
        timeStyle: 'full',
    }).format(this.original);

    // public default = new Intl.DateTimeFormat('fa').format(this.original);
    // public default = new Intl.DateTimeFormat('fa').format(this.original);
}
