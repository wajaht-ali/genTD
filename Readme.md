# Client

## Installation

To install the project dependencies, run the following command in your terminal:

```
npm install
```

## Usage

To start the development server, run the following command:

```
npm run dev
```

This will start the development server and open the application in your default web browser.

To build the production-ready version of the application, run the following command:

```
npm run build
```

This will create a `dist` folder with the optimized, production-ready files.

To preview the production build, run the following command:

```
npm run preview
```

This will start a local server and serve the production build.

## API

The application uses the following external APIs:

- [Axios](https://axios-http.com/) for making HTTP requests
- [React Router DOM](https://reactrouter.com/web/guides/quick-start) for client-side routing
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction/) for displaying notifications
- [React Loader Spinner](https://mhnpd.github.io/react-loader-spinner/) for displaying loading indicators

## Testing

The project uses the following tools for testing:

- [ESLint](https://eslint.org/) for linting the codebase
- [Vite](https://vitejs.dev/) for building and previewing the application

To run the linter, use the following command:

```
npm run lint
```

This will check the codebase for any linting errors or warnings.