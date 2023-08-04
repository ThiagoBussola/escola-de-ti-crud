import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { accountFeatureUsersRoutes } from './lib.routes';
import { AccountFeatureUsersComponent } from './account-feature-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(accountFeatureUsersRoutes),
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    NgIf,
    HttpClientModule,
    MatSidenavModule,
  ],
  declarations: [AccountFeatureUsersComponent],
})
export class AccountFeatureUsersModule {}
