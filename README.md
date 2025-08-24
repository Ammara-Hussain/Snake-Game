# 🐍 Snake Game (Vanilla JavaScript)

A modern implementation of the classic Snake Game built using **HTML, CSS, and JavaScript**, with mobile-friendly on-screen controls.  
This project demonstrates core game development concepts (collision detection, grid rendering, and event handling) while maintaining clean and responsive UI.

---
## Live Demo:  https://ammara-hussain.github.io/Snake-Game/


## 🚀 Features
- 🎮 **Classic Gameplay** – Eat the food to grow longer.
- 📱 **Mobile Support** – On-screen arrow keys for touch devices.
- 🔊 **Sound Effects** – Game over, fruit eaten, and key press sounds.
- 🧮 **Score Tracking** – Score updates live; performance message shown when the game ends.
- 💻 **Responsive Design** – Works seamlessly across desktop and mobile devices.
- 🔄 **Reset Option** – Restart the game instantly.

---

## 📸 Screenshots


---


https://github.com/user-attachments/assets/4181844c-1c21-4e50-aa7d-a75d73bbfdba


## 🛠️ Tech Stack
- **HTML5** – Structure
- **CSS3** – Responsive styling with Flexbox & Grid
- **JavaScript (ES6)** – Game logic & interactivity
- **Font Awesome** – Arrow icons for on-screen controls

---

## 🧩 How It Works
- The **board** is a 14×14 grid rendered dynamically.
- The **snake** is represented by an array of `[x,y]` coordinates.
- On each frame:
  - Snake moves in the chosen direction.
  - Snake grows when it eats food.
  - Game ends if it collides with walls or itself.
- Scores update in real-time and a **custom message** pops up based on performance.

---

## 📱 Mobile Controls
On touch devices, tap the **on-screen arrow buttons** to control the snake.  
These simulate real keyboard arrow presses using:

```js
key.addEventListener("click", () => moveSnake({ key: key.dataset.key }));
🎯 Learning Highlights
This project showcases:

DOM manipulation & event handling

Game loop using setInterval

Collision detection

Responsive design principles

Clean code structure with modular functions

🕹️ Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/snake-game.git
cd snake-game
2. Open in Browser
Simply open index.html in your favorite browser.

🔮 Future Improvements
✅ High score leaderboard

✅ Pause / Resume functionality

✅ Difficulty levels (speed increase)

✅ Theme customization (colors, snake skins)

👩‍💻 Author
Ammara Hussain
📧 ammarahussain2024@gmail.com

⭐ If you like this project, consider giving it a star on GitHub!
