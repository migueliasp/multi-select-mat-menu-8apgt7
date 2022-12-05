import {Component} from '@angular/core';

@Component({
  selector: 'menu-multiselect-example',
  templateUrl: 'menu-multiselect-example.html',
  styleUrls: ['menu-multiselect-example.scss']
})

export class MenuMultiselectExample {

  /**
   * Logic for the simple multiselect example
   */

  // Color menu item click handler
  selectColor($event:any) {
    // this stops the menu from closing
    $event.stopPropagation();
    $event.preventDefault();

    // in this case, the check box is controlled by adding the .selected class
    if($event.target) {
      $event.target.classList.toggle('selected');
    }

    // add additional selection logic here.

  }


  /**
   * Advanced multiselect logic 
   */

  // vars used to track selection counts
  selectedAnimalCount = 0;
  selectedAmphibianCount = 0;
  selectedFishCount = 0;
  selectedReptileCount = 0;

  // create arrays of animal types for menus
  amphibians:Animal[] = [
    new Animal('Sonoran desert toad',false),
    new Animal('Western toad',false),
    new Animal('Arroyo toad',false),
    new Animal('Yosemite toad',false),
  ]
  fishes:Animal[] = [
      new Animal('Baikal oilfish',false),
      new Animal('Bala shark',false),
      new Animal('Ballan wrasse',false),
      new Animal('Bamboo shark',false),
      new Animal('Banded killifish',false),
  ];
  reptiles:Animal[]= [
    new Animal('Banded Day Gecko',false),
    new Animal('Banded Gila Monster',false),
    new Animal('Black Tree Monitor',false),
    new Animal('Blue Spiny Lizard',false),
  ]

  // click handler for animal menu items
  selectAnimal($event:any, animal:Animal) {
    // prevent menu from closing
    $event.stopPropagation();
    $event.preventDefault();
    // toggle selected state on clicked animal
    animal.selected = !animal.selected;
    // update selection vars
    this.updateSelectedAnimals();
  }

  // keep track of selected animals (total and by type)
  updateSelectedAnimals() {
    // get count by type
    this.selectedAmphibianCount = this.amphibians.filter( a => a.selected ).length;
    this.selectedFishCount = this.fishes.filter( a => a.selected ).length;
    this.selectedReptileCount = this.reptiles.filter( a => a.selected ).length;
    // calc total
    this.selectedAnimalCount = this.selectedAmphibianCount + this.selectedFishCount + this.selectedReptileCount;
  }

}

// Class used to define animal data structure
export class Animal {
  constructor(
    public name: string,
    public selected: boolean
  ) {}
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */