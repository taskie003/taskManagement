import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
	selector: 'app-userlist',
	templateUrl: './userlist.page.html',
	styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {
	disableInput=true;
	IsChecked=false;
	hideMe=false;
	className: string = 'one-class';
	constructor(
			public router: Router,
			) { }

	ngOnInit() {
	}
	hanglePress(){
		console.log('press');
			// this.IsChecked=false;
			if (this.hideMe) {
				console.log(1)
				this.hideMe = false;
				this.IsChecked = false;
				this.className = 'selected';
			}
			else{
				this.hideMe = true;
				this.IsChecked = true;
			}
		};

		handleClick(){
			console.log('clicked');	
			this.hideMe = false;
			this.router.navigateByUrl('createtask');
		}
	}
