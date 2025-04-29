# Background and Motivation

The user is creating a vibrant, on-brand landing page for "VIVIK", a friendship-discovery app targeting Gen Z in India. The goal is to replicate the reference hero screen exactly—featuring a bold Archievo Black headline, Inter body text, a lemon yellow background with film-style noise, input form, and hamburger menu—and then iterate with additional features over time.

# Key Challenges and Analysis

- **Exact Visual Fidelity**: Matching typography (Archievo Black for headline; Inter for body), colors, spacing, and the grainy film noise background texture.  
- **Font Integration**: Loading and applying two distinct font families efficiently without layout shifts.  
- **Responsive Layout**: Ensuring the hero section and stacked placeholder cards adapt fluidly across viewports.  
- **Theme Toggle & Menu**: Structuring the header to support dark/light toggle and mobile hamburger.  
- **Asset Management**: Incorporating a noise overlay (via a lightweight texture or CSS filter) and placeholder cards.  
- **Performance & Accessibility**: Optimizing images, fonts, and form labels; ensuring color contrast and keyboard navigation.

# High-level Task Breakdown

1. **Project Initialization**  
   - Scaffold Next.js + TypeScript project.  
   - Configure basic folder structure (`components`, `styles`, `public`).
2. **Global Styles & Fonts**  
   - Install and configure Archievo Black and Inter (via Google Fonts or local).  
   - Define CSS variables for lemon yellow, black, white, etc.  
   - Implement a global noise texture overlay (e.g., repeating grainy PNG or SVG).
3. **Header Component**  
   - Create `<Header>` with logo which is "VIVIK" in Archievo Black font (this would be there in the image pasted with the prompt for reference), and hamburger icon menu, clicking which would open a Menu with the site links in the menu 
   - For PC, the header would have the site links in the header directly, neatly positioned.
   - Site links: Home, Our Story, Contact Us, Progress Board. 
4. **Hero Section**  
   - **Component Structure:** Create `components/hero-section/hero-section.tsx` as a named export. Place static content and interfaces at file end.
   - **Layout:** Use responsive flex/grid. Left: headline, subtitle, email form. Right: two overlapping card placeholders.
   - **Typography & Emojis:** Use Tailwind for bold, large text. Insert emojis inline with `<span role="img" aria-label="...">`.
   - **Cards:** Use gray boxes as placeholders, overlapped via absolute/relative positioning. Use `aspect-[4/3]` or similar.
   - **Email Form:** Input + button, styled with Tailwind. Add aria-labels, helper text. Just the frontend is needed for now, the backend would be coded later.
   - **Responsiveness:** Stack columns on mobile, side-by-side on desktop. Ensure text/cards scale well.
   - **Accessibility:** Semantic HTML (`<section>`, `<h1>`, `<form>`), color contrast, focus states.
   - **Integration:** Import and place HeroSection in main page.

---

### Hero Section: Background and Motivation
The hero is the first impression—must communicate value, be visually engaging, and responsive. It should match reference image, support accessibility, and reinforce branding.

---

### Next Section: Planning (Black Section Below Hero)

#### Background and Motivation
We want to add a new section directly below the hero section. This section should have a black background and a bold, modern look, continuing the on-brand style. 

#### Content Proposal
- **Section Title:** Ready to find your tribe?🚀

- **Subtitle:** Launching soon near you!
and under which again a place to enter your email the box.
#### Wireframe/Description
```
------------------------------------------------------
|                How Vivik Works                    |
|      Make real friends, not just connections.      |
|  [Discover]   [Connect]   [Meet IRL]              |
|  (icon)       (icon)      (icon)                  |
|  text         text        text                    |
------------------------------------------------------
```
- Black background, white text, cards with subtle border or shadow, modern sans-serif fonts.

#### Tasks
3. **Implement section in code**
   - Success: Section appears below hero, visually distinct, matches plan.
4. **Add email form**
   - Success: Email form appears in the section below the hero section.



#### Project Status Board
- [ ] Create the new section
- [ ] Add email form in the new section

---

**Next step:** Await user review of this plan before execution.
5. **Placeholder Cards**  
   - Create card components with rounded corners and border; position stacked layout.
6. **Responsive & Accessibility**  
   - Ensure hero scales on mobile, tablet, desktop.  
   - Add `aria` labels, focus styles, validate form input.
7. **Development Workflow**  
   - Set up TypeScript strictness, Prettier, ESLint.  
   - Configure `package.json` scripts and CI lint/test steps.
8. **Iteration & New Features**  
   - Outline next features: testimonials carousel, feature highlights, footer, subscription modal, location-based signup.

# Project Status Board

- [x] Project Initialization
- [x] Global Styles & Fonts
- [x] Header Component
- [x] Hero Section
- [x] Placeholder Cards
- [x] Refining the background of the Hero section (gradients, grainy noise texture)
- [x] Create the new section
- [x] Add email form in the new section
- [x] Add Footer with Logo and Social Links
- [ ] Contact Us Page
- [ ] Iteration & New Features

---

### Contact Us Page: Planning

#### Background and Motivation
A dedicated Contact Us page enables users, partners, or press to reach out directly and builds trust. It should be visually consistent with the brand, accessible, and easy to use.

#### Content Proposal
- **Headline:** "Contact Us"
- **Description:** Friendly, inviting text encouraging users to get in touch.
- **Contact Form:** Name, email, message fields, with accessible labels and validation.
- **Direct Email:** Display a support email address.
- **Social Links:** Icons for Twitter, Instagram, LinkedIn.
- **Branding:** Use the same header/footer as the main page.

#### Wireframe/Description
```
------------------------------------------
|  Header (same as main site)            |
|----------------------------------------|
|  Contact Us                            |
|  We'd love to hear from you!           |
|                                        |
|  [Name   ]                             |
|  [Email  ]                             |
|  [Message           ]                  |
|  [Send Button]                         |
|                                        |
|  Or email us: hello@vivik.in           |
|  [Twitter] [Instagram] [LinkedIn]      |
|                                        |
|  Footer (same as main site)            |
------------------------------------------
```

#### Tasks
1. **Create contact page at `/contact-us`**
   - Success: Page is accessible at `/contact-us` route.
2. **Build Contact Form**
   - Success: Form has name, email, message, accessible labels, validation.
3. **Add Support Email and Social Links**
   - Success: Support email and social icons are visible and accessible.
4. **Integrate Branding**
   - Success: Header and footer match main site.

---

### Footer Section: Planning

#### Background and Motivation
The footer should provide a clear, visually distinct end to the landing page. It should reinforce branding (logo) and provide quick access to social media, supporting both brand identity and user engagement.

#### Content Proposal
- **Logo** on the left ("VIVIK" in Archivo Black, matching the header).
- **Social Links** (e.g., Twitter, Instagram, LinkedIn) on the right, with recognizable icons and accessible labels.
- Visually separated from the black section above (e.g., lighter background, border, or shadow).
- Responsive: logo and links stack vertically on mobile.

#### Tasks
1. **Implement Footer Component**
   - Success: Footer appears below the black section, logo left, social links right, visually distinct and responsive.
2. **Add Social Icons and Links**
   - Success: Social icons are visible, accessible, and link to correct URLs.

---

# Executor's Feedback or Assistance Requests

- Global Styles & Fonts complete: Inter (Google Fonts) and Archivo Black (Google Fonts) loaded via Next.js font loader; Tailwind config and CSS variables set for lemon, black, white; metadata updated; noise overlay CSS stubbed (add actual PNG for production). Ready for Planner/user review before proceeding to Header Component.
- Next step: implement Header Component as per plan.
- Footer section planned. Proceeding to implementation: logo left, social links right, visually distinct, responsive.

# Lessons

- (empty)

