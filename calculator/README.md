# Calculator

A clean, modern web calculator built with vanilla HTML, CSS, and JavaScript. It supports basic arithmetic, a live expression preview, and subtle animations for a polished user experience.

![Calculator Preview](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## Features

- **Basic operations** — Addition, subtraction, multiplication, division, and modulo (`%`)
- **Clear & delete** — `AC` resets the calculator; `DEL` removes the last entered character
- **Decimal support** — Enter numbers with decimal points
- **Expression preview** — After pressing `=`, the full expression appears above the result with a smooth fade-in animation
- **Result animation** — The display briefly scales up when a result is calculated
- **Modern UI** — Dark gradient background, glass-style buttons, and Google Sans typography

## Demo

Open `calculator-html.htm` in any modern web browser — no build step or server required.

## Project Structure

```
calculator/
├── calculator-html.htm   # Main HTML markup
├── calculator-css.css    # Styles and animations
├── calculator-js.js      # Calculator logic
└── README.md
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari, etc.)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/calculator.git
   cd calculator
   ```

2. Open the calculator in your browser:

   ```bash
   # Windows
   start calculator-html.htm

   # macOS
   open calculator-html.htm

   # Linux
   xdg-open calculator-html.htm
   ```

   Alternatively, double-click `calculator-html.htm` or drag it into a browser window.

## Usage

| Button | Action |
|--------|--------|
| `0`–`9`, `00`, `.` | Enter digits and decimal point |
| `+`, `-`, `*`, `/`, `%` | Arithmetic operators |
| `=` | Evaluate the expression and show the result |
| `AC` | Clear all input and reset the display |
| `DEL` | Delete the last character |

## Tech Stack

- **HTML5** — Semantic structure and calculator layout
- **CSS3** — Flexbox, gradients, keyframe animations, and custom styling
- **JavaScript (ES6+)** — DOM event handling and expression evaluation

## Screenshots

> Add a screenshot of the calculator here after deploying or capturing locally.

## Future Improvements

- [ ] Keyboard support for number and operator keys
- [ ] Add history of previous calculations
- [ ] Support for parentheses and advanced operations


## Author

**Puneet Yadav**

---

If you find this project useful, consider giving it a ⭐ on GitHub!
