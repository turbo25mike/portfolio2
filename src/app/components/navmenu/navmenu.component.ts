import { Component } from '@angular/core';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html'
})
export class NavMenuComponent {
    isCollapsed: boolean = true;
    constructor() { }

    toggleCollapse(): void {
        this.isCollapsed = !this.isCollapsed;
    }
}
