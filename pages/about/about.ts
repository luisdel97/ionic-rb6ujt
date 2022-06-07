import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  prev_url : any;

  constructor(
    public navCtrl: NavController,
    private sanitizer : DomSanitizer,
    ) {

  }

  onSelectedFile(event){
    let selectedFile = event.target.files;
    this.prev_url = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(selectedFile));
    console.log(selectedFile);
  }



}
