import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'complex-form',
  template: `
<div class="jumbotron">
    <h2>Reactive Form</h2>
    <form>
      <div class="form-group">
        <label>First Name:</label>
        <input class="form-control" type="text" placeholder="John" >
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input class="form-control" type="text" placeholder="Doe" >
      </div>
      <div class="form-group">
        <label>Gender</label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="gender" value="Male" >
          Male
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="gender" value="Female" >
          Female
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="gender" value="Other" >
          Other
        </label>
      </div>
      <div class="form-group">
        <label>Activities</label>
      </div>
      <label class="checkbox-inline">
        <input type="checkbox" value="tennis" name="tennis" > Tennis
      </label>
      <label class="checkbox-inline">
        <input type="checkbox" value="football" name="football" > Football
      </label>
      <label class="checkbox-inline">
        <input type="checkbox" value="chess" name="chess" > Chess
      </label>
      <div class="form-group">
        <button type="submit" class="btn btn-default">Submit</button>
      </div>
    </form>
  </div>
  `
})
export class ComplexFormComponent {}
