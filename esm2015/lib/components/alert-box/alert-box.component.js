import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "@angular/common";
function AlertBoxComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function AlertBoxComponent_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.close(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.noBtnClasses);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.noBtnLabel, " ");
} }
export class AlertBoxComponent {
    constructor(_bsModalRef) {
        this._bsModalRef = _bsModalRef;
        this.result = new Subject();
    }
    ngOnInit() {
        this.hideNoBtn = this.hideNoBtn || false;
        this.yesBtnLabel = this.yesBtnLabel || 'Yes';
        this.noBtnLabel = this.noBtnLabel || 'No';
        this.yesBtnClasses = this.yesBtnClasses || 'btn-primary btn-lg';
        this.noBtnClasses = this.noBtnClasses || 'btn-secondary btn-lg';
    }
    close() {
        this.result.next(false);
        this._bsModalRef.hide();
    }
    confirm() {
        this.result.next(true);
        this._bsModalRef.hide();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtYm94L2FsZXJ0LWJveC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9hbGVydC1ib3gvYWxlcnQtYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7SUNTN0MsaUNBQ0k7SUFENEQsbUxBQWlCO0lBQzdFLFlBQ0o7SUFBQSxpQkFBUzs7O0lBRjhCLDZDQUF3QjtJQUMzRCxlQUNKO0lBREksa0RBQ0o7O0FESkosTUFBTSxPQUFPLGlCQUFpQjtJQWExQixZQUE2QixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUZwRCxXQUFNLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7SUFHekMsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQztRQUUxQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksb0JBQW9CLENBQUM7UUFDaEUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLHNCQUFzQixDQUFDO0lBQ3BFLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7a0ZBakNRLGlCQUFpQjtzREFBakIsaUJBQWlCO1FDVDlCLDhCQUNJO1FBQUEsNkJBQWtDO1FBQUEsWUFBUztRQUFBLGlCQUFLO1FBQ2hELGlDQUNJO1FBRDhELDhGQUFTLFdBQU8sSUFBQztRQUMvRSwrQkFBeUI7UUFBQSxzQkFBTztRQUFBLGlCQUFPO1FBQzNDLGlCQUFTO1FBQ2IsaUJBQU07UUFDTiw4QkFDSTtRQUFBLHlCQUNNO1FBQ1YsaUJBQU07UUFDTiw4QkFDSTtRQUFBLHdFQUNJO1FBRUosa0NBQ0k7UUFEd0QsK0ZBQVMsYUFBUyxJQUFDO1FBQzNFLGFBQ0o7UUFBQSxpQkFBUztRQUNiLGlCQUFNOztRQWhCZ0MsZUFBUztRQUFULCtCQUFTO1FBTXRDLGVBQXVCO1FBQXZCLDREQUF1QjtRQUlzRCxlQUFrQjtRQUFsQixxQ0FBa0I7UUFHbEUsZUFBeUI7UUFBekIsMkNBQXlCO1FBQ3ZELGVBQ0o7UUFESSxnREFDSjs7a0REUFMsaUJBQWlCO2NBTDdCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUMzQzs7a0JBR0ksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtYWxlcnQtYm94JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtYm94LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hbGVydC1ib3guY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Qm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGhpZGVOb0J0bjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB5ZXNCdG5MYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG5vQnRuTGFiZWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBub0J0bkNsYXNzZXM6IHN0cmluZztcbiAgICBASW5wdXQoKSB5ZXNCdG5DbGFzc2VzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGlubmVyQm9keTogc3RyaW5nO1xuXG4gICAgcmVzdWx0OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2JzTW9kYWxSZWY6IEJzTW9kYWxSZWYpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oaWRlTm9CdG4gPSB0aGlzLmhpZGVOb0J0biB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy55ZXNCdG5MYWJlbCA9IHRoaXMueWVzQnRuTGFiZWwgfHwgJ1llcyc7XG4gICAgICAgIHRoaXMubm9CdG5MYWJlbCA9IHRoaXMubm9CdG5MYWJlbCB8fCAnTm8nO1xuXG4gICAgICAgIHRoaXMueWVzQnRuQ2xhc3NlcyA9IHRoaXMueWVzQnRuQ2xhc3NlcyB8fCAnYnRuLXByaW1hcnkgYnRuLWxnJztcbiAgICAgICAgdGhpcy5ub0J0bkNsYXNzZXMgPSB0aGlzLm5vQnRuQ2xhc3NlcyB8fCAnYnRuLXNlY29uZGFyeSBidG4tbGcnO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLnJlc3VsdC5uZXh0KGZhbHNlKTtcbiAgICAgICAgdGhpcy5fYnNNb2RhbFJlZi5oaWRlKCk7XG4gICAgfVxuXG4gICAgY29uZmlybSgpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQubmV4dCh0cnVlKTtcbiAgICAgICAgdGhpcy5fYnNNb2RhbFJlZi5oaWRlKCk7XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGUgcHVsbC1sZWZ0XCI+e3t0aXRsZX19PC9oND5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIHB1bGwtcmlnaHRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgIDxkaXYgW2lubmVySHRtbF09XCJpbm5lckJvZHlcIj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIG1yLTJcIiBbbmdDbGFzc109XCJub0J0bkNsYXNzZXNcIiAoY2xpY2spPVwiY2xvc2UoKVwiICpuZ0lmPVwiIWhpZGVOb0J0blwiPlxuICAgICAgICB7e25vQnRuTGFiZWx9fVxuICAgIDwvYnV0dG9uPiAgICBcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0blwiIFtuZ0NsYXNzXT1cInllc0J0bkNsYXNzZXNcIiAoY2xpY2spPVwiY29uZmlybSgpXCI+XG4gICAgICAgIHt7eWVzQnRuTGFiZWx9fVxuICAgIDwvYnV0dG9uPlxuPC9kaXY+XG5cblxuIl19