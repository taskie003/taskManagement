import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PopoverComponent } from '../../component/popover/popover.component';
import { ActionSheetController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
@Component({
	selector: 'app-customsort',
	templateUrl: './customsort.page.html',
	styleUrls: ['./customsort.page.scss'],
})
export class CustomsortPage implements OnInit {

	constructor(
		public popoverController: PopoverController,
		public actionSheetController: ActionSheetController,
		public router: Router,
		private menu: MenuController,
		public modalController: ModalController
		) { }

	ngOnInit() {
	}

	

	addtask(){
		this.router.navigateByUrl('createtask');
	}

	async presentActionSheet() {
		const actionSheet = await this.actionSheetController.create({
			header: 'Sort Task By',
			buttons: [{
				text: 'All Task',
				// role: 'destructive',
				// icon: 'list-outline',
				handler: () => {
					console.log('All Task clicked');
				}
			}, {
				text: 'Assigned to me',
				// icon: 'person-circle-outline',
				handler: () => {
					console.log('Assigned to me clicked');
				}
			}, {
				text: 'Assigned by me',
				// icon: 'arrow-dropright-circle',
				handler: () => {
					console.log('Assigned by me clicked');
				}
			// }, {
			// 	text: 'Cancel',
			// 	role: 'cancel',
			// 	cssClass:"border-top",
			// 	handler: () => {
			// 		console.log('Cancel clicked');
			// 	}
			}]
		});
		await actionSheet.present();
	}

	async presentPopover(ev: any) {
		const popover = await this.popoverController.create({
			component: PopoverComponent,
			event: ev,
			translucent: true,
			cssClass:"PopoverComponent",
		});
		return await popover.present();
	}


		async sortActionSheet() {
		const actionSheet = await this.actionSheetController.create({
			header: 'Sort By',
			buttons: [{
				text: 'Time',
				// role: 'destructive',
				// icon: 'list-outline',
				handler: () => {
					// console.log('Due Date clicked');
					this.router.navigateByUrl('createdtask');
				}
			}, {
				text: 'Priority',
				// icon: 'person-circle-outline',
				handler: () => {
					// console.log('Assignee clicked');
					this.router.navigateByUrl('prioritysort');
				}
			}, {
				text: 'Custom',
				// icon: 'arrow-dropright-circle',
				handler: () => {
					// console.log('Group');
					this.router.navigateByUrl('customsort');
				}
			}]
		});
		await actionSheet.present();
	}


}
