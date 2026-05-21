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

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).
