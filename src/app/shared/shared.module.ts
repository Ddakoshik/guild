import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ModalService } from './modals/modal.service';

import { ComfirmationModalMaterialComponent } from './modals/comfirmation-modal-material/comfirmation-modal-material.component';
import { UserDataService } from './services/user-data.service';
import { CharacterRoleOrderComponent } from './components/character-role-order/character-role-order.component';

export const COMPONENTS = [
  ComfirmationModalMaterialComponent,
  CharacterRoleOrderComponent
];




@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    ...COMPONENTS
  ],
  providers: [
    AuthService,
    AuthGuard,
    ModalService
  ],
  entryComponents: [
    ComfirmationModalMaterialComponent
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService,
        AuthGuard,
        UserDataService,
        ModalService
      ]
    };
  }
}
