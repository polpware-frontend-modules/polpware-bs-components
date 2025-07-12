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
    i0.ɵɵproperty("icon", ctx_r1.faSpinner)("spin", true);
} }
function EmailComposerComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function EmailComposerComponent_button_20_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵtext(1, " Submit ");
    i0.ɵɵtemplate(2, EmailComposerComponent_button_20_fa_icon_2_Template, 1, 2, "fa-icon", 25);
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
    static { this.ɵfac = function EmailComposerComponent_Factory(t) { return new (t || EmailComposerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EmailComposerComponent, selectors: [["polp-email-composer"]], inputs: { initEmails: "initEmails", isHtmlBody: "isHtmlBody" }, outputs: { onClose: "onClose" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 23, vars: 23, consts: [["emailInputBox", ""], ["messageTitleCtrl", "ngModel"], ["textBody", ""], ["closeBtnTmpl", ""], ["emailBody", "", "messageBodyCtrl", "ngModel"], [3, "type", "dismissible", 4, "ngIf"], [1, "mb-4"], [1, "form-label"], ["name", "emailInputs", 3, "ngModelChange", "focusout", "onTextChange", "ngModel", "addOnPaste", "modelAsStrings", "trimTags", "editable", "errorMessages", "validators", "secondaryPlaceholder", "separatorKeyCodes", "displayBy", "identifyBy", "placeholder"], [3, "autocompleteItems"], ["for", "messageTitleInput", 1, "form-label"], ["name", "messageTitleInput", "id", "messageTitleInput", "aria-describedby", "messageTitleHelp", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["id", "messageTitleHelp", "class", "form-text text-danger", 4, "ngIf"], ["class", "mb-4", 4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-end", "mb-4"], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf", "ngIfElse"], [3, "type", "dismissible"], ["id", "messageTitleHelp", 1, "form-text", "text-danger"], ["name", "messageBodyInput", "plugins", "advlist autolink link image lists charmap preview anchor pagebreak searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking table emoticons template help autoresize", "toolbar", "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media fullpage | forecolor backcolor emoticons | help", 1, "form-control", "p-0", "border-0", 3, "ngModelChange", "ngModel", "init"], ["id", "messageBodyHelp", 1, "form-text"], ["for", "messageBodyInput", 1, "form-label"], ["name", "messageBodyInput", "id", "messageBodyInput", "aria-describedby", "messageBodyHelp", "cdkTextareaAutosize", "", "required", "", 1, "form-control", 3, "ngModelChange", "cdkAutosizeMinRows", "cdkAutosizeMaxRows", "ngModel"], ["id", "messageBodyHelp", "class", "form-text text-danger", 4, "ngIf"], ["id", "messageBodyHelp", 1, "form-text", "text-danger"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "ms-2", 3, "icon", "spin", 4, "ngIf"], [1, "ms-2", 3, "icon", "spin"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]], template: function EmailComposerComponent_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'polp-email-composer', template: "<alert [type]=\"bsAlertType\" [dismissible]=\"alertDismissible\" *ngIf=\"alertType > 0\">\n    <p>\n        {{alertMessage}}\n    </p>\n</alert>\n\n<div>\n    <div class=\"mb-4\">\n        <label class=\"form-label\">Recipients</label>\n        <tag-input [(ngModel)]=\"emails\" #emailInputBox\n                   name=\"emailInputs\"\n                   (focusout)=\"onOutOfTagInput($event)\"\n                   (onTextChange)=\"textChanged($event)\"\n                   [addOnPaste]=\"true\"\n                   [modelAsStrings]=\"true\"\n                   [trimTags]=\"true\"\n                   [editable]=\"true\"\n                   [errorMessages]=\"errorMessages\"\n                   [validators]=\"validators\"\n                   [secondaryPlaceholder]=\"'Emails'\"\n                   [separatorKeyCodes]=\"[32,44,58,59]\"\n                   [displayBy]=\"'display'\"\n                   [identifyBy]=\"'value'\"                       \n                   [placeholder]=\"'+ Email'\">\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItemsAsync | async\">\n                <ng-template let-item=\"item\" let-index=\"index\">\n                    {{ item.display }}\n                </ng-template>\n            </tag-input-dropdown>\n        </tag-input>\n    </div>\n\n    <div class=\"mb-4\">\n        <label for=\"messageTitleInput\" class=\"form-label\">Subject</label>\n        <input name=\"messageTitleInput\" id=\"messageTitleInput\" aria-describedby=\"messageTitleHelp\"\n               class=\"form-control\"\n               [(ngModel)]=\"messageTitle\" #messageTitleCtrl=\"ngModel\" required>\n        <div id=\"messageTitleHelp\"\n             class=\"form-text text-danger\" *ngIf=\"!messageTitleCtrl.valid && messageTitleCtrl.touched\">\n            Subject is required.\n        </div>\n    </div>\n\n    <div class=\"mb-4\" *ngIf=\"isHtmlBody; else textBody\">\n        <label class=\"form-label\">Message</label>\n        <editor [(ngModel)]=\"messageBody\"\n                #emailBody\n                #messageBodyCtrl=\"ngModel\"               \n                name=\"messageBodyInput\"\n                class=\"form-control p-0 border-0\"                \n                [init]=\"{htmlAllowedTags: ['.*'], htmlAllowedAttrs: ['.*'], extended_valid_elements: '*[.*]', draggable_modal: true }\"\n                plugins =\"advlist autolink link image lists charmap preview anchor pagebreak searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking table emoticons template help autoresize\"\n                toolbar =\"undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media fullpage | forecolor backcolor emoticons | help\"\n        >\n        </editor>\n        <div id=\"messageBodyHelp\" class=\"form-text\">\n            Body message is required.\n        </div>\n    </div>\n    <ng-template #textBody>\n        <div class=\"mb-4\">\n            <label for=\"messageBodyInput\" class=\"form-label\">Message</label>        \n            <textarea name=\"messageBodyInput\" id=\"messageBodyInput\" aria-describedby=\"messageBodyHelp\"\n                      class=\"form-control\"\n                      #emailBody\n                      cdkTextareaAutosize\n                      [cdkAutosizeMinRows]=\"5\"\n                      [cdkAutosizeMaxRows]=\"10\"\n                      [(ngModel)]=\"messageBody\" #messageBodyCtrl=\"ngModel\" required>\n            </textarea>\n            <div id=\"messageBodyHelp\"\n                 class=\"form-text text-danger\" *ngIf=\"!messageBodyCtrl.valid && messageBodyCtrl.touched\">\n                Body message is required.\n            </div>\n        </div>\n    </ng-template>\n\n    <div class=\"d-flex justify-content-end mb-4\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\" [disabled]=\"alertType == 3\"\n                *ngIf=\"!showCloseBtn; else closeBtnTmpl\">\n            Submit\n            <fa-icon class=\"ms-2\" [icon]=\"faSpinner\" [spin]=\"true\" *ngIf=\"alertType == 3\"></fa-icon>\n        </button>\n        <ng-template #closeBtnTmpl>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">\n                Close\n            </button>\n        </ng-template>\n    </div>\n</div>\n" }]
    }], () => [], { initEmails: [{
            type: Input
        }], isHtmlBody: [{
            type: Input
        }], onClose: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EmailComposerComponent, { className: "EmailComposerComponent", filePath: "lib\\components\\email-composer\\email-composer.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtY29tcG9zZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZW1haWwtY29tcG9zZXIvZW1haWwtY29tcG9zZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcG9scHdhcmUvYnMtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZW1haWwtY29tcG9zZXIvZW1haWwtY29tcG9zZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXpGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0YxRCxBQURKLGlDQUFtRixRQUM1RTtJQUNDLFlBQ0o7SUFDSixBQURJLGlCQUFJLEVBQ0E7OztJQUpvQixBQUFyQix5Q0FBb0Isd0NBQWlDO0lBRXBELGVBQ0o7SUFESSxvREFDSjs7O0lBdUJnQixZQUNKOzs7SUFESSxnREFDSjs7O0lBVVIsK0JBQytGO0lBQzNGLHNDQUNKO0lBQUEsaUJBQU07Ozs7SUFJTixBQURKLDhCQUFvRCxlQUN0QjtJQUFBLHVCQUFPO0lBQUEsaUJBQVE7SUFDekMscUNBUUM7SUFSTyw4U0FBeUI7SUFTakMsaUJBQVM7SUFDVCwrQkFBNEM7SUFDeEMsMkNBQ0o7SUFDSixBQURJLGlCQUFNLEVBQ0o7OztJQWJNLGVBQXlCO0lBQXpCLGtEQUF5QjtJQUt6Qix5R0FBc0g7OztJQW9CMUgsK0JBQzZGO0lBQ3pGLDJDQUNKO0lBQUEsaUJBQU07Ozs7SUFa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dEVtaXR0ZXIsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVtYWlsRm9ybUFic3RyYWN0Q29tcG9uZW50LCBBbGVydFR5cGVFbnVtIH0gZnJvbSAnQHBvbHB3YXJlL25neC1lbWFpbC1jb21wb3Nlcic7XG5cbmltcG9ydCB7IGZhU3Bpbm5lciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1lbWFpbC1jb21wb3NlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2VtYWlsLWNvbXBvc2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRW1haWxDb21wb3NlckNvbXBvbmVudCBleHRlbmRzIEVtYWlsRm9ybUFic3RyYWN0Q29tcG9uZW50XG4gICAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuXG4gICAgZmFTcGlubmVyID0gZmFTcGlubmVyO1xuXG4gICAgQElucHV0KCkgaW5pdEVtYWlsczogc3RyaW5nW10gPSBbXTtcbiAgICBASW5wdXQoKSBpc0h0bWxCb2R5ID0gZmFsc2U7XG5cbiAgICBAT3V0cHV0KClcbiAgICBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGJzQWxlcnRUeXBlKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuYWxlcnRUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFsZXJ0VHlwZUVudW0uaW5mbzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2luZm8nO1xuICAgICAgICAgICAgY2FzZSBBbGVydFR5cGVFbnVtLmVycm9yOlxuICAgICAgICAgICAgICAgIHJldHVybiAnZGFuZ2VyJztcbiAgICAgICAgICAgIGNhc2UgQWxlcnRUeXBlRW51bS5zdWNjZXNzOlxuICAgICAgICAgICAgICAgIHJldHVybiAnc3VjY2Vzcyc7XG4gICAgICAgICAgICBjYXNlIEFsZXJ0VHlwZUVudW0ud2FybmluZzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3dhcm5pbmcnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2luZm8nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmluaXRFbWFpbHMgJiYgQXJyYXkuaXNBcnJheSh0aGlzLmluaXRFbWFpbHMpKSB7XG4gICAgICAgICAgICB0aGlzLmVtYWlscyA9IFsuLi50aGlzLmluaXRFbWFpbHNdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1haWxJbnB1dEJveC5mb2N1cyh0cnVlKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZVxuICAgIHN1Ym1pdCgpIHtcblxuICAgICAgICAvLyBTYW5pdHkgY2hlY2tcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2VUaXRsZSB8fFxuICAgICAgICAgICAgIXRoaXMubWVzc2FnZUJvZHkgfHxcbiAgICAgICAgICAgICF0aGlzLmVtYWlscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID0gQWxlcnRUeXBlRW51bS5lcnJvcjtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRNZXNzYWdlID0gJ1BsZWFzZSBwcm92aWRlIHJlcXVpcmVkIHZhbHVlcyBhbmQgdHJ5IGFnYWluISc7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0U3ViTWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5hbGVydERpc21pc3NpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRUeXBlID0gQWxlcnRUeXBlRW51bS5ub25lO1xuICAgICAgICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgIHRoaXMuYWxlcnRTdWJNZXNzYWdlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0RGlzbWlzc2libGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuc3VibWl0KCk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG4gICAgfVxuXG59XG4iLCI8YWxlcnQgW3R5cGVdPVwiYnNBbGVydFR5cGVcIiBbZGlzbWlzc2libGVdPVwiYWxlcnREaXNtaXNzaWJsZVwiICpuZ0lmPVwiYWxlcnRUeXBlID4gMFwiPlxuICAgIDxwPlxuICAgICAgICB7e2FsZXJ0TWVzc2FnZX19XG4gICAgPC9wPlxuPC9hbGVydD5cblxuPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWItNFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCI+UmVjaXBpZW50czwvbGFiZWw+XG4gICAgICAgIDx0YWctaW5wdXQgWyhuZ01vZGVsKV09XCJlbWFpbHNcIiAjZW1haWxJbnB1dEJveFxuICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbElucHV0c1wiXG4gICAgICAgICAgICAgICAgICAgKGZvY3Vzb3V0KT1cIm9uT3V0T2ZUYWdJbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAob25UZXh0Q2hhbmdlKT1cInRleHRDaGFuZ2VkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgIFthZGRPblBhc3RlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIFttb2RlbEFzU3RyaW5nc109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBbdHJpbVRhZ3NdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgW2VkaXRhYmxlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgIFtlcnJvck1lc3NhZ2VzXT1cImVycm9yTWVzc2FnZXNcIlxuICAgICAgICAgICAgICAgICAgIFt2YWxpZGF0b3JzXT1cInZhbGlkYXRvcnNcIlxuICAgICAgICAgICAgICAgICAgIFtzZWNvbmRhcnlQbGFjZWhvbGRlcl09XCInRW1haWxzJ1wiXG4gICAgICAgICAgICAgICAgICAgW3NlcGFyYXRvcktleUNvZGVzXT1cIlszMiw0NCw1OCw1OV1cIlxuICAgICAgICAgICAgICAgICAgIFtkaXNwbGF5QnldPVwiJ2Rpc3BsYXknXCJcbiAgICAgICAgICAgICAgICAgICBbaWRlbnRpZnlCeV09XCIndmFsdWUnXCIgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCInKyBFbWFpbCdcIj5cbiAgICAgICAgICAgIDx0YWctaW5wdXQtZHJvcGRvd24gW2F1dG9jb21wbGV0ZUl0ZW1zXT1cImF1dG9jb21wbGV0ZUl0ZW1zQXN5bmMgfCBhc3luY1wiPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIiBsZXQtaW5kZXg9XCJpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLmRpc3BsYXkgfX1cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC90YWctaW5wdXQtZHJvcGRvd24+XG4gICAgICAgIDwvdGFnLWlucHV0PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm1iLTRcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIm1lc3NhZ2VUaXRsZUlucHV0XCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+U3ViamVjdDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwibWVzc2FnZVRpdGxlSW5wdXRcIiBpZD1cIm1lc3NhZ2VUaXRsZUlucHV0XCIgYXJpYS1kZXNjcmliZWRieT1cIm1lc3NhZ2VUaXRsZUhlbHBcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtZXNzYWdlVGl0bGVcIiAjbWVzc2FnZVRpdGxlQ3RybD1cIm5nTW9kZWxcIiByZXF1aXJlZD5cbiAgICAgICAgPGRpdiBpZD1cIm1lc3NhZ2VUaXRsZUhlbHBcIlxuICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXCIgKm5nSWY9XCIhbWVzc2FnZVRpdGxlQ3RybC52YWxpZCAmJiBtZXNzYWdlVGl0bGVDdHJsLnRvdWNoZWRcIj5cbiAgICAgICAgICAgIFN1YmplY3QgaXMgcmVxdWlyZWQuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm1iLTRcIiAqbmdJZj1cImlzSHRtbEJvZHk7IGVsc2UgdGV4dEJvZHlcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICA8ZWRpdG9yIFsobmdNb2RlbCldPVwibWVzc2FnZUJvZHlcIlxuICAgICAgICAgICAgICAgICNlbWFpbEJvZHlcbiAgICAgICAgICAgICAgICAjbWVzc2FnZUJvZHlDdHJsPVwibmdNb2RlbFwiICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VCb2R5SW5wdXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHAtMCBib3JkZXItMFwiICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFtpbml0XT1cIntodG1sQWxsb3dlZFRhZ3M6IFsnLionXSwgaHRtbEFsbG93ZWRBdHRyczogWycuKiddLCBleHRlbmRlZF92YWxpZF9lbGVtZW50czogJypbLipdJywgZHJhZ2dhYmxlX21vZGFsOiB0cnVlIH1cIlxuICAgICAgICAgICAgICAgIHBsdWdpbnMgPVwiYWR2bGlzdCBhdXRvbGluayBsaW5rIGltYWdlIGxpc3RzIGNoYXJtYXAgcHJldmlldyBhbmNob3IgcGFnZWJyZWFrIHNlYXJjaHJlcGxhY2Ugd29yZGNvdW50IHZpc3VhbGJsb2NrcyB2aXN1YWxjaGFycyBjb2RlIGZ1bGxzY3JlZW4gaW5zZXJ0ZGF0ZXRpbWUgbWVkaWEgbm9uYnJlYWtpbmcgdGFibGUgZW1vdGljb25zIHRlbXBsYXRlIGhlbHAgYXV0b3Jlc2l6ZVwiXG4gICAgICAgICAgICAgICAgdG9vbGJhciA9XCJ1bmRvIHJlZG8gfCBzdHlsZXNlbGVjdCB8IGJvbGQgaXRhbGljIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgYnVsbGlzdCBudW1saXN0IG91dGRlbnQgaW5kZW50IHwgbGluayBpbWFnZSB8IHByZXZpZXcgbWVkaWEgZnVsbHBhZ2UgfCBmb3JlY29sb3IgYmFja2NvbG9yIGVtb3RpY29ucyB8IGhlbHBcIlxuICAgICAgICA+XG4gICAgICAgIDwvZWRpdG9yPlxuICAgICAgICA8ZGl2IGlkPVwibWVzc2FnZUJvZHlIZWxwXCIgY2xhc3M9XCJmb3JtLXRleHRcIj5cbiAgICAgICAgICAgIEJvZHkgbWVzc2FnZSBpcyByZXF1aXJlZC5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICN0ZXh0Qm9keT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZXNzYWdlQm9keUlucHV0XCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+TWVzc2FnZTwvbGFiZWw+ICAgICAgICBcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZUJvZHlJbnB1dFwiIGlkPVwibWVzc2FnZUJvZHlJbnB1dFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJtZXNzYWdlQm9keUhlbHBcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAjZW1haWxCb2R5XG4gICAgICAgICAgICAgICAgICAgICAgY2RrVGV4dGFyZWFBdXRvc2l6ZVxuICAgICAgICAgICAgICAgICAgICAgIFtjZGtBdXRvc2l6ZU1pblJvd3NdPVwiNVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Nka0F1dG9zaXplTWF4Um93c109XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJtZXNzYWdlQm9keVwiICNtZXNzYWdlQm9keUN0cmw9XCJuZ01vZGVsXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm1lc3NhZ2VCb2R5SGVscFwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXCIgKm5nSWY9XCIhbWVzc2FnZUJvZHlDdHJsLnZhbGlkICYmIG1lc3NhZ2VCb2R5Q3RybC50b3VjaGVkXCI+XG4gICAgICAgICAgICAgICAgQm9keSBtZXNzYWdlIGlzIHJlcXVpcmVkLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbWItNFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJzdWJtaXQoKVwiIFtkaXNhYmxlZF09XCJhbGVydFR5cGUgPT0gM1wiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhc2hvd0Nsb3NlQnRuOyBlbHNlIGNsb3NlQnRuVG1wbFwiPlxuICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICA8ZmEtaWNvbiBjbGFzcz1cIm1zLTJcIiBbaWNvbl09XCJmYVNwaW5uZXJcIiBbc3Bpbl09XCJ0cnVlXCIgKm5nSWY9XCJhbGVydFR5cGUgPT0gM1wiPjwvZmEtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjY2xvc2VCdG5UbXBsPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=