import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PageSizeOptionsWidgetComponent implements OnInit {
    initSize: number;
    options: number[];
    onChange: EventEmitter<number>;
    size: number;
    constructor();
    ngOnInit(): void;
    changeSize(s: number): void;
    static ɵfac: i0.ɵɵFactoryDef<PageSizeOptionsWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PageSizeOptionsWidgetComponent, "polp-bs-page-size-options-widget", never, { "initSize": "initSize"; "options": "options"; }, { "onChange": "onChange"; }, never, never>;
}
