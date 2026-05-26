# EasyIPTV Website - Simple Guide

Welcome to your new website! This guide will help you understand how your site works and how to manage it, even if you aren't a computer expert.

## What is this?
This is the official website for **EasyIPTV**. It is designed to show your customers why they should choose your service, how much it costs, and most importantly, how to set it up on their devices.

---

## Website Sections

### 1. Home Page
*   **Hero Section**: The big welcome area with your main offer.
*   **Pricing**: Where customers choose their subscription (Single vs Multiple connections).
*   **Reviews**: What your customers are saying about you.
*   **FAQ**: Answers to common questions.

### 2. Installation Guides
This is the most important part! It contains step-by-step instructions for:
*   **Fire TV Stick** (with video tutorial)
*   **Android TV & Phones**
*   **Smart TVs** (Samsung/LG)
*   **Apple Devices** (iPhone/iPad/Apple TV)
*   **Windows & Mac Computers**
*   **MAG Box** (Notice about incompatibility)

### 3. Contact Support
A simple page where customers can send you messages if they need help.

---

## How to Manage Your Site

### Updating Prices or Features
If you want to change a price or add a new feature to a plan:
1.  Go to the folder: `components/home/`
2.  Open the file: `home-pricing.tsx`
3.  Look for the lists at the top (like `singlePlans` or `multiplePlans`) and change the text inside the quotes.

### Updating Installation Guides
To change instructions for a specific device:
1.  Go to the folder: `components/installation/`
2.  Open the file for the device you want to change (e.g., `installation-firestick.tsx`).
3.  Edit the text steps as needed.

---

## How to Deploy (Make it Live)
Your site is set up to work with **Vercel**. 

1.  **Save your changes**: Whenever you change a file, save it.
2.  **Push to GitHub**: Use your Git tool to "Commit" and "Push" your changes.
3.  **Automatic Update**: Vercel will see your changes on GitHub and update your website automatically in about 1-2 minutes.

---

## Pro Tips
*   **Images**: Most images used are pulled from a central "CDN" (online storage). If you need to change a screenshot, just update the link in the code.
*   **Icons**: We use "Lucide Icons" for all the little pictures (like the TV or Phone icon). They are easy to swap if you want a different look.

**Need help?** Just ask your developer (me!) or check the code files directly. They are organized to be easy to read!
