import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FtAutofocusModule } from '@40three/ngx-autofocus-directive';
import { TagInputModule } from 'ngx-chips';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { EditorModule } from '@tinymce/tinymce-angular';
import { TextFieldModule } from '@angular/cdk/text-field';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PromptFormComponent } from './components/prompt-form/prompt-form.component';
import { EmailComposerComponent } from './components/email-composer/email-composer.component';
import { PromptModalComponent } from './components/prompt-modal/prompt-modal.component';
import { ExpandableCardComponent } from './components/expandable-card/expandable-card.component';
import { SearchBoxWidgetComponent } from './widgets/search-box-widget/search-box-widget.component';
import { PageSizeOptionsWidgetComponent } from './widgets/page-size-options-widget/page-size-options-widget.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import * as i0 from "@angular/core";
export class PolpBsComponentsModule {
    static { this.ɵfac = function PolpBsComponentsModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PolpBsComponentsModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PolpBsComponentsModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            RouterModule,
            FormsModule,
            ReactiveFormsModule,
            AlertModule,
            ModalModule,
            CollapseModule,
            PopoverModule,
            FontAwesomeModule,
            FtAutofocusModule,
            TagInputModule,
            EditorModule,
            TextFieldModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PolpBsComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    BreadcrumbComponent,
                    AlertBoxComponent,
                    PromptFormComponent,
                    EmailComposerComponent,
                    PromptModalComponent,
                    ExpandableCardComponent,
                    SearchBoxWidgetComponent,
                    PageSizeOptionsWidgetComponent
                ],
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    AlertModule,
                    ModalModule,
                    CollapseModule,
                    PopoverModule,
                    FontAwesomeModule,
                    FtAutofocusModule,
                    TagInputModule,
                    EditorModule,
                    TextFieldModule,
                    // Standalone components
                    NgxMaskDirective,
                    NgxMaskPipe
                ],
                exports: [
                    // Standalone components
                    NgxMaskDirective,
                    NgxMaskPipe,
                    // Library-specific components 
                    BreadcrumbComponent,
                    AlertBoxComponent,
                    PromptFormComponent,
                    EmailComposerComponent,
                    PromptModalComponent,
                    ExpandableCardComponent,
                    SearchBoxWidgetComponent,
                    PageSizeOptionsWidgetComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolpBsComponentsModule, { declarations: [BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent,
        EmailComposerComponent,
        PromptModalComponent,
        ExpandableCardComponent,
        SearchBoxWidgetComponent,
        PageSizeOptionsWidgetComponent], imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule,
        ModalModule,
        CollapseModule,
        PopoverModule,
        FontAwesomeModule,
        FtAutofocusModule,
        TagInputModule,
        EditorModule,
        TextFieldModule,
        // Standalone components
        NgxMaskDirective,
        NgxMaskPipe], exports: [
        // Standalone components
        NgxMaskDirective,
        NgxMaskPipe,
        // Library-specific components 
        BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent,
        EmailComposerComponent,
        PromptModalComponent,
        ExpandableCardComponent,
        SearchBoxWidgetComponent,
        PageSizeOptionsWidgetComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9icy1jb21wb25lbnRzL3NyYy9saWIvYnMtY29tcG9uZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBZ0R6RCxNQUFNLE9BQU8sc0JBQXNCO3VIQUF0QixzQkFBc0I7bUVBQXRCLHNCQUFzQjt1RUFsQzNCLFlBQVk7WUFDWixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsV0FBVztZQUNYLGNBQWM7WUFDZCxhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsWUFBWTtZQUNaLGVBQWU7O2lGQXNCVixzQkFBc0I7Y0E5Q2xDLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1YsbUJBQW1CO29CQUNuQixpQkFBaUI7b0JBQ2pCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLHVCQUF1QjtvQkFDdkIsd0JBQXdCO29CQUN4Qiw4QkFBOEI7aUJBQ2pDO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxjQUFjO29CQUNkLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2QsWUFBWTtvQkFDWixlQUFlO29CQUVmLHdCQUF3QjtvQkFDeEIsZ0JBQWdCO29CQUNoQixXQUFXO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDTCx3QkFBd0I7b0JBQ3hCLGdCQUFnQjtvQkFDaEIsV0FBVztvQkFFWCwrQkFBK0I7b0JBQy9CLG1CQUFtQjtvQkFDbkIsaUJBQWlCO29CQUNqQixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFDdEIsb0JBQW9CO29CQUNwQix1QkFBdUI7b0JBQ3ZCLHdCQUF3QjtvQkFDeEIsOEJBQThCO2lCQUNqQzthQUNKOzt3RkFDWSxzQkFBc0IsbUJBNUMzQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsOEJBQThCLGFBRzlCLFlBQVk7UUFDWixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsV0FBVztRQUNYLGNBQWM7UUFDZCxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsWUFBWTtRQUNaLGVBQWU7UUFFZix3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFHWCx3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFFWCwrQkFBK0I7UUFDL0IsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGdEF1dG9mb2N1c01vZHVsZSB9IGZyb20gJ0A0MHRocmVlL25neC1hdXRvZm9jdXMtZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgVGFnSW5wdXRNb2R1bGUgfSBmcm9tICduZ3gtY2hpcHMnO1xuXG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcblxuaW1wb3J0IHsgQWxlcnRNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2FsZXJ0JztcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBDb2xsYXBzZU1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvY29sbGFwc2UnO1xuaW1wb3J0IHsgUG9wb3Zlck1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9wb3Zlcic7XG5cbmltcG9ydCB7IEVkaXRvck1vZHVsZSB9IGZyb20gJ0B0aW55bWNlL3RpbnltY2UtYW5ndWxhcic7XG5cbmltcG9ydCB7IFRleHRGaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXh0LWZpZWxkJztcblxuaW1wb3J0IHsgQWxlcnRCb3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWxlcnQtYm94L2FsZXJ0LWJveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcbmltcG9ydCB7IFByb21wdEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvbXB0LWZvcm0vcHJvbXB0LWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEVtYWlsQ29tcG9zZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZW1haWwtY29tcG9zZXIvZW1haWwtY29tcG9zZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFByb21wdE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb21wdC1tb2RhbC9wcm9tcHQtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEV4cGFuZGFibGVDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V4cGFuZGFibGUtY2FyZC9leHBhbmRhYmxlLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaEJveFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy9zZWFyY2gtYm94LXdpZGdldC9zZWFyY2gtYm94LXdpZGdldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZVNpemVPcHRpb25zV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXRzL3BhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldC9wYWdlLXNpemUtb3B0aW9ucy13aWRnZXQuY29tcG9uZW50JztcbmltcG9ydCB7IE5neE1hc2tEaXJlY3RpdmUsIE5neE1hc2tQaXBlIH0gZnJvbSAnbmd4LW1hc2snO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxuICAgICAgICBBbGVydEJveENvbXBvbmVudCxcbiAgICAgICAgUHJvbXB0Rm9ybUNvbXBvbmVudCxcbiAgICAgICAgRW1haWxDb21wb3NlckNvbXBvbmVudCxcbiAgICAgICAgUHJvbXB0TW9kYWxDb21wb25lbnQsXG4gICAgICAgIEV4cGFuZGFibGVDYXJkQ29tcG9uZW50LFxuICAgICAgICBTZWFyY2hCb3hXaWRnZXRDb21wb25lbnQsXG4gICAgICAgIFBhZ2VTaXplT3B0aW9uc1dpZGdldENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIEFsZXJ0TW9kdWxlLFxuICAgICAgICBNb2RhbE1vZHVsZSxcbiAgICAgICAgQ29sbGFwc2VNb2R1bGUsXG4gICAgICAgIFBvcG92ZXJNb2R1bGUsXG4gICAgICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgICAgICBGdEF1dG9mb2N1c01vZHVsZSxcbiAgICAgICAgVGFnSW5wdXRNb2R1bGUsXG4gICAgICAgIEVkaXRvck1vZHVsZSxcbiAgICAgICAgVGV4dEZpZWxkTW9kdWxlLFxuXG4gICAgICAgIC8vIFN0YW5kYWxvbmUgY29tcG9uZW50c1xuICAgICAgICBOZ3hNYXNrRGlyZWN0aXZlLFxuICAgICAgICBOZ3hNYXNrUGlwZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICAvLyBTdGFuZGFsb25lIGNvbXBvbmVudHNcbiAgICAgICAgTmd4TWFza0RpcmVjdGl2ZSxcbiAgICAgICAgTmd4TWFza1BpcGUsXG5cbiAgICAgICAgLy8gTGlicmFyeS1zcGVjaWZpYyBjb21wb25lbnRzIFxuICAgICAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxuICAgICAgICBBbGVydEJveENvbXBvbmVudCxcbiAgICAgICAgUHJvbXB0Rm9ybUNvbXBvbmVudCxcbiAgICAgICAgRW1haWxDb21wb3NlckNvbXBvbmVudCxcbiAgICAgICAgUHJvbXB0TW9kYWxDb21wb25lbnQsXG4gICAgICAgIEV4cGFuZGFibGVDYXJkQ29tcG9uZW50LFxuICAgICAgICBTZWFyY2hCb3hXaWRnZXRDb21wb25lbnQsXG4gICAgICAgIFBhZ2VTaXplT3B0aW9uc1dpZGdldENvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUG9scEJzQ29tcG9uZW50c01vZHVsZSB7IH1cbiJdfQ==