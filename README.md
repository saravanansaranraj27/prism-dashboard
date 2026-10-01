# PRISM Dashboard

> A behavioral-finance analytics dashboard visualizing small-cap stability trends, SCARF cognitive bias metrics, and SEBI compliance indicators — built with Angular standalone components, Angular Material, and ngx-charts.

[![Angular](https://img.shields.io/badge/Angular-20-dd0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Angular Material](https://img.shields.io/badge/Angular%20Material-20-3f51b5?logo=angular&logoColor=white)](https://material.angular.dev/)
[![ngx-charts](https://img.shields.io/badge/ngx--charts-24-0f766e)](https://swimlane.gitbook.io/ngx-charts)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0f766e.svg)](#license)

### 🌐 [Live Demo](https://saravanansaranraj27.github.io/prism-dashboard)

PRISM (Proactive Redemption Interception via SCARF Metrics) is a modern Angular application that visualizes small-cap stability trends, neurocognitive behavioral bias, and regulatory compliance metrics in a single glassmorphic, dark/light-themed interface. It ships with CSV export, hover-driven event annotations, and responsive charts, and is optimized for GitHub Pages deployment.

This dashboard is the technical implementation companion to the MBA (Systems) research project **"Proactive Redemption Interception via SCARF Metrics (PRISM)"**, submitted by **S. Saran Raj (Reg. No. 23419424)** to the **Centre for Distance and Online Education, Bharathidasan University, Tiruchirappalli**, July 2025.

The application is entirely client-side: all datasets are bundled as typed static data, so it runs in the browser without a backend.

## Contents

- [Research background](#research-background)
- [Dashboard coverage](#dashboard-coverage)
- [Features](#features)
- [Quick start](#quick-start)
- [Using the app](#using-the-app)
- [Project structure](#project-structure)
- [Technology](#technology)
- [Development commands](#development-commands)
- [Testing](#testing)
- [Deployment](#deployment)
- [Sustainable Development Goals alignment](#sustainable-development-goals-alignment)
- [Troubleshooting](#troubleshooting)
- [Complete command reference](#complete-command-reference)
- [Contributing](#contributing)
- [License](#license)

## Research background

PRISM pioneers a neuro-behavioral framework to stabilize small-cap mutual funds in volatile economies by converting investor psychology into pre-emptive defenses. It resolves the **volatility-sentiment paradox** — where low market volatility contradicts high investor sensitivity — by intercepting redemption threats triggered by five neurocognitive dimensions:

| SCARF Dimension | Neurocognitive Driver   |
| --------------- | ----------------------- |
| Status          | Peer-comparison anxiety |
| Certainty       | Regulatory ambiguity    |
| Autonomy        | Control perception      |
| Relatedness     | Institutional trust     |
| Fairness        | Fee equity              |

The research quantifies these SCARF biases using NLP analysis of 18,500 digital behavioral data points and activates automated countermeasures through the **Small-Cap Stability Index (SCI)** — a dynamic algorithm integrating liquidity resilience (40%), behavioral stability (30%), financial health (20%), and regulatory compliance (10%):

```text
SCI = 0.4 × (Liquid Assets / Outflows) + 0.3 × (SCARF Stability) + 0.2 × (CAMEL+) + 0.1 × (SEBI Compliance)
```

Validated across the 2020–2025 market cycle using Nippon India Small Cap Fund's ₹63,007 crore portfolio, the study's key findings include:

| Metric                                | Result                                                         |
| ------------------------------------- | -------------------------------------------------------------- |
| Redemption clustering reduction       | 67%                                                            |
| Liquidation timeline compression      | 27 days → 18 days (below SEBI's mandated limit)                |
| Forecasting accuracy improvement      | 22–42% better than traditional risk models                     |
| Compliance cost savings               | ₹18.2 crore annually                                           |
| Sentiment-volatility paradox resolved | Over 80% via fairness-perception mediation (ρ = 0.79 with VIX) |

Four hypotheses were empirically validated (p < 0.01 to p < 0.0001):

| Hypothesis | Coverage                                                                      |
| ---------- | ----------------------------------------------------------------------------- |
| H1         | SCARF fairness as a redemption-variance driver                                |
| H2         | Network amplification during monetary tightening                              |
| H3         | PRISM's forecast superiority over Fama-French and GARCH models                |
| H4         | Correlation between Liquidity-Adjusted Momentum (LAMB) and SEBI stress scores |

Full methodology, hypothesis testing, and bibliography are documented in the accompanying project report.

## Dashboard coverage

The dashboard renders **3 data-driven views** from **3 typed datasets** defined in `src/app/core/data/prism.data.ts`, plus a header, a conditional alert banner, and an SDG footer.

### Views

| Component                  | Dataset           | Coverage                                                                 |
| -------------------------- | ----------------- | ------------------------------------------------------------------------ |
| `SciMonitorComponent`      | `SCI_TREND_DATA`  | Line chart of the SCI with a 0.6 alert threshold and crisis-event legend |
| `ScarfRadarComponent`      | `SCARF_METRICS`   | Polar chart of SCARF bias scores with redemption-impact detail           |
| `ComplianceCardsComponent` | `COMPLIANCE_DATA` | Grid of metric cards benchmarked against SEBI and industry figures       |
| `DashboardComponent`       | All three         | Shell with theme toggle, CSV export, alert banner, and SDG footer        |

### SCI trend data — 9 data points

| Date   | SCI  | Event              |
| ------ | ---- | ------------------ |
| Jan 20 | 0.52 | COVID Crash        |
| Jun 20 | 0.58 | —                  |
| Jan 21 | 0.72 | Recovery           |
| Jan 22 | 0.68 | Peak Valuation     |
| Jan 23 | 0.45 | Rate Hike Cycle    |
| Jun 23 | 0.55 | —                  |
| Jan 24 | 0.48 | Liquidity Crisis   |
| Jun 24 | 0.62 | PRISM Intervention |
| Mar 25 | 0.81 | Stabilized         |

### SCARF metrics — 5 dimensions

| Dimension   | Score | Correlation      | Redemption impact                                                                                             |
| ----------- | ----- | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| Status      | 42    | —                | Status threat drives 42% of redemption clustering during drawdowns; mitigated via communication amplification |
| Certainty   | 28    | —                | 72% misinterpreted SEBI stress tests; mitigated by T+1 settlement guarantees                                  |
| Autonomy    | —     | —                | Algorithmic liquidity deployment prevents fire sales during control-loss panics                               |
| Relatedness | —     | Network ρ = 0.67 | Trust deficit amplifies contagion (network ρ=0.67); resolved via AMC transparency                             |
| Fairness    | 30    | VIX ρ = 0.79     | Primary variance driver (ρ=0.79 with VIX); explains >50% redemption variance (H1)                             |

Dimensions without a score are omitted from the radar chart but still carry redemption-impact detail.

### Compliance metrics — 4 cards

| Metric                   | Value   | Benchmark                 | Status  |
| ------------------------ | ------- | ------------------------- | ------- |
| Liquidity Coverage       | 127%    | 110% (SEBI Minimum)       | Safe    |
| T+1 Success Rate         | 94.7%   | 72.4% (Industry Average)  | Safe    |
| 50% Liquidation Variance | 7.4%    | —                         | Warning |
| Liquidation Time         | 18 days | 30 days (Maximum Allowed) | Safe    |

### Tier-2 interception alert

The dashboard shows a **TIER-2 INTERCEPTION ACTIVE** banner whenever the latest SCI value is below the **0.6** threshold, indicating that automated liquidity protocols are engaged.

## Features

| Area                 | Capabilities                                                                 |
| -------------------- | ---------------------------------------------------------------------------- |
| SCI Monitor          | Line chart tracking the Small-Cap Stability Index with crisis event markers  |
| SCARF Radar          | Polar chart of neurocognitive bias dimensions with redemption-impact detail  |
| Compliance Cards     | Live metric cards benchmarked against SEBI liquidity and settlement mandates |
| Event Annotations    | Hover-driven crisis and event annotations on SCI chart points                |
| Alert Banner         | Tier-2 interception alert when the latest SCI falls below 0.6                |
| CSV Export           | One-click export of all dashboard datasets via PapaParse                     |
| Dark / Light Theming | Persistent theme toggle backed by `localStorage`                             |
| Responsive Design    | Mobile-first layout across dashboard grid, charts, and cards                 |
| Loading States       | Polished skeleton loaders during route transitions for better UX             |
| Standalone Angular   | Standalone components, signals, and `@if`/`@for` control flow                |
| TypeScript           | Strictly typed models, services, and component inputs                        |
| Client-Side Only     | No backend required; runs entirely in the browser                            |
| GitHub Pages Ready   | Optimized for easy deployment via `angular-cli-ghpages`                      |

## Quick start

### Requirements

- Node.js 18 or newer
- npm
- Angular CLI

### Create the project

```sh
ng new prism-dashboard --standalone --style=scss --routing --ssr=false
cd prism-dashboard
```

### Clone the repository

```sh
git clone https://github.com/saravanansaranraj27/prism-dashboard.git
cd prism-dashboard
npm install --legacy-peer-deps
```

### Add dependencies

```sh
ng add @angular/material

npm install @swimlane/ngx-charts@24 d3 lucide-angular papaparse --legacy-peer-deps
npm install @lucide/angular --legacy-peer-deps
npm install -D @types/papaparse @types/d3 --legacy-peer-deps
npm install @angular/animations@^20.3.0 --legacy-peer-deps
```

### Scaffold the project structure

Run this from the project root to create the folders and empty files referenced below — safe to re-run, since existing files and folders are left untouched:

```powershell
$dirs = @(
  "src/app/core/data",
  "src/app/core/models",
  "src/app/core/services",
  "src/app/features/dashboard",
  "src/app/features/sci-monitor",
  "src/app/features/scarf-radar",
  "src/app/features/compliance-cards",
  "src/app/shared/components/metric-card",
  "src/app/shared/components/skeleton-loader"
)
$dirs | ForEach-Object { New-Item -ItemType Directory -Force -Path $_ | Out-Null }

$files = @(
  "src/app/core/data/prism.data.ts",
  "src/app/core/models/prism.model.ts",
  "src/app/core/services/export.service.ts",
  "src/app/features/dashboard/dashboard.component.ts",
  "src/app/features/dashboard/dashboard.component.html",
  "src/app/features/dashboard/dashboard.component.scss",
  "src/app/features/sci-monitor/sci-monitor.component.ts",
  "src/app/features/sci-monitor/sci-monitor.component.html",
  "src/app/features/sci-monitor/sci-monitor.component.scss",
  "src/app/features/scarf-radar/scarf-radar.component.ts",
  "src/app/features/scarf-radar/scarf-radar.component.html",
  "src/app/features/scarf-radar/scarf-radar.component.scss",
  "src/app/features/compliance-cards/compliance-cards.component.ts",
  "src/app/features/compliance-cards/compliance-cards.component.html",
  "src/app/features/compliance-cards/compliance-cards.component.scss",
  "src/app/shared/components/metric-card/metric-card.component.ts",
  "src/app/shared/components/metric-card/metric-card.component.html",
  "src/app/shared/components/metric-card/metric-card.component.scss",
  "src/app/shared/components/skeleton-loader/skeleton-loader.component.ts",
  "src/app/shared/components/skeleton-loader/skeleton-loader.component.html",
  "src/app/shared/components/skeleton-loader/skeleton-loader.component.scss"
)
$files | ForEach-Object { if (-not (Test-Path $_)) { New-Item -ItemType File -Path $_ | Out-Null } }
```

### Run locally

```sh
ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

### Verify Angular

To check your Angular version:

```sh
ng version
```

## Using the app

1. Open the dashboard to view the SCI trend, SCARF radar, and compliance cards at a glance
2. Hover over SCI chart points to see the crisis/event annotations for that date
3. Hover or select SCARF radar dimensions to see the associated redemption-impact detail
4. Use the theme toggle in the header to switch between dark and light mode
5. Click **Export CSV** to download all current dashboard datasets as a single CSV file

### Theme persistence

The selected theme is stored in `localStorage` under the `prism-theme` key. On first load, the app falls back to the operating system's `prefers-color-scheme` setting, and the theme is applied before Angular bootstraps to avoid a flash of the wrong theme.

### CSV export

The export combines the `sci`, `scarf`, and `compliance` datasets into one file. Each row carries a `_dataset` column identifying its source, and the file is named `prism-dashboard-export-YYYY-MM-DD.csv`.

## Project structure

```text
prism-dashboard/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── data/
│   │   │   │   └── prism.data.ts              # Static SCI, SCARF, and compliance datasets
│   │   │   ├── models/
│   │   │   │   └── prism.model.ts              # Shared TypeScript interfaces
│   │   │   └── services/
│   │   │       ├── export.service.ts           # CSV export via PapaParse
│   │   │       └── theme.service.ts            # Dark/light theme signal with localStorage persistence
│   │   ├── features/
│   │   │   ├── dashboard/                      # Main dashboard shell, theming, alerts
│   │   │   ├── sci-monitor/                    # SCI line chart + crisis-event legend
│   │   │   ├── scarf-radar/                    # SCARF polar chart + bias legend
│   │   │   └── compliance-cards/                # Compliance metric card grid
│   │   ├── shared/
│   │   │   └── components/
│   │   │       ├── metric-card/                # Reusable metric card component
│   │   │       └── skeleton-loader/            # Loading state placeholder component
│   │   ├── app.ts                              # Root standalone component
│   │   ├── app.html
│   │   ├── app.scss
│   │   ├── app.spec.ts                         # Root component unit test
│   │   ├── app.config.ts                       # App-wide providers (animations, router)
│   │   └── app.routes.ts                       # Route definitions
│   ├── index.html
│   ├── main.ts
│   └── styles.scss                             # Global theme variables & chart styling
├── public/
│   └── favicon.ico                             # Application favicon
├── .editorconfig                               # Editor formatting rules
├── .gitignore                                  # Git exclusions for generated files
├── angular.json                                # Angular workspace, build, test, and deploy configuration
├── package.json                                # Project dependencies and npm scripts
├── package-lock.json                           # Locked npm dependency versions
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── README.md                                   # Project documentation
```

## Technology

- [Angular 20](https://angular.dev/) — standalone components, signals, and `@if`/`@for` control flow
- [Angular Material](https://material.angular.dev/) — cards, buttons, and icons
- [ngx-charts](https://swimlane.gitbook.io/ngx-charts) — line and polar chart visualizations
- [d3-shape](https://d3js.org/d3-shape) — custom chart curve interpolation
- [PapaParse](https://www.papaparse.com/) — client-side CSV generation
- [TypeScript 5](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- [Karma](https://karma-runner.github.io/) and [Jasmine](https://jasmine.github.io/) — unit test runner and framework
- [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) — GitHub Pages deployment

## Development commands

### Start the development server

```sh
ng serve
npm start
```

### Create a production build

```sh
ng build
npm run build
```

### Rebuild on change

Uses the development configuration:

```sh
npm run watch
```

### Run unit tests

```sh
ng test
npm test
```

### Run linting

Available if linting is configured in the project:

```sh
ng lint
```

### Install dependencies

```sh
npm install --legacy-peer-deps
```

### Check the Angular version

```sh
ng version
```

## Testing

The project includes a Karma and Jasmine setup with **1 spec file** containing **1 test case**.

| Test file     | Coverage                                     |
| ------------- | -------------------------------------------- |
| `app.spec.ts` | Verifies the root `App` component is created |

Run the unit tests with:

```sh
ng test
```

## Deployment

### Deploy to GitHub Pages

First, add Angular CLI GitHub Pages support:

```sh
npm install angular-cli-ghpages --save-dev --legacy-peer-deps
```

Then deploy your application:

```sh
ng deploy --base-href=/prism-dashboard/
```

This builds the application and deploys it to GitHub Pages with the correct base href for proper routing.

### Manual deployment

To create a production build for manual deployment:

```sh
ng build --configuration production
```

The built files will be located in the `dist/` directory and can be deployed to any static hosting service.

### Build configuration

The production build is configured with the `/prism-dashboard/` base href and the following budgets:

| Budget               | Warning | Error |
| -------------------- | ------- | ----- |
| Initial bundle       | 500 kB  | 1 MB  |
| Component stylesheet | 4 kB    | 8 kB  |

The `dist/` directory is excluded from source control.

## Sustainable Development Goals alignment

The underlying PRISM research framework advances four United Nations Sustainable Development Goals through targeted financial system interventions:

| SDG                                                 | Key Contribution                                                                                                                                                   |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **SDG 8** — Decent Work and Economic Growth         | Compressed liquidation timelines from 27 to 18 days; protected ₹4.2 lakh crore in retail assets during the 2024 market crisis by cutting redemption clustering 67% |
| **SDG 9** — Industry, Innovation and Infrastructure | Integrated SCARF neurofinance with GARCH network correlations; 18 proprietary models including the SCI index                                                       |
| **SDG 10** — Reduced Inequalities                   | Calibrated SEBI stress tests to network correlation thresholds; reduced investor wealth erosion by 1.2% alpha/year through fairness protocols                      |
| **SDG 16** — Peace, Justice and Strong Institutions | Blockchain-verified compliance auditing; whistleblower-integrated dashboards achieving 98.2% SEBI compliance                                                       |

The dashboard footer displays SDG 8, 9, 10, and 16 badges with their full goal names on hover.

## Troubleshooting

### `ng` is not recognized

Install the Angular CLI globally:

```sh
npm install -g @angular/cli
```

Then verify:

```sh
ng version
```

### Peer dependency errors during install

Install with the legacy peer dependency flag used throughout this project:

```sh
npm install --legacy-peer-deps
```

### Port 4200 is already in use

Start the development server on another port:

```sh
ng serve --port 4300
```

### Blank page or missing assets on GitHub Pages

Make sure the application is deployed with the repository base href:

```sh
ng deploy --base-href=/prism-dashboard/
```

### Charts do not render

Confirm the chart and animation dependencies are installed:

```sh
npm install @swimlane/ngx-charts@24 d3 --legacy-peer-deps
npm install @angular/animations@^20.3.0 --legacy-peer-deps
```

### Theme does not persist

The theme is saved in `localStorage` under `prism-theme`. Make sure browser storage is enabled, or clear the stored value to fall back to the system color scheme.

### CSV export does not download

Make sure the browser allows file downloads from the site, then click **Export CSV** again.

### Check the installed Angular version

```sh
ng version
```

## Complete command reference

```sh
git clone https://github.com/saravanansaranraj27/prism-dashboard.git
npm install --legacy-peer-deps
ng serve
ng version
ng build
ng build --configuration production
ng test
ng lint
ng deploy --base-href=/prism-dashboard/
```

## Contributing

Bug reports, improvements, and pull requests are welcome. Please keep changes focused and verify them with the available build and lint commands.

```sh
ng build
ng test
```

## License

This project is licensed under the MIT License.
