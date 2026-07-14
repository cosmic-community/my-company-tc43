# My Company

![App Preview](https://imgix.cosmicjs.com/ff8a3410-7f73-11f1-bda7-c54391d68ce2-autopilot-photo-1487412720507-e7ab37603c6f-1784027161033.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive company website built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Showcase your professional services, meet your talented team, explore in-depth case studies, and read glowing client testimonials — all managed through your existing Cosmic content models.

## Features

- 🏠 **Stunning Homepage** — Hero section, featured services, team preview, case study highlights, and testimonials
- 🛠️ **Services** — Detailed listing and individual service pages with icons and imagery
- 👥 **Team Members** — Meet the team with photos, bios, job titles, and contact emails
- 📊 **Case Studies** — In-depth studies with results, galleries, and related services
- 💬 **Testimonials** — Star-rated client quotes with photos, companies, and roles
- 📱 **Fully Responsive** — Looks great on mobile, tablet, and desktop
- ⚡ **Server-Rendered** — Fast, SEO-friendly pages using Next.js App Router
- 🎨 **Modern Design** — Clean UI with Tailwind CSS and the Inter font

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a5617b08be639e4dddbc939&clone_repository=6a5618cf8be639e4dddbc982)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
>
> User instructions: A company website with services, team members, case studies, and testimonials"

### Code Generation Prompt

> Build a Next.js application for a company website called "My Company". The content is managed in Cosmic CMS with the following object types: services, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A company website with services, team members, case studies, and testimonials

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com) — headless CMS ([docs](https://www.cosmicjs.com/docs))

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with a bucket containing `services`, `team-members`, `case-studies`, and `testimonials`

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set your environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`)
4. Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single case study with related objects resolved
const { object: caseStudy } = await cosmic.objects
  .findOne({ type: 'case-studies', slug })
  .depth(1)
```

## Cosmic CMS Integration

This app reads from four object types:

- **services** — `service_name`, `short_description`, `details`, `icon`, `featured_image`
- **team-members** — `full_name`, `job_title`, `bio`, `photo`, `email`
- **case-studies** — `title`, `client_name`, `summary`, `content`, `results`, `related_service`, `featured_image`, `gallery`
- **testimonials** — `quote`, `client_name`, `company`, `role`, `rating`, `photo`

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel** — Import your repo and set environment variables in the dashboard
- **Netlify** — Connect your repo and configure build settings

Set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your host's environment variables.
<!-- README_END -->