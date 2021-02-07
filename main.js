let searchSelectElement = document.querySelector(".search-select")
let searchFormElement = document.querySelector(".search-form")
let searchInputElement = document.querySelector(".search-input");
let moviesListElement = document.querySelector(".movies-list");


searchFormElement.addEventListener("submit", event => {
    event.preventDefault();
    moviesListElement.textContent = "";
    let searchInputValue = searchInputElement.value;
    let searchSelectValue = searchSelectElement.value;
    
    let filteredMovies = getMoviesByOptions(searchInputValue, searchSelectValue)
    
    renderData(filteredMovies);
})

function renderData(array){
    if(array.length){
        for(let item of array){
            let newLiElement = document.createElement("li");
            newLiElement.classList.add("item")
            newLiElement.textContent = item.title;
            moviesListElement.appendChild(newLiElement);
        }
    }
}





function getMoviesByOptions(name, year){
    let filteredMovies = []
    for(let movie of kinolar){
        let movieNameGetSearchName = movie.title.toLowerCase().includes(name)
        if(movieNameGetSearchName && year == movie.year){
            filteredMovies.push(movie)
        }
    }
    
    return filteredMovies;
}





















setYears()


function setYears(){
    let years = []
    for(let item of kinolar){
        let indexOfYear = years.indexOf(item.year)
        if(indexOfYear == -1){
            years.push(item.year)
            
        }
    }
    
    years = years.sort((a, b) => a - b)
    
    for(let year of years){
        // console.log(year);
        let newOptionElement = document.createElement("option");
        newOptionElement.classList.add("option")
        newOptionElement.setAttribute("value", year);
        newOptionElement.textContent = year;
        searchSelectElement.appendChild(newOptionElement)
    }
}