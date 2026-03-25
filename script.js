// ===== MENU DATA =====
const menuItems = [
  { id: 1, name: "Espresso Classics", description: "Single origin espresso, macchiato, cortado", price: 4.5, icon: "☕" },
  { id: 2, name: "Oat Milk Latte", description: "Velvet oat latte with honey lavender", price: 5.8, icon: "🥛" },
  { id: 3, name: "Caramel Brûlée", description: "Smooth caramel with vanilla notes", price: 6.2, icon: "🍯" },
  { id: 4, name: "Butter Croissant", description: "Flaky, buttery French pastry", price: 3.5, icon: "🥐" },
  { id: 5, name: "Matcha Latte", description: "Ceremonial grade matcha", price: 5.5, icon: "🍵" },
  { id: 6, name: "Vegan Banana Bread", description: "Plant-based, moist & delicious", price: 4.2, icon: "🍌" }
];

// ===== BLOG DATA =====
const blogPosts = [
  {
    id: 1,
    title: "The Art of Pour-Over Coffee",
    date: "March 15, 2025",
    excerpt: "Discover the meticulous craft behind the perfect pour-over and why it brings out the best in single-origin beans.",
    content: "Pour-over coffee is more than just a brewing method—it's a ritual. The slow, controlled pour allows water to extract the delicate flavors from the coffee grounds, resulting in a clean, bright cup that highlights the bean's unique characteristics. At Hivey's Brew, our baristas take 3-4 minutes to craft each pour-over, ensuring every cup tells the story of its origin.",
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    title: "Ethiopian Coffee: A Flavor Journey",
    date: "March 8, 2025",
    excerpt: "Explore the rich history and unique tasting notes of Ethiopian Yirgacheffe beans.",
    content: "Ethiopia is considered the birthplace of coffee, and Yirgacheffe beans are among the most celebrated. Known for their bright acidity, floral aromas, and notes of jasmine and bergamot, these beans offer a complex tasting experience. Our direct trade partnership with small farms in the Sidama region ensures we bring you the freshest, most ethically sourced Ethiopian coffee.",
    image: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    title: "How to Taste Coffee Like a Pro",
    date: "March 1, 2025",
    excerpt: "Learn the fundamentals of coffee cupping and develop your palate.",
    content: "Coffee tasting, or cupping, is a professional practice used to evaluate coffee quality. Start by smelling the dry grounds, then add water and break the crust to release aromas. Finally, slurp the coffee to aerate it across your palate. Pay attention to acidity, body, and finish. With practice, you'll identify notes like chocolate, fruit, and floral undertones.",
    image: "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

// ===== EVENTS DATA =====
const events = [
  {
    id: 1,
    title: "Latte Art Workshop",
    date: "April 12, 2025",
    time: "10:00 AM - 12:00 PM",
    description: "Learn to create beautiful latte art from our master baristas. Perfect for beginners!",
    image: "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    title: "Coffee Cupping Experience",
    date: "April 19, 2025",
    time: "3:00 PM - 5:00 PM",
    description: "Taste and compare single-origin coffees from around the world.",
    image: "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    title: "Open Mic Night",
    date: "April 26, 2025",
    time: "7:00 PM - 10:00 PM",
    description: "Share your poetry, music, or stories in our cozy café. Free entry!",
    image: "https://images.pexels.com/photos/3764640/pexels-photo-3764640.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

let cart = [];
let currentSlide = 0;

// ===== MENU DISPLAY =====
function displayMenu() {
  const menuGrid = document.getElementById('menuGrid');
  if (menuGrid) {
    menuGrid.innerHTML = menuItems.map(item => `
      <div class="menu-card">
        <div class="menu-icon">${item.icon}</div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="price">$${item.price}</div>
        <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
      </div>
    `).join('');
  }
}

// ===== CART FUNCTIONS =====
function addToCart(itemId) {
  const item = menuItems.find(i => i.id === itemId);
  const existingItem = cart.find(i => i.id === itemId);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  

function updateCartDisplay() {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElement = document.getElementById('cartCount');
  if (cartCountElement) cartCountElement.textContent = cartCount;
  
  const cartItemsDiv = document.getElementById('cartItems');
  if (cartItemsDiv) {
    cartItemsDiv.innerHTML = cart.map(item => `
      <div class="cart-item">
        <span>${item.name} x${item.quantity}</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = `Total: $${total.toFixed(2)}`;
  }
}

function openCart() {
  updateCartDisplay();
  const modal = document.getElementById('cartModal');
  if (modal) {
    modal.style.display = 'flex';
    document.getElementById('checkoutForm').style.display = 'none';
    document.getElementById('orderMessage').innerHTML = '';
  }
}

function closeCart() {
  document.getElementById('cartModal').style.display = 'none';
}

function showCheckoutForm() {
  if (cart.length === 0) {
    alert('Your cart is empty! Add some items first.');
    return;
  }
  document.getElementById('checkoutForm').style.display = 'block';
}

function submitOrder() {
  const name = document.getElementById('customerName').value;
  const email = document.getElementById('customerEmail').value;
  const instructions = document.getElementById('specialInstructions').value;
  
  if (!name || !email) {
    alert('Please enter your name and email');
    return;
  }
  
  const orderDetails = cart.map(item => 
    `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
  ).join('\n');
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const orderMessage = `NEW ORDER!\n\nCustomer: ${name}\nEmail: ${email}\n\nORDER:\n${orderDetails}\n\nTotal: $${total.toFixed(2)}\n\nInstructions: ${instructions || 'None'}`;
  
  // Copy to clipboard and show success
  navigator.clipboard.writeText(orderMessage);
  document.getElementById('orderMessage').innerHTML = '<div class="success-message">✅ Order placed! Details copied. We\'ll prepare your coffee! ☕</div>';
  cart = [];
  updateCartDisplay();
  setTimeout(() => closeCart(), 2000);
}

// ===== PHOTO SLIDER =====
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('sliderDots');
  
  if (slides.length === 0) return;
  
  slides.forEach((slide, index) => {
    if (index === 0) slide.classList.add('active');
    else slide.classList.remove('active');
    
    if (dotsContainer) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.onclick = () => goToSlide(index);
      dotsContainer.appendChild(dot);
    }
  });
  
  if (slides.length > 0 && !document.querySelector('.slide.active')) {
    slides[0].classList.add('active');
  }
}

function changeSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  if (slides.length === 0) return;
  
  slides[currentSlide].classList.remove('active');
  if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
  
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  
  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  if (slides.length === 0) return;
  
  slides[currentSlide].classList.remove('active');
  if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
  
  currentSlide = index;
  
  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

// ===== BLOG FUNCTIONS =====
function displayBlogPosts() {
  const blogGrid = document.getElementById('blogGrid');
  if (blogGrid) {
    blogGrid.innerHTML = blogPosts.map(post => `
      <div class="blog-card" onclick="openBlogPost(${post.id})">
        <img src="${post.image}" alt="${post.title}">
        <div class="blog-card-content">
          <div class="blog-date">📅 ${post.date}</div>
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
        </div>
      </div>
    `).join('');
  }
}

function openBlogPost(postId) {
  const post = blogPosts.find(p => p.id === postId);
  if (post) {
    document.getElementById('blogModalBody').innerHTML = `
      <h2>${post.title}</h2>
      <div class="blog-date">📅 ${post.date}</div>
      <img src="${post.image}" alt="${post.title}" style="width:100%; border-radius:16px; margin:20px 0;">
      <p style="line-height:1.6;">${post.content}</p>
    `;
    document.getElementById('blogModal').style.display = 'flex';
  }
}

function closeBlogModal() {
  document.getElementById('blogModal').style.display = 'none';
}

// ===== EVENTS FUNCTIONS =====
function displayEvents() {
  const eventsGrid = document.getElementById('eventsGrid');
  if (eventsGrid) {
    eventsGrid.innerHTML = events.map(event => `
      <div class="event-card">
        <img src="${event.image}" alt="${event.title}">
        <div class="event-card-content">
          <div class="event-date">📅 ${event.date}</div>
          <div class="event-time">⏰ ${event.time}</div>
          <h3>${event.title}</h3>
          <p>${event.description}</p>
          <button class="register-btn" onclick="openEventRegistration('${event.title}')">Register →</button>
        </div>
      </div>
    `).join('');
  }
}

function openEventRegistration(eventName) {
  document.getElementById('eventName').value = eventName;
  document.getElementById('eventModal').style.display = 'flex';
}

function closeEventModal() {
  document.getElementById('eventModal').style.display = 'none';
}

function registerForEvent(event) {
  event.preventDefault();
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const eventName = document.getElementById('eventName').value;
  
  if (name && email) {
    document.getElementById('eventRegMessage').innerHTML = '<div class="success-message">✅ Registration successful! We\'ll email you details soon.</div>';
    setTimeout(() => closeEventModal(), 2000);
    document.getElementById('eventRegistrationForm').reset();
  }
}

// ===== NEWSLETTER =====
function setupNewsletter() {
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.onsubmit = function(e) {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value;
      if (email) {
        document.getElementById('newsletterMessage').innerHTML = '<div class="success-message">✅ Thanks for subscribing! Check your inbox soon.</div>';
        document.getElementById('newsletterEmail').value = '';
        setTimeout(() => {
          document.getElementById('newsletterMessage').innerHTML = '';
        }, 3000);
      }
    };
  }
}

// ===== CONTACT FORM =====
function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.onsubmit = function(e) {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const message = document.getElementById('contactMessage').value;
      
      if (name && email && message) {
        document.getElementById('contactFormMessage').innerHTML = '<div class="success-message">✅ Message sent! We\'ll get back to you within 24 hours.</div>';
        contactForm.reset();
        setTimeout(() => {
          document.getElementById('contactFormMessage').innerHTML = '';
        }, 3000);
      }
    };
  }
}

// ===== EVENT REGISTRATION =====
function setupEventRegistration() {
  const eventForm = document.getElementById('eventRegistrationForm');
  if (eventForm) {
    eventForm.onsubmit = registerForEvent;
  }
}

// ===== INITIALIZE EVERYTHING =====
document.addEventListener('DOMContentLoaded', function() {
  displayMenu();
  updateCartDisplay();
  initSlider();
  displayBlogPosts();
  displayEvents();
  setupNewsletter();
  setupContactForm();
  setupEventRegistration();
  
  // Auto-advance slider every 5 seconds
  if (document.querySelectorAll('.slide').length > 0) {
    setInterval(() => changeSlide(1), 5000);
  }
  
  // Close modals on outside click
  window.onclick = function(event) {
    const cartModal = document.getElementById('cartModal');
    const blogModal = document.getElementById('blogModal');
    const eventModal = document.getElementById('eventModal');
    
    if (event.target === cartModal) closeCart();
    if (event.target === blogModal) closeBlogModal();
    if (event.target === eventModal) closeEventModal();
  };
});
