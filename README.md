# Celestial Compass

Build a Complete Astrology Website — AstroVeda

Role

You are a senior full-stack developer, UI/UX designer, product architect, and astrology software specialist.

Your task is to design and build a beautiful, premium, fully responsive astrology web application called AstroVeda.

This is not just a static landing page. It must be a functional astrology platform where users can enter their birth details, generate a birth chart, explore their planetary information, and ask questions such as:

When might I get a job?

What does my career path look like?

When might I get married?

What kind of partner might suit me?

What are my strengths and challenges?

What should I focus on in my current life phase?

What do my planetary periods suggest about upcoming opportunities?

The application must combine Vedic astrology calculations, an AI-powered interpretation system, an elegant visual experience, and a scalable full-stack architecture.

Do not build a fake interface with meaningless buttons. Implement the actual workflows wherever technically possible, and clearly label any feature that requires an external API, an astrology calculation engine, or an AI model.

1. Product identity and visual direction

Brand name

AstroVeda

Tagline

"Discover the patterns written in your stars."

Brand personality

Premium

Mystical

Calm

Intelligent

Trustworthy

Modern

Spiritual but not outdated

Elegant and immersive

Design inspiration

Create a visual style inspired by premium editorial websites, luxury wellness platforms, and modern celestial interfaces.

Do not copy any existing website. Create an original design.

Color palette

Use a sophisticated cosmic theme:

Deep midnight navy: #080B1D

Dark indigo: #111735

Rich purple: #29204D

Muted gold: #D6B46A

Warm ivory: #F4EFE5

Soft lavender: #B8AFD8

Subtle star-white highlights

Use gold sparingly for important actions, borders, icons, and celestial accents.

The website should support:

A premium dark cosmic theme as the default.

A light, celestial theme as an optional future enhancement.

Avoid excessive gradients, glowing text, clutter, and unnecessary animations.

Typography

Use a sophisticated combination of:

A high-quality serif font for major headings and astrology quotes.

A clean sans-serif font for navigation, forms, buttons, and dashboard content.

Possible font choices:

Cormorant Garamond or Playfair Display for headings.

Inter or Manrope for interface text.

Ensure typography is readable on mobile.

Visual elements

Use:

Subtle star fields

Moon phases

Fine constellation patterns

Planetary symbols

Zodiac wheel illustrations

Thin gold borders

Soft glass-like panels

Elegant cards

Smooth page transitions

Minimal parallax effects

Interactive celestial backgrounds

Animations must remain subtle and must not reduce performance or accessibility.

2. Technology stack

Use the following stack unless there is a strong technical reason to change it:

Frontend

React

TypeScript

Vite

Tailwind CSS

React Router

Framer Motion for animations

Lucide React for icons

Three.js or React Three Fiber only where a 3D celestial visual genuinely improves the experience

Recharts for relevant data visualizations

Backend

Node.js

Express

TypeScript

REST API architecture

Database

PostgreSQL

Prisma ORM

Astrology calculations

Integrate a reliable astrology calculation engine or API capable of supporting Vedic astrology.

The calculation layer should support, where available:

Birth chart calculations

Ascendant / Lagna

Planetary positions

Nakshatra

Rashi

Houses

Planetary aspects

Vimshottari Dasha

Mahadasha and Antardasha

Transits

Navamsa chart, if supported

North Indian or South Indian chart layouts

Do not invent planetary positions or calculate a chart using random placeholder values.

If a reliable calculation engine is not yet configured, implement a clearly marked development mode and create an adapter interface so a real calculation engine can be connected later.

AI interpretation

Create an AI service layer that can connect to a suitable LLM API.

The AI must receive structured astrological data from the calculation engine rather than inventing chart information.

The AI should produce:

Understandable explanations

Relevant astrological reasoning

Confidence-aware language

Clear distinction between traditional interpretation and factual certainty

Practical, non-alarming guidance

Do not present astrology as scientifically proven or guarantee future events.

3. Website structure and routes

Create a polished multi-page website with the following routes.

Public pages

/

Main landing page.

/about

About AstroVeda and its approach.

/how-it-works

Explain how birth details, chart calculations, and AI interpretation work.

/astrology

Astrology knowledge hub.

/astrology/career

Career and job-related astrology information.

/astrology/marriage

Marriage and relationship astrology information.

/astrology/education

Education and learning-related astrology information.

/astrology/finance

Financial themes in traditional astrology.

/pricing

Plans and feature comparison.

/faq

Frequently asked questions.

/contact

Contact and support page.

/privacy

Privacy policy.

/terms

Terms of service.

Authentication pages

/login

Login page.

/register

Registration page.

/forgot-password

Password recovery page.

User application pages

/onboarding

Collect the user's birth details and preferences.

/dashboard

Personalized astrology dashboard.

/birth-chart

Birth chart visualization and details.

/birth-chart/planets

Planetary positions and explanations.

/birth-chart/houses

House-by-house interpretations.

/birth-chart/dasha

Vimshottari Dasha timeline, when supported by the calculation engine.

/ask

AI astrology question interface.

/ask/career

Career and job-related questions.

/ask/marriage

Marriage and relationship questions.

/ask/education

Education-related questions.

/ask/finance

Financial astrology questions.

/history

Previous questions and AI interpretations.

/profile

User profile and saved birth information.

/settings

Account, privacy, theme, and notification settings.

4. Main landing page design

Create a stunning, responsive homepage with the following sections.

Section 1 — Hero

Full-width cosmic hero section.

Content:

Small label:

"VEDIC ASTROLOGY • PERSONAL INSIGHTS • CELESTIAL WISDOM"

Main heading:

"Your stars have a story.
Discover yours."

Supporting text:

"Explore your birth chart, understand your planetary patterns, and ask meaningful questions about your life's journey with AstroVeda."

Primary CTA:

"Explore My Birth Chart"

Secondary CTA:

"How It Works"

Visual:

Large elegant zodiac wheel

Subtle rotating planetary elements

Constellation background

A beautifully designed moon or celestial orb

Smooth, lightweight motion

Do not make the hero visually overcrowded.

Section 2 — Trust and introduction

Heading:

"Ancient wisdom, thoughtfully interpreted."

Explain that AstroVeda combines traditional astrological systems with modern technology to help users explore their birth chart.

Display three small feature highlights:

Traditional Vedic astrology

Personalized birth-chart insights

AI-assisted explanations

Section 3 — What can you explore?

Create an elegant grid of six cards:

Career & Job

Explore traditional astrological perspectives on work and professional direction.

Marriage & Relationships

Explore relationship themes and traditional compatibility concepts.

Education & Growth

Explore learning, focus, and personal development themes.

Finance & Prosperity

Explore traditional financial astrology concepts without guaranteed predictions.

Personality & Strengths

Understand chart-based personality interpretations.

Current Planetary Periods

Explore Dasha and transit information when calculated data is available.

Each card must have a unique icon, subtle hover animation, and a link to the appropriate page.

Section 4 — How it works

Display a three-step horizontal process on desktop and vertical timeline on mobile.

Step 1: Enter your birth details.

Step 2: Generate your birth chart.

Step 3: Ask questions and explore your insights.

Add a CTA button:

"Create My Chart"

Section 5 — Interactive zodiac section

Create a beautiful zodiac wheel or constellation display.

Features:

Twelve zodiac signs

Hover or click interaction

Sign name and symbol

Short educational description

Link to a zodiac information page

The zodiac wheel must be visually meaningful, responsive, and accessible. Do not use a decorative circle that has no interaction or useful content.

Section 6 — Sample interpretation preview

Create a premium sample card showing how an interpretation might look.

Example:

"Your birth chart can be explored through the relationship between planetary placements, houses, and traditional interpretive principles."

Clearly label this as a fictional demonstration.

Add button:

"Generate My Personal Chart"

Section 7 — Testimonials

Create a testimonial section using clearly labeled sample testimonials during development.

Do not claim that fictional testimonials are real.

Design it as elegant quote cards.

Section 8 — Frequently asked questions

Include questions such as:

What details are needed to create a birth chart?

Why is exact birth time important?

What is Vedic astrology?

Can AstroVeda predict my future?

How does the AI interpretation work?

Can I edit my birth details?

Section 9 — Final CTA

Heading:

"Begin your journey through the stars."

Button:

"Create Your Birth Chart"

Footer

Include:

AstroVeda logo

Navigation links

Astrology categories

Privacy policy

Terms

Contact

Social media placeholders

Copyright

5. Birth details onboarding page

Build a beautiful multi-step form at /onboarding.

The form should collect:

Personal details

Full name or preferred name

Date of birth

Exact time of birth

Birthplace

Gender, only if genuinely needed by a selected tradition or feature; otherwise do not collect it

Preferred language

Astrology system preference

Birthplace handling

The user should be able to search for their city or town.

The system should resolve:

City

State or region

Country

Latitude

Longitude

Historical or relevant time-zone information for the birth date

Do not rely only on the current time zone of a city. Historical time-zone and daylight-saving rules may matter for accurate calculations.

If the user does not know the exact birth time, provide an option:

"I don't know my exact birth time."

Explain that some calculations may be less precise and that birth-time rectification, if offered, requires a separate method and should not be fabricated.

Form experience

Multi-step progress indicator

Beautiful form cards

Clear labels

Validation

Date and time pickers

Birthplace autocomplete

Helpful tooltips

Back and Continue buttons

Final "Generate My Chart" button

Loading state during calculation

Error handling

Mobile-first layout

After submission, save the details securely and request chart generation from the backend.

6. Birth chart page

Create /birth-chart as a premium astrology dashboard.

Header

Display:

User's name

Birth date

Birth time

Birthplace

Selected astrology system

Last calculated timestamp

Allow users to edit birth details and recalculate the chart.

Main visual

Display an authentic calculated Vedic birth chart.

Support:

North Indian chart style

South Indian chart style, if implemented

Twelve houses

Zodiac signs

Planetary placements

Ascendant / Lagna

Planetary symbols

Degree information where available

The chart must be generated from actual calculation data.

Use SVG or a suitable chart-rendering component for a clean, responsive diagram.

Make the chart interactive:

Clicking a house opens its details.

Clicking a planet opens its placement information.

Hover states should have accessible alternatives.

On mobile, provide a list-based chart explanation in addition to the visual chart.

Summary cards

Show:

Ascendant

Moon sign

Sun sign

Birth Nakshatra

Current Mahadasha, if available

Current Antardasha, if available

Do not display unsupported values.

Tabs

Create tabs for:

Overview

Planets

Houses

Dasha

Transits

Chart details

Actions

Buttons:

Ask a question about my chart

Download chart as PDF

Edit birth details

Save chart

Share chart using a privacy-conscious mechanism

Do not expose private birth details through public URLs by default.

7. AI astrology question page

Create /ask as one of the most important features.

The page should look like a premium AI consultation interface.

Layout

Desktop:

Left sidebar with question categories and conversation history.

Main chat area.

Right-side compact birth-chart summary.

Mobile:

Main chat interface.

Collapsible chart summary.

Accessible category selector.

Welcome message

"Welcome to your personal astrology space. Ask a question about your chart, and I'll help you explore its traditional astrological interpretations."

Suggested question cards

Display clickable prompts:

"When might I find a job opportunity?"

"What does my chart suggest about my career direction?"

"What relationship themes appear in my chart?"

"What should I focus on during my current planetary period?"

"What are my strengths according to my birth chart?"

"What does my chart traditionally suggest about education?"

These prompts should populate the input field or submit a question through the normal interface.

Chat input

Include:

Text input

Send button

Suggested questions

Loading indicator

Stop-generation option if streaming is implemented

Error state

Retry action

Clear conversation action

Character limit

AI response structure

Each answer should contain:

A direct, easy-to-understand response.

Relevant chart factors.

Traditional astrological interpretation.

Important uncertainties or limitations.

Practical, grounded suggestions.

A short note explaining that astrology cannot guarantee future events.

For questions like "When will I get a job?", do not promise an exact date.

Instead, if the required chart and Dasha data are available, provide a clearly qualified interpretation of potentially favorable periods and explain which astrological factors were considered.

For marriage-related questions, avoid definitive statements such as "You will definitely marry on this date."

For health, legal, or major financial decisions, avoid presenting astrology as a substitute for professional advice.

Example answer style

Question:

"When might I get a job?"

Response style:

"Based on the traditional interpretation of the chart information available, certain planetary periods may be considered supportive of career-related activity. This is not a guaranteed prediction. You can use this interpretation as a reflective tool while continuing practical steps such as skill development, applications, networking, and interview preparation."

The exact chart factors must come from the calculation engine.

8. Career and job sub-landing page

Create a beautiful dedicated page at /astrology/career.

This page should be both educational and conversion-focused.

Hero

Heading:

"Find clarity in your career journey."

Subheading:

"Explore traditional Vedic astrology perspectives on work, professional strengths, and planetary periods."

CTA:

"Explore My Career Chart"

Visual:

Gold constellation illustration

Subtle zodiac and planetary motifs

Elegant editorial layout

Sections

What career astrology explores.

Houses traditionally associated with career.

Planetary influences in traditional interpretation.

How Dasha periods are used.

What information is needed for a personalized reading.

Example of a fictional chart interpretation.

Frequently asked questions.

CTA to generate a birth chart.

Clearly distinguish educational information from personalized calculations.

9. Marriage and relationship sub-landing page

Create /astrology/marriage.

Hero heading

"Explore the patterns of connection."

Explain traditional astrology concepts related to relationships and compatibility.

Features

Relationship-related chart factors

Seventh-house concepts

Venus and Jupiter interpretations

Nakshatra and compatibility concepts

Optional future compatibility tool

Ethical and non-deterministic explanations

CTA:

"Explore Relationship Insights"

Do not claim to know the exact date of marriage or guarantee compatibility.

10. Additional sub-landing pages

Create visually consistent pages for:

Education

Route: /astrology/education

Topics:

Learning and focus

Traditional educational astrology concepts

Planetary interpretations

Chart-based reflection

Practical study guidance

Finance

Route: /astrology/finance

Topics:

Traditional wealth-related houses

Financial discipline

Planetary interpretations

Responsible financial decision-making

Never promise financial gains or guaranteed wealth.

About

Route: /about

Explain:

AstroVeda's purpose

Traditional astrology and technology

Responsible AI interpretation

Privacy-first approach

Limitations of astrology

11. User dashboard

Create /dashboard.

The dashboard should include:

Welcome header

"Welcome back, [User Name]."

Subtitle:

"Continue exploring your celestial profile."

Dashboard cards

My Birth Chart

Moon Sign

Ascendant

Current Dasha, if available

Saved Questions

Recent Interpretations

Profile completeness

Quick actions

View Birth Chart

Ask a Question

Edit Birth Details

Explore Career

Explore Marriage

View History

Visual design

Use a clean two-column desktop layout and a single-column mobile layout.

Avoid unnecessary dashboard clutter.

12. Backend architecture

Create a proper backend instead of putting sensitive logic in the frontend.

Suggested structure

astrov​​eda/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   ├── data/
│   │   └── styles/
│   └── public/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   │   ├── astrology/
│   │   │   ├── ai/
│   │   │   └── location/
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── server.ts
│   └── prisma/
│       └── schema.prisma
│
├── README.md
├── .env.example
└── docker-compose.yml


Important backend modules

Authentication

Registration

Login

Secure password hashing

Session or token management

Logout

Password recovery

Birth profile

Create birth profile

Update birth profile

Validate birth data

Resolve birthplace

Store time-zone information

Calculate and cache chart data

Astrology engine

Birth chart calculation adapter

Planetary positions

Houses

Nakshatra

Dasha

Transits

Calculation versioning

AI service

Structured chart-data input

Prompt construction

AI response generation

Response validation

Conversation history

Usage limits

Error handling

Database

Design Prisma models for:

User

BirthProfile

BirthChart

PlanetaryPosition

HousePlacement

DashaPeriod

Conversation

Message

SavedInsight

Subscription, if implemented

Store dates and times carefully. Use a well-defined representation for the original local birth time, resolved time zone, and normalized instant.

13. API endpoints

Implement and document APIs such as:

POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/me

POST   /api/birth-profiles
GET    /api/birth-profiles
GET    /api/birth-profiles/:id
PUT    /api/birth-profiles/:id

POST   /api/birth-profiles/:id/calculate
GET    /api/birth-charts/:id
GET    /api/birth-charts/:id/planets
GET    /api/birth-charts/:id/houses
GET    /api/birth-charts/:id/dasha

POST   /api/astrology/questions
GET    /api/astrology/conversations
GET    /api/astrology/conversations/:id
DELETE /api/astrology/conversations/:id

GET    /api/health


Protect private endpoints with authentication and authorization.

Never expose API keys in frontend code.

14. Security and privacy

Implement:

Secure authentication

Password hashing

Input validation

Rate limiting

CORS configuration

Secure environment variables

API key protection

Database access controls

User data deletion capability

Privacy-conscious chart sharing

Error logging without sensitive birth details

Protection against prompt injection in user-provided content

Clear consent for storing birth information

Birth details are personal information. Do not expose them publicly or use them for unrelated purposes.

15. Responsive design requirements

The website must work beautifully on:

Mobile phones

Tablets

Laptops

Desktop monitors

Test at:

320px width

375px width

768px width

1024px width

1440px width

Requirements:

No horizontal page overflow.

Navigation becomes a mobile menu.

Forms stack properly.

Birth chart remains readable.

Chat interface works on mobile.

Buttons are touch-friendly.

Text remains legible.

Decorative effects do not block interaction.

Respect reduced-motion preferences.

16. Quality requirements

Before finishing:

Ensure every route works.

Ensure all navigation links work.

Ensure forms validate correctly.

Ensure authentication errors are handled.

Ensure the birth profile can be saved and edited.

Ensure chart generation has a real calculation integration or an explicitly marked development adapter.

Ensure AI questions use the selected birth chart.

Ensure loading and error states exist.

Ensure no fake data is presented as real astrological calculations.

Ensure the frontend builds successfully.

Ensure the backend starts successfully.

Ensure database migrations work.

Ensure API endpoints are tested.

Ensure mobile responsiveness.

Ensure accessibility basics.

Ensure secrets are not committed.

Ensure the README explains setup and configuration.

17. Development workflow

First inspect the existing project directory and determine whether a project already exists.

If an existing project exists:

Do not delete it.

Do not create a separate unrelated project.

Reuse the existing folder.

Preserve working features.

Inspect the current package files and architecture.

Make incremental improvements.

Explain what files are being modified.

If no project exists, create the AstroVeda project with the architecture described above.

Work in phases:

Phase 1 — Design and frontend foundation

Build:

Global theme

Typography

Navigation

Footer

Landing page

Responsive layout

Reusable components

Phase 2 — Public sub-pages

Build:

About

How it works

Career

Marriage

Education

Finance

Pricing

FAQ

Phase 3 — Authentication and onboarding

Build:

Registration

Login

Birth details form

User profile

Phase 4 — Astrology calculation

Integrate a real calculation engine or implement the adapter and configuration required for one.

Phase 5 — Birth chart dashboard

Build:

Chart visualization

Planetary information

Houses

Dasha

Chart details

Phase 6 — AI astrology assistant

Build:

Question interface

Backend AI service

Conversation history

Chart-aware interpretation

Phase 7 — Testing and polish

Fix errors

Improve performance

Test API

Test responsiveness

Improve accessibility

Verify all workflows

Update README

18. Expected result

The final result should feel like a real premium astrology product, not a basic template.

The homepage should immediately communicate:

"AstroVeda helps users explore their birth chart and ask meaningful questions through a beautiful, modern astrology experience."

The website must have:

A memorable landing page

Multiple attractive sub-landing pages

A functional onboarding process

Realistic and scalable architecture

A real chart-calculation integration path

A chart dashboard

AI-powered question answering

Secure user data handling

Responsive and accessible design

Start by inspecting the project directory, then create the design system and landing page. After completing each phase, verify that the project runs correctly before moving to the next phase.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/330c20e2-66f6-48d1-a5eb-eab9378d51f8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
