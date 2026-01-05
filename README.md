# ⚡️ Byte Prep Me Monorepo

![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern, high-performance monorepo boilerplate built with **Turborepo**, **Bun**, and **Next.js 16**. Designed for scalability, speed, and developer experience.

## 🚀 Features

- **⚡️ Turborepo**: High-performance build system with remote caching capabilities.
- **🥯 Bun**: Blazing fast Javascript runtime and package manager.
- **⚛️ Next.js 16**: The latest React framework with App Router and Server Actions.
- **🎨 Tailwind CSS v4**: Utility-first CSS framework for rapid UI development.
- **📐 TypeScript**: End-to-end type safety across apps and packages.
- **🛠 Shared Configs**: Centralized ESLint, Prettier, and TypeScript configurations.
- **🐶 Husky & Lint Staged**: Pre-commit hooks to ensure code quality.

## 📦 Tech Stack

- **Monorepo Tool**: [Turborepo](https://turbo.build/)
- **Package Manager**: [Bun](https://bun.sh/)
- **Framework**: [Next.js 16](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Linting**: [ESLint](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/)

## 🛠 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [Bun](https://bun.sh/) (`npm install -g bun`)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/vikz91/monorepo-boilerplate.git
    cd monorepo-boilerplate
    ```

2.  **Install dependencies:**

    ```bash
    bun install
    ```

### Running Locally

To start the development server for all apps:

```bash
bun dev
```

This will start the **web** application (Next.js) and generic services in parallel.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

Run these commands from the root directory:

| Command           | Description                                  |
| :---------------- | :------------------------------------------- |
| `bun dev`         | Starts the development server for all apps.  |
| `bun run build`   | Builds all apps and packages for production. |
| `bun run lint`    | Runs ESLint across the entire workspace.     |
| `bun run format`  | Formats code using Prettier.                 |
| `bun run test`    | Runs tests across the workspace.             |
| `bun run prepare` | Sets up Husky git hooks.                     |

## 📂 Project Structure

```bash
.
├── apps
│   └── web              # Main Next.js application
├── packages
│   ├── eslint-config    # Shared ESLint configurations
│   ├── shared           # Shared utility code
│   ├── types            # Shared TypeScript types
│   └── typescript-config # Shared tsconfig bases
├── turbo.json           # Turborepo configuration
├── package.json         # Root dependencies and scripts
└── README.md            # Project documentation
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch: `git checkout -b feature/your-feature-name`.
3.  Make your changes and commit them: `git commit -m 'Add some feature'`.
4.  Push to the branch: `git push origin feature/your-feature-name`.
5.  Submit a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
