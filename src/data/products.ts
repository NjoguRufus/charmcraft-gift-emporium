import { Product } from '@/types';

export const sampleProducts: Product[] = [
  {
    id: '1',
    title: 'Romantic Date Night Basket',
    price: 89.99,
    description: 'Perfect for a cozy evening with your loved one. Includes gourmet chocolates, wine, candles, and romantic essentials.',
    category: 'Romance',
    images: [
      'https://images.unsplash.com/photo-1549652398-ead5f89a3bd8?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1566479179817-c3b08e1bb3a3?w=500&h=400&fit=crop'
    ],
    stock: 15,
    isCustomizable: true,
    occasion: 'Anniversary',
    rating: 4.8,
    reviews: 45
  },
  {
    id: '2',
    title: 'New Baby Celebration Bundle',
    price: 124.99,
    description: 'Welcome the little one with this adorable collection of baby essentials, soft toys, and keepsakes.',
    category: 'Baby',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=400&fit=crop'
    ],
    stock: 12,
    isCustomizable: true,
    occasion: 'New Baby',
    rating: 4.9,
    reviews: 32
  },
  {
    id: '3',
    title: 'Gourmet Tea & Treats Collection',
    price: 67.99,
    description: 'A sophisticated selection of premium teas, artisanal cookies, and elegant accessories for the tea enthusiast.',
    category: 'Food & Beverage',
    images: [
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1597318067420-2cf7acfe80d8?w=500&h=400&fit=crop'
    ],
    stock: 20,
    isCustomizable: true,
    occasion: 'Thank You',
    rating: 4.7,
    reviews: 58
  },
  {
    id: '4',
    title: 'Spa Day Relaxation Kit',
    price: 156.99,
    description: 'Transform any space into a personal spa with luxury bath products, aromatherapy oils, and plush accessories.',
    category: 'Wellness',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&h=400&fit=crop'
    ],
    stock: 8,
    isCustomizable: true,
    occasion: 'Self Care',
    rating: 4.9,
    reviews: 74
  },
  {
    id: '5',
    title: 'Birthday Celebration Deluxe',
    price: 199.99,
    description: 'Make their special day unforgettable with this premium birthday basket featuring gourmet treats and festive surprises.',
    category: 'Birthday',
    images: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&h=400&fit=crop'
    ],
    stock: 6,
    isCustomizable: true,
    occasion: 'Birthday',
    rating: 4.8,
    reviews: 91
  },
  {
    id: '6',
    title: 'Coffee Connoisseur Collection',
    price: 78.99,
    description: 'For the coffee lover - premium beans, artisanal mugs, and gourmet accompaniments.',
    category: 'Food & Beverage',
    images: [
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop'
    ],
    stock: 18,
    isCustomizable: false,
    occasion: 'Thank You',
    rating: 4.6,
    reviews: 37
  }
];