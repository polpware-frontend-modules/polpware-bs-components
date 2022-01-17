import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@40three/ngx-autofocus-directive";
import * as i4 from "@fortawesome/angular-fontawesome";
var _c0 = ["searchControlElem"];
function SearchBoxWidgetComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "span", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.prependText);
} }
function SearchBoxWidgetComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function SearchBoxWidgetComponent_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.cancelTypedKeyword(); });
    i0.ɵɵelement(1, "fa-icon", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r2.faTimes);
} }
var SearchBoxWidgetComponent = /** @class */ (function () {
    function SearchBoxWidgetComponent() {
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
    Object.defineProperty(SearchBoxWidgetComponent.prototype, "emitEvent", {
        get: function () {
            var old = this._emitEvent;
            this._emitEvent = true;
            return old;
        },
        set: function (v) {
            this._emitEvent = v;
        },
        enumerable: true,
        configurable: true
    });
    SearchBoxWidgetComponent.prototype.ngOnInit = function () {
        this.searchControl = new FormControl(this.initKeyword || '');
        this.startObserveSearchKeyword();
    };
    SearchBoxWidgetComponent.prototype.ngOnDestroy = function () {
        this.stopObserveSearchKeyword();
    };
    // Cancel typed keyword and
    // reset to whatever the previous state
    //
    // This operation does not cause new network request.
    SearchBoxWidgetComponent.prototype.cancelTypedKeyword = function () {
        this.searchControl.setValue('');
        // Auto focus the search input
        this.searchControlElem.nativeElement.focus();
    };
    // Starts a new round of search
    //
    // This operation causes new network request.
    SearchBoxWidgetComponent.prototype.kickOffSearch = function () {
        var k = this.anyFutureKeyword;
        this.onSearch.emit(k);
    };
    SearchBoxWidgetComponent.prototype.resetKeyword = function (emitEvent) {
        if (emitEvent === void 0) { emitEvent = false; }
        this.emitEvent = emitEvent;
        this.cancelTypedKeyword();
    };
    // Start to listen for search keyword change
    SearchBoxWidgetComponent.prototype.startObserveSearchKeyword = function () {
        var _this = this;
        this._searchKeywordSubr = this.searchControl.valueChanges
            .pipe(debounceTime(this.debounceTime))
            .subscribe(function (a) {
            a = (a || '').toLowerCase();
            _this.anyFutureKeyword = a;
            if (_this.minLength > 0 && _this.anyFutureKeyword.length >= _this.minLength && _this.emitEvent) {
                _this.kickOffSearch();
            }
        });
    };
    SearchBoxWidgetComponent.prototype.stopObserveSearchKeyword = function () {
        this._searchKeywordSubr && this._searchKeywordSubr.unsubscribe();
    };
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
    return SearchBoxWidgetComponent;
}());
export { SearchBoxWidgetComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvd2lkZ2V0cy9zZWFyY2gtYm94LXdpZGdldC9zZWFyY2gtYm94LXdpZGdldC5jb21wb25lbnQudHMiLCJsaWIvd2lkZ2V0cy9zZWFyY2gtYm94LXdpZGdldC9zZWFyY2gtYm94LXdpZGdldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXRFLE9BQU8sRUFBWSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUNGaEQsOEJBQ0k7SUFBQSxnQ0FBK0I7SUFBQSxZQUFlO0lBQUEsaUJBQU87SUFDekQsaUJBQU07OztJQUQ2QixlQUFlO0lBQWYsd0NBQWU7Ozs7SUFNOUMsa0NBR0k7SUFESSxxTUFBOEI7SUFDbEMsNkJBQW9DO0lBQ3hDLGlCQUFTOzs7SUFESSxlQUFnQjtJQUFoQixxQ0FBZ0I7O0FETnpDO0lBaUNJO1FBMUJBLGFBQVEsR0FBRyxRQUFRLENBQUM7UUFDcEIsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUdULGNBQVMsR0FBRyx3Q0FBd0MsQ0FBQztRQUNyRCxlQUFVLEdBQUcsY0FBYyxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsUUFBUSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBQzVCLG9CQUFvQjtRQUVwQixxQ0FBcUM7UUFDNUIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUVyQixhQUFRLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFXdEQsZUFBVSxHQUFZLElBQUksQ0FBQztJQUVuQixDQUFDO0lBRWpCLHNCQUFJLCtDQUFTO2FBSWI7WUFDSSxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQzthQVJELFVBQWMsQ0FBVTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQVFELDJDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELDhDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsMkJBQTJCO0lBQzNCLHVDQUF1QztJQUN2QyxFQUFFO0lBQ0YscURBQXFEO0lBQzlDLHFEQUFrQixHQUF6QjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWhDLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCwrQkFBK0I7SUFDL0IsRUFBRTtJQUNGLDZDQUE2QztJQUN0QyxnREFBYSxHQUFwQjtRQUNJLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sK0NBQVksR0FBbkIsVUFBb0IsU0FBMEI7UUFBMUIsMEJBQUEsRUFBQSxpQkFBMEI7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELDRDQUE0QztJQUM1Qyw0REFBeUIsR0FBekI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVk7YUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDckMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsU0FBUyxJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3hGLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN4QjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDJEQUF3QixHQUF4QjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckUsQ0FBQztvR0F4RlEsd0JBQXdCO2lFQUF4Qix3QkFBd0I7Ozs7OztZQ1hyQywrQkFDSTtZQUR3Qix5R0FBWSxtQkFBZSxJQUFDO1lBQ3BELDhCQUNJO1lBQUEseUVBQ0k7WUFFSiw4QkFHQTtZQUFBLDhCQUNJO1lBQUEsK0VBR0k7WUFFSixpQ0FFSTtZQUFBLDZCQUFxQztZQUN6QyxpQkFBUztZQUNiLGlCQUFNO1lBQ1YsaUJBQU07WUFDVixpQkFBTzs7WUFwQkQsdUNBQXFCO1lBRWMsZUFBbUI7WUFBbkIsc0NBQW1CO1lBRzdDLGVBQXNCO1lBQXRCLHdDQUFzQixrQ0FBQSxtQkFBQTtZQUlpQyxlQUF3QjtZQUF4QiwyQ0FBd0I7WUFPckUsZUFBaUI7WUFBakIsbUNBQWlCOzttQ0RoQjFDO0NBc0dDLEFBaEdELElBZ0dDO1NBM0ZZLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNuRDs7a0JBTUksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBSUwsS0FBSzs7a0JBRUwsTUFBTTs7a0JBR04sU0FBUzttQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmYVNlYXJjaCwgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlLCBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1icy1zZWFyY2gtYm94LXdpZGdldCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1ib3gtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zZWFyY2gtYm94LXdpZGdldC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQm94V2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgZmFTZWFyY2ggPSBmYVNlYXJjaDtcbiAgICBmYVRpbWVzID0gZmFUaW1lcztcblxuICAgIEBJbnB1dCgpIGluaXRLZXl3b3JkOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZm9ybUNsYXNzID0gJ2JvcmRlciByb3VuZGVkIG15LTIgcHktNCBweC00IGJnLWxpZ2h0JztcbiAgICBASW5wdXQoKSBpbnB1dENsYXNzID0gJ2Zvcm0tY29udHJvbCc7XG4gICAgQElucHV0KCkgcHJlcGVuZFRleHQgPSAnRmlsdGVyJztcbiAgICBASW5wdXQoKSBkZWJvdW5jZVRpbWUgPSA1MDA7XG4gICAgLy8gdG9kbzogTW9yZSBpbnB1dHNcblxuICAgIC8vIEFsbG93aW5nIGZvciBkaXNhYmxpbmcgYXV0byBzZWFyY2hcbiAgICBASW5wdXQoKSBtaW5MZW5ndGg6IG51bWJlciA9IDA7XG5cbiAgICBAT3V0cHV0KCkgb25TZWFyY2g6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLy8gU3VwcG9ydCBmaWx0ZXJcbiAgICBAVmlld0NoaWxkKCdzZWFyY2hDb250cm9sRWxlbScpXG4gICAgc2VhcmNoQ29udHJvbEVsZW06IEVsZW1lbnRSZWY7XG4gICAgLy8gU2VhcmNoIGNvbnRyb2wgaW5wdXRcbiAgICBwdWJsaWMgc2VhcmNoQ29udHJvbDogRm9ybUNvbnRyb2w7XG4gICAgYW55RnV0dXJlS2V5d29yZDogc3RyaW5nO1xuXG4gICAgX3NlYXJjaEtleXdvcmRTdWJyOiBTdWJzY3JpcHRpb247XG5cbiAgICBwcml2YXRlIF9lbWl0RXZlbnQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHNldCBlbWl0RXZlbnQodjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9lbWl0RXZlbnQgPSB2O1xuICAgIH1cblxuICAgIGdldCBlbWl0RXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IG9sZCA9IHRoaXMuX2VtaXRFdmVudDtcbiAgICAgICAgdGhpcy5fZW1pdEV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIG9sZDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWFyY2hDb250cm9sID0gbmV3IEZvcm1Db250cm9sKHRoaXMuaW5pdEtleXdvcmQgfHwgJycpO1xuICAgICAgICB0aGlzLnN0YXJ0T2JzZXJ2ZVNlYXJjaEtleXdvcmQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9wT2JzZXJ2ZVNlYXJjaEtleXdvcmQoKTtcbiAgICB9XG5cbiAgICAvLyBDYW5jZWwgdHlwZWQga2V5d29yZCBhbmRcbiAgICAvLyByZXNldCB0byB3aGF0ZXZlciB0aGUgcHJldmlvdXMgc3RhdGVcbiAgICAvL1xuICAgIC8vIFRoaXMgb3BlcmF0aW9uIGRvZXMgbm90IGNhdXNlIG5ldyBuZXR3b3JrIHJlcXVlc3QuXG4gICAgcHVibGljIGNhbmNlbFR5cGVkS2V5d29yZCgpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hDb250cm9sLnNldFZhbHVlKCcnKTtcblxuICAgICAgICAvLyBBdXRvIGZvY3VzIHRoZSBzZWFyY2ggaW5wdXRcbiAgICAgICAgdGhpcy5zZWFyY2hDb250cm9sRWxlbS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLy8gU3RhcnRzIGEgbmV3IHJvdW5kIG9mIHNlYXJjaFxuICAgIC8vXG4gICAgLy8gVGhpcyBvcGVyYXRpb24gY2F1c2VzIG5ldyBuZXR3b3JrIHJlcXVlc3QuXG4gICAgcHVibGljIGtpY2tPZmZTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0IGsgPSB0aGlzLmFueUZ1dHVyZUtleXdvcmQ7XG4gICAgICAgIHRoaXMub25TZWFyY2guZW1pdChrKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRLZXl3b3JkKGVtaXRFdmVudDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZW1pdEV2ZW50ID0gZW1pdEV2ZW50O1xuICAgICAgICB0aGlzLmNhbmNlbFR5cGVkS2V5d29yZCgpO1xuICAgIH1cblxuICAgIC8vIFN0YXJ0IHRvIGxpc3RlbiBmb3Igc2VhcmNoIGtleXdvcmQgY2hhbmdlXG4gICAgc3RhcnRPYnNlcnZlU2VhcmNoS2V5d29yZCgpIHtcbiAgICAgICAgdGhpcy5fc2VhcmNoS2V5d29yZFN1YnIgPSB0aGlzLnNlYXJjaENvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAgICAgICAucGlwZShkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZVRpbWUpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShhID0+IHtcbiAgICAgICAgICAgICAgICBhID0gKGEgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbnlGdXR1cmVLZXl3b3JkID0gYTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5taW5MZW5ndGggPiAwICYmIHRoaXMuYW55RnV0dXJlS2V5d29yZC5sZW5ndGggPj0gdGhpcy5taW5MZW5ndGggJiYgdGhpcy5lbWl0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5raWNrT2ZmU2VhcmNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RvcE9ic2VydmVTZWFyY2hLZXl3b3JkKCkge1xuICAgICAgICB0aGlzLl9zZWFyY2hLZXl3b3JkU3ViciAmJiB0aGlzLl9zZWFyY2hLZXl3b3JkU3Vici51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuXG59XG4iLCI8Zm9ybSBbbmdDbGFzc109XCJmb3JtQ2xhc3NcIiAobmdTdWJtaXQpPVwia2lja09mZlNlYXJjaCgpXCI+XG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCIgKm5nSWY9XCJwcmVwZW5kVGV4dFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+e3twcmVwZW5kVGV4dH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIiB0eXBlPVwidGV4dFwiICNzZWFyY2hDb250cm9sRWxlbVxuICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cInNlYXJjaENvbnRyb2xcIlxuICAgICAgICAgICAgICAgW2F1dG9mb2N1c109XCJ0cnVlXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGljb24tb25seVwiIHR5cGU9XCJidXR0b25cIiAqbmdJZj1cImFueUZ1dHVyZUtleXdvcmRcIlxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiQ2FuY2VsXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNhbmNlbFR5cGVkS2V5d29yZCgpXCI+XG4gICAgICAgICAgICAgICAgPGZhLWljb24gW2ljb25dPVwiZmFUaW1lc1wiPjwvZmEtaWNvbj4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgaWNvbi1vbmx5XCIgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJTZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVNlYXJjaFwiPjwvZmEtaWNvbj4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Zvcm0+XG5cbiJdfQ==