import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@fortawesome/angular-fontawesome";
import * as i4 from "@40three/ngx-autofocus-directive";
const _c0 = ["searchControlElem"];
function SearchBoxWidgetComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.prependText);
} }
function SearchBoxWidgetComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function SearchBoxWidgetComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.resetKeyword(true)); });
    i0.ɵɵelement(1, "fa-icon", 7);
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
        this.searchControl = new UntypedFormControl(this.initKeyword || '');
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
        this.onSearch.emit();
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
SearchBoxWidgetComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchBoxWidgetComponent, selectors: [["polp-bs-search-box-widget"]], viewQuery: function SearchBoxWidgetComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchControlElem = _t.first);
    } }, inputs: { initKeyword: "initKeyword", formClass: "formClass", inputClass: "inputClass", prependText: "prependText", debounceTime: "debounceTime", minLength: "minLength" }, outputs: { onSearch: "onSearch" }, decls: 8, vars: 7, consts: [[3, "ngClass", "ngSubmit"], [1, "input-group"], ["class", "input-group-text", 4, "ngIf"], ["type", "text", 3, "ngClass", "formControl", "autofocus"], ["searchControlElem", ""], ["class", "btn btn-secondary icon-only", "type", "button", "tooltip", "Cancel", 3, "click", 4, "ngIf"], ["type", "submit", "tooltip", "Search", 1, "btn", "btn-primary", "icon-only"], [3, "icon"], [1, "input-group-text"], ["type", "button", "tooltip", "Cancel", 1, "btn", "btn-secondary", "icon-only", 3, "click"]], template: function SearchBoxWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("ngSubmit", function SearchBoxWidgetComponent_Template_form_ngSubmit_0_listener() { return ctx.kickOffSearch(); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, SearchBoxWidgetComponent_span_2_Template, 2, 1, "span", 2);
        i0.ɵɵelement(3, "input", 3, 4);
        i0.ɵɵtemplate(5, SearchBoxWidgetComponent_button_5_Template, 2, 1, "button", 5);
        i0.ɵɵelementStart(6, "button", 6);
        i0.ɵɵelement(7, "fa-icon", 7);
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.formClass);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.prependText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.inputClass)("formControl", ctx.searchControl)("autofocus", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.anyFutureKeyword);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("icon", ctx.faSearch);
    } }, dependencies: [i1.NgClass, i1.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.NgForm, i2.FormControlDirective, i3.FaIconComponent, i4.AutofocusDirective] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchBoxWidgetComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-search-box-widget', template: "<form [ngClass]=\"formClass\" (ngSubmit)=\"kickOffSearch()\">\n    <div class=\"input-group\">\n        <span class=\"input-group-text\" *ngIf=\"prependText\">{{prependText}}</span>\n        <input [ngClass]=\"inputClass\" type=\"text\" #searchControlElem\n               [formControl]=\"searchControl\"\n               [autofocus]=\"true\" />\n        <button class=\"btn btn-secondary icon-only\" type=\"button\" *ngIf=\"anyFutureKeyword\"\n                tooltip=\"Cancel\"\n                (click)=\"resetKeyword(true)\">\n            <fa-icon [icon]=\"faTimes\"></fa-icon>                \n        </button>\n        <button class=\"btn btn-primary icon-only\" type=\"submit\"\n                tooltip=\"Search\">\n            <fa-icon [icon]=\"faSearch\"></fa-icon>                \n        </button>\n    </div>\n</form>\n\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvc2VhcmNoLWJveC13aWRnZXQvc2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvc2VhcmNoLWJveC13aWRnZXQvc2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztJQ0Z0QywrQkFBbUQ7SUFBQSxZQUFlO0lBQUEsaUJBQU87OztJQUF0QixlQUFlO0lBQWYsd0NBQWU7Ozs7SUFJbEUsaUNBRXFDO0lBQTdCLHdLQUFTLGVBQUEsb0JBQWEsSUFBSSxDQUFDLENBQUEsSUFBQztJQUNoQyw2QkFBb0M7SUFDeEMsaUJBQVM7OztJQURJLGVBQWdCO0lBQWhCLHFDQUFnQjs7QURFckMsTUFBTSxPQUFPLHdCQUF3QjtJQThCakM7UUE1QkEsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNwQixZQUFPLEdBQUcsT0FBTyxDQUFDO1FBR1QsY0FBUyxHQUFHLHdDQUF3QyxDQUFDO1FBQ3JELGVBQVUsR0FBRyxjQUFjLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxRQUFR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akIsc0NBQWlCO1FBQzFDLGVBQXNCO1FBQXRCLHdDQUFzQixrQ0FBQSxtQkFBQTtRQUc4QixlQUFzQjtRQUF0QiwyQ0FBc0I7UUFPcEUsZUFBaUI7UUFBakIsbUNBQWlCOzt1RkRGekIsd0JBQXdCO2NBTHBDLFNBQVM7MkJBQ0ksMkJBQTJCO3NDQVM1QixXQUFXO2tCQUFuQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUlHLFNBQVM7a0JBQWpCLEtBQUs7WUFFSSxRQUFRO2tCQUFqQixNQUFNO1lBSVAsaUJBQWlCO2tCQURoQixTQUFTO21CQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVbnR5cGVkRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmYVNlYXJjaCwgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXNlYXJjaC1ib3gtd2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NlYXJjaC1ib3gtd2lkZ2V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBmYVNlYXJjaCA9IGZhU2VhcmNoO1xuICAgIGZhVGltZXMgPSBmYVRpbWVzO1xuXG4gICAgQElucHV0KCkgaW5pdEtleXdvcmQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBmb3JtQ2xhc3MgPSAnYm9yZGVyIHJvdW5kZWQgbXktMiBweS00IHB4LTQgYmctbGlnaHQnO1xuICAgIEBJbnB1dCgpIGlucHV0Q2xhc3MgPSAnZm9ybS1jb250cm9sJztcbiAgICBASW5wdXQoKSBwcmVwZW5kVGV4dCA9ICdGaWx0ZXInO1xuICAgIEBJbnB1dCgpIGRlYm91bmNlVGltZSA9IDUwMDtcbiAgICAvLyB0b2RvOiBNb3JlIGlucHV0c1xuXG4gICAgLy8gQWxsb3dpbmcgZm9yIGRpc2FibGluZyBhdXRvIHNlYXJjaFxuICAgIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMDtcblxuICAgIEBPdXRwdXQoKSBvblNlYXJjaDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLy8gU3VwcG9ydCBmaWx0ZXJcbiAgICBAVmlld0NoaWxkKCdzZWFyY2hDb250cm9sRWxlbScpXG4gICAgc2VhcmNoQ29udHJvbEVsZW06IEVsZW1lbnRSZWY7XG4gICAgLy8gU2VhcmNoIGNvbnRyb2wgaW5wdXRcbiAgICBwdWJsaWMgc2VhcmNoQ29udHJvbDogVW50eXBlZEZvcm1Db250cm9sO1xuICAgIGFueUZ1dHVyZUtleXdvcmQ6IHN0cmluZztcbiAgICAvLyBlZmZlY3RpdmUga2V5d29yZFxuICAgIGVmZmVjdGl2ZUtleXdvcmQ6IHN0cmluZztcblxuICAgIF9zZWFyY2hLZXl3b3JkU3VicjogU3Vic2NyaXB0aW9uO1xuXG4gICAgcHJpdmF0ZSBfZW1pdEV2ZW50OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgc2V0IGVtaXRFdmVudCh2OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2VtaXRFdmVudCA9IHY7XG4gICAgfVxuXG4gICAgZ2V0IGVtaXRFdmVudCgpIHtcbiAgICAgICAgY29uc3Qgb2xkID0gdGhpcy5fZW1pdEV2ZW50O1xuICAgICAgICB0aGlzLl9lbWl0RXZlbnQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIG9sZDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWFyY2hDb250cm9sID0gbmV3IFVudHlwZWRGb3JtQ29udHJvbCh0aGlzLmluaXRLZXl3b3JkIHx8ICcnKTtcbiAgICAgICAgdGhpcy5lZmZlY3RpdmVLZXl3b3JkID0gdGhpcy5pbml0S2V5d29yZDtcbiAgICAgICAgdGhpcy5zdGFydE9ic2VydmVTZWFyY2hLZXl3b3JkKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcE9ic2VydmVTZWFyY2hLZXl3b3JkKCk7XG4gICAgfVxuXG4gICAgLy8gQ2FuY2VsIHR5cGVkIGtleXdvcmQgYW5kXG4gICAgLy8gcmVzZXQgdG8gd2hhdGV2ZXIgdGhlIHByZXZpb3VzIHN0YXRlXG4gICAgLy9cbiAgICAvLyBUaGlzIG9wZXJhdGlvbiBkb2VzIG5vdCBjYXVzZSBuZXcgbmV0d29yayByZXF1ZXN0LlxuICAgIHB1YmxpYyBjYW5jZWxUeXBlZEtleXdvcmQoKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoQ29udHJvbC5zZXRWYWx1ZSgnJyk7XG5cbiAgICAgICAgLy8gQXV0byBmb2N1cyB0aGUgc2VhcmNoIGlucHV0XG4gICAgICAgIHRoaXMuc2VhcmNoQ29udHJvbEVsZW0ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8vIFN0YXJ0cyBhIG5ldyByb3VuZCBvZiBzZWFyY2hcbiAgICAvL1xuICAgIC8vIFRoaXMgb3BlcmF0aW9uIGNhdXNlcyBuZXcgbmV0d29yayByZXF1ZXN0LlxuICAgIHB1YmxpYyBraWNrT2ZmU2VhcmNoKCkge1xuICAgICAgICB0aGlzLmVmZmVjdGl2ZUtleXdvcmQgPSB0aGlzLmFueUZ1dHVyZUtleXdvcmQ7XG4gICAgICAgIHRoaXMub25TZWFyY2guZW1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldEtleXdvcmQoZW1pdEV2ZW50OiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5lbWl0RXZlbnQgPSBlbWl0RXZlbnQ7XG4gICAgICAgIHRoaXMuY2FuY2VsVHlwZWRLZXl3b3JkKCk7XG4gICAgfVxuXG4gICAgLy8gU3RhcnQgdG8gbGlzdGVuIGZvciBzZWFyY2gga2V5d29yZCBjaGFuZ2VcbiAgICBzdGFydE9ic2VydmVTZWFyY2hLZXl3b3JkKCkge1xuICAgICAgICB0aGlzLl9zZWFyY2hLZXl3b3JkU3ViciA9IHRoaXMuc2VhcmNoQ29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgICAgICAgIC5waXBlKGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlVGltZSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGEgPT4ge1xuICAgICAgICAgICAgICAgIGEgPSAoYSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFueUZ1dHVyZUtleXdvcmQgPSBhO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1pbkxlbmd0aCA+IDAgJiYgdGhpcy5hbnlGdXR1cmVLZXl3b3JkLmxlbmd0aCA+PSB0aGlzLm1pbkxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmtpY2tPZmZTZWFyY2goKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZW1pdEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2lja09mZlNlYXJjaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0b3BPYnNlcnZlU2VhcmNoS2V5d29yZCgpIHtcbiAgICAgICAgdGhpcy5fc2VhcmNoS2V5d29yZFN1YnIgJiYgdGhpcy5fc2VhcmNoS2V5d29yZFN1YnIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cblxufVxuIiwiPGZvcm0gW25nQ2xhc3NdPVwiZm9ybUNsYXNzXCIgKG5nU3VibWl0KT1cImtpY2tPZmZTZWFyY2goKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIiAqbmdJZj1cInByZXBlbmRUZXh0XCI+e3twcmVwZW5kVGV4dH19PC9zcGFuPlxuICAgICAgICA8aW5wdXQgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiIHR5cGU9XCJ0ZXh0XCIgI3NlYXJjaENvbnRyb2xFbGVtXG4gICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwic2VhcmNoQ29udHJvbFwiXG4gICAgICAgICAgICAgICBbYXV0b2ZvY3VzXT1cInRydWVcIiAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgaWNvbi1vbmx5XCIgdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwiYW55RnV0dXJlS2V5d29yZFwiXG4gICAgICAgICAgICAgICAgdG9vbHRpcD1cIkNhbmNlbFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInJlc2V0S2V5d29yZCh0cnVlKVwiPlxuICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFUaW1lc1wiPjwvZmEtaWNvbj4gICAgICAgICAgICAgICAgXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGljb24tb25seVwiIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJTZWFyY2hcIj5cbiAgICAgICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhU2VhcmNoXCI+PC9mYS1pY29uPiAgICAgICAgICAgICAgICBcbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2Zvcm0+XG5cbiJdfQ==