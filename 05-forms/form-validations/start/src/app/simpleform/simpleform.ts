import { Component } from '@angular/core';

@Component({
  selector: 'simple-form',
  template : `
<div class="jumbotron">
    <h2>Logic on the Template</h2>
    <form>
      <div class="form-group">
        <label>First Name:</label>
        <input type="text" class="form-control" placeholder="John" name="firstName">
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input type="text" class="form-control" placeholder="Doe" name="lastName">
      </div>
      <div class="form-group">
        <label>Gender</label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="gender" value="Male">
          Male
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="gender" value="Female">
          Female
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="other" value="Other">
          Other
        </label>
      </div>
      <div class="form-group">
        <label>Activities</label>
      </div>
      <label class="checkbox-inline">
        <input type="checkbox" value="hiking" name="tennis"> Tennis
      </label>
      <label class="checkbox-inline">
        <input type="checkbox" value="swimming" name="football"> Football
      </label>
      <label class="checkbox-inline">
        <input type="checkbox" value="running" name="chess"> Chess
      </label>
      <div class="form-group">
        <button type="submit" class="btn btn-default">Submit</button>
      </div>
    </form>
  </div>
  `
})
export class SimpleFormComponent {}
