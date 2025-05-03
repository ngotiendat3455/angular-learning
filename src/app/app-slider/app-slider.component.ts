import { Component, OnDestroy, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
export interface Person {
  id: number;
  image: string;
  name: string;
  title: string;
  quote: string;
}
const people: Person[] = [
  {
    id: 1,
    image: 'https://fastly.picsum.photos/id/17/200/300.jpg?hmac=a_Eowf7JMfHVEQi6MENyokjh5hhzVOqoXH6pUXxYKtU',
    name: 'maria ferguson',
    title: 'office manager',
    quote:
      'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
  },
  {
    id: 2,
    image: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    name: 'john doe',
    title: 'regular guy',
    quote:
      'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
  },
  {
    id: 3,
    image: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
    name: 'peter smith',
    title: 'product designer',
    quote:
      'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
  },
  {
    id: 4,
    image: 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    name: 'susan andersen',
    title: 'the boss',
    quote:
      'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
  },
];


@Component({
  selector: 'app-app-slider',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './app-slider.component.html',
  styleUrl: './app-slider.component.scss'
})
export class AppSliderComponent implements OnDestroy, OnInit {
  people = people;
  currentIndex = 0;
  private slider: any = null;

  faChevronLeft =faChevronLeft;
  faChevronRight = faChevronRight;
  faQuoteRight = faQuoteRight;
  ngOnInit(): void {
    this.startSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.slider);
  }

  startSlide() {
    this.slider = setInterval(() => {
      this.currentIndex = this.currentIndex + 1;
      this.checkIndexBounds();
    }, 5000);
  }

  prevSlide() {
    this.currentIndex -= 1;
    this.checkIndexBounds();
  }

  nextSlide() {
    this.currentIndex += 1;
    this.checkIndexBounds();
  }

  private checkIndexBounds() {
    const lastIndex = people.length - 1;
    if (this.currentIndex < 0) {
      this.currentIndex = lastIndex;
    }
    if (this.currentIndex > lastIndex) {
      this.currentIndex = 0;
    }
  }

  getSlideClass(personIndex: number): string {
    const lastIndex = this.people.length - 1;

    if (personIndex === this.currentIndex) {
      return 'activeSlide';
    }
    // Check if it's the previous slide, handling wrap around from 0 to lastIndex
    if (personIndex === this.currentIndex - 1 || (this.currentIndex === 0 && personIndex === lastIndex)) {
      return 'lastSlide';
    }
    // Otherwise, it's a future slide
    return 'nextSlide';
  }
}
