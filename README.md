# React Presentation - Interactive Slideshow

> **2025 Q3 | New Technology in Software Engineering (MTSE)**

An interactive React-based presentation application demonstrating React.js concepts through hands-on examples and live coding demonstrations.

## 👥 Presenters

- **Le Minh Huy** (22110033)
- **Nguyen Le Tung Chi** (22110013)
- **University:** University of Technology and Education

## 🎯 Presentation Overview

This presentation introduces React.js fundamentals through:

- **Interactive demonstrations** of React components
- **Live coding sessions** building real applications
- **Hands-on activities** and audience participation
- **Visual examples** from popular React-powered apps

**Duration:** 15-18 minutes  
**Target Audience:** Software Engineering students new to React

## 🚀 Key Topics Covered

### Core React Concepts

1. **Components** - Building blocks of React applications
2. **JSX** - Writing HTML-like syntax in JavaScript
3. **State & Props** - Managing data flow in React apps
4. **Virtual DOM** - React's efficient rendering system

### Interactive Demonstrations

- Component breakdown using YouTube homepage
- Live coding: Color-changing button component
- Building a mood tracker app together
- Before/after code comparisons

### Real-World Applications

Examples from apps students use daily:

- Facebook, Instagram, Netflix
- WhatsApp Web, Airbnb
- Component thinking exercises

## 🛠 Technical Setup

This presentation app is built with:

- **React 18** - Core framework
- **Vite** - Fast development server and build tool
- **SCSS** - Styling with variables and mixins
- **Context API** - Slide navigation state management

## 📁 Project Structure

```text
src/
├── components/
│   ├── slides/           # Individual presentation slides
│   │   ├── TitleSlide.jsx
│   │   ├── IntroSlide.jsx
│   │   ├── ProblemSlide.jsx
│   │   ├── ReactSlide.jsx
│   │   ├── CoreIdea1.jsx  # Components concept
│   │   ├── CoreIdea2.jsx  # JSX concept
│   │   ├── CoreIdea3.jsx  # State & Props
│   │   ├── VirtualDOMSlide.jsx
│   │   ├── CounterSlide.jsx
│   │   ├── WhyReactSlide.jsx
│   │   ├── QuizSlide.jsx
│   │   └── ThankYouSlide.jsx
│   └── utils/
│       └── Navigation.jsx # Slide navigation component
├── contexts/
│   └── SlideContext.jsx  # Global slide state management
├── styles/               # SCSS styling files
└── assets/              # Images and icons
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-presentation
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code analysis

## 🎮 Interactive Features

### Navigation

- **Arrow Keys**: Navigate between slides
- **Space Bar**: Next slide
- **Home/End**: Jump to first/last slide

### Live Coding Examples

1. **Color Button Component** - Demonstrates state management
2. **Mood Tracker App** - Built live with audience input
3. **Component Breakdown** - Interactive component identification

### Audience Participation Activities

- **30-Second Component Hunt** - Find components on YouTube homepage
- **Code Comparison Exercise** - Traditional JS vs React
- **Quick Fire Questions** - Rapid React concept review
- **Kahoot Quiz** - Knowledge assessment with 4 questions

## 📚 Learning Resources Mentioned

### Beginner-Friendly Starting Points

- [Official React Tutorial](https://react.dev/learn/tutorial-tic-tac-toe) - Tic-tac-toe game
- [Create React App](https://create-react-app.dev/) - Quick project setup
- React Developer Tools browser extension

### Practice Project Ideas

- Todo List application
- Weather dashboard
- Personal portfolio website
- Simple e-commerce product page

### Advanced Topics (Future Learning)

- Next.js for full-stack React applications
- React Router for single-page app navigation
- State management with Redux or Zustand
- Testing with Jest and React Testing Library

## 🎯 Presentation Goals Achieved

✅ Explain what React is and why it's popular  
✅ Demonstrate core concepts through live examples  
✅ Show real-world applications students recognize  
✅ Provide clear next steps for learning React  
✅ Engage audience through interactive activities  

## 📝 Quiz Questions Included

1. **Main building block of React** (Components)
2. **What is JSX** (HTML in JavaScript)
3. **Component's private memory** (State)
4. **What makes React updates fast** (Virtual DOM)

## 🔧 Development Notes

### Tech Stack Choices

- **Vite**: Chosen for fast development experience and instant HMR
- **SCSS**: Modular styling with component-specific stylesheets
- **Context API**: Lightweight state management for slide navigation
- **Responsive Design**: Works on presentation displays and laptops

### Component Architecture

Each slide is a self-contained React component, making the presentation modular and easy to modify or reorder.

## 📄 License

This project is created for educational purposes as part of the MTSE course at University of Technology and Education.

---

> Built with ❤️ using React and Vite for an engaging learning experience
