# TodoMVC Playwright Automation Project

A robust, end-to-end (E2E) test automation suite built with **Playwright** and **TypeScript** to validate the core functionalities of the standard React TodoMVC application.

## 🚀 App Overview

This project automates testing for the single-page React TodoMVC application located at:  
👉 **[https://todomvc.com/examples/react/dist/](https://todomvc.com/examples/react/dist/)**

The application implements standard task management features (adding, editing, completing, filtering, and deleting tasks) using a simple list interface. 

---

## 🛠️ Tech Stack & Key Features

* **Engine:** Playwright (Chromium, Firefox, WebKit)
* **Language:** TypeScript
* **Design Pattern:** Page Object Model (POM) for clean, maintainable selectors and actions
* **CI/CD:** Integrated with GitHub Actions
* **Reporting:** HTML and JSON reporters with rich artifacts generated on failure

---

## 📋 Test Suite Matrix

The suite covers the core user journeys using structured assertions, tags (`@smoke`, `@regression`), and built-in resilience against flakiness.

| Test ID | Scenario | Description / Steps | Tags |
| :--- | :--- | :--- | :--- |
| **T001** | Add New Todos | Navigates to the app, adds "Buy groceries" and "Pay bills", and asserts that 2 items are visible with the correct remaining count. | `@smoke` |
| **T002** | Mark Complete | Toggles the completion checkbox of the first item and asserts that the `.completed` class is applied alongside an updated counter. | None |
| **T003** | Edit Todo | Double-clicks a todo item label, updates the text to "Buy veggies", and ensures the state persists. | None |
| **T004** | Delete Todo | Hovers over an item, clicks the destroy button, and asserts its removal from the list. | None |
| **T005** | Filter & Clear | Validates "Active" and "Completed" filters work accurately, and ensures the "Clear Completed" button purges completed tasks. | `@regression` |

---

## ⚙️ Configuration Details (`playwright.config.ts`)

The project is pre-configured to ensure reliable execution and deep debugging capabilities:

* **Retries:** Setup to retry failing tests up to **2 times** to mitigate flakiness.
* **Artifacts on Failure:** Automatically captures screenshots, videos, and trace files **only on failure** to optimize storage and speed.
* **Browsers:** Configured for cross-browser execution across Chromium, Firefox, and WebKit.

---

## 💻 Getting Started

### Prerequisites

Make sure you have the following installed on your machine before getting started:

- [Node.js](https://nodejs.org/) — **v18 or later** recommended
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)
- A code editor — [VS Code](https://code.visualstudio.com/) is recommended

Verify your versions:

```bash
node -v
npm -v
```

---

### 1. Clone the Repository

```bash
git clone https://github.com/ManuelRM98/TodoApp-Playwright-Automation.git
cd TodoApp-Playwright-Automation
```

---

### 2. Install Dependencies

```bash
npm install
```

This will install all packages listed in `package.json`, including `@playwright/test`.

---

## 3. Install Playwright Browsers

Playwright needs its own browser binaries (Chromium, Firefox, WebKit):

```bash
npx playwright install
```

To install a specific browser only:

```bash
npx playwright install chromium
npx playwright install firefox
npx playwright install webkit
```

---

### 4. Verify the Setup

Run the test suite to confirm everything is working:

```bash
npx playwright test
```

To open the interactive UI mode:

```bash
npx playwright test --ui
```

To view the last test report in your browser:

```bash
npx playwright show-report
```

---

### 5. (Optional) VS Code Extension

Install the official Playwright extension for a better developer experience:

- Open VS Code
- Search for **"Playwright Test for VSCode"** in the Extensions panel
- Or install via terminal:

```bash
code --install-extension ms-playwright.playwright
```

This gives you test run buttons, debugging, and browser selector support directly in the editor.

---

## Quick Reference

| Command | Description |
|---|---|
| `npx playwright test` | Run all tests |
| `npx playwright test --ui` | Open interactive UI mode |
| `npx playwright test --headed` | Run tests with a visible browser |
| `npx playwright test --debug` | Run tests in debug mode |
| `npx playwright show-report` | View the HTML test report |
| `npx playwright codegen` | Record a new test via browser interaction |

---

## Troubleshooting

**`Cannot find module '@playwright/test'`**
Run `npm install` — the dependency is missing.

**Browser not found / launch errors**
Run `npx playwright install` to download the required browser binaries.

**Tests fail only on CI**
Add `npx playwright install --with-deps` as a step in your CI pipeline to ensure OS-level dependencies are present.

---

> 💡 For full documentation, visit [playwright.dev](https://playwright.dev)