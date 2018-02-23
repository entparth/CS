import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import {  RequestOptions } from '@angular/http';
import * as xmlhttprequest from "xmlhttprequest";


/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http,) {
    console.log('Hello ApiProvider Provider');
    this.makeWebCall();

  }


  getPostByListings(){

    return new Promise ((resolve,reject)=>{

      var allListings :any = []
      var url="http://www.cowsales.com.au/listings/?format=json-pretty";


      var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
      var xhr = new XMLHttpRequest();

      xhr.open('GET' , url );
      
      
      var headers = new Headers({
        "Content-type":"application/json",
        "Cookie":"crumb=BT7g7Zw4erdfZTJiNGY0YzIxOTVmZjk1MThmYzk0ZWM4MDgxMGIz; ss_cvr=7a6808c7-6f79-4aa1-85f7-96532a9b2827|1519378761327|1519378761327|1519378761327|1; ss_cid=fc27f9b8-b9a3-4692-94ec-725e01177172; ss_cpvisit=1519378762363; _hjIncludedInSample=1"
      })
      var options = new RequestOptions({headers:headers});

      this.http.get(url, options).map(res=>res.json()).subscribe((data)=>{
        allListings= data;

        


        console.log("allListing", allListings)
        // this.s
       resolve(allListings) 
      }, err=>{
        console.log("err on listings",err)
        reject(err)
      })
    })
  }

// Create the XHR object.
   createCORSRequest(method, url, withCreds) {

    var url:any="http://www.cowsales.com.au/listings/?format=json-pretty";
      var xhr = new XMLHttpRequest();
      if (withCreds) {
          xhr.withCredentials = true;
      }
  
      if ("withCredentials" in xhr) {
          // XHR for Chrome/Firefox/Opera/Safari.
          xhr.open(method, url, true);
      }
      
      // else if (typeof XDomainRequest != "undefined") {
      //     // XDomainRequest for IE.
      //     xhr = new XDomainRequest();
      //     xhr.open(method, url);
      // }
      
      else {
          // CORS not supported.
          xhr = null;
      }
      return xhr;
  };
  
  //Here is the actual call to get data from a remote location
  makeWebCall() {
    var url:any="http://www.cowsales.com.au/listings/?format=json-pretty";
    
      var xhr = this.createCORSRequest('GET', url, false);
      //Send the proper header information along with the request
      xhr.setRequestHeader("Content-type", "application/json");
      //Failure creating request
      if (!xhr) {
          //alert user that this application requires the ability to make CORS requests
          console.log("Error: could not make web call on this system");
          return;
      }
      //success function - handle ok response
      xhr.onload = function () {
          var text = xhr.responseText;
          console.log("Success, the site responded: "+text);
      };
      //failure function - handle bad response
      xhr.onerror = function (err) {
          var str = err;
          console.log(str);
      };
      return xhr.send();
  }



}
