import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CollatorComponent} from './collator.component';

describe('CollatorComponent', () => {
    let component: CollatorComponent;
    let fixture: ComponentFixture<CollatorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CollatorComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CollatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
