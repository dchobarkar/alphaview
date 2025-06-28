# AlphaView

AlphaView is a modern, full-featured web application for exploring and visualizing data from all Alpha Vantage API endpoints. It provides a clean, tabbed interface for stocks, options, intelligence, fundamentals, forex, crypto, commodities, economic indicators, and technical indicators.

## Features

- **All Alpha Vantage Endpoints:** Core stock, options, intelligence, fundamentals, forex, crypto, commodities, economic, and technical indicators.
- **Tabbed Navigation:** Quickly switch between API categories and endpoints.
- **Dynamic Forms:** Input symbols, intervals, and other parameters as needed.
- **Unified Table Display:** All data is presented in a clean, responsive table.
- **Meta Information:** Contextual info (e.g., units, intervals, last refreshed) shown above results.
- **Modern UI:** Built with React 19, Next.js, and Tailwind CSS v4 for a beautiful, accessible experience.
- **TypeScript:** Fully typed for safety and maintainability.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS v4
- **HTTP:** Axios
- **Type Checking:** TypeScript

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/dchobarkar/alphaview.git
cd alphaview
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Usage

- Navigate between API categories using the sidebar or tabs.
- Use the provided forms to input symbols, select intervals, and fetch data.
- Results are displayed in a responsive table with meta info above.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

**AlphaView** is not affiliated with Alpha Vantage. Please respect Alpha Vantage's [terms of service](https://www.alphavantage.co/terms_of_service/).

Made with ❤️ by Darshan Jitendra Chobarkar

## 💡 Author

Built by [Darshan Chobarkar](https://github.com/dchobarkar)  
LinkedIn: [https://www.linkedin.com/in/dchobarkar/](https://www.linkedin.com/in/dchobarkar/)
