import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Jsonp } from '@angular/http';



@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})
export class HomePage {

	input = "";
	callResult: any;
	results = [];

	constructor(public navCtrl: NavController, private _jsonp: Jsonp) {
	}

	getSearchLink() {
		return "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=&titles=albert+einstein&generator=search&utf8=1&exsentences=1&exlimit=max&exintro=1&explaintext=1&gsrsearch=" 
		+ this.input.split(" ").join("+") + "&gsrnamespace=0&gsrlimit=10&callback=JSONP_CALLBACK";
	}

	getRandomLink() {
		return "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=Main+Page&generator=random&exsentences=1&exlimit=1&exintro=1&explaintext=1&grnnamespace=0&callback=JSONP_CALLBACK"
	}

	callApi(searchType: string) {

		var link = null;

		if (searchType == "random") {
			link = this.getRandomLink();
		}
		else {
			if (this.input != "") {
				link = this.getSearchLink();
			}
		}

		if (link != null) {
			this._jsonp.request(link, { method: 'Get'}).subscribe((res) => {
				this.results = [];
				console.log(res);
				this.callResult = res;
				for (var prop in this.callResult._body.query.pages) {
					var title = this.callResult._body.query.pages[prop].title;
					var text = this.callResult._body.query.pages[prop].extract;
					var actionLink = "https://en.wikipedia.org/wiki/" + title.split(" ").join("_");
	  				this.results.push({title: title, text: text, actionLink: actionLink});
					console.log(this.results);
				}
			});
		}
	}

}
