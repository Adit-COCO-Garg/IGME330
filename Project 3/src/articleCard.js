export default class articleCard{
    static init({source, author, title, description, url, urlToImage, publishedAt}){
        if (!source){
            source = "NA";
        }
        if (!author){
            author = "NA";
        }
        if (!source){
            source = "NA";
        }
        if (!title){
            title = "NA";
        }
        if (!url){
            url = "NA";
        }
        if (urlToImage == null){
            urlToImage = "NA";
        }
        if (!publishedAt){
            publishedAt = "NA";
        }
        
        let articleString = `<a class="articles" href="${url}" target="_blank" rel="noopener noreferrer"><article class="${source.id}">`
        articleString += `<h3>${title}</h3>`
        
        articleString += `<img src="${urlToImage}" alt="Image related to article" onerror="this.onerror=null; this.src=''">`
        articleString += `<p>${description}</p>`
        articleString += `<span class="subHead">${source.name} ${publishedAt}</span>`
        articleString += `<span class="author">${author}</span>`
        articleString += "</article></a>"
        return articleString;
    }
}