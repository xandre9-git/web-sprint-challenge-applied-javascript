// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const div = document.createElement('div') // class = header
    const span = document.createElement('span') // class = date
    const h1 = document.createElement('h1')
    const span2 = document.createElement('span') // class = temp

    div.classList.add('header')
    span.classList.add('date')
    span2.classList.add('temp')

    span.textContent = 'March 28, 2020'
    h1.textContent = 'Lambda Times'
    span2.textContent = '98\u00B0'

    div.appendChild(span)
    div.appendChild(h1)
    div.appendChild(span2)

    return div;
}

const divHeaderContainer = document.querySelector('.header-container')
const headerDiv = Header()

divHeaderContainer.appendChild(headerDiv)


