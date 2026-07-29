# 🎯 IELTS Spelling Master

<p align="center">
  <a href="https://vinayarva.github.io/IELTS-Spelling-Master/">
    <img src="https://img.shields.io/badge/🚀%20Try%20Live%20Demo-IELTS%20Spelling%20Master-blue?style=for-the-badge" alt="Live">
  </a>
</p>

**IELTS Spelling Master** is a lightning-fast, open-source audio dictation web application built specifically to help IELTS candidates eliminate careless spelling errors in the IELTS Listening test.

👉 **Live Demo:** https://vinayarva.github.io/IELTS-Spelling-Master/

It simulates real test conditions by speaking target words aloud, records your spelling, and provides surgical letter-by-letter breakdown analysis to help you master common traps (like double consonants and silent letters).

---

## ✨ Key Features

* **🔊 Audio Dictation Drill:** Uses the browser's built-in speech synthesis (`en-GB`) to mimic authentic IELTS listening accents and pacing.
* **🔍 Surgical Letter-by-Letter Feedback:** Instant comparison engine that highlights exact mistakes—showing matched letters, missed characters, and incorrect letter swaps.
* **📝 Combined & Detailed Views:** View your spelling as a single string alongside individual letter-by-letter comparison boxes to build visual memory.
* **🛡️ The Mistake Vault (Spaced Repetition):** Misspelled words automatically land in your Vault. To clear a word, you must spell it correctly **3 times in a row**. You can also manually add offline words.
* **⏱️ Dual Modes:**
  * **Practice Mode:** Untimed, with instant feedback after every word for deep learning.
  * **Mock Exam Mode:** Strict per-word countdown timers with no feedback until the end to simulate test pressure.
* **⌨️ Keyboard-First Workflow:** Fully optimized for speed. Press `Enter` to submit and `Shift + Enter` to skip or move to the next word without ever touching your mouse.
* **🔒 100% Private & Local:** Runs entirely in your computer's browser. All stats, streaks, and mistake vaults are securely saved locally using your browser's `localStorage`—just save or bookmark the page and you're good to go!

---

## 🛠️ Tech Stack

* **HTML5** — Core application layout and semantic structure.
* **CSS3** — Modern UI styling utilizing custom properties (variables), responsive flex/grid layouts, custom scrollbars, and keyframe animations.
* **Vanilla JavaScript (ES6+)** — Client-side state management, LCS-based diff comparison algorithm, speech synthesis integration, and local storage management.

---

## 📂 Project Structure

```text
ielts-spelling-master/
│
├── index.html       # Main HTML shell & document structure
├── styles.css       # Complete application styling and animations
├── words.js         # Curated IELTS trap-word database (Easy, Medium, Hard)
└── app.js           # Core logic, audio engine, diff algorithm, and state handler

📝 License
This project is open-source and available under the MIT License. Feel free to use, modify, and share it with fellow IELTS aspirants.
