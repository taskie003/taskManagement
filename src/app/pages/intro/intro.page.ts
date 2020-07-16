import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
	selector: 'app-intro',
	templateUrl: './intro.page.html',
	styleUrls: ['./intro.page.scss'],
})

// @ViewChild('slides') ionSlides: IonSlides;

export class IntroPage implements OnInit {

slideOpts = {
	initialSlide: 0,
	speed: 500
};
constructor() { }

ngOnInit() {
}

	nextSlide(slides){
		slides.slideNext();
	}

	

}
