import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() configData = {};
  @Input() frmGroup: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
  }
  checked = false;
  indeterminate = false;
}
