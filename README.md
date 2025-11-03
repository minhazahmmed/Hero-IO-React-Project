# HERO.IO — React App Store UI  
## [👉 Click Here to See Live Demo](https://hero-io-react-router-project.netlify.app)

## Project Overview  
HERO.IO is a sleek, single-page web application built with React and React Router. It mimics a modern app store experience where users can:  
- Browse apps via the **Home**, **Apps**, and **Installation** sections.  
- Click any app card to view full **App Details** (including install functionality and review chart).  
- Install apps (persisted in localStorage) and manage them in the **Installation** page (with uninstall support).  
- View dynamic charts for app ratings in the details page, along with search & sort capabilities.

---

## Key Features  
- **Home Page**: Hero banner, featured apps grid, trusted-by stats section.  
- **Apps Section**: Grid of all apps + live search + sort functionality.  
- **App Details Page**:  
  - Displays full app info (image, title, company, downloads, rating, size, description).  
  - Install button with state (“Install Now” → “Installed”).  
  - Ratings visualization via chart (review counts by star rating).  
- **Installation Page**:  
  - List of installed apps (from localStorage).  
  - Uninstall button to remove apps and update storage.  
  - Sort/filter functionality for installed list.  
- **Loading & UI Feedback**:  
  - DaisyUI loading indicators during navigation & search.  
  - Toast notifications for install/uninstall actions.  
- **State Persistence**: Installed apps persist via `localStorage`, enabling session-retention.  
- **Routing**: Clean navigation using React Router for dynamic routes (e.g., `/app/:id`).  
- **Responsive Design**: Built with Tailwind CSS + DaisyUI; works across desktop & mobile.

---

## Tech Stack
- **Frontend:** React.js, Tailwind CSS, DaisyUI  
- **Icons:** Lucide React, FontAwesome  
- **Routing:** React Router DOM  
- **Storage:** LocalStorage  
- **Notifications:** React Toastify  

---

## Key Highlights
- Fully responsive UI built with Tailwind and DaisyUI  
- Smooth navigation between pages with React Router  
- App installation & uninstallation stored in LocalStorage  
- Interactive charts powered by Lucide React  
- Real-time search with loading indicator  
- Dynamic toast notifications for user actions  

---

## Future Improvements
- Add Firebase or MongoDB backend for real data sync  
- Implement user authentication system  
- Add download count and rating analytics  
- Introduce dark/light mode toggle  

---

## Feedback
If you have any feedback or suggestions, feel free to reach out!  
Your contribution and ideas are always welcome.   

---

## Developed By
**Minhaz Ahmmed**  
[GitHub Profile](https://github.com/minhazahmmed)  
