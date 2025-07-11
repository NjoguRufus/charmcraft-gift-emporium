import React from 'react';
import { Heart, Users, Award, Sparkles, Gift, Target, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Crafted with Love',
      description: 'Every basket is thoughtfully curated with care, attention to detail, and genuine love for creating special moments.'
    },
    {
      icon: Sparkles,
      title: 'Quality First',
      description: 'We source only the finest products from trusted artisans and premium brands to ensure exceptional quality.'
    },
    {
      icon: Users,
      title: 'Personal Touch',
      description: 'Our dedicated team works personally with each order to create meaningful and memorable gift experiences.'
    },
    {
      icon: Award,
      title: 'Excellence Driven',
      description: 'We strive for excellence in every aspect, from product selection to packaging and customer service.'
    }
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9c4e2bb?w=300&h=300&fit=crop&crop=face',
      bio: 'Passionate about creating meaningful connections through thoughtful gifting.'
    },
    {
      name: 'James Rodriguez',
      role: 'Head of Curation',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Expert in sourcing unique and premium products from around the world.'
    },
    {
      name: 'Emily Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Designs beautiful presentations that make every unboxing magical.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '100+', label: 'Unique Products' },
    { number: '4.9★', label: 'Average Rating' },
    { number: '5 Years', label: 'Experience' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549652398-ead5f89a3bd8?w=1200&h=800&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Gift className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Creating Moments That
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Matter</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At CharmCraft, we believe that the perfect gift has the power to strengthen relationships, 
              celebrate milestones, and create lasting memories. Our mission is to help you express 
              your feelings through beautifully curated gift baskets.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Our Journey Began with a Simple Idea
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2019, CharmCraft started when our founder Sarah realized how difficult 
                  it was to find the perfect gift that truly conveyed her feelings. She wanted something 
                  more personal than generic presents, but more convenient than sourcing individual items.
                </p>
                <p>
                  What began as a small operation in Sarah's kitchen has grown into a beloved brand 
                  trusted by thousands of customers. We've maintained our commitment to quality, 
                  personalization, and the belief that every gift should tell a story.
                </p>
                <p>
                  Today, we continue to handpick each item in our collections, work with local artisans, 
                  and create custom experiences that bring joy to both the giver and receiver.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative animate-float">
                <img
                  src="https://images.unsplash.com/photo-1549652398-ead5f89a3bd8?w=600&h=400&fit=crop"
                  alt="Our story"
                  className="rounded-2xl shadow-elegant w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-lg p-4 shadow-card">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-primary fill-primary" />
                    <span className="text-sm font-medium">Since 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from product selection to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind every beautiful basket and exceptional experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow duration-300">
                <CardContent className="pt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12">
            <Target className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To make meaningful gifting accessible and effortless by creating thoughtfully curated 
              experiences that strengthen connections, celebrate special moments, and spread joy. 
              We believe every gift should be as unique as the relationship it represents.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;