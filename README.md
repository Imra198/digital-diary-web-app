# digital-diary-web-app
A multi-page reflection journal built using pure vanilla front-end technologies. This application allows users to capture their daily thoughts, track submission timestamps, view their most recent notes in a responsive dashboard layout, and manage their archive within a unified data vault.

## Features
 Divided clean interfaces across dedicated index.html, new-entry.html, and vault.html views.
 Uses JavaScript to map and render stored client state into the DOM asynchronously.
Retains user data directly inside the browser sandbox using `localStorage` API serialization—no database backend required.
The home dashboard utilizes `Array.prototype.slice()` and `unshift()` to ensure the top 5 newest reflections are front and center.
Review an infinite history stack via a structural single-column layout, featuring localized timestamps and single-entry data deletion via structural event delegation.

## Technologies used 
HTML5 (Semantic Layout)
CSS3 (Flexbox, CSS Grid Layout, Responsive design variables)
Vanilla JavaScript (ES6+, DOM Manipulation, LocalStorage web API, Event Delegation)

## 📂 Project Architecture
├── index.html        
├── new-entry.html  
├── vault.html          
├── style.css           
├── index.js            
├── new-entry.js
└── vault.js

## How to Run Locally
Clone the repository:
Navigate into the directory:
Launch the app:
Simply double-click index.html to open it locally directly within your browser















