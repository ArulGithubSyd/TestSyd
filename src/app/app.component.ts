/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'premiumCalc';
}*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Customer } from '../models/customer.model'; 
import { Occupation } from '../models/occupation.model';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    calcPremiumForm: FormGroup;
    occupations = [];
    submitted = false;
    premium: number;
    dateTime = new Date();
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.calcPremiumForm = this.formBuilder.group({
          name: ['', Validators.required],
          age: ['', Validators.required],
          dob: ['', Validators.required],
          occupation: ['', Validators.required],
          dsi: ['', Validators.required]//,
         // occupations: ['']
        });
        this.dateTime.setDate(this.dateTime.getDate());
        this.occupations = this.getOccupations();

       
    }
    getOccupations() {
      return [
        { id: '1', name: 'Cleaner', rating: 3 },
        { id: '2', name: 'Doctor', rating: 1  },
        { id: '3', name: 'Author', rating: 2  },
        { id: '4', name: 'Farmer', rating: 4  },
        { id: '5', name: 'Mechanic', rating: 4 },
        { id: '6', name: 'Florist', rating: 3 }
      ];
    }


    // convenience getter for easy access to form fields
    get f() { return this.calcPremiumForm.controls; }

    onSubmit() {
        this.submitted = true;
        
        // stop here if form is invalid
        if (this.calcPremiumForm.invalid) {
            return;
        }
        this.CalculateDeathPremium();
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.calcPremiumForm.value))
    }

     CalculateDeathPremium()
    {
     alert('calcPremiumForm');
    }
}

