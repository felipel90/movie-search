import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule, MatGridListModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule    
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule
  ],
  declarations: [],
  providers: [],
})

export class MaterialModule { }
