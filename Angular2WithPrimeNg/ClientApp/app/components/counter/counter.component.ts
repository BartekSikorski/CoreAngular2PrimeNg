import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/primeng';
import {MenuModule, MenuItem} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import {GrowlModule } from 'primeng/primeng';

@Component({
    selector: 'counter',
    template: require('./counter.component.html')
})
export class CounterComponent implements OnInit {
    msgs: Message[] = [];
    items: MenuItem[];

    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Update', icon: 'fa-refresh', command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete', icon: 'fa-close', command: () => {
                    this.reset();
                }
            },
            { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
        ];
    }

    save() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Deleted' });
    }

    reset() {
        this.currentCount = 0;
    }
}
