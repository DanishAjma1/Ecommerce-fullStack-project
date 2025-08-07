export function getItemsFromLocalStorage(){
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (items) {
      const updatedCartItems = [...items];
      updatedCartItems.map((_item, index) => (
        updatedCartItems[index] = { ...updatedCartItems[index], quantity: 1 }
      ));
      return updatedCartItems;
    }
  };