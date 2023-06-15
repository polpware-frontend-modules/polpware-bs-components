import { Component, Output, EventEmitter, Input } from '@angular/core';
import { EmailFormAbstractComponent, AlertTypeEnum } from '@polpware/ngx-email-composer';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/alert";
import * as i2 from "ngx-chips";
import * as i3 from "@tinymce/tinymce-angular";
import * as i4 from "@fortawesome/angular-fontawesome";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
import * as i7 from "ngx-autosize";
export class EmailComposerComponent extends EmailFormAbstractComponent {
    constructor() {
        super();
        this.faSpinner = faSpinner;
        this.initEmails = [];
        this.isHtmlBody = false;
        this.onClose = new EventEmitter();
    }
    get bsAlertType() {
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
    }
    ngOnInit() {
        if (this.initEmails && Array.isArray(this.initEmails)) {
            this.emails = [...this.initEmails];
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.emailInputBox.focus(true);
        }, 200);
    }
    // Override
    submit() {
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
        super.submit();
    }
    close() {
        this.onClose.emit();
    }
}
EmailComposerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: EmailComposerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
EmailComposerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: EmailComposerComponent, selector: "polp-email-composer", inputs: { initEmails: "initEmails", isHtmlBody: "isHtmlBody" }, outputs: { onClose: "onClose" }, usesInheritance: true, ngImport: i0, template: "<alert [type]=\"bsAlertType\" [dismissible]=\"alertDismissible\" *ngIf=\"alertType > 0\">\n    <p>\n        {{alertMessage}}\n    </p>\n</alert>\n\n<div>\n    <div class=\"mb-4\">\n        <label class=\"form-label\">Recipients</label>\n        <tag-input [(ngModel)]=\"emails\" #emailInputBox\n                   name=\"emailInputs\"\n                   (focusout)=\"onOutOfTagInput($event)\"\n                   (onTextChange)=\"textChanged($event)\"\n                   [addOnPaste]=\"true\"\n                   [modelAsStrings]=\"true\"\n                   [trimTags]=\"true\"\n                   [editable]=\"true\"\n                   [errorMessages]=\"errorMessages\"\n                   [validators]=\"validators\"\n                   [secondaryPlaceholder]=\"'Emails'\"\n                   [separatorKeyCodes]=\"[32,44,58,59]\"\n                   [displayBy]=\"'display'\"\n                   [identifyBy]=\"'value'\"                       \n                   [placeholder]=\"'+ Email'\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItemsAsync | async\">\n                <ng-template let-item=\"item\" let-index=\"index\">\n                    {{ item.display }}\n                </ng-template>\n            </tag-input-dropdown>\n        </tag-input>\n    </div>\n\n    <div class=\"mb-4\">\n        <label for=\"messageTitleInput\" class=\"form-label\">Subject</label>\n        <input name=\"messageTitleInput\" id=\"messageTitleInput\" aria-describedby=\"messageTitleHelp\"\n               class=\"form-control\"\n               [(ngModel)]=\"messageTitle\" #messageTitleCtrl=\"ngModel\" required>\n        <div id=\"messageTitleHelp\"\n             class=\"form-text text-danger\" *ngIf=\"!messageTitleCtrl.valid && messageTitleCtrl.touched\">\n            Subject is required.\n        </div>\n    </div>\n\n    <div class=\"mb-4\" *ngIf=\"isHtmlBody; else textBody\">\n        <label class=\"form-label\">Message</label>\n        <editor [(ngModel)]=\"messageBody\"\n                #emailBody\n                #messageBodyCtrl=\"ngModel\"               \n                name=\"messageBodyInput\"\n                class=\"form-control p-0\"                \n                [init]=\"{htmlAllowedTags: ['.*'], htmlAllowedAttrs: ['.*'], extended_valid_elements: '*[.*]', draggable_modal: true }\"\n                plugins =\"advlist autolink link image lists charmap preview anchor pagebreak searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking table emoticons template help autoresize\"\n                toolbar =\"undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media fullpage | forecolor backcolor emoticons | help\"\n        >\n        </editor>\n        <div id=\"messageBodyHelp\" class=\"form-text\">\n            Body message is required.\n        </div>\n    </div>\n    <ng-template #textBody>\n        <div class=\"mb-4\">\n            <label for=\"messageBodyInput\" class=\"form-label\">Message</label>        \n            <textarea name=\"messageBodyInput\" id=\"messageBodyInput\" aria-describedby=\"messageBodyHelp\"\n                      class=\"form-control\"\n                      #emailBody\n                      autosize [minRows]=\"5\" [maxRows]=\"10\"\n                      [(ngModel)]=\"messageBody\" #messageBodyCtrl=\"ngModel\" required>\n            </textarea>\n            <div id=\"messageBodyHelp\"\n                 class=\"form-text text-danger\" *ngIf=\"!messageBodyCtrl.valid && messageBodyCtrl.touched\">\n                Body message is required.\n            </div>\n        </div>\n    </ng-template>\n\n    <div class=\"d-flex justify-content-end mb-4\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\" [disabled]=\"alertType == 3\"\n                *ngIf=\"!showCloseBtn; else closeBtnTmpl\">\n            Submit\n            <fa-icon class=\"ms-2\" [icon]=\"faSpinner\" [spin]=\"true\" *ngIf=\"alertType == 3\"></fa-icon>\n        </button>\n        <ng-template #closeBtnTmpl>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">\n                Close\n            </button>\n        </ng-template>\n    </div>\n</div>\n", styles: [""], components: [{ type: i1.AlertComponent, selector: "alert,bs-alert", inputs: ["type", "dismissible", "dismissOnTimeout", "isOpen"], outputs: ["onClose", "onClosed"] }, { type: i2.TagInputComponent, selector: "tag-input", inputs: ["separatorKeys", "separatorKeyCodes", "placeholder", "secondaryPlaceholder", "maxItems", "validators", "asyncValidators", "onlyFromAutocomplete", "errorMessages", "theme", "onTextChangeDebounce", "inputId", "inputClass", "clearOnBlur", "hideForm", "addOnBlur", "addOnPaste", "pasteSplitPattern", "blinkIfDupe", "removable", "editable", "allowDupes", "modelAsStrings", "trimTags", "inputText", "ripple", "tabindex", "disable", "dragZone", "onRemoving", "onAdding", "animationDuration"], outputs: ["onAdd", "onRemove", "onSelect", "onFocus", "onBlur", "onTextChange", "onPaste", "onValidationError", "onTagEdited", "inputTextChange"] }, { type: i2.TagInputDropdown, selector: "tag-input-dropdown", inputs: ["offset", "focusFirstElement", "showDropdownIfEmpty", "autocompleteObservable", "minimumTextLength", "limitItemsTo", "displayBy", "identifyBy", "matchingFn", "appendToBody", "keepOpen", "dynamicUpdate", "zIndex", "autocompleteItems"] }, { type: i3.EditorComponent, selector: "editor", inputs: ["cloudChannel", "apiKey", "init", "id", "initialValue", "outputFormat", "inline", "tagName", "plugins", "toolbar", "modelEvents", "allowedEvents", "ignoreEvents", "disabled"] }, { type: i4.FaIconComponent, selector: "fa-icon", inputs: ["icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "classes", "transform", "a11yRole"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i6.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7.AutosizeDirective, selector: "[autosize]", inputs: ["onlyGrow", "useImportant", "minRows", "autosize", "maxRows"], outputs: ["resized"] }], pipes: { "async": i5.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: EmailComposerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'polp-email-composer', template: "<alert [type]=\"bsAlertType\" [dismissible]=\"alertDismissible\" *ngIf=\"alertType > 0\">\n    <p>\n        {{alertMessage}}\n    </p>\n</alert>\n\n<div>\n    <div class=\"mb-4\">\n        <label class=\"form-label\">Recipients</label>\n        <tag-input [(ngModel)]=\"emails\" #emailInputBox\n                   name=\"emailInputs\"\n                   (focusout)=\"onOutOfTagInput($event)\"\n                   (onTextChange)=\"textChanged($event)\"\n                   [addOnPaste]=\"true\"\n                   [modelAsStrings]=\"true\"\n                   [trimTags]=\"true\"\n                   [editable]=\"true\"\n                   [errorMessages]=\"errorMessages\"\n                   [validators]=\"validators\"\n                   [secondaryPlaceholder]=\"'Emails'\"\n                   [separatorKeyCodes]=\"[32,44,58,59]\"\n                   [displayBy]=\"'display'\"\n                   [identifyBy]=\"'value'\"                       \n                   [placeholder]=\"'+ Email'\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItemsAsync | async\">\n                <ng-template let-item=\"item\" let-index=\"index\">\n                    {{ item.display }}\n                </ng-template>\n            </tag-input-dropdown>\n        </tag-input>\n    </div>\n\n    <div class=\"mb-4\">\n        <label for=\"messageTitleInput\" class=\"form-label\">Subject</label>\n        <input name=\"messageTitleInput\" id=\"messageTitleInput\" aria-describedby=\"messageTitleHelp\"\n               class=\"form-control\"\n               [(ngModel)]=\"messageTitle\" #messageTitleCtrl=\"ngModel\" required>\n        <div id=\"messageTitleHelp\"\n             class=\"form-text text-danger\" *ngIf=\"!messageTitleCtrl.valid && messageTitleCtrl.touched\">\n            Subject is required.\n        </div>\n    </div>\n\n    <div class=\"mb-4\" *ngIf=\"isHtmlBody; else textBody\">\n        <label class=\"form-label\">Message</label>\n        <editor [(ngModel)]=\"messageBody\"\n                #emailBody\n                #messageBodyCtrl=\"ngModel\"               \n                name=\"messageBodyInput\"\n                class=\"form-control p-0\"                \n                [init]=\"{htmlAllowedTags: ['.*'], htmlAllowedAttrs: ['.*'], extended_valid_elements: '*[.*]', draggable_modal: true }\"\n                plugins =\"advlist autolink link image lists charmap preview anchor pagebreak searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking table emoticons template help autoresize\"\n                toolbar =\"undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media fullpage | forecolor backcolor emoticons | help\"\n        >\n        </editor>\n        <div id=\"messageBodyHelp\" class=\"form-text\">\n            Body message is required.\n        </div>\n    </div>\n    <ng-template #textBody>\n        <div class=\"mb-4\">\n            <label for=\"messageBodyInput\" class=\"form-label\">Message</label>        \n            <textarea name=\"messageBodyInput\" id=\"messageBodyInput\" aria-describedby=\"messageBodyHelp\"\n                      class=\"form-control\"\n                      #emailBody\n                      autosize [minRows]=\"5\" [maxRows]=\"10\"\n                      [(ngModel)]=\"messageBody\" #messageBodyCtrl=\"ngModel\" required>\n            </textarea>\n            <div id=\"messageBodyHelp\"\n                 class=\"form-text text-danger\" *ngIf=\"!messageBodyCtrl.valid && messageBodyCtrl.touched\">\n                Body message is required.\n            </div>\n        </div>\n    </ng-template>\n\n    <div class=\"d-flex justify-content-end mb-4\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\" [disabled]=\"alertType == 3\"\n                *ngIf=\"!showCloseBtn; else closeBtnTmpl\">\n            Submit\n            <fa-icon class=\"ms-2\" [icon]=\"faSpinner\" [spin]=\"true\" *ngIf=\"alertType == 3\"></fa-icon>\n        </button>\n        <ng-template #closeBtnTmpl>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">\n                Close\n            </button>\n        </ng-template>\n    </div>\n</div>\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { initEmails: [{
                type: Input
            }], isHtmlBody: [{
                type: Input
            }], onClose: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtY29tcG9zZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZW1haWwtY29tcG9zZXIvZW1haWwtY29tcG9zZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZW1haWwtY29tcG9zZXIvZW1haWwtY29tcG9zZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXpGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7O0FBTzlELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSwwQkFBMEI7SUFXbEU7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQVRaLGNBQVMsR0FBRyxTQUFTLENBQUM7UUFFYixlQUFVLEdBQWEsRUFBRSxDQUFDO1FBQzFCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFHNUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFJN0IsQ0FBQztJQUVELElBQUksV0FBVztRQUNYLFFBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNwQixLQUFLLGFBQWEsQ0FBQyxJQUFJO2dCQUNuQixPQUFPLE1BQU0sQ0FBQztZQUNsQixLQUFLLGFBQWEsQ0FBQyxLQUFLO2dCQUNwQixPQUFPLFFBQVEsQ0FBQztZQUNwQixLQUFLLGFBQWEsQ0FBQyxPQUFPO2dCQUN0QixPQUFPLFNBQVMsQ0FBQztZQUNyQixLQUFLLGFBQWEsQ0FBQyxPQUFPO2dCQUN0QixPQUFPLFNBQVMsQ0FBQztZQUNyQjtnQkFDSSxPQUFPLE1BQU0sQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFRCxlQUFlO1FBQ1gsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxXQUFXO0lBQ1gsTUFBTTtRQUVGLGVBQWU7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDbEIsQ0FBQyxJQUFJLENBQUMsV0FBVztZQUNqQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLCtDQUErQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDN0IsT0FBTztTQUNWO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUNoQztRQUVELEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7b0hBbEVRLHNCQUFzQjt3R0FBdEIsc0JBQXNCLG1MQ1ZuQywydElBd0ZBOzRGRDlFYSxzQkFBc0I7a0JBTGxDLFNBQVM7K0JBQ0kscUJBQXFCOzBFQVN0QixVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBR04sT0FBTztzQkFETixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW1haWxGb3JtQWJzdHJhY3RDb21wb25lbnQsIEFsZXJ0VHlwZUVudW0gfSBmcm9tICdAcG9scHdhcmUvbmd4LWVtYWlsLWNvbXBvc2VyJztcblxuaW1wb3J0IHsgZmFTcGlubmVyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLWVtYWlsLWNvbXBvc2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZW1haWwtY29tcG9zZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2VtYWlsLWNvbXBvc2VyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFbWFpbENvbXBvc2VyQ29tcG9uZW50IGV4dGVuZHMgRW1haWxGb3JtQWJzdHJhY3RDb21wb25lbnRcbiAgICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG5cbiAgICBmYVNwaW5uZXIgPSBmYVNwaW5uZXI7XG5cbiAgICBASW5wdXQoKSBpbml0RW1haWxzOiBzdHJpbmdbXSA9IFtdO1xuICAgIEBJbnB1dCgpIGlzSHRtbEJvZHkgPSBmYWxzZTtcblxuICAgIEBPdXRwdXQoKVxuICAgIG9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgYnNBbGVydFR5cGUoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5hbGVydFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQWxlcnRUeXBlRW51bS5pbmZvOlxuICAgICAgICAgICAgICAgIHJldHVybiAnaW5mbyc7XG4gICAgICAgICAgICBjYXNlIEFsZXJ0VHlwZUVudW0uZXJyb3I6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkYW5nZXInO1xuICAgICAgICAgICAgY2FzZSBBbGVydFR5cGVFbnVtLnN1Y2Nlc3M6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdzdWNjZXNzJztcbiAgICAgICAgICAgIGNhc2UgQWxlcnRUeXBlRW51bS53YXJuaW5nOlxuICAgICAgICAgICAgICAgIHJldHVybiAnd2FybmluZyc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnaW5mbyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5pdEVtYWlscyAmJiBBcnJheS5pc0FycmF5KHRoaXMuaW5pdEVtYWlscykpIHtcbiAgICAgICAgICAgIHRoaXMuZW1haWxzID0gWy4uLnRoaXMuaW5pdEVtYWlsc107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWFpbElucHV0Qm94LmZvY3VzKHRydWUpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlXG4gICAgc3VibWl0KCkge1xuXG4gICAgICAgIC8vIFNhbml0eSBjaGVja1xuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZVRpdGxlIHx8XG4gICAgICAgICAgICAhdGhpcy5tZXNzYWdlQm9keSB8fFxuICAgICAgICAgICAgIXRoaXMuZW1haWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPSBBbGVydFR5cGVFbnVtLmVycm9yO1xuICAgICAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSAnUGxlYXNlIHByb3ZpZGUgcmVxdWlyZWQgdmFsdWVzIGFuZCB0cnkgYWdhaW4hJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnRTdWJNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0RGlzbWlzc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbGVydFR5cGUgPSBBbGVydFR5cGVFbnVtLm5vbmU7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0TWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hbGVydFN1Yk1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnREaXNtaXNzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5zdWJtaXQoKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoKTtcbiAgICB9XG5cbn1cbiIsIjxhbGVydCBbdHlwZV09XCJic0FsZXJ0VHlwZVwiIFtkaXNtaXNzaWJsZV09XCJhbGVydERpc21pc3NpYmxlXCIgKm5nSWY9XCJhbGVydFR5cGUgPiAwXCI+XG4gICAgPHA+XG4gICAgICAgIHt7YWxlcnRNZXNzYWdlfX1cbiAgICA8L3A+XG48L2FsZXJ0PlxuXG48ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtYi00XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIj5SZWNpcGllbnRzPC9sYWJlbD5cbiAgICAgICAgPHRhZy1pbnB1dCBbKG5nTW9kZWwpXT1cImVtYWlsc1wiICNlbWFpbElucHV0Qm94XG4gICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsSW5wdXRzXCJcbiAgICAgICAgICAgICAgICAgICAoZm9jdXNvdXQpPVwib25PdXRPZlRhZ0lucHV0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgIChvblRleHRDaGFuZ2UpPVwidGV4dENoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgW2FkZE9uUGFzdGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgW21vZGVsQXNTdHJpbmdzXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIFt0cmltVGFnc109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBbZWRpdGFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgW2Vycm9yTWVzc2FnZXNdPVwiZXJyb3JNZXNzYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgW3ZhbGlkYXRvcnNdPVwidmFsaWRhdG9yc1wiXG4gICAgICAgICAgICAgICAgICAgW3NlY29uZGFyeVBsYWNlaG9sZGVyXT1cIidFbWFpbHMnXCJcbiAgICAgICAgICAgICAgICAgICBbc2VwYXJhdG9yS2V5Q29kZXNdPVwiWzMyLDQ0LDU4LDU5XVwiXG4gICAgICAgICAgICAgICAgICAgW2Rpc3BsYXlCeV09XCInZGlzcGxheSdcIlxuICAgICAgICAgICAgICAgICAgIFtpZGVudGlmeUJ5XT1cIid2YWx1ZSdcIiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIicrIEVtYWlsJ1wiPlxuICAgICAgICAgICAgPHRhZy1pbnB1dC1kcm9wZG93biBbYXV0b2NvbXBsZXRlSXRlbXNdPVwiYXV0b2NvbXBsZXRlSXRlbXNBc3luYyB8IGFzeW5jXCI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiIGxldC1pbmRleD1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0uZGlzcGxheSB9fVxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3RhZy1pbnB1dC1kcm9wZG93bj5cbiAgICAgICAgPC90YWctaW5wdXQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibWItNFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibWVzc2FnZVRpdGxlSW5wdXRcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5TdWJqZWN0PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5hbWU9XCJtZXNzYWdlVGl0bGVJbnB1dFwiIGlkPVwibWVzc2FnZVRpdGxlSW5wdXRcIiBhcmlhLWRlc2NyaWJlZGJ5PVwibWVzc2FnZVRpdGxlSGVscFwiXG4gICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIm1lc3NhZ2VUaXRsZVwiICNtZXNzYWdlVGl0bGVDdHJsPVwibmdNb2RlbFwiIHJlcXVpcmVkPlxuICAgICAgICA8ZGl2IGlkPVwibWVzc2FnZVRpdGxlSGVscFwiXG4gICAgICAgICAgICAgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcIiAqbmdJZj1cIiFtZXNzYWdlVGl0bGVDdHJsLnZhbGlkICYmIG1lc3NhZ2VUaXRsZUN0cmwudG91Y2hlZFwiPlxuICAgICAgICAgICAgU3ViamVjdCBpcyByZXF1aXJlZC5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwibWItNFwiICpuZ0lmPVwiaXNIdG1sQm9keTsgZWxzZSB0ZXh0Qm9keVwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCI+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgIDxlZGl0b3IgWyhuZ01vZGVsKV09XCJtZXNzYWdlQm9keVwiXG4gICAgICAgICAgICAgICAgI2VtYWlsQm9keVxuICAgICAgICAgICAgICAgICNtZXNzYWdlQm9keUN0cmw9XCJuZ01vZGVsXCIgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZUJvZHlJbnB1dFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgcC0wXCIgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgW2luaXRdPVwie2h0bWxBbGxvd2VkVGFnczogWycuKiddLCBodG1sQWxsb3dlZEF0dHJzOiBbJy4qJ10sIGV4dGVuZGVkX3ZhbGlkX2VsZW1lbnRzOiAnKlsuKl0nLCBkcmFnZ2FibGVfbW9kYWw6IHRydWUgfVwiXG4gICAgICAgICAgICAgICAgcGx1Z2lucyA9XCJhZHZsaXN0IGF1dG9saW5rIGxpbmsgaW1hZ2UgbGlzdHMgY2hhcm1hcCBwcmV2aWV3IGFuY2hvciBwYWdlYnJlYWsgc2VhcmNocmVwbGFjZSB3b3JkY291bnQgdmlzdWFsYmxvY2tzIHZpc3VhbGNoYXJzIGNvZGUgZnVsbHNjcmVlbiBpbnNlcnRkYXRldGltZSBtZWRpYSBub25icmVha2luZyB0YWJsZSBlbW90aWNvbnMgdGVtcGxhdGUgaGVscCBhdXRvcmVzaXplXCJcbiAgICAgICAgICAgICAgICB0b29sYmFyID1cInVuZG8gcmVkbyB8IHN0eWxlc2VsZWN0IHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnkgfCBidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgfCBsaW5rIGltYWdlIHwgcHJldmlldyBtZWRpYSBmdWxscGFnZSB8IGZvcmVjb2xvciBiYWNrY29sb3IgZW1vdGljb25zIHwgaGVscFwiXG4gICAgICAgID5cbiAgICAgICAgPC9lZGl0b3I+XG4gICAgICAgIDxkaXYgaWQ9XCJtZXNzYWdlQm9keUhlbHBcIiBjbGFzcz1cImZvcm0tdGV4dFwiPlxuICAgICAgICAgICAgQm9keSBtZXNzYWdlIGlzIHJlcXVpcmVkLlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8bmctdGVtcGxhdGUgI3RleHRCb2R5PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWItNFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1lc3NhZ2VCb2R5SW5wdXRcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5NZXNzYWdlPC9sYWJlbD4gICAgICAgIFxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlQm9keUlucHV0XCIgaWQ9XCJtZXNzYWdlQm9keUlucHV0XCIgYXJpYS1kZXNjcmliZWRieT1cIm1lc3NhZ2VCb2R5SGVscFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICNlbWFpbEJvZHlcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvc2l6ZSBbbWluUm93c109XCI1XCIgW21heFJvd3NdPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibWVzc2FnZUJvZHlcIiAjbWVzc2FnZUJvZHlDdHJsPVwibmdNb2RlbFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtZXNzYWdlQm9keUhlbHBcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LWRhbmdlclwiICpuZ0lmPVwiIW1lc3NhZ2VCb2R5Q3RybC52YWxpZCAmJiBtZXNzYWdlQm9keUN0cmwudG91Y2hlZFwiPlxuICAgICAgICAgICAgICAgIEJvZHkgbWVzc2FnZSBpcyByZXF1aXJlZC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1iLTRcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwic3VibWl0KClcIiBbZGlzYWJsZWRdPVwiYWxlcnRUeXBlID09IDNcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiIXNob3dDbG9zZUJ0bjsgZWxzZSBjbG9zZUJ0blRtcGxcIj5cbiAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPGZhLWljb24gY2xhc3M9XCJtcy0yXCIgW2ljb25dPVwiZmFTcGlubmVyXCIgW3NwaW5dPVwidHJ1ZVwiICpuZ0lmPVwiYWxlcnRUeXBlID09IDNcIj48L2ZhLWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2Nsb3NlQnRuVG1wbD5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19