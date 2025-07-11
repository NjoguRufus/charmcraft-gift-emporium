# CharmCraft Gift Emporium

## Business Model

CharmCraft Gift Emporium is an e-commerce platform specializing in curated and customizable gift baskets for a variety of occasions. The business model focuses on:

- **Curated Collections:** Offering themed gift baskets (e.g., romance, baby, wellness, food & beverage) with high-quality, handpicked products.
- **Customization:** Users can build their own baskets, choosing items and basket styles for a personalized gifting experience.
- **Direct-to-Consumer Sales:** Customers purchase directly through the web platform, with a seamless cart and checkout process.
- **Premium Experience:** Emphasis on elegant presentation, premium product sourcing, and memorable unboxing.
- **Customer Support:** Accessible contact options and a focus on customer satisfaction, as reflected in testimonials and high ratings.

## Tech Stack

- **Frontend:** React (TypeScript), Vite, shadcn-ui, Tailwind CSS
- **State Management:** React Context API for authentication and cart management
- **Backend/Database:** Firebase (Authentication, Firestore, Analytics)
- **Routing:** React Router DOM
- **Forms & Validation:** React Hook Form, Zod
- **Other Libraries:** Radix UI, Lucide Icons, Embla Carousel, Recharts, and more

## Key Features

- **User Authentication:** Email/password and Google sign-in via Firebase Auth.
- **Product Catalog:** Filterable and searchable product listings with detailed product pages.
- **Custom Basket Builder:** Intuitive UI for assembling personalized gift baskets.
- **Cart & Checkout:** Persistent cart, multi-step checkout with shipping, billing, and payment info.
- **Order Summary & Confirmation:** Real-time calculation of totals, shipping, and tax.
- **Security Badges:** Visual cues for SSL and secure checkout.
- **Responsive Design:** Mobile-friendly and accessible UI.
- **Customer Testimonials:** Social proof and trust-building.

## Challenges Faced

- **Payment Integration:** The current implementation simulates payment processing; integration with real payment gateways (e.g., Stripe) is a planned improvement.
- **Data Security:** Ensuring secure handling of user data, especially around authentication and checkout, required careful use of Firebase and protected routes.
- **Customization Logic:** Building a flexible yet user-friendly custom basket builder that handles dynamic pricing and item selection.
- **Scalability:** Designing the product and cart data models to support future growth, more product types, and potential B2B features.
- **User Experience:** Balancing feature richness with a clean, intuitive interface.

## Security Measures

- **Authentication:** All sensitive routes are protected; only authenticated users can access checkout and order features.
- **Data Storage:** User and order data are stored securely in Firebase Firestore, with access rules enforced.
- **SSL:** The platform is designed to run over HTTPS, with clear SSL secure checkout messaging.
- **Input Validation:** All forms use validation (React Hook Form + Zod) to prevent malformed or malicious input.
- **Role Management:** User roles (user/admin) are stored in Firestore for future admin features.
- **Session Management:** Auth state is managed via Firebase, with secure sign-in and sign-out flows.

## Future Improvements

- **Real Payment Integration:** Add Stripe or another payment processor for live transactions.
- **Order Management:** Implement order history, tracking, and admin dashboards for fulfillment.
- **Product Reviews & Ratings:** Allow customers to leave reviews and ratings for products.
- **Wishlist & Gift Reminders:** Enable users to save favorite products and set reminders for important dates.
- **Notifications:** Email and in-app notifications for order updates and promotions.
- **Analytics Dashboard:** Advanced analytics for business insights and customer behavior.
- **Internationalization:** Support for multiple languages and currencies.
- **Accessibility:** Further improvements for WCAG compliance and inclusive design.
- **Marketing Integrations:** Connect with email marketing and CRM tools.

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone <YOUR_GIT_URL>
   cd charmcraft-gift-emporium
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. **Open in your browser:**  
   Visit [http://localhost:8080](http://localhost:8080) (or the port shown in your terminal).

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
