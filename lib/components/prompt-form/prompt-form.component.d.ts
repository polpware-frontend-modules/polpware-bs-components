import { OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { IInputFieldSpec } from '../../utils/form-helper';
import * as i0 from "@angular/core";
interface IInputFieldSpecExt extends IInputFieldSpec {
    fieldId: string;
    autocompleteKey?: string;
    visible: boolean;
}
export declare class PromptFormComponent extends DefaultFormBaseComponent implements OnInit, OnDestroy, AfterViewInit {
    private readonly _builder;
    autocomplete: string;
    enableEnter: boolean;
    cancelBtnClasses: string;
    submitBtnClasses: string;
    fields: Array<IInputFieldSpec>;
    emitInitValue: boolean;
    extFields: IInputFieldSpecExt[];
    form: FormGroup;
    faEyeSlash: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faEye: import("@fortawesome/fontawesome-common-types").IconDefinition;
    private _subr;
    readonly name: string;
    constructor(_builder: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    cancel(): void;
    submit(): void;
    keyEvent(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PromptFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PromptFormComponent, "polp-bs-prompt-form", never, { "hideCancelBtn": "hideCancelBtn"; "hideSubmitBtn": "hideSubmitBtn"; "submitBtnTxt": "submitBtnTxt"; "cancelBtnTxt": "cancelBtnTxt"; "autocomplete": "autocomplete"; "enableEnter": "enableEnter"; "cancelBtnClasses": "cancelBtnClasses"; "submitBtnClasses": "submitBtnClasses"; "fields": "fields"; "emitInitValue": "emitInitValue"; }, {}, never, never>;
}
export {};
