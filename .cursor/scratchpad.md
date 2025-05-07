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
   - For both PC and mobile, the header now has only the menu button. All site links (Home, Our Story, Contact Us, Progress Board) are accessible via the menu modal. No direct links in the header bar for any screen size.
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
- [x] Our Story Page - Step 1: Create Basic Page Structure
- [x] Our Story Page - Step 2: Implement Letter-like Container Design
- [x] Our Story Page - Steps 3-5: Complete styling and responsiveness
- [ ] Iteration & New Features
- [x] Join VIVIK Page - Step 1: Create Basic Page Structure at /join-vivik
- [x] Join VIVIK Page - Step 2: Add Headline and Description
- [ ] Join VIVIK Page - Step 3: Embed Airtable Form
- [ ] Join VIVIK Page - Step 4: Accessibility & Responsiveness Review

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

### Our Story Page: Planning

#### Background and Motivation
The "Our Story" page provides insight into VIVIK's mission, vision, and the team behind it. It establishes authenticity and emotional connection with potential users, showcasing the values and journey of VIVIK as a friendship-discovery platform for Gen Z in India.

#### Content Proposal
- **Headline:** "Our Story"
- **my content:** This will be added by the user later

#### Wireframe/Description
```
------------------------------------------
|  Header (same as main site)            |
|----------------------------------------|
|                                        |
|  [GRADIENT BACKGROUND]                 |
|                                        |
|  +--------------------------------+    |
|  |                                |    |
|  |  LETTER-LIKE CONTAINER         |    |
|  |  (off-white color)             |    |
|  |                                |    |
|  |  Our Story                     |    |
|  |                                |    |
|  |  [User content will go here]   |    |
|  |                                |    |
|  +--------------------------------+    |
|                                        |
|  Footer (same as main site)            |
------------------------------------------
```

#### Design Elements
- **Letter Container:** Create an off-white (slightly cream/ivory colored) container that resembles a letter or document
- **Layout:** The letter container should be centered on the page with proper padding, creating a frame-like effect
- **Background:** Gradient background behind the letter (similar to the gradient used elsewhere on the site)
- **Typography:** Archievo Black for "Our Story" heading, Inter for body text
- **Visual Style:** Minimal, clean layout with subtle details that enhance the letter-like appearance (slight shadow, subtle texture)
- **Dimensions:** Letter container should be smaller than the full viewport, creating a framed effect against the gradient background
- **Responsive Design:** Container scales appropriately on different devices while maintaining the letter-like appearance

#### Tasks
1. **Create "Our Story" page at `/our-story`**
   - Success: Page is accessible at `/our-story` route.
   - Success: Header and footer match main site.

2. **Implement Letter-like Container Design**
   - Success: Off-white container with proper padding and proportions is centered on the page.
   - Success: Container has subtle styling to enhance the letter/document appearance.
   - Success: Gradient background is visible around the container.

3. **Set Up Typography and Layout**
   - Success: "Our Story" heading uses Archievo Black font.
   - Success: Container has appropriate spacing for content to be added later.
   - Success: Typography follows brand guidelines.

4. **Ensure Responsiveness**
   - Success: Letter container scales appropriately on different screen sizes.
   - Success: Maintains proper padding and proportions across devices.
   - Success: Gradient background adapts to different viewport sizes.

5. **Accessibility Review**
   - Success: Color contrast between text and background meets WCAG standards.
   - Success: Semantic HTML structure is in place for content to be added later.

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

### Join VIVIK Page: Planning

#### Background and Motivation
The "Join VIVIK" page will serve as a dedicated entry point for users interested in joining the VIVIK community. It will embed an Airtable form to collect signups, feedback, or other relevant information directly from users. This page should be visually consistent with the rest of the site, accessible, and easy to use.

#### Key Challenges and Analysis
- **Consistent Branding:** Ensure the page uses the same header, footer, fonts, and color scheme as the rest of the site.
- **Responsive Embed:** The Airtable form must be embedded responsively so it works well on all devices.
- **Accessibility:** The page and embed should be accessible, with proper semantic structure and color contrast.
- **Performance:** The embed should not significantly slow down page load or cause layout shifts.

#### Content Proposal
- **Headline:** "Join VIVIK"
- **Description:** Brief, inviting text encouraging users to fill out the form.
- **Airtable Form Embed:** Provided by the user.
- **Branding:** Use the same header and footer as other pages.

#### Tasks
[x]  **Create 'Join VIVIK' page at `/join-vivik`**
   - Success: Page is accessible at `/join-vivik` route.
   - Success: Header and footer match main site.
[x] **Add Headline and Description**
   - Success: Headline and short description are visible above the form.
[x] **Embed Airtable Form**
   - Success: Airtable form is embedded and responsive.
   - Success: Form is functional and visually integrated.
[x]**Accessibility & Responsiveness Review**
   - Success: Page and embed are accessible and responsive on all devices.
   - Success: Color contrast and semantic structure meet standards.

# Executor's Feedback or Assistance Requests

- Header navigation has been unified: All navigation links are now only accessible via the menu button/modal, even on desktop (PC). The direct nav links have been removed from the header bar. The menu button/modal is visible on all screen sizes. No blockers encountered. Ready for user review and manual testing.
- Footer section planned. Proceeding to implementation: logo left, social links right, visually distinct, responsive.
- Our Story page: Created the basic page structure at `/our-story` route with a letter-like container. The page includes:
  - A full-page gradient background (inherited from the global body styles)
  - An off-white (#fcfbf7) container with rounded corners and shadow
  - A subtle paper texture overlay using the existing noise.png
  - Proper header and footer integration
  - Placeholder for user content
  - Ready for user review and testing before proceeding to step 2
- Our Story page - Step 2 completed: Enhanced the letter-like container design with:
  - Improved shadow effect with multi-layered shadows for depth
  - Paper edge effect with a subtle gradient at the top
  - Decorative folded corner in the top-right
  - Letterhead-style formatting with a border under the heading
  - Added a signature area at the bottom with the VIVIK brand name
  - Increased content area height with proper spacing
  - Enhanced the paper texture effect
- Our Story page - Final implementation complete:
  - Added the founder's note content with proper formatting and styling
  - Improved the paper-like appearance with a warmer off-white color (#f8f5f0)
  - Enhanced the paper texture and fold effects to be more visible
  - Added section dividers using subtle borders
  - Properly formatted headings, paragraphs, and list items
  - Applied appropriate typography and spacing for readability
  - Created a responsive layout that works well on all device sizes
  - Ensured proper semantic structure for accessibility
- Starting implementation of the "Join VIVIK" page: Creating the basic page structure at `/join-vivik` route with proper header and footer integration. Will proceed step by step through the planned tasks.
- Join VIVIK page - Step 1 completed: Created the basic page structure at `/join-vivik` route with:
  - Proper header and footer integration
  - Main content container with appropriate spacing
  - Placeholder for the Airtable form embed
  - Basic heading and description text (Step 2 also partially completed)
  - Ready for the Airtable form embed code to be provided by the user
- Join VIVIK page - Updates completed:
  - Added "Join VIVIK" link to the navigation menu in the header
  - Set up the structure for the Airtable form embed with a responsive container
  - Added additional context text below the form area
  - The page is ready for the actual Airtable embed code to be inserted when provided
  - I've marked Step 3 as partially completed, awaiting the actual embed code from the user

# Lessons

- (empty)

