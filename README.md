# Voquence Landing Page

Pre-launch site for [voquence.com](https://voquence.com).

## Stack
- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- Resend (email audience)
- Deployed on Vercel

## Local Dev
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

## Environment Variables
Copy `.env.example` to `.env.local` and fill in:
- `RESEND_API_KEY` — your Resend API key
- `RESEND_AUDIENCE_ID` — the audience the wishlist signups land in

Without these, signups are logged to the server console but no email is captured.

## Deploy
Push to `main` on GitHub. Vercel auto-deploys.

## Structure
- `src/app/page.tsx` — landing page
- `src/app/api/subscribe/route.ts` — email signup endpoint
- `src/components/VLogo.tsx` — brand mark SVG (same as the desktop app)
- `src/components/EmailSignup.tsx` — wishlist form
