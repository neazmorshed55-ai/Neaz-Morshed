-- Create contacts table for portfolio inquiries
CREATE TABLE IF NOT EXISTS contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new'
);

-- Enable Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Policy: Allow any anonymous user to insert a contact message (Public form submission)
CREATE POLICY "Allow public insert" ON contacts
  FOR INSERT
  WITH CHECK (true);

-- Policy: Only authenticated admins can view the contact messages
CREATE POLICY "Allow authenticated select" ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Optional: Policy to allow authenticated admins to update/delete if needed
CREATE POLICY "Allow authenticated update" ON contacts
  FOR UPDATE
  TO authenticated
  USING (true);
