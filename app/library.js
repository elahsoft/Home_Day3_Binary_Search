'use strict';

Array.prototype.toTwenty = function() {
    for (var i = 0; i < 20; i++) {
      
        this[i] = i+1;
        //console.log(this[i]);
    }
    return this;
};

Array.prototype.toForty = function() {
    var j = 0;
    for (var i = 0; i < 40; i=i+2) {
        this[j] = i+2;
        
        j = j+1;
    }

    return this;
};

Array.prototype.toOneThousand = function() {
    var j = 0;
    for (var i = 0; i < 1000; i=i+10) {
        this[j] = i+10;
        
        j = j+1;
    }

    return this;
};


Array.prototype.search = function(number){

    var lo = 0,
        hi = this.length - 1,
        mid,
        count = 0,
        element;
    if(this[this.length-1] == number){
      return {"count":0,
                    "index":this.length-1,
                    "length":this.length};
    }
    else{
        while (lo <= hi) {

            mid = ((lo + hi) >> 1);
            element = this[mid];
            if (element < number) {
                lo = mid + 1;
            } else if (element > number) {
                hi = mid - 1;
            } else {
                return {"count":count,
                    "index":mid,
                    "length":this.length};
            }

            count = count + 1;
        }
        return {"count":count,
                    "index":-1,
                    "length":this.length};
        }

    /*var array1 = [];
    var array2 = [];
    var count;
    var first = true;
    var index;
    var originalLength;
    var found;
    var element;
    var mid = 0;

    if(first === true){
      count = 1;
      originalLength = this.length;
      found = false;
    }  
    else{
      count = count + 1;
    }

    if(this.length > 1){
      console.log(this[0]+"p");
       mid = Math.ceil(this.length/2);
      element = this[mid];
      
      if(number == element){//we are lucky simply return
        console.log(1);
        found = true;
        index = mid;
        //return ;
        }
      else{//we have less luck
        first = false;
        count = count+1;
        array1 = this.slice(0, mid);
        array2 = this.slice(mid+1, this.length-1);
        console.log("mid="+mid+"array="+this);
        //recursively keep searching binarily - if there's anything like that
        array1.search(number);
        array2.search(number);
  
      }
    
    }
    else{
      console.log("array="+this);
      if(this[0] === number){
        found = true;
        console.log(2);
        //return;
      }
      else{
        console.log(this);
        //return;
      }
    }

    if(found === true){
      return {"count":count,
                "index":mid,
                "length":originalLength};
    }*/
};


