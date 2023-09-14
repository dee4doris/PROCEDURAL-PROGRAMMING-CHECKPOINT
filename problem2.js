function dot_product(v1, v2,) {
    let ps =0
    for(i=0; i < v1.length; i++) {
        ps += v1[i] *v2[i];
    }
     return ps;

    }
    //to check if the two vectors are orthogonal
    function checkOrthogonal(v1, v2) {
        return dot_product(v1, v2) === 0;
    }
  //example
  let v1 = [1, 2, 3];
  let v2 = [4, 5, 6];
  console.log(checkOrthogonal(v1, v2));
  v1 =[1, 0, 0];
  v2 =[0, 1, 0];
  console.log(checkOrthogonal(v1, v2));