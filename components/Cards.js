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
// console.log(divClassCardsContainer)

const getArticles = axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then((res) => {
        
        console.log(res.data.articles)

        for (let i = 0; i < 18; i++) {
        let jsarticles = res.data.articles.javascript[i]
        let bsarticles = res.data.articles.bootstrap[i]
        let tarticles = res.data.articles.technology[i]
        let jqarticles = res.data.articles.jquery[i]
        let narticles = res.data.articles.node[i]
        
        let jcard = cardCreator(jsarticles)
        let bcard = cardCreator(bsarticles)
        let tcard = cardCreator(tarticles)
        let jqcard = cardCreator(jqarticles)
        let ncard = cardCreator(narticles)

        divClassCardsContainer.appendChild(jcard)
        divClassCardsContainer.appendChild(bcard)
        divClassCardsContainer.appendChild(tcard)
        divClassCardsContainer.appendChild(jqcard)
        divClassCardsContainer.appendChild(ncard)
    }
        
        const setArticles = [];

        // Object.values(res.data.articles.javascript).forEach((property) => {
        //     for (let i = 0; i < Object.length; i++) {

        //         setArticles.push(`Headline: ${property[i]['headline']}, authorName: ${property[i]['authorName']}, authorPhoto: ${property[i]['authorPhoto']}`)

               

        //         let headline = property[i]['headline']
        //         console.log(headline)
        //         let authorName = property[i]['authorName']
        //         console.log(authorName)
        //         let authorPhoto = property[i]['authorPhoto']
        //         console.log(authorPhoto)
                
                


        //     }

            // console.log(setArticles)

        // })





        



    })
    .catch(err => {
        console.log(err)
    })

const cardCreator = (article) => {
    const div1 = document.createElement('div')
    div1.classList.add('card')    // <div class="card">

    const div2 = document.createElement('div')
    div2.classList.add('headline')
    div2.textContent = `${article.headline}`
    // div2.appendChild(headlineText)//   <div class="headline">{Headline of article}</div>

    const div3 = document.createElement('div')
    div3.classList.add('author')//   <div class="author">

    const div4 = document.createElement('div')
    div4.classList.add('img-container')//     <div class="img-container">

    const img = document.createElement('img')
    img.src = `${article.authorPhoto}`//       <img src={url of authors image} />

    const span = document.createElement('span')//     <span>By {author's name}</span>
    span.textContent = `By ${article.authorName}`

    div1.appendChild(div2)
    div1.appendChild(div3)
    div3.appendChild(div4)
    div4.appendChild(img)
    div3.appendChild(span)
    // console.log(div1)

    div1.addEventListener('click', (event) => {
        console.log(`${article.headline}`)
    })

    return div1

    //     </div>
    //   </div>
    // </div>

}

console.log(divClassCardsContainer)





