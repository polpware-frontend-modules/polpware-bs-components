import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IInputFieldSpec } from '../../utils/form-helper';
import * as i0 from "@angular/core";
interface IInputFieldSpecExt extends IInputFieldSpec {
    fieldId: string;
    autocompleteKey?: string;
}
export declare class PromptFormComponent implements OnInit {
    private readonly _builder;
    private readonly _bsModalRef;
    autocomplete: string;
    closeBtnLabel: string;
    confirmBtnLabel: string;
    closeBtnClasses: string;
    confirmBtnClasses: string;
    title: string;
    innerBody: string;
    fields: Array<IInputFieldSpec>;
    result: EventEmitter<{
        [key: string]: any;
    }>;
    extFields: IInputFieldSpecExt[];
    form: FormGroup;
    constructor(_builder: FormBuilder, _bsModalRef: BsModalRef);
    ngOnInit(): void;
    close(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDef<PromptFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PromptFormComponent, "polp-bs-prompt-form", never, { "autocomplete": "autocomplete"; "closeBtnLabel": "closeBtnLabel"; "confirmBtnLabel": "confirmBtnLabel"; "closeBtnClasses": "closeBtnClasses"; "confirmBtnClasses": "confirmBtnClasses"; "title": "title"; "innerBody": "innerBody"; "fields": "fields"; }, { "result": "result"; }, never, never>;
}
export {};
