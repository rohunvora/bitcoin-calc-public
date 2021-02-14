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
let boughtElement = document.getElementById('bought')
let bitcoinElement = document.getElementById('bitcoin')
let bitcoinElementTwo = document.getElementById('bitcoinTwo')
let youElement = document.getElementById("you");
let orElement = document.getElementById('or')
let shuffleSub = document.getElementById('shuffleSub')
let buttonClass = document.getElementById('button')
let donateButton = document.getElementById('donate')
// const replaceText = "if u bought" + "\n" + "bitcoin instead" + "\n" + "of fuckin" + "\n" + "tesla," + "\n" + "you'd have $7,408,000."

let buttonPhrases = ["I should've listened to my friend.", "Bruhh", "Warren Buffet is a bum.", "Big F", "Fat L", "FML", "That internship was not worth it.", "This is fine. I'm fine. :)", "Fuck.", "fuck acorns", "fuck robinhood", "compound interest is for cucks", "I have some soul searching to do.", "i --", "stonks?", "shiiiiiit", "kevin o'leary not valid", "is this PTSD??", "🥲", "🪦", "💀", "I don't wanna be poor ", "biden. send the stim.", "oh, that's not that bad", "eh, that was worth it👍", "no regrets ✨", "Wait, how much do kidneys go for?", "i didn't buy that 😅", "yeah, whatever 🙂", "yeah, but i have the S&P 500!", "fuck these nerds. fuck. ", "are we... bitcoin?", "motley fool is cancelled", "i'm sick.", "buy ✍️ when ✍️ elon ✍️ tweets ✍️", "fuck stocks", "soulja boy called it", "fuck it, 💎🙌", "boutta flex my coinbase", "Bitcoin on my neck", "Bitcoin on my wrist", "imma ask for the ring back", "yo, when's my bar mitzvah. oh i'm 43.", "oh. i'm broke.", "yeah, well i like ramen", "is david dobrik giving bitcoin?", "bitcoin is risky. imma stick to paper.", "B.R.E.A.M", "looking for Coin Daddies in my area.", "imma need a prenup", "no.", "uhhhhhhhh", " ¯\_(ツ)_/¯", "I'd rather have DOGE😅🔫", "ELON ELON ELON", "i gotta stop drinking.", "i gotta stop smoking.", "i need help.", "i am getting a therapist", "Why did I start 7 clubs in high school?", "☉ ‿ ⚆", "┌П┐(ಠ_ಠ)", "(⌐⊙_⊙)", "Ray Dalio is washed.", "401k => 401B", "i regret everything", "i regret nothing! 🥸" ]


shuffleButton.onclick = function shuffle() {

    shuffleButton.innerText = "..."
    shuffleButton.disabled = true
    shuffleSub.innerText = ""

    if (productArray.length == 0) {
      shuffleButton.disabled = true;
      buyBitcoin()
    }

    if (productArray.length < 57) {
      donateButton.style.display = "block"
      donateButton.style.textAlign = "center"
    }

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

    if (randomProduct.singular == true) {
      fuckinSwitch.innerText = "of a fuckin"
    } else {
      fuckinSwitch.innerText = "of fuckin"
    }

    // Change DOM Elements
    percentElement.innerText = (randomProduct.btcAmount).toFixed(2) + "\n" + "Bitcoin"
    percentElement.id = "percent"
    percentElement.className = "bodyText"
    let percentage = document.getElementById('percent')
    product.innerText = productName
    productImage.src = randomProduct.image
    historics.innerHTML = "<b>Original Price:</b> " + "$" + (randomProduct.originalPrice).toLocaleString() + "<br>" + "<b>Release Date: </b>" + randomProduct.release
    percentage.parentNode.replaceChild(percentElement, percentage)
    currentPrice.innerText = "$$$"
    productArray.splice(randomIndex, 1)
    buttonPhrases.splice(randomIndexTwo, 1)


    // Final Page
    setTimeout(() => {  counter(currentPrice, randomProduct.originalPrice, currentValue, 10000, randomPhrase); }, 400);
}


function counter(id, start, end, duration, randomPhrase) {
      obj = id,
      current = start,
      range = end - start,
      increment = Math.floor((end - start) / 100),
      step = 0,
      timer = setInterval(() => {
        current += increment;
        obj.textContent = "$" + (current).toLocaleString()
        if (current > end) {
          obj.textContent = "$" + (end).toLocaleString();
          clearInterval(timer);
          shuffleButton.innerText = randomPhrase
          shuffleButton.disabled = false
        }
      }, step);
}


  function getTen() {
     window.location = ("http://coinbase.com/join/vora_10");
  }

  function buyBitcoin() {

    setTimeout(function () {
      shuffleButton.disabled = false;
    }, 2000);

    buttonClass.className = "button"
    buttonClass.style.width = "80%"
    shuffleButton.style.fontSize = "80%"

    shuffleButton.onclick = getTen;
    boughtElement.innerText = "we're out of" + "\n" + "stupid shit..."
    bitcoinElementTwo.innerText = "so, just buy some";
    bitcoinElement.innerText = "";
    fuckinSwitch.style.display = "none"
    product.innerText = "bitcoin already.";
    youElement.innerText = "its really";
    currentPrice.innerText = "not too late."
    orElement.style.display = "none"
    historics.style.display = "none"
    let experts = document.createElement("h1")
    let just = document.createElement("h1")
    just.className = "bodyText"
    just.id = "just"
    just.innerText = "its just";
    experts.className = "bodyText"
    experts.id = "starting"
    experts.innerText = "getting started.";
    currentPrice.parentNode.appendChild(just);
    currentPrice.parentNode.appendChild(experts);
    // shuffleButton.innerText = "Buy $100 in Bitcoin." + "\n" + "& you get $10 for free.";
    shuffleButton.innerHTML = "Get $10 of Bitcoin for Free" + "<br>" + "<sub>(before it goes up again 😉)</sub>";
    shuffleSub.innerText = "Bitcoin will hit $150K+ by the end of the year." + "\n" + "\n" + "source: trust me bro. ;)"
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

  const xboxOne = {
    name: "Xbox One",
    originalPrice: 499,
    singular: true,
    btcAmount: 0.66989757,
    image: "btcimage/X Box One.png",
    release: "11/22/13",
  };

  const snapchatSpectacles = {
    name: "Snapchat Spectacles",
    originalPrice: 380,
    singular: false,
    btcAmount: 0.5310719,
    image: "btcimage/Snapchat Spectacles.png",
    release: "11/10/16",
  };

  const fitbit = {
    name: "Fitbit",
    originalPrice: 200,
    singular: true,
    btcAmount: 0.32940516,
    image: "btcimage/Fitbit.png",
    release: "9/15/16",
  };

  const airpods = {
    name: "Airpods",
    originalPrice: 159,
    singular: false,
    btcAmount: 0.20370094,
    image: "btcimage/Airpods.png",
    release: "12/13/16",
  };

  const macProWheels = {
    name: "Mac Pro Wheels",
    originalPrice: 700,
    singular: false,
    btcAmount: 0.10171523,
    image: "btcimage/Mac Pro Wheels.png",
    release: "4/20/20",
  };

  const astroworldTickets = {
    name: "Astroworld Tickets",
    originalPrice: 300,
    singular: false,
    btcAmount: 0.05380636,
    image: "btcimage/Astroworld Tickets.png",
    release: "11/16/18",
  };

  const supremeBoxLogo = {
    name: "Supreme Box Logo",
    originalPrice: 30,
    singular: true,
    btcAmount: 0.05157324,
    image: "btcimage/_0004_Supreme-f15.png",
    release: "8/20/16",
  };

  const tinderGold = {
    name: "Tinder Gold",
    originalPrice: 9.99,
    singular: true,
    btcAmount: 0.03839325,
    image: "btcimage/Tinder Gold.png",
    release: "3/1/15",
  };

  const pornHubPremium = {
    name: "PornHub Premium",
    originalPrice: 9.99,
    singular: true,
    btcAmount: 0.03179008,
    image: "btcimage/Pornhub Premium.png",
    release: "1/1/15",
  };

  const airpodsPro = {
    name: "Airpods Pros",
    originalPrice: 249,
    singular: false,
    btcAmount: 0.02704838,
    image: "btcimage/Airpod Pros.png",
    release: "10/30/19",
  };

  const powerBalance = {
    name: "Powerbalance",
    originalPrice: 15,
    singular: true,
    btcAmount: 0.01785863,
    image: "btcimage/Power Balance.png",
    release: "12/16/13",
  };

  const cybertruckReservation = {
    name: "Cybertruck Reservation",
    originalPrice: 100,
    singular: true,
    btcAmount: 0.0134693,
    image: "btcimage/cybertruck reservation.png",
    release: "12/1/19",
  };

  const hungerGames = {
    name: "Hunger Games",
    originalPrice: 11,
    singular: false,
    btcAmount: 2.16962525,
    image: "btcimage/_0036_Hunger-Games.png",
    release: "3/12/12",
  };

  const fiftyShadesOfGrey = {
    name: "Fifty Shades of Grey",
    originalPrice: 19.99,
    singular: true,
    btcAmount: 19.99,
    image: "btcimage/_0035_50-Shades-of-Grey.png",
    release: "5/1/11",
  };

  const DJIDrone = {
    name: "DJI Phantom drone",
    originalPrice: 1200,
    singular: true,
    btcAmount: 85.166785,
    image: "btcimage/_0034_DJI-Drone.png",
    release: "1/7/13",
  };

  const casperMattress = {
    name: "Casper Mattress",
    originalPrice: 850,
    singular: true,
    btcAmount: 1.81997259,
    image: "btcimage/_0033_Casper-Mattress.png",
    release: "4/1/14",
  };

  const roku = {
    name: "Roku",
    originalPrice: 79,
    singular: true,
    btcAmount: 5.21108179,
    image: "btcimage/_0032_Roku.png",
    release: "7/1/11",
  };

  const philipsHueLED = {
    name: "Philips Hue LED",
    originalPrice: 200,
    singular: true,
    btcAmount: 68.4931507,
    image: "btcimage/_0031_Philips-Hue-Light.png",
    release: "10/29/12",
  };

  const instantPot = {
    name: "Instant Pot",
    originalPrice: 100,
    singular: true,
    btcAmount: 476.190476,
    image: "btcimage/_0030_Instant-Pot.png",
    release: "10/1/10",
  };

  const impossibleBurger = {
    name: "Impossible Burger",
    originalPrice: 7,
    singular: true,
    btcAmount: 0.0103505,
    image: "btcimage/_0029_Impossible-Burger.png",
    release: "7/1/16",
  };

  const playstationVita = {
    name: "Playstation Vita",
    originalPrice: 250,
    singular: true,
    btcAmount: 18.7265918,
    image: "btcimage/_0028_PS-Vita.png",
    release: "12/17/11",
  };

  const pebbleEInkWatch = {
    name: "Pebble E-Ink Watch",
    originalPrice: 150,
    singular: true,
    btcAmount: 7.72002059,
    image: "btcimage/_0027_Pebble-Watch.png",
    release: "1/23/13",
  };

  const theBookOfMorom = {
    name: "Ticket to Book of Mormon",
    originalPrice: 100,
    singular: true,
    btcAmount: 1.42857143,
    image: "btcimage/_0026_Book-of-Mormon.png",
    release: "3/24/11",
  };

  const NikeFuelband = {
    name: "Nike+ Fuelband",
    originalPrice: 150,
    singular: true,
    btcAmount: 33.7837838,
    image: "btcimage/_0025_Nike-Fuel-Band.png",
    release: "2/22/12",
  };

  const iPadMini = {
    name: "iPad Mini",
    originalPrice: 329,
    singular: true,
    btcAmount: 109.302326,
    image: "btcimage/_0021_I-Pad-Mini.png",
    release: "11/2/12",
  };

  const toyStory3 = {
    name: "Toy Story 3 DVD",
    originalPrice: 10.99,
    singular: true,
    btcAmount: 219.8,
    image: "btcimage/_0020_Toy-Story-3.png",
    release: "6/18/10",
  };

  const willU = {
    name: "Wii U",
    originalPrice: 299,
    singular: true,
    btcAmount: 27.3559012,
    image: "btcimage/_0019_Wii-U.png",
    release: "11/18/12",
  };

  const theSocialNetwork = {
    name: "The Social Network",
    originalPrice: 11.99,
    singular: true,
    btcAmount: 119.9,
    image: "btcimage/_0018_The-Social-Network.png",
    release: "10/12/10",
  };

  const wolfOnWallStreet = {
    name: "Wolf on Wall Street Bluray",
    originalPrice: 49.99,
    singular: true,
    btcAmount: 0.01870953,
    image: "btcimage/_0017_Wolf-of-Wallstreet.png",
    release: "3/25/14",
  };

  const fourHourChef = {
    name: "4 Hour Chef",
    originalPrice: 11,
    singular: true,
    btcAmount: 0.89141005,
    image: "btcimage/_0037_4-Hour-Chef.png",
    release: "11/20/12",
  };

  const amazonEcho = {
    name: "Amazon Echo",
    originalPrice: 99,
    singular: true,
    btcAmount: 0.30391498,
    image: "btcimage/_0023_Amazon-Echo.png",
    release: "11/3/14",
  };

  const appleHomepod = {
    name: "Apple Homepod",
    originalPrice: 299,
    singular: true,
    btcAmount: 0.03422235,
    image: "btcimage/_0022_Apple-Homepod.png",
    release: "2/9/18",
  };

  const appleWatchv1 = {
    name: "Apple Watch v1",
    originalPrice: 249,
    singular: true,
    btcAmount: 1.07667293,
    image: "btcimage/_0016_Apple-Watch-V1.png",
    release: "4/24/15",
  };

  const averagers = {
    name: "Avengers Tickets",
    originalPrice: 13,
    singular: false,
    btcAmount: 2.57936508,
    image: "btcimage/_0015_Avengers.png",
    release: "5/4/12",
  };

  const bitcoinForDummies = {
    name: "Bitcoin for Dummies",
    originalPrice: 14.19,
    singular: true,
    btcAmount: 0.03433283,
    image: "btcimage/_0014_Bitcoin-for-Dummies.png",
    release: "3/21/16",
  };

  const dysonVacuum = {
    name: "Dyson Vacuum",
    originalPrice: 299,
    singular: true,
    btcAmount: 1.28835442,
    image: "btcimage/_0013_Dyson-Vacuum.png",
    release: "5/1/15",
  };

  const kony2012Shirt = {
    name: "Kony 2012 Shirt",
    originalPrice: 21,
    singular: true,
    btcAmount: 1.74854288,
    image: "btcimage/_0009_Kony-2012.png",
    release: "10/10/12",
  };

  const kyleJennerLipKit = {
    name: "Kylie Jenner Lip Kit",
    originalPrice: 125,
    singular: true,
    btcAmount: 0.3312829,
    image: "btcimage/_0008_Kylie-Jenner-Lip-Kit.png",
    release: "11/30/15",
  };

  const mumfordAndSonsTicket = {
    name: "Mumford and Sons Ticket",
    originalPrice: 109,
    singular: true,
    btcAmount: 17.6375405,
    image: "btcimage/_0007_Mumford-and-Sons.png",
    release: "1/23/12",
  };

  const paulPierceJersey = {
    name: "Paul Pierce Nets Jersey",
    originalPrice: 70,
    singular: true,
    btcAmount: 2.56880734,
    image: "btcimage/_0006_Pierce-Jersey.png",
    release: "6/12/11",
  };

  const polaroidInstaxMini8 = {
    name: "Polaroid Instax Mini 8",
    originalPrice: 119,
    singular: true,
    btcAmount: 10.8974359,
    image: "btcimage/_0005_Polaroid.png",
    release: "11/1/12",
  };

  const supremeBoxLogoF15 = {
    name: "Supreme BOGO Crewneck",
    originalPrice: 600,
    singular: true,
    btcAmount: 2.62008734,
    image: "btcimage/_0004_Supreme-f15.png",
    release: "9/1/15",
  };

  const theraGun = {
    name: "TheraGun",
    originalPrice: 100,
    singular: true,
    btcAmount: 0.23023755,
    image: "btcimage/_0003_Theragun.png",
    release: "1/1/16",
  };

  const tonyRobbinsSeminar = {
    name: "Tony Robbins Seminar",
    originalPrice: 2950,
    singular: true,
    btcAmount: 3.14659947,
    image: "btcimage/_0002_Tony-Robbins-seminar.png",
    release: "3/24/17",
  };

  const zeroToOne = {
    name: "Zero To One",
    originalPrice: 24.99,
    singular: true,
    btcAmount: 0.05464278,
    image: "btcimage/_0001_Zero-to-One.png",
    release: "9/17/14",
  };

  const lvSupreme = {
    name: "Louis Vuitton Supreme Chest",
    originalPrice: 68500,
    singular: true,
    btcAmount: 53.1,
    image: "btcimage/Supreme Chest.png",
    release: "3/02/17",
  };

  const antiFragile = {
    name: "Antifragile",
    originalPrice: 19.99,
    singular: false,
    btcAmount: 1.629,
    image: "btcimage/Anti Fragile.png",
    release: "11/27/2012",
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
    hoverboard,
    xboxOne,
    snapchatSpectacles,
    fitbit,
    airpods,
    macProWheels,
    astroworldTickets,
    supremeBoxLogo,
    tinderGold,
    pornHubPremium,
    airpodsPro,
    powerBalance,
    cybertruckReservation,
    hungerGames,
    fiftyShadesOfGrey,
    DJIDrone,
    casperMattress,
    roku,
    philipsHueLED,
    instantPot,
    impossibleBurger,
    playstationVita,
    pebbleEInkWatch,
    theBookOfMorom,
    NikeFuelband,
    iPadMini,
    toyStory3,
    willU,
    theSocialNetwork,
    wolfOnWallStreet,
    fourHourChef,
    amazonEcho,
    appleHomepod,
    appleWatchv1,
    averagers,
    bitcoinForDummies,
    dysonVacuum,
    kony2012Shirt,
    kyleJennerLipKit,
    mumfordAndSonsTicket,
    paulPierceJersey,
    polaroidInstaxMini8,
    supremeBoxLogoF15,
    theraGun,
    tonyRobbinsSeminar,
    zeroToOne,
    lvSupreme,
    antiFragile
  ];
