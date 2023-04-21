export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  lightGray: '#B3B4B6',
  accent: '#FFC231',
  accentRed: '#FB5D2E',
  accentPink: '#F96165',
};

export const Categories = [

  //catagory 1
  {
    name: 'Burger',
    image: require('../assets/images/burger.png'),
    items: [

      //item 1
      {
        name: 'Classic Burger',
        weight: 120,
        rating: '5.0',
        price: 199,
        isTopOfTheWeek: true,
        image: require('../assets/images/burger/classicburger.png'),
        size: 'Large 8"',
        crust: 'Thick Crust',
        delivery: 25,
        ingredients: [
          require('../assets/images/flour.png'),
          require('../assets/images/cheese.png'),
          require('../assets/images/Sliced-Onion.png'),
          require('../assets/images/Tomato.png'),
        ],
      },

      //item 2
      {
        name: 'Aloo Tikki Burger',
        weight: 150,
        rating: '4.5',
        price: 99,
        isTopOfTheWeek: false,
        image: require('../assets/images/burger/alootikkiburger.png'),
        size: 'Large 12"',
        crust: 'Thick Crust',
        delivery: 20,
        ingredients: [
          require('../assets/images/Sliced-Onion.png'),
          require('../assets/images/Tomato.png'),
          require('../assets/images/cheese.png'),
          require('../assets/images/flour.png'),
        ],
      },

      //item 3
      {
        name: 'Biggie Cheese',
        weight: 250,
        rating: '4.2',
        price: 299,
        isTopOfTheWeek: false,
        image: require('../assets/images/burger/biggiecheese.png'),
        size: 'Large 10"',
        crust: 'Thick Crust',
        delivery: 35,
        ingredients: [
          require('../assets/images/Tomato.png'),
          require('../assets/images/cheese.png'),
          require('../assets/images/Sliced-Onion.png'),
          require('../assets/images/flour.png'),
        ],
      },
    ],
  },

  //catagory 2
  {
    name: 'Pizza',
    image: require('../assets/images/pizza.png'),
    items: [

      //item 1
      {
        name: 'Pepperoni Pizza',
        weight: 250,
        rating: '5.0',
        price: 199,
        isTopOfTheWeek: true,
        image: require('../assets/images/pizza/pepperonipizza.png'),
        size: 'Large 14"',
        crust: 'Thin Crust',
        delivery: 30,
        ingredients: [
          require('../assets/images/Tomato.png'),
          require('../assets/images/cheese.png'),
          require('../assets/images/Sliced-Onion.png'),
          require('../assets/images/flour.png'),
        ],
      },

      //item 2
      {
        name: 'Plain Cheese Pizza',
        weight: 300,
        rating: '4.5',
        price: 299,
        isTopOfTheWeek: false,
        image: require('../assets/images/pizza/plaincheesepizza.png'),
        size: 'Large 16"',
        crust: 'Thin Cheese',
        delivery: 25,
        ingredients: [
          require('../assets/images/Sliced-Onion.png'),
          require('../assets/images/flour.png'),
          require('../assets/images/cheese.png'),
          require('../assets/images/Tomato.png'),
        ],
      },

      //item 3
      {
        name: 'Mexican Green Wave',
        weight: 350,
        rating: '4.2',
        price: 499,
        isTopOfTheWeek: false,
        image: require('../assets/images/pizza/mexicangreenwave.png'),
        size: 'Large 15"',
        crust: 'Thin Crust',
        delivery: 45,
        ingredients: [
          require('../assets/images/flour.png'),
          require('../assets/images/cheese.png'),
          require('../assets/images/Tomato.png'),
          require('../assets/images/Sliced-Onion.png'),
        ],
      },
    ],
  },

  //catagory 3
  {
    name: 'Soft Drinks',
    image: require('../assets/images/softdrinks.png'),
    items: [

      //item 1
      {
        name: 'Coco Cola',
        weight: 200,
        rating: '5.0',
        price: 299,
        isTopOfTheWeek: true,
        image: require('../assets/images/softdrinks/cocacola.png'),
        size: 'Medium Glass',
        crust: 'Small Ice',
        delivery: 10,
        ingredients: [require('../assets/images/softdrinks/cocacola.png')],
      },

      //item 2
      {
        name: 'Orange Juice',
        weight: 500,
        rating: '4.5',
        price: 199,
        isTopOfTheWeek: false,
        image: require('../assets/images/softdrinks/orange.png'),
        size: 'LArge Glass',
        crust: 'Large Ice',
        delivery: 8,
        ingredients: [require('../assets/images/softdrinks/orange.png')],
      },

      //item 3
      {
        name: 'Mango Juice',
        weight: 150,
        rating: '4.2',
        price: 99,
        isTopOfTheWeek: false,
        image: require('../assets/images/softdrinks/mango.png'),
        size: 'Large Glass',
        crust: 'Small Ice',
        delivery: 5,
        ingredients: [require('../assets/images/softdrinks/mango.png')],
      },
    ],
  },
];
