import Image1 from './src/assets/burger.jpg';
import Image2 from './src/assets/pizza.jpg';
import Image3 from './src/assets/recipe.jpg';
import Image4 from './src/assets/chicken.jpg';
import Image5 from './src/assets/cake.jpg';
import Image6 from './src/assets/drink.jpg';

//categories
import Cat1 from './src/assets/categories/gin-product-cat3.webp';
import Cat2 from './src/assets/categories/icon-beer.webp';
import Cat3 from './src/assets/categories/icon-cognac-brandy.webp';
import Cat4 from './src/assets/categories/icon-vodka.webp';
import Cat5 from './src/assets/categories/icon-tequila.webp';
import Cat6 from './src/assets/categories/icon-sparkling.webp';
import Cat7 from './src/assets/categories/icon-rum.webp';
import Cat8 from './src/assets/categories/mixers-space2.webp';
import Cat9 from './src/assets/categories/icon-ice-cream.webp';

export const dishes = [
    {
      id: 1,
      title: "Best Gin",
      price: 1320,
      image: Cat1,
      description: "The London Dry Gin",
      categories : ["gin", "liquor", "dry"],
      stars: 4.5,
      
    },
    {
      id: 2,
      title: "delicious food",
      price: 550,
      image: Image2,
      description: "1 Chicken Piece with regular chips",
      categories : ["gin", "liquor", "new"],
      stars: 4.5,
      
    },
    {
      id: 3,
      title: "tasty food",
      price: 550,
      image: Image1,
      description: "1 Chicken Piece with regular chips",
      categories : ["gin", "liquor", "new"],
      stars: 4.5,
      
    },
    {
      id: 4,
      title: "tasty food",
      price: 550,
      image: Image2,
      description: "1 Chicken Piece with regular chips",
      categories : ["gin", "liquor", "new"],
      stars: 4.5,
      
    },
    {
      id: 5,
      title: "delicious food",
      price: 550,
      image: Image1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque.",
      categories : ["gin", "liquor", "new"],
      stars: 4.5,
      
    },
    {
      id: 6,
      title: "Coke soft drink",
      price: 140,
      image: Image2,
      description: "Cocacola Carbonated soft drink",
      categories : ["drink", "mixer", "carbonated"],
      stars: 4.5,
      
    },
  ];


  export const categories = [
    {
      id: 1,
      title: "Vodka",
      image: Cat4,
      link: "https://www.oaks.delivery/"
    },
    {
      id: 2,
      title: "Beer",
      image: Cat2,
      link: "https://www.oaks.delivery/"
    },
    {
      id: 3,
      title: "Brandy",
      image: Cat3,
      link: "https://www.oaks.delivery/"
    },
    {
      id: 4,
      title: "Tequila",
      image: Cat5,
      link: "https://www.oaks.delivery/"
    },
    {
      id: 5,
      title: "Sparklink",
      image: Cat6,
      link: "https://www.oaks.delivery/"
    },
    {
      id: 6,
      title: "Mixers",
      image: Cat8,
      link: "https://www.oaks.delivery/"
    },
    {
      id: 7,
      title: "Rum",
      image: Cat7,
      link: "https://www.oaks.delivery/"
    },
    {
      id: 8,
      title: "Snacks",
      image: Cat9,
      link: "https://www.oaks.delivery/"
    },
  ]