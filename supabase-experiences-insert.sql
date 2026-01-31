-- Insert all 29 experiences into Supabase experiences table
-- Run this in Supabase SQL Editor (SQL Editor > New Query)

-- First, let's make sure the table has the right structure
-- If you need to create the table first, uncomment and run this:
/*
CREATE TABLE IF NOT EXISTS experiences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company TEXT NOT NULL,
  position TEXT NOT NULL,
  location TEXT NOT NULL,
  start_date TEXT NOT NULL,
  end_date TEXT NOT NULL,
  description TEXT[] DEFAULT '{}',
  type TEXT NOT NULL CHECK (type IN ('full-time', 'part-time', 'project')),
  skills TEXT[] DEFAULT '{}',
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
*/

-- Clear existing data (optional - uncomment if you want to start fresh)
-- DELETE FROM experiences;

-- =====================================================
-- FULL-TIME EXPERIENCES (13)
-- =====================================================

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Fiverr',
  'Freelance Consultant - Virtual Assistant',
  'Remote',
  'November 2013',
  'Present',
  ARRAY['Developing scalable digital solutions including AI-driven content and web applications.', 'Video editing, rendering, graphic design, eBook formatting, WordPress management.', 'Virtual assistance, administrative tasks, lead generation.', 'Content writing – AI based, organic digital marketing.'],
  'full-time',
  ARRAY['Virtual Assistance', 'Web Development', 'AI Tools', 'Digital Marketing'],
  1
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'TBC Websites, United Kingdom',
  'Freelance Digital Consultant',
  'Remote',
  'December 2025',
  'Present',
  ARRAY['Developed 25+ websites leveraging GenSpark AI to ensure rapid deployment and modern design standards.', 'Continuously managing and updating digital assets to align with evolving AI capabilities.'],
  'full-time',
  ARRAY['GenSpark AI', 'Web Development', 'Digital Assets'],
  2
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Williams Transportation, Illinois, USA',
  'Digital Strategist & Web Developer',
  'Remote',
  'January 2025',
  'Present',
  ARRAY['Developed the corporate website (wtransportsolution.com) and spearheading ongoing Social Media Marketing campaigns.'],
  'full-time',
  ARRAY['Web Development', 'Social Media Marketing', 'Digital Strategy'],
  3
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'The Sole Ingredient Catering LLC, Illinois, USA',
  'Digital Strategist & Web Developer',
  'Remote',
  'January 2025',
  'Present',
  ARRAY['Developed the official website (thesoleingredientcatering.com) and managing full-scale digital branding and marketing.'],
  'full-time',
  ARRAY['Web Development', 'Branding', 'Digital Marketing'],
  4
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Zeir App, Saudi Arabia',
  'Freelance Consultant - Virtual Assistant',
  'Remote',
  'March 2024',
  'Present',
  ARRAY['Muslim Hunt Platform Development: Engineered and deployed the "Muslim Hunt" website using Next.js, Supabase, and GitHub, hosted on Vercel.', 'AI Implementation: Integrated Claude, Gemini (AI Studio), and AntiGravity to build intelligent features and automate digital workflows.', 'Created Quran translation videos using AI text-to-video software.', 'Conducted research and selected scenes using precise keywords to match verse meanings.'],
  'full-time',
  ARRAY['Next.js', 'Supabase', 'AI Integration', 'Video Production'],
  5
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Suson Essentials, Georgia, USA',
  'Freelance Consultant - Virtual Assistant',
  'Remote',
  'October 2023',
  'February 2024',
  ARRAY['StreamYard video management, Constant Contact management, YouTube video, reels, and shorts creation.'],
  'full-time',
  ARRAY['StreamYard', 'Email Marketing', 'YouTube Management'],
  6
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Joey Guillory, San Jose, USA',
  'Freelance Consultant - Personal Virtual Assistant',
  'Remote',
  'December 2022',
  'October 2023',
  ARRAY['Managed applications via Lazy App, LinkedIn, Indeed, and Google Jobs, securing two hotel jobs (including Hilton).', 'Conducted online research, data entry, and vendor sourcing.', 'Managed email inboxes, spreadsheets, travel arrangements, and event planning.'],
  'full-time',
  ARRAY['Job Search', 'Admin Support', 'Data Entry', 'Travel Arrangements'],
  7
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'The SOAS Global Council for Anthropological Linguistics (GLOCAL), University of London, UK',
  'Freelance Consultant - Media and Web Design Coordinator',
  'Remote',
  'January 2021',
  'December 2022',
  ARRAY['Developed and maintained the GLOCAL website and other related sites (CALA, COMELA, AFALA, JALA, JOMELA).', 'Managed content creation, video editing, and social media integration.'],
  'full-time',
  ARRAY['WordPress', 'Web Design', 'Content Creation', 'Video Editing'],
  8
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Tritech Building Services Ltd., Dhaka, Bangladesh',
  'Assistant Manager, Brand & Communication',
  'Bangladesh',
  'January 2020',
  'December 2020',
  ARRAY['Created marketing plans, advertising, and digital campaigns, Arranged Annual Event for Tritech.', 'Produced creative marketing content, including videos and blog posts.', 'Developed relationships with internal and external stakeholders.'],
  'full-time',
  ARRAY['Marketing', 'Brand Management', 'Event Planning', 'Content Production'],
  9
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Tritech Building Services Ltd., Dhaka, Bangladesh',
  'Sr. Executive, Engineering Sales - Client Relationship Manager',
  'Bangladesh',
  'May 2018',
  'January 2020',
  ARRAY['Maintained client relationships, collected leads, and nurtured client connections.', 'Conducted meetings, site visits, and client consultations to understand and fulfill requirements.'],
  'full-time',
  ARRAY['Sales', 'Client Relations', 'Lead Generation', 'Site Visits'],
  10
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Power-Sonic Transformers & Switchgears Ltd., Dhaka, Bangladesh',
  'Assistant Engineer',
  'Bangladesh',
  'January 2017',
  'May 2018',
  ARRAY['Conducted site surveys and designed substation layouts as per DESCO and DPDC rules.', 'Consulted clients on project details before and after substation project completion.'],
  'full-time',
  ARRAY['Project Survey', 'Layout Design', 'Client Consultation', 'Engineering'],
  11
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Cityscape International Limited, Dhaka, Bangladesh',
  'IT Associate Engineer',
  'Bangladesh',
  'January 2016',
  'December 2016',
  ARRAY['Managed IT support, inventory, and office-wide laptop and desktop maintenance.'],
  'full-time',
  ARRAY['IT Support', 'Network Administration', 'Hardware Maintenance'],
  12
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Berger Paints Bangladesh Ltd., Dhaka, Bangladesh',
  'Internee',
  'Bangladesh',
  'August 2015',
  'December 2015',
  ARRAY['Assisted in IT project documentation and infrastructure management.'],
  'full-time',
  ARRAY['Project Documentation', 'IT Infrastructure'],
  13
);

-- =====================================================
-- PART-TIME EXPERIENCES (12)
-- =====================================================

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Aura Relax & Nature Healing Society, Norway',
  'Freelance Consultant - YouTube Manager',
  'Remote',
  'January 2021',
  'Present',
  ARRAY['Collect Royalty free Clips through Storyblocks, then Produced 8-hour relaxing videos, uploaded to YouTube, and managed channel comments.'],
  'part-time',
  ARRAY['YouTube Management', 'Video Production', 'Content Curation'],
  1
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Release Media Inc., USA',
  'Freelance Consultant - Virtual Assistant',
  'Remote',
  'February 2022',
  'Present',
  ARRAY['Execute scripts, manage orders, create PDFs, videos, podcasts, blogs, infographics and google stacking.'],
  'part-time',
  ARRAY['Content Creation', 'Video Production', 'Podcast Production', 'SEO'],
  2
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Do it Digital, Australia',
  'Freelance Consultant - General Virtual Assistant',
  'Remote',
  'April 2023',
  'Present',
  ARRAY['Set up and manage social media accounts, worked for organic reach.', 'Assist with design, layout, images, and banner placement.', 'Conduct research, compile data, create reports, and perform data entry tasks.'],
  'part-time',
  ARRAY['Social Media', 'Graphic Design', 'Research', 'Data Entry'],
  3
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Savor Our City, Florida, USA',
  'Freelance Consultant - Virtual Assistant',
  'Remote',
  'April 2024',
  'Present',
  ARRAY['Served as Event Coordinator for the Savor Boca event.', 'Managed comprehensive digital quality assurance including Website Testing and Email Marketing Testing.', 'Executed marketing workflows and data management to ensure seamless event promotion.', 'Video Production and Editing, Email Signature Design, Logo Animation, VPN Research, Content Creation.'],
  'part-time',
  ARRAY['Event Coordination', 'QA Testing', 'Video Production', 'Email Marketing'],
  4
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'White Serpent Wisdom, Florida, USA',
  'Freelance Consultant - Tech Help with Social Media',
  'Remote',
  'March 2024',
  'Present',
  ARRAY['Made Full website (www.white-serpent-tradition.com) using Hypnobiz, giving training in Canva, and manage social media.', 'Video editing.'],
  'part-time',
  ARRAY['Website Development', 'Canva Training', 'Social Media', 'Video Editing'],
  5
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'iPad Art SoCal, USA',
  'Freelance Consultant - Tech help with social media',
  'Remote',
  'November 2024',
  'Present',
  ARRAY['Created videos, designed Squarespace websites, and developed branded PDFs.'],
  'part-time',
  ARRAY['Video Creation', 'Squarespace', 'Branding', 'PDF Design'],
  6
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Malaysian Super Shop, Malaysia',
  'Freelance Consultant - Virtual Assistant for Database Management',
  'Remote',
  'April 2024',
  'September 2024',
  ARRAY['Managed sales, inventory databases, and performed Google Sheets updates.'],
  'part-time',
  ARRAY['Database Management', 'Google Sheets', 'Inventory Management'],
  7
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Christopher Simpson, Florida, USA',
  'Freelance Consultant – Virtual Assistant',
  'Remote',
  'March 2024',
  'May 2024',
  ARRAY['Business research via Google Maps and compiled relevant business data.'],
  'part-time',
  ARRAY['Business Research', 'Data Compilation', 'Google Maps'],
  8
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Webkonsult AS, Norway',
  'Freelance Consultant - Virtual Assistant for Startup Company',
  'Remote',
  'March 2024',
  'July 2024',
  ARRAY['Created content using TextBuilder AI and supported administrative tasks.'],
  'part-time',
  ARRAY['AI Content Creation', 'Admin Support', 'Startup Operations'],
  9
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Alise Spiritual Healing & Wellness Center, USA',
  'Freelance Consultant - VA for Websites',
  'Remote',
  'October 2023',
  'January 2024',
  ARRAY['SSL certifications add, WordPress Website Management, Banner fixing, and other WordPress related task.'],
  'part-time',
  ARRAY['WordPress', 'SSL Certificates', 'Website Maintenance'],
  10
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'HJ Visualization, Germany',
  'Freelance Consultant - Virtual Assistant',
  'Remote',
  'January 2021',
  'December 2023',
  ARRAY['Responsibilities depend on clients'' need.', 'Sometimes he needs data entry, sometime design work, sometime PowerPoint slide and WordPress website entry.'],
  'part-time',
  ARRAY['Data Entry', 'Graphic Design', 'PowerPoint', 'WordPress'],
  11
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'ARO Commerce, UK',
  'Freelance Consultant - Part-Time Virtual Assistant',
  'Remote',
  'June 2022',
  'June 2023',
  ARRAY['Google Ads Management: Conducted research, evaluated performance, and provided actionable feedback.', 'Email Campaign Management: Drafted personalized email campaigns, ensured formatting accuracy.', 'Data Management & Professional Development: Gathered company data, maintained accurate spreadsheets.'],
  'part-time',
  ARRAY['Google Ads', 'Email Marketing', 'Data Management', 'Spreadsheets'],
  12
);

-- =====================================================
-- PROJECT-BASED EXPERIENCES (4)
-- =====================================================

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Arron Lee, UK',
  'Freelance Consultant – Personal Virtual Assistant',
  'Remote',
  'April 2024',
  'June 2024',
  ARRAY['Job search within Arron''s Field.'],
  'project',
  ARRAY['Job Search', 'Research', 'Application Management'],
  1
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'Bueno Group, New York, USA',
  'Freelance Consultant - Podcast Production Coordinator',
  'Remote',
  'June 2024',
  'August 2024',
  ARRAY['Video Editing/Rendering with AI tool, Short term project.'],
  'project',
  ARRAY['Podcast Production', 'Video Editing', 'AI Tools'],
  2
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'New Tab Theme Builder, USA',
  'Freelance Consultant - Virtual Assistant',
  'Remote',
  'May 2023',
  'June 2024',
  ARRAY['Download, organize, edit, and upload wallpapers, themes, and icons using provided tools and scripts.', 'Build apps using NewTabThemeBuilder, manage extension publishing, handle reviews.', 'Test features, fix bugs.'],
  'project',
  ARRAY['App Development', 'Extension Publishing', 'QA Testing', 'Content Management'],
  3
);

INSERT INTO experiences (company, position, location, start_date, end_date, description, type, skills, order_index)
VALUES (
  'GDA Green Source LLC, USA',
  'Freelance Consultant - Technical Sales Representative',
  'Remote',
  'August 2021',
  'December 2021',
  ARRAY['Freelance and contractual sales job.'],
  'project',
  ARRAY['Technical Sales', 'B2B Sales', 'Lead Generation'],
  4
);

-- Verify the data was inserted correctly
SELECT COUNT(*) as total_experiences FROM experiences;
SELECT type, COUNT(*) as count FROM experiences GROUP BY type ORDER BY type;
