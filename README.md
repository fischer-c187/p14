
# HRnet Project

Welcome to the HRnet project repository. HRnet is a modern web application for managing employee records efficiently. This application has been refactored to utilize React, enhancing its performance and user experience.

## Getting Started

### Installation

First, clone the repository to your local machine:

```bash
git clone https://github.com/fischer-c187/p14.git
cd hrnet
```

Then, install the project dependencies:

```bash
npm install
```

### Running the Project

#### Development Server

To launch the Vite development server:

```bash
npm run dev
```

This command starts the development server, making the HRnet application accessible via `http://localhost:5173` or another port if 5173 is already in use.

#### Dockerized Development Environment

To start the development environment using Docker:

```bash
npm run start-dev:docker
```

To stop the Dockerized development environment:

```bash
npm run stop-dev:docker
```

These commands manage the development environment container, ensuring that your development setup is consistent and isolated.

### Testing

To execute tests and ensure your application's integrity:

```bash
npm run test
```

For test coverage:

```bash
npx vitest --coverage
```

These testing commands help maintain high code quality and detect issues early in the development process.

### Building the Project

For production deployment, build the project using:

```bash
npm run build
```

This command compiles the application into static files, ready for deployment to a production environment.
