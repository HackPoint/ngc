import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cdk } from '@ngc/cdk';


@NgModule({
  imports: [CommonModule],
})
export class UiModule {
  constructor() {
    console.log(cdk());
  }
}
