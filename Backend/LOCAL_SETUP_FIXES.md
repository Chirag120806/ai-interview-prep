# Backend local setup and fixes

1. Use Node.js 20.16+ (pdf-parse 2.4.5 requires Node >=20.16 or >=22.3).
2. Copy `.env.example` to `.env` and set `MONGO_URI`, `JWT_SECRET`, `GOOGLE_GENAI_API_KEY`, and `CLIENT_URL`.
3. Install dependencies in this folder: `npm install`.
4. Start with `npm run dev`.

Changes in this patch:
- Resume upload is optional when a self-description is supplied (matches the frontend's UI).
- Uses pdf-parse v2's `PDFParse` class and destroys the parser after reading.
- Adds explicit startup checks for JWT and Gemini environment variables.
- Ensures Puppeteer browser cleanup runs even if PDF generation fails.
- Omits the resume form field when no file is selected.

If errors persist, share the complete terminal stack trace and Node version (`node -v`).
