import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AnimalService {
  private animals: string[] = ["Cat", "Dog", "Zebra"];

  getAllAnimals() {
    return this.animals;
  }
}

