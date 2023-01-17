const countries = document.querySelector("#numberOfCountries");
countries.innerText = `Total numbers of Countries: ${countries_data.length}`

const countrisName= [];

countries_data.map((ele)=>{
    countrisName.push(ele.name.toLowerCase());

}) 

function startingWordFunction(){
   const cardContainer = document.getElementById("cardContainer");
     
   const inputEle= document.getElementById("countryName");
   inputEle.setAttribute("onkeyup", "startingWordFunction()")

   const input =document.getElementById("countryName");

   const matchCountries =[];
   cardContainer.innerHTML ="";

   for(let i=0; i<countrisName.length; i++){
    const country = countrisName[i].startsWith(input.value.toLowerCase());
  
    if(country){
        matchCountries.push( countrisName[i]);
        cardContainer.innerHTML += `
         <div class="startsearch">
         <p>${countrisName[i]}</p>
         </div>
        `
    }
  
    const numberOfResults = document.getElementById("searchResults");
    numberOfResults.innerText = `Countries starting with ${input.value} are ${matchCountries.length}`
  
   }
   input.value.style.color ="green";

}
function searchAnyWordFunction(){
    const cardContainer = document.getElementById("cardContainer");
    const inputEle= document.getElementById("countryName");
    inputEle.setAttribute("onkeyup", "searchAnyWordFunction()")
    cardContainer.innerHTML ="";

   const input =document.getElementById("countryName");
   const matchCountries =[];

   for(let i=0; i<countrisName.length; i++){
    const country = countrisName[i].includes(input.value.toLowerCase());
  
    if(country){
        matchCountries.push( countrisName[i]);
        cardContainer.innerHTML += `
         <div class="startsearch">
         <p>${countrisName[i]}</p>
         </div>
        `
    }
  
    const numberOfResults = document.getElementById("searchResults");
    numberOfResults.innerText = `Countries starting with ${input.value} are ${matchCountries.length}`

   }
    
}