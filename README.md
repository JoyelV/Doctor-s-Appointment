# DoctorWho - Doctor Appointment Booking App

A modern, responsive **Doctor Appointment Booking Platform** built with **React.js**, **React Router**, **Tailwind CSS**, and **Context API**. Users can browse doctors by specialty, book appointments, view profiles, and manage their bookings.

## Live Demo
https://doctor-s-appointment-three.vercel.app/

## Features

- Browse doctors by specialty (General Physician, Gynecologist, Dermatologist, etc.)
- Filter doctors dynamically using URL parameters
- Book appointments with available time slots (30-minute intervals)
- User authentication flow (Login / Sign Up)
- Responsive design (Mobile & Desktop friendly)
- View and manage appointments
- Edit user profile with personal details
- Clean UI with Tailwind CSS and custom components
- Context API for global state management (doctors data, currency, etc.)

## Tech Stack

- **Frontend**: React.js + Vite
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Fonts**: Google Fonts (Roboto) + Custom Outfit font
- **Icons & Assets**: Custom asset imports

## Project Structure

```
src/
├── assets/                  # Images, icons
├── components/              # Reusable components (Navbar, Footer, Header, etc.)
├── context/                 # AppContext for global state
├── pages/                   # Route pages
│   ├── Home.jsx
│   ├── Doctors.jsx
│   ├── Appointment.jsx
│   ├── MyAppointments.jsx
│   ├── MyProfile.jsx
│   ├── Login.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── App.jsx                  # Main routes configuration
├── main.jsx
└── index.css                # Tailwind + global styles
```

## Key Features Implemented

### Dynamic Doctor Filtering
```js
/doctors              → All doctors
/doctors/Cardiology   → Only Cardiologists
```

### Smart Slot Booking System
- Shows next 7 days of availability
- Starts from 10:00 AM to 9:00 PM
- 30-minute slots
- Skips past time on current day

### Responsive Design
- Mobile-first approach
- Sidebar filter toggle on mobile
- Smooth hover effects and transitions

## Pages

| Route                  | Description                          |
|------------------------|---------------------------------------|
| `/`                    | Home page with header & top doctors   |
| `/doctors`             | List all doctors                      |
| `/doctors/:speciality` | Filter by specialty                   |
| `/appointment/:docId`  | Book appointment with selected doctor |
| `/login`               | Login / Sign Up form                  |
| `/my-profile`          | View & edit user profile              |
| `/my-appointments`     | View booked appointments              |
| `/about`               | About the platform                    |
| `/contact`             | Contact information                   |

## Setup & Installation

1. Clone the repository
   ```bash
   git clone https://github.com/JoyelV/Doctor-s-Appointment.git
   cd doctorwho-appointment
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
```

## Future Improvements (Suggested)

- Connect to backend (Node.js + MongoDB or Firebase)
- Add real authentication (JWT/Firebase)
- Payment integration (Stripe/PayPal)
- Doctor verification system
- Appointment confirmation emails
- Cancel/Reschedule functionality
- Reviews & ratings

## Credits

- UI Inspiration: Modern healthcare platforms
- Assets: Custom designed or sourced from open collections
- Built with love using Vite + React + Tailwind

## License

MIT License © 2025

---

**Made with ❤️ for better healthcare access**