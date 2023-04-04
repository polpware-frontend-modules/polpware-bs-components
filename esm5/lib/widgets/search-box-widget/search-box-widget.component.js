import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { debounceTime } from 'rxjs/operators';
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
        this._emitEvent = false;
    }
    Object.defineProperty(SearchBoxWidgetComponent.prototype, "emitEvent", {
        get: function () {
            var old = this._emitEvent;
            this._emitEvent = false;
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
        this.effectiveKeyword = this.initKeyword;
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
        this.effectiveKeyword = this.anyFutureKeyword;
        this.onSearch.emit();
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
            if (_this.minLength > 0 && _this.anyFutureKeyword.length >= _this.minLength) {
                _this.kickOffSearch();
            }
            else if (_this.emitEvent) {
                _this.kickOffSearch();
            }
        });
    };
    SearchBoxWidgetComponent.prototype.stopObserveSearchKeyword = function () {
        this._searchKeywordSubr && this._searchKeywordSubr.unsubscribe();
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SearchBoxWidgetComponent.prototype, "initKeyword", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SearchBoxWidgetComponent.prototype, "formClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SearchBoxWidgetComponent.prototype, "inputClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SearchBoxWidgetComponent.prototype, "prependText", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SearchBoxWidgetComponent.prototype, "debounceTime", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], SearchBoxWidgetComponent.prototype, "minLength", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SearchBoxWidgetComponent.prototype, "onSearch", void 0);
    __decorate([
        ViewChild('searchControlElem'),
        __metadata("design:type", ElementRef)
    ], SearchBoxWidgetComponent.prototype, "searchControlElem", void 0);
    SearchBoxWidgetComponent = __decorate([
        Component({
            selector: 'polp-bs-search-box-widget',
            template: "<form [ngClass]=\"formClass\" (ngSubmit)=\"kickOffSearch()\">\n    <div class=\"input-group\">\n        <div class=\"input-group-prepend\" *ngIf=\"prependText\">\n            <span class=\"input-group-text\">{{prependText}}</span>\n        </div>\n        <input [ngClass]=\"inputClass\" type=\"text\" #searchControlElem\n               [formControl]=\"searchControl\"\n               [autofocus]=\"true\" />\n        <div class=\"input-group-append\">\n            <button class=\"btn btn-secondary icon-only\" type=\"button\" *ngIf=\"anyFutureKeyword\"\n                    tooltip=\"Cancel\"\n                    (click)=\"resetKeyword(true)\">\n                <fa-icon [icon]=\"faTimes\"></fa-icon>                \n            </button>\n            <button class=\"btn btn-primary icon-only\" type=\"submit\"\n                    tooltip=\"Search\">\n                <fa-icon [icon]=\"faSearch\"></fa-icon>                \n            </button>\n        </div>\n    </div>\n</form>\n\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], SearchBoxWidgetComponent);
    return SearchBoxWidgetComponent;
}());
export { SearchBoxWidgetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvd2lkZ2V0cy9zZWFyY2gtYm94LXdpZGdldC9zZWFyY2gtYm94LXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzlDO0lBOEJJO1FBNUJBLGFBQVEsR0FBRyxRQUFRLENBQUM7UUFDcEIsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUdULGNBQVMsR0FBRyx3Q0FBd0MsQ0FBQztRQUNyRCxlQUFVLEdBQUcsY0FBYyxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsUUFBUSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBQzVCLG9CQUFvQjtRQUVwQixxQ0FBcUM7UUFDNUIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUVyQixhQUFRLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFhcEQsZUFBVSxHQUFZLEtBQUssQ0FBQztJQUVwQixDQUFDO0lBRWpCLHNCQUFJLCtDQUFTO2FBSWI7WUFDSSxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQzthQVJELFVBQWMsQ0FBVTtZQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMs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dHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmYVNlYXJjaCwgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXNlYXJjaC1ib3gtd2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NlYXJjaC1ib3gtd2lkZ2V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBmYVNlYXJjaCA9IGZhU2VhcmNoO1xuICAgIGZhVGltZXMgPSBmYVRpbWVzO1xuXG4gICAgQElucHV0KCkgaW5pdEtleXdvcmQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBmb3JtQ2xhc3MgPSAnYm9yZGVyIHJvdW5kZWQgbXktMiBweS00IHB4LTQgYmctbGlnaHQnO1xuICAgIEBJbnB1dCgpIGlucHV0Q2xhc3MgPSAnZm9ybS1jb250cm9sJztcbiAgICBASW5wdXQoKSBwcmVwZW5kVGV4dCA9ICdGaWx0ZXInO1xuICAgIEBJbnB1dCgpIGRlYm91bmNlVGltZSA9IDUwMDtcbiAgICAvLyB0b2RvOiBNb3JlIGlucHV0c1xuXG4gICAgLy8gQWxsb3dpbmcgZm9yIGRpc2FibGluZyBhdXRvIHNlYXJjaFxuICAgIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMDtcblxuICAgIEBPdXRwdXQoKSBvblNlYXJjaDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLy8gU3VwcG9ydCBmaWx0ZXJcbiAgICBAVmlld0NoaWxkKCdzZWFyY2hDb250cm9sRWxlbScpXG4gICAgc2VhcmNoQ29udHJvbEVsZW06IEVsZW1lbnRSZWY7XG4gICAgLy8gU2VhcmNoIGNvbnRyb2wgaW5wdXRcbiAgICBwdWJsaWMgc2VhcmNoQ29udHJvbDogRm9ybUNvbnRyb2w7XG4gICAgYW55RnV0dXJlS2V5d29yZDogc3RyaW5nO1xuICAgIC8vIGVmZmVjdGl2ZSBrZXl3b3JkXG4gICAgZWZmZWN0aXZlS2V5d29yZDogc3RyaW5nO1xuXG4gICAgX3NlYXJjaEtleXdvcmRTdWJyOiBTdWJzY3JpcHRpb247XG5cbiAgICBwcml2YXRlIF9lbWl0RXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBzZXQgZW1pdEV2ZW50KHY6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZW1pdEV2ZW50ID0gdjtcbiAgICB9XG5cbiAgICBnZXQgZW1pdEV2ZW50KCkge1xuICAgICAgICBjb25zdCBvbGQgPSB0aGlzLl9lbWl0RXZlbnQ7XG4gICAgICAgIHRoaXMuX2VtaXRFdmVudCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gb2xkO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlYXJjaENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGhpcy5pbml0S2V5d29yZCB8fCAnJyk7XG4gICAgICAgIHRoaXMuZWZmZWN0aXZlS2V5d29yZCA9IHRoaXMuaW5pdEtleXdvcmQ7XG4gICAgICAgIHRoaXMuc3RhcnRPYnNlcnZlU2VhcmNoS2V5d29yZCgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3BPYnNlcnZlU2VhcmNoS2V5d29yZCgpO1xuICAgIH1cblxuICAgIC8vIENhbmNlbCB0eXBlZCBrZXl3b3JkIGFuZFxuICAgIC8vIHJlc2V0IHRvIHdoYXRldmVyIHRoZSBwcmV2aW91cyBzdGF0ZVxuICAgIC8vXG4gICAgLy8gVGhpcyBvcGVyYXRpb24gZG9lcyBub3QgY2F1c2UgbmV3IG5ldHdvcmsgcmVxdWVzdC5cbiAgICBwdWJsaWMgY2FuY2VsVHlwZWRLZXl3b3JkKCkge1xuICAgICAgICB0aGlzLnNlYXJjaENvbnRyb2wuc2V0VmFsdWUoJycpO1xuXG4gICAgICAgIC8vIEF1dG8gZm9jdXMgdGhlIHNlYXJjaCBpbnB1dFxuICAgICAgICB0aGlzLnNlYXJjaENvbnRyb2xFbGVtLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyBTdGFydHMgYSBuZXcgcm91bmQgb2Ygc2VhcmNoXG4gICAgLy9cbiAgICAvLyBUaGlzIG9wZXJhdGlvbiBjYXVzZXMgbmV3IG5ldHdvcmsgcmVxdWVzdC5cbiAgICBwdWJsaWMga2lja09mZlNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5lZmZlY3RpdmVLZXl3b3JkID0gdGhpcy5hbnlGdXR1cmVLZXl3b3JkO1xuICAgICAgICB0aGlzLm9uU2VhcmNoLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRLZXl3b3JkKGVtaXRFdmVudDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZW1pdEV2ZW50ID0gZW1pdEV2ZW50O1xuICAgICAgICB0aGlzLmNhbmNlbFR5cGVkS2V5d29yZCgpO1xuICAgIH1cblxuICAgIC8vIFN0YXJ0IHRvIGxpc3RlbiBmb3Igc2VhcmNoIGtleXdvcmQgY2hhbmdlXG4gICAgc3RhcnRPYnNlcnZlU2VhcmNoS2V5d29yZCgpIHtcbiAgICAgICAgdGhpcy5fc2VhcmNoS2V5d29yZFN1YnIgPSB0aGlzLnNlYXJjaENvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAgICAgICAucGlwZShkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZVRpbWUpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShhID0+IHtcbiAgICAgICAgICAgICAgICBhID0gKGEgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbnlGdXR1cmVLZXl3b3JkID0gYTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5taW5MZW5ndGggPiAwICYmIHRoaXMuYW55RnV0dXJlS2V5d29yZC5sZW5ndGggPj0gdGhpcy5taW5MZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5raWNrT2ZmU2VhcmNoKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVtaXRFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmtpY2tPZmZTZWFyY2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdG9wT2JzZXJ2ZVNlYXJjaEtleXdvcmQoKSB7XG4gICAgICAgIHRoaXMuX3NlYXJjaEtleXdvcmRTdWJyICYmIHRoaXMuX3NlYXJjaEtleXdvcmRTdWJyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG5cbn1cbiJdfQ==