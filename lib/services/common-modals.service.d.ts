import { BsModalService } from 'ngx-bootstrap/modal';
import * as i0 from "@angular/core";
export declare class CommonModalsService {
    private readonly _modalService;
    constructor(_modalService: BsModalService);
    showConfirmAsync(title: string, innerBody: string, modalClasses?: string): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommonModalsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CommonModalsService>;
}
