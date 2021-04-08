import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DefaultFormBaseComponent } from '@polpware/ngx-form-common';
import { IInputFieldSpec } from '../../utils/form-helper';
import * as i0 from "@angular/core";
interface IInputFieldSpecExt extends IInputFieldSpec {
    fieldId: string;
    autocompleteKey?: string;
    visible: boolean;
}
export declare class PromptFormComponent extends DefaultFormBaseComponent implements OnInit, OnDestroy {
    private readonly _builder;
    autocomplete: string;
    enableEnter: boolean;
    cancelBtnClasses: string;
    submitBtnClasses: string;
    fields: Array<IInputFieldSpec>;
    extFields: IInputFieldSpecExt[];
    form: FormGroup;
    faEyeSlash: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faEye: import("@fortawesome/fontawesome-common-types").IconDefinition;
    private _subr;
    constructor(_builder: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    cancel(): void;
    submit(): void;
    keyEvent(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<PromptFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PromptFormComponent, "polp-bs-prompt-form", never, { "autocomplete": "autocomplete"; "enableEnter": "enableEnter"; "cancelBtnClasses": "cancelBtnClasses"; "submitBtnClasses": "submitBtnClasses"; "fields": "fields"; }, {}, never, never>;
}
export {};
