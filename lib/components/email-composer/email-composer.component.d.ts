import { AfterViewInit, EventEmitter } from '@angular/core';
import { EmailFormAbstractComponent } from '@polpware/ngx-email-composer';
import * as i0 from "@angular/core";
export declare class EmailComposerComponent extends EmailFormAbstractComponent implements AfterViewInit {
    faSpinner: import("@fortawesome/fontawesome-common-types").IconDefinition;
    onClose: EventEmitter<any>;
    constructor();
    get bsAlertType(): "success" | "info" | "danger" | "warning";
    ngAfterViewInit(): void;
    submit(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDef<EmailComposerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EmailComposerComponent, "polp-email-composer", never, {}, { "onClose": "onClose"; }, never, never>;
}
