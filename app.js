// load current bitcoin price
// set variables for blanks & create objects for products
// create button
// select random object from array
// onclick, calculate current value & percent change
// populate blank fields w/ item name & current value & percent change & image of item
// push out the item from the original array


// Set variable for BTC Price
let btcPrice = 40000

// Fetch current BTC Price from Coindesk API
function getBTCPrice() {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then((response) => response.json()
  .then(data => {
    console.log(data.bpi.USD.rate_float);
    btcPrice = data.bpi.USD.rate_float;
    })
  )}

// Invoke BTC Price Fetch
getBTCPrice()

// Identify HTML Elements
const shuffleButton = document.getElementById('shuffle');
const product = document.getElementById('stupid');
const currentPrice = document.getElementById('amount')
let percentage = document.getElementById('percent')
let productImage = document.getElementById('productImage')
let fuckinSwitch = document.getElementById('fuckin')
let historics = document.getElementById('historical')
// const replaceText = "if u bought" + "\n" + "bitcoin instead" + "\n" + "of fuckin" + "\n" + "tesla," + "\n" + "you'd have $7,408,000."

let buttonPhrases = ["I should've listened to my friend.", "Bruhh", "Warren Buffet is a bum.", "Big F", "Fat L", "FML", "That internship was not worth it.", "This is fine. I'm fine. :)", "Fuck."]


shuffleButton.onclick = function shuffle() {
  // Set Initial Variables
    let randMax = productArray.length
    let randMaxTwo = buttonPhrases.length
    let randomIndex = Math.floor(Math.random() * randMax)
    let randomIndexTwo = Math.floor(Math.random() * randMaxTwo)
    let randomProduct = productArray[randomIndex]
    let randomPhrase = buttonPhrases[randomIndexTwo]
    let productName = randomProduct.name
    let currentValue = Math.round((randomProduct.btcAmount) * Math.round(btcPrice))
    console.log(currentValue)
    let percentChange = Math.round((currentValue - randomProduct.originalPrice) / (randomProduct.originalPrice)).toLocaleString() + "x" + "\n" + "return"
    console.log(percentChange)
    let percentElement = document.createElement('h1')
    counter(currentPrice, randomProduct.originalPrice, currentValue, 10000);

    if (randomProduct.singular == true) {
      fuckinSwitch.innerText = "a fuckin"
    } else {
      fuckinSwitch.innerText = "fuckin"
    }

  // Change DOM Elements
    percentElement.innerText = (randomProduct.btcAmount).toFixed(2) + "\n" + "Bitcoin"
    percentElement.id = "percent"
    percentElement.className = "bodyText"
    let percentage = document.getElementById('percent')
    product.innerText = productName
    productImage.src = randomProduct.image
    historics.innerHTML = "<b>Oringal Price:</b> " + "$" + (randomProduct.originalPrice).toLocaleString() + "<br>" + "<b>Release Date: </b>" + randomProduct.release
    percentage.parentNode.replaceChild(percentElement, percentage)
    currentPrice.innerText = "$" + (currentValue).toLocaleString('en')
    productArray.splice(randomIndex, 1)
    shuffleButton.innerText = randomPhrase
  // Console Logs
    console.log(productArray)
    console.log(productName + ", " + currentValue + ", " + percentChange);
    console.log(randomProduct)
    console.log(btcPrice)
}

function counter(id, start, end, duration) {
      shuffleButton.disabled = true,
      obj = id,
      current = start,
      range = end - start,
      increment = Math.floor((end - start) / 100)
      step = Math.floor(duration / range),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = "$" + (current).toLocaleString()
        if (current > end) {
          obj.textContent = "$" + (end).toLocaleString();
          clearInterval(timer);
          shuffleButton.disabled = false
        }
      }, step);
  }



// Product Objects
  const shakeWeight = {
    name: 'Shakeweight',
    originalPrice: 29,
    singular: true,
    btcAmount: 290000.01,
    image: 'btcimage/Shake Weight.png',
    release: "7/1/09"
  }

  const beatsSolo = {
    name: 'Beats Solo HD',
    originalPrice: 199,
    singular: true,
    btcAmount: 3980.13,
    image: "btcimage/Beats Hd.png",
    release: "12/1/10",
  }

  const sapiens = {
    name: 'Sapiens',
    originalPrice: 24.99,
    singular: false,
    btcAmount: 833.48,
    image: "btcimage/Sapiens.png",
    release: "1/1/11",
  }

  const tesla = {
    name: 'V1 Tesla',
    originalPrice: 69420,
    singular: true,
    btcAmount: 680.588235,
    image: "btcimage/Tesla v1.png",
    release: "6/22/13",
  }

  const nintendoDS = {
    name: 'Nintendo 3DS',
    originalPrice: 249,
    singular: true,
    btcAmount: 286.206897,
    image: "btcimage/Nintendo DS.png",
    release: "3/27/11",
  }

  const oculus = {
    name: 'Oculus',
    originalPrice: 299,
    singular: true,
    btcAmount: 26.2972735,
    image: "btcimage/Oculus.png",
    release: "8/1/12",
  }

  const goPro = {
    name: 'GoPro Hero 3',
    originalPrice: 299,
    singular: true,
    btcAmount: 23.142,
    image: "btcimage/Go Pro.png",
    release: "12/1/12",
  }

  const starbucks = {
    name: 'Starbucks in 2011',
    originalPrice: 4.95,
    singular: true,
    btcAmount: 16.5134,
    image: "btcimage/Starbucks cup.png",
    release: "1/1/11",
  }

  const cardsAgainst = {
    name: 'Cards Against Humanity',
    originalPrice: 25,
    singular: false,
    btcAmount: 7.26744186,
    image: "btcimage/Cards Against Humanity.png",
    release: "5/1/11",
  }

  const iPhone = {
    name: 'Iphone 5',
    originalPrice: 749,
    singular: true,
    btcAmount: 5.84882087,
    image: "btcimage/I phone 5.png",
    release: "9/20/13",
  }

  const googleGlass = {
    name: 'Google Glass',
    originalPrice: 1500,
    singular: false,
    btcAmount: 3.3572068,
    image: "btcimage/Google Glass.png",
    release: "5/14/14",
  }

  const coachellaTickets = {
    name: 'Coachella Tickets',
    originalPrice: 375,
    singular: false,
    btcAmount: 1.68463607,
    image: "btcimage/Coachella tickets.png",
    release: "4/19/15",
  }

  const juicero = {
    name: 'Juicero',
    originalPrice: 699,
    singular: true,
    btcAmount: 1.60644237,
    image: "btcimage/juicero.png",
    release: "3/1/16",
  }

  const ps4 = {
    name: 'PS4',
    originalPrice: 399,
    singular: true,
    btcAmount: 1.07576166,
    image: "btcimage/PS$.png",
    release: "11/13/13",
  }

  const yeezy = {
    name: 'Yeezy 350s',
    originalPrice: 399,
    singular: false,
    btcAmount: 1.593688674,
    image: "btcimage/Yeezys.png",
    release: "6/27/15",
  }

  const juul = {
    name: 'Juul Starter Kit',
    originalPrice: 45,
    singular: true,
    btcAmount: .18722851,
    image: "btcimage/Juul.png",
    release: "5/22/15",
  }

  const hoverboard = {
    name: 'hoverboard',
    originalPrice: 150,
    singular: true,
    btcAmount: .25380711,
    image: "btcimage/Hoverboard.png",
    release: "8/1/14",
  }

  const productArray = [
    shakeWeight,
    beatsSolo,
    sapiens,
    tesla,
    nintendoDS,
    oculus,
    goPro,
    starbucks,
    cardsAgainst,
    iPhone,
    googleGlass,
    coachellaTickets,
    juicero,
    ps4,
    yeezy,
    juul,
    hoverboard
  ];
