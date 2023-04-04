import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { debounceTime } from 'rxjs/operators';
let SearchBoxWidgetComponent = class SearchBoxWidgetComponent {
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
export { SearchBoxWidgetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvd2lkZ2V0cy9zZWFyY2gtYm94LXdpZGdldC9zZWFyY2gtYm94LXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakgsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzlDLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBOEJqQztRQTVCQSxhQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3BCLFlBQU8sR0FBRyxPQUFPLENBQUM7UUFHVCxjQUFTLEdBQUcsd0NBQXdDLENBQUM7UUFDckQsZUFBVSxHQUFHLGNBQWMsQ0FBQztRQUM1QixnQkFBVyxHQUFHLFFBQVEsQ0FBQztRQUN2QixpQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUM1QixvQkFBb0I7UUFFcEIscUNBQXFDO1FBQzVCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFFckIsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBYXBELGVBQVUsR0FBWSxLQUFLLENBQUM7SUFFcEIsQ0FBQztJQUVqQixJQUFJLFNBQVMsQ0FBQyxDQUFVO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDVCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDekMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsMkJBQTJCO0lBQzNCLHVDQUF1QztJQUN2QyxFQUFFO0lBQ0YscURBQXFEO0lBQzlDLGtCQUFrQjtRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVoQyw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsK0JBQStCO0lBQy9CLEVBQUU7SUFDRiw2Q0FBNkM7SUFDdEMsYUFBYTtRQUNoQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLFlBQVksQ0FBQyxZQUFxQixLQUFLO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCw0Q0FBNEM7SUFDNUMseUJBQXlCO1FBQ3JCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVk7YUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDckMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7WUFDMUIsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3RFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN4QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN4QjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHdCQUF3QjtRQUNwQixJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JFLENBQUM7Q0FHSixDQUFBO0FBM0ZZO0lBQVIsS0FBSyxFQUFFOzs2REFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7OzJEQUFzRDtBQUNyRDtJQUFSLEtBQUssRUFBRTs7NERBQTZCO0FBQzVCO0lBQVIsS0FBSyxFQUFFOzs2REFBd0I7QUFDdkI7SUFBUixLQUFLLEVBQUU7OzhEQUFvQjtBQUluQjtJQUFSLEtBQUssRUFBRTs7MkRBQXVCO0FBRXJCO0lBQVQsTUFBTSxFQUFFOzhCQUFXLFlBQVk7MERBQTRCO0FBSTVEO0lBREMsU0FBUyxDQUFDLG1CQUFtQixDQUFDOzhCQUNaLFVBQVU7bUVBQUM7QUFuQnJCLHdCQUF3QjtJQUxwQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLDYrQkFBaUQ7O0tBRXBELENBQUM7O0dBQ1csd0JBQXdCLENBZ0dwQztTQWhHWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmYVNlYXJjaCwgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLXNlYXJjaC1ib3gtd2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NlYXJjaC1ib3gtd2lkZ2V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBmYVNlYXJjaCA9IGZhU2VhcmNoO1xuICAgIGZhVGltZXMgPSBmYVRpbWVzO1xuXG4gICAgQElucHV0KCkgaW5pdEtleXdvcmQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBmb3JtQ2xhc3MgPSAnYm9yZGVyIHJvdW5kZWQgbXktMiBweS00IHB4LTQgYmctbGlnaHQnO1xuICAgIEBJbnB1dCgpIGlucHV0Q2xhc3MgPSAnZm9ybS1jb250cm9sJztcbiAgICBASW5wdXQoKSBwcmVwZW5kVGV4dCA9ICdGaWx0ZXInO1xuICAgIEBJbnB1dCgpIGRlYm91bmNlVGltZSA9IDUwMDtcbiAgICAvLyB0b2RvOiBNb3JlIGlucHV0c1xuXG4gICAgLy8gQWxsb3dpbmcgZm9yIGRpc2FibGluZyBhdXRvIHNlYXJjaFxuICAgIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMDtcblxuICAgIEBPdXRwdXQoKSBvblNlYXJjaDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLy8gU3VwcG9ydCBmaWx0ZXJcbiAgICBAVmlld0NoaWxkKCdzZWFyY2hDb250cm9sRWxlbScpXG4gICAgc2VhcmNoQ29udHJvbEVsZW06IEVsZW1lbnRSZWY7XG4gICAgLy8gU2VhcmNoIGNvbnRyb2wgaW5wdXRcbiAgICBwdWJsaWMgc2VhcmNoQ29udHJvbDogRm9ybUNvbnRyb2w7XG4gICAgYW55RnV0dXJlS2V5d29yZDogc3RyaW5nO1xuICAgIC8vIGVmZmVjdGl2ZSBrZXl3b3JkXG4gICAgZWZmZWN0aXZlS2V5d29yZDogc3RyaW5nO1xuXG4gICAgX3NlYXJjaEtleXdvcmRTdWJyOiBTdWJzY3JpcHRpb247XG5cbiAgICBwcml2YXRlIF9lbWl0RXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBzZXQgZW1pdEV2ZW50KHY6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fZW1pdEV2ZW50ID0gdjtcbiAgICB9XG5cbiAgICBnZXQgZW1pdEV2ZW50KCkge1xuICAgICAgICBjb25zdCBvbGQgPSB0aGlzLl9lbWl0RXZlbnQ7XG4gICAgICAgIHRoaXMuX2VtaXRFdmVudCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gb2xkO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlYXJjaENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGhpcy5pbml0S2V5d29yZCB8fCAnJyk7XG4gICAgICAgIHRoaXMuZWZmZWN0aXZlS2V5d29yZCA9IHRoaXMuaW5pdEtleXdvcmQ7XG4gICAgICAgIHRoaXMuc3RhcnRPYnNlcnZlU2VhcmNoS2V5d29yZCgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3BPYnNlcnZlU2VhcmNoS2V5d29yZCgpO1xuICAgIH1cblxuICAgIC8vIENhbmNlbCB0eXBlZCBrZXl3b3JkIGFuZFxuICAgIC8vIHJlc2V0IHRvIHdoYXRldmVyIHRoZSBwcmV2aW91cyBzdGF0ZVxuICAgIC8vXG4gICAgLy8gVGhpcyBvcGVyYXRpb24gZG9lcyBub3QgY2F1c2UgbmV3IG5ldHdvcmsgcmVxdWVzdC5cbiAgICBwdWJsaWMgY2FuY2VsVHlwZWRLZXl3b3JkKCkge1xuICAgICAgICB0aGlzLnNlYXJjaENvbnRyb2wuc2V0VmFsdWUoJycpO1xuXG4gICAgICAgIC8vIEF1dG8gZm9jdXMgdGhlIHNlYXJjaCBpbnB1dFxuICAgICAgICB0aGlzLnNlYXJjaENvbnRyb2xFbGVtLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyBTdGFydHMgYSBuZXcgcm91bmQgb2Ygc2VhcmNoXG4gICAgLy9cbiAgICAvLyBUaGlzIG9wZXJhdGlvbiBjYXVzZXMgbmV3IG5ldHdvcmsgcmVxdWVzdC5cbiAgICBwdWJsaWMga2lja09mZlNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5lZmZlY3RpdmVLZXl3b3JkID0gdGhpcy5hbnlGdXR1cmVLZXl3b3JkO1xuICAgICAgICB0aGlzLm9uU2VhcmNoLmVtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRLZXl3b3JkKGVtaXRFdmVudDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZW1pdEV2ZW50ID0gZW1pdEV2ZW50O1xuICAgICAgICB0aGlzLmNhbmNlbFR5cGVkS2V5d29yZCgpO1xuICAgIH1cblxuICAgIC8vIFN0YXJ0IHRvIGxpc3RlbiBmb3Igc2VhcmNoIGtleXdvcmQgY2hhbmdlXG4gICAgc3RhcnRPYnNlcnZlU2VhcmNoS2V5d29yZCgpIHtcbiAgICAgICAgdGhpcy5fc2VhcmNoS2V5d29yZFN1YnIgPSB0aGlzLnNlYXJjaENvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAgICAgICAucGlwZShkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZVRpbWUpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShhID0+IHtcbiAgICAgICAgICAgICAgICBhID0gKGEgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbnlGdXR1cmVLZXl3b3JkID0gYTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5taW5MZW5ndGggPiAwICYmIHRoaXMuYW55RnV0dXJlS2V5d29yZC5sZW5ndGggPj0gdGhpcy5taW5MZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5raWNrT2ZmU2VhcmNoKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVtaXRFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmtpY2tPZmZTZWFyY2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdG9wT2JzZXJ2ZVNlYXJjaEtleXdvcmQoKSB7XG4gICAgICAgIHRoaXMuX3NlYXJjaEtleXdvcmRTdWJyICYmIHRoaXMuX3NlYXJjaEtleXdvcmRTdWJyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG5cbn1cbiJdfQ==