import { __decorate, __metadata } from "tslib";
import { Input } from '@angular/core';
import { Subject } from 'rxjs';
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
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ObservableModalAbstractComponent.prototype, "modalId", void 0);
    return ObservableModalAbstractComponent;
}());
export { ObservableModalAbstractComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS1tb2RhbC1hYnN0cmFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvYnMtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21vZGFscy9vYnNlcnZhYmxlLW1vZGFsLWFic3RyYWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9COzs7R0FHRztBQUNIO0lBQUE7UUFJSSxXQUFNLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7SUFlN0MsQ0FBQztJQVZHLHFEQUFVLEdBQVYsVUFBVyxLQUFjO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFdkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQWhCUTtRQUFSLEtBQUssRUFBRTs7cUVBQWlCO0lBaUI3Qix1Q0FBQztDQUFBLEFBbkJELElBbUJDO1NBbkJxQixnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBQcm92aWRlcyBhIGJhc2UgZm9yIG1vc3QgbW9kYWwgY29tcG9uZW50cy4gIFRoaXMgYmFzZSBpcyBidWlsdCB3aXRoXG4gKiB0aGUgY2FwYWJpbGl0eSBvZiBzeW5jaHJvbm91c2VseSB3YWl0aW5nIGZvciBhIG1vZGFsIHRvIGNsb3NlLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgT2JzZXJ2YWJsZU1vZGFsQWJzdHJhY3RDb21wb25lbnQ8VElucHV0LCBUT3V0cHV0PiB7XG5cbiAgICBASW5wdXQoKSBtb2RhbElkOiBudW1iZXI7XG5cbiAgICByZXN1bHQ6IFN1YmplY3Q8VE91dHB1dD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgcHVibGljIGFic3RyYWN0IGJzTW9kYWxSZWY6IEJzTW9kYWxSZWY7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGJzTW9kYWxTZXJ2aWNlOiBCc01vZGFsU2VydmljZTtcblxuICAgIGNsb3NlTW9kYWwodmFsdWU6IFRPdXRwdXQpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQubmV4dCh2YWx1ZSk7XG4gICAgICAgIHRoaXMucmVzdWx0LmNvbXBsZXRlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMubW9kYWxJZCkge1xuICAgICAgICAgICAgdGhpcy5ic01vZGFsU2VydmljZS5oaWRlKHRoaXMubW9kYWxJZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJzTW9kYWxSZWYuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19