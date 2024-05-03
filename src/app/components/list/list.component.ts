import { Component } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  searchFormGroup!:FormGroup
  result:any
  constructor(private mealService:MealService){}

  ngOnInit(){
    this.searchFormGroup = new FormGroup({
      search: new FormControl()
    });
  }

  onClick(){
    console.log(this.searchFormGroup.value['search'])

    const search=this.searchFormGroup.value['search']
    this.mealService.getMeals(search).subscribe((response)=>{
      this.result=response['meals']
      console.log(this.result)
    })
  }
}
