import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { RequestOptions } from '@angular/http';
import * as xmlhttprequest from "xmlhttprequest";

@Injectable()
export class ApiProvider {

	/* Very Important: 
	-> If using livereload, use this URL in get, ('/base' +'/listings/?format=json-pretty')
	-> If using Device, use this URL, var url = 'http://www.cowsales.com.au/listings/?format=json-pretty';
	*/
	constructor(public http: HttpClient, ) {
		console.log('Hello ApiProvider Provider');
	}

	getPostByListings() {
		return new Promise((resolve, reject) => {
			var url = 'http://www.cowsales.com.au/listings/?format=json-pretty';


			// Native Http
			this.http.get(url).subscribe((data) => {
				// console.log('Get Post Listing ', data);
				if (data) {
					resolve({listings: data});
				} else {
					reject({msg: 'Listings Not Found'});
				}
			});

		});
	}
}
