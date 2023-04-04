import { __decorate, __extends, __metadata, __read, __spread } from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { EmailFormAbstractComponent, AlertTypeEnum } from '@polpware/ngx-email-composer';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
var EmailComposerComponent = /** @class */ (function (_super) {
    __extends(EmailComposerComponent, _super);
    function EmailComposerComponent() {
        var _this = _super.call(this) || this;
        _this.faSpinner = faSpinner;
        _this.initEmails = [];
        _this.onClose = new EventEmitter();
        return _this;
    }
    Object.defineProperty(EmailComposerComponent.prototype, "bsAlertType", {
        get: function () {
            switch (this.alertType) {
                case AlertTypeEnum.info:
                    return 'info';
                case AlertTypeEnum.error:
                    return 'danger';
                case AlertTypeEnum.success:
                    return 'success';
                case AlertTypeEnum.warning:
                    return 'warning';
                default:
                    return 'info';
            }
        },
        enumerable: true,
        configurable: true
    });
    EmailComposerComponent.prototype.ngOnInit = function () {
        if (this.initEmails && Array.isArray(this.initEmails)) {
            this.emails = __spread(this.initEmails);
        }
    };
    EmailComposerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.emailInputBox.focus(true);
        }, 200);
    };
    // Override
    EmailComposerComponent.prototype.submit = function () {
        // Sanity check
        if (!this.messageTitle ||
            !this.messageBody ||
            !this.emails.length) {
            this.alertType = AlertTypeEnum.error;
            this.alertMessage = 'Please provide required values and try again!';
            this.alertSubMessage = '';
            this.alertDismissible = true;
            return;
        }
        else {
            this.alertType = AlertTypeEnum.none;
            this.alertMessage = '';
            this.alertSubMessage = '';
            this.alertDismissible = true;
        }
        _super.prototype.submit.call(this);
    };
    EmailComposerComponent.prototype.close = function () {
        this.onClose.emit();
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], EmailComposerComponent.prototype, "initEmails", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EmailComposerComponent.prototype, "onClose", void 0);
    EmailComposerComponent = __decorate([
        Component({
            selector: 'polp-email-composer',
            template: "<alert [type]=\"bsAlertType\" [dismissible]=\"alertDismissible\" *ngIf=\"alertType > 0\">\n    <p>\n        {{alertMessage}}\n    </p>\n</alert>\n\n<div>\n    <div class=\"form-group mb-4\">\n        <label>Recipients</label>\n        <tag-input [(ngModel)]=\"emails\" #emailInputBox\n                   name=\"emailInputs\"\n                   (focusout)=\"onOutOfTagInput($event)\"\n                   (onTextChange)=\"textChanged($event)\"\n                   [addOnPaste]=\"true\"\n                   [modelAsStrings]=\"true\"\n                   [trimTags]=\"true\"\n                   [editable]=\"true\"\n                   [errorMessages]=\"errorMessages\"\n                   [validators]=\"validators\"\n                   [secondaryPlaceholder]=\"'Emails'\"\n                   [separatorKeyCodes]=\"[32,44,58,59]\"\n                   [displayBy]=\"'display'\"\n                   [identifyBy]=\"'value'\"                       \n                   [placeholder]=\"'+ Email'\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItemsAsync | async\">\n                <ng-template let-item=\"item\" let-index=\"index\">\n                    {{ item.display }}\n                </ng-template>\n            </tag-input-dropdown>\n        </tag-input>\n    </div>\n\n    <div class=\"form-group mb-4\">\n        <label for=\"messageTitleInput\">Subject</label>\n        <input name=\"messageTitleInput\" id=\"messageTitleInput\" \n               class=\"form-control\"\n               [(ngModel)]=\"messageTitle\" #messageTitleCtrl=\"ngModel\" required>\n        <span class=\"d-block small text-danger\" *ngIf=\"!messageTitleCtrl.valid && messageTitleCtrl.touched\">\n            Subject is required.\n        </span>\n    </div>\n\n    <div class=\"form-group mb-4\">\n        <label for=\"messageBodyInput\">Message</label>        \n        <textarea name=\"messageBodyInput\" id=\"messageBodyInput\"\n                  class=\"form-control\"\n                  #emailBody\n                  autosize [minRows]=\"5\" [maxRows]=\"10\"\n                  [(ngModel)]=\"messageBody\" #messageBodyCtrl=\"ngModel\" required>\n        </textarea>\n        <span class=\"d-block small text-danger\" *ngIf=\"!messageBodyCtrl.valid && messageBodyCtrl.touched\">\n            Body message is required.\n        </span>\n    </div>\n\n    <div class=\"d-flex justify-content-end mb-4\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\" [disabled]=\"alertType == 3\"\n                *ngIf=\"!showCloseBtn; else closeBtnTmpl\">\n            Submit\n            <fa-icon class=\"ml-2\" [icon]=\"faSpinner\" [spin]=\"true\" *ngIf=\"alertType == 3\"></fa-icon>\n        </button>\n        <ng-template #closeBtnTmpl>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">\n                Close\n            </button>\n        </ng-template>\n    </div>\n</div>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], EmailComposerComponent);
    return EmailComposerComponent;
}(EmailFormAbstractComponent));
export { EmailComposerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtY29tcG9zZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL2JzLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV6RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFPOUQ7SUFBNEMsMENBQTBCO0lBVWxFO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBVEQsZUFBUyxHQUFHLFNBQVMsQ0FBQztRQUViLGdCQUFVLEdBQWEsRUFBRSxDQUFDO1FBR25DLGFBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztJQUk3QixDQUFDO0lBRUQsc0JBQUksK0NBQVc7YUFBZjtZQUNJLFFBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDcEIsS0FBSyxhQUFhLENBQUMsSUFBSTtvQkFDbkIsT0FBTyxNQUFNLENBQUM7Z0JBQ2xCLEtBQUssYUFBYSxDQUFDLEtBQUs7b0JBQ3BCLE9BQU8sUUFBUSxDQUFDO2dCQUNwQixLQUFLLGFBQWEsQ0FBQyxPQUFPO29CQUN0QixPQUFPLFNBQVMsQ0FBQztnQkFDckIsS0FBSyxhQUFhLENBQUMsT0FBTztvQkFDdEIsT0FBTyxTQUFTLENBQUM7Z0JBQ3JCO29CQUNJLE9BQU8sTUFBTSxDQUFDO2FBQ3JCO1FBQ0wsQ0FBQzs7O09BQUE7SUFFRCx5Q0FBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxNQUFNLFlBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVELGdEQUFlLEdBQWY7UUFBQSxpQkFJQztRQUhHLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxXQUFXO0lBQ1gsdUNBQU0sR0FBTjtRQUVJLGVBQWU7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDbEIsQ0FBQyxJQUFJLENBQUMsV0FBVztZQUNqQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLCtDQUErQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDN0IsT0FBTztTQUNWO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUNoQztRQUVELGlCQUFNLE1BQU0sV0FBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxzQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBNURRO1FBQVIsS0FBSyxFQUFFOzs4REFBMkI7SUFHbkM7UUFEQyxNQUFNLEVBQUU7OzJEQUNvQjtJQVJwQixzQkFBc0I7UUFMbEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixzNEZBQThDOztTQUVqRCxDQUFDOztPQUNXLHNCQUFzQixDQW1FbEM7SUFBRCw2QkFBQztDQUFBLEFBbkVELENBQTRDLDBCQUEwQixHQW1FckU7U0FuRVksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW1haWxGb3JtQWJzdHJhY3RDb21wb25lbnQsIEFsZXJ0VHlwZUVudW0gfSBmcm9tICdAcG9scHdhcmUvbmd4LWVtYWlsLWNvbXBvc2VyJztcblxuaW1wb3J0IHsgZmFTcGlubmVyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWVtYWlsLWNvbXBvc2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZW1haWwtY29tcG9zZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2VtYWlsLWNvbXBvc2VyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFbWFpbENvbXBvc2VyQ29tcG9uZW50IGV4dGVuZHMgRW1haWxGb3JtQWJzdHJhY3RDb21wb25lbnRcbiAgICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG5cbiAgICBmYVNwaW5uZXIgPSBmYVNwaW5uZXI7XG5cbiAgICBASW5wdXQoKSBpbml0RW1haWxzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgQE91dHB1dCgpXG4gICAgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBic0FsZXJ0VHlwZSgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmFsZXJ0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBbGVydFR5cGVFbnVtLmluZm86XG4gICAgICAgICAgICAgICAgcmV0dXJuICdpbmZvJztcbiAgICAgICAgICAgIGNhc2UgQWxlcnRUeXBlRW51bS5lcnJvcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Rhbmdlcic7XG4gICAgICAgICAgICBjYXNlIEFsZXJ0VHlwZUVudW0uc3VjY2VzczpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgY2FzZSBBbGVydFR5cGVFbnVtLndhcm5pbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd3YXJuaW5nJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdpbmZvJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5pbml0RW1haWxzICYmIEFycmF5LmlzQXJyYXkodGhpcy5pbml0RW1haWxzKSkge1xuICAgICAgICAgICAgdGhpcy5lbWFpbHMgPSBbLi4udGhpcy5pbml0RW1haWxzXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtYWlsSW5wdXRCb3guZm9jdXModHJ1ZSk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGVcbiAgICBzdWJtaXQoKSB7XG5cbiAgICAgICAgLy8gU2FuaXR5IGNoZWNrXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlVGl0bGUgfHxcbiAgICAgICAgICAgICF0aGlzLm1lc3NhZ2VCb2R5IHx8XG4gICAgICAgICAgICAhdGhpcy5lbWFpbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9IEFsZXJ0VHlwZUVudW0uZXJyb3I7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0TWVzc2FnZSA9ICdQbGVhc2UgcHJvdmlkZSByZXF1aXJlZCB2YWx1ZXMgYW5kIHRyeSBhZ2FpbiEnO1xuICAgICAgICAgICAgdGhpcy5hbGVydFN1Yk1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnREaXNtaXNzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9IEFsZXJ0VHlwZUVudW0ubm9uZTtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0U3ViTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hbGVydERpc21pc3NpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnN1Ym1pdCgpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuICAgIH1cblxufVxuIl19