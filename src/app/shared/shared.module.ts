import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from './common/common.component';

@NgModule({
  declarations: [CommonComponent],
  imports: [CommonModule],
  exports: [CommonComponent], // 다른 모듈에 사용 가능하게 export
})
export class SharedModule {}
