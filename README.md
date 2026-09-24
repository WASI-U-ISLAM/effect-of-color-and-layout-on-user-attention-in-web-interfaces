# Interactive Web Prototype: HCI Thesis Experiment

**Topic:** Effect of Color and Layout on User Attention in Web Interfaces  
**Subject Domain:** Human-Computer Interaction (HCI) & Software Systems 

---

## 📌 Project Description

This repository contains the interactive web prototype developed for an empirical research experiment in Human-Computer Interaction (HCI). The experiment evaluates the effect of **layout structure and color contrast levels** on user visual attention, task completion speed, and subjective aesthetic perception.

The prototype presents an educational landing page with identical text content across four controlled conditions.

---

## 🔬 Experiment Design

The experiment manipulates two primary independent variables:

| Condition | Layout Design | Color Contrast Level | Target Measurement |
| :--- | :--- | :--- | :--- |
| **Template A** | Traditional F-Grid Design | High Contrast Level (WCAG AAA Compliant) | Usability benchmark and visual saliency |
| **Template B** | Traditional F-Grid Design | Low Contrast Level (Monochromatic Color Palette) | Influence of low contrast level on traditional reading flow |
| **Template C** | Non-conventional Asymmetrical Layout | High Contrast Level (WCAG AAA Compliant) | Influence of non-conventional layout with strong visual cues |
| **Template D** | Non-conventional Asymmetrical Layout | Low Contrast Level (Monochromatic Color Palette) | Compound effect of cognitive friction and low contrast |

---

## ⚡ Prototype Features

* **Template Switching:** Switch between Templates A, B, C, and D using the top control buttons to evaluate each condition.
* **Reaction Time Tracker:** Built-in timer that calculates reaction time (in seconds) when the user clicks the "Enroll Now" Call-To-Action (CTA) button.
* **Lightweight Implementation:** Built purely with standard HTML5, CSS3, and JavaScript with zero external libraries or dependencies.

---

## 📂 Directory Structure

```text
├── index.html        # Root redirect file for GitHub Pages deployment
├── VIEW/
│   └── index.html    # Main experimental interface
├── CSS/
│   └── style.css     # Design tokens, layouts, and color contrast schemes
├── JS/
│   └── app.js        # Condition states, template switcher, and reaction timer
└── README.md         # Academic documentation
```

---

## 🎓 Academic Affiliation

**Faculty of Science and Technology (FST)** 
**American International University-Bangladesh (AIUB)**  
**Program:** Undergraduate Thesis [BSCS] [Group 42]