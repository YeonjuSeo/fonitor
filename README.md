## 🎥 Live Service

[https://fonitor.vercel.app/](https://fonitor.vercel.app/)

## **✈️ Tech stacks**

### **Core**

- React 18
- JavaScript
- Recoil
- React Router

### Data Fetching

- Axios for using RESTful API

### **Styling**

- Tailwind CSS

### **Data Visualization**

- React Chart
- Own created Design System

### **CD**

- Vercel

## **🛰 Features**

### Identify victims - Machine Learning

![image](https://github.com/YeonjuSeo/fonitor/assets/56028436/d0eb2be8-4bb1-4ffe-b08b-c2ad2be4e575)

When initiating a withdrawal, webcam recording begins.
To perform suspicion detection of potential voice phishing victims, the following actions are taken:

Detects your mobile phone to determine if you are on a call using **Object Detection**.
Utilizes **Emotion Recognition** to measure your current emotional state. If certain emotions such as anxiety or worry exceed a certain threshold, it identifies that you are in an uncomfortable situation. 

The results of emotion analysis can be viewed on the administrator screen.

### Warning
![image](https://github.com/YeonjuSeo/fonitor/assets/56028436/dd90a84e-c4f3-442a-a001-6fa5b5bbdd98)
![image](https://github.com/YeonjuSeo/fonitor/assets/56028436/0add25b3-f147-43b6-8b09-681278d71d16)

![image](https://github.com/YeonjuSeo/fonitor/assets/56028436/9c71f648-cbf6-431e-879d-b72097663ea6)


1. High-value withdrawals (over 500,000 KRW)
2. Mobile phone usage
3. Feeling anxious

If these three conditions are met, the warning message above will be displayed just before the withdrawal. Users must read the content and click the button to proceed to the next step."

## 🏎 Getting Started

### Development

1. Clone this repository

    ```jsx
    $ git clone https://github.com/YeonjuSeo/fonitor.git
    ```

2. Install node packages with npm

    ```jsx
    $ npm install
    ```

3. Start developing

    ```jsx
    $ npm run dev
    ```

## 🐛 Bug Report

[Issues](https://github.com/YeonjuSeo/fonitor/issues)

## 💻 Contribution Guide

### Pull Request

### Forked strategy

```jsx
# Fork this repository to yours.
$ git clone https://github.com/kko-bugi/pure-market-client.git

# Install npm packages and start this project.
$ npm install
$ npm run dev

# (Working on your own..!)

# After that
$ git commit [...]
$ git push origin [YOUR_REPOSITORY]

# Enroll pull-request!
```

### Commit message rules

Consider starting the commit message:
 
- `ADD` : prefix
  - when creating new feature.
- `UPDATE` : prefix
  - when updating feature.
- `FIX` : prefix
  - when fixing bug
- `STYLE` : prefix
  - CSS or design-related additions/modifications
- `REMOVE` : prefix
  - deleting files

## LICENSE

Not yet decided.
