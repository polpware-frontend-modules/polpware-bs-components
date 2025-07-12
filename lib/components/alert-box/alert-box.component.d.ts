import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import * as i0 from "@angular/core";
export interface IAlertBoxInputs {
    hideNoBtn?: boolean;
    yesBtnLabel?: string;
    noBtnLabel?: string;
    noBtnClasses?: string;
    yesBtnClasses?: string;
    enableEnter?: boolean;
    title: string;
    innerBody: string;
}
export declare class AlertBoxComponent implements OnInit {
    private readonly _bsModalRef;
    hideNoBtn: boolean;
    yesBtnLabel: string;
    noBtnLabel: string;
    noBtnClasses: string;
    yesBtnClasses: string;
    enableEnter: boolean;
    title: string;
    innerBody: string;
    result: Subject<boolean>;
    constructor(_bsModalRef: BsModalRef);
    ngOnInit(): void;
    keyEvent(event: KeyboardEvent): void;
    close(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertBoxComponent, "polp-bs-alert-box", never, { "hideNoBtn": { "alias": "hideNoBtn"; "required": false; }; "yesBtnLabel": { "alias": "yesBtnLabel"; "required": false; }; "noBtnLabel": { "alias": "noBtnLabel"; "required": false; }; "noBtnClasses": { "alias": "noBtnClasses"; "required": false; }; "yesBtnClasses": { "alias": "yesBtnClasses"; "required": false; }; "enableEnter": { "alias": "enableEnter"; "required": false; }; "title": { "alias": "title"; "required": false; }; "innerBody": { "alias": "innerBody"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=alert-box.component.d.ts.map