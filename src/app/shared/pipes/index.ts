import { NgModule } from '@angular/core';

import { HtmlTextLengthPipe } from './html-text-length.pipe';

export const PIPES = [
  HtmlTextLengthPipe,
];

@NgModule({
  imports: [],
  declarations: PIPES,
  exports: PIPES,
  providers: PIPES
})
export class PipesModule {}
