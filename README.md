# Use Public API

A simple Express + EJS app that shows a random quote using the Api Ninjas public API.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root with your API key:

   ```bash
   API_KEY=your_api_ninjas_key_here
   ```

   If you do not have an API key, get one from https://api.api-ninjas.com/.

## Run the app

```bash
node index.js
```

Then open `http://localhost:3000` in your browser.

## How it works

- `index.js` starts an Express server.
- EJS renders the page from `views/index.ejs`.
- `/random` calls the API and shows a quote on the page.

## Files

- `index.js` - main server code
- `package.json` - project dependencies
- `views/` - EJS templates
- `public/` - static assets like CSS and images

## Notes

- Make sure `API_KEY` is set, otherwise the API request will fail.
- The app uses port `3000` by default.
