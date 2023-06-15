import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Provides a base for most modal components.  This base is built with
 * the capability of synchronousely waiting for a modal to close.
 */
export declare abstract class ObservableModalAbstractComponent<TInput, TOutput> {
    modalId: number;
    result: Subject<TOutput>;
    abstract bsModalRef: BsModalRef;
    protected abstract bsModalService: BsModalService;
    closeModal(value: TOutput): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ObservableModalAbstractComponent<any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ObservableModalAbstractComponent<any, any>, never, never, { "modalId": "modalId"; }, {}, never>;
}
