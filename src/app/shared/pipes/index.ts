import { NgModule } from '@angular/core';

import { HtmlTextLengthPipe } from './html-text-length.pipe';
import { TestPipe } from './test.pipe';

export const PIPES = [
  HtmlTextLengthPipe,
  TestPipe
];

@NgModule({
  imports: [],
  declarations: PIPES,
  exports: PIPES,
  providers: PIPES
})
export class PipesModule {}
