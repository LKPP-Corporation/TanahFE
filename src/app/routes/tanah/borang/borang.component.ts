import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tanah-borang',
  templateUrl: './borang.component.html',
  styleUrls: ['./borang.component.css'],
})
export class TanahBorangComponent implements OnInit, OnDestroy {
  q = {
    username: '',
    email: '',
    gender: '',
  };

  reactiveForm1: FormGroup;
  reactiveForm2: FormGroup;

  translateSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private dateAdapter: DateAdapter<any>,
    private translate: TranslateService
  ) {
    this.reactiveForm1 = this.fb.group({
      username: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      city: [''],
      address: [''],
      company: [''],
      tele: [''],
      website: [''],
      date: [''],
    });

    this.reactiveForm2 = this.fb.group({
      username: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      city: [''],
      address: [''],
      company: [''],
      tele: [''],
      website: [''],
      date: [''],
    });
  }

  ngOnInit() {
    this.translateSubscription = this.translate.onLangChange.subscribe((res: { lang: any }) => {
      this.dateAdapter.setLocale(res.lang);
    });
  }

  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }

  getErrorMessage(form: FormGroup) {
    return form.get('email').hasError('required')
      ? 'validations.required'
      : form.get('email').hasError('email')
      ? 'validations.invalid_email'
      : '';
  }
}
