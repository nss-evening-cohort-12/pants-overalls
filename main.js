const items = [
    {
        itemId: 1,
        name: 'Boulder Creek Denim Overalls',
        imageUrl: 'https://www.kingsize.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_KingSizeDirect/default/dw67527dbd/images/hi-res/1169_04800_mc_0055.jpg',
        price: 47.99,
        category: 'Adult',
        description: 'Get the job done in our Boulder Creek® Denim Overalls, built for functionality and efficiency. These overalls feature a double compartment bib front, back patch, a single hammer loop and metal button closures at side.',
        availableColors: ['Blue'], 
        availableSizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
        itemId: 2,
        name: 'Slim Fit Rigid Denim Overalls',
        imageUrl: 'https://i1.adis.ws/i/boohooamplience/mzz56093_vintage%20wash_xl?$product_image_main_mobile$',
        price: 38.50,
        category: 'Adult',
        description: '95% Cotton And 5% Polyester. Slim Fit Rigid Denim Dungarees.',
        availableColors: ['Light Blue', 'Navy', 'Black'], 
        availableSizes: ['Medium', 'Large', 'X-Large']
    },
    {
        itemId: 3,
        name: 'Torrey Wide-Leg Overalls',
        imageUrl: 'https://www.lulus.com/images/product/xlarge/4206750_816862.jpg',
        price: 52.00,
        category: 'Adult',
        description: 'These Wide-Leg Overalls will make your day a little extra fun! Lightweight linen-blend fabric falls from adjustable tank straps, with marbled brown buttons, into a bib front with patch pocket. Breezy, relaxed wide-leg pants have slightly cropped hems.',
        availableColors: ['Olive Green', 'Beige'], 
        availableSizes: ['X-Small', 'Small', 'Medium', 'Large']
    },
    {
        itemId: 4,
        name: 'Touchstone Overalls',
        imageUrl: 'https://content.backcountry.com/images/items/900/HOR/HOR00N8/DUGNVNWA.jpg',
        price: 125.00,
        category: 'Adult',
        description: 'Perfectly casual overalls for all your summer outings. Sub-textured weave offers stretchy, lightweight comfort. Washed down fabric delivers a well-loved look and feel. Lots of pockets give you plenty of places to stash stuff',
        availableColors: ['Duck Green Vintage Wash', 'Falcon Brown'], 
        availableSizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
        itemId: 5,
        name: 'Quiksilver Womens Overalls',
        imageUrl: 'https://images.boardriders.com/globalGrey/quiksilver-products/all/default/hi-res/eqwnp03005_herdungarees,w_wcl6_frt1.jpg',
        price: 69.00,
        category: 'Adult',
        description: 'Heavy stone wash on fabric for a vintage worn look. Yarn-dyed stripes on front. Zip-up pocket on chest. Belt loops on waist',
        availableColors: ['Quicksilver Pattern'], 
        availableSizes: ['Medium', 'X-Large']
    },
    {
        itemId: 6,
        name: 'Guys Ripped Denim Overalls',
        imageUrl: 'https://img.ltwebstatic.com/images3_pi/2020/03/10/15838161549cbb575060b0d57ba864389aa3e7cccc.webp',
        price: 49.99,
        category: 'Adult',
        description: 'Casual Style with ripped details in the legs. Skinny Fit with a slight stretch. Mid-waist with a button fly.',
        availableColors: ['Blue', 'Black'], 
        availableSizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
        itemId: 7,
        name: 'Distressed Jean Overalls for Girls',
        imageUrl: 'https://www1.assets-gap.com/webcontent/0017/636/886/cn17636886.jpg',
        price: 16.97,
        category: 'Child',
        description: 'Shoulder straps, with adjustable button-hole tabs attach to buttons at front yoke. Bib-patch pocket across front.',
        availableColors: ['Distressed Denim'], 
        availableSizes: ['X-Small', 'Small', 'Medium']
    },
    {
        itemId: 8,
        name: 'Girls Denim Overall Shorts',
        imageUrl: 'https://images.prod.meredith.com/product/ab5cc0a84936d2bd9ed2b85728e3d6f6/1521346361856/l/girls-denim-overalls-kids',
        price: 32.99,
        category: 'Child',
        description: 'A pair of denim overalls featuring a front bib pocket, adjustable shoulder straps, belt loops, button sides, front zipper accents, front pockets, and back patch pockets',
        availableColors: ['Acid Wash'], 
        availableSizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
        itemId: 9,
        name: 'Toddler Denim Shortalls',
        imageUrl: 'https://www1.assets-gap.com/webcontent/0018/339/393/cn18339393.jpg',
        price: 39.95,
        category: 'Child',
        description: 'Non-stretch denim. Straps with knot ends. Square neckline, racerback. Button front, faux fly. Front slant pockets, back patch pockets.',
        availableColors: ['Pure Pink'], 
        availableSizes: ['18-24 Months', '2 Years', '3 Years', '4 Years']
    },
    {
        itemId: 10,
        name: 'Break-Up Camo Boys Overalls',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0388/0957/products/youth-boys-american-made-realtree-ap-bib-overalls-made-in-usa_a9f98b94-247d-4266-9f77-c6682da243a5.jpg',
        price: 29.95,
        category: 'Child',
        description: `Make sure your boys wear American Made camo with the craftsmanship of 111 years of experience behind it. Boys will love hunting with Dad in one of America's most beloved camo patterns, Mossy Oak Break-Up.`,
        availableColors: ['Mossy-Oak Break Up'], 
        availableSizes: ['Small', 'Medium', 'Large', 'X-Large']
    },
    {
        itemId: 11,
        name: 'Vintage Frayed Hem Overall Shorts',
        imageUrl: 'https://images.beautifulhalo.com/images/392x588/201906/C/mens-vintage-solid-color-frayed-hem-fitted-denim-overalls-shorts_1561740864927.jpg',
        price: 31.04,
        category: 'Adult',
        description: 'Plain sleeveless overalls. Made of 100% Polyester.',
        availableColors: ['Yellow', 'Black'], 
        availableSizes: ['Medium', 'Large', 'X-Large', 'XX-Large']
    },
    {
        itemId: 12,
        name: 'Madewell Skinny Denim Overalls',
        imageUrl: 'https://www.hautelookcdn.com/products/AA598/large/12926258.jpg',
        price: 79.97,
        category: 'Adult',
        description: 'Classic denim overalls in a solid dark wash deliver easy-wear comfort and casual style.',
        availableColors: ['Lunar Wash'], 
        availableSizes: ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large']
    }
];
const reviews = [
  {
    name:'Tom Hanks',
    review:'The variety is small but the quality makes up for it in the end. The clothing cost are reasonable. I really like the overall style for casual wear that has some accented urban wear tones within some of their high end pieces.',
    stars: `<span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>`,
  },
  {
    name:'Mary',
    review:'',
    stars: `<span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>`,
  },
  {
    name:'Oprah',
    review:'Outstanding customer service, especially Jessica',
    stars: `<span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>`,
  },
  {
    name:'Jonas Brothers',
    review:`Best Overalls ever. We can't wait to wear them on the next red carpet event.`,
    stars: `<span class="fa fa-star checked"></>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>`,
  },
]

// print to dom function
const printToDom = (selector, textToPrint) => {
  let select = document.querySelector(selector)
  if (select) {
    select.innerHTML = textToPrint;
  }
};
// end print to dom
const buildRatingCards = (arr) => {
  let domString = "";
  for (let i = 0; i < arr.length; i++) {
       
    domString += `
                 <div class="card" style="width: 15rem;">
                  <h2 class="card-title">${arr[i].name}</h2>
                  <div class="card-body">
                   <h5 class="card-title">${arr[i].stars}</h5>
                   <p>${arr[i].review}</p>
                  </div>
                 </div>`

    
  } 
  printToDom('#reviewsContainer', domString)
}

const buildChildCards = (arr) => {
  let domString = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].category === 'Child') {   
    domString += `
                 <div class="card" style="width: 18rem;">
                   <img class="card-img-top" src="${arr[i].imageUrl}" alt="Card image cap">
                   <div class="card-body">
                    <h5 class="card-title">${arr[i].name}</h5>
                    <p class="card-text">${arr[i].description}</p>
                   </div>
                   <ul class="list-group list-group-flush">
                    <li class="list-group-item">${arr[i].availableColors}</li>
                    <li class="list-group-item">${arr[i].availableSizes}</li>
                    <li class="list-group-item">Price: $${arr[i].price}</li>
                   </ul>
                   <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                   </div>
                 </div>`

    }
  } 
  printToDom('#childCards', domString)
}


// Adult Card Container
const buildAdultCards = (adultOveralls) => {
    let domString = '';

    for (let i = 0; i < adultOveralls.length; i++) {
        if (adultOveralls[i].category === 'Adult') {
        domString += `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${adultOveralls[i].imageUrl}" alt="">
        <div class="card-body">
          <h5 class="card-title">${adultOveralls[i].name}</h5>
          <p class="card-text">${adultOveralls[i].description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${adultOveralls[i].availableColors}</li>
          <li class="list-group-item">${adultOveralls[i].availableSizes}</li>
          <li class="list-group-item">${adultOveralls[i].price}</li>
        </ul>
        </div>
        `;
        }
    }
    printToDom('#adultCards', domString);
}

const randomNum = (max) => {
    return Math.floor(Math.random() * max);
} 

//creates the domstring for the featured items bootstrap carousel
const buildFeaturedItems = () => {
    // random numbers array
    let randomNums = [];
    //push 5 random numbers to randomNums array
    let i=0; 
    do {
        let generatedNumber = randomNum(items.length);
        if (randomNums.indexOf(generatedNumber) == -1) {
            randomNums.push(generatedNumber);
            i++;
        }
    } while ( i < 5);
    
    let domString = '<ol class="carousel-indicators">';
    
    for (let i=0; i < 5; i++) {
        domString += `<li data-target="#featured-items" data-slide-to="${i}" ${i == 0 ? `class="active"`:``}></li>`;
    }
    
    domString += `</ol>`;
    
    domString += `<div class="carousel-inner">`;
    
    //loop to generate cards for carousel
    for (let i=0; i < 5; i++) {
        domString +=  `
                <div class="carousel-item${(i == 0) ? ` active` : ``}">
                <img src="${items[randomNums[i]].imageUrl}" class="d-block w-50 float-left" alt="...">
                <div class="carousel-caption d-none d-md-block w-50">
                    <h2>${items[randomNums[i]].name}</h2>
                </div>
                </div>`;
        }
        domString += `
        </div>
            <a class="carousel-control-prev" href="#featured-items" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#featured-items" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>`;
        printToDom("#featured-items", domString);
}
// price filter event
const filterPrice = () => {
  const buttonId = event.target.id

  if (buttonId === 'lowHigh'){
    function compare(a,b){
      const priceA = a.price;
      const priceB = b.price;
      
      let comparison = 0;
      if (priceA > priceB) {
          comparison = 1;
      } else if (priceA < priceB) {
          comparison = -1;
      }
      return comparison;
      }
      items.sort(compare)
  } else if (buttonId === 'highLow'){
    function compareHigh(a,b){
      const priceA = a.price;
      const priceB = b.price;
      
      let comparison = 0;
      if (priceB > priceA) {
          comparison = 1;
      } else if (priceB < priceA) {
          comparison = -1;
      }
      return comparison;
      }
      items.sort(compareHigh)
  }
  buildChildCards(items);
  buildAdultCards(items);
}


const clickEvents = () => {
  document.querySelector('#lowHigh').addEventListener('click', filterPrice );
  document.querySelector('#highLow').addEventListener('click', filterPrice );
 };

const init = () => {
    buildAdultCards(items);
    buildChildCards(items);
    buildFeaturedItems();
    buildRatingCards(reviews);
    clickEvents();
}

init();
