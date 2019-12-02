import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
	name: 'count'
})
export class CountdownPipe implements PipeTransform {
	transform(text: string, args: number) {
		const val: string = text || '';
		const maxLength = args || 200;
		const length = val.length || 0;
		return `${length}/${maxLength} character limit`;
	}
}
