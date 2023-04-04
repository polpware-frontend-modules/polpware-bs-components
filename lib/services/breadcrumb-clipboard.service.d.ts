import { IBreadcrumbItem } from '../models/breadcrumb.interface';
import { BehaviorSubject } from 'rxjs';
export declare class BreadcrumbClipboardService {
    readonly clipboard: BehaviorSubject<IBreadcrumbItem[]>;
    constructor();
    paste(items: IBreadcrumbItem[]): void;
}
