import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import * as i0 from "@angular/core";
export declare class AlertBoxComponent implements OnInit {
    private readonly _bsModalRef;
    hideNoBtn: boolean;
    yesBtnLabel: string;
    noBtnLabel: string;
    noBtnClasses: string;
    yesBtnClasses: string;
    title: string;
    innerBody: string;
    result: Subject<boolean>;
    constructor(_bsModalRef: BsModalRef);
    ngOnInit(): void;
    close(): void;
    confirm(): void;
    static ɵfac: i0.ɵɵFactoryDef<AlertBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AlertBoxComponent, "polp-bs-alert-box", never, { "hideNoBtn": "hideNoBtn"; "yesBtnLabel": "yesBtnLabel"; "noBtnLabel": "noBtnLabel"; "noBtnClasses": "noBtnClasses"; "yesBtnClasses": "yesBtnClasses"; "title": "title"; "innerBody": "innerBody"; }, {}, never, never>;
}
