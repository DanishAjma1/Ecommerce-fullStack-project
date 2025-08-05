export function removeItemFromLocalStorage(pro) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  if (cartItems) {
    const filteredItems = cartItems.filter((item) => {
      return item._id !== pro._id;
    });
    localStorage.setItem("cartItems", JSON.stringify(filteredItems));
  }
}
