import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {
  @Input() configData = {};
  @Input() frmGroup: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
  }
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
}
