# How to Update Your Portfolio

This portfolio is designed for easy maintenance. Here's how to make common updates.

## Adding a New Project

1. Open `src/data/projects.js`
2. Add a new project object:

```javascript
{
  id: 6,
  title: "My New Project",
  shortDescription: "Brief one-line description",
  description: "Detailed project description",
  image: "/projects/new-project.png",
  category: "AI/ML", // or "Web Development", "Data Analytics", "Hackathon"
  technologies: ["Python", "FastAPI"],
  github: "YOUR_GITHUB_LINK",
  live: "YOUR_LIVE_LINK",
  featured: false,
  problemStatement: "What problem does this solve?",
  solution: "How did you solve it?",
  features: ["Feature 1", "Feature 2"],
  architecture: "Architecture description",
  myContribution: "What you built",
  challenges: ["Challenge 1", "Challenge 2"],
  futureImprovements: ["Improvement 1", "Improvement 2"]
}
```

3. Place the project image in `public/projects/`
4. Run `npm run dev` to test
5. Commit and push:
```bash
git add .
git commit -m "Add new project: [Project Name]"
git push
```

## Adding a New Skill

1. Open `src/data/skills.js`
2. Add a new skill object:

```javascript
{
  id: 19,
  name: "New Skill",
  category: "Tools", // or "Languages", "Frameworks", "Databases", "Core Concepts"
  description: "Brief skill description"
}
```

## Adding a New Certificate

1. Open `src/data/certificates.js`
2. Add a new certificate object:

```javascript
{
  id: 4,
  title: "Certificate Name",
  organization: "Issuing Organization",
  description: "Certificate description",
  skills: ["Skill 1", "Skill 2"],
  image: "/certificates/cert-name.png",
  credentialUrl: "YOUR_CREDENTIAL_LINK"
}
```

3. Place certificate image in `public/certificates/`

## Adding an Achievement / Hackathon

1. Open `src/data/achievements.js`
2. Add a new achievement object:

```javascript
{
  id: 4,
  title: "Hackathon Name 2026",
  role: "Winner / Finalist / Participant",
  description: "What you did and what the project was about",
  image: "/achievements/hackathon-name.png",
  date: "2026",
  category: "Hackathon", // or "Coding", "Education"
  technologies: ["Python", "React"],
  highlights: [
    "Key highlight 1",
    "Key highlight 2",
    "Key highlight 3"
  ]
}
```

3. Place the achievement image in `public/achievements/`

## Updating Personal Information

1. Open `src/data/profile.js`
2. Update any field:
   - name, role, tagline
   - email, phone, location
   - github, linkedin URLs
   - education details
   - achievements
   - interests

## Replacing Profile Image

1. Place your image in `public/profile/` folder
2. Name it `profile.jpg` or `profile.png`
3. Open `src/components/Hero.jsx` and `src/components/About.jsx`
4. Find the `useState` with `localStorage.getItem('portfolio-hero-image')` and replace it with:
   ```jsx
   const [heroImage] = useState('/profile/profile.jpg');
   ```

## Adding New Sections

1. Create a new component in `src/components/`
2. Add the section ID to `src/utils/constants.js`
3. Import and add the component in `src/pages/Home.jsx`
4. Add a nav link in `NAV_LINKS` in `src/utils/constants.js`

## Deployment

The portfolio auto-deploys on Vercel when you push to GitHub:

1. Push changes to GitHub
2. Vercel automatically detects changes
3. New version deploys in ~1-2 minutes

## File Structure

```
src/
├── data/              ← Edit content here
│   ├── profile.js     ← Personal info
│   ├── projects.js    ← Projects
│   ├── skills.js      ← Skills
│   ├── certificates.js
│   └── achievements.js ← Achievements & Hackathons
├── components/        ← UI components (don't edit unless needed)
└── pages/             ← Page layouts (don't edit unless needed)
```