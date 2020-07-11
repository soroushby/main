import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
})
export class AboutmeComponent implements OnInit {
  informations = [
    { name: 'Education', value: 'dada' },
    { name: 'Biography', value: 'dada' },
    { name: 'Experiences', value: 'dada' },
    { name: 'Medical interests', value: 'dada' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
