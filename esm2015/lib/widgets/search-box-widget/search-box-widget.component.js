import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { debounceTime } from 'rxjs/operators';
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
    i0.ɵɵlistener("click", function SearchBoxWidgetComponent_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.resetKeyword(true); });
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
        this.inputClass = 'form-control';
        this.prependText = 'Filter';
        this.debounceTime = 500;
        // todo: More inputs
        // Allowing for disabling auto search
        this.minLength = 0;
        this.onSearch = new EventEmitter();
        this._emitEvent = false;
    }
    set emitEvent(v) {
        this._emitEvent = v;
    }
    get emitEvent() {
        const old = this._emitEvent;
        this._emitEvent = false;
        return old;
    }
    ngOnInit() {
        this.searchControl = new FormControl(this.initKeyword || '');
        this.effectiveKeyword = this.initKeyword;
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
        this.effectiveKeyword = this.anyFutureKeyword;
        this.onSearch.emit(this.effectiveKeyword);
    }
    resetKeyword(emitEvent = false) {
        this.emitEvent = emitEvent;
        this.cancelTypedKeyword();
    }
    // Start to listen for search keyword change
    startObserveSearchKeyword() {
        this._searchKeywordSubr = this.searchControl.valueChanges
            .pipe(debounceTime(this.debounceTime))
            .subscribe(a => {
            a = (a || '').toLowerCase();
            this.anyFutureKeyword = a;
            if (this.minLength > 0 && this.anyFutureKeyword.length >= this.minLength) {
                this.kickOffSearch();
            }
            else if (this.emitEvent) {
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
    } }, inputs: { initKeyword: "initKeyword", formClass: "formClass", inputClass: "inputClass", prependText: "prependText", debounceTime: "debounceTime", minLength: "minLength" }, outputs: { onSearch: "onSearch" }, decls: 9, vars: 7, consts: [[3, "ngClass", "ngSubmit"], [1, "input-group"], ["class", "input-group-prepend", 4, "ngIf"], ["type", "text", 3, "ngClass", "formControl", "autofocus"], ["searchControlElem", ""], [1, "input-group-append"], ["class", "btn btn-secondary icon-only", "type", "button", "tooltip", "Cancel", 3, "click", 4, "ngIf"], ["type", "submit", "tooltip", "Search", 1, "btn", "btn-primary", "icon-only"], [3, "icon"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "button", "tooltip", "Cancel", 1, "btn", "btn-secondary", "icon-only", 3, "click"]], template: function SearchBoxWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("ngSubmit", function SearchBoxWidgetComponent_Template_form_ngSubmit_0_listener() { return ctx.kickOffSearch(); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, SearchBoxWidgetComponent_div_2_Template, 3, 1, "div", 2);
        i0.ɵɵelement(3, "input", 3, 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵtemplate(6, SearchBoxWidgetComponent_button_6_Template, 2, 1, "button", 6);
        i0.ɵɵelementStart(7, "button", 7);
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
        i0.ɵɵproperty("ngClass", ctx.inputClass)("formControl", ctx.searchControl)("autofocus", true);
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
        }], inputClass: [{
            type: Input
        }], prependText: [{
            type: Input
        }], debounceTime: [{
            type: Input
        }], minLength: [{
            type: Input
        }], onSearch: [{
            type: Output
        }], searchControlElem: [{
            type: ViewChild,
            args: ['searchControlElem']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvd2lkZ2V0cy9zZWFyY2gtYm94LXdpZGdldC9zZWFyY2gtYm94LXdpZGdldC5jb21wb25lbnQudHMiLCJsaWIvd2lkZ2V0cy9zZWFyY2gtYm94LXdpZGdldC9zZWFyY2gtYm94LXdpZGdldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUNGdEMsOEJBQ0k7SUFBQSxnQ0FBK0I7SUFBQSxZQUFlO0lBQUEsaUJBQU87SUFDekQsaUJBQU07OztJQUQ2QixlQUFlO0lBQWYsd0NBQWU7Ozs7SUFNOUMsa0NBR0k7SUFESSw0TEFBc0IsSUFBSSxLQUFFO0lBQ2hDLDZCQUFvQztJQUN4QyxpQkFBUzs7O0lBREksZUFBZ0I7SUFBaEIscUNBQWdCOztBRER6QyxNQUFNLE9BQU8sd0JBQXdCO0lBOEJqQztRQTVCQSxhQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3BCLFlBQU8sR0FBRyxPQUFPLENBQUM7UUFHVCxjQUFTLEdBQUcsd0NBQXdDLENBQUM7UUFDckQsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUM1QixnQkFBVyxHQUFHLFFBQVEsQ0FBQztRQUN2QixpQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUM1QixvQkFBb0I7UUFFcEIscUNBQXFDO1FBQzVCLGNBQVMsR0FBVyxD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QUFzQixrQ0FBQSxtQkFBQTtRQUlpQyxlQUF3QjtRQUF4QiwyQ0FBd0I7UUFPckUsZUFBaUI7UUFBakIsbUNBQWlCOztrRERMN0Isd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNuRDs7a0JBTUksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBSUwsS0FBSzs7a0JBRUwsTUFBTTs7a0JBR04sU0FBUzttQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmYVNlYXJjaCwgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXNlYXJjaC1ib3gtd2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NlYXJjaC1ib3gtd2lkZ2V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBmYVNlYXJjaCA9IGZhU2VhcmNoO1xuICAgIGZhVGltZXMgPSBmYVRpbWVzO1xuXG4gICAgQElucHV0KCkgaW5pdEtleXdvcmQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBmb3JtQ2xhc3MgPSAnYm9yZGVyIHJvdW5kZWQgbXktMiBweS00IHB4LTQgYmctbGlnaHQnO1xuICAgIEBJbnB1dCgpIGlucHV0Q2xhc3MgPSAnZm9ybS1jb250cm9sJztcbiAgICBASW5wdXQoKSBwcmVwZW5kVGV4dCA9ICdGaWx0ZXInO1xuICAgIEBJbnB1dCgpIGRlYm91bmNlVGltZSA9IDUwMDtcbiAgICAvLyB0b2RvOiBNb3JlIGlucHV0c1xuXG4gICAgLy8gQWxsb3dpbmcgZm9yIGRpc2FibGluZyBhdXRvIHNlYXJjaFxuICAgIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMDtcblxuICAgIEBPdXRwdXQoKSBvblNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvLyBTdXBwb3J0IGZpbHRlclxuICAgIEBWaWV3Q2hpbGQoJ3NlYXJjaENvbnRyb2xFbGVtJylcbiAgICBzZWFyY2hDb250cm9sRWxlbTogRWxlbWVudFJlZjtcbiAgICAvLyBTZWFyY2ggY29udHJvbCBpbnB1dFxuICAgIHB1YmxpYyBzZWFyY2hDb250cm9sOiBGb3JtQ29udHJvbDtcbiAgICBhbnlGdXR1cmVLZXl3b3JkOiBzdHJpbmc7XG4gICAgLy8gZWZmZWN0aXZlIGtleXdvcmRcbiAgICBlZmZlY3RpdmVLZXl3b3JkOiBzdHJpbmc7XG5cbiAgICBfc2VhcmNoS2V5d29yZFN1YnI6IFN1YnNjcmlwdGlvbjtcblxuICAgIHByaXZhdGUgX2VtaXRFdmVudDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHNldCBlbWl0RXZlbnQodjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9lbWl0RXZlbnQgPSB2O1xuICAgIH1cblxuICAgIGdldCBlbWl0RXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IG9sZCA9IHRoaXMuX2VtaXRFdmVudDtcbiAgICAgICAgdGhpcy5fZW1pdEV2ZW50ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBvbGQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VhcmNoQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh0aGlzLmluaXRLZXl3b3JkIHx8ICcnKTtcbiAgICAgICAgdGhpcy5lZmZlY3RpdmVLZXl3b3JkID0gdGhpcy5pbml0S2V5d29yZDtcbiAgICAgICAgdGhpcy5zdGFydE9ic2VydmVTZWFyY2hLZXl3b3JkKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcE9ic2VydmVTZWFyY2hLZXl3b3JkKCk7XG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIHR5cGVkIGtleXdvcmQgYW5kXG4gICAgLy8gcmVzZXQgdG8gd2hhdGV2ZXIgdGhlIHByZXZpb3VzIHN0YXRlXG4gICAgLy9cbiAgICAvLyBUaGlzIG9wZXJhdGlvbiBkb2VzIG5vdCBjYXVzZSBuZXcgbmV0d29yayByZXF1ZXN0LlxuICAgIHB1YmxpYyBjYW5jZWxUeXBlZEtleXdvcmQoKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5zZXRWYWx1ZSgnJyk7XG5cbiAgICAgICAgLy8gQXV0byBmb2N1cyB0aGUgc2VhcmNoIGlucHV0XG4gICAgICAgIHRoaXMuc2VhcmNoQ29udHJvbEVsZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8vIFN0YXJ0cyBhIG5ldyByb3VuZCBvZiBzZWFyY2hcbiAgICAvL1xuICAgIC8vIFRoaXMgb3BlcmF0aW9uIGNhdXNlcyBuZXcgbmV0d29yayByZXF1ZXN0LlxuICAgIHB1YmxpYyBraWNrT2ZmU2VhcmNoKCkge1xuICAgICAgICB0aGlzLmVmZmVjdGl2ZUtleXdvcmQgPSB0aGlzLmFueUZ1dHVyZUtleXdvcmQ7XG4gICAgICAgIHRoaXMub25TZWFyY2guZW1pdCh0aGlzLmVmZmVjdGl2ZUtleXdvcmQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldEtleXdvcmQoZW1pdEV2ZW50OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5lbWl0RXZlbnQgPSBlbWl0RXZlbnQ7XG4gICAgICAgIHRoaXMuY2FuY2VsVHlwZWRLZXl3b3JkKCk7XG4gICAgfVxuXG4gICAgLy8gU3RhcnQgdG8gbGlzdGVuIGZvciBzZWFyY2gga2V5d29yZCBjaGFuZ2VcbiAgICBzdGFydE9ic2VydmVTZWFyY2hLZXl3b3JkKCkge1xuICAgICAgICB0aGlzLl9zZWFyY2hLZXl3b3JkU3ViciA9IHRoaXMuc2VhcmNoQ29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgICAgICAgIC5waXBlKGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlVGltZSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGEgPT4ge1xuICAgICAgICAgICAgICAgIGEgPSAoYSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFueUZ1dHVyZUtleXdvcmQgPSBhO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1pbkxlbmd0aCA+IDAgJiYgdGhpcy5hbnlGdXR1cmVLZXl3b3JkLmxlbmd0aCA+PSB0aGlzLm1pbkxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmtpY2tPZmZTZWFyY2goKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZW1pdEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2lja09mZlNlYXJjaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0b3BPYnNlcnZlU2VhcmNoS2V5d29yZCgpIHtcbiAgICAgICAgdGhpcy5fc2VhcmNoS2V5d29yZFN1YnIgJiYgdGhpcy5fc2VhcmNoS2V5d29yZFN1YnIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cblxufVxuIiwiPGZvcm0gW25nQ2xhc3NdPVwiZm9ybUNsYXNzXCIgKG5nU3VibWl0KT1cImtpY2tPZmZTZWFyY2goKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiICpuZ0lmPVwicHJlcGVuZFRleHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPnt7cHJlcGVuZFRleHR9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCBbbmdDbGFzc109XCJpbnB1dENsYXNzXCIgdHlwZT1cInRleHRcIiAjc2VhcmNoQ29udHJvbEVsZW1cbiAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJzZWFyY2hDb250cm9sXCJcbiAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwidHJ1ZVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBpY29uLW9ubHlcIiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJhbnlGdXR1cmVLZXl3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIkNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJyZXNldEtleXdvcmQodHJ1ZSlcIj5cbiAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVRpbWVzXCI+PC9mYS1pY29uPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBpY29uLW9ubHlcIiB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIlNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhU2VhcmNoXCI+PC9mYS1pY29uPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZm9ybT5cblxuIl19