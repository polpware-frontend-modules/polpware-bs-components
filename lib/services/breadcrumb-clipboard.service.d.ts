import { IBreadcrumbItem } from '../models/breadcrumb.interface';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class BreadcrumbClipboardService {
    readonly clipboard: BehaviorSubject<IBreadcrumbItem[]>;
    constructor();
    paste(items: IBreadcrumbItem[]): void;
    static ɵfac: i0.ɵɵFactoryDef<BreadcrumbClipboardService, never>;
    static ɵprov: i0.ɵɵInjectableDef<BreadcrumbClipboardService>;
}
