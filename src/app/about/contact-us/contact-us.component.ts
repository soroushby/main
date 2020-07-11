import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  informations = [
    { name: 'Education', value: 'dada' },
    { name: 'Biography', value: 'dada' },
    { name: 'Experiences', value: 'dada' },
    { name: 'Medical interests', value: 'dada' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
