import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FtAutofocusModule } from '@40three/ngx-autofocus-directive';
import { AutosizeModule } from 'ngx-autosize';
import { TagInputModule } from 'ngx-chips';
import { NgxMaskModule } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PromptFormComponent } from './components/prompt-form/prompt-form.component';
import { EmailComposerComponent } from './components/email-composer/email-composer.component';
import { PromptModalComponent } from './components/prompt-modal/prompt-modal.component';
import { ExpandableCardComponent } from './components/expandable-card/expandable-card.component';
import { SearchBoxWidgetComponent } from './widgets/search-box-widget/search-box-widget.component';
import { PageSizeOptionsWidgetComponent } from './widgets/page-size-options-widget/page-size-options-widget.component';
import * as i0 from "@angular/core";
export class PolpBsComponentsModule {
}
PolpBsComponentsModule.ɵmod = i0.ɵɵdefineNgModule({ type: PolpBsComponentsModule });
PolpBsComponentsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PolpBsComponentsModule_Factory(t) { return new (t || PolpBsComponentsModule)(); }, imports: [[
            CommonModule,
            RouterModule,
            FormsModule,
            ReactiveFormsModule,
            AlertModule,
            ModalModule,
            CollapseModule,
            FontAwesomeModule,
            FtAutofocusModule,
            AutosizeModule,
            TagInputModule,
            NgxMaskModule
        ]] });
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
        FontAwesomeModule,
        FtAutofocusModule,
        AutosizeModule,
        TagInputModule,
        NgxMaskModule], exports: [BreadcrumbComponent,
        AlertBoxComponent,
        PromptFormComponent,
        EmailComposerComponent,
        PromptModalComponent,
        ExpandableCardComponent,
        SearchBoxWidgetComponent,
        PageSizeOptionsWidgetComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PolpBsComponentsModule, [{
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
                    FontAwesomeModule,
                    FtAutofocusModule,
                    AutosizeModule,
                    TagInputModule,
                    NgxMaskModule
                ],
                exports: [
                    BreadcrumbComponent,
                    AlertBoxComponent,
                    PromptFormComponent,
                    EmailComposerComponent,
                    PromptModalComponent,
                    ExpandableCardComponent,
                    SearchBoxWidgetComponent,
                    PageSizeOptionsWidgetComponent
                ],
                entryComponents: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvYnMtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9icy1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDOztBQTRDdkgsTUFBTSxPQUFPLHNCQUFzQjs7MERBQXRCLHNCQUFzQjsySEFBdEIsc0JBQXNCLGtCQS9CdEI7WUFDTCxZQUFZO1lBQ1osWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFFbkIsV0FBVztZQUNYLFdBQVc7WUFDWCxjQUFjO1lBRWQsaUJBQWlCO1lBRWpCLGlCQUFpQjtZQUNqQixjQUFjO1lBRWQsY0FBYztZQUNkLGFBQWE7U0FDaEI7d0ZBY1Esc0JBQXNCLG1CQXhDM0IsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLDhCQUE4QixhQUc5QixZQUFZO1FBQ1osWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFFbkIsV0FBVztRQUNYLFdBQVc7UUFDWCxjQUFjO1FBRWQsaUJBQWlCO1FBRWpCLGlCQUFpQjtRQUNqQixjQUFjO1FBRWQsY0FBYztRQUNkLGFBQWEsYUFHYixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsOEJBQThCO2tEQUt6QixzQkFBc0I7Y0ExQ2xDLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1YsbUJBQW1CO29CQUNuQixpQkFBaUI7b0JBQ2pCLG1CQUFtQjtvQkFDbkIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLHVCQUF1QjtvQkFDdkIsd0JBQXdCO29CQUN4Qiw4QkFBOEI7aUJBQ2pDO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBRW5CLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxjQUFjO29CQUVkLGlCQUFpQjtvQkFFakIsaUJBQWlCO29CQUNqQixjQUFjO29CQUVkLGNBQWM7b0JBQ2QsYUFBYTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLG1CQUFtQjtvQkFDbkIsaUJBQWlCO29CQUNqQixtQkFBbUI7b0JBQ25CLHNCQUFzQjtvQkFDdEIsb0JBQW9CO29CQUNwQix1QkFBdUI7b0JBQ3ZCLHdCQUF3QjtvQkFDeEIsOEJBQThCO2lCQUNqQztnQkFDRCxlQUFlLEVBQUUsRUFDaEI7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGdEF1dG9mb2N1c01vZHVsZSB9IGZyb20gJ0A0MHRocmVlL25neC1hdXRvZm9jdXMtZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgQXV0b3NpemVNb2R1bGUgfSBmcm9tICduZ3gtYXV0b3NpemUnO1xuXG5pbXBvcnQgeyBUYWdJbnB1dE1vZHVsZSB9IGZyb20gJ25neC1jaGlwcyc7XG5cbmltcG9ydCB7IE5neE1hc2tNb2R1bGUgfSBmcm9tICduZ3gtbWFzayc7XG5cbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgeyBBbGVydE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvYWxlcnQnO1xuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IENvbGxhcHNlTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb2xsYXBzZSc7XG5cbmltcG9ydCB7IEFsZXJ0Qm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FsZXJ0LWJveC9hbGVydC1ib3guY29tcG9uZW50JztcbmltcG9ydCB7IEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9tcHRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb21wdC1mb3JtL3Byb21wdC1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbWFpbENvbXBvc2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2VtYWlsLWNvbXBvc2VyL2VtYWlsLWNvbXBvc2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9tcHRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9tcHQtbW9kYWwvcHJvbXB0LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHBhbmRhYmxlQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9leHBhbmRhYmxlLWNhcmQvZXhwYW5kYWJsZS1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hCb3hXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL3dpZGdldHMvc2VhcmNoLWJveC13aWRnZXQvc2VhcmNoLWJveC13aWRnZXQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VTaXplT3B0aW9uc1dpZGdldENvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy9wYWdlLXNpemUtb3B0aW9ucy13aWRnZXQvcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXG4gICAgICAgIEFsZXJ0Qm94Q29tcG9uZW50LFxuICAgICAgICBQcm9tcHRGb3JtQ29tcG9uZW50LFxuICAgICAgICBFbWFpbENvbXBvc2VyQ29tcG9uZW50LFxuICAgICAgICBQcm9tcHRNb2RhbENvbXBvbmVudCxcbiAgICAgICAgRXhwYW5kYWJsZUNhcmRDb21wb25lbnQsXG4gICAgICAgIFNlYXJjaEJveFdpZGdldENvbXBvbmVudCxcbiAgICAgICAgUGFnZVNpemVPcHRpb25zV2lkZ2V0Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuICAgICAgICBBbGVydE1vZHVsZSxcbiAgICAgICAgTW9kYWxNb2R1bGUsXG4gICAgICAgIENvbGxhcHNlTW9kdWxlLFxuXG4gICAgICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuXG4gICAgICAgIEZ0QXV0b2ZvY3VzTW9kdWxlLFxuICAgICAgICBBdXRvc2l6ZU1vZHVsZSxcblxuICAgICAgICBUYWdJbnB1dE1vZHVsZSxcbiAgICAgICAgTmd4TWFza01vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxuICAgICAgICBBbGVydEJveENvbXBvbmVudCxcbiAgICAgICAgUHJvbXB0Rm9ybUNvbXBvbmVudCxcbiAgICAgICAgRW1haWxDb21wb3NlckNvbXBvbmVudCxcbiAgICAgICAgUHJvbXB0TW9kYWxDb21wb25lbnQsXG4gICAgICAgIEV4cGFuZGFibGVDYXJkQ29tcG9uZW50LFxuICAgICAgICBTZWFyY2hCb3hXaWRnZXRDb21wb25lbnQsXG4gICAgICAgIFBhZ2VTaXplT3B0aW9uc1dpZGdldENvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQb2xwQnNDb21wb25lbnRzTW9kdWxlIHsgfVxuIl19