# Kiso 

Kiso is a focused technical learning platform with two paths:

- Cloud: a structured course that starts from first principles and builds toward modern infrastructure.
- Interview DSA: company-specific reported interview questions backed by an evidence dataset.

The current interview dataset contains 16 companies, 19 independent reports, 72 question-report rows, and 70 unique canonical questions. The interface starts at the company level and drills down into reported questions.

## Development

```bash
npm install
npm run dev
```

## Company logos

Place the manually downloaded Brandfetch SVG assets in `public/company-logos/` using the filenames listed in `public/company-logos/README.md`.

The logos are stored locally and rendered by the app; there is no runtime dependency on a Brandfetch API request.
