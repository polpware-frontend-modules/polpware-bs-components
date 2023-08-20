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
ObservableModalAbstractComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ObservableModalAbstractComponent, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ObservableModalAbstractComponent.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.12", type: ObservableModalAbstractComponent, inputs: { modalId: "modalId" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: ObservableModalAbstractComponent, decorators: [{
            type: Directive
        }], propDecorators: { modalId: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS1tb2RhbC1hYnN0cmFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9icy1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbHMvb2JzZXJ2YWJsZS1tb2RhbC1hYnN0cmFjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFL0I7OztHQUdHO0FBRUgsTUFBTSxPQUFnQixnQ0FBZ0M7SUFEdEQ7UUFLSSxXQUFNLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7S0FlNUM7SUFWRyxVQUFVLENBQUMsS0FBYztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7OzhIQWxCaUIsZ0NBQWdDO2tIQUFoQyxnQ0FBZ0M7NEZBQWhDLGdDQUFnQztrQkFEckQsU0FBUzs4QkFHRyxPQUFPO3NCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCc01vZGFsUmVmLCBCc01vZGFsU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIFByb3ZpZGVzIGEgYmFzZSBmb3IgbW9zdCBtb2RhbCBjb21wb25lbnRzLiAgVGhpcyBiYXNlIGlzIGJ1aWx0IHdpdGhcbiAqIHRoZSBjYXBhYmlsaXR5IG9mIHN5bmNocm9ub3VzZWx5IHdhaXRpbmcgZm9yIGEgbW9kYWwgdG8gY2xvc2UuXG4gKi9cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE9ic2VydmFibGVNb2RhbEFic3RyYWN0Q29tcG9uZW50PFRJbnB1dCwgVE91dHB1dD4ge1xuXG4gICAgQElucHV0KCkgbW9kYWxJZDogbnVtYmVyO1xuXG4gICAgcmVzdWx0OiBTdWJqZWN0PFRPdXRwdXQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICAgIHB1YmxpYyBhYnN0cmFjdCBic01vZGFsUmVmOiBCc01vZGFsUmVmO1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBic01vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2U7XG5cbiAgICBjbG9zZU1vZGFsKHZhbHVlOiBUT3V0cHV0KSB7XG4gICAgICAgIHRoaXMucmVzdWx0Lm5leHQodmFsdWUpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jb21wbGV0ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLm1vZGFsSWQpIHtcbiAgICAgICAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2UuaGlkZSh0aGlzLm1vZGFsSWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ic01vZGFsUmVmLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==