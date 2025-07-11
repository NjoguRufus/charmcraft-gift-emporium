import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gift, Heart, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/data/products';

const Home = () => {
  const featuredProducts = sampleProducts.slice(0, 3);
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely beautiful baskets! The attention to detail is incredible.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9c4e2bb?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Perfect gift for my wife's birthday. She loved every item!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Davis",
      rating: 5,
      comment: "The custom basket option is amazing. Highly recommend!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549652398-ead5f89a3bd8?w=1200&h=800&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>Handcrafted with Love</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Curated Gift Baskets for
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Every Occasion</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Create memorable moments with our thoughtfully designed gift baskets. 
                  Perfect for celebrations, appreciation, or just because.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop">
                  <Button size="xl" className="group">
                    Shop Collections
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/custom">
                  <Button variant="premium" size="xl">
                    <Gift className="mr-2 w-5 h-5" />
                    Build Custom Basket
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Unique Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.9★</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative lg:ml-12">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-6 opacity-20" />
                <img
                  src="https://i.pinimg.com/1200x/1b/01/fb/1b01fbf1b02b0c1ba2a9ee01ccf99ec5.jpg"
                  alt="Beautiful gift basket"
                  className="relative rounded-2xl shadow-elegant w-full h-96 object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-card">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-primary fill-primary" />
                    <span className="text-sm font-medium">Made with Passion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Featured Collections
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular gift baskets, carefully curated for different occasions and personalities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/shop">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Gift className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Custom Curation</h3>
              <p className="text-muted-foreground">
                Personalize every basket with our intuitive customization tools and expert recommendations.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Premium Quality</h3>
              <p className="text-muted-foreground">
                Only the finest products make it into our baskets, ensuring every gift creates lasting memories.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Elegant Presentation</h3>
              <p className="text-muted-foreground">
                Beautiful packaging and thoughtful presentation make every delivery a special moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it - hear from our happy customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-card">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-medium text-card-foreground">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;