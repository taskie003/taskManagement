import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../component/popover/popover.component';

@Component({
	selector: 'app-pendingtask',
	templateUrl: './pendingtask.page.html',
	styleUrls: ['./pendingtask.page.scss'],
})
export class PendingtaskPage implements OnInit {

	constructor(
		public actionSheetController: ActionSheetController,
		public router: Router,
		private menu: MenuController,
		public popoverController: PopoverController,
		) { }

	ngOnInit() {
	}


	closeform(){
		this.router.navigateByUrl('createdtask');
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
			}]
		});
		await actionSheet.present();
	}
	async sortActionSheet() {
		const actionSheet = await this.actionSheetController.create({
			header: 'Sort By',
			buttons: [{
				text: 'Due Date',
				// role: 'destructive',
				// icon: 'list-outline',
				handler: () => {
					console.log('Due Date clicked');
				}
			}, {
				text: 'Assignee',
				// icon: 'person-circle-outline',
				handler: () => {
					console.log('Assignee clicked');
				}
			}, {
				text: 'Group',
				// icon: 'arrow-dropright-circle',
				handler: () => {
					console.log('Group');
				}
			}, {
				text: 'Cancel',
				// icon: 'close',
				role: 'cancel',
				cssClass:"border-top",
				handler: () => {
					console.log('Cancel clicked');
				}
			}]
		});
		await actionSheet.present();
	}

}
