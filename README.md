# Chopda Hospital Website

A modern, responsive, and authority-driven hospital website built with Flask (Python), HTML5, CSS3, and JavaScript. The platform highlights multispeciality services, expert doctors, hospital infrastructure, and patient testimonials while offering an interactive appointment booking system.

## 🌟 Key Features

* **Modern & Clinical UI:** Clean, responsive design featuring a professional "Medical Blue" and "Soft Green" color palette.
* **Interactive Services & Treatments:** Detailed clinical services section with pop-up modals outlining service descriptions and quick contact actions (Book, Call, WhatsApp).
* **Expert Specialists Profiles:** Dedicated "Our Doctors" section showcasing specialist credentials and experience.
* **Hospital Infrastructure:** Highlighted world-class facilities including NICU, Operation Theatres, and 24/7 Emergency Services.
* **Emergency Action Banner:** A sticky 24/7 emergency contact banner for instant access on mobile devices.
* **Dynamic Patient Testimonials:** Smooth auto-scrolling carousel to display patient reviews and build trust.
* **Appointment Booking System:** Front-end form integrated with immediate UI feedback on submission, alongside an embedded Google Map for easy navigation.

## 🛠️ Technology Stack

* **Backend:** Python, Flask (Web Framework)
* **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (Vanilla)
* **Icons & Typography:** FontAwesome, Google Fonts (Inter & Playfair Display)

## 📁 Project Structure

```text
Chopda_hospitals/
│
├── app.py                  # Main Flask application runner
├── .gitignore              # Git ignore configurations for Python/Flask
├── README.md               # Project documentation
│
└── app/
    ├── static/             # Static assets (CSS, JS, Images)
    │   ├── css/
    │   │   └── style.css   # Main stylesheet
    │   ├── js/
    │   │   └── main.js     # Frontend interactive logic
    │   └── img/            # Images and icons
    │
    └── templates/          # HTML templates
        └── index.html      # Main landing single-page template
```

## 🚀 Getting Started

### Prerequisites
* Python 3.8+ installed on your local machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Chopda_hospitals
   ```

2. **Create a virtual environment (Recommended):**
   ```bash
   python -m venv venv
   
   # Activate on Windows:
   venv\Scripts\activate
   # Activate on macOS/Linux:
   source venv/bin/activate
   ```

3. **Install Dependencies:**
   *(If you have a requirements.txt, run `pip install -r requirements.txt`. For this basic setup, you just need Flask)*
   ```bash
   pip install Flask
   ```

4. **Run the Application:**
   ```bash
   python app.py
   ```
   The development server will start at `http://127.0.0.1:5000/`.

## 🤝 Contribution

Contributions, issues, and feature requests are welcome!

## 📜 License

© 2026 Chopda Hospital, Nashik. All Rights Reserved.
