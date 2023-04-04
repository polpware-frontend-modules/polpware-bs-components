import { __decorate, __metadata } from "tslib";
import { Component, Input, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["ENTER"] = 13] = "ENTER";
})(KEY_CODE || (KEY_CODE = {}));
let AlertBoxComponent = class AlertBoxComponent {
    constructor(_bsModalRef) {
        this._bsModalRef = _bsModalRef;
        this.enableEnter = false;
        this.result = new Subject();
    }
    ngOnInit() {
        this.hideNoBtn = this.hideNoBtn || false;
        this.yesBtnLabel = this.yesBtnLabel || 'Yes';
        this.noBtnLabel = this.noBtnLabel || 'No';
        this.yesBtnClasses = this.yesBtnClasses || 'btn-primary';
        this.noBtnClasses = this.noBtnClasses || 'btn-secondary';
    }
    keyEvent(event) {
        if (this.enableEnter && event.keyCode === KEY_CODE.ENTER) {
            this.confirm();
        }
    }
    close() {
        this.result.next(false);
        this.result.complete();
        this._bsModalRef.hide();
    }
    confirm() {
        this.result.next(true);
        this.result.complete();
        this._bsModalRef.hide();
    }
};
AlertBoxComponent.ctorParameters = () => [
    { type: BsModalRef }
];
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AlertBoxComponent.prototype, "hideNoBtn", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AlertBoxComponent.prototype, "yesBtnLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AlertBoxComponent.prototype, "noBtnLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AlertBoxComponent.prototype, "noBtnClasses", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AlertBoxComponent.prototype, "yesBtnClasses", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AlertBoxComponent.prototype, "enableEnter", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AlertBoxComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AlertBoxComponent.prototype, "innerBody", void 0);
__decorate([
    HostListener('window:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], AlertBoxComponent.prototype, "keyEvent", null);
AlertBoxComponent = __decorate([
    Component({
        selector: 'polp-bs-alert-box',
        template: "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">{{title}}</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <div [innerHtml]=\"innerBody\">\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn mr-2\" [ngClass]=\"noBtnClasses\" (click)=\"close()\" *ngIf=\"!hideNoBtn\">\n        {{noBtnLabel}}\n    </button>    \n    <button type=\"button\" class=\"btn\" [ngClass]=\"yesBtnClasses\" (click)=\"confirm()\">\n        {{yesBtnLabel}}\n    </button>\n</div>\n\n\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [BsModalRef])
], AlertBoxComponent);
export { AlertBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9icy1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtYm94L2FsZXJ0LWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRCxJQUFLLFFBRUo7QUFGRCxXQUFLLFFBQVE7SUFDVCwwQ0FBVSxDQUFBO0FBQ2QsQ0FBQyxFQUZJLFFBQVEsS0FBUixRQUFRLFFBRVo7QUFrQkQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFlMUIsWUFBNkIsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFQM0MsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFLdEMsV0FBTSxHQUFxQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBR3pDLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUM7UUFFMUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksZUFBZSxDQUFDO0lBQzdELENBQUM7SUFHRCxRQUFRLENBQUMsS0FBb0I7UUFDekIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLEtBQUssRUFBRTtZQUN0RCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0NBRUosQ0FBQTs7WUEvQjZDLFVBQVU7O0FBYjNDO0lBQVIsS0FBSyxFQUFFOztvREFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7O3NEQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTs7cURBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOzt1REFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7O3dEQUF1QjtBQUV0QjtJQUFSLEtBQUssRUFBRTs7c0RBQThCO0FBRTdCO0lBQVIsS0FBSyxFQUFFOztnREFBZTtBQUNkO0lBQVIsS0FBSyxFQUFFOztvREFBbUI7QUFpQjNCO0lBREMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztxQ0FDekIsYUFBYTs7aURBSTVCO0FBaENRLGlCQUFpQjtJQUw3QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLG1yQkFBeUM7O0tBRTVDLENBQUM7cUNBZ0I0QyxVQUFVO0dBZjNDLGlCQUFpQixDQThDN0I7U0E5Q1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJzTW9kYWxSZWYgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcblxuZW51bSBLRVlfQ09ERSB7XG4gICAgRU5URVIgPSAxM1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBbGVydEJveElucHV0cyB7XG4gICAgaGlkZU5vQnRuPzogYm9vbGVhbjtcbiAgICB5ZXNCdG5MYWJlbD86IHN0cmluZztcbiAgICBub0J0bkxhYmVsPzogc3RyaW5nO1xuICAgIG5vQnRuQ2xhc3Nlcz86IHN0cmluZztcbiAgICB5ZXNCdG5DbGFzc2VzPzogc3RyaW5nO1xuICAgIGVuYWJsZUVudGVyPzogYm9vbGVhbjtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGlubmVyQm9keTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtYnMtYWxlcnQtYm94JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtYm94LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hbGVydC1ib3guY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Qm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGhpZGVOb0J0bjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB5ZXNCdG5MYWJlbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG5vQnRuTGFiZWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBub0J0bkNsYXNzZXM6IHN0cmluZztcbiAgICBASW5wdXQoKSB5ZXNCdG5DbGFzc2VzOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBlbmFibGVFbnRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBpbm5lckJvZHk6IHN0cmluZztcblxuICAgIHJlc3VsdDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9ic01vZGFsUmVmOiBCc01vZGFsUmVmKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGlkZU5vQnRuID0gdGhpcy5oaWRlTm9CdG4gfHwgZmFsc2U7XG4gICAgICAgIHRoaXMueWVzQnRuTGFiZWwgPSB0aGlzLnllc0J0bkxhYmVsIHx8ICdZZXMnO1xuICAgICAgICB0aGlzLm5vQnRuTGFiZWwgPSB0aGlzLm5vQnRuTGFiZWwgfHwgJ05vJztcblxuICAgICAgICB0aGlzLnllc0J0bkNsYXNzZXMgPSB0aGlzLnllc0J0bkNsYXNzZXMgfHwgJ2J0bi1wcmltYXJ5JztcbiAgICAgICAgdGhpcy5ub0J0bkNsYXNzZXMgPSB0aGlzLm5vQnRuQ2xhc3NlcyB8fCAnYnRuLXNlY29uZGFyeSc7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleXVwJywgWyckZXZlbnQnXSlcbiAgICBrZXlFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVFbnRlciAmJiBldmVudC5rZXlDb2RlID09PSBLRVlfQ09ERS5FTlRFUikge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQubmV4dChmYWxzZSk7XG4gICAgICAgIHRoaXMucmVzdWx0LmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMuX2JzTW9kYWxSZWYuaGlkZSgpO1xuICAgIH1cblxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAgIHRoaXMucmVzdWx0Lm5leHQodHJ1ZSk7XG4gICAgICAgIHRoaXMucmVzdWx0LmNvbXBsZXRlKCk7XG4gICAgICAgIHRoaXMuX2JzTW9kYWxSZWYuaGlkZSgpO1xuICAgIH1cblxufVxuIl19