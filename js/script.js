// card price detect
function addToCart(data) {
  // select card
  const cardPrice = parseFloat(data.childNodes[7].childNodes[0].innerText);
  const cardName = data.childNodes[5].innerText;
  // select cart
  const cartItem = document.getElementById("cart");
  // create p inside cart
  const p = document.createElement("p");
  const count = cartItem.childElementCount;
  p.innerHTML = `${count + 1} . ${cardName}`;
  p.classList.add(
    "text-lg",
    "lg:text-xl",
    "font-medium",
    "lg:font-semibold",
    "text-font-color",
    "mb-2"
  );
  if (count === 15) {
    cartItem.classList.add("overflow-auto", "h-[80vh]");
  }
  cartItem.appendChild(p);

  const totalPrice = document.getElementById("total-price");
  const totalPriceValue = parseFloat(totalPrice.innerText.split(" ")[3]);
  //   select final price
  const finalTotal = document.getElementById("total");
  const totalMrp = totalPriceValue + cardPrice;
  totalPrice.innerHTML = `Total Price : ${totalMrp.toFixed(2)} TK`;
  finalTotal.innerText = totalMrp.toFixed(2);

  //   make purchase button enable when price > 0
  const makePurchaseBtn = document.getElementById("make-purchase");
  if (totalMrp > 0) {
    makePurchaseBtn.removeAttribute("disabled");
    makePurchaseBtn.classList.add("hover:bg-hover-color");
  }
  //enable input & coupon button
  const couponBtn = document.getElementById("coupon-btn");
  const couponInputField = document.getElementById("coupon-input");
  if (totalMrp >= 200) {
    couponInputField.removeAttribute("disabled");
    couponBtn.removeAttribute("disabled");
    couponBtn.classList.add("hover:bg-hover-color");
  }
}
// applying coupon code
document.getElementById("coupon-btn").addEventListener("click", function () {
  const couponBtn = document.getElementById("coupon-btn");
  const couponInputField = document.getElementById("coupon-input");
  const couponInputFieldValue = couponInputField.value;
  const totalPrice = document.getElementById("total-price");
  const totalPriceValue = parseFloat(totalPrice.innerText.split(" ")[3]);
  const discountTotal = document.getElementById("discount");
  const finalTotal = document.getElementById("total");
  if (couponInputFieldValue === "SELL200") {
    discountTotal.innerText = (totalPriceValue * 0.2).toFixed(2);
    const discountTotalValue = parseFloat(discountTotal.innerText);
    finalTotal.innerText = (totalPriceValue - discountTotalValue).toFixed(2);

    // disabled coupon code after applying
    couponInputField.setAttribute("disabled", true);
    couponBtn.setAttribute("disabled", true);
    couponBtn.classList.remove("hover:bg-hover-color");
    couponInputField.value = "";
  } else {
    alert("You have entered invalid coupon code!!!");
    couponInputField.value = "";
  }
});
// modal go home button
document.getElementById("go-home").addEventListener("click", function () {
  const couponBtn = document.getElementById("coupon-btn");
  const couponInputField = document.getElementById("coupon-input");
  const cartItem = document.querySelector("#cart");
  const totalPrice = document.getElementById("total-price");
  const discountTotal = document.getElementById("discount");
  const finalTotal = document.getElementById("total");
  const makePurchaseBtn = document.getElementById("make-purchase");

  couponBtn.setAttribute("disabled", true);
  couponBtn.classList.remove("hover:bg-hover-color");
  couponInputField.setAttribute("disabled", true);
  cartItem.innerHTML = "";
  totalPrice.innerHTML = `Total Price : 00.00 TK`;
  discountTotal.innerText = "00.00";
  const finalTotalPrice = (finalTotal.innerText = "00.00");
  const finalTotalPriceValue = parseFloat(finalTotalPrice);

  //   make purchase button enable when price > 0
  if (finalTotalPriceValue === 0) {
    makePurchaseBtn.setAttribute("disabled", true);
    makePurchaseBtn.classList.remove("hover:bg-hover-color");
    cartItem.classList.remove("h-[80vh]");
  }
});
// onclick sell200 copied
const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", () => {
  // Get the text from the button
  const textToCopy = copyButton.textContent;

  // Create a temporary textarea element to copy the text
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = textToCopy;
  document.body.appendChild(tempTextarea);

  // Select and copy the text
  tempTextarea.select();
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(tempTextarea);

  // Notify the user
  alert("Text copied to clipboard: " + textToCopy);
});
