import { NgModule } from '@angular/core'; 
import { EvirmentheathRoutingModule } from './evirmentheath-routing.module'; 
import { XButtonModule } from '@ng-nest/ui/button';
import { XInputModule } from '@ng-nest/ui/input';
import { XCheckboxModule } from '@ng-nest/ui/checkbox';
import { ShareModule } from 'src/share/share.module';
import { NgNestModule } from 'src/share/ng-nest.module';
import { AuToolModule } from 'src/share/tool/tool.module';
import { AuAdaptionModule } from 'src/share/adaption/adaption.module';
import { EvirmentheathComponent } from './evirmentheath.component';
import { XTableModule } from '@ng-nest/ui/table';
import { AddcustomersComponent } from './customer/addcustomers/addcustomers.component'; 
import { XRadioModule } from '@ng-nest/ui/radio';
import { AddsampleComponent } from './sample/addsample/addsample.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactComponent } from './contact/contact.component';
import { SampleComponent } from './sample/sample.component';
import { BusinessprojectComponent } from './businessproject/businessproject.component';
import { AddbusinessprojectComponent } from './businessproject/addbusinessproject/addbusinessproject.component';
import { XInputNumberModule } from '@ng-nest/ui/input-number';
import { XDialogModule, XSelectModule, XTagModule } from '@ng-nest/ui';
import { QualificationModule } from 'src/main/qualification/qualification.module'; 
import { CommonModule } from '@angular/common'; 
@NgModule({
  declarations: [EvirmentheathComponent, AddcustomersComponent
    , CustomerComponent, ContactComponent
    , BusinessprojectComponent, AddbusinessprojectComponent,
    SampleComponent,AddsampleComponent],
  imports: [ 
    CommonModule,
    EvirmentheathRoutingModule,
    QualificationModule,
    NgNestModule,
    XSelectModule, 
    XButtonModule,
    XInputModule,
    XCheckboxModule,
    ShareModule,
    AuAdaptionModule,
    XTableModule,
    XInputModule,
    AuToolModule,
    XRadioModule,
    XInputNumberModule,
    XDialogModule,
    XTagModule 
  ],
  exports:[EvirmentheathComponent ],
})
export class EvirmentheathModule { }
