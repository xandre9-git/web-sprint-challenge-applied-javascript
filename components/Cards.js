// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const divClassCardsContainer = document.querySelector('.cards-container')
console.log(divClassCardsContainer)

const getArticles = axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res => {
    // console.log(res.data.articles)
    const articles = res.data.articles
    // console.log(articles)
    
    
    let x = 0
    for (const x in articles) {
        
        // console.log(articles[x])
        if (x === 'headline:') {
            console.log(x)
        } else {
            console.log("Something else.")
        }
        // console.log(`${x}: ${articles[0].authorPhoto}`)
        // console.log(`${x}: ${articles[0].authorName}`)
        // x = x + 1;
        // console.log(x)
        
    }
    
})
.catch(err => {
    console.log(err)
})

const cardCreator = (article) => {
const div1 = document.createElement('div')
div1.classList.add('card')    // <div class="card">

const div2 = document.createElement('div')
div2.classList.add('headline')
const headlineText = document.createTextNode(article.headline)
div2.appendChild(headlineText)//   <div class="headline">{Headline of article}</div>

const div3 = document.createElement('div')
div3.classList.add('author')//   <div class="author">

const div4 = document.createElement('div')
div4.classList.add('img-container')//     <div class="img-container">

const img = document.createElement('img')
img.src = (article.authorPhoto)//       <img src={url of authors image} />

const span = document.createElement('span')//     <span>By {author's name}</span>
span.textContent = `By ${article.authorName}`

div1.appendChild(div2)
div1.appendChild(div3)
div3.appendChild(div4)
div4.appendChild(img)
div3.appendChild(span)
console.log(div1)

return div1

//     </div>
//   </div>
// </div>

}

divClassCardsContainer.appendChild(cardCreator(getArticles))
console.log(divClassCardsContainer)

// console.log(getArticles)
