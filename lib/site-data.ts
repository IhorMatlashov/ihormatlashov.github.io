/**
 * ============================================================================
 *  EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
 * ============================================================================
 *
 *  This is the ONLY file you need to touch. Every heading, description, image
 *  and video on the site is read from here.
 *
 *  ---------------------------------------------------------------------------
 *  WHERE EACH FIELD SHOWS UP ON THE PAGE
 *  ---------------------------------------------------------------------------
 *  For every block in the "Selected work" section, top to bottom:
 *
 *    category  ->  the little orange pill      ("GAMES")
 *    year      ->  next to it                  ("2023 — 2024")
 *    engine    ->  the grey tech line          ("UNITY · WEBGL")
 *    status    ->  the outlined chip           ("RELEASED")
 *    title     ->  THE BIG HEADING             <-- this is the "header"
 *    role      ->  orange line under the title ("Gameplay Programmer")
 *    summary   ->  first paragraph (the hook, 1-2 sentences)
 *    description -> second paragraph (the detail, the numbers)
 *    tags      ->  the row of grey pills at the bottom
 *    links     ->  the "View on ..." links (delete the line if you have none)
 *
 *    cover       ->  fallback image (used if screenshots is empty)
 *    screenshots ->  the big image + the small thumbnails under it
 *    videos      ->  the thumbnails with a ▶ play icon
 *
 *  ---------------------------------------------------------------------------
 *  HOW TO ADD IMAGES AND VIDEOS
 *  ---------------------------------------------------------------------------
 *  1. Drop your files into `public/media/`. Subfolders are fine, e.g.
 *     `public/media/dino-island/`.
 *  2. Reference them here with a path that starts with `/media/` — you always
 *     leave out the `public` part:
 *
 *       file on disk:  public/media/dino-island/shot-01.png
 *       you write:     '/media/dino-island/shot-01.png'
 *
 *  3. Save. The page reloads by itself while `pnpm dev` is running.
 *
 *  Any project still using '/media/placeholder-dark.svg' has no art yet — that
 *  is the "SCREENSHOT COMING SOON" panel. Swap the path and it's done.
 *
 *  Videos should be .mp4. Until you add the file, the player shows a card
 *  telling you the exact path it is waiting for.
 *
 *  ---------------------------------------------------------------------------
 *  HOW TO ADD A WHOLE NEW PROJECT
 *  ---------------------------------------------------------------------------
 *  Copy any block between `{` and `},` and paste it, then change the fields.
 *  `slug` just has to be unique and lowercase-with-dashes.
 * ============================================================================
 */

export type MediaVideo = {
  src: string // path to an .mp4 in /public, e.g. "/media/game/trailer.mp4"
  poster?: string // optional thumbnail image shown before play
  label?: string
}

// The sections your work is grouped into — these become the filter tabs.
// Set each project's `category` to one of these exact values.
export type Category = 'Games' | 'Applications' | 'Assets' | '3D Arts'

export const categories: Category[] = ['Games', 'Applications', 'Assets', '3D Arts']

// Which categories are counted in the project total shown under the hero.
// The number itself is worked out automatically from `projects` — you never
// update a count by hand. Add '3D Arts' to this list to include it too.
export const countedCategories: Category[] = ['Games', 'Applications', 'Assets']

// ---------------------------------------------------------------------------
//  TEMPORARILY HIDDEN CATEGORIES
//  Any category listed here is kept in this file but not shown on the site:
//  its filter tab disappears, its projects are skipped, and they stop counting
//  towards the total under the hero.
//  To switch a category back on, delete it from this list (an empty list `[]`
//  shows everything).
// ---------------------------------------------------------------------------
export const hiddenCategories: Category[] = ['Assets', '3D Arts']

export type Project = {
  slug: string
  title: string
  category: Category // "Games" | "Applications" | "Assets" | "3D Arts"
  year: string
  role: string
  engine: string // e.g. "Unity 2022 LTS"
  status?: string // e.g. "Released", "In development"
  summary: string
  description: string
  tags: string[]
  cover: string // main image path in /public
  screenshots: string[] // image paths in /public
  videos: MediaVideo[] // video files in /public
  links?: { label: string; href: string }[]
  // Shape of the image/video frame. Leave it out for normal widescreen (16:9).
  // Set 'portrait' for mobile games so shots display as a tall phone screen.
  orientation?: 'landscape' | 'portrait'
}

export const siteConfig = {
  name: 'Ihor Matlashov',
  role: 'Senior Unity Developer',
  tagline:
    'C# gameplay & systems, multithreading and async, custom HLSL rendering and shadow pipelines, and the editor tooling that lets the rest of the team move faster.',
  location: 'Carrara, Italy · Open to remote',
  email: 'ihor.matlashov@gmail.com',
  heroImage: '/media/hero-bg.png',
  // Left stat under the hero. The right one is the project count, which is
  // calculated automatically — see `projectCount` at the bottom of this file.
  yearsExperience: '6 years experience',
  socials: [
    { label: 'GitHub', href: 'https://github.com/IhorMatlashov' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/igor-matlashov' },
  ],
}

export const skills = [
  'C# / .NET',
  'async/await & Task',
  'Job System + Burst',
  'HLSL & custom shadows',
  'Shader Graph',
  'Combat frameworks',
  'Enemy & boss AI',
  'Editor tooling',
  'ScriptableObject pipelines',
  'URP / HDRP',
  'Performance profiling',
  'WebGL & Android',
  'Procedural generation',
  'Blender / Maya / Substance',
]

export type ExperienceEntry = {
  role: string
  company: string
  period: string
  summary: string
  highlights: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Unity Developer — Lead Technical Artist',
    company: 'Maypole Studio',
    period: 'May 2025 — Present',
    summary: 'Sole technical developer on Foundlings, an action-RPG for PC.',
    highlights: [
      'Designed a full async/await combat stack with 30+ states, enabling instant, cancellable attacks, combos and dodges without nested coroutines.',
      'Moved AI perception and data prep to the Job System with Burst, cutting main-thread cost from ~14 ms to ~4 ms and holding 60 FPS in 40+ enemy scenes.',
      'Authors the project’s HLSL shader library and a bespoke shadow system written from scratch in shader code — the game’s visual identity, with the full shadow pass under 2.5 ms at 1080p on a GTX 1660.',
      'Delivered the toolset the project runs on: a node-graph quest/dialogue authoring window over a ScriptableObject database, custom inspectors, scene validators and in-editor debug overlays. Narrative iteration dropped from ~3 hours to ~15 minutes.',
      'Architected a unified input layer on the New Input System covering Xbox, PlayStation and PC schemes, plus the animation managers and cutscene sequencers behind in-engine cinematics.',
    ],
  },
  {
    role: 'Unity Developer — Technical Artist',
    company: 'Garneti Studio',
    period: 'Aug 2024 — Mar 2026',
    summary:
      'Technical lead on Dough Color Jam, a stylized mobile puzzle game shipped to Google Play.',
    highlights: [
      'Optimized the Canvas hierarchy and reduced draw calls from ~180 to ~45, achieving a stable 60 FPS on 2 GB Android devices with no visual loss.',
      'Authored the game’s signature clay-morphic shaders in Shader Graph inside a 1.2 ms GPU budget, paired with DOTween animation sequences.',
      'Reworked asset and level loading into async operations off the render thread, collapsing transition hitches from ~600 ms to under 80 ms.',
      'Shipped level-authoring and balance-tuning editor tools that took puzzle authoring from ~40 minutes to ~5 minutes per level; designers produced 120+ levels without engineering support.',
    ],
  },
  {
    role: 'Unity Programmer',
    company: 'Taburetka Games',
    period: 'Feb 2023 — Nov 2024',
    summary: 'Full-stack Unity developer across 4 shipped WebGL and multiplatform titles.',
    highlights: [
      'Implemented the arcade combat system and 5-phase AI boss for Old Street Fighting, profiled on CPU and GPU to hold 60 FPS inside a 256 MB WebGL heap.',
      'Cut draw calls 35–50% across all 4 shipped titles with hand-written HLSL shaders, Profiler-driven diagnostics and batching passes.',
      'Built procedural environment generation tools that turned a 3-day level blockout into a sub-hour parameter tweak.',
      'Ported 3 Unity projects to WebGL, halving initial download size from ~90 MB to ~45 MB.',
    ],
  },
  {
    role: 'Unity Programmer & 3D Artist',
    company: 'Coconut Game',
    period: 'Sep 2020 — Nov 2022',
    summary:
      'Dual programming and 3D art role across 5 arcade titles, while studying Computer Engineering.',
    highlights: [
      'Programmed core gameplay loops for 5 high-energy arcade titles, prioritizing responsive player interaction and game feel.',
      'Modeled, UV-mapped and textured 80+ game-ready characters and environment assets in Blender, Maya and Substance Painter.',
      'Owned the animation and VFX integration pipeline, keeping complex rigs and particle systems performant in-engine.',
    ],
  },
]

export type EducationEntry = {
  title: string
  org: string
  period: string
  note?: string
}

export const education: EducationEntry[] = [
  {
    title: 'B.Sc. Computer Engineering',
    org: 'Dokuz Eylul University, Izmir, Türkiye',
    period: '2021 — 2024',
    note: 'Earned the degree while working full-time as a Unity developer.',
  },
  {
    title: 'Certified Unity Developer',
    org: 'GeekBrains',
    period: '2020',
  },
]

export const spokenLanguages = [
  'English (C1)',
  'Ukrainian (native)',
  'Russian (native)',
  'Turkish (A2)',
]

// Every project you have written up. Nothing is ever deleted from here — to
// take a whole category off the site, use `hiddenCategories` above.
const allProjects: Project[] = [
  // ===========================================================================
  //  GAMES
  // ===========================================================================

  {
    slug: 'foundlings',
    title: 'Foundlings',
    category: 'Games',
    year: '2025 — Present',
    role: 'Lead Technical Artist',
    engine: 'Unity · Custom HLSL rendering',
    status: 'In development',
    summary:
      'Foundlings is a story-driven RPG revolving around a journey of maturing, self-discovery and forgiveness.\n' +
        '\n' +
        'Taking cues from classic SNES RPGs and adding a pinch of branching dialogue and character building, Foundlings seeks to explore new and exciting ways of crafting an RPG experience.',
    description:
      'Built a responsive combat architecture using an async/await state machine (30+ states) to deliver instant, cancellable attacks and dodges without nested coroutines. To maintain high performance, AI perception and data preparation were offloaded to the Job System with Burst Compilation, dropping main-thread frame time from ~14 ms to ~4 ms and holding a locked 60 FPS in scenes with 40+ active enemies. Rendering is handled by a hand-written HLSL shader library featuring a custom shadow system built entirely from scratch, keeping the full shadow pass under 2.5 ms at 1080p on a GTX 1660. Additionally, engineered a custom node-graph quest and dialogue editor over a ScriptableObject database—reducing narrative iteration time from ~3 hours to ~15 minutes and allowing 4 non-programmer team members to author over 100 nodes without engineering intervention.',
    tags: ["Unity", 'Action RPG', 'async/await combat', 'HLSL shadows', 'Job System', 'Editor tooling', 'Dialogue System/Nodes', 'UI/Hud/Menus'],
    cover: '/media/project-1-thumb.png',
    screenshots: ['/media/Games/foundlings 1.jpg', '/media/Games/foundlings 2.jpg', '/media/Games/foundlings 3.jpg'],
    videos: [],
    links: [{ label: 'View on Steam', href: 'https://store.steampowered.com/app/3784610/Foundlings/' }],
  },

  {
    slug: 'dino-island',
    title: 'Dino Island',
    category: 'Games',
    year: '2024',
    role: 'Unity Developer',
    engine: 'Unity',
    status: 'Released',
      summary: 'A 2D side-scrolling jungle survival-action game where you explore ancient ruins and ripe jungle terrain armed with a pistol, racing against a countdown timer while collecting pickups and dodging hazards. Hand-painted, atmospheric art gives it a lush, cinematic platformer feel.',
      description:
          "Optimized texture atlases and background art to shrink memory footprint and speed up web load, without losing the hand-painted jungle look. I tuned sprite batching to hold stable frame rates in-browser and built cross-platform controls for seamless desktop-to-touch play.",
      tags: ["Unity", '2D Platformer', 'Texture Optimization', 'Sprite Batching', 'Cross-platform Input', 'WebGL Performance'],
    cover: '/media/placeholder-dark.svg',
    screenshots: ['/media/Games/Island 1.png', '/media/Games/Island 2.png','/media/Games/Island 3.png',],
    videos: [{ src: '/media/video/Dino Isnalnd.mp4', poster: '/media/Games/Island 1.png', label: 'Gameplay' }],
  },

  {
    slug: 'street-fighter',
    title: 'Old Street Fighting',
    category: 'Games',
    year: '2024',
    role: 'Gameplay Programmer — Combat & Boss AI',
    engine: 'Unity · WebGL',
    status: 'Released',
    summary:
      'An arcade fighting game for the browser, built around a multi-phase boss encounter and held at 60 FPS inside a 256 MB WebGL heap.',
    description:
          "Built the arcade combat system — attack states, hit detection, reaction and stagger handling — and the 5-phase AI boss that closes the game. Every system was profiled on CPU and GPU to hold 60 FPS inside the browser's 256 MB memory ceiling, with hand - written HLSL shaders and batching passes cutting draw calls 35–50% across the project.",
      tags: ['Arcade Combat', 'Hit Detection/Stagger', 'Boss AI', 'HLSL Shaders', 'Draw Call Optimization', 'WebGL Porting', 'Memory Budgeting'],
    cover: '/media/project-2-thumb.png',
    screenshots: ['/media/Games/Fight 1.png', '/media/Games/Fight 2.png', '/media/Games/Fight 3.png'],
    videos: [{src: '/media/video/Street Fighter.mp4',poster: '/media/Games/Fight 1.png',label: 'Combat & boss fight',},
    ],
  },

  {
    slug: 'mini-golf',
    title: 'Mini Golf',
    category: 'Games',
    year: '2024',
    role: 'Unity Developer',
    engine: 'Unity',
    status: 'Released',
      summary: 'A charming low-poly 3D mini-golf game set across whimsical countryside courses — barns, fences, and rustic obstacles. Aim your shot, control power with an intuitive slider, and putt your way to par with a fully controllable third-person golfer and camera.',
    description:
      "Optimized 3D models, textures, and shaders across the countryside courses to bring GPU cost down for browser play, including LOD and draw-call reduction on foliage and props. I built cross-platform swing controls — mouse drag on PC, touch gestures on mobile — and localized course UI and hole indicators.",
      tags: ['3D Physics', 'Model/Texture Optimization', 'LOD', 'Shader Optimization', 'Cross-platform Input'],
    cover: '/media/placeholder-dark.svg',
    screenshots: ['/media/Games/golf 1.png', '/media/Games/golf 2.png'],
    videos: [{ src: '/media/video/Golf.mp4', poster: '/media/Games/golf 1.png', label: 'Gameplay' }],
  },

  {
    slug: 'dough-color-jam',
    title: 'Dough Color Jam',
    category: 'Games',
    orientation: 'portrait',
    year: '2025',
    role: 'Technical Lead',
    engine: 'Unity · URP · Android',
    status: 'Released on Google Play',
    summary:
      'A stylized clay-morphic mobile puzzle game holding a stable 60 FPS on 2 GB Android devices.',
    description:
      'Led the technical side: reworking the Canvas hierarchy to bring draw calls from ~180 down to ~45, authoring the signature clay-morphic Shader Graph materials inside a 1.2 ms GPU budget, and moving asset and level loading into async operations off the render thread — transition hitches went from ~600 ms to under 80 ms. The puzzle logic and meta-systems were built as independently testable C# modules, and the level-authoring tools I shipped took puzzle creation from ~40 minutes to ~5 minutes, letting designers produce 120+ levels unassisted.',
      tags: ['Mobile Puzzle', 'Shader Graph', 'Clay-morphic Shaders', 'Canvas Optimization', 'DOTween', 'Async Asset Loading', 'Level Editor Tooling', 'Monetization Systems'],
    cover: '/media/project-3-thumb.png',
    screenshots: ['/media/Games/dough 1.jpg', '/media/Games/dough 2.jpg', '/media/Games/dough 3.jpg', '/media/Games/dough 4.jpg'],
    videos: [],
      links: [{ label: 'View on Google Play', href: 'https://play.google.com/store/apps/details?id=com.garneti.doughjam&hl=en' }],
  },

  {
    slug: 'hotel-inverse',
    title: 'Hotel Inverse',
    category: 'Games',
    year: '2024',
    role: 'Unity Developer',
    engine: 'Unity',
    status: 'Released',
      summary: 'A first-person, tile-based dungeon-crawler RPG set inside a mysterious, decaying hotel. Battle enemies room-by-room in classic turn-based combat with a full stats/inventory system (HP, attack, defense, speed, adrenaline), find keycards to unlock elevators, and climb floor by floor. Moody pixel-art environments paired with a retro RPG combat log.',
    description:
      "Optimized lighting and shadow rendering across the low-poly hotel interiors to keep frame times low in WebGL, and compressed textures and UI assets for faster load. I added cross-platform input (mouse/keyboard and touch) and localized the combat log and menu text.",
      tags: ['Tile-based RPG', 'Turn-based Combat', 'Lighting/Shadow Optimization', 'Inventory/Stats UI', 'Cross-platform Input', 'Localization'],
    cover: '/media/placeholder-dark.svg',
    screenshots: ['/media/Games/Hotel 1.png', '/media/Games/Hotel 2.png', '/media/Games/Hotel 3.png'],
    videos: [{ src: '/media/video/Hotel.mp4', poster: '/media/Games/Hotel 1.png', label: 'Gameplay' }],
  },

  {
    slug: 'tiny-tower-defense',
    title: 'Tiny Tower Defense',
    category: 'Games',
    year: '2023',
    role: 'Unity Programmer',
    engine: 'Unity · WebGL · Yandex Games SDK',
    status: 'Released',
    summary:
      'A pixel-art tower defense game with a deep elemental crafting system — combine Earth, Fire, Water, and Energy towers (from slingshots and crossbows up to acid, magma, and EMP turrets) to fend off waves of enemies through winding maze levels. Classic wave-counter and gold-economy TD loop with lots of build variety.',
    description:
      "Optimized the particle and VFX systems behind each elemental tower — fire, water, energy — to hold performance during large multi-wave battles. I streamlined UI batching on the tower-shop sidebar, built responsive cross-platform input, and localized tower names, descriptions, and UI strings.",
      tags: ['Tower Defense', 'Adaptive UI', 'Particle/VFX Optimization', 'Yandex SDK Integration', 'Cross-platform Input', 'Localization'],
    cover: '/media/placeholder-dark.svg',
    screenshots: ['/media/Games/Tower 1.png', '/media/Games/Tower 2.png', '/media/Games/Tower 3.png'],
    videos: [{src: '/media/video/Tower.mp4', poster: '/media/Games/Tower 1.png', label: 'Gameplay',},
    ],
  },

  {
    slug: 'nethercard-kingdom',
    title: 'Nethercard Kingdom',
    category: 'Games',
    year: '2023',
    role: 'Unity Developer',
    engine: 'Unity',
    status: 'Released',
        summary: "A charming hand-drawn, black-and-white card-battler where you play unit cards to summon warriors, archers, and siege weapons that march across the battlefield to knock down the enemy's castle.Simple sketchbook art style paired with strategic lane- pushing card combat.",
    description:
      "Optimized the 2D rendering pipeline for the hand-drawn assets to cut texture memory and draw calls in-browser. I built cross-platform touch/mouse card interactions and handled localization of card text, unit descriptions, and battle-log messages.",
      tags: ['Card Battler', '2D Rendering Optimization', 'Cross-platform Input', 'Localization'],
    cover: '/media/placeholder-dark.svg',
    screenshots: ['/media/Games/Card 1.png', '/media/Games/Card 2.png', '/media/Games/Card 3.png'],
    videos: [
      { src: '/media/video/Card.mp4', poster: '/media/Games/Card 1.png', label: 'Gameplay' },
    ],
  },

  {
    slug: 'wolf-gun',
    title: 'Wolf Gun',
    category: 'Games',
    year: '2023',
    role: 'Unity Developer',
    engine: 'Unity',
    status: 'Released',
    summary:
      'A fast, blood-pumping top-down twin-stick shooter starring a gunslinging werewolf. Fight through wave-based rounds of mutant enemies, build up a rage meter, and spend earned currency in a between-round shop to upgrade weapons and stats. Bold neon-noir comic art style with a glitchy, high-energy presentation.',
    description:
      'Optimized the game for browser play, rebuilding particle and impact VFX to cut GPU overdraw while keeping the neon, high-energy visual style intact. I unified input handling for mouse/keyboard on PC and touch on mobile, and added localization support across the shop and HUD text.',
    tags: [
      'Twin-stick Shooter',
      'VFX Optimization',
      'Cross-platform Input',
      'Shop/Upgrade Systems',
      'Localization',
    ],
    cover: '/media/placeholder-dark.svg',
    screenshots: ['/media/Games/Wolf 1.png', '/media/Games/Wolf 2.png', '/media/Games/Wolf 3.png'],
    videos: [{ src: '/media/video/Wolf.mp4', poster: '/media/Games/Wolf 1.png', label: 'Gameplay' }],
  },

  {
    slug: 'fruit-match',
    title: 'Fruit Match',
    category: 'Games',
    year: '2022',
    role: 'Unity Developer',
    engine: 'Unity',
    status: 'Released',
    summary:
      'A cozy tile-matching puzzle game in the mahjong/triple-match style — clear stacked tiles of fruits and gems against a beautiful, ever-changing scenic sky backdrop. Includes boosters like shuffle, undo, and hints for a relaxed, casual play session.',
    description:
      'Optimized background art and tile textures for fast web loading and smooth transitions, and implemented canvas batching to keep performance consistent across devices. I built cross-platform tap/click input and localized level text, currency labels, and store UI.',
    tags: [
      'Match/Puzzle',
      'Canvas Batching',
      'Texture Optimization',
      'Cross-platform Input',
      'Localization',
    ],
    cover: '/media/placeholder-dark.svg',
    screenshots: ['/media/Games/fruits 1.png', '/media/Games/fruits 2.png'],
    videos: [],
  },

  // ===========================================================================
  //  APPLICATIONS  — non-game apps and client work.
  // ===========================================================================

  {
    slug: 'pepsi-project',
    title: 'Pepsi Project',
    category: 'Applications',
    year: '2025',
    role: 'Unity Developer',
    engine: 'Unity',
    status: 'Client work',
      summary: 'Built for a Pepsi bottling factory to train line workers to visually identify defective products before they ship. Workers rotate a fully modeled, photorealistic 3D bottle and can jump between "Bottle Problems," "Label Problems," and a "Quick Quiz" mode, with 13+ interactive hotspots calling out real defect types (damaged caps, seam issues, torn/faded/wrinkled labels) alongside real reference photos, plus a live FPS/GPU/CPU performance overlay for QA builds.',
    description:
      "Modeled and textured the bottle and label assets myself, building photorealistic meshes and materials so defects read exactly as they would on the real production line. I built the interactive 3D hotspot system that lets workers click through numbered defect points on the rotating bottle model, and the side-by-side comparison UI for the label-defect gallery (good vs. damaged label pairs pulled from real product photography). I optimized the models, textures and shaders to keep the photoreal viewer smooth in real time, and built the quiz mode — including the scoring and question logic — following the client's training guidelines.",
      tags: ['3D Training Simulator', 'Photorealistic Modeling', 'Photorealistic Texturing', 'Interactive Hotspot System', 'Quiz/Scoring Logic', 'Shader Optimization'],
    cover: '/media/placeholder-dark.svg',
    screenshots: ['/media/Games/Pepsi 1.png', '/media/Games/Pepsi 2.png', '/media/Games/Pepsi 3.png'],
    videos: [{ src: '/media/video/Pepsi.mp4', poster: '/media/Games/Pepsi 1.png', label: 'Walkthrough' }],
  },

  {
    slug: 'school-application',
    title: 'School Application',
    category: 'Applications',
    year: '2025',
    role: 'Unity Developer',
    engine: 'Unity',
    status: 'Released',
        summary: "Educational 3D/simulation tool for Turkish schools. A multi-module science education app covering biology, physics, and chemistry topics through interactive 3D models and live simulations: a fully labeled, rotatable animal cell model with 11 + numbered organelle hotspots, a particle - physics simulation showing states of matter with a live temperature slider(Celsius scale from - 273°C to 200°C), a labeled 3D satellite model, and additional interactive 3D diagrams(coil / loop structures) for other topics.",
    description:
      "Modeled all the 3D assets myself — the cell and its organelles, the satellite, and the other diagram models — and built the interactive hotspot/labeling system reused across every module. I implemented the real-time particle simulation driving the states-of-matter demo, with particle behavior responding live to the temperature slider. I optimized the models and shaders for stable performance across modules, and handled cross-platform input so the app works with mouse/keyboard and touch alike.",
          tags: ['Educational Simulation', '3D Modeling', 'Interactive Hotspot System', 'Particle Physics Simulation', 'Cross-platform Input', 'Addressables/Remote Content'],
    cover: '/media/placeholder-dark.svg',
    screenshots: ['/media/Games/School 1.png', '/media/Games/School 2.png', '/media/Games/School 3.png', '/media/Games/School 4.png', '/media/Games/School 5.png', '/media/Games/School 6.png'],
    videos: [
      { src: '/media/video/School.mp4', poster: '/media/Games/School 1.png', label: 'Walkthrough' },
    ],
  },

  // ===========================================================================
  //  ASSETS  — tools, packs, plugins, systems you made and can share/sell.
  // ===========================================================================

  {
    slug: 'shadow-system',
    title: 'Shadow System',
    category: 'Assets',
    year: '2026',
    role: 'Author',
    engine: 'Unity · C# · Job System + Burst',
    status: 'Personal project',
    summary:
      'Infinite streamed terrain generation running entirely on worker threads, holding 60 FPS on desktop.',
    description:
      'Terrain chunks are generated and streamed with the Unity Job System and Burst, so generation never touches the main thread and the camera never stalls while new ground loads in. Built as a study in keeping heavy generation work off the render path — the same pattern behind the AI and data-prep jobs in my production work.',
    tags: ['Procedural gen', 'Job System', 'Burst', 'Multithreading'],
    cover: '/media/asset-1-thumb.png',
    screenshots: ['/media/asset-1-thumb.png', '/media/asset-1-shot-1.png'],
    videos: [
      {
        src: '/media/terrain-generator.mp4',
        poster: '/media/asset-1-shot-1.png',
        label: 'Streaming terrain walkthrough',
      },
    ],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/IhorMatlashov' }],
  },
  {
    slug: 'dialogue-system',
    title: 'Dialogue System',
    category: 'Assets',
    year: '2026',
    role: 'Author',
    engine: 'Unity · C# · Job System + Burst',
    status: 'Personal project',
    summary:
        'Infinite streamed terrain generation running entirely on worker threads, holding 60 FPS on desktop.',
    description:
        'Terrain chunks are generated and streamed with the Unity Job System and Burst, so generation never touches the main thread and the camera never stalls while new ground loads in. Built as a study in keeping heavy generation work off the render path — the same pattern behind the AI and data-prep jobs in my production work.',
    tags: ['Procedural gen', 'Job System', 'Burst', 'Multithreading'],
    cover: '/media/asset-1-thumb.png',
    screenshots: ['/media/asset-1-thumb.png', '/media/asset-1-shot-1.png'],
    videos: [],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/IhorMatlashov' }],
  },
  {
    slug: 'animation-system',
    title: 'Animation System',
    category: 'Assets',
    year: '2026',
    role: 'Author',
    engine: 'Unity · C# · Job System + Burst',
    status: 'Personal project',
    summary:
        'Infinite streamed terrain generation running entirely on worker threads, holding 60 FPS on desktop.',
    description:
        'Terrain chunks are generated and streamed with the Unity Job System and Burst, so generation never touches the main thread and the camera never stalls while new ground loads in. Built as a study in keeping heavy generation work off the render path — the same pattern behind the AI and data-prep jobs in my production work.',
    tags: ['Procedural gen', 'Job System', 'Burst', 'Multithreading'],
    cover: '/media/asset-1-thumb.png',
    screenshots: ['/media/asset-1-thumb.png', '/media/asset-1-shot-1.png'],
    videos: [],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/IhorMatlashov' }],
  },
  {
    slug: 'font-redactor',
    title: 'Font Redactor',
    category: 'Assets',
    year: '2026',
    role: 'Author',
    engine: 'Unity · C# · Job System + Burst',
    status: 'Personal project',
    summary:
        'Infinite streamed terrain generation running entirely on worker threads, holding 60 FPS on desktop.',
    description:
        'Terrain chunks are generated and streamed with the Unity Job System and Burst, so generation never touches the main thread and the camera never stalls while new ground loads in. Built as a study in keeping heavy generation work off the render path — the same pattern behind the AI and data-prep jobs in my production work.',
    tags: ['Procedural gen', 'Job System', 'Burst', 'Multithreading'],
    cover: '/media/asset-1-thumb.png',
    screenshots: ['/media/asset-1-thumb.png', '/media/asset-1-shot-1.png'],
    videos: [],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/IhorMatlashov' }],
  },
  {
    slug: 'missing-scripts',
    title: 'Missing Scripts',
    category: 'Assets',
    year: '2024',
    role: 'Author',
    engine: 'Unity · C# · Job System + Burst',
    status: 'Personal project',
    summary:
        'Infinite streamed terrain generation running entirely on worker threads, holding 60 FPS on desktop.',
    description:
        'Terrain chunks are generated and streamed with the Unity Job System and Burst, so generation never touches the main thread and the camera never stalls while new ground loads in. Built as a study in keeping heavy generation work off the render path — the same pattern behind the AI and data-prep jobs in my production work.',
    tags: ['Procedural gen', 'Job System', 'Burst', 'Multithreading'],
    cover: '/media/asset-1-thumb.png',
    screenshots: ['/media/asset-1-thumb.png', '/media/asset-1-shot-1.png'],
    videos: [],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/IhorMatlashov' }],
  },

  // ===========================================================================
  //  3D ARTS  — models, characters, environments, and renders.
  // ===========================================================================

  {
    slug: 'cartoon-heir',
    title: 'Cartoon Heir',
    category: '3D Arts',
    year: '',
    role: '',
    engine: 'ZBrush',
    status: 'Freelance',
    summary:
      'Creating smooth soft cartoon heir for characters for a cartoon',
    description:
      '',
    tags: ["Zbrush", "Cartoon Heir"],
    cover: '/media/art-1-thumb.png',
    screenshots: ['/media/3D models/Heir 1.jpg', '/media/3D models/Heir 2.jpg', '/media/3D models/Heir 3.jpg'],
    videos: [],
  },
  {
    slug: 'crown',
    title: 'Crown',
    category: '3D Arts',
    year: '',
    role: '',
    engine: 'Maya',
    status: 'Freelance',
    summary:
        'Crown for Vodafone ads',
    description:
        '',
    tags: ["Maya"],
    cover: '/media/art-1-thumb.png',
    screenshots: ['/media/3D models/Crown 1.jpg', '/media/3D models/Crown 2.jpg'],
    videos: [],
  },
]

// What the site actually renders: everything above, minus the categories
// switched off in `hiddenCategories`.
export const projects: Project[] = allProjects.filter(
  (p) => !hiddenCategories.includes(p.category),
)

// ---------------------------------------------------------------------------
//  Automatic project count shown under the hero ("12 projects").
//  Add or remove a project above and this updates by itself.
//  To change WHICH categories are counted, edit `countedCategories` near the
//  top of this file.
// ---------------------------------------------------------------------------
export const projectCount = projects.filter((p) => countedCategories.includes(p.category)).length
