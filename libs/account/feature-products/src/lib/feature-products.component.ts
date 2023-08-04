import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export class ProductForm extends FormGroup {
  constructor() {
    super({
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      quantity: new FormControl(),
    });
  }
}

@Component({
  selector: 'main-project-feature-products',
  templateUrl: './feature-products.component.html',
  styleUrls: ['./feature-products.component.scss'],
})
export class FeatureProductsComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  showFiller = false;
  http = inject(HttpClient);

  form = new ProductForm();

  onSubmit() {
    if (this.form.valid) {
      this.http.post('/api/product', this.form.value).subscribe(console.log);
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
