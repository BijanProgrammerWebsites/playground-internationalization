import {Component} from '@angular/core';
import {toUniqueLetters} from '../../utils/string.utils';

@Component({
    selector: 'app-collator',
    templateUrl: './collator.component.html',
    styleUrls: ['./collator.component.scss'],
})
export class CollatorComponent {
    public original = toUniqueLetters('بیژن عیسی پور');
    public sorted = this.original.concat().sort(new Intl.Collator('fa').compare);
}
