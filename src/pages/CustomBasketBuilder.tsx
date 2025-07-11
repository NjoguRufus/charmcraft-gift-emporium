import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, ShoppingCart, Sparkles, Gift, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';

// Sample customizable items for basket building
const basketItems = [
  {
    id: 'choc-1',
    name: 'Premium Dark Chocolate Truffles',
    price: 12.99,
    category: 'Chocolates',
    image: 'https://images.unsplash.com/photo-1549652398-ead5f89a3bd8?w=300&h=200&fit=crop',
    description: 'Handcrafted Belgian dark chocolate truffles'
  },
  {
    id: 'wine-1',
    name: 'Sparkling Rosé',
    price: 24.99,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1566479179817-c3b08e1bb3a3?w=300&h=200&fit=crop',
    description: 'Elegant sparkling rosé wine'
  },
  {
    id: 'candle-1',
    name: 'Vanilla Lavender Candle',
    price: 18.99,
    category: 'Candles',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
    description: 'Hand-poured soy candle with relaxing scent'
  },
  {
    id: 'tea-1',
    name: 'Premium Tea Collection',
    price: 16.99,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop',
    description: 'Assorted premium loose-leaf teas'
  },
  {
    id: 'cookies-1',
    name: 'Artisan Sugar Cookies',
    price: 14.99,
    category: 'Sweets',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=200&fit=crop',
    description: 'Hand-decorated sugar cookies'
  },
  {
    id: 'bath-1',
    name: 'Luxury Bath Bombs',
    price: 22.99,
    category: 'Bath & Body',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=300&h=200&fit=crop',
    description: 'Natural bath bombs with essential oils'
  },
  {
    id: 'flowers-1',
    name: 'Dried Flower Bouquet',
    price: 19.99,
    category: 'Flowers',
    image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?w=300&h=200&fit=crop',
    description: 'Beautiful preserved flower arrangement'
  },
  {
    id: 'cheese-1',
    name: 'Gourmet Cheese Selection',
    price: 28.99,
    category: 'Gourmet Food',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=300&h=200&fit=crop',
    description: 'Curated selection of artisan cheeses'
  }
];

const basketStyles = [
  {
    id: 'wicker',
    name: 'Classic Wicker Basket',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1586380951230-4d32ed2df9e9?w=300&h=200&fit=crop'
  },
  {
    id: 'wooden',
    name: 'Rustic Wooden Box',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop'
  },
  {
    id: 'fabric',
    name: 'Elegant Fabric Tote',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop'
  }
];

const CustomBasketBuilder = () => {
  const [selectedItems, setSelectedItems] = useState<{[key: string]: number}>({});
  const [selectedBasket, setSelectedBasket] = useState(basketStyles[0]);
  const [basketName, setBasketName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();

  const categories = ['All', ...Array.from(new Set(basketItems.map(item => item.category)))];

  const filteredItems = selectedCategory === 'All' 
    ? basketItems 
    : basketItems.filter(item => item.category === selectedCategory);

  const updateItemQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      const newSelected = { ...selectedItems };
      delete newSelected[itemId];
      setSelectedItems(newSelected);
    } else {
      setSelectedItems(prev => ({
        ...prev,
        [itemId]: quantity
      }));
    }
  };

  const getTotalPrice = () => {
    const itemsTotal = Object.entries(selectedItems).reduce((total, [itemId, quantity]) => {
      const item = basketItems.find(i => i.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
    return itemsTotal + selectedBasket.price;
  };

  const getTotalItems = () => {
    return Object.values(selectedItems).reduce((total, quantity) => total + quantity, 0);
  };

  const handleAddToCart = () => {
    const customBasket = {
      id: `custom-${Date.now()}`,
      title: basketName || 'Custom Gift Basket',
      price: getTotalPrice(),
      description: `Custom basket with ${getTotalItems()} items`,
      category: 'Custom',
      images: [selectedBasket.image],
      stock: 1,
      isCustomizable: true,
      occasion: 'Custom Gift'
    };

    const customizations = Object.entries(selectedItems).map(([itemId, quantity]) => {
      const item = basketItems.find(i => i.id === itemId);
      return `${quantity}x ${item?.name}`;
    });
    customizations.push(`Container: ${selectedBasket.name}`);

    addToCart(customBasket, 1, customizations);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/shop" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Link>
          <div className="flex items-center space-x-3 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
              Build Your Custom Basket
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Create the perfect personalized gift by selecting your favorite items and basket style.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Item Selection */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basket Name */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="w-5 h-5 mr-2" />
                  Name Your Basket
                </CardTitle>
              </CardHeader>
              <CardContent>
                <input
                  type="text"
                  placeholder="Enter a special name for your basket..."
                  value={basketName}
                  onChange={(e) => setBasketName(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
                />
              </CardContent>
            </Card>

            {/* Basket Style Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Choose Your Basket Style</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {basketStyles.map((style) => (
                    <div
                      key={style.id}
                      onClick={() => setSelectedBasket(style)}
                      className={cn(
                        "cursor-pointer rounded-lg border-2 p-3 transition-all duration-200",
                        selectedBasket.id === style.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <img
                        src={style.image}
                        alt={style.name}
                        className="w-full h-24 object-cover rounded-md mb-2"
                      />
                      <h3 className="font-medium text-foreground text-sm">{style.name}</h3>
                      <p className="text-primary font-semibold text-sm">+${style.price}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => {
                const quantity = selectedItems[item.id] || 0;
                return (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="flex">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover"
                      />
                      <CardContent className="flex-1 p-4">
                        <div className="flex flex-col h-full">
                          <div className="flex-1">
                            <h3 className="font-medium text-foreground text-sm mb-1">
                              {item.name}
                            </h3>
                            <p className="text-xs text-muted-foreground mb-2">
                              {item.description}
                            </p>
                            <Badge variant="secondary" className="text-xs">
                              {item.category}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <span className="font-semibold text-primary">
                              ${item.price}
                            </span>
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateItemQuantity(item.id, quantity - 1)}
                                disabled={quantity === 0}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-8 text-center text-sm font-medium">
                                {quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateItemQuantity(item.id, quantity + 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Basket Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Basket Name */}
                {basketName && (
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <h3 className="font-medium text-foreground">"{basketName}"</h3>
                  </div>
                )}

                {/* Selected Basket */}
                <div>
                  <h4 className="font-medium text-foreground mb-2">Container</h4>
                  <div className="flex items-center space-x-3 p-2 bg-secondary/50 rounded-lg">
                    <img
                      src={selectedBasket.image}
                      alt={selectedBasket.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{selectedBasket.name}</p>
                      <p className="text-sm text-primary">${selectedBasket.price}</p>
                    </div>
                  </div>
                </div>

                {/* Selected Items */}
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    Selected Items ({getTotalItems()})
                  </h4>
                  {Object.keys(selectedItems).length === 0 ? (
                    <p className="text-sm text-muted-foreground italic">
                      No items selected yet
                    </p>
                  ) : (
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {Object.entries(selectedItems).map(([itemId, quantity]) => {
                        const item = basketItems.find(i => i.id === itemId);
                        if (!item) return null;
                        return (
                          <div key={itemId} className="flex items-center justify-between text-sm">
                            <span className="flex-1">{item.name}</span>
                            <span className="text-muted-foreground mx-2">×{quantity}</span>
                            <span className="text-primary font-medium">
                              ${(item.price * quantity).toFixed(2)}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={Object.keys(selectedItems).length === 0}
                >
                  <Check className="w-4 h-4 mr-2" />
                  Add Custom Basket to Cart
                </Button>

                {/* Minimum Items Notice */}
                {Object.keys(selectedItems).length === 0 && (
                  <p className="text-xs text-muted-foreground text-center">
                    Select at least one item to create your custom basket
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomBasketBuilder;