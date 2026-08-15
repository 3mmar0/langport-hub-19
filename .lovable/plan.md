# Langport — Platform Plan

A bilingual (English/Arabic) EdTech platform with three surfaces: public marketing site, Student Portal, and Admin System. Dark navy + cyan brand identity from the Langport logo, white/light mode as the secondary theme.

## Brand & design direction

- Palette: deep navy `#0A1140`-family background, electric cyan `#22D3FF` accent, near-white text, soft slate surfaces. Light theme mirrors it with white surfaces and navy text.
- Rounded cards (large radius), generous spacing, clear icons, one strong CTA style, simple top navigation.
- Modern EdTech feel — not a traditional school site.
- Uploaded logo used in the header/footer and as the favicon.
- Language switcher (EN / العربية) in the header; Arabic flips the whole layout to RTL with an Arabic-friendly font.

## Phase 1 — Public site + Student Portal shell (this build)

Public routes:
- `/` Home — hero ("Learn English. Build Confidence. Find Your Voice."), CTAs: Find Your Program / Take the Placement Test / Login; sections: Why Langport (6 points), Our Programs, Find Your Level, New to Langport?, Already a Student?, Contact CTA.
- `/about`, `/how-it-works`, `/contact`
- `/programs` — all 8 programs; `/programs/$slug` — full program template (who it's for, goal, recommended level, duration, schedule, outcomes, content, what's included, price/package, how to join, Register CTA).
- `/find-your-level` — placement test flow: start → multiple-choice questions → submit → CEFR level result → recommended program → Register CTA. Result saved for the visitor.
- `/register` — registration form (all required + optional fields, validated), saves a customer record, shows confirmation.
- `/auth` — student login/signup (email + password, Google sign-in), Remember Me, Forgot Password + reset page.

Student Portal (login-protected):
- `/dashboard` — welcome, current program, level, course progress, attendance, next class.
- `/portal/course`, `/portal/schedule`, `/portal/materials`, `/portal/announcements`, `/portal/support`.
- Mobile-first portal layout with bottom/collapsible nav.

Backend (Lovable Cloud): profiles, roles (student/admin/instructor), programs, levels, courses/groups, enrollments, classes, materials, announcements, registrations, placement results — with row-level security so students only see their own data. Seeded with the 8 real Langport programs, CEFR levels, and demo course/schedule/material/announcement rows so the portal is populated immediately.

## Phase 2 — Learning management

Assignments (submit + teacher feedback, Pending/Submitted/Reviewed), attendance (totals, %, history), progress (overall + speaking/listening/reading/writing/vocabulary/grammar bars + feedback), certificates (view/download), payment tracking (package, total, discount, paid, remaining, status: Pending/Partially Paid/Paid/Confirmed), in-app notifications.

## Phase 3 — Admin system

Admin dashboard (total/active students, new registrations, pending payments, upcoming classes), student management, program/level/course/group management, class scheduling + attendance recording, payments, announcements and student communication, reports.

## Technical notes

- TanStack Start routes; `_authenticated` gate for the portal, role-gated admin area.
- Bilingual via a lightweight i18n context (EN/AR dictionaries) + `dir` switching on the document, persisted per user.
- All colors as semantic tokens in `src/styles.css`; dark is the default theme with a light toggle.
- Per-route SEO metadata (title, description, og/twitter) on every public page.
- Payments in Phase 2 are tracked records only; a real payment provider can be wired in later if you want online checkout.

## Scope note

This is a large product. Phase 1 is built in this pass; Phases 2 and 3 follow in subsequent passes so each is reviewable.
