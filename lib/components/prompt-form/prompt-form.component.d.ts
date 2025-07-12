import { AfterViewInit, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { IInputFieldSpec } from '../../utils/form-helper';
import * as i0 from "@angular/core";
export declare const tinymceDefaultInitOptions: {
    htmlAllowedTags: string[];
    htmlAllowedAttrs: string[];
    extended_valid_elements: string;
    draggable_modal: boolean;
    browser_spellcheck: boolean;
    menubar: string;
    contextmenu: string;
    setup: (editor: any) => void;
};
export declare const tinymceDefaultPlugins = "advlist autolink lists link image media table code fullscreen help nonbreaking  pagebreak  preview  searchreplace visualblocks visualchars anchor  autoresize charmap emoticons wordcount insertdatetime tiny_mce_wiris";
export declare const tinymceDefaultToolbar = "preview | undo redo | blocks fontsizeinput | bold italic | align numlist bullist | link image | table media | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry | outdent indent | strikethrough forecolor backcolor removeformat | charmap emoticons | code fullscreen | pagebreak anchor";
interface IInputFieldSpecExt extends IInputFieldSpec {
    fieldId: string;
    visible: boolean;
}
export declare class PromptFormComponent extends DefaultFormBaseComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
    private readonly _builder;
    autocomplete: string;
    enableEnter: boolean;
    cancelBtnClasses: string;
    submitBtnClasses: string;
    fields: Array<IInputFieldSpec>;
    emitInitValue: boolean;
    extFields: IInputFieldSpecExt[];
    form: UntypedFormGroup;
    faEyeSlash: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faEye: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faQuestionCircle: import("@fortawesome/fontawesome-common-types").IconDefinition;
    editorOptions: {
        htmlAllowedTags: string[];
        htmlAllowedAttrs: string[];
        extended_valid_elements: string;
        draggable_modal: boolean;
        browser_spellcheck: boolean;
        menubar: string;
        contextmenu: string;
        setup: (editor: any) => void;
    };
    editorToolbar: string;
    editorPlugins: string;
    private _subr;
    readonly name: string;
    constructor(_builder: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    cancel(): void;
    submit(): void;
    keyEvent(event: KeyboardEvent): void;
    private buildForm;
    static ɵfac: i0.ɵɵFactoryDeclaration<PromptFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PromptFormComponent, "polp-bs-prompt-form", never, { "hideCancelBtn": { "alias": "hideCancelBtn"; "required": false; }; "hideSubmitBtn": { "alias": "hideSubmitBtn"; "required": false; }; "submitBtnTxt": { "alias": "submitBtnTxt"; "required": false; }; "cancelBtnTxt": { "alias": "cancelBtnTxt"; "required": false; }; "autocomplete": { "alias": "autocomplete"; "required": false; }; "enableEnter": { "alias": "enableEnter"; "required": false; }; "cancelBtnClasses": { "alias": "cancelBtnClasses"; "required": false; }; "submitBtnClasses": { "alias": "submitBtnClasses"; "required": false; }; "fields": { "alias": "fields"; "required": false; }; "emitInitValue": { "alias": "emitInitValue"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
//# sourceMappingURL=prompt-form.component.d.ts.map