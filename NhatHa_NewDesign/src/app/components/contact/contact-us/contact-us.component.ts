import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendMailService } from 'src/app/services/send-mail.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'nh-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less']
})
export class ContactUsComponent implements OnInit {
  validateForm: FormGroup;
  currentLang = 'vn';

  submitForm = (value: any) => {
    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    this.sendMailService.sendMail(value).subscribe(
      response => {
       if (response.Code === 201) {
         this.messageService.success(
           this.currentLang === 'vn' ?
           'Yêu cầu của quý khách đã được tiếp nhận. Xin chân thành cám ơn!'
           :
           'Your inquiries have been sent. Thank you very much!'
         );
         this.resetForm();
       } else {
        this.messageService.error(
          this.currentLang === 'vn' ?
          'Hệ thống hiện không sẵn sàng. Quý khách vui lòng thử lại sau!'
          :
          'Service is now unavailable. Please try again later!'
        );
       }
      },
      error => {
        this.messageService.error(
          this.currentLang === 'vn' ?
          'Có lỗi xảy ra. Xin quý khách vui lòng thử lại sau!'
          :
          'Server error. Please try again later!'
        );
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
