import { Pipe, PipeTransform } from '@angular/core';
import { clip, TextClipperInputPipeOptions} from '../utility';

@Pipe({
  name: 'htmlTextLength'
})
export class HtmlTextLengthPipe implements PipeTransform {
  transform(value: string, args: TextClipperInputPipeOptions): string {
    const limit = args.maxLength ? args.maxLength : 100 ;
    const trail = args.indicator ? args.indicator : '...';
    const htmlPars =  args.html ? args.html : false;
    const imageWeight =  args.imageWeight;
    const maxLines =  args.maxLines;

    const result = clip(value, limit, { html: htmlPars, indicator: trail, imageWeight: imageWeight, maxLines: maxLines });

    return value.length > limit ?  result : value;
  }
}
//  How to use
// | htmlTextLength: {maxLength: truncate, html: true}
