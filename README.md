# Blockchain Wallet Chrome Extension

This Chrome extension provides a user-friendly interface for interacting with the Ethereum blockchain. It allows users to create accounts, log in, send and receive Ether, and more, all within the convenience of a browser extension.
Checkout this video I explained all the steps.
[Build Your Own Crypto Wallet Extension with React & Web3]([https://www.youtube.com/watch?v=VIDEO_ID](https://youtu.be/ZrfjZb9bLp4))
## Features

- **Create Account**: Users can create a new Ethereum account directly from the extension.
- **Login**: Existing users can log in to their accounts to manage their assets.
- **Send and Receive Ether**: Users can easily send and receive Ether to and from any Ethereum address.

## Technology Stack

- **React**: A popular JavaScript library for building user interfaces, used for the extension's UI components.
- **TypeScript**: A statically typed superset of JavaScript, enhancing code quality and maintainability.
- **Web3.js**: A collection of libraries that allow you to interact with a local or remote Ethereum node using HTTP, IPC, or WebSocket.
- **Webpack**: Leverage Webpack for bundling and optimizing your extension.

# Loading the Extension into Chrome

To load your extension into Chrome for testing or development purposes, follow these steps:

1. Open Chrome browser.
2. Navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on the "Load unpacked" button.
5. Navigate to your project's `dist` folder.
6. Select the folder to load your extension.

Your extension should now be loaded into Chrome and ready for testing or development.

# Development and Build

During development and for building your extension, you can use the following npm scripts:

## Development

For development, you can use the `npm run watch` command to start a development server with hot-reloading. This allows you to instantly see changes as you develop your extension. You may need to reload the extension on chrome to see changes.

```bash
npm run watch
```
