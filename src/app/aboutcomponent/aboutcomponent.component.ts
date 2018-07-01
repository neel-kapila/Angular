import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aboutcomponent',
  templateUrl: './aboutcomponent.component.html',
  styleUrls: ['./aboutcomponent.component.css']
})
export class AboutcomponentComponent implements OnInit {

  constructor() { }

  contactform;

  ngOnInit() {

  this.contactform =  new FormGroup({
  firstname : new FormControl("firstname"),
  lastname : new FormControl("lastname"),
  subject : new FormControl("country")


 });
}
  

}
