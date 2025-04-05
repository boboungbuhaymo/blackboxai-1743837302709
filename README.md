
Built by https://www.blackbox.ai

---

```markdown
# Magic School Portal

## Project Overview
Magic School Portal is a web-based application designed to provide an interactive educational platform for students, teachers, and administrators within a magical school. The application features role-based access to dashboards where users can manage their respective tasks—students can view their grades and attendance, teachers can manage grades and attendance, and administrators can manage users and make announcements.

## Installation
To set up the Magic School Portal locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/magic-school-portal.git
   cd magic-school-portal
   ```

2. **Open `index.html`** in your web browser:
   Simply double-click the `index.html` file or open it using your browser’s file menu.

**Note**: No server setup is necessary, as this application is a static HTML/CSS/JavaScript project.

## Usage
1. **Login**: Enter the username, password, and select a role (Student, Teacher, Admin) on the login page.
2. **Dashboard Access**: 
   - **Admin**: Manage users and post announcements.
   - **Teacher**: Manage grades and attendance for students.
   - **Student**: View grades, attendance, and school announcements.

To log out, click the "Logout" button located in the header of each dashboard.

## Features
- **User Authentication**: Login functionality for different roles with validation.
- **Role-based Dashboards**:
  - Admin users can manage users and announcements.
  - Teachers can manage student grades and attendance.
  - Students can view their grades and announcements.
- **Responsive Design**: Built with Tailwind CSS for styling, ensuring a responsive user experience across devices.
- **Local Storage Support**: User sessions are managed using local storage, allowing persistent login until logout.

## Dependencies
This project relies on the following libraries and tools:
- **Tailwind CSS**: CSS framework for styling.
- **Font Awesome**: Icon library for additional visual elements.

### External Resources:
```html
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
```

## Project Structure
```
magic-school-portal/
│
├── index.html             # Login page
├── script.js              # JavaScript file for handling login and user session
├── admin-dashboard.html   # Admin dashboard page
├── teacher-dashboard.html  # Teacher dashboard page
├── student-dashboard.html  # Student dashboard page
└── (styles and other assets as needed)
```

Each HTML file represents a different interface for the respective roles within the portal, styled with inline CSS and Tailwind utility classes for a unique and responsive design experience.
```