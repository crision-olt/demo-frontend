# React + TypeScript + Vite

## Authentication

Set these variables in a local `.env` file before starting the demo:

```env
AUTH_FRONTEND_URL=https://auth.example.com/login
VITE_AUTH_SERVICE_URL=https://auth-api.example.com
```

Use the actual auth frontend URL and auth service origin for your environment. The
demo calls `GET /auth/me` with credentials and, on a 401, redirects to
`AUTH_FRONTEND_URL` with the full current URL in the `redirect` query parameter.
Other errors are displayed instead of redirecting.

The auth service must permit the demo's origin in its credentialed CORS
configuration, and its cookie must be usable by the browser for the service
origin. The auth frontend must also support and validate returning to the demo's
absolute URL after login; the neighboring auth frontend currently only accepts
same-origin paths and uses a mock login API, so it does not yet complete that
round trip.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
