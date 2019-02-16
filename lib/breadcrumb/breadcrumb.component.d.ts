import { OnInit } from '@angular/core';
export declare enum ActionKind {
    NO_ACTION = 0,
    URL_LINK = 1,
    ROUTER_LINK = 2,
    CUSTOM_ACTION = 3
}
export interface IBreadcrumbItem {
    title: string;
    routerLink?: string;
    url?: string;
    action?: () => void;
    kind?: ActionKind;
}
export declare class BreadcrumbComponent implements OnInit {
    items: IBreadcrumbItem[];
    interItems: IBreadcrumbItem[];
    activeItem: IBreadcrumbItem;
    constructor();
    ngOnInit(): void;
}
