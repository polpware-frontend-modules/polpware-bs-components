import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { EmailFormAbstractComponent } from '@polpware/ngx-email-composer';
import * as i0 from "@angular/core";
export declare class EmailComposerComponent extends EmailFormAbstractComponent implements AfterViewInit, OnInit {
    faSpinner: import("@fortawesome/fontawesome-common-types").IconDefinition;
    initEmails: string[];
    isHtmlBody: boolean;
    onClose: EventEmitter<any>;
    constructor();
    get bsAlertType(): "info" | "danger" | "success" | "warning";
    ngOnInit(): void;
    ngAfterViewInit(): void;
    submit(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmailComposerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmailComposerComponent, "polp-email-composer", never, { "initEmails": { "alias": "initEmails"; "required": false; }; "isHtmlBody": { "alias": "isHtmlBody"; "required": false; }; }, { "onClose": "onClose"; }, never, never, false, never>;
}
//# sourceMappingURL=email-composer.component.d.ts.map