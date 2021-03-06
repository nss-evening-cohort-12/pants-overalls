const pageName = location.pathname.split("/").slice(-1);

const items = [
    {
        itemId: 1,
        name: 'Boulder Creek Denim Overalls',
        imageUrl: 'https://www.kingsize.com/dw/image/v2/BBKT_PRD/on/demandware.static/-/Sites-masterCatalog_KingSizeDirect/default/dw67527dbd/images/hi-res/1169_04800_mc_0055.jpg',
        price: 47.99,
        category: 'Adult',
        description: 'Get the job done in our Boulder Creek® Denim Overalls, built for functionality and efficiency. These overalls feature a double compartment bib front, back patch, a single hammer loop and metal button closures at side.',
        availableColors: [ { color: 'Blue', swatch: 'https://d29pz51ispcyrv.cloudfront.net/images/I/3qkVunGyJiW0QRJQygadpo.MD256.jpg' } ], 
        availableSizes: ['S', 'M', 'L', 'XL']
    },
    {
        itemId: 2,
        name: 'Slim Fit Rigid Denim Overalls',
        imageUrl: 'https://i1.adis.ws/i/boohooamplience/mzz56093_vintage%20wash_xl?$product_image_main_mobile$',
        price: 38.50,
        category: 'Adult',
        description: '95% Cotton And 5% Polyester. Slim Fit Rigid Denim Dungarees.',
        availableColors: [{color: 'Navy', swatch: 'https://d1m9wsh695jb3b.cloudfront.net/products/1234/swatches/1mwcoxjzmhp47o4579ly5e24.jpg'}, {color: 'Black', swatch: 'https://d1m9wsh695jb3b.cloudfront.net/products/1234/swatches/hbxn31dz5rpdbmz1qpdi3zvr.jpg'}], 
        availableSizes: ['M', 'L', 'XL']
    },
    {
        itemId: 3,
        name: 'Torrey Wide-Leg Overalls',
        imageUrl: 'https://www.lulus.com/images/product/xlarge/4206750_816862.jpg',
        price: 52.00,
        category: 'Adult',
        description: 'These Wide-Leg Overalls will make your day a little extra fun! Lightweight linen-blend fabric falls from adjustable tank straps, with marbled brown buttons, into a bib front with patch pocket. Breezy, relaxed wide-leg pants have slightly cropped hems.',
        availableColors: [{color: 'Olive Green', swatch: 'https://i.etsystatic.com/8483244/r/il/ac96d1/1134300798/il_1588xN.1134300798_npw4.jpg'}, {color: 'Beige', swatch: 'https://www.onlinefabricstore.net/images/product-images/xl/172514_1.jpg'}], 
        availableSizes: ['XS', 'S', 'M', 'L']
    },
    {
        itemId: 4,
        name: 'Touchstone Overalls',
        imageUrl: 'https://content.backcountry.com/images/items/900/HOR/HOR00N8/DUGNVNWA.jpg',
        price: 125.00,
        category: 'Adult',
        description: 'Perfectly casual overalls for all your summer outings. Sub-textured weave offers stretchy, lightweight comfort. Washed down fabric delivers a well-loved look and feel. Lots of pockets give you plenty of places to stash stuff',
        image: 'https://i.etsystatic.com/8483244/r/il/ac96d1/1134300798/il_1588xN.1134300798_npw4.jpg',
        availableColors: [{color: 'Duck Green', swatch: 'https://i.etsystatic.com/8483244/r/il/ac96d1/1134300798/il_1588xN.1134300798_npw4.jpg'}, {color: 'Falcon Brown', swatch: 'https://d1m9wsh695jb3b.cloudfront.net/products/1234/swatches/ezlpmtr9gcg78jkd6gdmb9bzisia.jpg'}], 
        availableSizes: ['S', 'M', 'L', 'XL']
    },
    {
        itemId: 5,
        name: 'Quiksilver Womens Overalls',
        imageUrl: 'https://images.boardriders.com/globalGrey/quiksilver-products/all/default/hi-res/eqwnp03005_herdungarees,w_wcl6_frt1.jpg',
        price: 69.00,
        category: 'Adult',
        description: 'Heavy stone wash on fabric for a vintage worn look. Yarn-dyed stripes on front. Zip-up pocket on chest. Belt loops on waist',
        availableColors: [{color: 'Quicksilver Pattern', swatch: 'https://images.boardriders.com/globalGrey/quiksilver-products/all/default/hi-res/eqwnp03005_herdungarees,w_wcl6_frt1.jpg' }], 
        availableSizes: ['M', 'XL']
    },
    {
        itemId: 6,
        name: 'Guys Ripped Denim Overalls',
        imageUrl: 'https://img.ltwebstatic.com/images3_pi/2020/03/10/15838161549cbb575060b0d57ba864389aa3e7cccc.webp',
        price: 49.99,
        category: 'Adult',
        description: 'Casual Style with ripped details in the legs. Skinny Fit with a slight stretch. Mid-waist with a button fly.',
        availableColors: [{color: 'Blue', swatch: 'https://d29pz51ispcyrv.cloudfront.net/images/I/3qkVunGyJiW0QRJQygadpo.MD256.jpg'}, {color: 'Black', swatch: 'https://d1m9wsh695jb3b.cloudfront.net/products/1234/swatches/hbxn31dz5rpdbmz1qpdi3zvr.jpg'}], 
        availableSizes: ['S', 'M', 'L', 'XL']
    },
    {
        itemId: 7,
        name: 'Distressed Jean Overalls for Girls',
        imageUrl: 'https://www1.assets-gap.com/webcontent/0017/636/886/cn17636886.jpg',
        price: 16.97,
        category: 'Child',
        description: 'Shoulder straps, with adjustable button-hole tabs attach to buttons at front yoke. Bib-patch pocket across front.',
        availableColors: [{color: 'Distressed Denim', swatch: 'https://www1.assets-gap.com/webcontent/0017/636/886/cn17636886.jpg'}], 
        availableSizes: ['XS', 'S', 'M']
    },
    {
        itemId: 8,
        name: 'Girls Denim Overall Shorts',
        imageUrl: 'https://images.prod.meredith.com/product/ab5cc0a84936d2bd9ed2b85728e3d6f6/1521346361856/l/girls-denim-overalls-kids',
        price: 32.99,
        category: 'Child',
        description: 'A pair of denim overalls featuring a front bib pocket, adjustable shoulder straps, belt loops, button sides, front zipper accents, front pockets, and back patch pockets',
        availableColors: [{color: 'Acid Wash', swatch: 'https://images.prod.meredith.com/product/ab5cc0a84936d2bd9ed2b85728e3d6f6/1521346361856/l/girls-denim-overalls-kids'}], 
        availableSizes: ['S', 'M', 'L', 'XL']
    },
    {
        itemId: 9,
        name: 'Toddler Denim Shortalls',
        imageUrl: 'https://www1.assets-gap.com/webcontent/0018/339/393/cn18339393.jpg',
        price: 39.95,
        category: 'Child',
        description: 'Non-stretch denim. Straps with knot ends. Square neckline, racerback. Button front, faux fly. Front slant pockets, back patch pockets.',
        availableColors: [{color: 'Pure Pink', swatch: 'https://i.etsystatic.com/5383515/r/il/6c7056/1167124311/il_1588xN.1167124311_atg6.jpg'}], 
        availableSizes: ['18-24 Mths', '2 Yrs', '3 Yrs', '4 Yrs']
    },
    {
        itemId: 10,
        name: 'Break-Up Camo Boys Overalls',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0388/0957/products/youth-boys-american-made-realtree-ap-bib-overalls-made-in-usa_a9f98b94-247d-4266-9f77-c6682da243a5.jpg',
        price: 29.95,
        category: 'Child',
        description: `Make sure your boys wear American Made camo with the craftsmanship of 111 years of experience behind it. Boys will love hunting with Dad in one of America's most beloved camo patterns, Mossy Oak Break-Up.`,
        availableColors: [{color: 'Mossy-Oak Break Up', swatch: 'https://cdn.shopify.com/s/files/1/0388/0957/products/youth-boys-american-made-realtree-ap-bib-overalls-made-in-usa_a9f98b94-247d-4266-9f77-c6682da243a5.jpg'}], 
        availableSizes: ['S', 'M', 'L', 'XL']
    },
    {
        itemId: 11,
        name: 'Vintage Frayed Hem Overall Shorts',
        imageUrl: 'https://images.beautifulhalo.com/images/392x588/201906/C/mens-vintage-solid-color-frayed-hem-fitted-denim-overalls-shorts_1561740864927.jpg',
        price: 31.04,
        category: 'Adult',
        description: 'Plain sleeveless overalls. Made of 100% Polyester.',
        availableColors: [{color: 'Yellow', swatch: 'https://cdn11.bigcommerce.com/s-r14v4z7cjw/images/stencil/256x256/attribute_value_images/2060945.preview.jpg?t=1570116780'}, {color: 'Black', swatch: 'https://d1m9wsh695jb3b.cloudfront.net/products/1234/swatches/hbxn31dz5rpdbmz1qpdi3zvr.jpg'}], 
        availableSizes: ['M', 'L', 'XL', 'XXL']
    },
    {
        itemId: 12,
        name: 'Madewell Skinny Denim Overalls',
        imageUrl: 'https://www.hautelookcdn.com/products/AA598/large/12926258.jpg',
        price: 79.97,
        category: 'Adult',
        description: 'Classic denim overalls in a solid dark wash deliver easy-wear comfort and casual style.',
        availableColors: [{color: 'Lunar Wash', swatch: 'https://www.hautelookcdn.com/products/AA598/large/12926258.jpg'}], 
        availableSizes: ['S', 'M', 'L', 'XL', 'XXL']
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


const buildChildCards = (array) => {
  let domString = "";
  for (let i = 0; i < array.length; i++) {
      
    if (array[i].category === 'Child') {
      domString += `<div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${array[i].imageUrl}" alt="">
                    <div class="card-body">
                      <h5 class="card-title">${array[i].name}</h5>
                      <p class="card-text">${array[i].description}</p>
                    </div>
                    <form class="add-to-cart-form"> 
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">`

      array[i].availableColors.forEach(color => {
        domString += `<div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="selectedColor" value="${color.color}">
                        <label class="form-check-label" for="selectedColor">
                        <img class="color-swatches" src="${color.swatch}">
                        </label>
                      </div>`  
      });

      domString += `</li>
                    <li class="list-group-item">`


      array[i].availableSizes.forEach(size => {
      domString += `<div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="selectedSize" value="${size}">
                      <label class="form-check-label" for="selectedSize">${size}</label>
                    </div>`
      });

      domString += `  
        </li>
        <li class="list-group-item">$${array[i].price.toFixed(2)}</li>
        <li class="list-group-item"><button type="submit" id="button${array[i].itemId}" class="btn btn-primary add-to-cart">Add to Cart</button></li>
      </ul>
      <input type="hidden" name="itemId" value="${array[i].itemId}">
      </form>
      </div>
      `
      }
  }
  printToDom('#childCards', domString);
}


// Card Container
const buildAdultCards = (array) => {
    let domString = '';

    for (let i = 0; i < array.length; i++) {
      
      if (array[i].category === 'Adult') {
        domString += `<div class="card" style="width: 18rem;">
                      <img class="card-img-top" src="${array[i].imageUrl}" alt="">
                      <div class="card-body">
                        <h5 class="card-title">${array[i].name}</h5>
                        <p class="card-text">${array[i].description}</p>
                      </div>
                      <form class="add-to-cart-form"> 
                      <ul class="list-group list-group-flush">
                      <li class="list-group-item">`

        array[i].availableColors.forEach(color => {
          domString += `<div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="selectedColor" value="${color.color}">
                          <label class="form-check-label" for="selectedColor">
                          <img class="color-swatches" src="${color.swatch}">
                          </label>
                        </div>`  
        });

        domString += `</li>
                      <li class="list-group-item">`


        array[i].availableSizes.forEach(size => {
        domString += `<div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="selectedSize" value="${size}">
                        <label class="form-check-label" for="selectedSize">${size}</label>
                      </div>`
        });

        domString += `  
          </li>
          <li class="list-group-item">$${array[i].price.toFixed(2)}</li>
          <li class="list-group-item"><button type="submit" id="button${array[i].itemId}" class="btn btn-primary add-to-cart">Add to Cart</button></li>
        </ul>
        <input type="hidden" name="itemId" value="${array[i].itemId}">
        </form>
        </div>
        `
        }
    }
    printToDom('#adultCards', domString);
}

const randomNum = (max) => {
    return Math.floor(Math.random() * max);
} 

//creates the domstring for the featured items bootstrap carousel
const buildFeaturedItems = () => {
    let randomNums = []; // random numbers array
    let i=0; 
    do {        //push 5 random numbers to randomNums array
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
    
    for (let i=0; i < 5; i++) {     //loop to generate cards for carousel
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

// updates the number of items in the cart icon 
const updateCart = () => {
    const cartArray = JSON.parse(sessionStorage.getItem('cart'));
    document.querySelector('#cart-count').innerHTML = cartArray.length;
}

//callback function for add to cart submit button
const addToCart = (event) => {
  event.preventDefault();

  //check for missing data
  if (!event.target.elements.selectedColor.value) {
    $('#colorModal').modal('show');
    return
  } else if (!event.target.elements.selectedSize.value) {
    $('#sizeModal').modal('show');
    return
  }

  //create/get existing array
  let cartArray = sessionStorage.getItem('cart');
  cartArray = cartArray ? JSON.parse(cartArray) : [];

  //check if item already in cart
  if (cartArray.find(item => item.itemId == event.target.elements.itemId.value)) {
    $('#inCartModal').modal('show');
    return
  }

  //create object from form data
  const addedItem = { 
    itemId: event.target.elements.itemId.value,
    itemName: items.find(item => item.itemId == event.target.elements.itemId.value).name,
    selectedColor: event.target.elements.selectedColor.value,
    selectedSize: event.target.elements.selectedSize.value
  }

  //push new object
  cartArray.push(addedItem);

  //set array into localStorage
  sessionStorage.setItem('cart', JSON.stringify(cartArray));

  //update this button
  document.querySelector('#button' + event.target.elements.itemId.value).innerHTML = 'Added to Cart!';
  document.querySelector('#button' + event.target.elements.itemId.value).classList.remove("btn-primary");
  document.querySelector('#button' + event.target.elements.itemId.value).classList.add("btn-warning");
  document.querySelector('#button' + event.target.elements.itemId.value).disabled = true;
  updateCart();
}

const displayCart = () => {
  //get data from localStorage
  const cartArray = JSON.parse(sessionStorage.getItem('cart'));

  let domString = '';
  let cartTotal = 0;
  cartArray.forEach(cartItem => {
    domString += `
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img class="cart-thumbnail" src="${items.find(item => item.itemId == cartItem.itemId).imageUrl}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div class="row">
                     <div class="col-8 text-left">
                        <h4>${ cartItem.itemName }</h4>
                          <span class="small">Color:</span> ${cartItem.selectedColor}<br>
                          <span class="small">Size:</span> ${cartItem.selectedSize}
                     </div>
                     <p class="col-4 text-right"><span class="small">Price:</span> $${items.find(item => item.itemId == cartItem.itemId).price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `
    cartTotal += items.find(item => item.itemId == cartItem.itemId).price
  });
  //cart price totals card
  domString += `
              <div class="card mb-3 w-50 float-right">
                <div class="card-body">
                  <div class="row">
                    <div class="col-8 text-right">
                        <h5>Subotal:</h5>
                    </div>
                    <div class="col-4 text-right">
                          $${cartTotal.toFixed(2)}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8 text-right">
                        <h5>Sales Tax:</h5>
                    </div>
                    <div class="col-4 text-right">
                          $${(cartTotal.toFixed(2) * .0975).toFixed(2)}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8 text-right">
                        <h4>Total:</h4>
                    </div>
                    <div class="col-4 text-right">
                          <strong>$${(cartTotal.toFixed(2) * 1.0975).toFixed(2)}</strong>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 text-right">
                        <button class="btn btn-primary">Submit Payment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;

  printToDom('#cart-contents', domString);
}

//event listener for add to cart forms
const cartListeners = () => {
  document.addEventListener('submit', function (event) {
    if (event.target.classList.contains('add-to-cart-form')) {
        addToCart(event);
    }
  }, false);
}

const init = () => {
  if (pageName == 'adults.html') { buildAdultCards(items) };
  if (pageName == 'children.html') { buildChildCards(items) };
  if (pageName == 'index.html') { buildFeaturedItems() };
    buildRatingCards(reviews);
    cartListeners();
    if (pageName == 'adults.html' || pageName == 'children.html') { clickEvents() };
    updateCart();
    if (pageName == 'cart.html') { displayCart() };
}

init();
