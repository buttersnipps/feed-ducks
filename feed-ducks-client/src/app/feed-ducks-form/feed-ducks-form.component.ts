import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeedDucksFormService } from './feed-ducks-form.service';

@Component({
  selector: 'app-feed-ducks-form',
  templateUrl: './feed-ducks-form.component.html',
  styleUrls: ['./feed-ducks-form.component.scss']
})


export class FeedDucksFormComponent implements OnInit {

  @ViewChild('formDirective') private formDirective: NgForm;

  // duckForm =  new FormGroup({
  //   time : new FormControl(''),
  //   food : new FormControl(''),
  //   location : new FormControl(''),
  //   count : new FormControl(''),
  //   foodQuantity : new FormControl('')
  // });

  duckForm : any;

  constructor(private feedDucksFormService: FeedDucksFormService, private fb : FormBuilder, private _snackBar: MatSnackBar) {

  this.duckForm = this.fb.group({
      time : ['', Validators.required],
      food : ['', Validators.required],
      location : ['', Validators.required],
      count : ['', Validators.required],
      foodQuantity : ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    const duckData  = {
      time: this.duckForm.controls.time.value,
      food: this.duckForm.controls.food.value,
      location:this.duckForm.controls.location.value,
      count:this.duckForm.controls.count.value,
      foodQuantity:  this.duckForm.controls.foodQuantity.value
    }

    this.feedDucksFormService.saveForm(duckData).subscribe(data => {data ? this._snackBar.open('Success', '', {duration : 5 * 500} ) : "Error" });

    this.onClear();

    ;
  }

  onClear()
  {
    this.formDirective.resetForm();
  }

}
