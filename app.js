// masala 1 for

{
    function son(array) {
      let musbat = 0,
        manfiy = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
          musbat += array[i];
        } else {
          manfiy += array[i];
        }
      }
      return ` ${musbat} ${manfiy}`;
    }
    console.log(son([-4, 5, 8,-10, 43,-15]));
  }


 // masala 1 while
 /*
{
  
    function son(array) {
      let musbat = 0,
        manfiy = 0;
      let i = 0;
      while (i < array.length) {
        if (array[i] > 0) {
          musbat += array[i];
        } else {
          manfiy += array[i];
        }
  
        i++;
      }
      return `${musbat} ${manfiy}`;
    }
    console.log(son([-4, 5, 8 , -10 , 43 , -15]));
  }
    */


  // masala 2 for
/*
  {
    
    function son(array) {
      let sum = 0;
      for (let i = 0; i <= array; i += 2) {
        sum = sum + i;
      }
      return "juft sonlar yigindisi shunga teng ${sum}"
    }
    console.log(son(27));
  }
*/

// masala 2 while 
/*
  {
    function son(array) {
      let sum = 0;
      let i = 0;
      while (i <= array) {
        sum = sum + i;
        i += 2;
      }
      return "juft sonlar yigindisi shunga teng ${sum}"
    }
    console.log(son(54));
  }
    */

  // masala 2 do while
  /*
  {
    function son(array) {
      let sum = 0;
      let i = 0;
      do {
        sum = sum + i;
        i += 2;
      } while (i <= array);
      return "juft sonlar yigindisi shunga teng ${sum}"
    }
    console.log(son(81));
  }
    */






/// While masalalar

// while 1
/*
function son(A, B) {
  let i = 0;
  while (B <= A) {
    i++;
    A -= B;
  }
  return A;
}

console.log(son(17, 5)); 


  */

  //while 2

  /*
  function son(a, b) {
    let i = 0;
    while (b <= a) {
      i++;
      a -= b;
    }
    
    return i; 
  }
  
  console.log(son(21, 4)); 
  
  */

  // while 3

  /*
  function son(n, k) {
    let i = 0;
    while (n <= k) {
      i++;
      k -= n;
    }
    return { qoldiq: k, butun: i };
  }
  
  console.log(son(13, 47)); 
  */

  // while 4

  // While 4 ni ishlay olmadim


