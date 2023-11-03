//your code here
function strip (touristSpotsName){
	return touristSpotsName.replace(/^(a |the |an )/i,'').trim();
}
const sortedBand = touristSpots.sort((a,b)=>strip(a)>strip(b)?1:-1);
// Document.querySelector(#bands).innerText = sortedBand.map(band=>'<li>${band}</li>').join('');