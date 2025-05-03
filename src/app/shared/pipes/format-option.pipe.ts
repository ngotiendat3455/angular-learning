import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'formatOption',
    standalone: true
  })
export class FormatOption<T> implements PipeTransform {
    transform(option: T | null, formatFn: Function | null = null) {
        if (!option) {
            return 'Undified option';
        }

        if (formatFn) {
            return formatFn(option);
        }

        return option.toString();
    }
}