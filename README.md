# GROW Social Work Foundation Website

A modern, responsive, and accessible website for GROW (Grasping Resources, Offering Wisdom) Social Work Foundation built with React.js, Tailwind CSS, and React Router DOM.

## 🌱 About GROW Foundation

GROW Social Work Foundation is a non-profit organization dedicated to empowering communities by grasping resources and offering wisdom. Our mission is to create sustainable change through focused interventions in environment, education, skill development, and integrated community development.

## 🚀 Features

- **Modern Design**: Clean, minimal, and inspiring NGO-style design with nature-inspired colors
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Accessible**: SEO-friendly structure with semantic HTML
- **Smooth Navigation**: React Router DOM for client-side routing
- **Interactive Components**: Forms, animations, and smooth scrolling
- **Professional Layout**: Hero sections, cards, testimonials, and more

## 📁 Project Structure

```
grow-ngo/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── SectionCard.js
│   │   ├── Form.js
│   │   └── ScrollToTop.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Programs.js
│   │   ├── GetInvolved.js
│   │   ├── Contact.js
│   │   └── NotFound.js
│   ├── router/
│   │   └── AppRouter.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Inter Font** - Typography from Google Fonts

## 📱 Pages & Routes

- **/** - Home page with hero section, thematic areas, impact stats, and testimonials
- **/about** - About Us page with vision, mission, and core values
- **/programs** - Programs page showcasing environment, skill development, education, and community development initiatives
- **/get-involved** - Volunteer registration, donation, and partnership information
- **/contact** - Contact form, information, and FAQ section
- **/404** - Custom 404 Not Found page

## 🎨 Design System

### Color Palette
- **Primary Green**: #2d5016 (grow-green)
- **Light Green**: #5a7c3a (grow-light-green)
- **Accent Green**: #8fbf9f (grow-accent)
- **Earth Brown**: #8b6f47 (grow-earth)
- **Sky Blue**: #87ceeb (grow-sky)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd grow-ngo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build files will be created in the `build` directory.

## 🌟 Key Features

### Navigation
- Sticky navigation bar with active link highlighting
- Mobile-responsive hamburger menu
- Smooth scrolling to sections

### Components
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Comprehensive footer with links and contact info
- **Hero**: Reusable hero section with customizable content
- **SectionCard**: Flexible card component for program highlights
- **Form**: Multi-purpose form component (contact, volunteer, donation)

### Pages
- **Home**: Engaging landing page with organization overview
- **About**: Detailed information about mission, vision, and values
- **Programs**: Interactive program showcase with smooth scrolling
- **Get Involved**: Tabbed interface for volunteer, donation, and partnership options
- **Contact**: Contact form, map placeholder, and FAQ section

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interface elements

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/router/AppRouter.js`
3. Update the navigation in `src/components/Navbar.js`

### Modifying Colors
Update the color palette in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'grow-green': '#your-color',
      // ... other colors
    }
  }
}
```

### Adding New Components
1. Create component files in `src/components/`
2. Export and import where needed
3. Follow the existing naming conventions

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Collapsible navigation menu
- Touch-friendly buttons and links
- Optimized layouts for different screen sizes
- Readable typography on all devices

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## 📞 Contact

For any questions or support, please contact us at:
- Email: info@growfoundation.org
- Phone: +1 (555) 123-4567

---

**GROW Social Work Foundation** - Empowering Communities by Grasping Resources and Offering Wisdom.
