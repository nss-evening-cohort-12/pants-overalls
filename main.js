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
        name: 'Distressed Let-Down Hem Jean Overalls for Girls',
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
        name: 'Mossy Oak Break-Up Camo Boys Overalls',
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


// print to dom function
const printToDom = (selector, textToPrint) => {
  let select = document.querySelector(selector)
  if (select) {
    select.innerHTML = textToPrint;
  }
};
// end print to dom

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

const buildFeaturedItems = () => {
    for (let i=0, i < 2; i++) {
        
    }
}

const randomNum = (max, min) => {
    return Math.floor(Math.random() * max) + min;
} 

const init = () => {
    buildAdultCards(items);
    buildChildCards(items);
}

init();
