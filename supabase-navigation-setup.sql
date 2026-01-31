-- Navigation Settings Table for Supabase
-- Run this in Supabase SQL Editor (SQL Editor > New Query)

-- =====================================================
-- STEP 1: Create Navigation Items Table
-- =====================================================

CREATE TABLE IF NOT EXISTS navigation_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  label TEXT NOT NULL,
  href TEXT NOT NULL,
  order_index INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  is_button BOOLEAN DEFAULT false,
  open_in_new_tab BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- STEP 2: Create Site Branding Table
-- =====================================================

CREATE TABLE IF NOT EXISTS site_branding (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  logo_text TEXT DEFAULT 'NM',
  site_name TEXT DEFAULT 'NEAZ MORSHED',
  tagline TEXT DEFAULT 'Top Rated Pro',
  logo_image_url TEXT,
  primary_color TEXT DEFAULT '#2ecc71',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =====================================================
-- STEP 3: Insert Default Navigation Items
-- =====================================================

INSERT INTO navigation_items (label, href, order_index, is_visible, is_button)
VALUES
  ('Home', '/', 1, true, false),
  ('Skills', '/skills', 2, true, false),
  ('Services', '/services', 3, true, false),
  ('Experience', '/experience', 4, true, false),
  ('Reviews', '/reviews', 5, true, false),
  ('Contact', '/contact', 6, true, false),
  ('Resume', '/resume', 7, true, true)
ON CONFLICT DO NOTHING;

-- =====================================================
-- STEP 4: Insert Default Site Branding
-- =====================================================

INSERT INTO site_branding (logo_text, site_name, tagline, primary_color)
VALUES ('NM', 'NEAZ MORSHED', 'Top Rated Pro', '#2ecc71')
ON CONFLICT DO NOTHING;

-- =====================================================
-- STEP 5: Verify the data
-- =====================================================

SELECT 'Navigation Items' as table_name, COUNT(*) as count FROM navigation_items
UNION ALL
SELECT 'Site Branding' as table_name, COUNT(*) as count FROM site_branding;

-- =====================================================
-- USEFUL QUERIES
-- =====================================================

-- Get all visible navigation items ordered
-- SELECT * FROM navigation_items WHERE is_visible = true ORDER BY order_index;

-- Update navigation item visibility
-- UPDATE navigation_items SET is_visible = false WHERE label = 'Skills';

-- Add new navigation item
-- INSERT INTO navigation_items (label, href, order_index, is_visible) VALUES ('Blog', '/blog', 8, true);

-- Update site branding
-- UPDATE site_branding SET tagline = 'Expert Freelancer' WHERE id = (SELECT id FROM site_branding LIMIT 1);
