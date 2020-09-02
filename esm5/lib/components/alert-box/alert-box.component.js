import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "@angular/common";
function AlertBoxComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function AlertBoxComponent_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.close(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.noBtnClasses);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.noBtnLabel, " ");
} }
var AlertBoxComponent = /** @class */ (function () {
    function AlertBoxComponent(_bsModalRef) {
        this._bsModalRef = _bsModalRef;
        this.result = new Subject();
    }
    AlertBoxComponent.prototype.ngOnInit = function () {
        this.hideNoBtn = this.hideNoBtn || false;
        this.yesBtnLabel = this.yesBtnLabel || 'Yes';
        this.noBtnLabel = this.noBtnLabel || 'No';
        this.yesBtnClasses = this.yesBtnClasses || 'btn-primary';
        this.noBtnClasses = this.noBtnClasses || 'btn-secondary';
    };
    AlertBoxComponent.prototype.close = function () {
        this.result.next(false);
        this.result.complete();
        this._bsModalRef.hide();
    };
    AlertBoxComponent.prototype.confirm = function () {
        this.result.next(true);
        this.result.complete();
        this._bsModalRef.hide();
    };
    AlertBoxComponent.ɵfac = function AlertBoxComponent_Factory(t) { return new (t || AlertBoxComponent)(i0.ɵɵdirectiveInject(i1.BsModalRef)); };
    AlertBoxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertBoxComponent, selectors: [["polp-bs-alert-box"]], inputs: { hideNoBtn: "hideNoBtn", yesBtnLabel: "yesBtnLabel", noBtnLabel: "noBtnLabel", noBtnClasses: "noBtnClasses", yesBtnClasses: "yesBtnClasses", title: "title", innerBody: "innerBody" }, decls: 12, vars: 5, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "innerHtml"], [1, "modal-footer"], ["type", "button", "class", "btn mr-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "btn", 3, "ngClass", "click"], ["type", "button", 1, "btn", "mr-2", 3, "ngClass", "click"]], template: function AlertBoxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h4", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 2);
            i0.ɵɵlistener("click", function AlertBoxComponent_Template_button_click_3_listener() { return ctx.close(); });
            i0.ɵɵelementStart(4, "span", 3);
            i0.ɵɵtext(5, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵelement(7, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 6);
            i0.ɵɵtemplate(9, AlertBoxComponent_button_9_Template, 2, 2, "button", 7);
            i0.ɵɵelementStart(10, "button", 8);
            i0.ɵɵlistener("click", function AlertBoxComponent_Template_button_click_10_listener() { return ctx.confirm(); });
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("innerHtml", ctx.innerBody, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.hideNoBtn);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", ctx.yesBtnClasses);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.yesBtnLabel, " ");
        } }, directives: [i2.NgIf, i2.NgClass], styles: [""] });
    return AlertBoxComponent;
}());
export { AlertBoxComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertBoxComponent, [{
        type: Component,
        args: [{
                selector: 'polp-bs-alert-box',
                templateUrl: './alert-box.component.html',
                styleUrls: ['./alert-box.component.css']
            }]
    }], function () { return [{ type: i1.BsModalRef }]; }, { hideNoBtn: [{
            type: Input
        }], yesBtnLabel: [{
            type: Input
        }], noBtnLabel: [{
            type: Input
        }], noBtnClasses: [{
            type: Input
        }], yesBtnClasses: [{
            type: Input
        }], title: [{
            type: Input
        }], innerBody: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtYm94L2FsZXJ0LWJveC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9hbGVydC1ib3gvYWxlcnQtYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7SUNTN0MsaUNBQ0k7SUFENEQsaUxBQWlCO0lBQzdFLFlBQ0o7SUFBQSxpQkFBUzs7O0lBRjhCLDZDQUF3QjtJQUMzRCxlQUNKO0lBREksa0RBQ0o7O0FEVEo7SUFrQkksMkJBQTZCLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBRnBELFdBQU0sR0FBcUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUd6QyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDO1FBRTFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsSUFBSSxhQUFhLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLGVBQWUsQ0FBQztJQUM3RCxDQUFDO0lBRUQsaUNBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO3NGQW5DUSxpQkFBaUI7MERBQWpCLGlCQUFpQjtZQ1Q5Qiw4QkFDSTtZQUFBLDZCQUFrQztZQUFBLFlBQVM7WUFBQSxpQkFBSztZQUNoRCxpQ0FDSTtZQUQ4RCw4RkFBUyxXQUFPLElBQUM7WUFDL0UsK0JBQXlCO1lBQUEsc0JBQU87WUFBQSxpQkFBTztZQUMzQyxpQkFBUztZQUNiLGlCQUFNO1lBQ04sOEJBQ0k7WUFBQSx5QkFDTTtZQUNWLGlCQUFNO1lBQ04sOEJBQ0k7WUFBQSx3RUFDSTtZQUVKLGtDQUNJO1lBRHdELCtGQUFTLGFBQVMsSUFBQztZQUMzRSxhQUNKO1lBQUEsaUJBQVM7WUFDYixpQkFBTTs7WUFoQmdDLGVBQVM7WUFBVCwrQkFBUztZQU10QyxlQUF1QjtZQUF2Qiw0REFBdUI7WUFJc0QsZUFBa0I7WUFBbEIscUNBQWtCO1lBR2xFLGVBQXlCO1lBQXpCLDJDQUF5QjtZQUN2RCxlQUNKO1lBREksZ0RBQ0o7OzRCRGhCSjtDQThDQyxBQTFDRCxJQTBDQztTQXJDWSxpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDM0M7O2tCQUdJLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLWFsZXJ0LWJveCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWJveC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtYm94LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydEJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBoaWRlTm9CdG46IGJvb2xlYW47XG4gICAgQElucHV0KCkgeWVzQnRuTGFiZWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBub0J0bkxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbm9CdG5DbGFzc2VzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgeWVzQnRuQ2xhc3Nlczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBpbm5lckJvZHk6IHN0cmluZztcblxuICAgIHJlc3VsdDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9ic01vZGFsUmVmOiBCc01vZGFsUmVmKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGlkZU5vQnRuID0gdGhpcy5oaWRlTm9CdG4gfHwgZmFsc2U7XG4gICAgICAgIHRoaXMueWVzQnRuTGFiZWwgPSB0aGlzLnllc0J0bkxhYmVsIHx8ICdZZXMnO1xuICAgICAgICB0aGlzLm5vQnRuTGFiZWwgPSB0aGlzLm5vQnRuTGFiZWwgfHwgJ05vJztcblxuICAgICAgICB0aGlzLnllc0J0bkNsYXNzZXMgPSB0aGlzLnllc0J0bkNsYXNzZXMgfHwgJ2J0bi1wcmltYXJ5JztcbiAgICAgICAgdGhpcy5ub0J0bkNsYXNzZXMgPSB0aGlzLm5vQnRuQ2xhc3NlcyB8fCAnYnRuLXNlY29uZGFyeSc7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMucmVzdWx0Lm5leHQoZmFsc2UpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICB0aGlzLnJlc3VsdC5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZSBwdWxsLWxlZnRcIj57e3RpdGxlfX08L2g0PlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgcHVsbC1yaWdodFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgPC9idXR0b24+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgPGRpdiBbaW5uZXJIdG1sXT1cImlubmVyQm9keVwiPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gbXItMlwiIFtuZ0NsYXNzXT1cIm5vQnRuQ2xhc3Nlc1wiIChjbGljayk9XCJjbG9zZSgpXCIgKm5nSWY9XCIhaGlkZU5vQnRuXCI+XG4gICAgICAgIHt7bm9CdG5MYWJlbH19XG4gICAgPC9idXR0b24+ICAgIFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuXCIgW25nQ2xhc3NdPVwieWVzQnRuQ2xhc3Nlc1wiIChjbGljayk9XCJjb25maXJtKClcIj5cbiAgICAgICAge3t5ZXNCdG5MYWJlbH19XG4gICAgPC9idXR0b24+XG48L2Rpdj5cblxuXG4iXX0=