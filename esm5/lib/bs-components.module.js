import { __decorate } from "tslib";
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
var PolpBsComponentsModule = /** @class */ (function () {
    function PolpBsComponentsModule() {
    }
    PolpBsComponentsModule = __decorate([
        NgModule({
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
        })
    ], PolpBsComponentsModule);
    return PolpBsComponentsModule;
}());
export { PolpBsComponentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvYnMtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9icy1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVyRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQTRDdkg7SUFBQTtJQUFzQyxDQUFDO0lBQTFCLHNCQUFzQjtRQTFDbEMsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLG1CQUFtQjtnQkFDbkIsaUJBQWlCO2dCQUNqQixtQkFBbUI7Z0JBQ25CLHNCQUFzQjtnQkFDdEIsb0JBQW9CO2dCQUNwQix1QkFBdUI7Z0JBQ3ZCLHdCQUF3QjtnQkFDeEIsOEJBQThCO2FBQ2pDO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixXQUFXO2dCQUNYLG1CQUFtQjtnQkFFbkIsV0FBVztnQkFDWCxXQUFXO2dCQUNYLGNBQWM7Z0JBRWQsaUJBQWlCO2dCQUVqQixpQkFBaUI7Z0JBQ2pCLGNBQWM7Z0JBRWQsY0FBYztnQkFDZCxhQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLG1CQUFtQjtnQkFDbkIsaUJBQWlCO2dCQUNqQixtQkFBbUI7Z0JBQ25CLHNCQUFzQjtnQkFDdEIsb0JBQW9CO2dCQUNwQix1QkFBdUI7Z0JBQ3ZCLHdCQUF3QjtnQkFDeEIsOEJBQThCO2FBQ2pDO1lBQ0QsZUFBZSxFQUFFLEVBQ2hCO1NBQ0osQ0FBQztPQUNXLHNCQUFzQixDQUFJO0lBQUQsNkJBQUM7Q0FBQSxBQUF2QyxJQUF1QztTQUExQixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRnRBdXRvZm9jdXNNb2R1bGUgfSBmcm9tICdANDB0aHJlZS9uZ3gtYXV0b2ZvY3VzLWRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IEF1dG9zaXplTW9kdWxlIH0gZnJvbSAnbmd4LWF1dG9zaXplJztcblxuaW1wb3J0IHsgVGFnSW5wdXRNb2R1bGUgfSBmcm9tICduZ3gtY2hpcHMnO1xuXG5pbXBvcnQgeyBOZ3hNYXNrTW9kdWxlIH0gZnJvbSAnbmd4LW1hc2snO1xuXG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcblxuaW1wb3J0IHsgQWxlcnRNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2FsZXJ0JztcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5pbXBvcnQgeyBDb2xsYXBzZU1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvY29sbGFwc2UnO1xuXG5pbXBvcnQgeyBBbGVydEJveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hbGVydC1ib3gvYWxlcnQtYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvbXB0Rm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9tcHQtZm9ybS9wcm9tcHQtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1haWxDb21wb3NlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9lbWFpbC1jb21wb3Nlci9lbWFpbC1jb21wb3Nlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvbXB0TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvbXB0LW1vZGFsL3Byb21wdC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXhwYW5kYWJsZUNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZXhwYW5kYWJsZS1jYXJkL2V4cGFuZGFibGUtY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoQm94V2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXRzL3NlYXJjaC1ib3gtd2lkZ2V0L3NlYXJjaC1ib3gtd2lkZ2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlU2l6ZU9wdGlvbnNXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL3dpZGdldHMvcGFnZS1zaXplLW9wdGlvbnMtd2lkZ2V0L3BhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxuICAgICAgICBBbGVydEJveENvbXBvbmVudCxcbiAgICAgICAgUHJvbXB0Rm9ybUNvbXBvbmVudCxcbiAgICAgICAgRW1haWxDb21wb3NlckNvbXBvbmVudCxcbiAgICAgICAgUHJvbXB0TW9kYWxDb21wb25lbnQsXG4gICAgICAgIEV4cGFuZGFibGVDYXJkQ29tcG9uZW50LFxuICAgICAgICBTZWFyY2hCb3hXaWRnZXRDb21wb25lbnQsXG4gICAgICAgIFBhZ2VTaXplT3B0aW9uc1dpZGdldENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cbiAgICAgICAgQWxlcnRNb2R1bGUsXG4gICAgICAgIE1vZGFsTW9kdWxlLFxuICAgICAgICBDb2xsYXBzZU1vZHVsZSxcblxuICAgICAgICBGb250QXdlc29tZU1vZHVsZSxcblxuICAgICAgICBGdEF1dG9mb2N1c01vZHVsZSxcbiAgICAgICAgQXV0b3NpemVNb2R1bGUsXG5cbiAgICAgICAgVGFnSW5wdXRNb2R1bGUsXG4gICAgICAgIE5neE1hc2tNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQnJlYWRjcnVtYkNvbXBvbmVudCxcbiAgICAgICAgQWxlcnRCb3hDb21wb25lbnQsXG4gICAgICAgIFByb21wdEZvcm1Db21wb25lbnQsXG4gICAgICAgIEVtYWlsQ29tcG9zZXJDb21wb25lbnQsXG4gICAgICAgIFByb21wdE1vZGFsQ29tcG9uZW50LFxuICAgICAgICBFeHBhbmRhYmxlQ2FyZENvbXBvbmVudCxcbiAgICAgICAgU2VhcmNoQm94V2lkZ2V0Q29tcG9uZW50LFxuICAgICAgICBQYWdlU2l6ZU9wdGlvbnNXaWRnZXRDb21wb25lbnRcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUG9scEJzQ29tcG9uZW50c01vZHVsZSB7IH1cbiJdfQ==