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
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.prependText);
} }
function SearchBoxWidgetComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function SearchBoxWidgetComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetKeyword(true)); });
    i0.ɵɵelement(1, "fa-icon", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("icon", ctx_r1.faTimes);
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
    static { this.ɵfac = function SearchBoxWidgetComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SearchBoxWidgetComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchBoxWidgetComponent, selectors: [["polp-bs-search-box-widget"]], viewQuery: function SearchBoxWidgetComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchControlElem = _t.first);
        } }, inputs: { initKeyword: "initKeyword", formClass: "formClass", inputClass: "inputClass", prependText: "prependText", debounceTime: "debounceTime", minLength: "minLength" }, outputs: { onSearch: "onSearch" }, decls: 8, vars: 7, consts: [["searchControlElem", ""], [3, "ngSubmit", "ngClass"], [1, "input-group"], ["class", "input-group-text", 4, "ngIf"], ["type", "text", 3, "ngClass", "formControl", "autofocus"], ["class", "btn btn-secondary icon-only", "type", "button", "tooltip", "Cancel", 3, "click", 4, "ngIf"], ["type", "submit", "tooltip", "Search", 1, "btn", "btn-primary", "icon-only"], [3, "icon"], [1, "input-group-text"], ["type", "button", "tooltip", "Cancel", 1, "btn", "btn-secondary", "icon-only", 3, "click"]], template: function SearchBoxWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 1);
            i0.ɵɵlistener("ngSubmit", function SearchBoxWidgetComponent_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.kickOffSearch()); });
            i0.ɵɵelementStart(1, "div", 2);
            i0.ɵɵtemplate(2, SearchBoxWidgetComponent_span_2_Template, 2, 1, "span", 3);
            i0.ɵɵelement(3, "input", 4, 0);
            i0.ɵɵtemplate(5, SearchBoxWidgetComponent_button_5_Template, 2, 1, "button", 5);
            i0.ɵɵelementStart(6, "button", 6);
            i0.ɵɵelement(7, "fa-icon", 7);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.formClass);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.prependText);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.inputClass)("formControl", ctx.searchControl)("autofocus", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.anyFutureKeyword);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("icon", ctx.faSearch);
        } }, dependencies: [i1.NgClass, i1.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.NgForm, i2.FormControlDirective, i3.FaIconComponent, i4.AutofocusDirective] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchBoxWidgetComponent, [{
        type: Component,
        args: [{ selector: 'polp-bs-search-box-widget', template: "<form [ngClass]=\"formClass\" (ngSubmit)=\"kickOffSearch()\">\n    <div class=\"input-group\">\n        <span class=\"input-group-text\" *ngIf=\"prependText\">{{prependText}}</span>\n        <input [ngClass]=\"inputClass\" type=\"text\" #searchControlElem\n               [formControl]=\"searchControl\"\n               [autofocus]=\"true\" />\n        <button class=\"btn btn-secondary icon-only\" type=\"button\" *ngIf=\"anyFutureKeyword\"\n                tooltip=\"Cancel\"\n                (click)=\"resetKeyword(true)\">\n            <fa-icon [icon]=\"faTimes\"></fa-icon>                \n        </button>\n        <button class=\"btn btn-primary icon-only\" type=\"submit\"\n                tooltip=\"Search\">\n            <fa-icon [icon]=\"faSearch\"></fa-icon>                \n        </button>\n    </div>\n</form>\n\n" }]
    }], () => [], { initKeyword: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SearchBoxWidgetComponent, { className: "SearchBoxWidgetComponent", filePath: "lib\\widgets\\search-box-widget\\search-box-widget.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvc2VhcmNoLWJveC13aWRnZXQvc2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL3dpZGdldHMvc2VhcmNoLWJveC13aWRnZXQvc2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztJQ0Z0QywrQkFBbUQ7SUFBQSxZQUFlO0lBQUEsaUJBQU87OztJQUF0QixjQUFlO0lBQWYsd0NBQWU7Ozs7SUFJbEUsaUNBRXFDO0lBQTdCLHVMQUFTLG9CQUFhLElBQUksQ0FBQyxLQUFDO0lBQ2hDLDZCQUFvQztJQUN4QyxpQkFBUzs7O0lBREksY0FBZ0I7SUFBaEIscUNBQWdCOztBREVyQyxNQUFNLE9BQU8sd0JBQXdCO0lBOEJqQztRQTVCQSxhQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3BCLFlBQU8sR0FBRyxPQUFPLENBQUM7UUFHVCxjQUFTLEdBQUcsd0NBQXdDLENBQUM7UUFDckQsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUM1QixnQkFBVyxHQUFHLFFBQVEsQ0FBQztRQUN2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RCx1Q0FBcUI7WUFFYSxlQUFpQjtZQUFqQixzQ0FBaUI7WUFDMUMsY0FBc0I7WUFFdEIsQUFEQSxBQURBLHdDQUFzQixrQ0FDTyxtQkFDWDtZQUNrQyxlQUFzQjtZQUF0QiwyQ0FBc0I7WUFPcEUsZUFBaUI7WUFBakIsbUNBQWlCOzs7aUZERnpCLHdCQUF3QjtjQUxwQyxTQUFTOzJCQUNJLDJCQUEyQjtvQkFTNUIsV0FBVztrQkFBbkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFJRyxTQUFTO2tCQUFqQixLQUFLO1lBRUksUUFBUTtrQkFBakIsTUFBTTtZQUlQLGlCQUFpQjtrQkFEaEIsU0FBUzttQkFBQyxtQkFBbUI7O2tGQWxCckIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVudHlwZWRGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGZhU2VhcmNoLCBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtc2VhcmNoLWJveC13aWRnZXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtYm94LXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGZhU2VhcmNoID0gZmFTZWFyY2g7XG4gICAgZmFUaW1lcyA9IGZhVGltZXM7XG5cbiAgICBASW5wdXQoKSBpbml0S2V5d29yZDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZvcm1DbGFzcyA9ICdib3JkZXIgcm91bmRlZCBteS0yIHB5LTQgcHgtNCBiZy1saWdodCc7XG4gICAgQElucHV0KCkgaW5wdXRDbGFzcyA9ICdmb3JtLWNvbnRyb2wnO1xuICAgIEBJbnB1dCgpIHByZXBlbmRUZXh0ID0gJ0ZpbHRlcic7XG4gICAgQElucHV0KCkgZGVib3VuY2VUaW1lID0gNTAwO1xuICAgIC8vIHRvZG86IE1vcmUgaW5wdXRzXG5cbiAgICAvLyBBbGxvd2luZyBmb3IgZGlzYWJsaW5nIGF1dG8gc2VhcmNoXG4gICAgQElucHV0KCkgbWluTGVuZ3RoOiBudW1iZXIgPSAwO1xuXG4gICAgQE91dHB1dCgpIG9uU2VhcmNoOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICAvLyBTdXBwb3J0IGZpbHRlclxuICAgIEBWaWV3Q2hpbGQoJ3NlYXJjaENvbnRyb2xFbGVtJylcbiAgICBzZWFyY2hDb250cm9sRWxlbTogRWxlbWVudFJlZjtcbiAgICAvLyBTZWFyY2ggY29udHJvbCBpbnB1dFxuICAgIHB1YmxpYyBzZWFyY2hDb250cm9sOiBVbnR5cGVkRm9ybUNvbnRyb2w7XG4gICAgYW55RnV0dXJlS2V5d29yZDogc3RyaW5nO1xuICAgIC8vIGVmZmVjdGl2ZSBrZXl3b3JkXG4gICAgZWZmZWN0aXZlS2V5d29yZDogc3RyaW5nO1xuXG4gICAgX3NlYXJjaEtleXdvcmRTdWJyOiBTdWJzY3JpcHRpb247XG5cbiAgICBwcml2YXRlIF9lbWl0RXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBzZXQgZW1pdEV2ZW50KHY6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZW1pdEV2ZW50ID0gdjtcbiAgICB9XG5cbiAgICBnZXQgZW1pdEV2ZW50KCkge1xuICAgICAgICBjb25zdCBvbGQgPSB0aGlzLl9lbWl0RXZlbnQ7XG4gICAgICAgIHRoaXMuX2VtaXRFdmVudCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gb2xkO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlYXJjaENvbnRyb2wgPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKHRoaXMuaW5pdEtleXdvcmQgfHwgJycpO1xuICAgICAgICB0aGlzLmVmZmVjdGl2ZUtleXdvcmQgPSB0aGlzLmluaXRLZXl3b3JkO1xuICAgICAgICB0aGlzLnN0YXJ0T2JzZXJ2ZVNlYXJjaEtleXdvcmQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9wT2JzZXJ2ZVNlYXJjaEtleXdvcmQoKTtcbiAgICB9XG5cbiAgICAvLyBDYW5jZWwgdHlwZWQga2V5d29yZCBhbmRcbiAgICAvLyByZXNldCB0byB3aGF0ZXZlciB0aGUgcHJldmlvdXMgc3RhdGVcbiAgICAvL1xuICAgIC8vIFRoaXMgb3BlcmF0aW9uIGRvZXMgbm90IGNhdXNlIG5ldyBuZXR3b3JrIHJlcXVlc3QuXG4gICAgcHVibGljIGNhbmNlbFR5cGVkS2V5d29yZCgpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hDb250cm9sLnNldFZhbHVlKCcnKTtcblxuICAgICAgICAvLyBBdXRvIGZvY3VzIHRoZSBzZWFyY2ggaW5wdXRcbiAgICAgICAgdGhpcy5zZWFyY2hDb250cm9sRWxlbS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLy8gU3RhcnRzIGEgbmV3IHJvdW5kIG9mIHNlYXJjaFxuICAgIC8vXG4gICAgLy8gVGhpcyBvcGVyYXRpb24gY2F1c2VzIG5ldyBuZXR3b3JrIHJlcXVlc3QuXG4gICAgcHVibGljIGtpY2tPZmZTZWFyY2goKSB7XG4gICAgICAgIHRoaXMuZWZmZWN0aXZlS2V5d29yZCA9IHRoaXMuYW55RnV0dXJlS2V5d29yZDtcbiAgICAgICAgdGhpcy5vblNlYXJjaC5lbWl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0S2V5d29yZChlbWl0RXZlbnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmVtaXRFdmVudCA9IGVtaXRFdmVudDtcbiAgICAgICAgdGhpcy5jYW5jZWxUeXBlZEtleXdvcmQoKTtcbiAgICB9XG5cbiAgICAvLyBTdGFydCB0byBsaXN0ZW4gZm9yIHNlYXJjaCBrZXl3b3JkIGNoYW5nZVxuICAgIHN0YXJ0T2JzZXJ2ZVNlYXJjaEtleXdvcmQoKSB7XG4gICAgICAgIHRoaXMuX3NlYXJjaEtleXdvcmRTdWJyID0gdGhpcy5zZWFyY2hDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2VUaW1lKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoYSA9PiB7XG4gICAgICAgICAgICAgICAgYSA9IChhIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW55RnV0dXJlS2V5d29yZCA9IGE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWluTGVuZ3RoID4gMCAmJiB0aGlzLmFueUZ1dHVyZUtleXdvcmQubGVuZ3RoID49IHRoaXMubWluTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2lja09mZlNlYXJjaCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbWl0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5raWNrT2ZmU2VhcmNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RvcE9ic2VydmVTZWFyY2hLZXl3b3JkKCkge1xuICAgICAgICB0aGlzLl9zZWFyY2hLZXl3b3JkU3ViciAmJiB0aGlzLl9zZWFyY2hLZXl3b3JkU3Vici51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuXG59XG4iLCI8Zm9ybSBbbmdDbGFzc109XCJmb3JtQ2xhc3NcIiAobmdTdWJtaXQpPVwia2lja09mZlNlYXJjaCgpXCI+XG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiICpuZ0lmPVwicHJlcGVuZFRleHRcIj57e3ByZXBlbmRUZXh0fX08L3NwYW4+XG4gICAgICAgIDxpbnB1dCBbbmdDbGFzc109XCJpbnB1dENsYXNzXCIgdHlwZT1cInRleHRcIiAjc2VhcmNoQ29udHJvbEVsZW1cbiAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJzZWFyY2hDb250cm9sXCJcbiAgICAgICAgICAgICAgIFthdXRvZm9jdXNdPVwidHJ1ZVwiIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBpY29uLW9ubHlcIiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJhbnlGdXR1cmVLZXl3b3JkXCJcbiAgICAgICAgICAgICAgICB0b29sdGlwPVwiQ2FuY2VsXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicmVzZXRLZXl3b3JkKHRydWUpXCI+XG4gICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVRpbWVzXCI+PC9mYS1pY29uPiAgICAgICAgICAgICAgICBcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgaWNvbi1vbmx5XCIgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgdG9vbHRpcD1cIlNlYXJjaFwiPlxuICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFTZWFyY2hcIj48L2ZhLWljb24+ICAgICAgICAgICAgICAgIFxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvZm9ybT5cblxuIl19