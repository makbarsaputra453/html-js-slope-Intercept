function chgxidx(){
	var idxindex = document.querySelector('#xindex');
	idxindex.innerHTML = '['+prompt('')+']';
}
function chgyidx(){
	var idyindex = document.querySelector('#yindex');
	idyindex.innerHTML = '['+prompt('')+']';
}

function calccorel(){
	const xindex = JSON.parse(document.getElementById('xindex').innerHTML);
	const yindex = JSON.parse(document.getElementById('yindex').innerHTML);
	let obnumb = xindex.length;
		let sumx= 0;for (let i = 0; i < xindex.length; i++){sumx += xindex[i];}
	let avgx = sumx/obnumb;
		let sumy= 0;for (let i = 0; i < yindex.length; i++){sumy += yindex[i];}
	let avgy = sumy/obnumb;
	let xcrtrta =0; for (let i = 0; i < xindex.length; i++){xcrtrta += Math.pow((xindex[i]-avgx),2);};
	let istdevx = Math.pow((1/(obnumb-1)*xcrtrta),0.5);
	let xcrtrtb =0; for (let i = 0; i < yindex.length; i++){xcrtrtb += Math.pow((yindex[i]-avgy),2);};
	let istdevy = Math.pow((1/(obnumb-1)*xcrtrtb),0.5);
	//alert('x : '+xindex+' y : '+yindex+' test standar deviasi x : '+istdevx+' dan standar deviasi y : '+istdevy);
	let xcrtrtc = 0;for(i = 0; i < obnumb; i++){xcrtrtc += (((xindex[i]-avgx)/istdevx)*((yindex[i]-avgy)/istdevy))}
	let ccorel = (1/(obnumb-1))*xcrtrtc;
	document.querySelector('#ccorel').innerHTML ='koefisien korelasi : '+ccorel+'<br>standar deviasi x : '+istdevx+'<br>standar deviasi y : '+istdevy;


	let sumx2 = 0;for (let i = 0; i < obnumb; i++){sumx2 += Math.pow(xindex[i],2);}
	let sumxy = 0;for (let i = 0; i < obnumb; i++){sumxy += (xindex[i]*yindex[i]);}
	var slope = (obnumb*sumxy-sumx*sumy)/(obnumb*sumx2-Math.pow(sumx,2));
	var intersept= ((sumy*sumx2)-(sumx*sumxy))/(obnumb*(sumx2-(Math.pow(sumx,2))));
	txhasil = slope*xindex[0]-intersept;
	document.querySelector('#datamcxy').innerHTML='slope : '+slope+'<br>intersep : '+intersept+' <br> tes y untuk x<sub>1</sub> : '+txhasil ;


}


