import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarModal, CalendarModalOptions ,CalendarResult } from 'ion2-calendar';
import {format} from "date-fns";
@Component({
	selector: 'app-profileedit',
	templateUrl: './profileedit.page.html',
	styleUrls: ['./profileedit.page.scss'],
})
export class ProfileeditPage implements OnInit {
	dob="";
	
	constructor(
		public modalController: ModalController,
		) { }

	ngOnInit() {
	}
	async openCalendar() {

		const options: CalendarModalOptions = {
			title: '',
			color:'primary',
			format:"DD-MM-YYYY",
			canBackwardsSelected:true,

		};

		let myCalendar =  await this.modalController.create({
			component: CalendarModal,
			componentProps: { options }
		});

		myCalendar.present();

		const event: any = await myCalendar.onDidDismiss();
		const date: CalendarResult = event.data;
		this.dob = format(new Date( date.dateObj), "eee, MMM dd");
	}
}
