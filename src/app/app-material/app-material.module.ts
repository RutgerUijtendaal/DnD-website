import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatInputModule, FormsModule],
  exports: [MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatInputModule, FormsModule],
})
export class AppMaterialModule {}
