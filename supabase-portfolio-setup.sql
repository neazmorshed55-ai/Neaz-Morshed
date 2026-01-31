-- Supabase Portfolio Items Table Setup
-- Run this in Supabase SQL Editor (SQL Editor > New Query)

-- =====================================================
-- STEP 1: Create services table (if not exists)
-- =====================================================

CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT DEFAULT 'Briefcase',
  cover_image TEXT,
  is_active BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for services
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Drop existing policies for services
DROP POLICY IF EXISTS "Public read access for services" ON services;
DROP POLICY IF EXISTS "Allow insert for services" ON services;
DROP POLICY IF EXISTS "Allow update for services" ON services;
DROP POLICY IF EXISTS "Allow delete for services" ON services;

-- Create policies for services
CREATE POLICY "Public read access for services" ON services FOR SELECT USING (true);
CREATE POLICY "Allow insert for services" ON services FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow update for services" ON services FOR UPDATE USING (true);
CREATE POLICY "Allow delete for services" ON services FOR DELETE USING (true);

-- =====================================================
-- STEP 2: Create portfolio_items table
-- =====================================================

CREATE TABLE IF NOT EXISTS portfolio_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service_id UUID REFERENCES services(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  image_url TEXT,
  video_url TEXT,
  project_url TEXT,
  client_name TEXT,
  completion_date TEXT,
  duration TEXT,
  tools_used TEXT[] DEFAULT '{}',
  tags TEXT[] DEFAULT '{}',
  is_featured BOOLEAN DEFAULT false,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- STEP 3: Create RLS Policies for portfolio_items
-- =====================================================

-- Enable Row Level Security
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Public read access for portfolio_items" ON portfolio_items;
DROP POLICY IF EXISTS "Allow insert for portfolio_items" ON portfolio_items;
DROP POLICY IF EXISTS "Allow update for portfolio_items" ON portfolio_items;
DROP POLICY IF EXISTS "Allow delete for portfolio_items" ON portfolio_items;

-- Allow anyone to read portfolio items (for public display)
CREATE POLICY "Public read access for portfolio_items"
ON portfolio_items FOR SELECT
USING (true);

-- Allow anyone to insert portfolio items (for admin panel)
CREATE POLICY "Allow insert for portfolio_items"
ON portfolio_items FOR INSERT
WITH CHECK (true);

-- Allow anyone to update portfolio items (for admin panel)
CREATE POLICY "Allow update for portfolio_items"
ON portfolio_items FOR UPDATE
USING (true);

-- Allow anyone to delete portfolio items (for admin panel)
CREATE POLICY "Allow delete for portfolio_items"
ON portfolio_items FOR DELETE
USING (true);

-- =====================================================
-- STEP 4: Create updated_at trigger
-- =====================================================

-- Create function to update timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop trigger if exists and create new
DROP TRIGGER IF EXISTS update_portfolio_items_updated_at ON portfolio_items;
CREATE TRIGGER update_portfolio_items_updated_at
  BEFORE UPDATE ON portfolio_items
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- VERIFICATION: Check if table was created
-- =====================================================
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'portfolio_items';
