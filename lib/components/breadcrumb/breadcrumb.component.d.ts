import { OnInit, OnChanges } from '@angular/core';
import { IBreadcrumbItem } from '../../models/breadcrumb.interface';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbComponent, "polp-bs-breadcrumb", never, { "items": "items"; "listClasses": "listClasses"; "inactiveItemClasses": "inactiveItemClasses"; "activeItemClasses": "activeItemClasses"; }, {}, never, never>;
}
