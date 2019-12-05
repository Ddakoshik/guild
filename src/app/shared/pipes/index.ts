import { NgModule } from '@angular/core';

import { HtmlTextLengthPipe } from './html-text-length.pipe';
import { CountdownPipe } from './text-counter.pipe';

export const PIPES = [
  HtmlTextLengthPipe,
  CountdownPipe
];

@NgModule({
  imports: [],
  declarations: PIPES,
  exports: PIPES,
  providers: PIPES
})
export class PipesModule {}
