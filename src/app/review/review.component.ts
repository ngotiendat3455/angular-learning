import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

interface Person {
  name: string;
  job: string;
  image: string;
  text: string;
  id?: number;
}

const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
] as Person[];

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  index = 0;
  people: Person[] = reviews;
  person = this.people[this.index];
  faChevronLeft =faChevronLeft;
  faChevronRight = faChevronRight;
  faQuoteRight = faQuoteRight;

  checkNumber = (number: number) => {
    if (number > this.people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return this.people.length - 1;
    }
    return number;
  };
  updatePerson(): void {
    this.person = this.people[this.index];
  }
  nextPerson = () => {
    let newIndex = this.index + 1;
    newIndex =  this.checkNumber(newIndex);
    this.index = newIndex;
    this.updatePerson();
  }

  prevPerson = () => {
    let newIndex = this.index - 1;
    newIndex =  this.checkNumber(newIndex);
    this.index = newIndex;
    this.updatePerson();
  }

  randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * this.people.length);
    if (randomNumber === this.index) {
      randomNumber = this.index + 1;
    }
    this.index = this.checkNumber(randomNumber);
    this.updatePerson();
  };
}
