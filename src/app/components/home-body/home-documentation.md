# HomeBody Component Documentation

## Overview
The **`HomeBody`** component is an Angular component that represents the main body of a medical application's home page.  
It provides an interface with **interactive cards** that allow access to different sections:
- Medical appointments
- Test results
- Family information
- Emergency contacts

---

## File Structure
```text
home-body/
├── home-body.ts           # Main component logic
├── home-body.html         # HTML template with card structure
├── home-body.css          # Component styles
└── home-body.spec.ts      # Unit tests
```

---

## Main Component (`home-body.ts`)

### Imports
- `@angular/core` → `@Component` decorator
- `@angular/material/icon` → `MatIcon` for Material Design icons
- `../card/card` → Custom `Card` component
- `@angular/router` → `RouterLink` for navigation

### Properties
```typescript
gap: "sm" | "md" | "lg" = "md";
```
- **Type**: `"sm" | "md" | "lg"`
- **Default value**: `"md"`
- **Purpose**: Controls spacing between main container elements.

### Component Configuration
```typescript
@Component({
  selector: 'app-home-body',
  imports: [
    MatIcon,
    Card,
    RouterLink
  ],
  templateUrl: './home-body.html',
  styleUrl: './home-body.css'
})
```

---

## 🖼 HTML Template (`home-body.html`)

The template is composed of a main container with dynamic classes based on the `gap` property.  
Inside, several `app-card` components represent the main sections of the application.

### Main Container
```html
<div class="body-container"
     [class.gap--1]="gap === 'sm'"
     [class.gap--3]="gap === 'md'"
     [class.gap--5]="gap === 'lg'">
```

### Implemented Cards

1. **Welcome**
  - Icon: `waving_hand`
  - Title: `WELCOME!`
  - Description: "Easily access your appointments, studies and personal information"
  - Interactivity: Hoverable
  - Navigation: None

2. **Appointments**
  - Icon: `event`
  - Title: `MY APPOINTMENTS`
  - Description: "View and request medical appointments"
  - Interactivity: Hoverable + cursor pointer
  - Navigation: **Not defined**

3. **Studies**
  - Icon: `description`
  - Title: `MY STUDIES`
  - Description: "Test results"
  - Navigation: `routerLink="/study"`

4. **Family**
  - Icon: `supervisor_account`
  - Title: `MY FAMILY`
  - Description: "Family data"
  - Navigation: `routerLink="/family"`

5. **Emergency Contact**
  - Icon: `call`
  - Title: `EMERGENCY CONTACT`
  - Layout: Column
  - Style: Light red background (`bg-red-100`)
  - Content:
    - **Main Phone**: `0800-123-4567`
    - **WhatsApp**: `+54 11 1234-5678`
  - Interactivity: Not hoverable

---

## CSS Styles (`home-body.css`)

```css
.body-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.gap--1 {
  gap: 0.5rem;
  padding: 0.5rem 0;
}
.gap--3 {
  gap: 1.5rem;
  padding: 1.5rem 0;
}
.gap--5 {
  gap: 3rem;
  padding: 3rem 0;
}
```

---

## Unit Tests (`home-body.spec.ts`)

### Configuration
```typescript
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [HomeBody]
  }).compileComponents();

  fixture = TestBed.createComponent(HomeBody);
  component = fixture.componentInstance;
  fixture.detectChanges();
});
```

### Implemented Tests
- **Smoke Test**: Verifies that the component is created successfully.
  ```typescript
  expect(component).toBeTruthy();
  ```

---

## Dependencies

- **Angular Core**: `@angular/core`, `@angular/router`
- **Angular Material**: `@angular/material/icon`
- **Custom**: `Card` component

---

## Technical Features

- **Responsive Design**: Uses Flexbox and Tailwind CSS utilities
- **Accessibility**: Semantic icons and clear structure
- **Interactivity**: Hover effects, pointer cursor for clickable elements
- **Navigation**: Configured routes for `Studies` and `Family`

---

##  Navigation Routes

| Card              | Route      | Status            |
|-------------------|------------|-------------------|
| Welcome           | -          | Not navigable     |
| My Appointments   | -          | Route not defined |
| My Studies        | `/study`   | Implemented       |
| My Family         | `/family`  | Implemented       |
| Emergency Contact | -          | Not navigable     |



