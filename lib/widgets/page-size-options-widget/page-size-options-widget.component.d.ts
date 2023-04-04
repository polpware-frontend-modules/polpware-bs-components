import { OnInit, EventEmitter } from '@angular/core';
export declare class PageSizeOptionsWidgetComponent implements OnInit {
    initSize: number;
    options: number[];
    onChange: EventEmitter<number>;
    size: number;
    constructor();
    ngOnInit(): void;
    changeSize(s: number): void;
}
