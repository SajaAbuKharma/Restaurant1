"use strict";



const AllFood = [];



function FoodConstructer(FoodName, Type, Price) {
    
    this.FoodName = FoodName;
    this.Type = Type;
    this.Price = Price;
    this.ID= this.CreatID();
    AllFood.push(this);
}