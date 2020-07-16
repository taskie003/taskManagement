import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PopoverComponent } from '../../component/popover/popover.component';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import { DeletetaskPage } from '../deletetask/deletetask.page';
@Component({
	selector: 'app-viewtask',
	templateUrl: './viewtask.page.html',
	styleUrls: ['./viewtask.page.scss'],
})
export class ViewtaskPage implements OnInit {
	constructor(
		public popoverController: PopoverController,
		public actionSheetController: ActionSheetController,
		public router: Router,
		public modalController: ModalController,
		) { }

	ngOnInit() {
	}
	async moreoptions(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverComponent,
			event: ev,
			translucent: true
		});
		return await popover.present();
	}

	async openCalendar() {

		const options: CalendarModalOptions = {
			title: '',
			color:'primary',
			format:"DD-MM-YYYY"

		};

		let myCalendar =  await this.modalController.create({
			component: CalendarModal,
			componentProps: { options }
		});

		myCalendar.present();
	}

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


	openChat(){
		this.router.navigateByUrl('chat');
	}



	async deletetask(ev: any) {
		const popover = await this.popoverController.create({
			component: DeletetaskPage,
			cssClass: 'deletetask',
			event: ev,
			translucent: true
		});
		return await popover.present();
	}


}
