import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isAuthenticated: boolean;
    constructor() {
        this.isAuthenticated = false;
    }

    ngOnInit() {
        this.bindShowDropdownMenu();
    }

    bindShowDropdownMenu = () => {
        $('#secondary-navbar li.nav-item > a').each( function(a) {
            $(this).hover( () => {
                $('#secondary-navbar li.nav-item > div.dropdown-menu').filter('.show').removeClass('show');
                $(this).siblings('div.dropdown-menu').addClass('show');
                $(this).siblings('div.dropdown-menu').hover( () => {
                }, () => {
                    $(this).siblings('div.dropdown-menu').removeClass('show');
                });
            }, () => {
            });
        });
    }

}
