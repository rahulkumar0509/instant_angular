import { Component, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { CheckboxComponent } from '../components/forms/checkbox/checkbox.component';
import { DropdownComponent } from '../components/forms/dropdown/dropdown.component';
import { InputBoxComponent } from '../components/forms/input-box/input-box.component';
import { SlideToggleComponent } from '../components/forms/slide-toggle/slide-toggle.component';

@Component({
  selector: 'app-instant-form',
  templateUrl: './instant-form.component.html',
  styleUrls: ['./instant-form.component.scss']
})
export class InstantFormComponent implements OnInit {

  constructor() { }

  @Input() configData: any; // later on, define type
  @Output() form: any = new EventEmitter<any>();
  formGroup: FormGroup = new FormGroup({});
  @ViewChild('controlPlaceholder', { read: ViewContainerRef, static: true })
  controlPlaceholder!: ViewContainerRef; // definite assignment assertion

  ngOnInit(): void {
    if (this.configData) {
      this.configData= JSON.parse(this.configData);
      this.formGroup = this.createForm() || new FormGroup({});
      this.form.emit(this.formGroup);
      this.loadComponents();
    }
  }
  createForm() {
    let controlGroup: any = {};
    this.configData.controls.forEach((ctrl: any) => {
      let validation = ctrl.mandatory ? Validators.required : null;
      controlGroup[ctrl.name] = new FormControl({ value: ctrl.defaultValue, disabled: ctrl.disabled }, validation);
    })
    return new FormGroup(controlGroup);
  }
  loadComponents() {
    let componentRef = null;
    this.controlPlaceholder.clear();    // method viewcontainerref
    for (let control of this.configData?.controls) {
      switch (this.configData.controls) {
        case 'INPUT':
          componentRef = this.controlPlaceholder.createComponent(InputBoxComponent);
          break;
        case 'DROPDOWN':
          componentRef = this.controlPlaceholder.createComponent(DropdownComponent);
          break;
        case 'SLIDETOGGLE':
          componentRef = this.controlPlaceholder.createComponent(SlideToggleComponent);
          break;
        case 'CHECKBOX':
          componentRef = this.controlPlaceholder.createComponent(CheckboxComponent);
          break;
        default:
          componentRef = this.controlPlaceholder.createComponent(InputBoxComponent);
      }
      componentRef.instance.configData = control;
      componentRef.instance.frmGroup = this.formGroup;
    }
  }
}
