import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { IInputFieldSpec } from '../../utils/form-helper';
import * as i0 from "@angular/core";
interface IInputFieldSpecExt extends IInputFieldSpec {
    fieldId: string;
    autocompleteKey?: string;
}
export interface IPrompFormInputs {
    autocomplete?: 'on' | 'off';
    enableEnter?: boolean;
    hideCancelBtn?: boolean;
    hideCloseBtn?: boolean;
    cancelBtnLabel?: string;
    confirmBtnLabel?: string;
    cancelBtnClasses?: string;
    confirmBtnClasses?: string;
    title: string;
    innerBody: string;
    fields: Array<IInputFieldSpec>;
}
export declare class PromptFormComponent implements OnInit {
    private readonly _builder;
    private readonly _bsModalRef;
    autocomplete: string;
    enableEnter: boolean;
    hideCancelBtn: boolean;
    hideCloseBtn: boolean;
    cancelBtnLabel: string;
    confirmBtnLabel: string;
    cancelBtnClasses: string;
    confirmBtnClasses: string;
    title: string;
    innerBody: string;
    fields: Array<IInputFieldSpec>;
    result: Subject<{
        [key: string]: any;
    }>;
    extFields: IInputFieldSpecExt[];
    form: FormGroup;
    constructor(_builder: FormBuilder, _bsModalRef: BsModalRef);
    ngOnInit(): void;
    keyEvent(event: KeyboardEvent): void;
    close(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDef<PromptFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PromptFormComponent, "polp-bs-prompt-form", never, { "autocomplete": "autocomplete"; "enableEnter": "enableEnter"; "hideCancelBtn": "hideCancelBtn"; "hideCloseBtn": "hideCloseBtn"; "cancelBtnLabel": "cancelBtnLabel"; "confirmBtnLabel": "confirmBtnLabel"; "cancelBtnClasses": "cancelBtnClasses"; "confirmBtnClasses": "confirmBtnClasses"; "title": "title"; "innerBody": "innerBody"; "fields": "fields"; }, { "result": "result"; }, never, never>;
}
export {};
