import { OnInit, OnChanges } from '@angular/core';
import { IBreadcrumbItem } from '../../models/breadcrumb.interface';
export declare class BreadcrumbComponent implements OnInit, OnChanges {
    items: IBreadcrumbItem[];
    listClasses: string;
    inactiveItemClasses: string;
    activeItemClasses: string;
    interItems: IBreadcrumbItem[];
    activeItem: IBreadcrumbItem;
    ngOnInit(): void;
    ngOnChanges(): void;
    private update;
}
