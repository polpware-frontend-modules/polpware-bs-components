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
let PolpBsComponentsModule = class PolpBsComponentsModule {
};
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
export { PolpBsComponentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvYnMtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9icy1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVyRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQTRDdkgsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7Q0FBSSxDQUFBO0FBQTFCLHNCQUFzQjtJQTFDbEMsUUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFO1lBQ1YsbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsc0JBQXNCO1lBQ3RCLG9CQUFvQjtZQUNwQix1QkFBdUI7WUFDdkIsd0JBQXdCO1lBQ3hCLDhCQUE4QjtTQUNqQztRQUNELE9BQU8sRUFBRTtZQUNMLFlBQVk7WUFDWixZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUVuQixXQUFXO1lBQ1gsV0FBVztZQUNYLGNBQWM7WUFFZCxpQkFBaUI7WUFFakIsaUJBQWlCO1lBQ2pCLGNBQWM7WUFFZCxjQUFjO1lBQ2QsYUFBYTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNMLG1CQUFtQjtZQUNuQixpQkFBaUI7WUFDakIsbUJBQW1CO1lBQ25CLHNCQUFzQjtZQUN0QixvQkFBb0I7WUFDcEIsdUJBQXVCO1lBQ3ZCLHdCQUF3QjtZQUN4Qiw4QkFBOEI7U0FDakM7UUFDRCxlQUFlLEVBQUUsRUFDaEI7S0FDSixDQUFDO0dBQ1csc0JBQXNCLENBQUk7U0FBMUIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZ0QXV0b2ZvY3VzTW9kdWxlIH0gZnJvbSAnQDQwdGhyZWUvbmd4LWF1dG9mb2N1cy1kaXJlY3RpdmUnO1xuXG5pbXBvcnQgeyBBdXRvc2l6ZU1vZHVsZSB9IGZyb20gJ25neC1hdXRvc2l6ZSc7XG5cbmltcG9ydCB7IFRhZ0lucHV0TW9kdWxlIH0gZnJvbSAnbmd4LWNoaXBzJztcblxuaW1wb3J0IHsgTmd4TWFza01vZHVsZSB9IGZyb20gJ25neC1tYXNrJztcblxuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5cbmltcG9ydCB7IEFsZXJ0TW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9hbGVydCc7XG5pbXBvcnQgeyBNb2RhbE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuaW1wb3J0IHsgQ29sbGFwc2VNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbGxhcHNlJztcblxuaW1wb3J0IHsgQWxlcnRCb3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWxlcnQtYm94L2FsZXJ0LWJveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcbmltcG9ydCB7IFByb21wdEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvbXB0LWZvcm0vcHJvbXB0LWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IEVtYWlsQ29tcG9zZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZW1haWwtY29tcG9zZXIvZW1haWwtY29tcG9zZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFByb21wdE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb21wdC1tb2RhbC9wcm9tcHQtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IEV4cGFuZGFibGVDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2V4cGFuZGFibGUtY2FyZC9leHBhbmRhYmxlLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaEJveFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0cy9zZWFyY2gtYm94LXdpZGdldC9zZWFyY2gtYm94LXdpZGdldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZVNpemVPcHRpb25zV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXRzL3BhZ2Utc2l6ZS1vcHRpb25zLXdpZGdldC9wYWdlLXNpemUtb3B0aW9ucy13aWRnZXQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQnJlYWRjcnVtYkNvbXBvbmVudCxcbiAgICAgICAgQWxlcnRCb3hDb21wb25lbnQsXG4gICAgICAgIFByb21wdEZvcm1Db21wb25lbnQsXG4gICAgICAgIEVtYWlsQ29tcG9zZXJDb21wb25lbnQsXG4gICAgICAgIFByb21wdE1vZGFsQ29tcG9uZW50LFxuICAgICAgICBFeHBhbmRhYmxlQ2FyZENvbXBvbmVudCxcbiAgICAgICAgU2VhcmNoQm94V2lkZ2V0Q29tcG9uZW50LFxuICAgICAgICBQYWdlU2l6ZU9wdGlvbnNXaWRnZXRDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG4gICAgICAgIEFsZXJ0TW9kdWxlLFxuICAgICAgICBNb2RhbE1vZHVsZSxcbiAgICAgICAgQ29sbGFwc2VNb2R1bGUsXG5cbiAgICAgICAgRm9udEF3ZXNvbWVNb2R1bGUsXG5cbiAgICAgICAgRnRBdXRvZm9jdXNNb2R1bGUsXG4gICAgICAgIEF1dG9zaXplTW9kdWxlLFxuXG4gICAgICAgIFRhZ0lucHV0TW9kdWxlLFxuICAgICAgICBOZ3hNYXNrTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEJyZWFkY3J1bWJDb21wb25lbnQsXG4gICAgICAgIEFsZXJ0Qm94Q29tcG9uZW50LFxuICAgICAgICBQcm9tcHRGb3JtQ29tcG9uZW50LFxuICAgICAgICBFbWFpbENvbXBvc2VyQ29tcG9uZW50LFxuICAgICAgICBQcm9tcHRNb2RhbENvbXBvbmVudCxcbiAgICAgICAgRXhwYW5kYWJsZUNhcmRDb21wb25lbnQsXG4gICAgICAgIFNlYXJjaEJveFdpZGdldENvbXBvbmVudCxcbiAgICAgICAgUGFnZVNpemVPcHRpb25zV2lkZ2V0Q29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBvbHBCc0NvbXBvbmVudHNNb2R1bGUgeyB9XG4iXX0=