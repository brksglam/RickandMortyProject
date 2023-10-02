import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
    this.characters = this.charactersService.getCharacters();
    this.characters.sort((a, b) => a.name.localeCompare(b.name));
  }

}