import { Input } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Provides a base for most modal components.  This base is built with
 * the capability of synchronousely waiting for a modal to close.
 */
var ObservableModalAbstractComponent = /** @class */ (function () {
    function ObservableModalAbstractComponent() {
        this.result = new Subject();
    }
    ObservableModalAbstractComponent.prototype.closeModal = function (value) {
        this.result.next(value);
        this.result.complete();
        if (this.modalId) {
            this.bsModalService.hide(this.modalId);
        }
        else {
            this.bsModalRef.hide();
        }
    };
    ObservableModalAbstractComponent.ɵfac = function ObservableModalAbstractComponent_Factory(t) { return new (t || ObservableModalAbstractComponent)(); };
    ObservableModalAbstractComponent.ɵdir = i0.ɵɵdefineDirective({ type: ObservableModalAbstractComponent, inputs: { modalId: "modalId" } });
    return ObservableModalAbstractComponent;
}());
export { ObservableModalAbstractComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS1tb2RhbC1hYnN0cmFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvYnMtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21vZGFscy9vYnNlcnZhYmxlLW1vZGFsLWFic3RyYWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRS9COzs7R0FHRztBQUNIO0lBQUE7UUFJSSxXQUFNLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7S0FlNUM7SUFWRyxxREFBVSxHQUFWLFVBQVcsS0FBYztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7b0hBbEJpQixnQ0FBZ0M7eUVBQWhDLGdDQUFnQzsyQ0FSdEQ7Q0EyQkMsQUFuQkQsSUFtQkM7U0FuQnFCLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc01vZGFsUmVmLCBCc01vZGFsU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIFByb3ZpZGVzIGEgYmFzZSBmb3IgbW9zdCBtb2RhbCBjb21wb25lbnRzLiAgVGhpcyBiYXNlIGlzIGJ1aWx0IHdpdGhcbiAqIHRoZSBjYXBhYmlsaXR5IG9mIHN5bmNocm9ub3VzZWx5IHdhaXRpbmcgZm9yIGEgbW9kYWwgdG8gY2xvc2UuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBPYnNlcnZhYmxlTW9kYWxBYnN0cmFjdENvbXBvbmVudDxUSW5wdXQsIFRPdXRwdXQ+IHtcblxuICAgIEBJbnB1dCgpIG1vZGFsSWQ6IG51bWJlcjtcblxuICAgIHJlc3VsdDogU3ViamVjdDxUT3V0cHV0PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgYnNNb2RhbFJlZjogQnNNb2RhbFJlZjtcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYnNNb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlO1xuXG4gICAgY2xvc2VNb2RhbCh2YWx1ZTogVE91dHB1dCkge1xuICAgICAgICB0aGlzLnJlc3VsdC5uZXh0KHZhbHVlKTtcbiAgICAgICAgdGhpcy5yZXN1bHQuY29tcGxldGUoKTtcblxuICAgICAgICBpZiAodGhpcy5tb2RhbElkKSB7XG4gICAgICAgICAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLmhpZGUodGhpcy5tb2RhbElkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnNNb2RhbFJlZi5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=