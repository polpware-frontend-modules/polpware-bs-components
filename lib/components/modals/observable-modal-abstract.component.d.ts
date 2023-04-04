import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
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
}
