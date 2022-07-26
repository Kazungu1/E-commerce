import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: "1",
      title: "Wacth Product 01",
      images: [
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/019703/1.jpg?3097",
        // "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
        // "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
        // "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 101,
      count: 1,
    },
    {
      _id: "2",
      title: "Wacth Product 02",
      images: [
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/495775/1.jpg?3074",
        // "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
        // "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
        // "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 102,
      count: 1,
    },
    {
      _id: "3",
      title: "Wacth Product 03",
      images: [
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/294983/1.jpg?1769",
        // "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
        // "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
        // "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 103,
      count: 1,
    },
    {
      _id: "4",
      title: "Wacth Product 04",
      images: [
        "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/885207/1.jpg?2119",
        // "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
        // "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
        // "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 104,
      count: 1,
    },
    {
      _id: "5",
      title: "Wacth Product 05",
      images: [
        "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/668275/1.jpg?9536",
        // "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
        // "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
        // "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 105,
      count: 1,
    },
    {
      _id: "6",
      title: "Wacth Product 06",
      images: [
        "https://riogiftshop.com/wp-content/uploads/2021/04/1ff54b59-9e47-4dae-8ba7-670fccfc6592.jpg",
        // "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
        // "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
        // "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
      ],
      description:
        "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      colors: ["red", "black", "teal"],
      sizes: ["XL", "L", "M", "XM", "LX"],
      price: 106,
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
