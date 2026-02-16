# Guild (Shadow Rainbow)

Guild is a self-education pet project for learning new programming skills by building a World of Warcraft guild management app.

The app helps players plan raid events, manage characters, and post guild news, while also serving as a playground for Angular + NgRx + Firebase architecture.

## Learning Goals

- Practice Angular application structure with feature modules and shared/core layers
- Learn NgRx state management (actions, reducers, selectors, effects)
- Work with Firebase Auth, Firestore, Storage, Hosting, and Cloud Functions
- Build real UI flows with Angular Material, modals, and forms
- Experiment with rich text editing, file upload, and calendar/event UX

## Main Features

- Google authentication flow (`/auth`)
- Protected dashboard routes (`/dashboard/...`) with auth guard
- Raid event management:
  - Calendar + table view
  - Create, edit, and delete events
  - Join event flow with role-based raid composition (tank/heal/dps)
- User profile management:
  - Update profile data
  - Add, edit, and delete game characters
- Guild blog:
  - List blog posts
  - Add new posts with rich text editor (Quill) and image upload (Firebase Storage)
- Firebase Cloud Function to auto-create a user profile record on first auth

## Tech Stack

- Angular 8.2 + Angular CLI 8.3
- NgRx 8 (store/effects/selectors)
- AngularFire 5 (Auth, Firestore, Storage)
- Angular Material + Bootstrap + ngx-bootstrap
- `angular-calendar` + Luxon
- Quill editor (`ngx-quill` + image resize module)
- Firebase Hosting + Cloud Functions (TypeScript)

## Project Structure

```text
src/
  app/
    auth/                 # Login page and auth flow
    dashboard/            # Main business features (events, blog, profile)
    core/                 # Header/footer/chat/editor/upload components
    shared/               # Models, services, guards, pipes, modal services
    store/                # NgRx actions/reducers/effects/selectors
functions/
  src/
    auth.ts               # createUserRecord auth trigger
```

## Firestore Collections Used

- `users` - user profile records
- `characters` - player characters linked to user email
- `event` - raid events with raid group composition
- `blog` - blog posts

## Getting Started

### Prerequisites

- Node.js version compatible with Angular 8 (commonly Node 10 or 12)
- npm
- Firebase CLI (for deploy/emulator workflows)

### Install Dependencies

```bash
npm ci
cd functions
npm ci
cd ..
```

If npm is in offline mode, disable it for install:

```bash
npm ci --offline=false
```

### Run Locally

```bash
npm start
```

Open `http://localhost:4200/`.

## Available Scripts (Frontend)

- `npm start` - run dev server
- `npm run build` - production build to `dist/`
- `npm test` - unit tests (Karma)
- `npm run lint` - lint frontend code
- `npm run e2e` - end-to-end tests (Protractor)

## Available Scripts (Cloud Functions)

From `functions/`:

- `npm run build` - compile TypeScript
- `npm run lint` - lint functions code
- `npm run serve` - run emulator for functions
- `npm run deploy` - deploy only functions

## Firebase Notes

- Frontend Firebase config is loaded from:
  - `src/environments/environment.ts`
  - `src/environments/environment.prod.ts`
- Default Firebase project alias is set in `.firebaserc` (`shadow-rainbow`)
- `functions/src/auth.ts` contains `createUserRecord`, an auth trigger that creates a `users/{uid}` document on sign-up

## Current Status

This project is actively used as a learning sandbox. Some parts are production-like, and some are intentionally experimental or in progress.

The UI content is currently mixed-language (mostly Russian/Ukrainian).
