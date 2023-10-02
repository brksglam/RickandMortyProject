import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  characters: RickAndMortyCharacter[] = [
    {
      id: 1,
      name: 'Rick Sanchez',
      imageUrl: 'https://rickandmortyapi.com/api/character/1'
    },
    {
      id: 2,
      name: 'Morty Smith',
      imageUrl: 'https://rickandmortyapi.com/api/character/2'
    }
  ];

  constructor() {}

  ngOnInit() {
  }

}