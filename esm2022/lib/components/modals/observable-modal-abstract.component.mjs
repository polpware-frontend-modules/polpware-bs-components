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
    static { this.ɵfac = function ObservableModalAbstractComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ObservableModalAbstractComponent)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ObservableModalAbstractComponent, inputs: { modalId: "modalId" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ObservableModalAbstractComponent, [{
        type: Directive
    }], null, { modalId: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS1tb2RhbC1hYnN0cmFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9icy1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbHMvb2JzZXJ2YWJsZS1tb2RhbC1hYnN0cmFjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFL0I7OztHQUdHO0FBRUgsTUFBTSxPQUFnQixnQ0FBZ0M7SUFEdEQ7UUFLSSxXQUFNLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7S0FlNUM7SUFWRyxVQUFVLENBQUMsS0FBYztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLENBQUM7YUFBTSxDQUFDO1lBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDO0lBQ0wsQ0FBQztpSUFsQmlCLGdDQUFnQztvRUFBaEMsZ0NBQWdDOztpRkFBaEMsZ0NBQWdDO2NBRHJELFNBQVM7Z0JBR0csT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBQcm92aWRlcyBhIGJhc2UgZm9yIG1vc3QgbW9kYWwgY29tcG9uZW50cy4gIFRoaXMgYmFzZSBpcyBidWlsdCB3aXRoXG4gKiB0aGUgY2FwYWJpbGl0eSBvZiBzeW5jaHJvbm91c2VseSB3YWl0aW5nIGZvciBhIG1vZGFsIHRvIGNsb3NlLlxuICovXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBPYnNlcnZhYmxlTW9kYWxBYnN0cmFjdENvbXBvbmVudDxUSW5wdXQsIFRPdXRwdXQ+IHtcblxuICAgIEBJbnB1dCgpIG1vZGFsSWQ6IG51bWJlcjtcblxuICAgIHJlc3VsdDogU3ViamVjdDxUT3V0cHV0PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgYnNNb2RhbFJlZjogQnNNb2RhbFJlZjtcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYnNNb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlO1xuXG4gICAgY2xvc2VNb2RhbCh2YWx1ZTogVE91dHB1dCkge1xuICAgICAgICB0aGlzLnJlc3VsdC5uZXh0KHZhbHVlKTtcbiAgICAgICAgdGhpcy5yZXN1bHQuY29tcGxldGUoKTtcblxuICAgICAgICBpZiAodGhpcy5tb2RhbElkKSB7XG4gICAgICAgICAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLmhpZGUodGhpcy5tb2RhbElkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnNNb2RhbFJlZi5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=