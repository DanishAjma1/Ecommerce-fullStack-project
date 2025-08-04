export function addItemToLocalStorage(newItem){
    if (!localStorage.getItem("cartItems")) {
      localStorage.setItem("cartItems", JSON.stringify([]));
    }
    const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    existingItems.push(newItem);
    localStorage.setItem("cartItems", JSON.stringify(existingItems));
  };