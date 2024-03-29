const outputElement = document.querySelector(`.output`);
const cartQTYElement = document.querySelector(".cart-qty");
let cartQTY = 0;
const popular = [
  {
    id: 2465565152,
    url: `https://www.amazon.com/introducing-amazon-fire-tv-32-inch-2-series-hd-smart-tv/dp/B09N6F9NV3?ref_=Oct_d_omg_d_1266092011_0&pd_rd_w=WXpNm&content-id=amzn1.sym.30700090-8aee-489b-baf0-d51741979308&pf_rd_p=30700090-8aee-489b-baf0-d51741979308&pf_rd_r=4AYR0P7QTTRXB3Z7T8FT&pd_rd_wg=feHL1&pd_rd_r=6f03893e-26f1-45f3-8115-ea5534f9bb1e&pd_rd_i=B09N6F9NV3`,
    img: `https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/81DM+ZzL8rL._AC_UL600_SR600,400_.jpg`,
    name: "INSIGNIA 50-inch Class F30 Series LED 4K UHD Smart Fire TV with Alexa Voice Remote (NS-50F301NA24, 2023 Model)",
    category: {
      name: "Electronics",
      url: "https://www.amazon.com/gp/browse.html?node=172282&ref_=nav_em__elec_hub_0_2_16_12",
    },
    price: 22999,
    rating: {
      stars: 4,
      count: 13203,
    },
  },
  {
    id: 2397367643,
    url: `https://www.amazon.com/Apple-MacBook-13-inch-256GB-Storage/dp/B08N5KWB9H/ref=zg_bs_g_pc_sccl_7/139-1224211-1962849?psc=1`,
    img: `https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/71TPda7cwUL._AC_UL600_SR600,400_.jpg`,
    name: "Apple 2020 MacBook Air Laptop M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver",
    category: {
      name: "Electronics",
      url: "https://www.amazon.com/gp/browse.html?node=172282&ref_=nav_em__elec_hub_0_2_16_12",
    },
    price: 74999,
    rating: {
      stars: 5,
      count: 19134,
    },
  },
  {
    id: 3928370822,
    url: `https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299/ref=zg_d_sccl_2/139-1224211-1962849?pd_rd_w=Z7jgL&content-id=amzn1.sym.193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_p=193afb92-0c19-4833-86f8-850b5ba40291&pf_rd_r=WTZ71J11WK0J5NAVGH5F&pd_rd_wg=lClg9&pd_rd_r=34e57bf5-06c7-4381-93d9-d9f809e391ad&pd_rd_i=0735211299&psc=1`,
    img: `https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/81YkqyaFVEL._AC_UL254_SR254,254_.jpg`,
    name: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    category: {
      name: "Books",
      url: "https://www.amazon.com/gp/browse.html?node=283155&ref_=nav_em__bo_t3_0_2_14_2",
    },
    price: 1379,
    rating: {
      stars: 5,
      count: 121125,
    },
  },

  {
    id: 5882931010,
    url: `https://www.amazon.com/dp/B0BV1HX3GM/ref=syn_sd_onsite_desktop_0?ie=UTF8&psc=1&pd_rd_plhdr=t&aref=UCcpfRkasw`,
    img: `https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61yl6b5b1GL._AC_SY741_.jpg`,
    name: "Tailulu H13 HEPA Air Purifier for Pet Dander Smoke Odor Dust Pollen, Air Filter for Bedroom Living Room, Kitchen, Office, Sleep Mode",
    category: {
      name: "Home",
      url: "https://www.amazon.com/gp/browse.html?node=1055398&ref_=nav_em_home_amazonhome_0_2_19_2",
    },
    price: 8999,
    rating: {
      stars: 4,
      count: 728,
    },
  },

  {
    id: 9264364129,
    url: `https://www.amazon.com/Premium-British-Ruled-Notebook-Notepad/dp/B07DCYQCPX/ref=pd_rhf_gw_s_pd_sbs_rvi_d_sccl_1_10/139-1224211-1962849?pd_rd_w=8RgpK&content-id=amzn1.sym.a089f039-4dde-401a-9041-8b534ae99e65&pf_rd_p=a089f039-4dde-401a-9041-8b534ae99e65&pf_rd_r=4TYYCS2Y0R5JEM27PT3C&pd_rd_wg=EwKPs&pd_rd_r=3f91ad0e-84b5-4f78-89fc-fc31c60f0239&pd_rd_i=B07DCYQCPX&th=1`,
    img: `https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/I/81ZXkorlK+L._AC_UL232_SR232,232_.jpg`,
    name: "BEECHMORE BOOKS Ruled Journal Notebook - A5 Brown 160 Lined Pages 8.3 x 5.8 inch | Hardcover Leather Daily Journals For Writing - Thick 120gsm Cream Paper | Gifts for Men, Women, Notebooks For Work",
    category: {
      name: "Books",
      url: "https://www.amazon.com/gp/browse.html?node=283155&ref_=nav_em__bo_t3_0_2_14_2",
    },
    price: 1995,
    rating: {
      stars: 4,
      count: 5503,
    },
  },

  {
    id: 5523169412,
    url: `https://www.amazon.com/Apple-Smartwatch-Midnight-Aluminum-Detection/dp/B0CHX9CY7W/ref=sr_1_1_sspa?crid=2THCXTKRT3MW7&keywords=apple+watch&qid=1704860178&sprefix=apple+watch%2Caps%2C79&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1`,
    img: `https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61R7LtY8MPL._AC_SX679_.jpg`,
    name: "Apple Watch SE (2nd Gen) [GPS 40mm] Smartwatch with Midnight Aluminum Case with Midnight Sport Band S/M. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor",
    category: {
      name: "Electronics",
      url: "https://www.amazon.com/gp/browse.html?node=172282&ref_=nav_em__elec_hub_0_2_16_12",
    },
    price: 19900,
    rating: {
      stars: 4,
      count: 3902,
    },
  },
];

let cart = [];

let popularElements = ``;
outputElement.classList.add("grid");
outputElement.classList.add("sm:grid-cols-3");
outputElement.classList.add("lg:grid-cols-5");

popular.forEach((item) => {
  popularElements +=
    `<div class="product-card">\n` +
    `  <img src="${item.img}" alt="${item.name}">\n` +
    `   <div class="mt-5">\n` +
    `     <a href="${item.url}" class="mt-3 section-title">\n` +
    `      ${item.name}\n` +
    `      </a>\n` +
    `      <div class="flex justify-center gap-2">\n` +
    `         <img src="../frontend/img/star-ratings/stars-${item.rating.stars}.png" class="mt-5">\n` +
    `         <p class="rating-count mt-10">\n` +
    `          ${item.rating.count}\n` +
    `        </p>\n` +
    `      </div>\n` +
    `       <div class="flex justify-center gap-2">\n` +
    `          <p>\n` +
    `           Found in\n` +
    `          </p>\n` +
    `         <a href="${item.category.url}" class="category-name">\n` +
    `          ${item.category.name}\n` +
    `         </a>\n` +
    `      </div>\n` +
    `      <p class="product-price">\n` +
    `       $${calcRealPrice(item.price)}\n` +
    `      </p>\n` +
    `      <div class="mt-5 flex justify-center gap-2 purchase-btn">\n` +
    `        <button  class="add-cart" data-product-name="${item.name}">\n` +
    `         Add to cart\n` +
    `        </button>\n` +
    `        <button>\n` +
    `          Buy now\n` +
    `        </button>\n` +
    `      </div>\n` +
    `   </div>\n` +
    `</div>`;
});

outputElement.innerHTML = popularElements;

const addCartButtons = document
  .querySelectorAll(".add-cart")
  .forEach((cartButton) => {
    cartButton.addEventListener("click", () => {
      cartAppend(cartButton.dataset.productName);
    });
  });

function calcRealPrice(price) {
  return (price / 100).toFixed(2);
}

function cartAppend(targetItem) {
  let matchingProduct;
  popular.forEach((product) => {
    if (product.name === targetItem) {
      matchingProduct = product;
    }
  });

  if (matchingProduct) {
    cartQTY++;
    cartQTYElement.innerHTML = cartQTY;
    cartCheck(matchingProduct);
  } else {
    console.log("product not found");
  }
}

function cartCheck(matchingProduct) {
  console.log("checking cart...");

  let tempObject;

  cart.forEach((item) => {
    if (matchingProduct.name === item.productName) {
      tempObject = item;
    }
  });

  if (tempObject) {
    cart.forEach((item) => {
      if (tempObject.productName === item.productName) {
        item.qty += 1;
      }
    });
  } else {
    cart.push({
      productName: matchingProduct.name,
      qty: 1,
    });
  }
  console.log(cart);
}
