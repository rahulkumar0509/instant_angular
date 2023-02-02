import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() configData = {};
  @Input() frmGroup: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
  }

}
