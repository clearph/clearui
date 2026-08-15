Dynamic greeting — Python basics Write a function that accepts a name and hour, then returns “Good morning, Alana,” “Good afternoon,” or “Good evening.”
Practice: variables, functions, if/elif/else, f-strings.
Briefing-card generator — Lists and dictionaries Represent weather, appointments, and music as dictionaries. Loop through them and generate HTML cards.
items = [
    {"title": "Weather", "detail": "72°F — Cloudy"},
    {"title": "Design Review", "detail": "10:00–11:00 AM"},
]

def make_card(item):
    return f"""
    <article class="card">
        <h2>{item["title"]}</h2>
        <p>{item["detail"]}</p>
    </article>
    """

print("".join(make_card(item) for item in items))

Challenge: add an icon and category to every item.
Form processor — User input and validation Create an HTML form for adding an appointment. Write Python that:
Rejects an empty title.
Checks that the time resembles 10:30.
Returns clear error messages.
Creates an appointment dictionary when valid.
Practice: strings, conditions, error handling, separating logic into functions.
Flask app — Connect HTML to Python Install Flask and build:
GET / — renders the briefing page.
POST /appointments — receives the HTML form.
GET /api/appointments — returns appointments as JSON.
Starter:
from flask import Flask, jsonify, render_template, request

app = Flask(__name__)
appointments = []

@app.get("/")
def home():
    return render_template("index.html", appointments=appointments)

@app.post("/appointments")
def add_appointment():
    title = request.form.get("title", "").strip()
    if not title:
        return "Title is required", 400

    appointments.append({"title": title})
    return {"saved": True}, 201

@app.get("/api/appointments")
def appointment_api():
    return jsonify(appointments)

app.run(debug=True)

Persistence upgrade — SQLite Replace the temporary list with a SQLite table containing id, title, start_time, and completed.
Add features to:
Save and retrieve appointments.
Mark one complete.
Delete one by ID.
Order them by start time.
Final practical challenge Build a usable Morning Brief dashboard with your own HTML/CSS frontend and Python backend. It should show today’s date, appointments, weather placeholder data, and a form for adding events. Stretch goal: fetch real weather from an API and store its key in an environment variable.
Build each exercise onto the previous one. That gives you one evolving project instead of six disconnected tutorials.
