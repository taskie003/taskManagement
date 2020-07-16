import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NewlistPage } from '../newlist/newlist.page';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async showCreateList(ev: any) {
		const popover = await this.popoverController.create({
			component: NewlistPage,
			cssClass: 'creatList',
			event: ev,
			translucent: true
		});
		return await popover.present();
	}

}
