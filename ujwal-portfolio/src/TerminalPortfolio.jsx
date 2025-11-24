import React, { useState, useEffect, useRef } from 'react';

const TECH_JOKES = [
  'Why did the developer go broke? Because he used up all his cache. 🧾',
  'There are 10 types of people in the world: those who understand binary and those who don’t. 💾',
  'Why do Java developers wear glasses? Because they don’t C#. 🤓',
  'I would tell you a UDP joke, but you might not get it. 📡',
  'A SQL query walks into a bar, walks out of a bar, walks into a bar... 🔁',
  'Debugging: being the detective in a crime movie where you are also the murderer. 🕵️‍♂️',
  'My code never has bugs. It just develops random features. 🐛✨',
  'Git commit -m "final_final_v2_really_final_this_time". 📝',
  'Documentation? That’s the thing you write after production, right? 📚🔥',
  'I don’t always test my code, but when I do, I do it in production. 🚨',
  'Cloud is just someone else’s computer. ☁️💻',
  'Why was the computer cold? It forgot to close its Windows. 🪟🥶',
  '404: Motivation not found. 🧠',
  'Keyboard not found. Press F1 to continue. ⌨️🤔',
  'To understand recursion, you must first understand recursion. ♾️',
  'My favorite language? The one with fewer semicolons to miss. ;)',
];

const TerminalPortfolio = () => {
  const [currentPath, setCurrentPath] = useState('/');
  const [history, setHistory] = useState([
    // Fancy welcome banner INSIDE terminal
    { type: 'output', content: '╔════════════════════════════════════════════════════════════╗' },
    { type: 'output', content: '║                                                            ║' },
    { type: 'output', content: '║        Welcome to UJWAL M\'s Terminal Portfolio 😎         ║' },
    { type: 'output', content: '║                                                            ║' },
    { type: 'output', content: '║     System Status: ██████████ 100% OPERATIONAL             ║' },
    { type: 'output', content: '║     Terminal Version: v2.0-ELITE                           ║' },
    { type: 'output', content: '║                                                            ║' },
    { type: 'output', content: '╚════════════════════════════════════════════════════════════╝' },
    { type: 'output', content: '' },
    {
      type: 'output',
      content:
        '👤 Logged in as: UJWAL M | Backend Developer • AI Explorer • DevOps & CEH Learner',
    },
    {
      type: 'output',
      content:
        '⚡ Current Quest: Building scalable backends, learning DevOps & breaking things ethically (CEH).',
    },
    { type: 'output', content: '' },
    { type: 'output', content: '💡 Type "help" to unlock the secrets...' },
    { type: 'output', content: '🚀 Type "ls" to see what treasures await...' },
    { type: 'output', content: '' },
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Top banner visibility + random joke
  const [showBanner, setShowBanner] = useState(true);
  const [joke] = useState(
    () => TECH_JOKES[Math.floor(Math.random() * TECH_JOKES.length)]
  );

  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const bottomRef = useRef(null); 

  const fileSystem = {
    '/': {
      type: 'directory',
      content: ['about', 'skills', 'projects', 'experience', 'contact'],
      description: 'Root directory',
    },

    '/about': {
      type: 'file',
      content: `
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║         █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗    ║
║        ██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝    ║
║        ███████║██████╔╝██║   ██║██║   ██║   ██║       ║
║        ██╔══██║██╔══██╗██║   ██║██║   ██║   ██║       ║
║        ██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║       ║
║        ╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝       ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────┐
│  👤 Name      : UJWAL M                             │
│  💼 Role      : Backend Developer & AI Enthusiast   │
│  📍 Location  : India (Remote-friendly)             │
│  ⚡ Status    : [ONLINE] Shipping side projects...  │
│  🎯 Mission   : Blend AI, backend & security        │
└─────────────────────────────────────────────────────┘

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                                   ┃
┃  "I don't just write code, I design systems       ┃
┃   that can take a hit and still keep scaling. ⚙️"  ┃
┃                                                   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

▼ WHO AM I?
═════════════════════════════════════════════════════

I'm Ujwal M — a backend-focused developer who loves
AI, automation and a bit of ethical hacking.

I enjoy:
  • Building clean, modular APIs
  • Playing with AI-powered projects
  • Learning DevOps, Linux & tooling
  • Understanding how attackers think (CEH mindset)

▼ SUPERPOWERS (IN PROGRESS, LEVELING DAILY)
═════════════════════════════════════════════════════

  💻 BACKEND BRAIN
      ╰─➤ Node.js, Express, REST APIs
      ╰─➤ Loves structuring clean routes & services
      ╰─➤ Interested in microservice patterns

  🤖 AI EXPLORER
      ╰─➤ Builds small AI tools & experiments
      ╰─➤ Loves combining AI with real-world use cases

  ☁️ DEVOPS LEARNER
      ╰─➤ Comfortable with Git, Linux & basic CI/CD
      ╰─➤ Exploring Docker, Nginx and deployments

  🛡️ CEH & SECURITY
      ╰─➤ Curious about vulnerabilities & hardening
      ╰─➤ Believes “secure by design” > “patch later”

▼ FUN STATS
═════════════════════════════════════════════════════

  Side Projects Started  : ██████████ 80%
  Side Projects Finished : ████░░░░░░ 40% (work in progress 👀)
  Coffee / Chai          : ██████████ 100%
  Curiosity Level        : ██████████ 110%

═════════════════════════════════════════════════════

💭 Fun Fact: If something can be automated, I'm
             probably already scripting it. 🧪
      `,
    },

    '/skills': {
      type: 'file',
      content: `
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║    ███████╗██╗  ██╗██╗██╗     ██╗     ███████╗        ║
║    ██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝        ║
║    ███████╗█████╔╝ ██║██║     ██║     ███████╗        ║
║    ╚════██║██╔═██╗ ██║██║     ██║     ╚════██║        ║
║    ███████║██║  ██╗██║███████╗███████╗███████║        ║
║    ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝        ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝

┌────────────────────────────────────────────────────┐
│  🔥 Skill Level Legend:                            │
│  ████████████ Expert  | ████████░░ Advanced       │
│  ██████░░░░░░ Intermediate                        │
└────────────────────────────────────────────────────┘

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  💻 BACKEND & APIs                               ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

    Node.js          ████████░░░░ Intermediate ||
    ├─ Express       ████████░░░░
    └─ REST APIs     █████████░░░

    JavaScript       ███████░░░░░ Intermediate |
    React (Basic)    █████░░░░░░░ Foundation 
    Python           ██████░░░░░░ Intermediate ||
      - scripting, automation, ML basics

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  ☁️  DEVOPS & TOOLS (FOUNDATION)                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

    Git & GitHub     █████████░░░ Intermediate ||
    Linux / Bash     ████████░░░░ Intermediate ||
    Docker           ██████░░░░░░ Intermediate |
    CI/CD Basics     ██████░░░░░░ Intermediate |
    Nginx            ██████░░░░░░ Intermediate |

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  🤖 AI & SECURITY                                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

    AI Projects      ██████░░░░░░ Intermediate
    CEH Basics       ██████░░░░░░ Intermediate
    APIs & Webhooks  ████████░░░░ Advanced
    WhatsApp Bot Dev ██████░░░░░░ (LangChain / LangGraph)

═════════════════════════════════════════════════════

💪 Total Stack Power: Increasing every commit... 🚀
      `,
    },

    '/projects': {
      type: 'file',
      content: `
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║   ██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗   ║
║   ██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝   ║
║   ██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ║
║   ██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ║
║   ██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ║
║   ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝

🎯 Some of the things I've built / worked on:

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  🤖 ML / AI PROJECTS                             ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

[ PROJECT 01 ] 🌾 Paddy Leaf Disease Detection
  • Image-based model to detect diseases on paddy leaves.
  • Stack: Python, OpenCV, ML / DL libraries.
  • Goal: Help farmers identify issues early and reduce crop loss.

[ PROJECT 02 ] 🎭 Deepfake Video Detection
  • Experimented with detecting manipulated / deepfake videos.
  • Stack: Python, deep learning, video frame analysis.
  • Focus: Understanding visual artifacts & model-based detection.


┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  💹 TRADING & AUTOMATION                         ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

[ PROJECT 03 ] 💹 Copy-Trading Backend
  • Designed backend for a copy-trading concept (stocks / crypto).
  • Handles user profiles, trade mirroring, basic risk config.
  • Stack: Node.js, REST APIs, DB, auth & background jobs.

[ PROJECT 04 ] 🤖 Python Trade Automation
  • Python automation scripts for stock & crypto markets.
  • Uses exchange APIs to place, manage, and track orders.
  • Focus on safe automation, logs, and strategy testing.


┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  🌐 LIVE / CLIENT WORK                           ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

[ PROJECT 05 ] 🌊 Heed Jetboards – Site & Admin APIs
  • Involved in tech for: https://heedjetboards.com/
  • Worked on backend / admin panel APIs for managing content.

[ PROJECT 06 ] 🛠️ RPartsNAds – Auto Parts Platform
  • Involved in tech for: https://rpartsnads.com/
  • Helped in creating admin panel APIs and backend logic.


┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  💬 AI BOTS & AUTOMATION                         ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

[ PROJECT 07 ] 💬 WhatsApp Chat Bot (LangChain + LangGraph)
  • Built a WhatsApp-style chat bot using LangChain & LangGraph.
  • Capabilities: answering FAQs, simple flows, and structured replies.
  • Focus: clean prompts, modular tools, and easy extension.

───────────────────────────────────────────────────────

👉 Many of these are evolving projects. Ask me about details
   in an interview and I'll happily walk through the
   architecture & code choices.
      `,
    },

    '/experience': {
      type: 'file',
      content: `
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║    ███████╗██╗  ██╗██████╗ ███████╗██████╗            ║
║    ██╔════╝╚██╗██╔╝██╔══██╗██╔════╝██╔══██╗           ║
║    █████╗   ╚███╔╝ ██████╔╝█████╗  ██████╔╝           ║
║    ██╔══╝   ██╔██╗ ██╔═══╝ ██╔══╝  ██╔══██╗           ║
║    ███████╗██╔╝ ██╗██║     ███████╗██║  ██║           ║
║    ╚══════╝╚═╝  ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝           ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝

🎯 Learning & Experience Journey – UJWAL M

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  💼 INDUSTRY EXPERIENCE                          ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

[ Oct 2024 – Jan 2025 ]  🏗️ Tech Intern – ArchOnet
  • Worked as a tech intern on the ArchOnet project.
  • Contributed to:
      - Backend logic & APIs for a site feasibility tool.
      - Understanding how real-world data flows in a product.
      - Debugging, testing and iterating on features.
  • Gained exposure to practical project structure and collaboration.

[ Jul 2025 – Present ]  🚀 Tech Intern – Envision Techsol
  • Currently working as a tech intern at Envision.
  • Involved in:
      - Building and improving backend services & admin panel APIs.
      - Helping on client projects like Heed Jetboards & RPartsNAds.
      - Experimenting with AI bots (WhatsApp) using LangChain / LangGraph.
      - Learning deployment, debugging and real production workflows.

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  🧠 WHAT I FOCUS ON                              ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

  ▸ Writing clear, maintainable backend code
  ▸ Thinking about security & reliability early
  ▸ Automating repetitive tasks where possible
  ▸ Asking questions, learning from seniors, documenting

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  🎯 GOALS (NEXT STEPS)                           ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

  ▸ Master containerization & CI/CD
  ▸ Contribute to open-source repositories
  ▸ Build more AI + security-focused projects
  ▸ Grow into backend + AI + DevOps engineer
    with a solid security-first mindset

───────────────────────────────────────────────────────

💭 "Every commit, every bug, every experiment is
    XP towards the next version of myself."
      `,
    },

    '/contact': {
      type: 'file',
      content: `
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║    ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗         ║
║   ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗        ║
║   ██║     ██║   ██║██╔██╗ ██║   ██║   ███████║        ║
║   ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║        ║
║   ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║        ║
║    ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝        ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃   💬 Reach out to UJWAL M & build something! 🚀  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┌────────────────────────────────────────────────────┐
│  📧  EMAIL                                         │
│  ╰─➤ujwalm308@gmail.com                            |
└────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│  🐙  GITHUB                                                    │
│  ╰─➤ https://github.com/itache2002                             │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│  💼  LINKEDIN                                                  │
│  ╰─➤ https://www.linkedin.com/in/ujwal-m-5a6140218             │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────┐
│  🌐  PORTFOLIO / BLOG                              │
│  ╰─➤https://itache2002.github.io/website          │
└────────────────────────────────────────────────────┘

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  ⚡ QUICK STATS                                   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

  Response Rate     : ████████████ 98%
  Curiosity Level   : ████████████ 120%
  Bugs Fixed        : ████████████ 1,337+ (and counting)
  Ideas in Backlog  : ████████████ ∞

═══════════════════════════════════════════════════════

💭 "If you like terminals, APIs, AI or security,
    we already have something in common."
      `,
    },
  };

  useEffect(() => {
    // auto-scroll to bottom whenever history changes
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const getPrompt = () => {
    return `ujwal@portfolio:${currentPath}$`;
  };

  const addToHistory = (type, content) => {
    setHistory((prev) => [...prev, { type, content }]);
  };

  const renderWithLinks = (text) => {
    if (!text) return null;
    const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/g;
    const parts = [];
    let lastIndex = 0;
    let match;
    let key = 0;

    while ((match = urlRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(
          <span key={key++}>{text.slice(lastIndex, match.index)}</span>
        );
      }
      const raw = match[0];
      const href = raw.startsWith('http') ? raw : `https://${raw}`;
      parts.push(
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-emerald-300 hover:text-emerald-200"
        >
          {raw}
        </a>
      );
      lastIndex = urlRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(<span key={key++}>{text.slice(lastIndex)}</span>);
    }

    return parts;
  };


  const commands = {
    help: () => {
      return `
╔════════════════════════════════════════╗
║        AVAILABLE COMMANDS              ║
╚════════════════════════════════════════╝

Navigation:
  ls              List contents of current directory
  cd <dir>        Change directory (e.g., cd about)
  cd ..           Go to parent directory
  pwd             Print current directory path
  clear           Clear terminal screen

Information:
  cat <file>      Display file contents
  help            Show this help message
  whoami          Display current user
  date            Show current date and time
  echo <text>     Print some text

Extras:
  banner          Show welcome banner again

Tips:
• Use ↑/↓ arrows for command history
• Type 'ls' to see all sections
• Type 'about', 'skills', 'projects', 'experience', or 'contact'
  directly to open that section (shortcut)
      `;
    },

    ls: () => {
      const currentDir = fileSystem[currentPath];
      if (currentDir && currentDir.type === 'directory') {
        return currentDir.content
          .map((item) => {
            const fullPath =
              currentPath === '/' ? `/${item}` : `${currentPath}/${item}`;
            const isDir = fileSystem[fullPath]?.type === 'directory';
            return `${isDir ? '📁' : '📄'} ${item}`;
          })
          .join('\n');
      }
      return 'Not a directory';
    },

    pwd: () => currentPath,

    cd: (args) => {
      if (!args[0]) {
        setCurrentPath('/');
        return 'Changed to root directory';
      }

      if (args[0] === '..') {
        if (currentPath === '/') {
          return 'Already at root directory';
        }
        setCurrentPath('/');
        return 'Changed to root directory';
      }

      const targetPath =
        currentPath === '/' ? `/${args[0]}` : `${currentPath}/${args[0]}`;

      if (fileSystem[targetPath]) {
        setCurrentPath(targetPath);
        const content = fileSystem[targetPath].content;
        return typeof content === 'string' ? content : `Changed to ${targetPath}`;
      }

      return `cd: ${args[0]}: No such file or directory`;
    },

    cat: (args) => {
      if (!args[0]) {
        return 'cat: missing file argument';
      }

      const filePath =
        currentPath === '/' ? `/${args[0]}` : `${currentPath}/${args[0]}`;
      const file = fileSystem[filePath];

      if (!file) {
        return `cat: ${args[0]}: No such file or directory`;
      }

      if (file.type === 'directory') {
        return `cat: ${args[0]}: Is a directory`;
      }

      return file.content;
    },

    clear: () => {
      setHistory([]);
      setShowBanner(true);
      return null;
    },

    whoami: () => 'ujwal',

    date: () => new Date().toString(),

    echo: (args) => args.join(' '),

    banner: () => {
      return [
        '╔════════════════════════════════════════════════════════════╗',
        '║                                                            ║',
        '║       Welcome to UJWAL M\'s Terminal Portfolio 😎         ║',
        '║                                                            ║',
        '║     System Status: ██████████ 100% OPERATIONAL             ║',
        '║     Terminal Version: v2.0-ELITE                           ║',
        '║                                                            ║',
        '╚════════════════════════════════════════════════════════════╝',
      ].join('\n');
    },
  };

  const handleTabAutocomplete = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const [cmd, ...rest] = trimmed.split(' ');

    // Complete file/dir after commands like cd/cat
    if (rest.length >= 0 && (cmd === 'cd' || cmd === 'cat')) {
      const argPrefix = rest[0] || '';
      const currentDir = fileSystem[currentPath];
      const entries =
        currentDir && currentDir.type === 'directory' ? currentDir.content : [];
      const matches = entries.filter((name) => name.startsWith(argPrefix));

      if (matches.length === 1) {
        setInput(`${cmd} ${matches[0]} `);
      } else if (matches.length > 1) {
        addToHistory('output', matches.join('    '));
      }
      return;
    }

    
    const commandNames = Object.keys(commands);
    const rootEntries = fileSystem['/'].content;
    const candidates = [...new Set([...commandNames, ...rootEntries])].filter(
      (name) => name.startsWith(cmd.toLowerCase())
    );

    if (candidates.length === 1) {
      setInput(candidates[0] + ' ');
    } else if (candidates.length > 1) {
      addToHistory('output', candidates.join('    '));
    }
  };


//   const handleCommand = (cmd) => {
//     const trimmedCmd = cmd.trim();
//     if (!trimmedCmd) return;

//     if (showBanner) {
//       setShowBanner(false);
//     }

//     addToHistory('input', `${getPrompt()} ${trimmedCmd}`);
//     setCommandHistory((prev) => [...prev, trimmedCmd]);
//     setHistoryIndex(-1);

//     const [command, ...args] = trimmedCmd.split(' ');
//     const cmdLower = command.toLowerCase();

//     if (commands[cmdLower]) {
//       const output = commands[cmdLower](args);
//       if (output !== null && output !== undefined) {
//         addToHistory('output', output);
//       }
//     } else {
     
//       const filePath =
//         currentPath === '/' ? `/${cmdLower}` : `${currentPath}/${cmdLower}`;
//       const file = fileSystem[filePath];

//       if (file && file.type === 'file') {
//         addToHistory('output', file.content);
//       } else {
//         addToHistory(
//           'output',
//           `Command not found: ${command}. Type 'help' for available commands.`
//         );
//       }
//     }

//     setInput('');
//   };
    const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const [command, ...args] = trimmedCmd.split(' ');
    const cmdLower = command.toLowerCase();

    // 🔹 Hide top banner only for NON-clear commands
    if (showBanner && cmdLower !== 'clear') {
        setShowBanner(false);
    }

    addToHistory('input', `${getPrompt()} ${trimmedCmd}`);
    setCommandHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    if (commands[cmdLower]) {
        const output = commands[cmdLower](args);
        if (output !== null && output !== undefined) {
        addToHistory('output', output);
        }
    } else {
        const filePath =
        currentPath === '/' ? `/${cmdLower}` : `${currentPath}/${cmdLower}`;
        const file = fileSystem[filePath];

        if (file && file.type === 'file') {
        addToHistory('output', file.content);
        } else {
        addToHistory(
            'output',
            `Command not found: ${command}. Type 'help' for available commands.`
        );
        }
    }

    setInput('');
    };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      handleTabAutocomplete();
    }
  };


  const quickCommands = [
    'help',
    'ls',
    'about',
    'skills',
    'projects',
    'experience',
    'contact',
    'clear',
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-green-400 font-mono p-4 flex items-center justify-center"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="w-full max-w-5xl">
        {/* TOP BANNER with random joke, disappears after first command */}
        {showBanner && (
          <div style={{ marginBottom: '1.75rem' }}>
            <div
              style={{
                borderRadius: '16px',
                border: '1px solid #22c55e',
                padding: '1.1rem 1.4rem',
                background:
                  'radial-gradient(circle at top left, rgba(34,197,94,0.4), rgba(0,0,0,0.98))',
                boxShadow: '0 0 32px rgba(34, 197, 94, 1)',
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              {/* Left: title section */}
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}
              >
                <div
                  style={{
                    height: '44px',
                    width: '44px',
                    borderRadius: '999px',
                    border: '2px solid #22c55e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    boxShadow: '0 0 14px rgba(34,197,94,0.9)',
                  }}
                >
                  💻
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.9rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#bbf7d0',
                      opacity: 0.9,
                    }}
                  >
                    Welcome, human
                  </div>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#f0fff4',
                    }}
                  >
                    UJWAL M&apos;s Terminal Portfolio
                  </div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: '#e5ffe9',
                      marginTop: '0.1rem',
                    }}
                  >
                    Type <strong>help</strong> or use the quick commands below
                    to explore.
                  </div>
                </div>
              </div>

              {/* Right: joke section */}
              <div
                style={{
                  maxWidth: '380px',
                  fontSize: '0.86rem',
                  color: '#fefce8',
                }}
              >
                <div
                  style={{
                    fontSize: '0.78rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: '#bef264',
                    marginBottom: '0.3rem',
                  }}
                >
                  😂 Joke of this session
                </div>
                <div
                  style={{
                    padding: '0.5rem 0.65rem',
                    borderRadius: '10px',
                    border: '1px dashed rgba(190,242,100,0.7)',
                    backgroundColor: 'rgba(23,37,23,0.9)',
                    lineHeight: 1.4,
                    fontWeight: 600,
                  }}
                >
                  {joke}
                </div>
                <div
                  style={{
                    marginTop: '0.3rem',
                    fontSize: '0.75rem',
                    opacity: 0.85,
                    color: '#bbf7d0',
                  }}
                >
                  (Refresh the page to get a new one 😉)
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Terminal window */}
        <div className="relative rounded-xl border border-green-500/30 bg-black/80 shadow-[0_0_30px_rgba(34,197,94,0.45)] overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-green-500/30 bg-gradient-to-r from-zinc-900/80 to-black/80 text-xs text-green-300/80">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="ml-3 text-green-400/80">ujwal-m@portfolio</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
              <span className="hidden sm:inline text-green-400/70">
                tip: type <span className="text-emerald-300">help</span> to begin
              </span>
            </div>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className="max-h-[70vh] overflow-y-auto px-4 py-3 text-[13px] leading-relaxed"
          >
            {history.map((entry, index) => (
              <div key={index} className="mb-1">
                {entry.type === 'input' ? (
                  <div className="text-emerald-300">{entry.content}</div>
                ) : (
                  <div className="text-green-300 whitespace-pre-wrap">
                    {renderWithLinks(entry.content)}
                  </div>
                )}
              </div>
            ))}

            {/* anchor for auto-scroll */}
            <div ref={bottomRef} />

            {/* Input line */}
            <div className="flex items-center mt-1">
              <span className="text-emerald-400 mr-2">{getPrompt()}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-green-200 caret-green-400"
                autoFocus
                spellCheck="false"
              />
            </div>
          </div>

          {/* Quick commands bar */}
          <div className="border-t border-green-500/20 bg-black/70 px-4 py-2 text-[11px] text-green-300/80 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-green-400/70">Quick commands:</span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => handleCommand(cmd)}
                className="px-2 py-0.5 rounded border border-green-500/40 hover:bg-green-500/10 transition text-[11px]"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalPortfolio;
