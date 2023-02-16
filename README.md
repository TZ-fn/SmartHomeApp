# SmartHome App

![Screenshot of the app](https://github.com/TZ-fn/SmartHomeApp/blob/main/public/smart-home-app-dashboard.herokuapp.com_.png)

## About

This is a simple control panel for smart home devices. The app renders a list of devices using a mocked API call, if you click a device a modal with clicked device's details will appear.

Modal auto-updates with mocked data using WebSocket protocol. You can drag and resize the modal window, it also remembers its last position and size.

## Live version

The live version can be found [here](https://smart-home-app-dashboard.herokuapp.com/).

## Running the project locally

Clone or download this repository.

Run `npm install` then `npm run dev` in the main directory.

Open `http://localhost:3000` to view the app in your browser.

## Technologies I used

React

Next.js

TypeScript

interact.js

Socket.IO

## What problems I had encountered

I have never worked with WebSocket before, so using it was quite challenging for me. Writing the server-side code was also a bit difficult, but Next.js make it easier.

However, when I tried to deploy the app onto the Vercel hosing it turned out that the hosting doesn't support WebSocket, luckily hosting it to Heroku worked.

Another problem that I encountered was a memory leak caused by not disconnecting the socket after rerendering, I managed to fix that by adding a `socket.disconnect()` call as a cleanup function in the `useEffect` hook.

## TO-DO

~~Fix TypeScript errors in the DeviceList component.~~

~~Add tests.~~
