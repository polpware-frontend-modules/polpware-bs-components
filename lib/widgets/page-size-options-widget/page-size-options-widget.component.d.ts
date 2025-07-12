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
    static ɵfac: i0.ɵɵFactoryDeclaration<PageSizeOptionsWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageSizeOptionsWidgetComponent, "polp-bs-page-size-options-widget", never, { "initSize": { "alias": "initSize"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, { "onChange": "onChange"; }, never, never, false, never>;
}
//# sourceMappingURL=page-size-options-widget.component.d.ts.map