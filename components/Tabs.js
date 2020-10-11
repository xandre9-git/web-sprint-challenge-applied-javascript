// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// container to hook onto
const divTopics = document.querySelector('div.topics')

// axios data to get and use
const dataTopics = axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(res => {
        let topics = res.data.topics // set topic to get array data for list of trending topics

        res.data.topics.forEach(res => {  // create for each loop that takes the array
            let tab = tabCreator(res)  // creates a variable called tab that uses tabcreator function
            divTopics.appendChild(tab)  // append data (topic) to parentnode(divTopics) and then repeat above
        })

    })
    .catch(err => {  // err function in case promise is unfulfilled
        console.log(err)
    })

// div tab creator function
const tabCreator = (arr) => {  // function that creates div tabs for trending topic
    const divTab = document.createElement('div')  // create var that creates a a div element
    divTab.classList.add('tab') // assign that div element a class of tab

    const topicTextNode = document.createTextNode(arr)  // create a textnode for the topics since they are coming from an array
    divTab.appendChild(topicTextNode) // append the textnode to the div element

    return divTab // return the function to complete
}


console.log(divTopics)








