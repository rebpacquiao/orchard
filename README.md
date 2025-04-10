## Features

- **Interactive Food Color Exploration**: Showcases how colors influence our perception of taste
- **Animated Components**: Smooth animations using GSAP and ScrollTrigger
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Modal Image Viewer**: Interactive image zoom functionality

## Tech Stack

- **Framework**: Next.js 15.3.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **Animations**: GSAP (GreenSock Animation Platform) 3.12.7
- **React**: React 19.0.0

## Project Structure

```
src/
  app/              # Next.js app router
    components/     # Reusable components
      BlockCards/   # Card component with animations and modal
      BlockImage/   # Image block component with modal
    page.tsx        # Main page component
  data/             # JSON data files
    block3-cards.json  # Food color data
```

## Getting Started

First, install the dependencies:

```bash
npm install


Then, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Decisions

- **Component Separation**: Major UI sections are separated into individual components for better maintainability
- **GSAP Animations**: Using GSAP for smooth, performant animations that enhance user experience
- **Modal Implementation**: Custom modal implementation for image viewing with keyboard support (ESC to close)
- **Responsive Design**: Mobile-first approach using Tailwind's responsive classes
- **Static Data**: JSON data structure for easy content management

