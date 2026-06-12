# GMetrix Student Dashboard (recreare UI)

Interfață statică a dashboard-ului GMetrix Student, fără: Redeem Code, bulb Portfolio, Help, Sign Out, Download SMS.

## Deschidere

Deschide `index.html` direct în browser (dublu-click) sau pornește un server local:

```bash
# Python
python -m http.server 8080

# sau deschide index.html în Chrome/Edge
```

Apoi accesează `http://localhost:8080`.

## Structură

- `index.html` – layout sidebar + conținut principal
- `css/styles.css` – stiluri dark theme 1:1
- `js/app.js` – toggle Dark Mode
- `assets/reference.png` – captură originală pentru referință

## Ce include dashboard-ul

**Sidebar:** Scheau Denis, Home, Transcript, Profile, Language, Dark Mode, logo GMetrix Student.

**Conținut:** banner hero, Resume Course (Python v2), quick access (Profile, Transcript), cursuri (Databases, Networking, Python).
