//1.triangleStars 
const triangleStars = function(height) {
    const starCount = function(stars, all) {
          let str = '';
          while(all>0) {
            str = str + stars;
            all=all-1;
          }
          return str;
        }

      let h = height;
      while (h > 0) { 
        const base = h * 2 - 1;
        const stp = starCount('*', base);
        const stp1= starCount(' ', h - 1);
      h =  h - 1;
        
        console.log(stp + stp1);
      };
      

    };
    
    triangleStars(3);


    //2.multiToSingle
const array = function (arr,arr1) {
    let multiToSingle = arr;
    let i = 0;
    while (i < arr1.length) {
      multiToSingle[multiToSingle.length] = arr1[i];
      i = i + 1;
    };
    return multiToSingle
  
  };
  
  const array0 = [14,13,15,17];
  const array1 = [20,22,24,28];
  
  console.log(array(array0,array1));





 //3. findMinMax

  const findMinMax = function (arr,vol) {
  let i = 1;
  if (vol) {
    
    let max = arr[0];
    while (i < arr.length) {
      if (max < arr[i]) {
        max = arr[i];
        
      }
      i = i + 1;
    }  
    console.log(max);

  }
  else { 
    
   let  min =  arr[0];
   while (i < arr.length) {
     if(min > arr[i]) {
       min = arr[i];
     }
     i = i + 1
   }
   console.log(min);

  }
};


findMinMax ([1,4,-4,98,9,14],false);
findMinMax ([1,4,-16,98,9,14],true);



// 4. forEach
  
  
 const forEach = function (arr,val) {

    let i = 0 ;
  while (i<arr.length) {
      val(arr[i]);
      i = i + 1;
  
    };
  };
  const ar1 = [1,5,4,2];
  const va1 = function (a) {
    console.log(a);
    };
  forEach(ar1, va1);


  //5. sum

 const someSum = function(arr){
  let boo = arr.length;
  let sum = 0;
  let hoo = 0;
  while(hoo<boo){
     sum = sum + arr[hoo];
     hoo = hoo + 1
  };
   return sum;
}
  console.log(someSum([4,3,6,7]))

  


 // 6. reverse


const reverse = function(string) {
  let str = string.length -1;
  let strr = "";
    while(str >= 0) {
    strr = strr + string[str];
    str = str - 1;
  };
  return strr;
}
console.log(reverse("save Me from this hell"))



// 7. chekerBoard

const checkerBoard = function (n) {
  let i = 0;  while(i < n)  {
    if (i%2===1) {
      let stp = " ";
      let doo = n 
      while (doo > 0) {
        stp = stp + "*";
        doo = doo - 1;
      }
      i = i + 1;
      console.log(stp);      
    } 
    else {

    let stp = "";
    let doo = n 
    while (doo > 0) {
      stp = stp + "*";
      doo = doo - 1;
    }
      i = i + 1;
      console.log(stp);      
  }

  }
};

checkerBoard (7); 





