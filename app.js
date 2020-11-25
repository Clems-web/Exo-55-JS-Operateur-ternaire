let par1 = document.getElementById("para1");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let result = document.getElementById("resultat");
let resultfalse = "Attention c'est inférieur à 0";
let span1Number = parseInt(span1.innerHTML);
let span2Number = parseInt(span2.innerHTML);

result.innerHTML = ( (span1Number === 5) && (span2Number === 12) ) ?
    (span1Number + span2Number) : (span2Number - span1Number);

let resultNumber = parseInt(result.innerHTML);
console.log(resultNumber);

par1.innerHTML = ( (resultNumber - 10) < 0 ) ? par1.innerHTML = resultfalse : par1.innerHTML;