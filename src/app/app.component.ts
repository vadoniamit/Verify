import { Component,OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pname  ='';
  title = 'verify';
  cartValue = 0;
  arrayProd  : any;
  shallowProd :  any;
  products : any =  [
    
    
  ]
  constructor(private httpClient: HttpClient){}

  ngOnInit(){
    this.httpClient.get("assets/data.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    this.shallowProd =  Array.from(Object.create(this.products));
    console.log("shallowProdshallowProd",this.shallowProd)
    console.log(localStorage.getItem("product"))
    if(localStorage.getItem("product") != null){
    this.arrayProd = JSON.parse(localStorage.getItem("product"));
    console.log("arrayProd", this.arrayProd)
    this.cartValue = this.arrayProd.length;
    }
    })
  
  }

  addTocart(id){
    console.log(localStorage.getItem("product"))
    var prod =[];
    if(localStorage.getItem("product") != null){
    var arrayProd = JSON.parse(localStorage.getItem("product"));
    
      var isPresent  = arrayProd.findIndex(x => x.id ===id);
      console.log(isPresent);
      if(isPresent == -1){
        var data = {
          id : id,
          count :   1
        }
        arrayProd.push(data)
      }else {
        arrayProd[isPresent].count = arrayProd[isPresent].count + 1;
        }
        var product = JSON.stringify(arrayProd)
    localStorage.setItem("product",product)
      
    } else {
      var data = {
        id : id,
        count :   1
      }
      prod.push(data)
      var productInit= JSON.stringify(prod)
    localStorage.setItem("product",productInit)
      
    }
    
    this.ngOnInit()      
    }

    remove(id){
      var prod =[];
      if(localStorage.getItem("product") != null){
      var arrayProd = JSON.parse(localStorage.getItem("product"));
      
        var isPresent  = arrayProd.findIndex(x => x.id ===id);
        console.log(isPresent);
        if(isPresent == -1){

        }else {
          arrayProd.splice(isPresent, 1);
          }
          var product = JSON.stringify(arrayProd)
          localStorage.setItem("product",product)
        
      }
    this.ngOnInit()      
      
    }

    searchProduct(){
      console.log("pname", this.pname)
      if(this.pname !=''){
        console.log("aa",this.products)
        
        this.products = this.shallowProd.filter((data) =>  JSON.stringify(data).indexOf(this.pname) !== -1);
      }else{
        console.log("shallowProd",this.shallowProd)
        
        this.products = this.shallowProd
      }
    }
    
}
