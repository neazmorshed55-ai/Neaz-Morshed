# Neaz Md. Morshed Portfolio

Professional Virtual Assistant & Outsourcing Expert Portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Supabase Database Setup

To enable the contact form on your live site, you must create the necessary table in your Supabase project:

1.  Log in to your [Supabase Dashboard](https://app.supabase.com/).
2.  Select your project (e.g., `neaz-morshed`).
3.  In the left-hand sidebar, click on **SQL Editor**.
4.  Click **New Query**.
5.  Open the `supabase_setup.sql` file located in the root of this repository.
6.  Copy the entire content of that file.
7.  Paste it into the Supabase SQL Editor.
8.  Click **Run**.

This will automatically:
- Create the `contacts` table.
- Configure Row Level Security (RLS) to allow public form submissions.
- Restrict viewing of messages to authenticated administrative users.

## Environment Variables

Ensure the following variables are set in your Vercel project settings:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Database/Auth:** Supabase
- **Icons:** Lucide React
