import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

export interface TabType {
  label: string;
  periods: any[];
}

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrls: ['./form-array-example.component.scss']
})
export class FormArrayExampleComponent implements OnInit {
  selectedIndex = 0;

  timeTableForm = new FormGroup({
    academicYear: new FormControl(),
    branch: new FormControl(),
    grade: new FormControl(),
    id: new FormControl(),
    school: new FormControl(),
    school_day: new FormControl(),
    structure: new FormArray([
    ]),
  })

  keys = [
    'Break*',
    'Periods*',
    'Start Time*',
    'End Time*',
    'Action'
  ]

  tempPeriodStructure = {
    fields: [
      {
        key: 'Break',
        inputType: 'radio',
        formControlName: "",
        class: "form-check-input "
      },
      {
        key: 'Periods',
        inputType: 'text',
        formControlName: "",
        class: "form-control "
      },
      {
        key: 'StartTime',
        inputType: 'text',
        formControlName: "",
        class: "form-control "
      },
      {
        key: 'StartTime',
        inputType: 'text',
        formControlName: "",
        class: "form-control "
      },
      {
        key: 'StartTime',
        inputType: 'action',
        formControlName: "",
        class: ""
      },
    ]
  }

  tabs: TabType[] = [
    {
      label: 'Monday',
      periods: [this.tempPeriodStructure]
    },
    {
      label: 'Tuesday',
      periods: [this.tempPeriodStructure],
    },
    {
      label: 'Wednesday',
      periods: [this.tempPeriodStructure]
    },
    {
      label: 'Thursday',
      periods: [this.tempPeriodStructure]
    },
    {
      label: 'Friday',
      periods: [this.tempPeriodStructure]
    },
  ];
  form = new FormArray(this.tabs.map(() => new FormGroup({})));
  options = this.tabs.map(() => <FormlyFormOptions>{});

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i <= 5; i++) {
      this.getStructure().push(this.addStructure());
    }
  }

  addStructure() {
    return new FormGroup({
      day: new FormControl(),
      periods: new FormArray([])
    })
  }

  getStructure(): FormArray {
    return this.timeTableForm.get('structure') as FormArray;
  }


  submit() {
    console.log(this.form)
    // alert(JSON.stringify(this.model));
  }
  getTabIndex(index: number) {
    console.log(index);
    this.selectedIndex = index;
  }

}