# Movie Tracker

Track movies as **watched** or **unwatched** using a simple Django app.

---

## ✅ Features

- Homepage lists movies with title, year, and rating
- Users can mark movies as **watched/unwatched** using checkboxes
- Uses Django templates and static CSS files
- Demonstrates Git workflow with branches and pull requests

---

## ⚙️ Installation

1. **Clone the repository**  
git clone https://github.com/yourusername/movie-portal.git
cd movie-portal

2. **Create virtual environment**
python -m venv venv

3. **Activate virtual environment**

Windows (PowerShell):
.\venv\Scripts\Activate.ps1

Linux/Mac:
source venv/bin/activate

4. **Install Django**
pip install django

5. **Apply migrations**
python manage.py migrate

6. **Run the server**
python manage.py runserver
Open browser at http://127.0.0.1:8000/ to see the movie list

📁 Project Structure
arduino
Copy code
movie-portal/
│   manage.py
│   README.md
│
├── movie_portal/
│   │   settings.py
│   │   urls.py
│
├── movies/
│   │   views.py
│   │   urls.py
│   │   templates/
│   │       movies/home.html
│   │   static/
│   │       movies/style.css
│
├── venv/  ← virtual environment (ignored by Git)
📝 Notes
The watched/unwatched toggle is front-end only (JavaScript + CSS).

venv/ is ignored by Git.

All Git commits and pull requests follow the assignment workflow.