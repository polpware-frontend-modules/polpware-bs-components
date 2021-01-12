import { Component, Input, HostListener } from '@angular/core';
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
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["ENTER"] = 13] = "ENTER";
})(KEY_CODE || (KEY_CODE = {}));
var AlertBoxComponent = /** @class */ (function () {
    function AlertBoxComponent(_bsModalRef) {
        this._bsModalRef = _bsModalRef;
        this.enableEnter = false;
        this.result = new Subject();
    }
    AlertBoxComponent.prototype.ngOnInit = function () {
        this.hideNoBtn = this.hideNoBtn || false;
        this.yesBtnLabel = this.yesBtnLabel || 'Yes';
        this.noBtnLabel = this.noBtnLabel || 'No';
        this.yesBtnClasses = this.yesBtnClasses || 'btn-primary';
        this.noBtnClasses = this.noBtnClasses || 'btn-secondary';
    };
    AlertBoxComponent.prototype.keyEvent = function (event) {
        if (this.enableEnter && event.keyCode === KEY_CODE.ENTER) {
            this.confirm();
        }
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
    AlertBoxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertBoxComponent, selectors: [["polp-bs-alert-box"]], hostBindings: function AlertBoxComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keyup", function AlertBoxComponent_keyup_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { hideNoBtn: "hideNoBtn", yesBtnLabel: "yesBtnLabel", noBtnLabel: "noBtnLabel", noBtnClasses: "noBtnClasses", yesBtnClasses: "yesBtnClasses", enableEnter: "enableEnter", title: "title", innerBody: "innerBody" }, decls: 12, vars: 5, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "innerHtml"], [1, "modal-footer"], ["type", "button", "class", "btn mr-2", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 1, "btn", 3, "ngClass", "click"], ["type", "button", 1, "btn", "mr-2", 3, "ngClass", "click"]], template: function AlertBoxComponent_Template(rf, ctx) { if (rf & 1) {
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
        }], enableEnter: [{
            type: Input
        }], title: [{
            type: Input
        }], innerBody: [{
            type: Input
        }], keyEvent: [{
            type: HostListener,
            args: ['window:keyup', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtYm94L2FsZXJ0LWJveC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9hbGVydC1ib3gvYWxlcnQtYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0lDUzdDLGlDQUNJO0lBRDRELGlMQUFpQjtJQUM3RSxZQUNKO0lBQUEsaUJBQVM7OztJQUY4Qiw2Q0FBd0I7SUFDM0QsZUFDSjtJQURJLGtEQUNKOztBRFRKLElBQUssUUFFSjtBQUZELFdBQUssUUFBUTtJQUNULDBDQUFVLENBQUE7QUFDZCxDQUFDLEVBRkksUUFBUSxLQUFSLFFBQVEsUUFFWjtBQWFEO0lBb0JJLDJCQUE2QixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQVAzQyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUt0QyxXQUFNLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7SUFHekMsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQztRQUUxQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxlQUFlLENBQUM7SUFDN0QsQ0FBQztJQUdELG9DQUFRLEdBRFIsVUFDUyxLQUFvQjtRQUN6QixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ3RELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtJQUNMLENBQUM7SUFFRCxpQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7c0ZBNUNRLGlCQUFpQjswREFBakIsaUJBQWlCO3dHQUFqQixvQkFBZ0I7O1lDeEI3Qiw4QkFDSTtZQUFBLDZCQUFrQztZQUFBLFlBQVM7WUFBQSxpQkFBSztZQUNoRCxpQ0FDSTtZQUQ4RCw4RkFBUyxXQUFPLElBQUM7WUFDL0UsK0JBQXlCO1lBQUEsc0JBQU87WUFBQSxpQkFBTztZQUMzQyxpQkFBUztZQUNiLGlCQUFNO1lBQ04sOEJBQ0k7WUFBQSx5QkFDTTtZQUNWLGlCQUFNO1lBQ04sOEJBQ0k7WUFBQSx3RUFDSTtZQUVKLGtDQUNJO1lBRHdELCtGQUFTLGFBQVMsSUFBQztZQUMzRSxhQUNKO1lBQUEsaUJBQVM7WUFDYixpQkFBTTs7WUFoQmdDLGVBQVM7WUFBVCwrQkFBUztZQU10QyxlQUF1QjtZQUF2Qiw0REFBdUI7WUFJc0QsZUFBa0I7WUFBbEIscUNBQWtCO1lBR2xFLGVBQXlCO1lBQXpCLDJDQUF5QjtZQUN2RCxlQUNKO1lBREksZ0RBQ0o7OzRCRGhCSjtDQXNFQyxBQW5ERCxJQW1EQztTQTlDWSxpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDM0M7O2tCQUdJLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQWdCTCxZQUFZO21CQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCc01vZGFsUmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5cbmVudW0gS0VZX0NPREUge1xuICAgIEVOVEVSID0gMTNcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWxlcnRCb3hJbnB1dHMge1xuICAgIGhpZGVOb0J0bjogYm9vbGVhbjtcbiAgICB5ZXNCdG5MYWJlbDogc3RyaW5nO1xuICAgIG5vQnRuTGFiZWw6IHN0cmluZztcbiAgICBub0J0bkNsYXNzZXM6IHN0cmluZztcbiAgICB5ZXNCdG5DbGFzc2VzOiBzdHJpbmc7XG4gICAgZW5hYmxlRW50ZXI6IGJvb2xlYW47XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpbm5lckJvZHk6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWJzLWFsZXJ0LWJveCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LWJveC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtYm94LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydEJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBoaWRlTm9CdG46IGJvb2xlYW47XG4gICAgQElucHV0KCkgeWVzQnRuTGFiZWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBub0J0bkxhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbm9CdG5DbGFzc2VzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgeWVzQnRuQ2xhc3Nlczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZW5hYmxlRW50ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaW5uZXJCb2R5OiBzdHJpbmc7XG5cbiAgICByZXN1bHQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfYnNNb2RhbFJlZjogQnNNb2RhbFJlZikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmhpZGVOb0J0biA9IHRoaXMuaGlkZU5vQnRuIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLnllc0J0bkxhYmVsID0gdGhpcy55ZXNCdG5MYWJlbCB8fCAnWWVzJztcbiAgICAgICAgdGhpcy5ub0J0bkxhYmVsID0gdGhpcy5ub0J0bkxhYmVsIHx8ICdObyc7XG5cbiAgICAgICAgdGhpcy55ZXNCdG5DbGFzc2VzID0gdGhpcy55ZXNCdG5DbGFzc2VzIHx8ICdidG4tcHJpbWFyeSc7XG4gICAgICAgIHRoaXMubm9CdG5DbGFzc2VzID0gdGhpcy5ub0J0bkNsYXNzZXMgfHwgJ2J0bi1zZWNvbmRhcnknO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXl1cCcsIFsnJGV2ZW50J10pXG4gICAga2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlRW50ZXIgJiYgZXZlbnQua2V5Q29kZSA9PT0gS0VZX0NPREUuRU5URVIpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMucmVzdWx0Lm5leHQoZmFsc2UpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG5cbiAgICBjb25maXJtKCkge1xuICAgICAgICB0aGlzLnJlc3VsdC5uZXh0KHRydWUpO1xuICAgICAgICB0aGlzLnJlc3VsdC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9ic01vZGFsUmVmLmhpZGUoKTtcbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZSBwdWxsLWxlZnRcIj57e3RpdGxlfX08L2g0PlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgcHVsbC1yaWdodFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgPC9idXR0b24+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgPGRpdiBbaW5uZXJIdG1sXT1cImlubmVyQm9keVwiPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gbXItMlwiIFtuZ0NsYXNzXT1cIm5vQnRuQ2xhc3Nlc1wiIChjbGljayk9XCJjbG9zZSgpXCIgKm5nSWY9XCIhaGlkZU5vQnRuXCI+XG4gICAgICAgIHt7bm9CdG5MYWJlbH19XG4gICAgPC9idXR0b24+ICAgIFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuXCIgW25nQ2xhc3NdPVwieWVzQnRuQ2xhc3Nlc1wiIChjbGljayk9XCJjb25maXJtKClcIj5cbiAgICAgICAge3t5ZXNCdG5MYWJlbH19XG4gICAgPC9idXR0b24+XG48L2Rpdj5cblxuXG4iXX0=