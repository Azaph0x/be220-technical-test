import { FormControl, FormGroup } from "@angular/forms";

export function getControlForm(controlName: string, form: FormGroup): FormControl {
  return form.controls[controlName] as FormControl;
}
