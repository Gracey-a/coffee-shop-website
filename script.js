// ===== HAMBURGER MENU TOGGLE =====
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburgerBtn');
  
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
}

function closeMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburgerBtn');
  
  navLinks.classList.remove('active');
  hamburger.classList.remove('open');
}

// ===== MENU DATA (UPDATED) =====
const menuItems = [
  { id: 1, name: "Espresso Classics", desc: "Single origin espresso, macchiato, cortado", price: 4.5, icon: "☕" },
  { id: 2, name: "Velvet Oat Latte", desc: "Smooth oat milk with honey & lavender", price: 5.8, icon: "🥛" },
  { id: 3, name: "Caramel Brûlée", desc: "Rich caramel with vanilla bean notes", price: 6.2, icon: "🍯" },
  { id: 4, name: "Butter Croissant", desc: "Flaky, golden, melt-in-your-mouth", price: 3.5, icon: "🥐" },
  { id: 5, name: "Matcha Latte", desc: "Ceremonial grade matcha, steamed milk", price: 5.5, icon: "🍵" },
  { id: 6, name: "Vegan Banana Bread", desc: "Plant-based, moist & spiced", price: 4.2, icon: "🍌" }
];

// ===== BLOG DATA (UNCHANGED) =====
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

// ===== EVENTS DATA (UNCHANGED) =====
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

// ===== RENDER MENU (UPDATED) =====
function displayMenu() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  grid.innerHTML = menuItems.map(item => `
    <div class="menu-card">
      <span class="menu-icon">${item.icon}</span>
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="price">$${item.price.toFixed(2)}</div>
      <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
    </div>
  `).join('');
}

// ===== CART FUNCTIONS (UPDATED WITH TOAST) =====
function addToCart(itemId) {
  const item = menuItems.find(i => i.id === itemId);
  const existing = cart.find(i => i.id === itemId);
  if (existing) existing.quantity++;
  else cart.push({ ...item, quantity: 1 });
  updateCartUI();
  showToast(`${item.name} added ✨`);
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.quantity, 0);
  document.getElementById('cartCount').textContent = count;
  const container = document.getElementById('cartItems');
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = '<p style="color:#6A5340; text-align:center; padding:20px 0;">Your cart is empty ☕</p>';
  } else {
    container.innerHTML = cart.map(item => `
      <div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid #f0ebe6;">
        <span>${item.name} x${item.quantity}</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('');
  }
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  document.getElementById('cartTotal').textContent = `Total: $${total.toFixed(2)}`;
}

function openCart() {
  updateCartUI();
  const modal = document.getElementById('cartModal');
  if (modal) {
    modal.style.display = 'flex';
    document.getElementById('checkoutForm').style.display = 'none';
    document.getElementById('orderMessage').innerHTML = '';
  }
}

function closeCart() {
  const modal = document.getElementById('cartModal');
  if (modal) modal.style.display = 'none';
}

function showCheckoutForm() {
  if (cart.length === 0) { alert('Your cart is empty!'); return; }
  document.getElementById('checkoutForm').style.display = 'block';
}

function submitOrder() {
  const name = document.getElementById('customerName').value.trim();
  const email = document.getElementById('customerEmail').value.trim();
  if (!name || !email) { alert('Please enter your name and email'); return; }
  const details = cart.map(i => `${i.name} x${i.quantity} – $${(i.price * i.quantity).toFixed(2)}`).join('\n');
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const msg = `NEW ORDER!\n\nCustomer: ${name}\nEmail: ${email}\n\n${details}\n\nTotal: $${total.toFixed(2)}`;
  navigator.clipboard.writeText(msg);
  document.getElementById('orderMessage').innerHTML = '<div style="background:#4CAF50; color:white; padding:12px; border-radius:12px; text-align:center;">✅ Order placed! Details copied ☕</div>';
  cart = [];
  updateCartUI();
  setTimeout(closeCart, 2000);
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

// ===== SLIDER (UPDATED) =====
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.getElementById('sliderDots');
  if (!dots) return;
  dots.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dots.appendChild(dot);
  });
}

function changeSlide(dir) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return;
  slides[currentSlide].classList.remove('active');
  if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + dir + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return;
  slides[currentSlide].classList.remove('active');
  if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

// ===== BLOG FUNCTIONS (UNCHANGED) =====
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
    const modalBody = document.getElementById('blogModalBody');
    if (modalBody) {
      modalBody.innerHTML = `
        <h2>${post.title}</h2>
        <div class="blog-date">📅 ${post.date}</div>
        <img src="${post.image}" alt="${post.title}" style="width:100%; border-radius:16px; margin:20px 0;">
        <p style="line-height:1.6;">${post.content}</p>
      `;
    }
    const modal = document.getElementById('blogModal');
    if (modal) modal.style.display = 'flex';
  }
}

function closeBlogModal() {
  const modal = document.getElementById('blogModal');
  if (modal) modal.style.display = 'none';
}

// ===== EVENTS FUNCTIONS (UNCHANGED) =====
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
  const eventNameInput = document.getElementById('eventName');
  if (eventNameInput) eventNameInput.value = eventName;
  const modal = document.getElementById('eventModal');
  if (modal) modal.style.display = 'flex';
}

function closeEventModal() {
  const modal = document.getElementById('eventModal');
  if (modal) modal.style.display = 'none';
}

function registerForEvent(event) {
  event.preventDefault();
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const eventName = document.getElementById('eventName').value;
  
  if (name && email) {
    const messageDiv = document.getElementById('eventRegMessage');
    if (messageDiv) {
      messageDiv.innerHTML = '<div class="success-message">✅ Registration successful! We\'ll email you details soon.</div>';
    }
    setTimeout(() => closeEventModal(), 2000);
    const form = document.getElementById('eventRegistrationForm');
    if (form) form.reset();
  }
}

// ===== NEWSLETTER & CONTACT =====
function setupNewsletter() {
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.onsubmit = function(e) {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value;
      if (email) {
        const messageDiv = document.getElementById('newsletterMessage');
        if (messageDiv) {
          messageDiv.innerHTML = '<div style="color:#D4A373;">✅ Thanks! Check your inbox for a surprise ☕</div>';
        }
        document.getElementById('newsletterEmail').value = '';
        setTimeout(() => {
          if (messageDiv) messageDiv.innerHTML = '';
        }, 4000);
      }
    };
  }
}

function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.onsubmit = function(e) {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();
      
      if (name && email && message) {
        const messageDiv = document.getElementById('contactFormMessage');
        if (messageDiv) {
          messageDiv.innerHTML = '<div style="background:#4CAF50; color:white; padding:12px; border-radius:16px; text-align:center;">✅ Message sent! We\'ll reply within 24h.</div>';
        }
        contactForm.reset();
        setTimeout(() => {
          if (messageDiv) messageDiv.innerHTML = '';
        }, 5000);
      }
    };
  }
}

function setupEventRegistration() {
  const eventForm = document.getElementById('eventRegistrationForm');
  if (eventForm) {
    eventForm.onsubmit = registerForEvent;
  }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  // Hamburger close on link click
  const navLinksList = document.querySelectorAll('.nav-links a');
  navLinksList.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });

  // Display menu (homepage)
  displayMenu();
  updateCartUI();
  initSlider();

  // Blog & events (if those pages exist)
  displayBlogPosts();
  displayEvents();

  // Forms
  setupNewsletter();
  setupContactForm();
  setupEventRegistration();

  // Auto-slide for gallery
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
