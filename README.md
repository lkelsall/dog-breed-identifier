# DogTags

A mobile app, written in React Native with Expo, which uses Tensorflow.js machine learning to classify photos of dogs by breed.

For more information, and a demo, watch the presentation on YouTube [here](https://www.youtube.com/watch?v=rLSDtEcvVMk).

## App Screenshots

<img src="https://github.com/lkelsall/dog-breed-identifier/blob/main/screenshots/step-by-step.png?raw=true" alt="app screenshots" height="400">

## How it Works

This app uses an Express API which has its own GitHub repo [here](https://github.com/PaulOR26/dog-breed-api). The image classification itself takes place on this backend.

The classifier dataset used in the above API was created using code which can be found [here](https://github.com/lkelsall/tfjs-classifier-creator). The raw image data we used to train the classifier is from [this dataset](http://vision.stanford.edu/aditya86/ImageNetDogs/).

## Running Locally

Instructions to get this project running locally on your phone (in development mode) are as follows:
1. Install Node.js v16 or above (run `node --version` to check the version you currently have installed)
2. Install Expo v4.8 or above using `npm install --global expo-cli`
3. Clone this repo, and run `npm install` to install dependencies (react-navigation, expo-camera, etc)
4. Download Expo Go from your phone's App Store
5. Run `expo start`, and scan the QR code in order to launch the app in development mode
