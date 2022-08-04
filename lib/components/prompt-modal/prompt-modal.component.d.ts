import { OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { IInputFieldSpec } from '../../utils/form-helper';
import * as i0 from "@angular/core";
export interface IPromptFormInputs {
    autocomplete?: string;
    enableEnter?: boolean;
    hideCancelBtn?: boolean;
    hideCloseBtn?: boolean;
    hideConfirmBtn?: boolean;
    cancelBtnLabel?: string;
    confirmBtnLabel?: string;
    cancelBtnClasses?: string;
    confirmBtnClasses?: string;
    title: string;
    innerBody: string;
    fields: Array<IInputFieldSpec>;
}
export declare class PromptModalComponent implements OnInit {
    private readonly _bsModalRef;
    autocomplete: string;
    enableEnter: boolean;
    hideCancelBtn: boolean;
    hideConfirmBtn: boolean;
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
    constructor(_bsModalRef: BsModalRef);
    ngOnInit(): void;
    close(): void;
    confirm(value: {
        [key: string]: any;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PromptModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PromptModalComponent, "polp-bs-prompt-modal", never, { "autocomplete": "autocomplete"; "enableEnter": "enableEnter"; "hideCancelBtn": "hideCancelBtn"; "hideConfirmBtn": "hideConfirmBtn"; "hideCloseBtn": "hideCloseBtn"; "cancelBtnLabel": "cancelBtnLabel"; "confirmBtnLabel": "confirmBtnLabel"; "cancelBtnClasses": "cancelBtnClasses"; "confirmBtnClasses": "confirmBtnClasses"; "title": "title"; "innerBody": "innerBody"; "fields": "fields"; }, { "result": "result"; }, never, never>;
}
