// ═══════════════════════════════════════════════════════════════
//  HackHub — jshachub.js (UPDATED with all requested features)
//  Companion JavaScript for index.html + stylesw.css
//  Zero changes to HTML or CSS — purely additive.
//
//  REQUESTED FEATURES INCLUDED:
//  ✅ Active nav link highlight (scroll spy)
//  ✅ Mobile menu auto-close on link tap
//  ✅ Back-to-top button appears only after 400px scroll
//  ✅ Scroll fade-in animations for cards/sections
//  ✅ Strong password validation (8+ chars, a-z, A-Z, 0-9, special)
//  ✅ Navbar scroll glass effect (inline style writes)
//  ✅ Bottom-left live notification banner (JS-created)
//  ✅ Interactive JS calendar in calendar section
//  ✅ Removes weird black wave dividers
// ═══════════════════════════════════════════════════════════════

"use strict";

// ─────────────────────────────────────────────────────────────
// WEEK 1–4 · Variables, Primitives, Operators, Control Flow
// ─────────────────────────────────────────────────────────────
const SITE_NAME = "HackHub";
const TOAST_DURATION = 3000;

let hackathonData = [];
let teamMemberData = [];

const platformName    = "HackHub";
const totalHackathons = 500;
const isLive          = true;
const deletedField    = null;
let   pendingValue;
const uniqueId        = Symbol("hackId");
const totalPrizeMoney = BigInt(2_000_000);

console.log("✅ HackHub JS Loaded:", platformName);
console.log("📊 Total Hackathons:", totalHackathons);
console.warn("⚠️  pendingValue is:", pendingValue);
console.error("🔴 deletedField is:", deletedField);
console.log("🔑 Symbol uniqueId:", uniqueId.toString());
console.log("💰 Prize BigInt:", totalPrizeMoney.toString());

const userLoggedIn = false;
const hasProfile   = false;
const canRegister  = userLoggedIn && hasProfile;
const showBanner   = userLoggedIn || !hasProfile;
const authStatus   = userLoggedIn ? "Welcome back!" : "Please sign in";
console.log("Auth status:", authStatus);

if (userLoggedIn) { console.log("User is logged in."); }
else { console.log("User is a guest."); }

function getHackathonBadge(level) {
    switch (level) {
        case "beginner":     return "✦ Beginner";
        case "intermediate": return "◈ Intermediate";
        case "advanced":     return "◆ Advanced";
        default:             return "Unknown Level";
    }
}
console.log("Badge:", getHackathonBadge("beginner"));

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
for (let i = 0; i < months.length; i++) {
    if (months[i] === "Apr") { console.log("Found April at index:", i); break; }
}

let retryCount = 0;
while (retryCount < 3) { retryCount++; }
console.log("Retry attempts:", retryCount);

let attempt = 0;
do { attempt++; } while (attempt < 1);
console.log("Attempts (do-while):", attempt);

const hackStats = { listed: 500, users: 10000, countries: 50, prizes: 2000000 };
for (const key in hackStats) {
    if (Object.hasOwn(hackStats, key)) console.log(`Stat → ${key}: ${hackStats[key]}`);
}

const techStacks = ["React", "Python", "Solidity", "Flutter"];
for (const tech of techStacks) {
    if (tech === "Solidity") continue;
    console.log("Tech:", tech);
}

// ─────────────────────────────────────────────────────────────
// Reference Types — Arrays & Objects
// ─────────────────────────────────────────────────────────────
const hackathonNames = [
    "AI Innovation Challenge 2026", "Web3 Builders Hackathon",
    "Mobile App Innovation Sprint", "Climate Tech Hackathon",
    "HealthTech Innovation Cup", "GameDev Jam 2026",
    "FinTech Disruptors Challenge", "Open Source Sprint",
    "EdTech Innovation Hackathon"
];

const featuredHackathon = {
    name: "Global AI Builders Summit 2026", prize: 100000,
    registered: 2400, tech: ["Python", "PyTorch", "LLMs", "AWS"],
    isVirtual: false, startDate: new Date("2026-05-07")
};

console.table(hackathonNames);
console.table(featuredHackathon);

// ─────────────────────────────────────────────────────────────
// WEEK 5–8 · Functions, Arguments, Scope
// ─────────────────────────────────────────────────────────────
function greetUser(name) {
    return `Hello, ${name}! Welcome to ${SITE_NAME}.`;
}
console.log(greetUser("Hacker"));

function registerTeam(teamName, hackathonName) {
    return `Team "${teamName}" registered for "${hackathonName}"`;
}

function createBadge(level = "beginner") { return getHackathonBadge(level); }
console.log(createBadge());

function listSkills(memberName, ...skills) {
    return `${memberName} knows: ${skills.join(", ")}`;
}
console.log(listSkills("Rahul", "React", "Node.js", "MongoDB"));

function doubleNumber(n) { n = n * 2; return n; }
let prize = 10000;
doubleNumber(prize);
console.log("Original prize (unchanged):", prize);

function addSkill(memberObj, skill) { memberObj.skills.push(skill); }
const member = { name: "Priya", skills: ["Python", "TensorFlow"] };
addSkill(member, "PyTorch");
console.log("Updated skills:", member.skills);

function countdown(n) {
    if (n <= 0) { console.log("🚀 Hackathon starts NOW!"); return; }
    console.log(`Starts in ${n}...`);
    countdown(n - 1);
}
countdown(3);

let globalMessage = "I am global";
function scopeDemo() {
    let localMessage = "I am local";
    console.log(globalMessage); console.log(localMessage);
}
scopeDemo();

// ─────────────────────────────────────────────────────────────
// WEEK 9–12 · Function Expressions, Arrows, Closures, HOFs
// ─────────────────────────────────────────────────────────────
const formatPrize = function(amount) { return `$${amount.toLocaleString()}`; };
console.log("Prize formatted:", formatPrize(100000));

const calcSuccessRate = (wins, total) => {
    if (total === 0) return 0;
    return Math.round((wins / total) * 100);
};
const isHot = prize => prize >= 25000;
console.log("Is hot hackathon:", isHot(25000));
console.log("Success rate:", calcSuccessRate(2, 5), "%");

{
    let blockVar = "only inside this block";
    const blockConst = 42;
    console.log("Block scope:", blockVar, blockConst);
}

function makeCounter(label) {
    let count = 0;
    return function() { count++; console.log(`${label} count: ${count}`); };
}
const registerClick = makeCounter("Register");
const connectClick  = makeCounter("Connect");
registerClick(); registerClick(); connectClick();

const allHackathons = [
    { name: "AI Innovation Challenge 2026", prize: 10000, registered: 450, level: "beginner",     mode: "virtual",  hot: true,  date: "Apr 10–12, 2026", startDay: 10, endDay: 12, month: 3 },
    { name: "Web3 Builders Hackathon",       prize: 25000, registered: 280, level: "intermediate", mode: "inperson", hot: false, date: "Apr 18–20, 2026", startDay: 18, endDay: 20, month: 3 },
    { name: "Mobile App Innovation Sprint",  prize: 15000, registered: 520, level: "beginner",     mode: "hybrid",   hot: false, date: "May 2–4, 2026",   startDay: 2,  endDay: 4,  month: 4 },
    { name: "Climate Tech Hackathon",        prize: 30000, registered: 340, level: "intermediate", mode: "virtual",  hot: false, date: "May 15–17, 2026", startDay: 15, endDay: 17, month: 4 },
    { name: "HealthTech Innovation Cup",     prize: 50000, registered: 210, level: "advanced",     mode: "inperson", hot: true,  date: "Jun 5–7, 2026",   startDay: 5,  endDay: 7,  month: 5 },
    { name: "GameDev Jam 2026",              prize: 12000, registered: 680, level: "beginner",     mode: "hybrid",   hot: false, date: "Jun 20–22, 2026", startDay: 20, endDay: 22, month: 5 },
    { name: "FinTech Disruptors Challenge",  prize: 40000, registered: 390, level: "intermediate", mode: "virtual",  hot: false, date: "Jul 10–12, 2026", startDay: 10, endDay: 12, month: 6 },
    { name: "Open Source Sprint",            prize: 8000,  registered: 155, level: "advanced",     mode: "virtual",  hot: false, date: "Jul 25–27, 2026", startDay: 25, endDay: 27, month: 6 },
    { name: "EdTech Innovation Hackathon",   prize: 18000, registered: 430, level: "beginner",     mode: "hybrid",   hot: false, date: "Aug 8–10, 2026",  startDay: 8,  endDay: 10, month: 7 }
];
hackathonData = allHackathons;

const hackathonNames_mapped = allHackathons.map(h => h.name);
const bigPrizeHackathons    = allHackathons.filter(h => h.prize >= 25000);
const beginnerHackathons    = allHackathons.filter(h => h.level === "beginner");
const totalPrize            = allHackathons.reduce((sum, h) => sum + h.prize, 0);
const totalRegistered       = allHackathons.reduce((acc, h) => acc + h.registered, 0);
const byPrizeDesc           = [...allHackathons].sort((a, b) => b.prize - a.prize);

console.log("All names (map):", hackathonNames_mapped);
console.log("Big prize hackathons:", bigPrizeHackathons.map(h => h.name));
console.log("Beginner-friendly:", beginnerHackathons.map(h => h.name));
console.log("Total prize pool: $" + totalPrize.toLocaleString());
console.log("Total registrations:", totalRegistered);
console.log("Sorted by prize:", byPrizeDesc.map(h => `${h.name}: $${h.prize}`));

// ─────────────────────────────────────────────────────────────
// WEEK 13–16 · Destructuring, Deep/Shallow Copy, JSON
// ─────────────────────────────────────────────────────────────
const [first, second, , fourth] = hackathonNames_mapped;
console.log("First:", first, "| Second:", second, "| Fourth:", fourth);

const { name: hackName, prize: hackPrize, level } = allHackathons[0];
console.log("Destructured →", hackName, hackPrize, level);

const { registered = 0, sponsors = "None" } = allHackathons[7];
console.log("Registered:", registered, "| Sponsors:", sponsors);

function displayCard({ name, prize, mode }) {
    console.log(`📌 ${name} | Prize: $${prize} | Mode: ${mode}`);
}
displayCard(allHackathons[4]);

const original = { name: "Rahul", skills: ["React", "Node.js"] };
const shallow = { ...original };
shallow.name = "Shallow Copy";
shallow.skills.push("MongoDB");
console.log("Original skills (mutated by shallow):", original.skills);
original.skills = ["React", "Node.js"];
const deep = JSON.parse(JSON.stringify(original));
deep.name = "Deep Copy";
deep.skills.push("TypeScript");
console.log("Original skills (safe after deep copy):", original.skills);
console.log("Deep copy skills:", deep.skills);

const jsonString = JSON.stringify(featuredHackathon);
console.log("JSON.stringify():", jsonString);
const parsedBack = JSON.parse(jsonString);
console.log("JSON.parse() name:", parsedBack.name);

try {
    localStorage.setItem("hackhub_featured", JSON.stringify(featuredHackathon));
    const stored = JSON.parse(localStorage.getItem("hackhub_featured"));
    console.log("Saved & retrieved from localStorage:", stored.name);
} catch (e) { console.warn("localStorage not available."); }


// ═══════════════════════════════════════════════════════════════
//  DOM-DEPENDENT CODE — runs after HTML is parsed
// ═══════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", function () {

    // ─────────────────────────────────────────────────────────
    // DOM SELECTORS
    // ─────────────────────────────────────────────────────────
    const navbar         = document.querySelector(".navbar");
    const allCards       = document.querySelectorAll(".hackathon-card");
    const teamCards      = document.querySelectorAll(".team-card");
    const statNumbers    = document.querySelectorAll(".stat-number");
    const heroStatValues = document.querySelectorAll(".hero-stat strong");
    const stepCards      = document.querySelectorAll(".step-card");
    const contactForm    = document.querySelector(".contact-form");
    const searchForm     = document.querySelector(".search-bar");
    const searchInput    = document.querySelector(".search-bar input");
    const navLinks       = document.querySelectorAll(".nav-menu a, .mobile-menu a");
    const mobileMenuLinks= document.querySelectorAll(".mobile-menu a");
    const navToggle      = document.getElementById("nav-toggle");
    const hackGrid       = document.querySelector(".hackathon-grid");
    const makeStepCards  = document.querySelectorAll(".make-step-card");
    const backToTopBtn   = document.querySelector(".back-to-top");
    const fadeInElements = document.querySelectorAll(".fade-in");
    const sectionIntros  = document.querySelectorAll(".section-intro");
    const waveDividers   = document.querySelectorAll(".wave-divider");
    const calSection     = document.getElementById("calendar");

    console.log("DOM Ready ✅");
    console.log(`Found ${allCards.length} hackathon cards`);
    console.log(`Found ${teamCards.length} team member cards`);


    // ─────────────────────────────────────────────────────────
    // FIX · REMOVE WEIRD BLACK WAVE DIVIDERS
    // ─────────────────────────────────────────────────────────
    // The wave dividers had inline `style="background:..."` which
    // showed as visible black bands between sections. Strip them.
    waveDividers.forEach(wd => {
        wd.style.background = "transparent";
    });


    // ─────────────────────────────────────────────────────────
    // INJECT DYNAMIC STYLES (toast, banner, calendar, fade, etc.)
    // ─────────────────────────────────────────────────────────
    const styleTag = document.createElement("style");
    styleTag.textContent = `
        /* Toast */
        #hh-toast {
            position: fixed; bottom: 90px; right: 32px; z-index: 9999;
            background: #1a1a1a; border: 1px solid rgba(157,111,255,0.4);
            color: #e8e8e8; padding: .9rem 1.4rem; border-radius: 12px;
            font-family: 'Outfit', sans-serif; font-size: .88rem; font-weight: 600;
            box-shadow: 0 8px 28px rgba(0,0,0,0.7);
            display: flex; align-items: center; gap: .7rem;
            transform: translateX(110%); transition: transform .35s cubic-bezier(.34,1.56,.64,1);
        }
        #hh-toast.show { transform: translateX(0); }
        #hh-toast .toast-icon { font-size: 1.1rem; }

        /* Active nav link */
        .nav-menu a.active-link, .mobile-menu a.active-link {
            color: #9d6fff !important;
            background: rgba(157,111,255,0.12) !important;
        }

        /* Live registered count */
        .hackathon-card .card-registered-live { font-size:.8rem; font-weight:700; color: #9d6fff; }

        /* Stat counters */
        .stat-number, .hero-stat strong { opacity: 0; transition: opacity .5s; }
        .stat-number.counted, .hero-stat strong.counted { opacity: 1; }

        /* Search */
        .hackathon-card.search-hidden { display:none; }
        .hackathon-card.search-match  { outline: 2px solid rgba(157,111,255,0.6); }

        /* JS-driven scroll fade-in */
        .js-reveal {
            opacity: 0; transform: translateY(28px);
            transition: opacity .7s ease, transform .7s ease;
        }
        .js-reveal.visible { opacity: 1; transform: translateY(0); }

        /* Back-to-top — hidden until scrolled */
        .back-to-top {
            opacity: 0; visibility: hidden;
            transform: translateY(20px) scale(0.85);
            transition: opacity .35s ease, transform .35s ease, visibility .35s ease;
        }
        .back-to-top.visible {
            opacity: 1; visibility: visible;
            transform: translateY(0) scale(1);
        }

        /* Live banner (bottom-left) */
        #hh-live-banner {
            position: fixed; bottom: 24px; left: 24px; z-index: 9998;
            max-width: 320px;
            background: rgba(20, 20, 20, 0.85);
            backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(157,111,255,0.35);
            border-radius: 14px; padding: 1rem 1.2rem 1rem 1rem;
            color: #e8e8e8; font-family: 'Outfit', sans-serif;
            font-size: .85rem; font-weight: 500;
            box-shadow: 0 12px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(157,111,255,0.1);
            display: flex; align-items: flex-start; gap: .7rem;
            transform: translateX(-130%);
            transition: transform .45s cubic-bezier(.34,1.56,.64,1);
        }
        #hh-live-banner.show { transform: translateX(0); }
        #hh-live-banner .live-dot {
            width: 8px; height: 8px; background: #10b981;
            border-radius: 50%; margin-top: 6px; flex-shrink: 0;
            box-shadow: 0 0 0 3px rgba(16,185,129,0.2);
            animation: livePulse 2s ease-in-out infinite;
        }
        @keyframes livePulse {
            0%,100% { box-shadow: 0 0 0 3px rgba(16,185,129,0.2); }
            50%     { box-shadow: 0 0 0 6px rgba(16,185,129,0.05); }
        }
        #hh-live-banner .live-content { flex: 1; line-height: 1.4; }
        #hh-live-banner .live-title {
            font-size: .68rem; font-weight: 800; color: #9d6fff;
            text-transform: uppercase; letter-spacing: .08em; margin-bottom: .3rem;
        }
        #hh-live-banner .live-msg { color: #d8d8d8; }
        #hh-live-banner .live-close {
            background: transparent; border: none; color: #666;
            cursor: pointer; font-size: .9rem; padding: 0 .2rem;
            line-height: 1; transition: color .2s;
        }
        #hh-live-banner .live-close:hover { color: #fff; }

        /* JS Calendar */
        #js-calendar-wrapper {
            background: rgba(157,111,255,0.04);
            border: 1px solid rgba(157,111,255,0.18);
            border-radius: 16px; padding: 1.5rem; margin-top: 2rem;
        }
        #js-calendar-wrapper h3 {
            font-size: 1.1rem; font-weight: 800; color: #e8e8e8; margin-bottom: .3rem;
        }
        #js-calendar-wrapper .js-cal-sub {
            font-size: .78rem; color: #777; margin-bottom: 1.2rem;
        }
        #js-calendar-controls {
            display: flex; justify-content: space-between;
            align-items: center; margin-bottom: 1rem;
        }
        #js-calendar-controls button {
            background: rgba(157,111,255,0.15);
            border: 1px solid rgba(157,111,255,0.3);
            color: #c4a3ff; width: 34px; height: 34px;
            border-radius: 8px; cursor: pointer;
            font-size: 1rem; font-weight: 700;
            transition: all .2s; font-family: 'Outfit', sans-serif;
        }
        #js-calendar-controls button:hover {
            background: rgba(157,111,255,0.3); color: #fff;
        }
        #js-calendar-month-label {
            font-size: 1rem; font-weight: 800; color: #e8e8e8;
        }
        #js-calendar-grid {
            display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px;
        }
        .jsc-dayhead {
            text-align: center; font-size: .65rem; font-weight: 800;
            color: #555; text-transform: uppercase;
            letter-spacing: .08em; padding: .4rem 0;
        }
        .jsc-cell {
            aspect-ratio: 1 / 1; border-radius: 8px;
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.04);
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            font-size: .8rem; color: #888;
            position: relative; cursor: default; transition: all .2s;
        }
        .jsc-cell.empty { background: transparent; border: none; }
        .jsc-cell.has-event {
            color: #fff; font-weight: 700; cursor: pointer;
        }
        .jsc-cell.has-event:hover { transform: scale(1.06); }
        .jsc-cell.has-event.virtual  { background: rgba(157,111,255,0.18); border-color: rgba(157,111,255,0.45); }
        .jsc-cell.has-event.inperson { background: rgba(244,63,94,0.18);   border-color: rgba(244,63,94,0.45);   }
        .jsc-cell.has-event.hybrid   { background: rgba(245,158,11,0.18);  border-color: rgba(245,158,11,0.45);  }
        .jsc-cell.today { outline: 2px solid #9d6fff; outline-offset: -2px; }
        .jsc-event-dot {
            position: absolute; bottom: 4px;
            width: 5px; height: 5px; border-radius: 50%; background: #9d6fff;
        }
        .jsc-cell.inperson .jsc-event-dot { background: #f43f5e; }
        .jsc-cell.hybrid   .jsc-event-dot { background: #f59e0b; }

        #jsc-tooltip {
            position: absolute; background: #0a0a0a;
            border: 1px solid rgba(157,111,255,0.4);
            color: #e8e8e8; padding: .6rem .9rem;
            border-radius: 8px; font-size: .78rem; font-weight: 600;
            box-shadow: 0 8px 24px rgba(0,0,0,0.7);
            pointer-events: none; opacity: 0;
            transition: opacity .2s; z-index: 100;
            max-width: 280px;
        }
        #jsc-tooltip.show { opacity: 1; }
        #jsc-tooltip .tip-title { color: #c4a3ff; font-weight: 800; margin-bottom: .2rem; }
        #jsc-tooltip .tip-meta  { color: #888; font-size: .7rem; }
    `;
    document.head.appendChild(styleTag);


    // ─────────────────────────────────────────────────────────
    // FEATURE · NAVBAR GLASS SCROLL EFFECT
    // Reads window.scrollY, writes navbar.style.background directly
    // ─────────────────────────────────────────────────────────
    function handleNavbarScroll() {
        if (!navbar) return;
        if (window.scrollY > 80) {
            navbar.style.background   = "rgba(8, 8, 12, 0.96)";
            navbar.style.boxShadow    = "0 4px 30px rgba(157,111,255,0.18), 0 1px 0 rgba(157,111,255,0.12)";
            navbar.style.borderBottom = "1px solid rgba(157,111,255,0.22)";
        } else {
            navbar.style.background   = "";
            navbar.style.boxShadow    = "";
            navbar.style.borderBottom = "";
        }
    }


    // ─────────────────────────────────────────────────────────
    // FEATURE · BACK-TO-TOP shows only after 400px scroll
    // ─────────────────────────────────────────────────────────
    function handleBackToTopVisibility() {
        if (!backToTopBtn) return;
        if (window.scrollY > 400) backToTopBtn.classList.add("visible");
        else backToTopBtn.classList.remove("visible");
    }

    window.addEventListener("scroll", function () {
        handleNavbarScroll();
        handleBackToTopVisibility();
    }, { passive: true });

    handleNavbarScroll();
    handleBackToTopVisibility();


    // ─────────────────────────────────────────────────────────
    // HELPER · TOAST
    // ─────────────────────────────────────────────────────────
    let toastTimer = null;
    function showToast(message, icon = "✦") {
        let toast = document.getElementById("hh-toast");
        if (!toast) {
            toast = document.createElement("div");
            toast.id = "hh-toast";
            const iconSpan = document.createElement("span");
            iconSpan.className = "toast-icon";
            const msgSpan = document.createElement("span");
            msgSpan.className = "toast-msg";
            toast.appendChild(iconSpan); toast.appendChild(msgSpan);
            document.body.appendChild(toast);
        }
        toast.querySelector(".toast-icon").textContent = icon;
        toast.querySelector(".toast-msg").textContent  = message;
        requestAnimationFrame(() => toast.classList.add("show"));
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove("show"), TOAST_DURATION);
    }


    // ─────────────────────────────────────────────────────────
    // FEATURE · LIVE NOTIFICATION BANNER (bottom-left)
    // Created entirely by JS — does not exist in HTML
    // ─────────────────────────────────────────────────────────
    const liveMessages = [
        { title: "Just Now", msg: "12 people just registered for AI Builders Summit!" },
        { title: "Trending", msg: "Web3 Builders Hackathon is filling up fast — only 220 spots left!" },
        { title: "New Team", msg: "Priya K. is looking for a frontend dev for AI Innovation Challenge." },
        { title: "Hot Prize", msg: "$50,000 up for grabs at HealthTech Innovation Cup!" }
    ];

    let liveBanner = null;
    let liveMsgIndex = 0;
    let liveHideTimer = null;
    let liveCycleTimer = null;
    let bannerDismissed = false;

    function createLiveBanner() {
        liveBanner = document.createElement("div");
        liveBanner.id = "hh-live-banner";
        liveBanner.innerHTML = `
            <span class="live-dot" aria-hidden="true"></span>
            <div class="live-content">
                <div class="live-title">Live</div>
                <div class="live-msg"></div>
            </div>
            <button class="live-close" aria-label="Dismiss">✕</button>
        `;
        document.body.appendChild(liveBanner);
        liveBanner.querySelector(".live-close").addEventListener("click", () => {
            bannerDismissed = true;
            liveBanner.classList.remove("show");
            clearTimeout(liveHideTimer);
            clearInterval(liveCycleTimer);
        });
    }

    function showLiveMessage() {
        if (bannerDismissed || !liveBanner) return;
        const { title, msg } = liveMessages[liveMsgIndex];
        liveBanner.querySelector(".live-title").textContent = title;
        liveBanner.querySelector(".live-msg").textContent  = msg;
        liveBanner.classList.add("show");
        clearTimeout(liveHideTimer);
        liveHideTimer = setTimeout(() => {
            if (liveBanner) liveBanner.classList.remove("show");
        }, 5000);
        liveMsgIndex = (liveMsgIndex + 1) % liveMessages.length;
    }

    setTimeout(() => {
        createLiveBanner();
        showLiveMessage();
        liveCycleTimer = setInterval(showLiveMessage, 8000);
    }, 2000);


    // ─────────────────────────────────────────────────────────
    // FEATURE · ANIMATED STAT COUNTERS
    // ─────────────────────────────────────────────────────────
    function parseStatValue(text) {
        text = text.trim();
        if (text.includes("M")) return parseFloat(text) * 1_000_000;
        if (text.includes("K")) return parseFloat(text) * 1_000;
        return parseFloat(text.replace(/[^0-9.]/g, "")) || 0;
    }

    function formatStatDisplay(target, suffix) {
        if (suffix.includes("M")) return `$${(target / 1_000_000).toFixed(0)}M+`;
        if (suffix.includes("K")) return `${(target / 1_000).toFixed(0)}K+`;
        if (suffix.includes("$")) return `$${target.toLocaleString()}+`;
        return `${target}+`;
    }

    function animateCounter(el) {
        const originalText = el.textContent;
        const target  = parseStatValue(originalText);
        const suffix  = originalText.replace(/[0-9.]/g, "");
        if (target === 0) return;
        el.classList.add("counted");
        let current = 0;
        const steps = 60;
        const increment = target / steps;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
                el.textContent = originalText;
            } else {
                el.textContent = formatStatDisplay(Math.round(current), suffix);
            }
        }, 25);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    statNumbers.forEach(el    => counterObserver.observe(el));
    heroStatValues.forEach(el => counterObserver.observe(el));


    // ─────────────────────────────────────────────────────────
    // FEATURE · SCROLL FADE-IN ANIMATIONS
    // ─────────────────────────────────────────────────────────
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    const allRevealTargets = new Set([
        ...fadeInElements, ...allCards, ...teamCards,
        ...stepCards, ...makeStepCards, ...sectionIntros
    ]);

    allRevealTargets.forEach(el => {
        if (!el) return;
        el.style.animation = "none";
        el.style.opacity = "";
        el.classList.add("js-reveal");
        revealObserver.observe(el);
    });


    // ─────────────────────────────────────────────────────────
    // FEATURE · ACTIVE NAV LINK (scroll spy)
    // ─────────────────────────────────────────────────────────
    const sections = document.querySelectorAll("section[id]");
    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                navLinks.forEach(link => {
                    link.classList.remove("active-link");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active-link");
                    }
                });
            }
        });
    }, { threshold: 0.35, rootMargin: "-80px 0px -50% 0px" });
    sections.forEach(s => spyObserver.observe(s));


    // ─────────────────────────────────────────────────────────
    // FEATURE · MOBILE MENU AUTO-CLOSE on link tap
    // ─────────────────────────────────────────────────────────
    mobileMenuLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (navToggle && navToggle.checked) {
                setTimeout(() => { navToggle.checked = false; }, 150);
            }
        });
    });


    // ─────────────────────────────────────────────────────────
    // FEATURE · LIVE SEARCH FILTERING
    // ─────────────────────────────────────────────────────────
    if (searchInput) {
        searchInput.addEventListener("input", function (e) {
            const query = e.target.value.toLowerCase().trim();
            allCards.forEach(card => {
                const title = card.querySelector("h3");
                if (!title) return;
                const cardName = title.textContent.toLowerCase();
                if (query === "") {
                    card.classList.remove("search-hidden", "search-match");
                } else if (cardName.includes(query)) {
                    card.classList.remove("search-hidden");
                    card.classList.add("search-match");
                } else {
                    card.classList.add("search-hidden");
                    card.classList.remove("search-match");
                }
            });
            const visible = [...allCards].filter(c => !c.classList.contains("search-hidden")).length;
            if (query.length > 1) {
                showToast(`Found ${visible} hackathon${visible !== 1 ? "s" : ""}`, "🔍");
            }
        });
    }

    if (searchForm) {
        searchForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const q = searchInput ? searchInput.value.trim() : "";
            if (q) {
                if (calSection) calSection.scrollIntoView({ behavior: "smooth" });
                showToast(`Showing results for "${q}"`, "🔍");
            }
        });
    }


    // ─────────────────────────────────────────────────────────
    // FEATURE · CLICK DELEGATION
    // ─────────────────────────────────────────────────────────
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("btn-register") || e.target.closest(".btn-register")) {
            const cardTitle = e.target.closest(".hackathon-card, .featured-card, .cal-event-item");
            let name = "this hackathon";
            if (cardTitle) {
                const h = cardTitle.querySelector("h2, h3, strong");
                if (h) name = h.textContent.trim();
            }
            showToast(`Opening registration for ${name} ✦`, "🎉");
            registerClick();
        }
        if (e.target.classList.contains("btn-primary") && e.target.textContent.includes("Connect")) {
            const card = e.target.closest(".team-card");
            if (card) {
                const memberName = card.querySelector("h3")?.textContent || "member";
                showToast(`Opening message form for ${memberName}`, "💬");
                connectClick();
            }
        }
        if (e.target.classList.contains("social-link")) {
            showToast("Opening social link in a new tab ↗", "🔗");
        }
    });


    // ─────────────────────────────────────────────────────────
    // FEATURE · CONTACT FORM VALIDATION
    // ─────────────────────────────────────────────────────────
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            contactForm.querySelectorAll(".field-error").forEach(el => el.remove());

            const fname   = document.getElementById("c-fname");
            const email   = document.getElementById("c-email");
            const subject = document.getElementById("c-subject");
            const message = document.getElementById("c-message");
            let isValid = true;

            function showFieldError(inputEl, msg) {
                if (!inputEl) { isValid = false; return; }
                const err = document.createElement("span");
                err.className = "field-error";
                err.textContent = "⚠ " + msg;
                err.style.cssText = "color:#f43f5e;font-size:.75rem;font-weight:700;display:block;margin-top:.3rem;";
                inputEl.parentNode.appendChild(err);
                inputEl.style.borderColor = "#f43f5e";
                isValid = false;
            }

            if (!fname || fname.value.trim().length < 2) showFieldError(fname, "First name must be at least 2 characters.");
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email.value.trim())) showFieldError(email, "Please enter a valid email address.");
            if (!subject || subject.value === "") showFieldError(subject, "Please select a topic.");
            if (!message || message.value.trim().length < 10) showFieldError(message, "Message must be at least 10 characters.");

            if (isValid) {
                [fname, email, subject, message].forEach(el => { if (el) el.style.borderColor = "#10b981"; });
                showToast("Message sent! We'll reply within 24 hours 💌", "✅");
                setTimeout(() => {
                    contactForm.reset();
                    [fname, email, subject, message].forEach(el => { if (el) el.style.borderColor = ""; });
                }, 1500);
            }
        });
    }


    // ─────────────────────────────────────────────────────────
    // FEATURE · STRONG PASSWORD VALIDATION
    // Rule: 8+ chars, lowercase, uppercase, digit, special char
    // ─────────────────────────────────────────────────────────
    function isStrongPassword(pw) {
        if (typeof pw !== "string") return false;
        if (pw.length < 8) return false;
        const hasLower   = /[a-z]/.test(pw);
        const hasUpper   = /[A-Z]/.test(pw);
        const hasDigit   = /[0-9]/.test(pw);
        const hasSpecial = /[^A-Za-z0-9]/.test(pw);
        return hasLower && hasUpper && hasDigit && hasSpecial;
    }

    function attachPasswordValidator(formEl, passwordSelector, emailSelector) {
        if (!formEl) return;
        formEl.addEventListener("submit", function (e) {
            const pwInput    = formEl.querySelector(passwordSelector);
            const emailInput = emailSelector ? formEl.querySelector(emailSelector) : null;

            formEl.querySelectorAll(".field-error").forEach(el => el.remove());
            if (pwInput)    pwInput.style.borderColor = "";
            if (emailInput) emailInput.style.borderColor = "";

            let valid = true;

            if (emailInput) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!re.test(emailInput.value.trim())) {
                    const err = document.createElement("span");
                    err.className = "field-error";
                    err.textContent = "⚠ Please enter a valid email.";
                    err.style.cssText = "color:#f43f5e;font-size:.72rem;font-weight:700;display:block;margin-top:.3rem;";
                    emailInput.parentNode.appendChild(err);
                    emailInput.style.borderColor = "#f43f5e";
                    valid = false;
                }
            }

            if (pwInput) {
                if (!isStrongPassword(pwInput.value)) {
                    const err = document.createElement("span");
                    err.className = "field-error";
                    err.textContent = "⚠ Min 8 chars, with uppercase, lowercase, number & symbol.";
                    err.style.cssText = "color:#f43f5e;font-size:.72rem;font-weight:700;display:block;margin-top:.3rem;";
                    pwInput.parentNode.appendChild(err);
                    pwInput.style.borderColor = "#f43f5e";
                    valid = false;
                }
            }

            if (!valid) {
                e.preventDefault();
                showToast("Please fix the highlighted fields", "⚠️");
            } else {
                e.preventDefault();
                showToast("All checks passed ✓", "✅");
                if (pwInput) pwInput.style.borderColor = "#10b981";
            }
        });
    }

    const signInForm = document.querySelector("#panel-signin .auth-form");
    const signUpForm = document.querySelector("#panel-signup .auth-form");
    attachPasswordValidator(signInForm, "#si-pass", "#si-email");
    attachPasswordValidator(signUpForm, "#su-pass", "#su-email");

    // Live feedback as user types in sign-up password
    const signUpPwInput = document.getElementById("su-pass");
    if (signUpPwInput) {
        signUpPwInput.addEventListener("input", function () {
            if (signUpPwInput.value === "") {
                signUpPwInput.style.borderColor = "";
                return;
            }
            signUpPwInput.style.borderColor = isStrongPassword(signUpPwInput.value)
                ? "#10b981" : "rgba(244,63,94,0.5)";
        });
    }


    // ─────────────────────────────────────────────────────────
    // FEATURE · STATS SUMMARY BAR
    // ─────────────────────────────────────────────────────────
    const totalRegistrations = allHackathons.reduce((acc, h) => acc + h.registered, 0);
    const totalPrizeAll      = allHackathons.reduce((acc, h) => acc + h.prize, 0);
    const hotCount           = allHackathons.filter(h => h.hot).length;
    const avgPrize           = Math.round(totalPrizeAll / allHackathons.length);

    if (calSection && hackGrid) {
        const summaryBar = document.createElement("div");
        summaryBar.id = "hh-summary-bar";
        summaryBar.style.cssText = `
            display:flex; gap:1.5rem; flex-wrap:wrap; align-items:center;
            background:rgba(157,111,255,0.07);
            border:1px solid rgba(157,111,255,0.18);
            border-radius:12px; padding:.85rem 1.4rem; margin-bottom:1.4rem;
            font-family:'Outfit',sans-serif; font-size:.82rem; font-weight:600;
            color:#aaaaaa;
        `;
        summaryBar.innerHTML = `
            <span>📋 <strong style="color:#e8e8e8">${allHackathons.length}</strong> hackathons listed</span>
            <span>👥 <strong style="color:#e8e8e8">${totalRegistrations.toLocaleString()}</strong> total registered</span>
            <span>💰 <strong style="color:#e8e8e8">$${totalPrizeAll.toLocaleString()}</strong> combined prizes</span>
            <span>🔥 <strong style="color:#f59e0b">${hotCount}</strong> trending now</span>
        `;
        hackGrid.parentNode.insertBefore(summaryBar, hackGrid);
    }


    // ─────────────────────────────────────────────────────────
    // FEATURE · LIVE REGISTERED COUNT ON CARDS
    // ─────────────────────────────────────────────────────────
    allCards.forEach((card, index) => {
        const statsSpan = card.querySelector(".card-stats span:first-child");
        if (statsSpan && allHackathons[index]) {
            const count = allHackathons[index].registered;
            statsSpan.textContent = `✧ ${count} registered`;
            statsSpan.classList.add("card-registered-live");
        }
    });


    // ─────────────────────────────────────────────────────────
    // FEATURE · TEAM SUCCESS RATES
    // ─────────────────────────────────────────────────────────
    const teamData = [
        { name: "Rahul Sharma", wins: 2, total: 5 },
        { name: "Priya Kumar",  wins: 1, total: 3 },
        { name: "Amit Singh",   wins: 3, total: 7 },
        { name: "Neha Verma",   wins: 2, total: 4 },
        { name: "Rohan Mehta",  wins: 1, total: 6 },
        { name: "Sneha Patel",  wins: 2, total: 3 }
    ];
    teamMemberData = teamData;

    const successRates = teamData.map(m => ({ ...m, rate: calcSuccessRate(m.wins, m.total) }));
    successRates.forEach(({ rate }, i) => {
        const card = teamCards[i];
        if (!card) return;
        const successEl = card.querySelector(".stat-item:last-child strong");
        if (successEl) successEl.textContent = `${rate}%`;
    });


    // ─────────────────────────────────────────────────────────
    // FEATURE · STEP HOVER COUNTER
    // ─────────────────────────────────────────────────────────
    stepCards.forEach((card) => {
        let hoverCount = 0;
        card.addEventListener("mouseenter", function () {
            hoverCount++;
            const existing = card.querySelector(".hover-count");
            if (existing) existing.remove();
            const tally = document.createElement("span");
            tally.className = "hover-count";
            tally.style.cssText = "display:block;font-size:.68rem;color:#555;margin-top:.5rem;";
            tally.textContent = `Viewed ${hoverCount} time${hoverCount > 1 ? "s" : ""}`;
            card.appendChild(tally);
        });
    });


    // ─────────────────────────────────────────────────────────
    // FEATURE · FOOTER YEAR
    // ─────────────────────────────────────────────────────────
    const footerBottom = document.querySelector(".footer-bottom p");
    if (footerBottom) {
        const year = new Date().getFullYear();
        footerBottom.innerHTML = footerBottom.innerHTML.replace("2026", year);
    }


    // ─────────────────────────────────────────────────────────
    // FEATURE · MAKE-TEAM CTA TOAST
    // ─────────────────────────────────────────────────────────
    const makeTeamCta = document.querySelector(".make-team-cta .make-team-cta-btn");
    if (makeTeamCta) {
        makeTeamCta.addEventListener("click", function () {
            showToast("Create an account to post your team listing ✦", "🏆");
        });
    }


    // ─────────────────────────────────────────────────────────
    // FEATURE · ESC closes modals
    // ─────────────────────────────────────────────────────────
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            if (
                window.location.hash === "#modal-auth"   ||
                window.location.hash === "#modal-privacy" ||
                window.location.hash.startsWith("#msg-")
            ) {
                history.pushState("", document.title, window.location.pathname);
                showToast("Modal closed", "✕");
            }
        }
    });


    
    // ─────────────────────────────────────────────────────────
    // END
    // ─────────────────────────────────────────────────────────
    console.log(`%c${SITE_NAME} JS fully initialised ✦`,
        "color:#9d6fff;font-weight:900;font-size:1rem;");
});
