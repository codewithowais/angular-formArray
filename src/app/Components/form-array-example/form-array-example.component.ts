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
  structureList: any;
  timeTableForm = new FormGroup({
    academicYear: new FormControl(),
    branch: new FormControl(),
    grade: new FormControl(),
    school_day: new FormControl(),
    id: new FormControl(),
    school: new FormControl(),
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
        formControlName: "school_day",
        class: "form-check-input "
      },
      {
        key: 'Periods',
        inputType: 'text',
        formControlName: "school_day",
        class: "form-control "
      },
      {
        key: 'StartTime',
        inputType: 'text',
        formControlName: "school_day",
        class: "form-control "
      },
      {
        key: 'StartTime',
        inputType: 'text',
        formControlName: "school_day",
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
    {
      label: 'Saturday',
      periods: [this.tempPeriodStructure]
    },
  ];
  // form = new FormArray(this.tabs.map(() => new FormGroup({})));
  // options = this.tabs.map(() => <FormlyFormOptions>{});

  constructor() { }

  ngOnInit(): void {
    this.structureList = this.getStructure().controls
    console.log("Structureeeeeee lISsttttttttttttttttttt",this.structureList)
    const schoolDays = this.timeTableForm.get('school_day')
    for (let i = 0; i <= schoolDays?.value ; i++) {
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
    console.log(this.timeTableForm.get('branch'))
    console.log("structure >>>>>> ",this.timeTableForm.get('structure'))
    // this.timeTableForm.get('structure').
    // console.log(this.form)
    console.log(this.timeTableForm)
  }

  getTabIndex(index: number) {
    console.log(index);
    this.selectedIndex = index;
  }

  addMoreRow(){
    console.log("Add",this.selectedIndex)
    this.tabs[this.selectedIndex].periods.push(this.tempPeriodStructure)
  }

  removeRow(){
    console.log("Remove",this.selectedIndex);
    const currentTab = this.tabs[this.selectedIndex].periods
    currentTab.splice(currentTab.length-1, 1)
  }

}