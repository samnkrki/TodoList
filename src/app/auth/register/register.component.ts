import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from './../services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	user = {
		email: '',
		password: '',
		confirmPassword: ''
	}

	constructor(
		public authService: AuthService,
		public router: Router,
		public snackBar: MatSnackBar
	) { }

	ngOnInit() {
	}

	submit() {
		this.authService.register(this.user)
			.subscribe(user => {
				console.log(user);
				this.router.navigate(['login']);
				this.snackBar.open('Signup Success', 'Success', {
					duration: 3000
				});
			}, e => {
				console.log(e);
				this.snackBar.open('Signup Failed', 'Error', {
					duration: 3000
				})
			})

	}


}
