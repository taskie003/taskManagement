import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
	selector: 'app-deletetask',
	templateUrl: './deletetask.page.html',
	styleUrls: ['./deletetask.page.scss'],
})
export class DeletetaskPage implements OnInit {

	constructor(
		public popoverController: PopoverController,
		public actionSheetController: ActionSheetController,
		public router: Router,
		) { }

	ngOnInit() {
	}

	deletecurrenttask(){
		this.popoverController.dismiss();
		this.router.navigateByUrl('createdtask');
		/*Current Task will get delete..... Currently it will redirect to all task page*/
	}

	dismissdelete(){
		this.popoverController.dismiss();
	}
}
