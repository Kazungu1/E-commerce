import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Fashion Men's Sneakers Shoes",
      images: [
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/019703/1.jpg?3097",
        // description: "Simple business shoulder bag for men Type: Shoulder bag Casual style Gender: Men Closure Type: Zipper Occasion: Multifunctional Main material: artificial leather "
     
      ],
      description: "Simple business shoulder bag for men Type: Shoulder bag Casual style Gender: Men Closure Type: Zipper Occasion: Multifunctional Main material: artificial leather ",
      price: 1200,
      count: 1,
    },
    {
      _id: "2",
      title: "Fashion Men's Shoulder Bag-Brown",
      images: [
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/495775/1.jpg?3074",
   
      ],
      description:
        "Simple business shoulder bag for men Type: Shoulder bag Casual style Gender: Men Closure Type: Zipper Occasion: Multifunctional Main material: artificial leather ",
      price: 2140,
      count: 1,
    },
    {
      _id: "3",
      title: "Fashion 4 Pcs Men Khaki Trouser Stretch Slim Fit",
      images: [
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/294983/1.jpg?1769",
     
      ],
      description:
        "This trouser is Stretching and breathable hence easier movement. Men Fashion-plus Offers the Best Price for this BluePerfect Quality.",
      price: 3980,
      count: 1,
    },
    {
      _id: "4",
      title: "Fashion Men Short Sleeve Polo Shirt",
      images: [
        "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/885207/1.jpg?2119",
     
      ],
      description:
        "We offer you a wide choice in its exclusive range of Men's Clothing, quality and fashion at reasonable prices. Very classy and elegant polo shirts and t-shirts, perfect for work, a relaxing outing or every day at home.",
      price: 900,
      count: 1,
    },
    {
      _id: "5",
      title: "Fashion Pure Leather Double Sided",
      images: [
        "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/668275/1.jpg?9536",
   
      ],
      description:
        "Well well well to all those who are looking for a new exiting look,well look no further",
      price: 1300,
      count: 1,
    },
    {
      _id: "6",
      title: "Generic WINNER Men's Watch Fashion Luminous Hands Gear Movement",
      images: [
        "https://riogiftshop.com/wp-content/uploads/2021/04/1ff54b59-9e47-4dae-8ba7-670fccfc6592.jpg",
        "https://riogiftshop.com/wp-content/uploads/2021/04/1ff54b59-9e47-4dae-8ba7-670fccfc6592.jpg",
       
      ],
      description:
        "This watch with classic luxury retro design will give you an extraordinary artistic beauty.",
  
      price: 3600,
      count: 1,
    },
  ]);

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("The product has been added to cart.");
    }
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
