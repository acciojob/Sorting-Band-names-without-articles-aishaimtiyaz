//your code here
// Given array of band names
let touristSpotsName = ['The Rolling Stone', 'Led Zeppelin', 'Aerosmith', 'The Beatles', 'Nirvana'];

// Function to remove articles and return the modified band name
// function removeArticles(name) {
//   return name.replace(/^(a |an |the )/i, '').trim();
// }

// Remove articles from all band names
// let modifiedBandNames = bandNames.map(removeArticles);

// Sort the modified band names lexicographically
// modifiedBandNames.sort();

// Create an ul element with id 'band'
// let ulElement = document.createElement('ul');
// ulElement.id = 'band';

// Add li elements to the ul element
// modifiedBandNames.forEach(function (bandName) {
//   let liElement = document.createElement('li');
//   liElement.textContent = bandName;
//   ulElement.appendChild(liElement);
// });

// Append the ul element to the document body or any desired location
// document.body.appendChild(ulElement);
function strip (touristSpotsName){
	return touristSpotsName.replace(/^(a |the |an )/i,'').trim();
}
const sortedBand = touristSpots.sort((a,b)=>strip(a)>strip(b)?1:-1);
Document.querySelector(#bands).innerText = sortedBand.map(band=>'<li>${band}</li>').join('');