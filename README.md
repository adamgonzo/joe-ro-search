# Joe Rogan Podcast Episodes

This is a Next.js application that displays Joe Rogan's podcast episodes and data from the Spotify API.

## Features

- Displays latest podcast episodes 
- Shows episode title, description, duration, and more
- Play episode preview clips
- Responsive design

## Getting Started

To run this app locally, you will need:

- Node.js and npm
- A Spotify Developer API key

### Installation

1. Clone the repo
```
git clone https://github.com/adamgonzo/rogan-podcast
```

2. Install dependencies
```
npm install
```

3. Create a `.env.local` file with your Spotify API credentials
```
SPOTIFY_CLIENT_ID=YOUR_CLIENT_ID
SPOTIFY_CLIENT_SECRET=YOUR_CLIENT_SECRET
```

4. Run the development server
```
npm run dev
```

5. Open http://localhost:3000

## API

This app uses the [Spotify Web API](https://developer.spotify.com/documentation/web-api/) to get Joe Rogan podcast episode data. 

You will need to register your app and get API credentials from Spotify to use this app.

## Contributing

PRs and issues welcome!

## License

MIT

PS… still working on search by topic can search by user
