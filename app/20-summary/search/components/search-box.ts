import {Component, Output, EventEmitter} from "angular2/core";

@Component({
  selector: 'search-box',
  template: `<div>
    <input #inputId type="text" (input)="update.emit(inputId.value)">
  </div>`
})
export class SearchBox{
  @Output() update = new EventEmitter();

  ngOnInit() {
    this.update.emit('');
  }
}
