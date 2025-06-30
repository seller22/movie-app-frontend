# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `Code Breakdown Table`

| Element/Function           | Type            | Purpose                                            | Description                                                                     |
| -------------------------- | --------------- | -------------------------------------------------- | ------------------------------------------------------------------------------- |
| `useState`                 | React Hook      | State manage karne ke liye                         | `watchlist`, `isLoading`, aur `error` jese states manage karta hai.             |
| `useEffect`                | React Hook      | Side effects run karne ke liye                     | Initial load par loading state show karne ke liye timer set karta hai.          |
| `watchlist`                | State           | Watchlist data store karta hai                     | Ye ek array hai jo user ki selected movies store karta hai.                     |
| `isLoading`                | State           | Loading animation dikhane ke liye                  | App ke start me data loading show karne ke liye true hota hai.                  |
| `error`                    | State           | Error messages dikhane ke liye                     | Agar koi invalid movie data mile toh error message set karta hai.               |
| `toggleWatchlist(movie)`   | Function        | Movie ko watchlist me add/remove karta hai         | Agar movie already watchlist me hai to remove karta hai, nahi to add karta hai. |
| `<Loader />`               | Component       | Loading animation                                  | Jab `isLoading` true ho to spinner ya loader show karta hai.                    |
| `<ErrorMessage />`         | Component       | Error text display karta hai                       | Agar `error` state me koi message ho to user ko dikhata hai.                    |
| `moviesData`               | Static Data     | Movie list                                         | Static list of movies with title, year and poster image.                        |
| `.map()` (on `moviesData`) | JS Array Method | List render karta hai                              | Har movie ke liye ek card UI generate karta hai.                                |
| `isInWatchlist`            | Variable        | Check karta hai kya movie already watchlist me hai | Conditional rendering ke liye use hota hai (`Add` ya `Remove` button).          |


### `UI Structure Explanation`

| Section                     | Description                                                            |
| --------------------------- | ---------------------------------------------------------------------- |
| `<h1>🎬 Free to Watch</h1>` | Heading of the page                                                    |
| `movie-grid`                | Grid layout for displaying all movies                                  |
| `movie-card`                | Har movie ke liye ek card jisme image, title, year aur button hota hai |
| `toggle-btn`                | Add/Remove button - state ke hisaab se class change hoti hai           |
| `watchlist-grid`            | Watchlist ke movies dikhane ka section                                 |
| `empty-text`                | Jab watchlist empty ho to ek message dikhata hai                       |



### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
