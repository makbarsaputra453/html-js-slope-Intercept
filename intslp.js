  const xindex= [4,6,7,10,11,16]; const yindex= [2,3,4,5,6,8]
//data disini berupa x melandai terhadap y sehingga m harusnya mendekati 0.5

let sumx = 0;for (let i = 0; i < xindex.length; i++){sumx += xindex[i];}
let sumy = 0;for (let i = 0; i < yindex.length; i++){sumy += yindex[i];}
let sumx2 = 0;for (let i = 0; i < xindex.length; i++){sumx2 += (Math.pow(xindex[i],2));}
let sumxy = 0;for (let i = 0; i < yindex.length; i++){sumxy += (xindex[i]*yindex[i]);}
let lengthdata = xindex.length;
var slope = (lengthdata*sumxy-sumx*sumy)/(lengthdata*sumx2-Math.pow(sumx,2));//hasilnya 0,5 dan 2,8333
var intersept= ((sumy*sumx2)-(sumx*sumxy))/(lengthdata*(sumx2-(Math.pow(sumx,2))));
xclhasil = slope*xindex[0]-intersept;

document.getElementById('datambcxy').innerHTML='slope yang dimiliki '+slope+' dengan nilai intersep '+intersept+' dan hasil y untuk x<sub>1</sub> : '+xclhasil ;
document.querySelector('#xindex').innerHTML = xindex;
document.querySelector('#yindex').innerHTML = yindex;
  
alert('test : '+sumx+' - '+sumy+' - '+sumx2+' - '+sumxy+' - '+lengthdata);
