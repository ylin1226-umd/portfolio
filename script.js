

/* =====================================================================
   EDIT HERE. Everything on the site is generated from the SITE object.

   PHOTOS: every image slot looks for a file in the "images" folder next
   to this HTML file. Until the file exists, the slot shows a dashed box
   telling you the exact file name to use. To attach a photo, either save
   it with that exact name, or change the name in the P("...") call.
   Images are never cropped.

   LINKS: put your Figma links in the `link: { url: "" }` fields.
   A button only appears once a url is filled in.

   NEW PROJECT: copy one entry in `projects`, change its id and text.
   ===================================================================== */
const P = (file, alt, hint, shape = "landscape", cap = "") => ({ src: "images/" + file, alt, hint, shape, cap });

const SITE = {
  name: "Yi-Chen Lin",
  roleLine: "UX design · UX research",
  intro: "HCI graduate student at the University of Maryland with a background in English Literature and theatre, focused on user-centered design and research.",
  cover: P("cover-crocus.jpg", "Crocus flower with glowing bokeh lights", "Your crocus cover photo", "landscape"),
  contact: {
    email: "ylin1226@umd.edu",
    linkedin: "https://www.linkedin.com/in/yi-chen-lin-a50bab3ab/",
    handshake: "https://app.joinhandshake.com/profiles/5e4ndh",
    location: "Maryland · seeking UX design and research internships, summer 2027",
    resume: "Yi-Chen-Lin-Resume/Yi-Chen-Lin-Resume.pdf",
    note: "I’d love to hear about your team. The best way to reach me is by email."
  },

  about: {
    nickname: "Yi-Chen Lin",
    portrait: P("portrait.jpg", "Portrait of Yi-Chen Lin", "Your portrait", "portrait"),
    paragraphs: [
      "I am an HCI graduate student at the University of Maryland, building on a degree in English Literature from National Central University, Taiwan, and hands-on experience in theatre.",
      "I’m fascinated by the different stories people carry with them—how their experiences shape the way they speak, act, and connect with others. This curiosity is also what draws me to HCI: understanding people and designing with their experiences in mind.",
      "Photography has also been a longtime hobby of mine, giving me a way to document what I see while traveling with friends and family. In the future, I hope to continue using it to capture memorable moments from events. The crocus photo on the cover is my proudest one to date."
    ]
  },

  offer: {
    title: "How I work",
    text: "I start by asking people what they need, then turn their answers into clear flows. Theatre taught me to see a character from the inside as an actress and from the outside through costume, so I check my designs from both the user's view and the page's. In group work, I make sure everyone has been heard before we decide."
  },

  roles: {
    title: "Where my skills fit",
    items: [
      { title: "UX Designer", lines: ["I turn user pain points into simple flows and Figma prototypes.", "My two case studies take an idea from research and sketches.."] },
      { title: "UX Researcher", lines: ["I start from what people say and do, then turn it into pain points, personas and design decisions.", "In Discover Tohoku, I gathered feedback from three travelers on a group trip. In Little Reborne, I worked from survey data and competitor reviews."] }
    ]
  },

  projects: [
    /* ---------------------------------------------------------------- */
    {
      id: "little-reborne",
      title: "Little Reborne & Co.",
      tagline: "A resale app that gives kids’ clothes a second life",
      summary: "A mobile app concept that helps parents resell and discover gently used children’s clothes, built around sustainability, convenience and community.",
      facts: [["Role", "UX Designer"], ["Duration", "3 weeks"], ["Project type", "Individual, UX online course"], ["Tools", "Figma, paper sketches"]],
      thumb: P("lr-thumb.jpg", "Little Reborne & Co. app screens on a phone", "Product mockup: Home + Add Item screens on a phone", "wide"),
      hero: P("lr-hero.jpg", "Little Reborne & Co. final screens in a device mockup", "Product mockup: final Home, Product and Pick-up screens", "wide"),
      problem: {
        statement: "Children outgrow clothes every 6 to 12 months, so parents keep spending time and money on new ones. Reselling the old ones takes too much effort, which is why 25% keep them unused in the closet and 19% throw them away.",
        hmw: "How might we make reselling and finding secondhand kids’ clothes quick enough for a busy parent?",
        goal: "Design a mid-fidelity mobile prototype in 3 weeks that lets parents browse, filter and post children’s clothes for resale."
      },
      cards: [
        {
          title: "Parents want to pass clothes on, if it’s easy",
          items: [
            { big: "79%", text: "would lend out outgrown clothes if it earned extra income and was convenient" },
            { big: "73%", text: "would share revenue if someone managed the whole process for them" },
            { big: "25%", text: "keep outgrown clothes unused in the closet" },
            { big: "19%", text: "admit throwing them away" }],
          insight: "Most parents are open to reselling, so the design should focus on cutting the effort.",
          note: "Source: The Rewear Company (2021), consumer research on reusing kidswear."
        },
        {
          title: "No app covers every way to reuse kids’ clothes",
          items: [
            { head: "Facebook Marketplace", text: "Huge reach, but built for every kind of product, not kids’ clothes." },
            { head: "Shein", text: "Fast and cheap, aimed at young women under 35. An indirect competitor." },
            { head: "Kidizen", text: "A marketplace for parents, but limited to buying and selling." }],
          insight: "I found no app that combines selling, buying, donating and lending kids’ clothes."
        },
        {
          wide: true, title: "Two parents who shaped the final design",
          text: "I've made two personasbased on the Rewear survey findings and my review of Kidizen and Facebook Marketplace listings. Each one drove specific decisions in the prototype.",
          personas: [
            {
              name: "Ashley", meta: "35 · Teacher · Married with one young child",
              photo: P("lr-persona-ashley.jpg", "Ashley, a 35-year-old teacher", "Persona photo (shown in full, never cropped)", "portrait"),
              quote: "I wish there were more than 24 hours in a day…",
              goals: ["Find a quick, easy solution for her daughter’s outgrown goods"],
              frustrations: ["Little time to dispose of goods between preparing meals and grading papers"],
              shaped: "Ashley’s lack of time led to a short, step-by-step Add Item flow and an Arrange Pick-up page, so listing is quick and a pickup is arranged for her."
            },
            {
              name: "Diane", meta: "40 · Stay-at-home mom of two",
              photo: P("lr-persona-diane.jpg", "Diane, a 40-year-old stay-at-home mom", "Persona photo (shown in full, never cropped)", "portrait"),
              quote: "They are growing a lot faster than I imagined!",
              goals: ["Establish a sustainable, safe and budget-friendly clothing cycle", "Find an app she can trust to buy and resell clothes"],
              frustrations: ["Unsure which apps are safe to buy from and pay through", "Wasting money on clothes that only last a few months before being outgrown"],
              shaped: "Diane's need for trust led to consistent colors and components, simple filter tags and undo for buying or listing mistakes. Her interest in donating became a future feature."
            }
          ]
        },
        {
          title: "From sketch to flow",
          text: "Paper wireframes focused on a step-by-step posting flow and a pickup arrangement page. I then digitized them into an interactive low-fidelity Figma flow to test the posting and browsing path.",
          photos: [
            P("lr-paper-wireframes.jpg", "Paper wireframes of the Little Reborne app", "Photo of your paper wireframes", "landscape"),
            P("lr-lowfi.jpg", "Low-fidelity Figma flow", "Screenshot of the low-fidelity flow", "landscape")]
        },
        {
          wide: true, title: "Final mid-fidelity prototype",
          list: [
            "Card components and filter tags for size, condition and season",
            "A search page",
            "Consistent colors and elements, so parents learn the system quickly",
            "Undo and error prevention when buying or listing"],
          photos: [P("lr-midfi-flow.jpg", "Mid-fidelity prototype flow in Figma", "Screenshot of the mid-fidelity flow, all screens", "wide")],
          link: { label: "Try the prototype", url: "https://www.figma.com/proto/WW5UnErj1QNPlO3XKeXOBH/Little-Reborne---Co.?node-id=1-2&t=v61Krxu2Z60V1sHo-1&starting-point-node-id=1%3A2" }
        },
        {
          wide: true, title: "Lessons and next steps",
          columns: [
            {
              title: "Lessons learned", list: [
                "This was my first case study, and Figma had a steep learning curve.",
                "Seeing my ideas take shape in an interactive prototype was rewarding.",
                 "I didn't test this prototype with participants because I didn't know where to find them. For my next project (Discover Tohoku), I interviewed real people from a group trip."]
            },
            {
              title: "What’s next", list: [
                "Test the prototype with real parents.",
                "Add lending, donation services and a saving function on the item upload page."]
            }]
        }
      ]
    },
    /* ---------------------------------------------------------------- */
    {
      id: "discover-tohoku",
      title: "Discover Tohoku",
      tagline: "A tourism app for less-visited places",
      summary: "An app concept that helps foreign tourists discover lesser-known attractions in Japan’s Tōhoku region, based on a group trip to Oshu City with the Tohoku University Japanese Program (TUJP).",
      facts: [["Role", "UX researcher & designer"], ["Duration", "2 weeks"], ["Project type", "Individual, based on a TUJP group trip"], ["Tools", "Figma, paper sketches"]],
      thumb: P("tohoku-thumb.jpg", "Discover Tohoku app screens on a phone", "Product mockup: Spot Details + tags screens on a phone", "wide"),
      hero: P("tohoku-hero.jpg", "Discover Tohoku final screens in a device mockup", "Product mockup: Homepage, Spot Details and Add Tags screens", "wide"),
      problem: {
        statement: "Tourists to Tōhoku struggle to find reliable information about smaller towns. Details are scattered across platforms, translated inconsistently and hard to navigate, so places like Oshu City, where locals want more visitors, stay overlooked.",
        hmw: "How might we give foreign tourists the confidence to visit lesser-known towns?",
        goal: "Prototype an app in 2 weeks that supports 1 to 2 key tasks: discovering attractions, filtering preferences and, later, travel bundles."
      },
      cards: [
        {
          title: "What our group saw in Oshu City",
          columns: [
            { title: "Strengths", list: ["A quiet town that is good for relaxing", "Abundant sights, culture and historical sites", "Hometown star Shohei Ohtani helps with marketing"] },
            { title: "Gaps", list: ["Few Halal food options", "Little multilingual signage", "Low publicity, so most foreigners haven’t heard of it"] }]
        },
        {
          title: "What three students from my group said (",
          items: [
            { quote: "The buses have good guides, but they’re hard to find. Plus the bus stations are quite faded so they are a bit hard to read.", who: "Dara, Canada" },
            { quote: "The city is a good place to relax and has a lot of tourism potential, but lacks exposure, maybe we can give people a reason to go there", who: "Hazim, Singapore" },
            { quote: "Nice place for slow paced travelers, and a good alternative from other popular spots. The problem is that not many people know where to go in this city.", who: "Qinhao, China" }]
        },
        {
          title: "Four pain points",
          items: [
            { head: "Language and culture", text: "Translation apps help, but signs in other languages would too." },
            { head: "Scattered commuting info", text: "Bus information exists but is hard to find." },
            { head: "Fear of wasting time", text: "Tourists hesitate to visit unknown places." },
            { head: "Uncertainty", text: "Tourists stick to famous sites, and small-town info rarely surfaces on Google." }],
          insight: "Tourists hesitate because they can't tell whether a small town is worth the trip, so each spot page needs to answer that quickly."
        },
        {
          title: "A gap between map apps and local guides",
          items: [
            { head: "Google Maps", text: "Comprehensive, reliable navigation for everyone, but generic." },
            { head: "Spotted by Locals", text: "Curated insider tips, mostly for European cities, with paid city guides." },
            { head: "Atlas Obscura", text: "A global catalog of unusual places, with paid unlocks." }],
          insight: "I aimed for Spotted by Locals’ local curation plus Atlas Obscura’s discovery angle, built for Tōhoku."
        },
        {
          wide: true, title: "Two users who shaped the final design",
          text: "My personas cover both sides of the platform: a visitor who needs answers and a local who can supply them.",
          personas: [
            {
              name: "Emma", meta: "25 · Student visiting from the US",
              photo: P("tohoku-persona-emma.jpg", "Emma, a 25-year-old visitor from the US", "Persona photo (shown in full, never cropped)", "portrait"),
              line: "A visitor who wants to explore beyond popular cities.",
              goals: ["Navigate Tōhoku with ease", "Explore another side of Japan"],
              frustrations: ["Hard-to-find commuting info", "Little online content about rural towns", "Unsure whether a trip is “worth it”"],
              shaped: "Emma’s doubts led to tags, etiquette notes and nearby transport info on each spot’s page, so she can judge a trip at a glance."
            },
            {
              name: "Hiroshi", meta: "34 · Local English teacher",
              photo: P("tohoku-persona-hiroshi.jpg", "Hiroshi, a 34-year-old local English teacher", "Persona photo (shown in full, never cropped)", "portrait"),
              quote: "My town has a lot of hidden gems to offer, but what is stopping the tourists from going there?",
              goals: ["Share his hometown’s hidden gems", "Correct misinformation online, such as seasonal closures"],
              frustrations: ["Foreign tourists struggle with confusing transport info and etiquette", "No time to write long, polished blogs"],
              shaped: "Hiroshi’s lack of time led to a short Add Info, Add Tags, Publish flow, so locals can share updates without writing a blog post."
            }
          ]
        },
        {
          title: "Sketching fast, then choosing content over maps",
          text: "I used the Crazy 8 method to avoid over-polishing, which slowed me down in my first case study. The sketches explored layouts for local insights and travel plans, such as nearby transport info on the details page. Midway I realized a map-heavy app was too ambitious and pivoted to a content-focused one.",
          photos: [P("tohoku-wireframes.jpg", "Crazy 8 paper wireframes", "Photo of your paper wireframes", "landscape")]
        },
        {
          wide: true, title: "Final mid-fidelity prototype",
          list: [
            "A minimalist layout so users aren’t overwhelmed",
            "Tags and etiquette notes for each spot",
            "Screens for browsing, spot details, a map, a profile and adding a spot"],
          photos: [P("tohoku-midfi-flow.jpg", "Mid-fidelity prototype flow in Figma", "Screenshot of the mid-fidelity flow, all screens", "wide")],
          link: { label: "Try the prototype", url: "https://www.figma.com/proto/e8j0d8dXpXSvnmXXSleqXc/Visit-Tohoku-App?node-id=61-811&p=f&t=p0EFnTYySSE1wS76-1&scaling=min-zoom&content-scaling=fixed&page-id=61%3A119&starting-point-node-id=61%3A838" }
        },
        {
          wide: true, title: "Lessons and next steps",
          columns: [
            {
              title: "Lessons learned", list: [
                "I tried Crazy 8 brainstorming, which I skipped in my first case study.",
                "A map-heavy app was too ambitious, so I pivoted to content.",
                "First-hand data from my group grounded my decisions in real user needs."]
            },
            {
              title: "What’s next", list: [
                "Run usability tests with tourists to refine navigation clarity.",
                "Add travel bundles, and test whether in app translation of signs and bus info solves the language pain point.",
                "Partner with local tourism boards to verify content."]
            }]
        }
      ]
    },
    /* ---------------------------------------------------------------- */
    {
      id: "theatre",
      title: "Theatre",
      tagline: "Onstage and ackstage work",
      summary: "My experiences in theatre as an actress and as part of the costume department, which sharpened my problem solving and teamwork.",
      facts: [["Role", "Actress; makeup & costume designer"], ["Duration", "24 weeks (Holy Crab!) and 26 weeks (Filial Cannibalism)"], ["Project type", "Two stage productions"]],
      thumb: [P("theatre-thumb-1.jpg", "Holy Crab! poster", "Holy Crab! poster", "portrait"),
      P("theatre-thumb-2.jpg", "Filial Cannibalism poster", "Filial Cannibalism poster", "portrait")],
      pills: ["Actress & costume designer", "2 plays · 24–26 weeks"],
      hero: [
        P("theatre-hero-1.jpg", "Holy Crab! poster", "Holy Crab! poster", "portrait"),
        P("theatre-hero-2.jpg", "Filial Cannibalism poster", "Filial Cannibalism poster", "portrait")
      ],
      problem: {
        title: "The challenge",
        statement: "Bring two very different characters to life, one by acting and one through makeup and costume, within tight rehearsal and backstage time limits.",
        goal: "Learn two ways to build a character, and make each character believable to an audience within the time I had."
      },
      cards: [
        {
          title: "Holy Crab!: playing my opposite",
          text: "I played Libby, a Times Square street performer whose real identity is the Statue of Liberty. She was my opposite in personality, which made the process more interesting. Before rehearsals I set her goals and divided each scene into “beats”, each with an objective, an obstacle and an action. This was my first experience of iterating.",
          items: [
            { head: "Beat 1: entering Times Square", text: "Objective: experience a day in the lives of the people I hold dear. Obstacle: Javier is yelling at a tourist. Action: shocked by the yelling." },
            { head: "Beat 2: a rude surprise", text: "Objective: grab my money back. Obstacle: Javier hurts me and I fall. Action: first shocked, I try to grab the money while panicking, then fall." }],
          photos: [P("theatre-holycrab-poster.jpg", "Holy Crab! poster", "Holy Crab! poster", "portrait")]
        },
        {
          title: "Learning to smile for real",
          text: "In rehearsal I was repeatedly told my smile didn't look genuine. I practiced expressions in front of a mirror, then stopped watching myself and focused on what Libby was feeling in the scene. By show day I had worked through my stage fright, though I'd spent weeks doubting I deserved the role.",
         photos: [
         P("theatre-rehearsal-1.jpg", "Rehearsal for Holy Crab!", "Rehearsal photo 1", "portrait"),
         P("theatre-rehearsal-2.jpg", "Rehearsal for Holy Crab!", "Rehearsal photo 2", "portrait"),
         P("theatre-holycrab-show-1.jpg", "Libby on stage as the Statue of Liberty", "Show-day photo 1", "portrait"),
         P("theatre-holycrab-show-2.jpg", "Cast of Holy Crab! on stage", "Show-day photo 2", "landscape")]
},
        {
          title: "Filial Cannibalism: fixing our costume brief", stack: true,
          text: "The play is set in the Taiwanese countryside near the sea in the 2010s. Our first costume ideas were too modern and stylish, so we revised them into a picture board for five characters, from Grandpa (75) to Pei Fen Chen (20), that fit the script.",
          photos: [
            P("theatre-costume-first.jpg", "First costume brainstorm board", "First brainstorm board (the too-modern one)", "landscape", "First idea: too modern and stylish for the setting"),
            P("theatre-costume-final.jpg", "Final costume picture board", "Final picture board", "landscape", "Final picture board that fit the script")]
        },
        {
          title: "Aging an actress by 30 years in under two hours",
          text: "I did the makeup for Mrs. Chen, a mother who had a hard life. To save time, I swept contour powder across the face to weather the skin, then focused on the details that signal age: eye wrinkles, marionette lines and eye bags.",
          photos: [
            P("theatre-makeup-before.jpg", "Actress before makeup", "Before photo", "portrait", "Before"),
            P("theatre-makeup-process.jpg", "Applying makeup backstage", "Process photo", "landscape", "Two hours later"),
            P("theatre-makeup-after.jpg", "Actress after makeup", "After photo", "portrait", "After")]
        },
        {
          wide: true, title: "Costume changes in under 20 seconds",
          text: "During the show we stood by backstage to help actors change clothes in under 20 seconds for some scenes. We rehearsed each change until it was repeatable, which kept errors out of the performances.",
          photos: [
            P("theatre-filial-show-1.jpg", "Scene from Filial Cannibalism", "Show photo 1", "landscape"),
            P("theatre-filial-show-2.jpg", "Scene from Filial Cannibalism", "Show photo 2", "landscape"),
            P("theatre-costume-team.jpg", "The costume and makeup team", "Costume & makeup team photo", "landscape", "The costume and makeup team")]
        },
        {
          wide: true, title: "What theatre taught me",
          text: "I learned two ways to build a character: embody their soul as an actress, or build their silhouette with costume. That mix of visual storytelling and human psychology shapes my design approach. In theatre I asked what a character wants and what stands in the way. In my personas I ask the same thing, as goals and frustrations.",
         note: "In group work, I bring the habits from backstage: preparing ahead, checking details, and staying calm when something changes mid-show."
}
]
}
],

  photography: {
    heading: "Photography",
    text: "A hobby I picked up to record trips with friends and family. Besides these photos, I can offer my photography skills to support the community during events, such as documenting student–faculty interactions.",
    galleries: [
      {
        title: "Water", photos: [
          P("photo-water-1.jpg", "Raindrops on an umbrella", "Raindrops", "portrait"),
          P("photo-water-2.jpg", "Ocean waves", "Ocean waves", "portrait"),
          P("photo-water-3.jpg", "Jellyfish in an aquarium", "Jellyfish", "portrait")]
      },
      {
        title: "Shades of blues", photos: [
          P("photo-blues-1.jpg", "Clownfish and anemones in an aquarium", "Aquarium", "portrait"),
          P("photo-blues-2.jpg", "Bay with a pine-covered sandbar", "Bay view", "portrait"),
          P("photo-blues-3.jpg", "Bay seen through a red heart frame", "Heart frame", "portrait")]
      },
      {
        title: "Light", photos: [
          P("photo-light-1.jpg", "Light through torii gates", "Torii gates", "portrait"),
          P("photo-light-2.jpg", "A deer in warm light", "Deer", "landscape"),
          P("photo-light-3.jpg", "Glowing hanging lanterns", "Lanterns", "landscape")]
      },
      {
        title: "Trip to NYC", photos: [
          P("photo-nyc-1.jpg", "A New York street", "Street", "portrait"),
          P("photo-nyc-2.jpg", "Times Square billboards", "Times Square", "portrait"),
          P("photo-nyc-3.jpg", "Statue of Liberty through leaves", "Statue of Liberty", "square")]
      },
      {
        title: "Poles", photos: [
          P("photo-poles-1.jpg", "Bird on a pole against clouds", "Bird on pole", "portrait"),
          P("photo-poles-2.jpg", "Moon behind a tower", "Moon and tower", "portrait"),
          P("photo-poles-3.jpg", "Ring lamp with the moon inside", "Ring lamp", "portrait")]
      }
    ]
  },

  ending: "Thanks for looking. If something here sparks an idea, I'd love to talk."
};

/* ---------- renderer (no need to edit below) ---------- */
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* If a photo file is missing, swap the broken image for a labelled slot. */
function phFallback(el) {
  const d = document.createElement("div");
  d.className = "ph " + (el.dataset.shape || "landscape");
  d.setAttribute("role", "img");
  d.setAttribute("aria-label", el.alt);
  d.innerHTML = "<span><b>Add image</b><br><code>" + esc(el.dataset.file) + "</code><br>" + esc(el.dataset.hint) + "</span>";
  el.replaceWith(d);
}

const fig = p => `<figure class="fig"><img src="${esc(p.src)}" alt="${esc(p.alt)}" data-file="${esc(p.src)}" data-hint="${esc(p.hint)}" data-shape="${esc(p.shape)}" loading="lazy" onerror="phFallback(this)">${p.cap ? `<figcaption>${esc(p.cap)}</figcaption>` : ""}</figure>`;
const thumbFig = t => Array.isArray(t) ? `<div class="duo">${t.map(fig).join("")}</div>` : fig(t);
const heroFig = h => Array.isArray(h) ? `<div class="hero-duo">${h.map(fig).join("")}</div>` : fig(h);
const ul = a => `<ul>${a.map(i => `<li>${esc(i)}</li>`).join("")}</ul>`;

const item = i => `<div class="item">${i.big ? `<div class="big">${esc(i.big)}</div>` : ""}${i.head ? `<h4>${esc(i.head)}</h4>` : ""}${i.text ? `<p>${esc(i.text)}</p>` : ""}${i.quote ? `<blockquote>“${esc(i.quote)}”</blockquote><p class="who">${esc(i.who)}</p>` : ""}</div>`;

const persona = x => `<div class="persona">${fig(x.photo)}<h4>${esc(x.name)}</h4><p class="muted">${esc(x.meta)}</p>
  ${x.quote ? `<blockquote>“${esc(x.quote)}”</blockquote>` : ""}${x.line ? `<p class="line">${esc(x.line)}</p>` : ""}
  <p class="lbl">Goals</p>${ul(x.goals)}<p class="lbl">Frustrations</p>${ul(x.frustrations)}
  <p class="shaped"><b>How this shaped the design.</b> ${esc(x.shaped)}</p></div>`;

const card = c => `<div class="card${c.wide ? " wide" : ""}">
  ${c.title ? `<h3>${esc(c.title)}</h3>` : ""}${c.text ? `<p>${esc(c.text)}</p>` : ""}
  ${c.list ? ul(c.list) : ""}
  ${c.items ? `<div class="items">${c.items.map(item).join("")}</div>` : ""}
  ${c.columns ? `<div class="cols">${c.columns.map(k => `<div><h4>${esc(k.title)}</h4>${ul(k.list)}</div>`).join("")}</div>` : ""}
  ${c.personas ? `<div class="personas">${c.personas.map(persona).join("")}</div>` : ""}
  ${c.insight ? `<p class="insight"><b>Key insight.</b> ${esc(c.insight)}</p>` : ""}
  ${c.photos ? `<div class="photos${c.uniform ? " uniform" : ""}${c.stack ? " stack" : ""}">${c.photos.map(fig).join("")}</div>` : ""}
  ${c.link && c.link.url ? `<a class="btn" href="${esc(c.link.url)}" target="_blank" rel="noopener">${esc(c.link.label)}</a>` : ""}
  ${c.note ? `<p class="note">${esc(c.note)}</p>` : ""}</div>`;

/* page templates */
function home() {
  const A = SITE.about;
  return `
<section id="top" class="hero wrap">
  <h1>${esc(SITE.name)}</h1><p class="role">${esc(SITE.roleLine)}</p><p class="intro">${esc(SITE.intro)}</p>
  <a class="btn" href="#/work">See my work</a>
  ${fig(SITE.cover)}
</section>
<section id="about" class="block wrap">
  <h2>About me</h2>
  <div class="about"><div>${fig(A.portrait)}</div><div><p class="nick">${esc(A.nickname)}</p>${A.paragraphs.map(p => `<p>${esc(p)}</p>`).join("")}</div></div>
  <div class="card" style="margin-top:2rem"><h3>${esc(SITE.offer.title)}</h3><p>${esc(SITE.offer.text)}</p></div>
</section>
<section id="roles" class="block wrap">
  <h2>${esc(SITE.roles.title)}</h2>
  <div class="cards">${SITE.roles.items.map(r => `<div class="card role-card"><h3>${esc(r.title)}</h3>${r.lines.map(l => `<p class="line">${esc(l)}</p>`).join("")}</div>`).join("")}</div>
</section>
<section id="work" class="block wrap">
  <h2>Selected work</h2>
  <div class="thumbs">${SITE.projects.map(p => `<a class="thumb" href="#/${esc(p.id)}">${thumbFig(p.thumb)}
    <div class="body"><h3>${esc(p.title)}</h3><p>${esc(p.tagline)}</p>
    ${(p.pills || [p.facts[0][1], p.facts[1][1]]).map(t => `<span class="pill">${esc(t)}</span>`).join("")}</div></a>`).join("")}</div>
</section>`;
}

function projectPage(p) {
  const i = SITE.projects.indexOf(p), n = SITE.projects.length;
  const prev = SITE.projects[(i + n - 1) % n], next = SITE.projects[(i + 1) % n];
  const pr = p.problem;
  return `<article class="wrap page">
  <a class="back" href="#/work">← All projects</a>
  <header class="phead"><h1>${esc(p.title)}</h1><p class="tagline">${esc(p.tagline)}</p><p class="lede">${esc(p.summary)}</p>
    <dl class="facts">${p.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
    ${heroFig(p.hero)}</header>
  <div class="card problem"><h2>${esc(pr.title || "Problem statement")}</h2><p class="statement">${esc(pr.statement)}</p>
    ${pr.hmw ? `<p><b>How might we:</b> ${esc(pr.hmw.replace(/^How might we /, ""))}</p>` : ""}
    ${pr.goal ? `<p><b>Goal:</b> ${esc(pr.goal)}</p>` : ""}</div>
  <div class="cards">${p.cards.map(card).join("")}</div>
  <nav class="pager" aria-label="Projects"><a href="#/${esc(prev.id)}">← ${esc(prev.title)}</a><a href="#/${esc(next.id)}">${esc(next.title)} →</a></nav>
</article>`;
}

function photoPage() {
  const ph = SITE.photography;
  return `<article class="wrap page"><a class="back" href="#/">← Home</a><h1 style="color:var(--gold);font-size:clamp(2.2rem,7vw,4rem)">${esc(ph.heading)}</h1><p class="lede">${esc(ph.text)}</p>
  ${ph.galleries.map(g => `<section class="series"><h2>${esc(g.title)}</h2><div class="masonry">${g.photos.map(fig).join("")}</div></section>`).join("")}</article>`;
}

/* contact and footer */
const C = SITE.contact;
const contactLinks = () => [
  C.email && `<a href="mailto:${esc(C.email)}">${esc(C.email)}</a>`,
  C.linkedin && `<a href="${esc(C.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`,
  C.handshake && `<a href="${esc(C.handshake)}" target="_blank" rel="noopener">Handshake</a>`,
  C.resume && `<a href="${esc(C.resume)}" target="_blank" rel="noopener">Resume</a>`
].filter(Boolean).join(" · ");

function contactSection() {
  const b = (href, label, ext) => `<a class="btn" href="${esc(href)}"${ext ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`;
  return `<section id="contact" class="block wrap"><h2>Contact</h2>
  <div class="card"><p class="lede">${esc(C.note)}</p>
  ${C.location ? `<p class="muted">${esc(C.location)}</p>` : ""}
  <p>${C.email ? b("mailto:" + C.email, "Email me", false) : ""}${C.linkedin ? b(C.linkedin, "LinkedIn", true) : ""}${C.handshake ? b(C.handshake, "Handshake", true) : ""}${C.resume ? b(C.resume, "Download resume", true) : ""}</p></div></section>`;
}
${C.email ? `<p class="muted">Or copy my email: ${esc(C.email)}</p>` : ""}


document.getElementById("foot").innerHTML = `<p>${esc(SITE.ending)}</p><b>Fin.</b>`;
const navCv = document.getElementById("navResume");
if (C.resume) navCv.href = C.resume; else navCv.remove();

/* ---------- tiny router: #/ , #/about , #/work , #/photography , #/<project-id> ---------- */
let shown = null;
function route() {
  const key = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
  const proj = SITE.projects.find(p => p.id === key);
  let page = "home", html = null, title = SITE.name + " — Portfolio", anchor = null, current = "home";
  if (proj) { page = proj.id; html = projectPage(proj); title = proj.title + " — " + SITE.name; current = "work"; }
  else if (key === "photography") { page = "photography"; html = photoPage(); title = "Photography — " + SITE.name; current = "photography"; }
  else if (key === "about" || key === "work" || key === "contact") { anchor = key; current = key; }
  if (shown !== page) {
    document.getElementById("app").innerHTML = html ?? (home() + contactSection());
    shown = page;
    if (!anchor) window.scrollTo({ top: 0, behavior: "instant" });
  }
  if (anchor) document.getElementById(anchor)?.scrollIntoView();
  document.title = title;
  document.querySelectorAll("nav.top a").forEach(a => {
    const h = a.getAttribute("href").replace(/^#\/?/, "") || "home";
    h === current ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current");
  });
}

/* scroll fade-in */
function reveal() {
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: .12 });
  document.querySelectorAll(".card,.persona,.series,.about").forEach(el => { el.classList.add("reveal"); io.observe(el); });
}
window.addEventListener("hashchange", () => { route(); reveal(); });
route(); reveal();

/* INTRO_MODE: "always" = every load (for testing)
               "session" = once per browser tab session (recommended when published)
               "once" = only the very first visit on a device */
const INTRO_MODE = "session";
function playIntro() {
  const onHome = location.hash.replace(/^#\/?/, "") === "";
  if (!onHome || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  if (INTRO_MODE !== "always") {
    const store = INTRO_MODE === "once" ? localStorage : sessionStorage;
    try { if (store.getItem("seenIntro")) return; store.setItem("seenIntro", "1"); } catch (e) { }
  }
  const o = document.createElement("div");
  o.className = "intro-ov";
  o.innerHTML = `<div class="stage"><img src="${esc(SITE.cover.src)}" alt="" onerror="this.style.display='none'">
    <span class="lamp l1"></span><span class="lamp l2"></span><span class="lamp l3"></span></div>
    <button class="skip" type="button">Skip</button>`;
  document.body.appendChild(o);
  document.body.classList.add("intro-on");
  let done = false;
  const end = () => {
    if (done) return; done = true;
    o.classList.add("out");
    document.body.classList.remove("intro-on");
    document.body.classList.add("rise");
    setTimeout(() => document.body.classList.remove("rise"), 2200);
    setTimeout(() => o.remove(), 1300);
  };
  o.querySelector(".skip").onclick = end;
  setTimeout(end, 5800);
}
playIntro();

/* light/dark theme switch */
const themeBtn = document.getElementById("themeBtn");
const curTheme = () => document.documentElement.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme:light)").matches ? "light" : "dark");
function setTheme(t, save) {
  document.documentElement.setAttribute("data-theme", t);
  themeBtn.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
  if (save) { try { localStorage.setItem("theme", t); } catch (e) { } }
}
setTheme(curTheme(), false);
const THEME_BG = { light: "#f4f0e2", dark: "#181300" };  /* same as --bg in each mode */
let switching = false;
themeBtn.addEventListener("click", () => {
  if (switching) return;
  const next = curTheme() === "dark" ? "light" : "dark";
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) { setTheme(next, true); return; }
  switching = true;
  themeBtn.classList.add("turn");
  setTimeout(() => themeBtn.classList.remove("turn"), 800);

  const r = themeBtn.getBoundingClientRect();
  const x = r.left + r.width / 2, y = r.top + r.height / 2;
  const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

  const veil = document.createElement("div");
  veil.className = "veil";
  veil.style.background = THEME_BG[next];
  document.body.appendChild(veil);

  veil.animate(
    { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
    { duration: 600, easing: "ease-in", fill: "forwards" }
  ).finished
    .then(() => {
      setTheme(next, true);   /* page switches while fully covered */
      return veil.animate({ opacity: [1, 0] }, { duration: 400, easing: "ease-out", fill: "forwards" }).finished;
    })
    .finally(() => { veil.remove(); switching = false; });
});
