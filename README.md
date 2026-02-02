# Azra Website Clone

A comprehensive clone of the Azra website (https://www.azra.com/), built with HTML, CSS, and JavaScript.

## Project Structure

```
leidos-clone/
├── index.html                    # Home page
├── css/
│   ├── styles.css               # Main stylesheet
│   └── responsive.css            # Mobile and responsive styles
├── js/
│   ├── main.js                  # Global functions and utilities
│   ├── navigation.js             # Navigation menu functionality
│   ├── carousel.js              # Social media carousel
│   └── contact.js               # Contact form handling
├── pages/
│   ├── company.html             # Company information
│   ├── markets.html             # Markets and industries
│   ├── capabilities.html        # Services and capabilities
│   ├── careers.html             # Career opportunities
│   ├── insights.html            # News and insights
│   ├── contact.html             # Contact form
│   ├── privacy.html             # Privacy policy
│   ├── terms.html               # Terms of service
│   ├── smarter.html             # Smart solutions page
│   ├── products.html            # Products page
│   ├── customers.html           # Customers page
│   ├── suppliers.html           # Suppliers page
│   ├── employees.html           # Employee resources
│   ├── accessibility.html       # Accessibility information
│   ├── newsroom.html            # Newsroom/press releases
│   ├── trust.html               # Trust and security
│   └── accessibility.html       # Accessibility
├── assets/
│   ├── images/                  # Image assets
│   └── fonts/                   # Font files
└── README.md                    # This file
```

## Features

### Design & Layout
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design matching the Azra brand
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **Dark Mode Support**: Automatic dark mode support based on system preferences

### Navigation
- **Sticky Header**: Header stays visible while scrolling
- **Dropdown Menus**: Multi-level navigation menus
- **Mobile Menu**: Hamburger menu for mobile devices
- **Active Navigation**: Current page highlighting in navigation

### Interactive Elements
- **Contact Form**: Functional contact form with validation
- **Social Media Carousel**: Swipeable carousel for social media feed
- **Smooth Scrolling**: Smooth page scrolling behavior
- **Cookie Banner**: Privacy-compliant cookie consent banner

### Performance
- **Lazy Loading**: Image lazy loading support
- **Debounced Events**: Optimized event handlers for better performance
- **CSS Grid & Flexbox**: Modern layout techniques

### Pages Included

1. **Home Page (index.html)** - Hero section with call-to-action, insights grid, partner section, job search, community section
2. **Company (pages/company.html)** - Company information and leadership
3. **Markets (pages/markets.html)** - Industries and markets served
4. **Capabilities (pages/capabilities.html)** - Services and technical capabilities
5. **Careers (pages/careers.html)** - Career opportunities and benefits
6. **Insights (pages/insights.html)** - News and company updates
7. **Contact (pages/contact.html)** - Contact form and information
8. **Privacy (pages/privacy.html)** - Privacy policy
9. **Terms (pages/terms.html)** - Terms of service
10. **Smarter Solutions (pages/smarter.html)** - Innovation showcase

## How to Use

1. **Open in Browser**: Simply open `index.html` in any modern web browser
2. **Live Server**: For development, use VS Code's Live Server extension or similar local development server
3. **Navigation**: Use the top navigation menu to explore different sections
4. **Contact Form**: Fill out the contact form to see validation and success messages

## Customization

### Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #003d7a;
    --secondary-color: #00a4e4;
    --accent-color: #f15a24;
    /* ... more variables */
}
```

### Content
Update content in individual HTML files in the `pages/` directory.

### Images
Replace placeholder images in `assets/images/` with actual company images.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Screen reader friendly
- Reduced motion support

## Contact Form

The contact form includes:
- Client-side validation
- Required field checking
- Email format validation
- Subject selection
- Success message display
- Privacy policy agreement

## Scripts

### main.js
- Cookie banner management
- Utility functions
- Event tracking
- Lazy loading

### navigation.js
- Mobile menu toggle
- Submenu handling
- Window resize handling
- Active page highlighting

### carousel.js
- Carousel navigation
- Touch/swipe support
- Keyboard navigation
- Auto-scroll button management

### contact.js
- Form validation
- Email validation
- Success message display
- Event tracking

## Notes

- This is a static website clone for demonstration purposes
- External links (investors.azra.com, career sites) point to real websites
- The contact form submission is simulated (would need backend in production)
- Images are placeholder references and should be replaced with actual assets

## License

This project is created for educational and demonstration purposes.

## Credits

Built as a comprehensive website clone project demonstrating:
- HTML5 semantic markup
- Modern CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript
- Responsive design
- Accessibility best practices
- User experience design
