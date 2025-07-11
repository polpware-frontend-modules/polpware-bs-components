import { Input, Directive } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Provides a base for most modal components.  This base is built with
 * the capability of synchronousely waiting for a modal to close.
 */
export class ObservableModalAbstractComponent {
    constructor() {
        this.result = new Subject();
    }
    closeModal(value) {
        this.result.next(value);
        this.result.complete();
        if (this.modalId) {
            this.bsModalService.hide(this.modalId);
        }
        else {
            this.bsModalRef.hide();
        }
    }
}
ObservableModalAbstractComponent.ɵfac = function ObservableModalAbstractComponent_Factory(t) { return new (t || ObservableModalAbstractComponent)(); };
ObservableModalAbstractComponent.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ObservableModalAbstractComponent, inputs: { modalId: "modalId" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ObservableModalAbstractComponent, [{
        type: Directive
    }], null, { modalId: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS1tb2RhbC1hYnN0cmFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9icy1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbHMvb2JzZXJ2YWJsZS1tb2RhbC1hYnN0cmFjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFL0I7OztHQUdHO0FBRUgsTUFBTSxPQUFnQixnQ0FBZ0M7SUFEdEQ7UUFLSSxXQUFNLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7S0FlNUM7SUFWRyxVQUFVLENBQUMsS0FBYztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7O2dIQWxCaUIsZ0NBQWdDO21GQUFoQyxnQ0FBZ0M7dUZBQWhDLGdDQUFnQztjQURyRCxTQUFTO2dCQUdHLE9BQU87a0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzTW9kYWxSZWYsIEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogUHJvdmlkZXMgYSBiYXNlIGZvciBtb3N0IG1vZGFsIGNvbXBvbmVudHMuICBUaGlzIGJhc2UgaXMgYnVpbHQgd2l0aFxuICogdGhlIGNhcGFiaWxpdHkgb2Ygc3luY2hyb25vdXNlbHkgd2FpdGluZyBmb3IgYSBtb2RhbCB0byBjbG9zZS5cbiAqL1xuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgT2JzZXJ2YWJsZU1vZGFsQWJzdHJhY3RDb21wb25lbnQ8VElucHV0LCBUT3V0cHV0PiB7XG5cbiAgICBASW5wdXQoKSBtb2RhbElkOiBudW1iZXI7XG5cbiAgICByZXN1bHQ6IFN1YmplY3Q8VE91dHB1dD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgcHVibGljIGFic3RyYWN0IGJzTW9kYWxSZWY6IEJzTW9kYWxSZWY7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGJzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZTtcblxuICAgIGNsb3NlTW9kYWwodmFsdWU6IFRPdXRwdXQpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQubmV4dCh2YWx1ZSk7XG4gICAgICAgIHRoaXMucmVzdWx0LmNvbXBsZXRlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMubW9kYWxJZCkge1xuICAgICAgICAgICAgdGhpcy5ic01vZGFsU2VydmljZS5oaWRlKHRoaXMubW9kYWxJZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJzTW9kYWxSZWYuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19