export function getItemsFromLocalStorage(){
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (items) {
      const updatedCartItems = [...items];
      return updatedCartItems;
    }
  };