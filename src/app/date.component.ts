import { Component, OnInit } from '@angular/core';
import { IMyDpOptions, IMyInputFieldChanged, IMyDateModel } from 'mydatepicker';
import { IMyOptions } from 'mydaterangepicker';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var require: any;
const amSampleTpl: string = require('./date.component.ts');

@Component({
    selector: 'app-date',
    templateUrl: 'date.component.html'
})

export class DateComponent  {


}

