import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendMailService } from 'src/app/services/send-mail.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import Constants from '../../../helpers/constants';

@Component({
  selector: 'nh-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less']
})
export class ContactUsComponent implements OnInit {
  validateForm: FormGroup;

  submitForm = (value: any) => {
    const currentLang = localStorage.getItem(Constants.CurrentLanguage) || 'vi';

    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    this.sendMailService.sendMail(value).subscribe(
      response => {
        if (response.Code === 201) {
          this.messageService.success(
            currentLang === 'vi' ?
              'Yêu cầu của quý khách đã được tiếp nhận. Xin chân thành cám ơn!'
              :
              'Your inquiries have been sent. Thank you very much!'
          );
          this.resetForm();
        } else {
          this.messageService.error(
            currentLang === 'vi' ?
              'Hệ thống hiện không sẵn sàng. Quý khách vui lòng thử lại sau!'
              :
              'Service is now unavailable. Please try again later!'
          );
        }
      },
      error => {
        this.messageService.error(
          currentLang === 'vi' ?
            'Có lỗi xảy ra. Xin quý khách vui lòng thử lại sau!'
            :
            'Server error. Please try again later!'
        );
        console.log('[Send mail error] ', error);
      }
    );
  }

  resetForm = () => {
    this.validateForm.reset();

    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  constructor(
    private fb: FormBuilder,
    private sendMailService: SendMailService,
    private messageService: NzMessageService,
  ) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', [Validators.required]],
      inquiry: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

}
