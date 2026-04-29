# Phynx Clinic - Physiotherapy Website

A modern, responsive, high-converting website for a physiotherapy clinic built with React + Vite. Features smooth animations, modern UI/UX, and mobile-first design.

## 🎯 Features

✨ **Modern Design**
- Premium, professional UI inspired by medical brands
- Beautiful color palette with medical aesthetics
- Smooth animations using AOS (Animate On Scroll)
- Interactive hover effects and micro-interactions

🚀 **High Performance**
- Built with Vite for lightning-fast development
- Optimized bundle size
- Lazy-loaded components
- Fast page load times

📱 **Fully Responsive**
- Mobile-first approach
- Perfect on all devices (mobile, tablet, desktop)
- Touch-friendly interface

🎨 **Key Sections**
1. **Hero** - Eye-catching introduction with CTA buttons
2. **About** - Clinic introduction with key benefits
3. **Services** - All services displayed as beautiful cards
4. **Branches** - 3 clinic locations with contact info
5. **Testimonials** - Patient reviews and success stories
6. **FAQ** - Accordion with common questions
7. **Booking** - Appointment booking form
8. **Contact** - Contact information and social links
9. **Footer** - Links and copyright

⚙️ **Features**
- Sticky navbar with smooth scroll
- Floating WhatsApp button
- Back-to-top button
- Smooth scroll animations
- Clean, reusable component architecture
- SEO-friendly structure

## 📦 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **AOS** - Scroll animations
- **React Icons** - Icon library
- **CSS3** - Styling with custom properties

## 🛠️ Installation

1. Clone or download the project:
```bash
cd phynx-clinic
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 🚀 Building for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── FloatingWhatsApp.jsx
│   ├── BackToTop.jsx
│   └── Footer.jsx
├── pages/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Branches.jsx
│   ├── Testimonials.jsx
│   ├── FAQ.jsx
│   ├── Booking.jsx
│   └── Contact.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🎨 Color Palette

- **Primary**: #2D5A6D (Professional Blue)
- **Secondary**: #00A651 (Medical Green)
- **Accent**: #FFB81C (Gold)
- **Dark**: #1A1A1A
- **Light**: #F8F9FA

## 🔗 Customization

### Change Contact Information
Update phone numbers and email in:
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `src/pages/Booking.jsx`
- `src/pages/Contact.jsx`

### Update Branch Locations
Edit branch data in `src/pages/Branches.jsx`

### Modify Services
Update services list in `src/pages/Services.jsx`

### Update FAQ
Edit questions and answers in `src/pages/FAQ.jsx`

### Change Colors
Update CSS variables in `src/index.css` under `:root`

## 📝 Notes

- Replace placeholder images with actual clinic photos
- Update phone numbers with real contact information
- Customize testimonials with real patient reviews
- Connect the booking form to a backend service
- Set up proper email/WhatsApp integration

## 🌐 Deployment

Ready to deploy on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

This project is available for use. Modify and customize as needed.

## 👨‍💻 Support

For questions or support, contact: info@phynxclinic.com

---

Built with ❤️ for Phynx Clinic
