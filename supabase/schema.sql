-- Inborn Talent Database Schema
-- Supabase Postgres

create extension if not exists "pgcrypto";

-- ENUMS
create type enquiry_audience as enum (
  'parent_of_child',
  'student_class_8_10',
  'student_class_11_12',
  'college_student',
  'working_professional',
  'school_or_college',
  'other'
);

create type enquiry_status as enum ('new','contacted','booked','completed','closed');

-- ENQUIRIES TABLE
create table public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 80),
  phone text not null check (phone ~ '^[0-9+\- ]{10,15}$'),
  audience enquiry_audience not null,
  age_or_class text check (char_length(age_or_class) <= 40),
  service_slug text check (service_slug in (
    'dmit-fingerprint-analysis','career-guidance','parent-child-guidance',
    'adult-professional-profile','school-college-workshops','not-sure')),
  message text check (char_length(message) <= 1000),
  source_page text, -- path where the form was submitted
  utm_source text,
  utm_medium text,
  utm_campaign text,
  consent boolean not null check (consent = true),
  status enquiry_status not null default 'new',
  owner_notes text
);

create index enquiries_created_at_idx on public.enquiries (created_at desc);
create index enquiries_status_idx on public.enquiries (status);

-- TESTIMONIALS (publish only with written consent)
create table public.testimonials (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  display_name text not null, -- e.g. "Parent of a Class 10 student" (no child names)
  relation text,
  quote text not null check (char_length(quote) <= 600),
  consent_confirmed boolean not null default false,
  is_published boolean not null default false,
  sort_order int not null default 0,
  check (is_published = false or consent_confirmed = true)
);

-- BLOG POSTS (P2, created now, unused in v1)
create table public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text,
  body_md text not null,
  is_published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

-- updated_at trigger
create or replace function set_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger enquiries_updated before update on public.enquiries
  for each row execute function set_updated_at();

-- RLS
alter table public.enquiries enable row level security;
-- no public policies for enquiries: writes through server action with service role key only

alter table public.testimonials enable row level security;
alter table public.posts enable row level security;

create policy "public read published testimonials" on public.testimonials
  for select using (is_published = true and consent_confirmed = true);

create policy "public read published posts" on public.posts
  for select using (is_published = true);

