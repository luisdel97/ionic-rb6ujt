import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  url = 'https://api.covid19api.com';

  countryList = [];
  favList = [];

  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.getCountry();
    let fav = localStorage.getItem('FAVLIST');
    if (fav) {
      this.favList = JSON.parse(fav);
    }
  }

  getCountry() {
    let url = this.url + '/countries';
    this.http.get(url, { observe: 'response' }).subscribe(
      (data: any) => {
        this.countryList = data.body;
        console.log('Country List', this.countryList);
      },
      (err: HttpErrorResponse) => {
        console.log('Something Went Wrong');
      }
    );
  }

  addFav(country) {
    this.favList.push(country);
    localStorage.setItem('FAVLIST', JSON.stringify(this.favList));
    console.log(this.favList, "test and test ");
  }

  removeFav(i) {
    this.favList.splice(i, 1);
    console.log(this.favList);

    localStorage.setItem('FAVLIST', JSON.stringify(this.favList));
  }
}
