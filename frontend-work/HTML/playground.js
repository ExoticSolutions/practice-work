const CART_DATA = {
  name: "T-shirt",
  qty: "2",
  calcTotal: function (qty) {
    console.log(`total: ${(Number(qty) * 1099) / 100}`);
  },
};

CART_DATA.calcTotal(CART_DATA.qty);

console.log(`BEFORE: ${CART_DATA}`);

console.log(CART_DATA)
