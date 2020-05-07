/* @author Adit Garg */

/* Imports */
import articleCard from './articleCard.js'

/* Global variables */
let headerHTML

/* Buisnes logic */

/* 
* function initNews(search)
* @param: Search - A URI encoded string for the fetching results
* Initializes the news component - fetches data, parses it, and inserts it into the dom
*/
async function initNews(search){
    let data = await fetchNews(search); // fetchd news
    headerHTML = `<h1 id="covidSearch">${decodeURIComponent(search).replace(/(\+)/g, '')} news</h1>` // ready-up html for news insertion
    if (data.totalResults) {
        parseArticles(data.articles); // parse articles into the dom
    } else{
        return null;
    }

}

/* 
* function parseArticles(articles)
* @param: Articles - A JSON parsed object of articles
* parse each article for dom using the articleCard static method init
*/
function parseArticles(articles){
    let asideInHtml = "";
    for (let article of articles){
        asideInHtml += articleCard.init(article); // creates dom ready articles for insertion
    }
    document.querySelector("aside").innerHTML = headerHTML + asideInHtml; // insert articles into the dom
}

/* 
* function initNews(search)
* @param: Search - A URI encoded string for the fetching results
* fetches news from the api using keywords country name and covid-19
*/
async function fetchNews(search){
    let response = await fetch(`http://newsapi.org/v2/everything?q=${search}&sortBy=relevancy&language=en&apiKey=072ed941d16c4d8b9711f66ac646632f`);
    if (!response.ok){
        console.error("Server was not able to get the info requested");
    }
    response = await response.json();
    return response;
}

/* 
* function fetchDescription(search, elem)
* @param: Search - A URI encoded string for the fetching results
* @param: elem - the popup/ marker causing the query
* fetches description of disaster event from reliefweb api disaster endpoint and injects description (already dom ready) into html
*/
async function fetchDescription(search, elem){
    let response = await fetch(`https://api.reliefweb.int/v1/disasters/${search}`);
    if (!response.ok){
        console.error("Server was not able to get the info requested");
    }
    response = await response.json();
    setDescriptionHtml(response, elem);
    return response;
}

/* 
* function setDescriptionHtml(htmlCode, elem)
* @param: htmlCode - response from the query for description
* @param: elem - the popup/ marker causing the query
* fetches description of disaster event from reliefweb api disaster endpoint and injects description (already dom ready) into html
*/
function setDescriptionHtml(htmlCode, elem){
    let desc = document.querySelector("aside");
    desc.innerHTML = `<span id="titleAl" class="${htmlCode.data[0].fields.status}">&nbsp;${htmlCode.data[0].fields.status.toUpperCase()}</span>`
    desc.innerHTML += `<article id="description"><h3>${elem.innerHTML}</h3>${htmlCode.data[0].fields["description-html"]}</article>`;
}

/* export module */
export {initNews,fetchDescription}