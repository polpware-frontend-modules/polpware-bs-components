import { Component, Output, EventEmitter, Input } from '@angular/core';
import { EmailFormAbstractComponent, AlertTypeEnum } from '@polpware/ngx-email-composer';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ngx-bootstrap/alert";
import * as i4 from "@fortawesome/angular-fontawesome";
import * as i5 from "ngx-chips";
import * as i6 from "@tinymce/tinymce-angular";
import * as i7 from "@angular/cdk/text-field";
const _c0 = () => [32, 44, 58, 59];
const _c1 = () => [".*"];
const _c2 = (a0, a1) => ({ htmlAllowedTags: a0, htmlAllowedAttrs: a1, extended_valid_elements: "*[.*]", draggable_modal: true });
function EmailComposerComponent_alert_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "alert", 16)(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("type", ctx_r1.bsAlertType)("dismissible", ctx_r1.alertDismissible);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.alertMessage, " ");
} }
function EmailComposerComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r3 = ctx.item;
    i0.ɵɵtextInterpolate1(" ", item_r3.display, " ");
} }
function EmailComposerComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1, " Subject is required. ");
    i0.ɵɵelementEnd();
} }
function EmailComposerComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "label", 7);
    i0.ɵɵtext(2, "Message");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "editor", 18, 4);
    i0.ɵɵtwoWayListener("ngModelChange", function EmailComposerComponent_div_16_Template_editor_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.messageBody, $event) || (ctx_r1.messageBody = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 19);
    i0.ɵɵtext(7, " Body message is required. ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.messageBody);
    i0.ɵɵproperty("init", i0.ɵɵpureFunction2(4, _c2, i0.ɵɵpureFunction0(2, _c1), i0.ɵɵpureFunction0(3, _c1)));
} }
function EmailComposerComponent_ng_template_17_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtext(1, " Body message is required. ");
    i0.ɵɵelementEnd();
} }
function EmailComposerComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "label", 20);
    i0.ɵɵtext(2, "Message");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 21, 4);
    i0.ɵɵtwoWayListener("ngModelChange", function EmailComposerComponent_ng_template_17_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.messageBody, $event) || (ctx_r1.messageBody = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtext(6, "            ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, EmailComposerComponent_ng_template_17_div_7_Template, 2, 0, "div", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const messageBodyCtrl_r6 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("cdkAutosizeMinRows", 5)("cdkAutosizeMaxRows", 10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.messageBody);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !messageBodyCtrl_r6.valid && messageBodyCtrl_r6.touched);
} }
function EmailComposerComponent_button_20_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 26);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r1.faSpinner);
} }
function EmailComposerComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function EmailComposerComponent_button_20_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵtext(1, " Submit ");
    i0.ɵɵtemplate(2, EmailComposerComponent_button_20_fa_icon_2_Template, 1, 1, "fa-icon", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r1.alertType == 3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.alertType == 3);
} }
function EmailComposerComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵlistener("click", function EmailComposerComponent_ng_template_21_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(1, " Close ");
    i0.ɵɵelementEnd();
} }
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
    static { this.ɵfac = function EmailComposerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EmailComposerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EmailComposerComponent, selectors: [["polp-email-composer"]], inputs: { initEmails: "initEmails", isHtmlBody: "isHtmlBody" }, outputs: { onClose: "onClose" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 23, vars: 23, consts: [["emailInputBox", ""], ["messageTitleCtrl", "ngModel"], ["textBody", ""], ["closeBtnTmpl", ""], ["emailBody", "", "messageBodyCtrl", "ngModel"], [3, "type", "dismissible", 4, "ngIf"], [1, "mb-4"], [1, "form-label"], ["name", "emailInputs", 3, "ngModelChange", "focusout", "onTextChange", "ngModel", "addOnPaste", "modelAsStrings", "trimTags", "editable", "errorMessages", "validators", "secondaryPlaceholder", "separatorKeyCodes", "displayBy", "identifyBy", "placeholder"], [3, "autocompleteItems"], ["for", "messageTitleInput", 1, "form-label"], ["name", "messageTitleInput", "id", "messageTitleInput", "aria-describedby", "messageTitleHelp", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["id", "messageTitleHelp", "class", "form-text text-danger", 4, "ngIf"], ["class", "mb-4", 4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [3, "type", "dismissible"], ["id", "messageTitleHelp", 1, "form-text", "text-danger"], ["name", "messageBodyInput", "plugins", "advlist autolink link image lists charmap preview anchor pagebreak searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking table emoticons template help autoresize", "toolbar", "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media fullpage | forecolor backcolor emoticons | help", 1, "form-control", "p-0", "border-0", 3, "ngModelChange", "ngModel", "init"], ["id", "messageBodyHelp", 1, "form-text"], ["for", "messageBodyInput", 1, "form-label"], ["name", "messageBodyInput", "id", "messageBodyInput", "aria-describedby", "messageBodyHelp", "cdkTextareaAutosize", "", "required", "", 1, "form-control", 3, "ngModelChange", "cdkAutosizeMinRows", "cdkAutosizeMaxRows", "ngModel"], ["id", "messageBodyHelp", "class", "form-text text-danger", 4, "ngIf"], ["id", "messageBodyHelp", 1, "form-text", "text-danger"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "ms-2", "faSpinner", "", 3, "icon", 4, "ngIf"], ["faSpinner", "", 1, "ms-2", 3, "icon"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function EmailComposerComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵtemplate(0, EmailComposerComponent_alert_0_Template, 3, 3, "alert", 5);
            i0.ɵɵelementStart(1, "div")(2, "div", 6)(3, "label", 7);
            i0.ɵɵtext(4, "Recipients");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "tag-input", 8, 0);
            i0.ɵɵtwoWayListener("ngModelChange", function EmailComposerComponent_Template_tag_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.emails, $event) || (ctx.emails = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("focusout", function EmailComposerComponent_Template_tag_input_focusout_5_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onOutOfTagInput($event)); })("onTextChange", function EmailComposerComponent_Template_tag_input_onTextChange_5_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.textChanged($event)); });
            i0.ɵɵelementStart(7, "tag-input-dropdown", 9);
            i0.ɵɵpipe(8, "async");
            i0.ɵɵtemplate(9, EmailComposerComponent_ng_template_9_Template, 1, 1, "ng-template");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 6)(11, "label", 10);
            i0.ɵɵtext(12, "Subject");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "input", 11, 1);
            i0.ɵɵtwoWayListener("ngModelChange", function EmailComposerComponent_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.messageTitle, $event) || (ctx.messageTitle = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(15, EmailComposerComponent_div_15_Template, 2, 0, "div", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(16, EmailComposerComponent_div_16_Template, 8, 7, "div", 13)(17, EmailComposerComponent_ng_template_17_Template, 8, 4, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(19, "div", 14);
            i0.ɵɵtemplate(20, EmailComposerComponent_button_20_Template, 3, 2, "button", 15)(21, EmailComposerComponent_ng_template_21_Template, 2, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const messageTitleCtrl_r9 = i0.ɵɵreference(14);
            const textBody_r10 = i0.ɵɵreference(18);
            const closeBtnTmpl_r11 = i0.ɵɵreference(22);
            i0.ɵɵproperty("ngIf", ctx.alertType > 0);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.emails);
            i0.ɵɵproperty("addOnPaste", true)("modelAsStrings", true)("trimTags", true)("editable", true)("errorMessages", ctx.errorMessages)("validators", ctx.validators)("secondaryPlaceholder", "Emails")("separatorKeyCodes", i0.ɵɵpureFunction0(22, _c0))("displayBy", "display")("identifyBy", "value")("placeholder", "+ Email");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("autocompleteItems", i0.ɵɵpipeBind1(8, 20, ctx.autocompleteItemsAsync));
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.messageTitle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !messageTitleCtrl_r9.valid && messageTitleCtrl_r9.touched);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isHtmlBody)("ngIfElse", textBody_r10);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx.showCloseBtn)("ngIfElse", closeBtnTmpl_r11);
        } }, dependencies: [i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.RequiredValidator, i2.NgModel, i3.AlertComponent, i4.FaIconComponent, i5.TagInputComponent, i5.TagInputDropdown, i6.EditorComponent, i7.CdkTextareaAutosize, i1.AsyncPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmailComposerComponent, [{
        type: Component,
        args: [{ selector: 'polp-email-composer', template: "<alert [type]=\"bsAlertType\" [dismissible]=\"alertDismissible\" *ngIf=\"alertType > 0\">\n    <p>\n        {{alertMessage}}\n    </p>\n</alert>\n\n<div>\n    <div class=\"mb-4\">\n        <label class=\"form-label\">Recipients</label>\n        <tag-input [(ngModel)]=\"emails\" #emailInputBox\n                   name=\"emailInputs\"\n                   (focusout)=\"onOutOfTagInput($event)\"\n                   (onTextChange)=\"textChanged($event)\"\n                   [addOnPaste]=\"true\"\n                   [modelAsStrings]=\"true\"\n                   [trimTags]=\"true\"\n                   [editable]=\"true\"\n                   [errorMessages]=\"errorMessages\"\n                   [validators]=\"validators\"\n                   [secondaryPlaceholder]=\"'Emails'\"\n                   [separatorKeyCodes]=\"[32,44,58,59]\"\n                   [displayBy]=\"'display'\"\n                   [identifyBy]=\"'value'\"                       \n                   [placeholder]=\"'+ Email'\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItemsAsync | async\">\n                <ng-template let-item=\"item\" let-index=\"index\">\n                    {{ item.display }}\n                </ng-template>\n            </tag-input-dropdown>\n        </tag-input>\n    </div>\n\n    <div class=\"mb-4\">\n        <label for=\"messageTitleInput\" class=\"form-label\">Subject</label>\n        <input name=\"messageTitleInput\" id=\"messageTitleInput\" aria-describedby=\"messageTitleHelp\"\n               class=\"form-control\"\n               [(ngModel)]=\"messageTitle\" #messageTitleCtrl=\"ngModel\" required>\n        <div id=\"messageTitleHelp\"\n             class=\"form-text text-danger\" *ngIf=\"!messageTitleCtrl.valid && messageTitleCtrl.touched\">\n            Subject is required.\n        </div>\n    </div>\n\n    <div class=\"mb-4\" *ngIf=\"isHtmlBody; else textBody\">\n        <label class=\"form-label\">Message</label>\n        <editor [(ngModel)]=\"messageBody\"\n                #emailBody\n                #messageBodyCtrl=\"ngModel\"               \n                name=\"messageBodyInput\"\n                class=\"form-control p-0 border-0\"                \n                [init]=\"{htmlAllowedTags: ['.*'], htmlAllowedAttrs: ['.*'], extended_valid_elements: '*[.*]', draggable_modal: true }\"\n                plugins =\"advlist autolink link image lists charmap preview anchor pagebreak searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking table emoticons template help autoresize\"\n                toolbar =\"undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media fullpage | forecolor backcolor emoticons | help\"\n        >\n        </editor>\n        <div id=\"messageBodyHelp\" class=\"form-text\">\n            Body message is required.\n        </div>\n    </div>\n    <ng-template #textBody>\n        <div class=\"mb-4\">\n            <label for=\"messageBodyInput\" class=\"form-label\">Message</label>        \n            <textarea name=\"messageBodyInput\" id=\"messageBodyInput\" aria-describedby=\"messageBodyHelp\"\n                      class=\"form-control\"\n                      #emailBody\n                      cdkTextareaAutosize\n                      [cdkAutosizeMinRows]=\"5\"\n                      [cdkAutosizeMaxRows]=\"10\"\n                      [(ngModel)]=\"messageBody\" #messageBodyCtrl=\"ngModel\" required>\n            </textarea>\n            <div id=\"messageBodyHelp\"\n                 class=\"form-text text-danger\" *ngIf=\"!messageBodyCtrl.valid && messageBodyCtrl.touched\">\n                Body message is required.\n            </div>\n        </div>\n    </ng-template>\n\n    <div class=\"d-flex justify-content-end mb-4\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\" [disabled]=\"alertType == 3\"\n                *ngIf=\"!showCloseBtn; else closeBtnTmpl\">\n            Submit\n            <fa-icon class=\"ms-2\" [icon]=\"faSpinner\" faSpinner *ngIf=\"alertType == 3\"></fa-icon>\n        </button>\n        <ng-template #closeBtnTmpl>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">\n                Close\n            </button>\n        </ng-template>\n    </div>\n</div>\n" }]
    }], () => [], { initEmails: [{
            type: Input
        }], isHtmlBody: [{
            type: Input
        }], onClose: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EmailComposerComponent, { className: "EmailComposerComponent", filePath: "lib\\components\\email-composer\\email-composer.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtY29tcG9zZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZW1haWwtY29tcG9zZXIvZW1haWwtY29tcG9zZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZW1haWwtY29tcG9zZXIvZW1haWwtY29tcG9zZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXpGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0YxRCxBQURKLGlDQUFtRixRQUM1RTtJQUNDLFlBQ0o7SUFDSixBQURJLGlCQUFJLEVBQ0E7OztJQUpvQixBQUFyQix5Q0FBb0Isd0NBQWlDO0lBRXBELGVBQ0o7SUFESSxvREFDSjs7O0lBdUJnQixZQUNKOzs7SUFESSxnREFDSjs7O0lBVVIsK0JBQytGO0lBQzNGLHNDQUNKO0lBQUEsaUJBQU07Ozs7SUFJTixBQURKLDhCQUFvRCxlQUN0QjtJQUFBLHVCQUFPO0lBQUEsaUJBQVE7SUFDekMscUNBUUM7SUFSTyw4U0FBeUI7SUFTakMsaUJBQVM7SUFDVCwrQkFBNEM7SUFDeEMsMkNBQ0o7SUFDSixBQURJLGlCQUFNLEVBQ0o7OztJQWJNLGVBQXlCO0lBQXpCLGtEQUF5QjtJQUt6Qix5R0FBc0g7OztJQW9CMUgsK0JBQzZGO0lBQ3pGLDJDQUNKO0lBQUEsaUJBQU07Ozs7SUFa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WUFRM0UsQUFESixBQURKLDJCQUFLLGFBQ2lCLGVBQ1k7WUFBQSwwQkFBVTtZQUFBLGlCQUFRO1lBQzVDLHVDQWNxQztZQWQxQix1UEFBb0I7WUFHcEIsQUFEQSx3SkFBWSwyQkFBdUIsS0FBQyxtSkFDcEIsdUJBQW1CLEtBQUM7WUFZM0MsNkNBQXlFOztZQUNyRSxvRkFBK0M7WUFLM0QsQUFESSxBQURJLGlCQUFxQixFQUNiLEVBQ1Y7WUFHRixBQURKLCtCQUFrQixpQkFDb0M7WUFBQSx3QkFBTztZQUFBLGlCQUFRO1lBQ2pFLHFDQUV1RTtZQUFoRSxnUUFBMEI7WUFGakMsaUJBRXVFO1lBQ3ZFLDBFQUMrRjtZQUduRyxpQkFBTTtZQWtCTixBQWhCQSwwRUFBb0QsNkdBZ0I3QjtZQWtCdkIsZ0NBQTZDO1lBTXpDLEFBTEEsZ0ZBQ2lELDZHQUl0QjtZQU1uQyxBQURJLGlCQUFNLEVBQ0o7Ozs7O1lBekZ3RCx3Q0FBbUI7WUFTOUQsZUFBb0I7WUFBcEIsMENBQW9CO1lBY3BCLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsaUNBQW1CLHdCQUNJLGtCQUNOLGtCQUNBLG9DQUNjLDhCQUNOLGtDQUNRLGtEQUNFLHdCQUNaLHVCQUNELDBCQUNHO1lBQ1osZUFBb0Q7WUFBcEQscUZBQW9EO1lBWXJFLGVBQTBCO1lBQTFCLGdEQUEwQjtZQUVHLGVBQXlEO1lBQXpELGdGQUF5RDtZQUs5RSxjQUFrQjtZQUFBLEFBQWxCLHFDQUFrQiwwQkFBYTtZQW9DckMsZUFBcUI7WUFBQSxBQUFyQix3Q0FBcUIsOEJBQWlCOzs7aUZEckUxQyxzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDSSxxQkFBcUI7b0JBU3RCLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBR04sT0FBTztrQkFETixNQUFNOztrRkFSRSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbWFpbEZvcm1BYnN0cmFjdENvbXBvbmVudCwgQWxlcnRUeXBlRW51bSB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtZW1haWwtY29tcG9zZXInO1xuXG5pbXBvcnQgeyBmYVNwaW5uZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtZW1haWwtY29tcG9zZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZW1haWwtY29tcG9zZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVtYWlsQ29tcG9zZXJDb21wb25lbnQgZXh0ZW5kcyBFbWFpbEZvcm1BYnN0cmFjdENvbXBvbmVudFxuICAgIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcblxuICAgIGZhU3Bpbm5lciA9IGZhU3Bpbm5lcjtcblxuICAgIEBJbnB1dCgpIGluaXRFbWFpbHM6IHN0cmluZ1tdID0gW107XG4gICAgQElucHV0KCkgaXNIdG1sQm9keSA9IGZhbHNlO1xuXG4gICAgQE91dHB1dCgpXG4gICAgb25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCBic0FsZXJ0VHlwZSgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmFsZXJ0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBbGVydFR5cGVFbnVtLmluZm86XG4gICAgICAgICAgICAgICAgcmV0dXJuICdpbmZvJztcbiAgICAgICAgICAgIGNhc2UgQWxlcnRUeXBlRW51bS5lcnJvcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Rhbmdlcic7XG4gICAgICAgICAgICBjYXNlIEFsZXJ0VHlwZUVudW0uc3VjY2VzczpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3N1Y2Nlc3MnO1xuICAgICAgICAgICAgY2FzZSBBbGVydFR5cGVFbnVtLndhcm5pbmc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICd3YXJuaW5nJztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdpbmZvJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5pbml0RW1haWxzICYmIEFycmF5LmlzQXJyYXkodGhpcy5pbml0RW1haWxzKSkge1xuICAgICAgICAgICAgdGhpcy5lbWFpbHMgPSBbLi4udGhpcy5pbml0RW1haWxzXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtYWlsSW5wdXRCb3guZm9jdXModHJ1ZSk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGVcbiAgICBzdWJtaXQoKSB7XG5cbiAgICAgICAgLy8gU2FuaXR5IGNoZWNrXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlVGl0bGUgfHxcbiAgICAgICAgICAgICF0aGlzLm1lc3NhZ2VCb2R5IHx8XG4gICAgICAgICAgICAhdGhpcy5lbWFpbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9IEFsZXJ0VHlwZUVudW0uZXJyb3I7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0TWVzc2FnZSA9ICdQbGVhc2UgcHJvdmlkZSByZXF1aXJlZCB2YWx1ZXMgYW5kIHRyeSBhZ2FpbiEnO1xuICAgICAgICAgICAgdGhpcy5hbGVydFN1Yk1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnREaXNtaXNzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0VHlwZSA9IEFsZXJ0VHlwZUVudW0ubm9uZTtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0U3ViTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hbGVydERpc21pc3NpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnN1Ym1pdCgpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuICAgIH1cblxufVxuIiwiPGFsZXJ0IFt0eXBlXT1cImJzQWxlcnRUeXBlXCIgW2Rpc21pc3NpYmxlXT1cImFsZXJ0RGlzbWlzc2libGVcIiAqbmdJZj1cImFsZXJ0VHlwZSA+IDBcIj5cbiAgICA8cD5cbiAgICAgICAge3thbGVydE1lc3NhZ2V9fVxuICAgIDwvcD5cbjwvYWxlcnQ+XG5cbjxkaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1iLTRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlJlY2lwaWVudHM8L2xhYmVsPlxuICAgICAgICA8dGFnLWlucHV0IFsobmdNb2RlbCldPVwiZW1haWxzXCIgI2VtYWlsSW5wdXRCb3hcbiAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxJbnB1dHNcIlxuICAgICAgICAgICAgICAgICAgIChmb2N1c291dCk9XCJvbk91dE9mVGFnSW5wdXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgKG9uVGV4dENoYW5nZSk9XCJ0ZXh0Q2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICBbYWRkT25QYXN0ZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBbbW9kZWxBc1N0cmluZ3NdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgW3RyaW1UYWdzXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIFtlZGl0YWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBbZXJyb3JNZXNzYWdlc109XCJlcnJvck1lc3NhZ2VzXCJcbiAgICAgICAgICAgICAgICAgICBbdmFsaWRhdG9yc109XCJ2YWxpZGF0b3JzXCJcbiAgICAgICAgICAgICAgICAgICBbc2Vjb25kYXJ5UGxhY2Vob2xkZXJdPVwiJ0VtYWlscydcIlxuICAgICAgICAgICAgICAgICAgIFtzZXBhcmF0b3JLZXlDb2Rlc109XCJbMzIsNDQsNTgsNTldXCJcbiAgICAgICAgICAgICAgICAgICBbZGlzcGxheUJ5XT1cIidkaXNwbGF5J1wiXG4gICAgICAgICAgICAgICAgICAgW2lkZW50aWZ5QnldPVwiJ3ZhbHVlJ1wiICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJysgRW1haWwnXCI+XG4gICAgICAgICAgICA8dGFnLWlucHV0LWRyb3Bkb3duIFthdXRvY29tcGxldGVJdGVtc109XCJhdXRvY29tcGxldGVJdGVtc0FzeW5jIHwgYXN5bmNcIj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW09XCJpdGVtXCIgbGV0LWluZGV4PVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgaXRlbS5kaXNwbGF5IH19XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdGFnLWlucHV0LWRyb3Bkb3duPlxuICAgICAgICA8L3RhZy1pbnB1dD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtYi00XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJtZXNzYWdlVGl0bGVJbnB1dFwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPlN1YmplY3Q8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmFtZT1cIm1lc3NhZ2VUaXRsZUlucHV0XCIgaWQ9XCJtZXNzYWdlVGl0bGVJbnB1dFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJtZXNzYWdlVGl0bGVIZWxwXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibWVzc2FnZVRpdGxlXCIgI21lc3NhZ2VUaXRsZUN0cmw9XCJuZ01vZGVsXCIgcmVxdWlyZWQ+XG4gICAgICAgIDxkaXYgaWQ9XCJtZXNzYWdlVGl0bGVIZWxwXCJcbiAgICAgICAgICAgICBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LWRhbmdlclwiICpuZ0lmPVwiIW1lc3NhZ2VUaXRsZUN0cmwudmFsaWQgJiYgbWVzc2FnZVRpdGxlQ3RybC50b3VjaGVkXCI+XG4gICAgICAgICAgICBTdWJqZWN0IGlzIHJlcXVpcmVkLlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtYi00XCIgKm5nSWY9XCJpc0h0bWxCb2R5OyBlbHNlIHRleHRCb2R5XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIj5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgPGVkaXRvciBbKG5nTW9kZWwpXT1cIm1lc3NhZ2VCb2R5XCJcbiAgICAgICAgICAgICAgICAjZW1haWxCb2R5XG4gICAgICAgICAgICAgICAgI21lc3NhZ2VCb2R5Q3RybD1cIm5nTW9kZWxcIiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlQm9keUlucHV0XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBwLTAgYm9yZGVyLTBcIiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBbaW5pdF09XCJ7aHRtbEFsbG93ZWRUYWdzOiBbJy4qJ10sIGh0bWxBbGxvd2VkQXR0cnM6IFsnLionXSwgZXh0ZW5kZWRfdmFsaWRfZWxlbWVudHM6ICcqWy4qXScsIGRyYWdnYWJsZV9tb2RhbDogdHJ1ZSB9XCJcbiAgICAgICAgICAgICAgICBwbHVnaW5zID1cImFkdmxpc3QgYXV0b2xpbmsgbGluayBpbWFnZSBsaXN0cyBjaGFybWFwIHByZXZpZXcgYW5jaG9yIHBhZ2VicmVhayBzZWFyY2hyZXBsYWNlIHdvcmRjb3VudCB2aXN1YWxibG9ja3MgdmlzdWFsY2hhcnMgY29kZSBmdWxsc2NyZWVuIGluc2VydGRhdGV0aW1lIG1lZGlhIG5vbmJyZWFraW5nIHRhYmxlIGVtb3RpY29ucyB0ZW1wbGF0ZSBoZWxwIGF1dG9yZXNpemVcIlxuICAgICAgICAgICAgICAgIHRvb2xiYXIgPVwidW5kbyByZWRvIHwgc3R5bGVzZWxlY3QgfCBib2xkIGl0YWxpYyB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCBvdXRkZW50IGluZGVudCB8IGxpbmsgaW1hZ2UgfCBwcmV2aWV3IG1lZGlhIGZ1bGxwYWdlIHwgZm9yZWNvbG9yIGJhY2tjb2xvciBlbW90aWNvbnMgfCBoZWxwXCJcbiAgICAgICAgPlxuICAgICAgICA8L2VkaXRvcj5cbiAgICAgICAgPGRpdiBpZD1cIm1lc3NhZ2VCb2R5SGVscFwiIGNsYXNzPVwiZm9ybS10ZXh0XCI+XG4gICAgICAgICAgICBCb2R5IG1lc3NhZ2UgaXMgcmVxdWlyZWQuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxuZy10ZW1wbGF0ZSAjdGV4dEJvZHk+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYi00XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVzc2FnZUJvZHlJbnB1dFwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPk1lc3NhZ2U8L2xhYmVsPiAgICAgICAgXG4gICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VCb2R5SW5wdXRcIiBpZD1cIm1lc3NhZ2VCb2R5SW5wdXRcIiBhcmlhLWRlc2NyaWJlZGJ5PVwibWVzc2FnZUJvZHlIZWxwXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgI2VtYWlsQm9keVxuICAgICAgICAgICAgICAgICAgICAgIGNka1RleHRhcmVhQXV0b3NpemVcbiAgICAgICAgICAgICAgICAgICAgICBbY2RrQXV0b3NpemVNaW5Sb3dzXT1cIjVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjZGtBdXRvc2l6ZU1heFJvd3NdPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibWVzc2FnZUJvZHlcIiAjbWVzc2FnZUJvZHlDdHJsPVwibmdNb2RlbFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtZXNzYWdlQm9keUhlbHBcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LWRhbmdlclwiICpuZ0lmPVwiIW1lc3NhZ2VCb2R5Q3RybC52YWxpZCAmJiBtZXNzYWdlQm9keUN0cmwudG91Y2hlZFwiPlxuICAgICAgICAgICAgICAgIEJvZHkgbWVzc2FnZSBpcyByZXF1aXJlZC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG1iLTRcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwic3VibWl0KClcIiBbZGlzYWJsZWRdPVwiYWxlcnRUeXBlID09IDNcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiIXNob3dDbG9zZUJ0bjsgZWxzZSBjbG9zZUJ0blRtcGxcIj5cbiAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPGZhLWljb24gY2xhc3M9XCJtcy0yXCIgW2ljb25dPVwiZmFTcGlubmVyXCIgZmFTcGlubmVyICpuZ0lmPVwiYWxlcnRUeXBlID09IDNcIj48L2ZhLWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2Nsb3NlQnRuVG1wbD5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19