# dochakWebsite

This is the official website for **도착 (Dochak)**.

## Getting Started

Follow the steps below to clone, install, and run the website locally.

### 1. Clone the Repository

```bash
git clone https://github.com/MSminseo/dochakWebsite.git
cd dochakWebsite
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build the Website

```bash
npm run build
```

### 4. Run the Website Locally

```bash
npm start
```

## Editing Text Content

To edit the text content of the website:

1. Navigate to the `src/locales` directory.
2. Open either `en.json` (English) or `ko.json` (Korean).
3. **Only edit the string values.** Do not modify the JSON structure or keys.

### Example

```json
{
  "home.title": "Welcome to Dochak",
  "home.subtitle": "Mobility for the future"
}
```

✅ **Correct**:
```json
"home.title": "Hello from Dochak"
```

❌ **Incorrect** (Don't remove keys or change the structure):
```json
"welcome": "Hello from Dochak"
```

---

Feel free to open an issue or pull request if you have questions or suggestions.

## Next step

Purchase the domain of the website. Let me know once purchased, then I will update the domain here.
