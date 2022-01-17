import { Input } from '@angular/core';
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
ObservableModalAbstractComponent.ɵdir = i0.ɵɵdefineDirective({ type: ObservableModalAbstractComponent, inputs: { modalId: "modalId" } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS1tb2RhbC1hYnN0cmFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvYnMtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL21vZGFscy9vYnNlcnZhYmxlLW1vZGFsLWFic3RyYWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRS9COzs7R0FHRztBQUNILE1BQU0sT0FBZ0IsZ0NBQWdDO0lBQXREO1FBSUksV0FBTSxHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO0tBZTVDO0lBVkcsVUFBVSxDQUFDLEtBQWM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUM7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDOztnSEFsQmlCLGdDQUFnQztxRUFBaEMsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJzTW9kYWxSZWYsIEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogUHJvdmlkZXMgYSBiYXNlIGZvciBtb3N0IG1vZGFsIGNvbXBvbmVudHMuICBUaGlzIGJhc2UgaXMgYnVpbHQgd2l0aFxuICogdGhlIGNhcGFiaWxpdHkgb2Ygc3luY2hyb25vdXNlbHkgd2FpdGluZyBmb3IgYSBtb2RhbCB0byBjbG9zZS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE9ic2VydmFibGVNb2RhbEFic3RyYWN0Q29tcG9uZW50PFRJbnB1dCwgVE91dHB1dD4ge1xuXG4gICAgQElucHV0KCkgbW9kYWxJZDogbnVtYmVyO1xuXG4gICAgcmVzdWx0OiBTdWJqZWN0PFRPdXRwdXQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICAgIHB1YmxpYyBhYnN0cmFjdCBic01vZGFsUmVmOiBCc01vZGFsUmVmO1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBic01vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2U7XG5cbiAgICBjbG9zZU1vZGFsKHZhbHVlOiBUT3V0cHV0KSB7XG4gICAgICAgIHRoaXMucmVzdWx0Lm5leHQodmFsdWUpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jb21wbGV0ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLm1vZGFsSWQpIHtcbiAgICAgICAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2UuaGlkZSh0aGlzLm1vZGFsSWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ic01vZGFsUmVmLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==