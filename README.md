# PRISM Dashboard

> A behavioral-finance analytics dashboard visualizing small-cap stability trends, SCARF cognitive bias metrics, and SEBI compliance indicators — built with Angular standalone components, Angular Material, and ngx-charts.

[![Angular](https://img.shields.io/badge/Angular-20-dd0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0f766e.svg)](#license)

### 🌐 [Live Demo](https://saravanansaranraj27.github.io/prism-dashboard)

PRISM (Proactive Redemption Interception via SCARF Metrics) is a modern Angular application that visualizes small-cap stability trends, neurocognitive behavioral bias, and regulatory compliance metrics in a single glassmorphic, dark/light-themed interface. It ships with CSV export, hover-driven event annotations, and responsive charts, and is optimized for GitHub Pages deployment.

This dashboard is the technical implementation companion to the MBA (Systems) research project **"Proactive Redemption Interception via SCARF Metrics (PRISM)"**, submitted by **S. Saran Raj (Reg. No. 23419424)** to the **Centre for Distance and Online Education, Bharathidasan University, Tiruchirappalli**, July 2025.

## Contents

- [Research background](#research-background)
- [Features](#features)
- [Quick start](#quick-start)
- [Using the app](#using-the-app)
- [Project structure](#project-structure)
- [Technology](#technology)
- [Development commands](#development-commands)
- [Deployment](#deployment)
- [Sustainable Development Goals alignment](#sustainable-development-goals-alignment)
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

```
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

Four hypotheses were empirically validated (p < 0.01 to p < 0.0001), covering SCARF fairness as a redemption-variance driver (H1), network amplification during monetary tightening (H2), PRISM's forecast superiority over Fama-French and GARCH models (H3), and the correlation between Liquidity-Adjusted Momentum (LAMB) and SEBI stress scores (H4). Full methodology, hypothesis testing, and bibliography are documented in the accompanying project report.

## Features

| Area                 | Capabilities                                                                 |
| -------------------- | ---------------------------------------------------------------------------- |
| SCI Monitor          | Line chart tracking the Small-Cap Stability Index with crisis event markers  |
| SCARF Radar          | Polar chart of neurocognitive bias dimensions with redemption-impact detail  |
| Compliance Cards     | Live metric cards benchmarked against SEBI liquidity and settlement mandates |
| CSV Export           | One-click export of all dashboard datasets via PapaParse                     |
| Dark / Light Theming | Persistent theme toggle backed by `localStorage`                             |
| Responsive Design    | Mobile-first layout across dashboard grid, charts, and cards                 |
| Loading States       | Polished skeleton loaders during route transitions for better UX             |
| Client-Side Only     | No backend required; runs entirely in the browser                            |
| GitHub Pages Ready   | Optimized for easy deployment via `angular-cli-ghpages`                      |

## Quick start

### Requirements

- Node.js 18 or newer
- npm
- Angular CLI

### Create project

```sh
ng new prism-dashboard --standalone --style=scss --routing --ssr=false
cd prism-dashboard
```

### Clone and install (if using this repository)

```sh
git clone https://github.com/saravanansaranraj27/prism-dashboard.git
cd prism-dashboard
npm install
```

### Add dependencies

```sh
ng add @angular/material

npm install @swimlane/ngx-charts@24 d3 lucide-angular papaparse --legacy-peer-deps
npm install @lucide/angular --legacy-peer-deps
npm install -D @types/papaparse @types/d3 --legacy-peer-deps
npm install @angular/animations@^20.3.0 --legacy-peer-deps
```

### Scaffold the project structure (PowerShell)

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
│   │   │       └── export.service.ts           # CSV export via PapaParse
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
│   │   ├── app.config.ts                       # App-wide providers (animations, router)
│   │   └── app.routes.ts                       # Route definitions
│   ├── index.html
│   ├── main.ts
│   └── styles.scss                             # Global theme variables & chart styling
├── tsconfig.json
├── tsconfig.app.json
└── tsconfig.spec.json
```

## Technology

- [Angular 20](https://angular.dev/) — standalone components, signals, and `@if`/`@for` control flow
- [Angular Material](https://material.angular.dev/) — cards, buttons, and icons
- [ngx-charts](https://swimlane.gitbook.io/ngx-charts) — line and polar chart visualizations
- [d3-shape](https://d3js.org/d3-shape) — custom chart curve interpolation
- [PapaParse](https://www.papaparse.com/) — client-side CSV generation
- [TypeScript 5](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)

## Development commands

```sh
ng serve          # Start the development server
ng build          # Create a production build
ng test           # Run unit tests
ng lint           # Run linting (if configured)
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

## Sustainable Development Goals alignment

The underlying PRISM research framework advances four United Nations Sustainable Development Goals through targeted financial system interventions:

| SDG                                                 | Key Contribution                                                                                                                                                   |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **SDG 8** — Decent Work and Economic Growth         | Compressed liquidation timelines from 27 to 18 days; protected ₹4.2 lakh crore in retail assets during the 2024 market crisis by cutting redemption clustering 67% |
| **SDG 9** — Industry, Innovation and Infrastructure | Integrated SCARF neurofinance with GARCH network correlations; 18 proprietary models including the SCI index                                                       |
| **SDG 10** — Reduced Inequalities                   | Calibrated SEBI stress tests to network correlation thresholds; reduced investor wealth erosion by 1.2% alpha/year through fairness protocols                      |
| **SDG 16** — Peace, Justice and Strong Institutions | Blockchain-verified compliance auditing; whistleblower-integrated dashboards achieving 98.2% SEBI compliance                                                       |

## Contributing

Bug reports, improvements, and pull requests are welcome. Please keep changes focused and verify them with the available build and lint commands.

## License

This project is licensed under the MIT License.
