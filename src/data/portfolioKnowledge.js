export const portfolioKnowledge = {
  name: "Michael Garets Kon",
  education: [
    {
      school: "Universitas Multimedia Nusantara (UMN)",
      program: "Computer Science",
      started: "2023",
      expectedGraduation: "2027",
      focus:
        "Frontend development, web applications, user flows, React interfaces, and practical QA.",
    },
  ],
  summary:
    "Michael Garets Kon is a Computer Science student at UMN focused on frontend development. He builds React web applications, data-backed forms, responsive interfaces, and tests important user flows before calling a project finished.",
  availability:
    "Michael is looking for frontend internship opportunities where he can work on real interfaces, learn through code review, and understand how teams move features from requirements to production.",
  skills: [
    "Frontend development",
    "React component design",
    "JavaScript",
    "Responsive UI",
    "Information flow",
    "Interface states",
    "Form validation",
    "Firebase integration",
    "Functional testing",
    "Bug reporting",
    "Basic accessibility awareness",
    "UI writing",
    "Wireframing",
  ],
  technologies: [
    "React",
    "Vite",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Firebase",
    "Git",
    "GitHub",
    "Vercel",
  ],
  projects: [
    {
      title: "Tourism Destination Website",
      type: "Campus project",
      categories: ["Frontend"],
      description:
        "A tourism website that organizes destination images, summaries, and navigation into scannable pages.",
      role:
        "Michael defined the page hierarchy, built navigation between sections, and implemented responsive layouts for different screen sizes.",
      outcome:
        "Users can compare destinations and find main details without opening several pages.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive UI"],
      link: "https://web-destinasi.vercel.app/index.html",
    },
    {
      title: "QA Testing Portfolio",
      type: "QA notes",
      categories: ["QA", "UI/UX"],
      description:
        "Test documentation for an LMS, covering login, class navigation, and other core workflows.",
      role:
        "Michael wrote test cases, ran functional tests, and documented bugs with repeatable reproduction steps, expected results, and actual results.",
      outcome:
        "Developers or evaluators can reproduce issues without guessing the starting conditions.",
      technologies: ["Functional Testing", "Bug Reports", "Test Cases"],
    },
    {
      title: "Portfolio Website",
      type: "Personal website",
      categories: ["Frontend", "UI/UX"],
      description:
        "A bilingual React portfolio for presenting projects, technical skills, learning history, and contact information.",
      role:
        "Michael built language and theme switching, project filters, active navigation, and centralized site content.",
      outcome:
        "Visitors can read the main portfolio information in one page in English or Indonesian.",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Vercel"],
      link: "https://github.com/michaelgarets/michael-portfolio",
    },
    {
      title: "Birthday Party Invitation",
      type: "React and Firebase application",
      categories: ["Frontend", "Backend", "UI/UX"],
      description:
        "A digital invitation app where guests can read event details, send an RSVP, and leave a message.",
      role:
        "Michael built the RSVP form with validation, stored responses and messages in Firebase, and displayed submission status after data was sent.",
      outcome:
        "Guests can confirm attendance from one page while the host receives stored responses.",
      technologies: ["React", "Firebase", "Form Validation", "Vercel"],
      link: "https://birthday-invitation-swart.vercel.app/",
    },
  ],
  experience: [
    {
      title: "Frontend-focused project work",
      description:
        "Michael practices frontend development through React projects that include navigation, forms, validation, responsive layout, data storage, loading states, empty states, and error states.",
    },
    {
      title: "QA documentation practice",
      description:
        "Michael documents functional tests and bug reports with conditions, reproduction steps, expected results, and actual results.",
    },
    {
      title: "AI learning",
      description:
        "Michael is learning how AI can support search and repetitive tasks inside practical web applications.",
    },
  ],
  contact: {
    email: "michaellgareth321@gmail.com",
    emailLink:
      "https://mail.google.com/mail/?view=cm&fs=1&to=michaellgareth321@gmail.com",
    github: "https://github.com/michaelgarets",
    linkedin: "https://www.linkedin.com/in/michael-garets",
  },
  portfolioLinks: {
    sourceCode: "https://github.com/michaelgarets/michael-portfolio",
    tourismDestination: "https://web-destinasi.vercel.app/index.html",
    birthdayInvitation: "https://birthday-invitation-swart.vercel.app/",
  },
};

const list = (items) => items.map((item) => `- ${item}`).join("\n");

export const portfolioKnowledgeText = `
Name:
${portfolioKnowledge.name}

Summary:
${portfolioKnowledge.summary}

Education:
${portfolioKnowledge.education
  .map(
    (item) =>
      `- ${item.program} at ${item.school}. Started ${item.started}. Expected graduation ${item.expectedGraduation}. Focus: ${item.focus}`,
  )
  .join("\n")}

Availability:
${portfolioKnowledge.availability}

Skills:
${list(portfolioKnowledge.skills)}

Technologies:
${list(portfolioKnowledge.technologies)}

Projects:
${portfolioKnowledge.projects
  .map(
    (project) =>
      `- ${project.title}: ${project.description} Role: ${project.role} Outcome: ${project.outcome} Technologies: ${project.technologies.join(", ")}${project.link ? ` Link: ${project.link}` : ""}`,
  )
  .join("\n")}

Experience:
${portfolioKnowledge.experience
  .map((item) => `- ${item.title}: ${item.description}`)
  .join("\n")}

Contact:
- Email: ${portfolioKnowledge.contact.email}
- GitHub: ${portfolioKnowledge.contact.github}
- LinkedIn: ${portfolioKnowledge.contact.linkedin}

Portfolio Links:
- Source code: ${portfolioKnowledge.portfolioLinks.sourceCode}
- Tourism Destination Website: ${portfolioKnowledge.portfolioLinks.tourismDestination}
- Birthday Party Invitation: ${portfolioKnowledge.portfolioLinks.birthdayInvitation}
`.trim();
