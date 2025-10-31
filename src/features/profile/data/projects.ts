import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "full-calendar",
    title: "Full Calendar",
    period: {
      start: "03.2024",
    },
    link: "https://full-calendar-yassir-jr.vercel.app/calendar",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "Date-Fns",
      "GitHub",
    ],
    description: `## 🏁 Introduction
A feature-rich calendar application built with React, TypeScript, and ShadCN UI components. This project provides a customizable and interactive calendar experience with multiple views, event management, and a modern UI.

## ✨ Key Features
- 🗓️ **Multiple Views:** Day, Week, Month, Year, and Agenda views
- 📝 **Event Management:** Create, edit, and delete events
- 🔄 **Drag & Drop:** Move events between time slots and dates
- ↔️ **Event Resizing:** Resize events in day and week views with smooth animations
- 👥 **User Management:** Multi-user support with user filtering
- 🎨 **Color Coding:** Events can be color-coded for better organization
- 📱 **Responsive Design:** Works seamlessly across all device sizes
- 🌑 **Dark Mode:** Full dark mode support
- ⏰ **24/12 Hour Format:** Toggle between 24-hour and 12-hour time formats

## 🧩 Core Concepts
The calendar application is built around key principles to ensure a seamless, intuitive, and flexible user experience. These concepts define how data is presented, user interactions are handled, and customization is supported.

### 💡 Event-Centric Design
Events are the heart of the calendar, enabling users to manage their schedules effectively:
- 🔹 **Flexible Event Management:** Create, edit, delete, and manage recurring events with metadata (title, description, time, attendees)
- 🔹 **Drag & Drop / Resizing:** Move events across dates or time slots and resize in day/week views
- 🔹 **Color Coding:** Assign distinct colors for quick identification and visual clarity

**Common Use Cases:**
- Scheduling meetings or appointments
- Planning personal or team tasks
- Tracking deadlines or milestones
- Organizing recurring events like weekly check-ins

### 🗂️ Multi-View Navigation
Supports Day, Week, Month, Year, and Agenda views to cater to different user needs:
- 🔹 **Dynamic View Switching:** Focus on specific timeframes or overview schedules
- 🔹 **Context-Aware Interactions:** Tailored interactions per view (resize events, summarize in agenda)
- 🔹 **Responsive Layouts:** Adapts to desktops, tablets, and mobile devices

**Common Use Cases:**
- Reviewing daily tasks in Day view
- Planning weekly schedules in Week view
- High-level overview in Month/Year view
- Summarizing upcoming events in Agenda view

### 🎨 Interactive and Customizable UI
Modern, user-friendly interface with personalization options:
- 🔹 **ShadCN UI Components:** Reusable and customizable for consistent design
- 🔹 **Dark Mode & Time Format Options:** Toggle between light/dark mode and 24/12-hour format
- 🔹 **Multi-User Support:** Filter events by user for collaborative environments

**Common Use Cases:**
- Customize interface for personal/team preferences
- Collaborate on shared calendars
- Ensure accessibility across devices
- Enhance usability with dark mode or preferred time formats`,
    isExpanded: true,
  },
  {
    id: "overtime-app",
    title: "Calculation of Overtime Hours",
    period: { start: "04.2024" , end : "06.2024"},
    link: "#",
    skills: [
      "Electron.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "SQLite",
    ],
    description: `## 🏁 Introduction
A desktop application for tracking and managing overtime hours. Built with React, Node.js, and ElectronJS for cross-platform support.

## ✨ Key Features
- ⏱️ Track overtime hours efficiently
- 📝 Add, edit, and remove overtime entries
- 💻 Cross-platform desktop app
- 📊 Generate summaries and reports
- 🎨 Modern UI with Tailwind CSS
- 🔒 Local database storage with SQLite

## 🧩 Core Concepts
- 💡 Data-Centric Management: Store and calculate overtime accurately
- 🎨 User-Friendly Interface: Easy navigation & clear UI
- 🔒 Secure Local Storage: Data stored safely in SQLite`,
    isExpanded: false,
  },
  {
    id: "atos-doc-management",
    title: "Administrative Document Management at Atos",
    period: { start: "06.2024", end: "08.2024" },
    link: "#",
    skills: [
      "Next.js",
      "Prisma",
      "SQLite",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "DOCX",
    ],
    description: `## 🏁 Introduction
An administrative document management system built for Atos, enabling secure creation, management, and storage of documents.

## ✨ Key Features
- 📄 Create, edit, delete, search documents
- 👥 User authentication and authorization
- 📝 Generate and export DOCX files
- 🎨 Clean and responsive UI with Tailwind & ShadCN
- 🔗 Integrated with Prisma & SQLite for database management

## 🧩 Core Concepts
- 💡 Document-Centric Design: Focus on easy management and retrieval
- 🔒 Secure Access: Role-based permissions and authentication
- 📊 Efficient Storage: Local database for fast performance`,
    isExpanded: false,
  },
  {
    id: "school-management-system",
    title: "School Management System",
    period: { start: "03.2023", end: "06.2023" },
    link: "#",
    skills: [
      "Laravel",
      "React.js",
      "MySQL",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "JWT",
    ],
    description: `## 🏁 Introduction
A full-featured school management system built with Laravel and React, managing students, teachers, courses, and timetables.

## ✨ Key Features
- 🏫 Student, Teacher, and Course Management
- 📅 Timetable creation and management
- 🔒 Authentication with JWT
- 🎨 Modern responsive UI with Tailwind CSS
- 🔗 Full frontend-backend decoupled architecture

## 🧩 Core Concepts
- 💡 Role-Based Access: Teachers, Admins, and Students
- 📊 Efficient Data Management: MySQL-backed system
- 🎨 Interactive UI: React components for smooth navigation`,
    isExpanded: false,
  },
  {
    id: "freelance-project",
    title: "Freelance Projects",
    period: { start: "01.2023" },
    link: "#",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Laravel",
      "MySQL",
      "Tailwind CSS",
      "TypeScript",
    ],
    description: `## 🏁 Introduction
Various freelance web development projects for clients, ranging from dashboards to full-stack applications.

## ✨ Key Features
- 🌐 Web applications, admin panels, dashboards
- ⚡ Custom features & third-party integrations
- 🎨 Modern UI/UX using Tailwind and React
- 🔗 Full-stack solutions with Node.js, Laravel, and MySQL

## 🧩 Core Concepts
- 💡 Client-Focused Development: Tailored solutions per client needs
- 🔄 Full-Stack Architecture: Clean separation of frontend & backend
- 🎨 Modern Design Principles: Reusable and responsive components`,
    isExpanded: false,
  },
];
