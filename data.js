import Image1 from './src/assets/ert.jpg';
import Image2 from './src/assets/tomatoes.webp';
import Image3 from './src/assets/watermelon.jpg';

//categories
import Cat1 from './src/assets/fruits.jpg';
import Cat2 from './src/assets/vegetables.jpg';
import Cat3 from'./src/assets/cereals.jpg';


export const dishes = [

    {
      id: 2,
      title: "Product title goes here",
      price: 550,
      image: Image1,
      description: "Product description goes here",
      categories : ["gin", "liquor", "new"],
      stars: 4.5,
      
    },
    {
      id: 3,
      title: "Product title goes here",
      price: 550,
      image: Image2,
      description: "Product description goes here",
      categories : ["gin", "liquor", "new"],
      stars: 4.5,
      
    },
    {
      id: 4,
      title: "Product title goes here",
      price: 550,
      image: Image3,
      description: "Product description goes here",
      categories : ["gin", "liquor", "new"],
      stars: 4.5,
      
    },
    {
      id: 5,
      title: "Product title goes here",
      price: 550,
      image: Image1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.",
      categories : ["gin", "liquor", "new"],
      stars: 4.5,
      
    }
  ];


  export const categories = [
    {
      id: 1,
      title: "Fruits",
      image: Cat1,
      link: ""
    },
    {
      id: 2,
      title: "Vegetables",
      image: Cat2,
      link: ""
    },
    {
      id: 3,
      title: "Cereals",
      image: Cat3,
      link: ""
    },
  ]