import { Component, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig } from "./field.interface";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      value: "UK",
      options: ["India", "UAE", "UK", "US"]
    },
    {
      type: "input",
      label: "Street Name",
      inputType: "Text",
      name: "Address",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Address Required"
        }
      ]
    },

    

    {
      type: "input",
      label: "Address 2",
      inputType: "Text",
      name: "Street 2",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Street 2 Required"
        },
        
      ]
      
    },
    {
      type: "input",
      label: "Hobby 1",
      inputType: "Text",
      name: "Hobby ",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Hobby 1 Required"
        },
        
      ]
      
    },
    {
      type: "input",
      label: "Hobby 2",
      inputType: "Text",
      name: "Hobby 2 ",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Hobby 2 Required"
        },
        
      ]
      
    },
     {
      type: "button",
      label: "Save"
    }
  ];

  submit(value: any) {}
}
