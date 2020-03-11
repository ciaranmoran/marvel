# marvel

## Start the app:

```sh
cd app
npm install
```

Create `secrets.json` in **app/src** with the following content:
`{ "apiKey": "your-api-key" }`

```sh
npm start
```

## Highlights:

- Simplicity with pure CSS (Tailwind CSS pulled in for standardisation) and quick and easy axios implementation for API calls
- Responsive UI
- The use of React's Context API for state management (this app doesn't require any global state management as it is, but it's in place to simply highlight a basic global state use-case and pattern)

## Notes:

I know.. no unit tests. Given the time, and in a proper project, I'd just use Jest and aim for 100% coverage on branches at the very least 👍
