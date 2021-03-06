# Amazon Chrome Extension

![status: completed](https://img.shields.io/badge/status-completed-success)

## About this Project

A Chrome Extension that runs on Amazon search results pages. When you press the extension button, it hides all products with less than 1000 ratings.

![Screenshot of the app](./screenshot.png)

### Built with

- Chrome Extensions
- Webpack
- Babel

## Getting Started

### Prerequisites

- Node

### Installation

1. Install the dependencies.

```
npm i
```

2. Run the build tool.

```
npm run dev
```

3. Run through deployment (local)

4. Press the refresh button on the extension in Chrome after every change.

## Deployment

1. Open Chrome to "chrome://extensions/".

2. Enable developer mode in the top right.

3. Click "load unpacked" in the top left.

4. Select the dist folder in this repo.

## Usage

1. Search for something on Amazon.

2. Press the extension icon in the top left.

3. Enter a minimum number of ratings and press filter.

The search results on this page will now only include products with more than e.g. 1000 ratings.

## Roadmap

- [ ] Regex title matcher

## Release History

- v0.2.0
  - Added Vue
  - Popup
  - Icon
- v0.1.0
  - Initial design
