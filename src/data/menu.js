export const menu = [
  {
    category: 'Coffee',
    items: [
      { name: 'House Drip', price: '450' },
      { name: 'Flat White', price: '650' },
      { name: 'Matcha Latte', price: '750' },
      { name: 'Cold Brew, orange peel', price: '700' },
    ],
  },
  {
    category: 'Tea & Other',
    items: [
      { name: 'Chamomile & Honey', price: '500' },
      { name: 'Masala Chai', price: '400' },
      { name: 'Hot Chocolate', price: '650' },
    ],
  },
  {
    category: 'Pastries',
    items: [
      { name: 'Almond Croissant', price: '600' },
      { name: 'Cardamom Bun', price: '450' },
      { name: 'Lemon Poppyseed Loaf', price: '500' },
      { name: 'Pistachio Baklava Roll', price: '550' },
    ],
  },
  {
    category: 'Light Bites',
    items: [
      { name: 'Shakshuka, sourdough', price: '1,100' },
      { name: 'Avocado Toast, chili oil', price: '950' },
      { name: 'Soup of the Day', price: '750' },
    ],
  },
];

// Featured favorites — photo-ready slots. Add your own image path once
// you have real photography; leave as null for a styled placeholder.
export const favorites = [
  {
    name: 'Matcha Latte',
    note: 'The one regulars order without looking at the menu',
    image: 'images/matcha latte.jpg',
  },
  {
    name: 'Cardamom Bun',
    note: 'Baked fresh every morning, gone by noon',
    image: 'images/cardamom buns .jpg',
  },
  {
    name: 'Shakshuka',
    note: 'A whole skillet, made for sharing',
    image: 'images/shakshuka .jpg',
  },
  {
    name: 'Cold Brew',
    note: 'Steeped 18 hours, orange peel finish',
    image: 'images/cold brew .jpg',
  },
];
