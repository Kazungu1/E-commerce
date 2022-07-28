import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Men's Sneakers Shoes",
      images: [
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/019703/1.jpg?3097",
        // description: "Simple business shoulder bag for men Type: Shoulder bag Casual style Gender: Men Closure Type: Zipper Occasion: Multifunctional Main material: artificial leather "
      ],
      description:
        "Simple business shoulder bag for men Type: Shoulder bag Casual style Gender: Men Closure Type: Zipper Occasion: Multifunctional Main material: artificial leather ",
      price: 1200,
      count: 1,
    },
    {
      _id: "2",
      title: " Men's Shoulder Bag-Brown",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvktzEo3rpSylrSCA1BtYtv7F50cCMCDb2AQ&usqp=CAU",
      ],
      description:
        "Simple business shoulder bag for men Type: Shoulder bag Casual style Gender: Men Closure Type: Zipper Occasion: Multifunctional Main material: artificial leather ",
      price: 2140,
      count: 1,
    },
    {
      _id: "3",
      title: "4 Pcs Men Khaki Trouser ",
      images: [
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/18825/1.jpg?7578",
      ],
      description:
        "This trouser is Stretching and breathable hence easier movement. Men Fashion-plus Offers the Best Price for this BluePerfect Quality.",
      price: 3980,
      count: 1,
    },
    {
      _id: "4",
      title: "Men Short Sleeve Polo Shirt",
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
      title: "Pure Leather Belt Double Sided",
      images: [
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/93/634565/1.jpg?6340",
      ],
      description:
        "Well well well to all those who are looking for a new exiting look,well look no further",
      price: 1300,
      count: 1,
    },
    {
      _id: "6",
      title: "Men's Watch Hands Gear Movement",
      images: [
        "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/780264/1.jpg?3411",
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
