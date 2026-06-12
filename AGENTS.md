# GMetrix Student Portal (clone static) – ghid pentru AI

Proiect HTML/CSS/JS static care reproduce interfața GMetrix Student (dashboard + curs Python + player LearnKey). **Nu există backend**; progresul se salvează în `localStorage`.

## Structură fișiere

| Fișier | Rol |
|--------|-----|
| `index.html` | Dashboard Home (fără Redeem Code, Portfolio, Help, Sign Out, Download SMS) |
| `python.html` | Lista curs Python: Course, Practice Exams, Study Guide (fără coloane Passed/dată) |
| `python-glossary.html` | Player LearnKey: sidebar domenii + zona principală |
| `css/styles.css` | Tema dashboard |
| `css/course.css` | Pagina listă curs |
| `css/learn.css` | Player LearnKey |
| `js/app.js` | Dark mode toggle (dashboard + course) |
| `js/learn.js` | Navigare activități, progres, ecrane |
| `js/learn-data.js` | Playlist-uri video per domeniu (`GMETRIX_VIDEO_PLAYLISTS`) |

## Flux utilizator

1. `index.html` → click Python / Resume → `python.html`
2. `python.html` → Resume → `python-glossary.html`
3. În glossary: sidebar stânga = activități; dreapta = conținut

## Reguli UI – iconițe și puncte (IMPORTANT)

- **Implicit:** toate iconițele din sidebar și bulinele de la „Domain” sunt **gri** (`#7a828c` / border gri).
- **După completare:** adaugă clasa `is-complete` pe link-ul activității → iconița devine **verde** (`#5cb87a`).
- **Domeniu complet:** când **toate** activitățile din acel domeniu au `is-complete`, elementul `<details class="learn-domain">` primește `is-domain-complete` → bulina devine verde.
- **Fără subliniere** pe link-uri: `text-decoration: none` pe `.learn-nav__item` și `.learn-nav__sub`.

### API JavaScript (`window.GmetrixLearn`)

```javascript
// După ce utilizatorul termină un test/activitate:
GmetrixLearn.markComplete("d3-pre-assessment");

// Deschide o activitate programatic:
GmetrixLearn.openActivity("d5-pre-assessment", "pre-assessment");

// ID-uri activități domeniu:
// d{1-6}-pre-assessment | videos | fill-blanks | workbook | project-files | practical | post-assessment
// Domain 1: practical-1, practical-2 (în loc de un singur practical)

// Top-level:
// glossary | workbook | support-files
```

Progres salvat în `localStorage` cheia `gmetrix-python-v2-progress` ca `{ "completed": { "d1-pre-assessment": true, ... } }`.

## Tipuri de ecran (zona dreaptă)

| `data-activity-type` | View | Element |
|----------------------|------|---------|
| `glossary` | Glossary (flash cards, tabel) | `#viewGlossary` |
| `start-test` | Mesaj + **Start Test** | `#viewStartTest` |
| `videos` | Player stânga + playlist dreapta | `#viewVideos` |
| `placeholder` | Workbook, Project Files, etc. | `#viewPlaceholder` |

### Activități cu **Start Test** (`type: start-test`)

Aceeași interfață, `activity-id` diferit:

- `d{N}-pre-assessment`
- `d{N}-fill-blanks`
- `d{N}-practical` (sau `d1-practical-1`, `d1-practical-2`)
- `d{N}-post-assessment`

Testele se leagă la `#btnStartTest` după `dataset.activityId`.

### Tab **Videos** (`d{N}-videos`)

- Layout: `#courseVideo` + `#videoPlaylist` (secțiuni collapsible, fără subliniere).
- Date în `js/learn-data.js` → `GMETRIX_VIDEO_PLAYLISTS["d1-videos"]` etc.
- Fiecare item: `{ segmentId, title, src }` — pune URL în `src` când îl ai.
- API: `GmetrixLearn.setVideoSrc("d1-v-s0-i0", "https://...")`
- **Bifă verde** lângă segment: clasă `is-watched` pe `.video-segment` — ascunsă implicit (`opacity: 0`). Activare viitoare: `GmetrixLearn.markSegmentWatched(segmentId)` după `video.ended`.
- La click pe segment se schimbă sursa video (sau placeholder play dacă `src` gol).

## Adăugare test nou (pentru AI viitor)

1. Obține `activity-id` (ex. `d2-pre-assessment`).
2. Creează `tests/d2-pre-assessment.html` (sau modul JS) cu întrebări.
3. În `learn.js`, la click pe `#btnStartTest`, încarcă testul după `dataset.activityId` (în loc de `alert`).
4. La finalizare test: `GmetrixLearn.markComplete(activityId)` și eventual `openActivity` înapoi sau ecran rezultat.

## Liste domenii (`js/learn.js` → `DOMAINS`)

Fiecare domeniu are 7 sub-activități generate de `activitiesForDomain()`. Titlurile video diferă per domeniu. Utilizatorul poate furniza conținut suplimentar per activitate – până atunci rămân `placeholder`.

## Dashboard – ce lipsește intenționat

Sidebar dashboard: **nu** include Redeem Code, bulb Portfolio, Help, Sign Out, Download SMS. Quick access: doar Profile și Transcript.

## Convenții

- Limba UI: mix română (mesaje temporare) / engleză (etichete GMetrix originale).
- Font: Open Sans + Material Icons Outlined.
- Layout desktop: `100vh`, fără scroll pe dashboard; learn player permite scroll în meniu/tabel.

## Ce nu face proiectul acum

- Autentificare, API GMetrix real
- Teste interactive (doar ecran Start Test pentru pre-assessment)
- Marcare automată completare (doar manual via `GmetrixLearn.markComplete` sau viitoare pagini test)
