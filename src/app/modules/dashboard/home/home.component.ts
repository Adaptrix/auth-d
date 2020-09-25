import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public foodsForm: FormGroup

  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.foodsForm = this.fb.group({
      foods: this.fb.array([])
    })
    this.loadFoods()
  }

  get foods(){
    return this.foodsForm.get('foods') as FormArray;
  }

  addFood(food=''){
    this.foods.push(this.fb.control(food))
  }

  removeFood(i){
    this.foods.removeAt(i)
  }

  onAddFoodClickHandler(){
    this.addFood()
  }

  onRemoveFoodClickHandler(i){
    console.log(i);

    this.removeFood(i)
  }

  loadFoods(){

    let foodsFromServer = [
      {id: 1, value:"wali"},
      {id: 2, value:"bamia"},
      {id: 3, value:"andazi"},
      {id: 4, value:"makande"},
      {id: 5, value:"njegere"},
    ]

    foodsFromServer.forEach((food,index)=>{
      this.addFood(food.value)
    })
  }

}
