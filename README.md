# ☕ Hivey's brew Coffee Shop

A complete, multi-page coffee shop website with online ordering, blog, events calendar, and interactive features. Built with HTML5, CSS3, and vanilla JavaScript.

🔗 **Live Demo:** [https://gracey-a.github.io/coffee-shop-website/](https://gracey-a.github.io/coffee-shop-website/)

---

## 📋 Table of Contents
- [Features](#features)
- [Pages & Structure](#pages--structure)
- [Technologies Used](#technologies-used)
- [How to Use](#how-to-use)
- [Order System](#order-system)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [Credits](#credits)

---

## ✨ Features

### 🛒 **Online Ordering System**
- Add items to cart with quantity management
- Review orders before checkout
- Customer details collection
- Order summary copied to clipboard for easy processing

### 📰 **Coffee Blog**
- Three detailed coffee articles
- Modal popup for reading full posts
- Beautiful article cards with images

### 📅 **Events Calendar**
- Upcoming events with dates and times
- Event registration form
- Responsive event cards

### 🖼️ **Interactive Photo Gallery**
- Auto-advancing image slider
- Manual navigation with buttons and dots
- 4 high-quality café photos with captions

### 📧 **Newsletter Signup**
- Email subscription form
- Success message with confirmation
- Ready for integration with email marketing services

### 📝 **Contact Form**
- Name, email, and message fields
- Form validation
- Success message on submission

### 📱 **Fully Responsive Design**
- Works seamlessly on desktop, tablet, and mobile devices
- Mobile-first approach with flexible layouts
- Touch-friendly navigation

---

## 📄 Pages & Structure

| Page | Description | Key Features |
|------|-------------|--------------|
| **Home** (`index.html`) | Landing page with hero section | Menu with add-to-cart, photo slider, newsletter, contact form |
| **Our Story** (`about.html`) | Coffee shop background | Journey narrative, values grid, mission statement |
| **Coffee Blog** (`blog.html`) | Articles about coffee | 3 blog posts with modal reading experience |
| **Events** (`events.html`) | Upcoming events | Event cards with registration forms |

---

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic structure
- **CSS3** - Custom styling, Flexbox, Grid, animations
- **JavaScript (ES6)** - Interactive features, DOM manipulation, event handling

### Design
- **Google Fonts** - Playfair Display & Inter fonts
- **Pexels** - High-quality stock images
- **Custom CSS** - Modern, warm color palette (#2C2418, #E7C79E, #B97F44)

### Features
- **Local Storage** - (Ready for implementation) Cart persistence
- **Clipboard API** - Order summary copying
- **Modal Windows** - Blog reading, event registration, cart checkout

---

## 🚀 How to Use

### For Customers
1. **Browse the menu** on the homepage
2. **Click "Add to Cart"** for items you want
3. **Click the 🛒 cart icon** to review your order
4. **Enter your details** and submit your order
5. **Subscribe to the newsletter** for updates
6. **Register for events** on the Events page

### For Site Owners
1. **Update menu items** in `script.js` (menuItems array)
2. **Add blog posts** in `script.js` (blogPosts array)
3. **Add events** in `script.js` (events array)
4. **Update contact info** in `index.html` (contact section)
5. **Change images** by replacing image URLs
6. **Customize colors** in `style.css`

---

## 📁 Project Structure
coffee-shop-website/
│
├── index.html # Homepage with menu and cart
├── about.html # Story and values
├── blog.html # Coffee articles
├── events.html # Upcoming events
├── style.css # All styles (shared across pages)
├── script.js # All JavaScript functionality

---

## 🛒 Order System Explained

The order system works through these steps:

1. **Cart Management**
   - Items stored in JavaScript array
   - Quantity tracking for each item
   - Real-time cart count display

2. **Checkout Process**
   - Customer name and email required
   - Optional special instructions
   - Order summary generation

3. **Order Submission**
   - Order details copied to clipboard
   - Can be pasted into email, WhatsApp, or order management system
   - Success confirmation message

**To receive orders by email:** Integrate with Formspree or your preferred email service by updating the `submitOrder()` function in `script.js`.

---

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Dark Brown | `#2C2418` | Header, footer, buttons |
| Warm Beige | `#FEF9F0` | Background |
| Gold Accent | `#E7C79E` | Primary buttons, hover states |
| Orange Brown | `#B97F44` | Prices, accent elements |
| Light Brown | `#5A4A34` | Text |

---

## 🔮 Future Improvements

- [ ] **Database integration** - Store orders permanently
- [ ] **User accounts** - Save favorite items
- [ ] **Payment gateway** - Stripe or PayPal integration
- [ ] **Email notifications** - Send order confirmations
- [ ] **Search functionality** - Find menu items
- [ ] **Customer reviews** - Rate products
- [ ] **Loyalty program** - Points system
- [ ] **Order tracking** - Real-time status updates
- [ ] **Dark mode** - Theme toggle
- [ ] **Multi-language** - Internationalization

---

## 📸 Screenshots

### Homepage
![Homepage](https://via.placeholder.com/800x400?text=Coffee+Shop+Homepage)

### Menu with Cart
![Menu](https://via.placeholder.com/800x400?text=Menu+and+Shopping+Cart)

### Blog Page
![Blog](https://via.placeholder.com/800x400?text=Coffee+Blog)

### Events Page
![Events](https://via.placeholder.com/800x400?text=Events+Calendar)

---

## 🙏 Credits

- **Images:** [Pexels](https://www.pexels.com/) - Free stock photos
- **Fonts:** [Google Fonts](https://fonts.google.com/)
- **Icons:** Emoji/Unicode icons
- **Inspiration:** Modern specialty coffee shops

---

## 📞 Contact

For questions, feedback, or collaboration opportunities:

- **Email:** hello@hivey'sbrew.com
- **Phone:** +1 (212) 555-0923
- **Location:** 326 Roastery Lane, Downtown, NY 10013

---

## 📄 License

This project is open source and available for portfolio use. Feel free to modify and use for your own projects!

---

## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub!

---

**Built with ☕ and passion** | [Live Demo](https://gracey-a.github.io/coffee-shop-website/)
