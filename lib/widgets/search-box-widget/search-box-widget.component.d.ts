import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SearchBoxWidgetComponent implements OnInit, OnDestroy {
    faSearch: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faTimes: import("@fortawesome/fontawesome-common-types").IconDefinition;
    initKeyword: string;
    formClass: string;
    inputClass: string;
    prependText: string;
    debounceTime: number;
    minLength: number;
    onSearch: EventEmitter<void>;
    searchControlElem: ElementRef;
    searchControl: FormControl;
    anyFutureKeyword: string;
    effectiveKeyword: string;
    _searchKeywordSubr: Subscription;
    private _emitEvent;
    constructor();
    set emitEvent(v: boolean);
    get emitEvent(): boolean;
    ngOnInit(): void;
    ngOnDestroy(): void;
    cancelTypedKeyword(): void;
    kickOffSearch(): void;
    resetKeyword(emitEvent?: boolean): void;
    startObserveSearchKeyword(): void;
    stopObserveSearchKeyword(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchBoxWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchBoxWidgetComponent, "polp-bs-search-box-widget", never, { "initKeyword": "initKeyword"; "formClass": "formClass"; "inputClass": "inputClass"; "prependText": "prependText"; "debounceTime": "debounceTime"; "minLength": "minLength"; }, { "onSearch": "onSearch"; }, never, never>;
}
