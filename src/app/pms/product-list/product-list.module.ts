import { LazyLoadImageModule } from 'ng-lazyload-image'
import { DataService } from './data.service'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductListComponent } from './product-list.component'
import { ModalModule } from 'ngx-bootstrap/modal'
import { UserSharedModule } from 'src/app/user-panel/user-shared/user-shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IAlertsModule } from 'src/app/libs/ialert/ialerts.module'
import { SharedModule } from 'src/app/website/shared/shared.module'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        IAlertsModule,
        FormsModule,
        ReactiveFormsModule,
        UserSharedModule,
        LazyLoadImageModule,
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        RouterModule.forChild([
            { path: '', component: ProductListComponent }
        ])
    ],
    declarations: [ProductListComponent],
    providers: [DataService]
})
export class ProductListModule { }
