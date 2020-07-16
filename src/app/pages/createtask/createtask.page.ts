import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CalendarModal, CalendarModalOptions,CalendarResult } from 'ion2-calendar';
import { ListPage } from '../list/list.page';
import {format} from "date-fns";
@Component({
	selector: 'app-createtask',
	templateUrl: './createtask.page.html',
	styleUrls: ['./createtask.page.scss'],
})
export class CreatetaskPage implements OnInit {
	date: string;
	
	type: 'string';
	hideMe=false;
	duedate="Due Date";

	

	constructor(
		public actionSheetController: ActionSheetController,
		public router: Router,
		public modalController: ModalController,
		
		) { }

	ngOnInit() {
	}

	// onChange($event) {
	// 	console.log($event);
	// }



	

	async openCalendar() {

		const options: CalendarModalOptions = {
			pickMode: 'single',
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
		
		
		this.duedate = format(new Date( date.dateObj), "eee, MMM dd");
		// format(new Date(this.date.dateObj), "eee yyyy-MM-dd");
		// console.log(date);
		// console.log( format(new Date( date.dateObj), "eee, MMM dd"))
	}


	closeform(){
		this.router.navigateByUrl('createdtask');
	}

	addUser(){
		this.router.navigateByUrl('userlist');
		// this.closeModal();
	}

	async showList() {
		const modal = await this.modalController.create({
			component: ListPage,
			cssClass: 'list-modal'
		});
		return await modal.present();
	};



	// closeModal(){
	// 	// this.ishidden = true;
	// 	console.log("asdas");
	// 	this.modalController.dismiss({
	// 		'dismissed': true
	// 	});

	// }


	async attachmentActionSheet() {
		const actionSheet = await this.actionSheetController.create({
			// header: 'Sort By',
			buttons: [{
				text: 'Document',
				// role: 'destructive',
				icon: 'document-text-outline',
				handler: () => {
					console.log('Document clicked');
				}
			}, {
				text: 'Gallery',
				icon: 'image-outline',
				handler: () => {
					console.log('Gallery clicked');
				}
			}, {
				text: 'Audio',
				icon: 'musical-notes-outline',
				handler: () => {
					console.log('Audio');
				}
			},
			{
				text: 'Camera',
				icon: 'camera-outline',
				handler: () => {
					console.log('camera');
				}
			}]
		});
		await actionSheet.present();
	}

	showHide(){

		if (this.hideMe) {
			this.hideMe = false;
			console.log();
		}
		else{
			this.hideMe = true;	
		}

	}
}
