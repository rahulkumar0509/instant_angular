import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationConfig:any;
  registrationForm = new FormGroup({});
  submitted = false;
  data ={};
  newForm = false;
  oldForm = true;
  fileToUpload: any;
  uploadedJson:any;
  template = {
    "screenName": "registrationForm",
    "controls": [
      {
        "name": "username",
        "component": "INPUT",
        "mandatory": true,
        "label": "Username",
        "placeholder": "Enter username",
        "defaultValue": "rahul",
        "defaultValidation": "SPECIAL_CHAR_PROHIBITED"
      },
      {
        "name": "Email",
        "component": "INPUT",
        "mandatory": true,
        "label": "Email id",
        "placeholder": "Enter email id",
        "defaultValue": " rahul@instant.com",
        "defaultValidation": "EMAIL"
      },
      {
        "name": "password",
        "component": "INPUT",
        "mandatory": true,
        "label": "Password",
        "placeholder": "Enter password",
        "defaultValue": "",
        "defaultValidation": ""
      },
      {
        "name": "confirmPassword",
        "component": "INPUT",
        "mandatory": true,
        "label": "Confirm password ",
        "placeholder": "Enter confirm password",
        "defaultValue": "",
        "defaultValidation": ""
      },
      {
        "name": "age",
        "component": "INPUT",
        "mandatory": true,
        "label": "Age ",
        "placeholder": "Enter age",
        "defaultValue": "22",
        "defaultValidation": ""
      },
      {
        "name": "sex",
        "component": "INPUT",
        "mandatory": true,
        "label": "Sex",
        "placeholder": "Enter sex",
        "defaultValue": "N/A",
        "defaultValidation": ""
      }
    ],
    "header": {
      "title": "User registration form 2",
      "subtitle": "Fill out the basic details.",
      "actions":[
        {
          "type": "SUBMIT",
          "label": "Register",
          "apiUrl": "/registration",
          "buttonType": "primary"
        },
        {
          "type": "RESET",
          "label": "Reset",
          "apiUrl": "",
          "buttonType": "secondary"
        }
      ]
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.registrationConfig = this.template;
    this.registrationConfig = JSON.stringify(this.registrationConfig);
  }

  getForm(form:any){
    this.registrationForm = form;
  }

  submit(){
    this.submitted = true;
    this.data = JSON.stringify(this.registrationForm.value);
  }

  renderForm(){
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      // console.log(fileReader.result);
      
    this.registrationConfig = fileReader.result || {
      screenName: "registrationForm",
      controls: [
        {
          name: "username",
          component: "INPUT",
          mandatory: true,
          label: "Username 2",
          placeholder: "Enter username",
          defaultValue: "not rahul",
          defaultValidation: "SPECIAL_CHAR_PROHIBITED"
        },
        {
          name: "Email",
          component: "INPUT",
          mandatory: true,
          label: "Email id",
          placeholder: "Enter email id",
          defaultValue: "not rahul@instant.com",
          defaultValidation: "EMAIL"
        },
        {
          name: "password",
          component: "INPUT",
          mandatory: true,
          label: "Password",
          placeholder: "Enter password",
          defaultValue: "",
          defaultValidation: ""
        },
        {
          name: "confirmPassword",
          component: "INPUT",
          mandatory: true,
          label: "Confirm password 2",
          placeholder: "Enter confirm password",
          defaultValue: "",
          defaultValidation: ""
        },
        {
          name: "age",
          component: "INPUT",
          mandatory: true,
          label: "Age 2",
          placeholder: "Enter age",
          defaultValue: "not 22",
          defaultValidation: ""
        },
        {
          name: "sex",
          component: "INPUT",
          mandatory: true,
          label: "Sex 2",
          placeholder: "Enter sex",
          defaultValue: "N/A",
          defaultValidation: ""
        },
      ],
      header: {
        title: "User registration form 2",
        subtitle: "Fill out the basic details.",
        actions:[
          {
            type: "SUBMIT",
            label: "Register",
            apiUrl: "/registration",
            buttonType: "primary"
          },
          {
            type: "RESET",
            label: "Reset",
            apiUrl: "",
            buttonType: "secondary"
          }
        ]
      },
    };
    this.newForm = !this.newForm;
    this.oldForm = !this.oldForm;
    }
    fileReader.readAsText(this.uploadedJson);
  }
  
  handleFileInput(target: any) {
    this.uploadedJson = target.files[0];
  }

  downloadJson(){
    let fileToSave = new Blob([JSON.stringify(this.template)], {type: 'application/json'});
    saveAs(fileToSave, "dummy.json");
  }
}
