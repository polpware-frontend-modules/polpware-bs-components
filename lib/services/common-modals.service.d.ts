import { BsModalService } from 'ngx-bootstrap/modal';
export declare class CommonModalsService {
    private readonly _modalService;
    constructor(_modalService: BsModalService);
    showConfirmAsync(title: string, innerBody: string, modalClasses?: string): Promise<boolean>;
}
