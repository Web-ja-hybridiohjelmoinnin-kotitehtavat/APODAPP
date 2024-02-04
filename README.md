# APOD App Readme

## Overview

The APOD (Astronomy Picture of the Day) app is designed to provide users with a daily dose of fascinating astronomy images along with related information. This iOS app is built using Expo Go and features a user-friendly interface for exploring the Astronomy Picture of the Day, browsing through an archive of past pictures, and reading detailed descriptions.

## Features

1. **Astronomy Picture of the Day (APoD):** The app displays the latest astronomy picture along with a brief description. Users can explore and learn about different celestial objects and events.

2. **Archive:** Users have access to an archive of past Astronomy Pictures of the Day, allowing them to revisit their favorite images or catch up on ones they might have missed.

3. **Detailed Descriptions:** Each picture comes with a detailed description that provides context, information, and interesting facts related to the astronomy picture.

4. **Authentication:** The app features authentication functionality powered by Firebase, allowing users to create account, log in and out. Account is needed to use this app.
   
5. **Modal view:** You can inspect pictures in modal view in landscape mode and also portrait mode.
   
6. **Saving images:** You can save images to your phone's memory if you accept permissions to your phone's media library.

## Configuration

Before building and testing the app, you need to configure it with the necessary settings, such as the Firebase API key and APOD API key. Follow the steps below:

### 1. Expo Go Setup

Make sure you have Expo Go installed on your iOS device. If not, you can download it from the [App Store](https://apps.apple.com/us/app/expo-go/id982107779) and create an account.


### 2. Configure the App

Create the .env file to root folder and place the information there which you can find in text file.

### 3. Install Dependencies

In the project root directory, run:

```bash
npm install
```

### 4. Run the App

```bash
npx expo start
```

Scan the QR code with the Expo Go app on your iOS device to run the app.

## Usage

### Authentication:

- Create an account or log in. When you create an account it will automatically log you in. 

### Astronomy Picture of the Day:

- View the latest Astronomy Picture of the Day on the main screen.
- Tap on the image to view it in modal.
- Save images by longpressing the image.

### Archive:

- Access the archive to view past Astronomy Pictures of the Day.
- Choose the desired date from the calendar and press "Render Picture".

### Settings: 

-In the settings, users can view the email address used for logging in. Users can also log out from settings.

### Enjoy Exploring the Cosmos:

- Use the app to learn more about the wonders of the universe and stay updated with daily astronomy images.

Happy exploring the cosmos with the APOD app! 🌌🚀

