import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AddcontactPage } from '../addcontact/addcontact.page';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(public popoverController: PopoverController,) { }

  ngOnInit() {
  }

   async addcontact(ev: any) {
		const popover = await this.popoverController.create({
			component: AddcontactPage,
			cssClass: '',
			event: ev,
			translucent: true
		});
		return await popover.present();
	}

}
