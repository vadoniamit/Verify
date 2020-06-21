import { Component,OnInit } from '@angular/core';

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
    {
      "id":1,
      "name": "item1",
      "price": 175,
      "discount": 5,
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
      },
      {
      "id":2,
      "name": "item2",
      "price": 190,
      "discount": 7,
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
      },
      {
      "id":3,
      "name": "item3",
      "price": 213,
      "discount": 20,
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
      },
      {
      "id":4,
      "name": "item4",
      "price": 217,
      "discount": 18,
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
      },
       {
      "id":5,
      "name": "item5",
      "price": 319,
      "discount": 31,
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
      }
  ]
  

  ngOnInit(){
  this.shallowProd =  Array.from(Object.create(this.products));
    console.log("shallowProdshallowProd",this.shallowProd)
    console.log(localStorage.getItem("product"))
    if(localStorage.getItem("product") != null){
    this.arrayProd = JSON.parse(localStorage.getItem("product"));
    console.log("arrayProd", this.arrayProd)
    this.cartValue = this.arrayProd.length;
    }
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
