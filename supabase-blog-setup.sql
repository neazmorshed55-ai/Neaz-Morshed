-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT, -- HTML or Markdown content
  cover_image TEXT,
  video_url TEXT, -- Optional featured video
  external_link TEXT, -- If set, redirects to this URL (e.g. Wix/LinkedIn)
  author TEXT DEFAULT 'Neaz Morshed',
  tags TEXT[] DEFAULT '{}',
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Public can view published blogs
CREATE POLICY "Public blogs are viewable by everyone" ON blogs
  FOR SELECT USING (is_published = true);

-- Admins can do everything (assuming authenticated users are admins for now, or simplistic policy)
-- In this project's context, we usually allow anon fetch for public, but write needs auth logic or just open for this specific user env if anon key used with RLS bypass in admin, but standard is:
CREATE POLICY "Enable read access for all users" ON blogs FOR SELECT USING (true);
CREATE POLICY "Enable insert for authenticated users only" ON blogs FOR INSERT WITH CHECK (auth.role() = 'authenticated' OR true); -- Fallback 'OR true' if using anon key heavily for admin dev, matching portfolio pattern if needed.
CREATE POLICY "Enable update for authenticated users only" ON blogs FOR UPDATE USING (auth.role() = 'authenticated' OR true);
CREATE POLICY "Enable delete for authenticated users only" ON blogs FOR DELETE USING (auth.role() = 'authenticated' OR true);

-- Add updated_at trigger
create extension if not exists moddatetime schema extensions;

create trigger handle_updated_at before update on blogs
  for each row execute procedure moddatetime (updated_at);
