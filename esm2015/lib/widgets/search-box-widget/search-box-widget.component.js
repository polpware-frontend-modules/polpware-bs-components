import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@40three/ngx-autofocus-directive";
import * as i4 from "@fortawesome/angular-fontawesome";
const _c0 = ["searchControlElem"];
function SearchBoxWidgetComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "span", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.prependText);
} }
function SearchBoxWidgetComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function SearchBoxWidgetComponent_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.cancelTypedKeyword(); });
    i0.ɵɵelement(1, "fa-icon", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r2.faTimes);
} }
export class SearchBoxWidgetComponent {
    constructor() {
        this.faSearch = faSearch;
        this.faTimes = faTimes;
        this.formClass = 'border rounded my-2 py-4 px-4 bg-light';
        this.prependText = 'Filter';
        // todo: More inputs
        // Allowing for disabling auto search
        this.minLength = 0;
        this.onSearch = new EventEmitter();
        this._emitEvent = true;
    }
    set emitEvent(v) {
        this._emitEvent = v;
    }
    get emitEvent() {
        const old = this._emitEvent;
        this._emitEvent = true;
        return old;
    }
    ngOnInit() {
        this.searchControl = new FormControl(this.initKeyword || '');
        this.startObserveSearchKeyword();
    }
    ngOnDestroy() {
        this.stopObserveSearchKeyword();
    }
    // Cancel typed keyword and
    // reset to whatever the previous state
    //
    // This operation does not cause new network request.
    cancelTypedKeyword() {
        this.searchControl.setValue('');
        // Auto focus the search input
        this.searchControlElem.nativeElement.focus();
    }
    // Starts a new round of search
    //
    // This operation causes new network request.
    kickOffSearch() {
        const k = this.anyFutureKeyword;
        this.onSearch.emit(k);
    }
    resetKeyword(emitEvent = false) {
        this.emitEvent = emitEvent;
        this.cancelTypedKeyword();
    }
    // Start to listen for search keyword change
    startObserveSearchKeyword() {
        this._searchKeywordSubr = this.searchControl.valueChanges.subscribe(a => {
            a = (a || '').toLowerCase();
            this.anyFutureKeyword = a;
            if (this.minLength > 0 && this.anyFutureKeyword.length >= this.minLength && this.emitEvent) {
                this.kickOffSearch();
            }
        });
    }
    stopObserveSearchKeyword() {
        this._searchKeywordSubr && this._searchKeywordSubr.unsubscribe();
    }
}
SearchBoxWidgetComponent.ɵfac = function SearchBoxWidgetComponent_Factory(t) { return new (t || SearchBoxWidgetComponent)(); };
SearchBoxWidgetComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SearchBoxWidgetComponent, selectors: [["polp-bs-search-box-widget"]], viewQuery: function SearchBoxWidgetComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchControlElem = _t.first);
    } }, inputs: { initKeyword: "initKeyword", formClass: "formClass", prependText: "prependText", minLength: "minLength" }, outputs: { onSearch: "onSearch" }, decls: 9, vars: 6, consts: [[3, "ngClass"], [1, "input-group"], ["class", "input-group-prepend", 4, "ngIf"], ["type", "text", 1, "form-control", 3, "formControl", "autofocus"], ["searchControlElem", ""], [1, "input-group-append"], ["class", "btn btn-secondary icon-only", "type", "button", "tooltip", "Cancel", 3, "click", 4, "ngIf"], ["type", "submit", "tooltip", "Search", 1, "btn", "btn-primary", "icon-only", 3, "click"], [3, "icon"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "button", "tooltip", "Cancel", 1, "btn", "btn-secondary", "icon-only", 3, "click"]], template: function SearchBoxWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, SearchBoxWidgetComponent_div_2_Template, 3, 1, "div", 2);
        i0.ɵɵelement(3, "input", 3, 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵtemplate(6, SearchBoxWidgetComponent_button_6_Template, 2, 1, "button", 6);
        i0.ɵɵelementStart(7, "button", 7);
        i0.ɵɵlistener("click", function SearchBoxWidgetComponent_Template_button_click_7_listener() { return ctx.kickOffSearch; });
        i0.ɵɵelement(8, "fa-icon", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.formClass);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.prependText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControl", ctx.searchControl)("autofocus", true);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.anyFutureKeyword);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("icon", ctx.faSearch);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.NgClass, i2.NgIf, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlDirective, i3.AutofocusDirective, i4.FaIconComponent], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SearchBoxWidgetComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-search-box-widget',
                templateUrl: './search-box-widget.component.html',
                styleUrls: ['./search-box-widget.component.css']
            }]
    }], function () { return []; }, { initKeyword: [{
            type: Input
        }], formClass: [{
            type: Input
        }], prependText: [{
            type: Input
        }], minLength: [{
            type: Input
        }], onSearch: [{
            type: Output
        }], searchControlElem: [{
            type: ViewChild,
            args: ['searchControlElem']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvd2lkZ2V0cy9zZWFyY2gtYm94LXdpZGdldC9zZWFyY2gtYm94LXdpZGdldC5jb21wb25lbnQudHMiLCJsaWIvd2lkZ2V0cy9zZWFyY2gtYm94LXdpZGdldC9zZWFyY2gtYm94LXdpZGdldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7OztJQ0E5RCw4QkFDSTtJQUFBLGdDQUErQjtJQUFBLFlBQWU7SUFBQSxpQkFBTztJQUN6RCxpQkFBTTs7O0lBRDZCLGVBQWU7SUFBZix3Q0FBZTs7OztJQU05QyxrQ0FHSTtJQURJLHVNQUE4QjtJQUNsQyw2QkFBb0M7SUFDeEMsaUJBQVM7OztJQURJLGVBQWdCO0lBQWhCLHFDQUFnQjs7QURGekMsTUFBTSxPQUFPLHdCQUF3QjtJQTBCakM7UUF4QkEsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNwQixZQUFPLEdBQUcsT0FBTyxDQUFDO1FBR1QsY0FBUyxHQUFHLHdDQUF3QyxDQUFDO1FBQ3JELGdCQUFXLEdBQUcsUUFBUSxDQUFDO1FBQ2hDLG9CQUFvQjtRQUVwQixxQ0FBcUM7UUFDNUIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUVyQixhQUFRLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFXdEQsZUFBVSxHQUFZLElBQUksQ0FBQztJQUVuQixDQUFDO0lBRWpCLElBQUksU0FBUyxDQUFDLENB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aW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZmFTZWFyY2gsIGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1zZWFyY2gtYm94LXdpZGdldCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1ib3gtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtYm94LXdpZGdldC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94V2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgZmFTZWFyY2ggPSBmYVNlYXJjaDtcbiAgICBmYVRpbWVzID0gZmFUaW1lcztcblxuICAgIEBJbnB1dCgpIGluaXRLZXl3b3JkOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZm9ybUNsYXNzID0gJ2JvcmRlciByb3VuZGVkIG15LTIgcHktNCBweC00IGJnLWxpZ2h0JztcbiAgICBASW5wdXQoKSBwcmVwZW5kVGV4dCA9ICdGaWx0ZXInO1xuICAgIC8vIHRvZG86IE1vcmUgaW5wdXRzXG5cbiAgICAvLyBBbGxvd2luZyBmb3IgZGlzYWJsaW5nIGF1dG8gc2VhcmNoXG4gICAgQElucHV0KCkgbWluTGVuZ3RoOiBudW1iZXIgPSAwO1xuXG4gICAgQE91dHB1dCgpIG9uU2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIC8vIFN1cHBvcnQgZmlsdGVyXG4gICAgQFZpZXdDaGlsZCgnc2VhcmNoQ29udHJvbEVsZW0nKVxuICAgIHNlYXJjaENvbnRyb2xFbGVtOiBFbGVtZW50UmVmO1xuICAgIC8vIFNlYXJjaCBjb250cm9sIGlucHV0XG4gICAgcHVibGljIHNlYXJjaENvbnRyb2w6IEZvcm1Db250cm9sO1xuICAgIGFueUZ1dHVyZUtleXdvcmQ6IHN0cmluZztcblxuICAgIF9zZWFyY2hLZXl3b3JkU3VicjogU3Vic2NyaXB0aW9uO1xuXG4gICAgcHJpdmF0ZSBfZW1pdEV2ZW50OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBzZXQgZW1pdEV2ZW50KHY6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZW1pdEV2ZW50ID0gdjtcbiAgICB9XG5cbiAgICBnZXQgZW1pdEV2ZW50KCkge1xuICAgICAgICBjb25zdCBvbGQgPSB0aGlzLl9lbWl0RXZlbnQ7XG4gICAgICAgIHRoaXMuX2VtaXRFdmVudCA9IHRydWU7XG4gICAgICAgIHJldHVybiBvbGQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VhcmNoQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh0aGlzLmluaXRLZXl3b3JkIHx8ICcnKTtcbiAgICAgICAgdGhpcy5zdGFydE9ic2VydmVTZWFyY2hLZXl3b3JkKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcE9ic2VydmVTZWFyY2hLZXl3b3JkKCk7XG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIHR5cGVkIGtleXdvcmQgYW5kXG4gICAgLy8gcmVzZXQgdG8gd2hhdGV2ZXIgdGhlIHByZXZpb3VzIHN0YXRlXG4gICAgLy9cbiAgICAvLyBUaGlzIG9wZXJhdGlvbiBkb2VzIG5vdCBjYXVzZSBuZXcgbmV0d29yayByZXF1ZXN0LlxuICAgIHB1YmxpYyBjYW5jZWxUeXBlZEtleXdvcmQoKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5zZXRWYWx1ZSgnJyk7XG5cbiAgICAgICAgLy8gQXV0byBmb2N1cyB0aGUgc2VhcmNoIGlucHV0XG4gICAgICAgIHRoaXMuc2VhcmNoQ29udHJvbEVsZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8vIFN0YXJ0cyBhIG5ldyByb3VuZCBvZiBzZWFyY2hcbiAgICAvL1xuICAgIC8vIFRoaXMgb3BlcmF0aW9uIGNhdXNlcyBuZXcgbmV0d29yayByZXF1ZXN0LlxuICAgIHB1YmxpYyBraWNrT2ZmU2VhcmNoKCkge1xuICAgICAgICBjb25zdCBrID0gdGhpcy5hbnlGdXR1cmVLZXl3b3JkO1xuICAgICAgICB0aGlzLm9uU2VhcmNoLmVtaXQoayk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0S2V5d29yZChlbWl0RXZlbnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmVtaXRFdmVudCA9IGVtaXRFdmVudDtcbiAgICAgICAgdGhpcy5jYW5jZWxUeXBlZEtleXdvcmQoKTtcbiAgICB9XG5cbiAgICAvLyBTdGFydCB0byBsaXN0ZW4gZm9yIHNlYXJjaCBrZXl3b3JkIGNoYW5nZVxuICAgIHN0YXJ0T2JzZXJ2ZVNlYXJjaEtleXdvcmQoKSB7XG4gICAgICAgIHRoaXMuX3NlYXJjaEtleXdvcmRTdWJyID0gdGhpcy5zZWFyY2hDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoYSA9PiB7XG4gICAgICAgICAgICBhID0gKGEgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB0aGlzLmFueUZ1dHVyZUtleXdvcmQgPSBhO1xuICAgICAgICAgICAgaWYgKHRoaXMubWluTGVuZ3RoID4gMCAmJiB0aGlzLmFueUZ1dHVyZUtleXdvcmQubGVuZ3RoID49IHRoaXMubWluTGVuZ3RoICYmIHRoaXMuZW1pdEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5raWNrT2ZmU2VhcmNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0b3BPYnNlcnZlU2VhcmNoS2V5d29yZCgpIHtcbiAgICAgICAgdGhpcy5fc2VhcmNoS2V5d29yZFN1YnIgJiYgdGhpcy5fc2VhcmNoS2V5d29yZFN1YnIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cblxufVxuIiwiPGZvcm0gW25nQ2xhc3NdPVwiZm9ybUNsYXNzXCI+XG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCIgKm5nSWY9XCJwcmVwZW5kVGV4dFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+e3twcmVwZW5kVGV4dH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiAjc2VhcmNoQ29udHJvbEVsZW1cbiAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJzZWFyY2hDb250cm9sXCJcbiAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwidHJ1ZVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBpY29uLW9ubHlcIiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJhbnlGdXR1cmVLZXl3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIkNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjYW5jZWxUeXBlZEtleXdvcmQoKVwiPlxuICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhVGltZXNcIj48L2ZhLWljb24+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGljb24tb25seVwiIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImtpY2tPZmZTZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVNlYXJjaFwiPjwvZmEtaWNvbj4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Zvcm0+XG5cbiJdfQ==