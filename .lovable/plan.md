# Langport — Front-End Design Build

Design-only build: a complete, responsive, bilingual (English/Arabic) front end for the Langport platform. No server backend is created here — screens run on realistic seed data with browser local storage for anything the user creates or changes, structured so your Laravel API can replace the storage layer later.

## Theme & brand

- Main theme is white/light: white and soft off-white surfaces, deep navy `#0A1140` text and headings, electric cyan `#22D3FF` as the accent/CTA color (from the logo), with navy used for the footer and dark feature bands. Optional dark toggle can come later.
- Rounded cards (large radius), generous spacing, clear icons, one consistent CTA style, simple top navigation.
- Modern EdTech feel — not a traditional school site.
- Uploaded Langport logo in the header and footer, plus set as the favicon.
- Language switcher (EN / العربية) in the header; Arabic flips the whole layout to RTL with an Arabic-friendly font.

## Public website

- `/` Home — hero ("Learn English. Build Confidence. Find Your Voice."), CTAs: Find Your Program / Take the Placement Test / Login; sections: Why Langport (6 points), Our Programs, Find Your Level, New to Langport?, Already a Student?, Contact CTA.
- `/about`, `/how-it-works`, `/contact`
- `/programs` — all 8 programs; `/programs/$slug` — full program template (who it's for, goal, recommended level, duration, schedule, learning outcomes, course content, what's included, price/package, how to join) with Register / Contact CTA.
- `/find-your-level` — placement test UI: start → multiple-choice questions with progress → result screen showing CEFR level + recommended program → Register CTA. Scored client-side.
- `/register` — full registration form (all required and optional fields, validated) → confirmation screen.
- `/payment` — payment summary screen: program, level, package, duration, total, discount, amount paid, remaining, status badge (Pending / Partially Paid / Paid / Confirmed). Display + form UI only.
- `/login` — student login (email or mobile, password, Remember Me, Forgot Password) and `/forgot-password`. UI only, demo sign-in enters the portal.

## Student Portal (design, mock student)

Mobile-first portal layout with sidebar on desktop and compact nav on mobile.

- Dashboard: welcome, current program, current level, course progress, attendance, next class.
- My Course: program, level, instructor, group, dates, progress, modules/units, materials, activities, assignments, resources.
- My Schedule: calendar and list view, date, time, course, instructor, class status, class link, Join Class button.
- Learning Materials: coursebook, PDFs, worksheets, videos, audio, extra practice, recorded sessions, View/Download actions.
- Assignments: title, due date, status (Pending / Submitted / Reviewed), submission UI, teacher feedback.
- Attendance: total classes, attended, absent, late, percentage, history.
- Progress: overall plus Speaking, Listening, Reading, Writing, Vocabulary, Grammar as progress bars, with teacher feedback.
- Announcements: list with read/unread state and categories.
- Certificates: course, level, completion date, certificate ID, View / Download.
- Support: Academic, Customer Service, Technical, Course-related — WhatsApp / phone / email / support form.

## Admin Dashboard (design, mock data)

- Overview: total students, active students, new registrations, pending payments, upcoming classes.
- Students: table with add/edit/view screens, assign program / level / group, attendance, progress, payment status.
- Programs & Courses: programs, levels, courses/groups, instructors, schedules.
- Classes: create/schedule class, assign instructor, add students, class link, record attendance.
- Payments: paid, pending, partial, outstanding balance, payment history.
- Communication: announcements, notifications, student messages.
- Notifications: notification center covering registration, payment, class reminders, schedule changes, assignments, feedback, announcements.

## Technical notes

- TanStack Start + React with route files per page; no Lovable Cloud, no database, no server auth.
- One data layer module per resource (programs, registrations, students, courses, classes, materials, assignments, attendance, progress, announcements, certificates, payments, notifications). Each seeds realistic data and persists reads/writes to browser local storage, so registrations, placement results, assignment submissions, admin edits and demo logins survive a refresh. Swapping each module's functions for `fetch` calls to your Laravel endpoints is a one-file change per resource.
- Demo login: credentials checked against the local student record; a "current user" key in local storage drives the portal and admin gating (UI-level only, replaced by real auth later).
- Bilingual via a lightweight i18n context (EN/AR dictionaries) plus `dir` switching on the document, persisted in local storage.
- All colors as semantic tokens in `src/styles.css`; white theme as the base.
- Per-route SEO metadata (title, description, og/twitter) on every public page.
- Fully responsive across mobile, tablet and desktop, with the portal optimized for mobile.

## Build order

1. Design system, logo, i18n/RTL shell, header and footer.
2. Public site: Home, About, How It Works, Programs + program pages, Find Your Level, Register, Payment, Contact, Login.
3. Student Portal (all areas).
4. Admin Dashboard (all areas).
