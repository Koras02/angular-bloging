import { Routes } from '@angular/router';
import { FeatureComponent } from './feature/feature.component'; // FeatureComponent 경로에 맞게 수정
import { ExampleComponent } from './example/example.component'; // ExampleComponent 경로에 맞게 수정
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: 'feature', component: FeatureComponent },
  { path: 'example', component: ExampleComponent },
  { path: 'user', component: UserComponent },

  // 필요하면 기본 경로 리다이렉트도 넣어
  { path: '', redirectTo: '/feature', pathMatch: 'full' },
  // 존재하지 않는 경로 처리 (옵션)
  { path: '**', redirectTo: '/feature' },
];
