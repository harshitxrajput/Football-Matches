# Football Matches Dashboard

A modern React application that displays upcoming football matches with an elegant, dark-themed UI. The application fetches match data from the API-Football service and presents it in an interactive, responsive layout.

## Features

- Display upcoming football matches with team details
- Modern dark theme with glassmorphism effects
- Responsive grid layout
- Interactive cards with hover effects
- Real-time match status indicators

## API Integration

The project uses the API-Football service to fetch match data. The API endpoint used is:

```
https://apiv3.apifootball.com/?action=get_events&from=2025-05-05&to=2025-06-05&league_id=152&APIkey=myAPIkey
```

This endpoint provides match data for games scheduled between May 5, 2025 and June 5, 2025.

## Technologies Used

- React + Vite
- Tailwind CSS
- React Icons
- API-Football service

## Project Structure

- `src/App.jsx` - Main application component
- `src/components/MatchCard.jsx` - Component for displaying individual match details

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Add your API key to the fetch URL
4. Run the development server: `npm run dev`

## Note

Make sure to replace `myAPIkey` with your actual API-Football API key when setting up the project.
