# 2025 Q3 | React Presentation

**Presenters:** Le Minh Huy (22110033) & Nguyen Le Tung Chi (22110013)
**Course:** New Technology in Software Engineering (MTSE)
**University:** University of Technology and Education

# **React Presentation Script & Guide**

### **Presentation Goal**

To introduce classmates to what React is, why it's popular, and its core concepts through interactive demonstrations and hands-on activities. Estimated Time: 15-18 minutes.

---

### **Slide 1: Title Slide + Opening Hook**

- **Title:** React.js: The Technology Behind Your Favorite Apps
- **Subtitle:** Building Modern User Interfaces
- **Presenters:** Le Minh Huy & Nguyen Le Tung Chi
- **Hook Question:** "Who here has used Instagram, Netflix, or Facebook today?"

> 🎤 **Speaker Notes (Huy):**
"Good morning everyone! I'm Huy, and this is Chi. Quick question - who here has used Instagram, Netflix, or Facebook today? [Wait for hands] Well, guess what? You've been interacting with React all morning without even knowing it! Today, we're going to show you the technology that powers these apps and why every developer should know about it."

---

### **Slide 2: Before React vs With React - The Problem**

- **Activity:** "Website Frustration Check!"
- **Content:** Split screen showing old vs new web experiences

> 🎤 **Speaker Notes (Chi):**
"So, before we talk about React, let's talk about the problem it solves.

**<INTERACTION MOMENT>**
"Everyone stand up! I'm going to describe some website experiences. If it sounds familiar and frustrating, stay standing. If you've never experienced it, sit down."

1. "You click 'Add to Cart' and the entire page reloads just to show one item added" [Most stay standing]
2. "You're filling out a long form, make one mistake, and lose all your data when the page refreshes" [Many stay standing]
3. "You're scrolling through social media and every click takes 3-5 seconds to load" [Some stay standing]

"Everyone still standing has experienced the old way of building websites! This is exactly what React was designed to fix."

**<DEMONSTRATION>**
Show a simple before/after comparison on screen.

---

### **Slide 3: What is React?**

- **Content:** React Logo
- **Definition:** "A **JavaScript library** for building **user interfaces**."

> 🎤 Speaker Notes:
"This is where React comes in. React is a free, open-source JavaScript library created by Facebook back in 2013. Let's break down that definition. It's a 'JavaScript library', which means it's a collection of pre-written code that makes a developer's life easier. And its specific job is for building 'user interfaces'—or 'UI'. Basically, all the visual stuff you see and click on in an app. React's main goal is to make this process simple, efficient, and predictable."
>

---

### **Slide 4: Component Scavenger Hunt**

- **Activity:** "30-Second Component Hunt"
- **Content:** Display a complex website (like YouTube homepage)
- **Text:** **"Everything is a Component."**
- **Analogy:** **Think of them like LEGO bricks.**

> 🎤 **Speaker Notes (Huy):**
"The absolute most important concept in React is Components. You can think of a webpage as being built from LEGO bricks.

**INTERACTION MOMENT**
"Let's play a game! I'm giving you exactly 30 seconds to work with your neighbor and find as many 'components' as possible on this YouTube page. Think LEGO blocks - what parts could be reused? GO!"

[Timer: 30 seconds]

"Time's up! Let's hear what you found. [Take 3-4 answers] Excellent! The header, video thumbnails, comments, subscribe button - each is a reusable component!"

**DEMONSTRATION**
Show a simple component breakdown on screen with boxes highlighting each component."

---

### **Slide 5: Quick Demo - Component in Action**

- **Content:** Live coding or screen recording
- **Show:** Creating a simple Button component that changes color when clicked

```jsx
function ColorButton() {
  const [color, setColor] = useState('blue');
  const [clickCount, setClickCount] = useState(0);

  const changeColor = () => {
    const colors = ['blue', 'red', 'green', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
    setClickCount(clickCount + 1);
  };

  return (
    <button
      style={{backgroundColor: color, padding: '10px 20px', fontSize: '16px'}}
      onClick={changeColor}
    >
      Click me! ({clickCount} clicks)
    </button>
  );
}
```

> 🎤 **Speaker Notes (Chi):**
"Let me show you a component in action. Here's a simple button that changes color when clicked. Notice how the component manages its own state and updates automatically when clicked. See how it remembers the click count? That's React's state management in action!"

---

### **Slide 6: Before React vs With React - Code Comparison**

- **Content:** Side-by-side code comparison
- **Activity:** "Which approach would you rather maintain?"

**Traditional JavaScript:**
```javascript
// Traditional way - messy!
let count = 0;
const button = document.getElementById('counter-btn');
const display = document.getElementById('count-display');
const message = document.getElementById('message');

button.addEventListener('click', function() {
  count++;
  display.innerHTML = count;
  message.innerHTML = count > 5 ? 'Wow, many clicks!' : 'Keep clicking!';
  button.style.backgroundColor = count > 5 ? 'red' : 'blue';
});
// Imagine this for 100+ elements...
```

**React Way:**
```jsx
// React way - clean!
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <p>{count > 5 ? 'Wow, many clicks!' : 'Keep clicking!'}</p>
      <button
        style={{backgroundColor: count > 5 ? 'red' : 'blue'}}
        onClick={() => setCount(count + 1)}
      >
        Click me!
      </button>
    </div>
  );
}
```

> 🎤 **Speaker Notes (Huy):**
"Look at this comparison! Which one looks cleaner and easier to understand? [Wait for responses] Exactly! React makes complex interactions simple and readable."

---

### **Slide 6: Core Idea #2: JSX - HTML in JavaScript**

// ...existing content...

**<INTERACTION MOMENT - IMPROVED>**
"I want everyone to stand up for this one. I'm going to show you some code. If you think it's regular HTML, stay standing. If you think it's JSX, sit down."

Show examples:
1. `<div>Hello World</div>` (HTML - stay standing)
2. `<div>{userName}</div>` (JSX - sit down)
3. `<Button onClick={handleClick}>Click me</Button>` (JSX - sit down)

---

### **Slide 7: Core Idea #3: State and Props - The Data Flow**

- **State (`state`):** "A component's private memory."
- **Props (`props`):** "Data passed down from parent to child."
- **Visual:** A family tree diagram showing data flowing down

> 🎤 Speaker Notes:
"Think of props like a parent giving instructions to their child, and state like the child's own diary that only they can write in.

**<INTERACTION MOMENT>**
"Let's do a quick role-play. I need 3 volunteers - one parent component, one child component, and one grandchild component. (Set up the scenario where parent passes a 'theme' prop down, and each component has its own state for 'isVisible')."

---

### **Slide 8: Live Coding Challenge - Build Together**

- **Content:** Open your App.jsx file live
- **Activity:** "Help me build a mood tracker app in 5 minutes!"

> 🎤 **Speaker Notes (Chi):**
"Now we're going to build something together! Everyone become my coding assistants - I need you to tell me what to code next.

**INTERACTION MOMENT**
"We're building a mood tracker app. What emotions should we track?" [Get 4-5 from audience]
"What should happen when we click an emotion?" [Update display]
"What colors should each emotion be?" [Get suggestions]

**Live Code Together:**
```jsx
function MoodTracker() {
  const [currentMood, setCurrentMood] = useState('😊');
  const [moodHistory, setMoodHistory] = useState([]);

  const moods = [
    { emoji: '😊', name: 'Happy', color: '#FFD700' },
    { emoji: '😢', name: 'Sad', color: '#87CEEB' },
    { emoji: '😡', name: 'Angry', color: '#FF6B6B' },
    { emoji: '🤔', name: 'Thoughtful', color: '#DDA0DD' },
    { emoji: '😴', name: 'Tired', color: '#D3D3D3' }
  ];

  const selectMood = (mood) => {
    setCurrentMood(mood.emoji);
    setMoodHistory([...moodHistory, mood.name]);
  };

  return (
    <div style={{textAlign: 'center', padding: '20px'}}>
      <h2>Current Mood: {currentMood}</h2>
      <p>Mood Count: {moodHistory.length}</p>
      <div>
        {moods.map(mood => (
          <button
            key={mood.name}
            onClick={() => selectMood(mood)}
            style={{
              margin: '5px',
              padding: '10px 15px',
              backgroundColor: mood.color,
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px'
            }}
          >
            {mood.emoji} {mood.name}
          </button>
        ))}
      </div>
    </div>
  );
}
```

"Look how easy it was to build an interactive app with React!"

---

### **Slide 9: Real-World Connection**

- **Content:** Screenshots of popular apps built with React
- **Examples:** Facebook, Instagram, Netflix, Airbnb, WhatsApp Web

> 🎤 Speaker Notes:
"Before we talk about why React is popular, let's see who's actually using it.

**<INTERACTION MOMENT>**
"Raise your hand if you've used any of these apps today. (Show the apps one by one). All of these use React! You've been interacting with React components all day without knowing it."

// ...existing Slide 9 content about "Why Choose React?"...

---

### **Enhanced Quiz Section**

### **Slide 10: Pre-Quiz Challenge**

- **Content:** "Let's test your React thinking!"
- **Activity:** Show a webpage mockup and ask students to identify potential components

> 🎤 Speaker Notes:
"Before our Kahoot quiz, let's do a quick challenge. Look at this mockup and work in pairs for 2 minutes to identify all the React components you can see. Write them down!"

---

### **Slide 11: Kahoot Quiz Time!**

// ...existing quiz content...

---

### **Slide 12: Bonus Round - Quick Fire Questions**

**No-phone rapid-fire questions for engagement:**

1. "Shout out: What's the main building block of React?" (Components!)
2. "Everyone point to someone who can explain what JSX is!"
3. "If I change state, what happens to the UI?" (It updates automatically!)

---

### **Slide 13: What's Next? Your React Journey**

- **Learning Path:**
  - Start with: Official React Tutorial (tic-tac-toe)
  - Practice with: Create React App
  - Build projects: Todo app, Weather app, Personal portfolio
  - Advanced: Next.js, React Router, State management

> 🎤 Speaker Notes:
"For anyone interested in learning React, here's your roadmap. The official tutorial is fantastic for beginners.

**<FINAL INTERACTION>**
"Before we finish - turn to someone near you and share one thing from today that you found most interesting about React. You have 1 minute, go!"


---

## **Kahoot Quiz Questions**

**Question 1:** What is the main building block of a React application?

- A) Functions
- **B) Components (Correct)**
- C) HTML files
- D) Variables

**Question 2:** What is JSX?

- A) A different name for JavaScript
- **B) A way to write HTML inside JavaScript (Correct)**
- C) A database for React
- D) A CSS styling framework

**Question 3:** A component's internal, private memory is called its...

- A) Props
- **B) State (Correct)**
- C) DOM
- D) Cache

**Question 4:** What makes React's updates fast and efficient?

- **A) The Virtual DOM (Correct)**
- B) It reloads the entire page
- C) Using lots of images
- D) It only works on fast computers
