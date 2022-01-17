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
        this.inputClass = 'form-control';
        this.prependText = 'Filter';
        this.debounceTime = 500;
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
        this.effectiveKeyword = '';
        this.cancelTypedKeyword();
    }
    // Start to listen for search keyword change
    startObserveSearchKeyword() {
        this._searchKeywordSubr = this.searchControl.valueChanges
            .pipe(debounceTime(this.debounceTime))
            .subscribe(a => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvd2lkZ2V0cy9zZWFyY2gtYm94LXdpZGdldC9zZWFyY2gtYm94LXdpZGdldC5jb21wb25lbnQudHMiLCJsaWIvd2lkZ2V0cy9zZWFyY2gtYm94LXdpZGdldC9zZWFyY2gtYm94LXdpZGdldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUNGdEMsOEJBQ0k7SUFBQSxnQ0FBK0I7SUFBQSxZQUFlO0lBQUEsaUJBQU87SUFDekQsaUJBQU07OztJQUQ2QixlQUFlO0lBQWYsd0NBQWU7Ozs7SUFNOUMsa0NBR0k7SUFESSx1TUFBOEI7SUFDbEMsNkJBQW9DO0lBQ3hDLGlCQUFTOzs7SUFESSxlQUFnQjtJQUFoQixxQ0FBZ0I7O0FERHpDLE1BQU0sT0FBTyx3QkFBd0I7SUE4QmpDO1FBNUJBLGFBQVEsR0FBRyxRQUFRLENBQUM7UUFDcEIsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUdULGNBQVMsR0FBRyx3Q0FBd0MsQ0FBQztRQUNyRCxlQUFVLEdBQUcsY0FBYyxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsUUFBUSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBQzVCLG9CQUFvQjtRQUVwQixxQ0FBcUM7UUFDNUIsY0FBUyxHQUFXLENBQUMsQ0FBQztR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QyxlQUF3QjtRQUF4QiwyQ0FBd0I7UUFPckUsZUFBaUI7UUFBakIsbUNBQWlCOztrRERMN0Isd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNuRDs7a0JBTUksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBSUwsS0FBSzs7a0JBRUwsTUFBTTs7a0JBR04sU0FBUzttQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmYVNlYXJjaCwgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXNlYXJjaC1ib3gtd2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NlYXJjaC1ib3gtd2lkZ2V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBmYVNlYXJjaCA9IGZhU2VhcmNoO1xuICAgIGZhVGltZXMgPSBmYVRpbWVzO1xuXG4gICAgQElucHV0KCkgaW5pdEtleXdvcmQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBmb3JtQ2xhc3MgPSAnYm9yZGVyIHJvdW5kZWQgbXktMiBweS00IHB4LTQgYmctbGlnaHQnO1xuICAgIEBJbnB1dCgpIGlucHV0Q2xhc3MgPSAnZm9ybS1jb250cm9sJztcbiAgICBASW5wdXQoKSBwcmVwZW5kVGV4dCA9ICdGaWx0ZXInO1xuICAgIEBJbnB1dCgpIGRlYm91bmNlVGltZSA9IDUwMDtcbiAgICAvLyB0b2RvOiBNb3JlIGlucHV0c1xuXG4gICAgLy8gQWxsb3dpbmcgZm9yIGRpc2FibGluZyBhdXRvIHNlYXJjaFxuICAgIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMDtcblxuICAgIEBPdXRwdXQoKSBvblNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvLyBTdXBwb3J0IGZpbHRlclxuICAgIEBWaWV3Q2hpbGQoJ3NlYXJjaENvbnRyb2xFbGVtJylcbiAgICBzZWFyY2hDb250cm9sRWxlbTogRWxlbWVudFJlZjtcbiAgICAvLyBTZWFyY2ggY29udHJvbCBpbnB1dFxuICAgIHB1YmxpYyBzZWFyY2hDb250cm9sOiBGb3JtQ29udHJvbDtcbiAgICBhbnlGdXR1cmVLZXl3b3JkOiBzdHJpbmc7XG4gICAgLy8gZWZmZWN0aXZlIGtleXdvcmRcbiAgICBlZmZlY3RpdmVLZXl3b3JkOiBzdHJpbmc7XG5cbiAgICBfc2VhcmNoS2V5d29yZFN1YnI6IFN1YnNjcmlwdGlvbjtcblxuICAgIHByaXZhdGUgX2VtaXRFdmVudDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgc2V0IGVtaXRFdmVudCh2OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2VtaXRFdmVudCA9IHY7XG4gICAgfVxuXG4gICAgZ2V0IGVtaXRFdmVudCgpIHtcbiAgICAgICAgY29uc3Qgb2xkID0gdGhpcy5fZW1pdEV2ZW50O1xuICAgICAgICB0aGlzLl9lbWl0RXZlbnQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gb2xkO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlYXJjaENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGhpcy5pbml0S2V5d29yZCB8fCAnJyk7XG4gICAgICAgIHRoaXMuZWZmZWN0aXZlS2V5d29yZCA9IHRoaXMuaW5pdEtleXdvcmQ7XG4gICAgICAgIHRoaXMuc3RhcnRPYnNlcnZlU2VhcmNoS2V5d29yZCgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3BPYnNlcnZlU2VhcmNoS2V5d29yZCgpO1xuICAgIH1cblxuICAgIC8vIENhbmNlbCB0eXBlZCBrZXl3b3JkIGFuZFxuICAgIC8vIHJlc2V0IHRvIHdoYXRldmVyIHRoZSBwcmV2aW91cyBzdGF0ZVxuICAgIC8vXG4gICAgLy8gVGhpcyBvcGVyYXRpb24gZG9lcyBub3QgY2F1c2UgbmV3IG5ldHdvcmsgcmVxdWVzdC5cbiAgICBwdWJsaWMgY2FuY2VsVHlwZWRLZXl3b3JkKCkge1xuICAgICAgICB0aGlzLnNlYXJjaENvbnRyb2wuc2V0VmFsdWUoJycpO1xuXG4gICAgICAgIC8vIEF1dG8gZm9jdXMgdGhlIHNlYXJjaCBpbnB1dFxuICAgICAgICB0aGlzLnNlYXJjaENvbnRyb2xFbGVtLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyBTdGFydHMgYSBuZXcgcm91bmQgb2Ygc2VhcmNoXG4gICAgLy9cbiAgICAvLyBUaGlzIG9wZXJhdGlvbiBjYXVzZXMgbmV3IG5ldHdvcmsgcmVxdWVzdC5cbiAgICBwdWJsaWMga2lja09mZlNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5lZmZlY3RpdmVLZXl3b3JkID0gdGhpcy5hbnlGdXR1cmVLZXl3b3JkO1xuICAgICAgICB0aGlzLm9uU2VhcmNoLmVtaXQodGhpcy5lZmZlY3RpdmVLZXl3b3JkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRLZXl3b3JkKGVtaXRFdmVudDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZW1pdEV2ZW50ID0gZW1pdEV2ZW50O1xuICAgICAgICB0aGlzLmVmZmVjdGl2ZUtleXdvcmQgPSAnJztcbiAgICAgICAgdGhpcy5jYW5jZWxUeXBlZEtleXdvcmQoKTtcbiAgICB9XG5cbiAgICAvLyBTdGFydCB0byBsaXN0ZW4gZm9yIHNlYXJjaCBrZXl3b3JkIGNoYW5nZVxuICAgIHN0YXJ0T2JzZXJ2ZVNlYXJjaEtleXdvcmQoKSB7XG4gICAgICAgIHRoaXMuX3NlYXJjaEtleXdvcmRTdWJyID0gdGhpcy5zZWFyY2hDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2VUaW1lKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoYSA9PiB7XG4gICAgICAgICAgICAgICAgYSA9IChhIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW55RnV0dXJlS2V5d29yZCA9IGE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWluTGVuZ3RoID4gMCAmJiB0aGlzLmFueUZ1dHVyZUtleXdvcmQubGVuZ3RoID49IHRoaXMubWluTGVuZ3RoICYmIHRoaXMuZW1pdEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2lja09mZlNlYXJjaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0b3BPYnNlcnZlU2VhcmNoS2V5d29yZCgpIHtcbiAgICAgICAgdGhpcy5fc2VhcmNoS2V5d29yZFN1YnIgJiYgdGhpcy5fc2VhcmNoS2V5d29yZFN1YnIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cblxufVxuIiwiPGZvcm0gW25nQ2xhc3NdPVwiZm9ybUNsYXNzXCIgKG5nU3VibWl0KT1cImtpY2tPZmZTZWFyY2goKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiICpuZ0lmPVwicHJlcGVuZFRleHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPnt7cHJlcGVuZFRleHR9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCBbbmdDbGFzc109XCJpbnB1dENsYXNzXCIgdHlwZT1cInRleHRcIiAjc2VhcmNoQ29udHJvbEVsZW1cbiAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJzZWFyY2hDb250cm9sXCJcbiAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwidHJ1ZVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBpY29uLW9ubHlcIiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJhbnlGdXR1cmVLZXl3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIkNhbmNlbFwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjYW5jZWxUeXBlZEtleXdvcmQoKVwiPlxuICAgICAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhVGltZXNcIj48L2ZhLWljb24+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGljb24tb25seVwiIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiU2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFTZWFyY2hcIj48L2ZhLWljb24+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9mb3JtPlxuXG4iXX0=