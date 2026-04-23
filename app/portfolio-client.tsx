"use client";

import { useEffect } from "react";

export default function PortfolioClient() {
  useEffect(() => {
    // ─── custom cursor ───
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    let rafId = 0;
    let cursorAttached = false;

    let tx = 0, ty = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (dot) dot.style.transform = `translate3d(${tx}px,${ty}px,0)`;
    };
    const tick = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      if (ring) ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      rafId = requestAnimationFrame(tick);
    };
    const hoverables = "a, button, [data-hover]";
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const t = target?.closest?.(hoverables);
      ring?.classList.toggle("is-link", !!t);
    };
    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (!related || !related.closest?.(hoverables)) {
        ring?.classList.remove("is-link");
      }
    };
    if (ring && dot) {
      cursorAttached = true;
      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("mouseover", onOver);
      document.addEventListener("mouseout", onOut);
      rafId = requestAnimationFrame(tick);
    }

    // ─── reveal on scroll ───
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "-8% 0px -8% 0px", threshold: 0.01 }
    );
    document.querySelectorAll(".reveal, .word-reveal").forEach((el) => io.observe(el));

    // ─── hero agent log — simulated stream ───
    const log = document.getElementById("agentLog");
    const lines = [
      '<span class="tok">&gt;</span> boot orchestrator.py ...',
      '<span class="tok">&gt;</span> load tool.registry [17 tools] <span class="tok">ok</span>',
      '<span class="tok">&gt;</span> agent.petition_writer :: init',
      '<span class="tok">&gt;</span> retrieve vector_store(q="case.brief") → 12 hits',
      '<span class="tok">&gt;</span> route → judge_profiler <span class="tok">✓</span>',
      '<span class="tok">&gt;</span> validate human_in_loop :: awaiting input',
      '<span class="tok">&gt;</span> compose petition.draft v3 → 1,842 tok',
      '<span class="tok">&gt;</span> stream.end <span class="tok">·</span> uptime 99.2%',
    ];
    let i = 0;
    let logInterval: ReturnType<typeof setInterval> | null = null;
    const step = () => {
      if (!log) return;
      const el = document.createElement("div");
      el.className = "line";
      el.innerHTML = lines[i % lines.length];
      log.innerHTML = "";
      log.appendChild(el);
      i++;
    };
    if (log) {
      step();
      logInterval = setInterval(step, 2400);
    }

    // ─── project filters ───
    const filters = document.getElementById("filters");
    const grid = document.getElementById("projectsGrid");
    const onFilterClick = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const btn = target?.closest<HTMLElement>(".chip");
      if (!btn || !filters || !grid) return;
      filters.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.getAttribute("data-filter");
      grid.querySelectorAll<HTMLElement>(".p-card").forEach((card) => {
        const show = f === "all" || card.getAttribute("data-cat") === f;
        card.classList.toggle("p-hidden", !show);
      });
    };
    filters?.addEventListener("click", onFilterClick);

    // ─── mobile nav drawer ───
    const toggleBtn = document.getElementById("menuToggle");
    const closeBtn = document.getElementById("drawerClose");
    const backdrop = document.getElementById("navBackdrop");
    const drawer = document.getElementById("navDrawer");
    const drawerLinks = drawer?.querySelectorAll<HTMLAnchorElement>("a") ?? [];

    const setDrawerOpen = (open: boolean) => {
      toggleBtn?.classList.toggle("open", open);
      backdrop?.classList.toggle("open", open);
      drawer?.classList.toggle("open", open);
      toggleBtn?.setAttribute("aria-expanded", String(open));
      drawer?.setAttribute("aria-hidden", String(!open));
      backdrop?.setAttribute("aria-hidden", String(!open));
      document.body.classList.toggle("nav-open", open);
      toggleBtn?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    const onToggleClick = () =>
      setDrawerOpen(!drawer?.classList.contains("open"));
    const onBackdropClick = () => setDrawerOpen(false);
    const onDrawerLinkClick = () => setDrawerOpen(false);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && drawer?.classList.contains("open")) {
        setDrawerOpen(false);
      }
    };

    toggleBtn?.addEventListener("click", onToggleClick);
    closeBtn?.addEventListener("click", onBackdropClick);
    backdrop?.addEventListener("click", onBackdropClick);
    drawerLinks.forEach((a) => a.addEventListener("click", onDrawerLinkClick));
    document.addEventListener("keydown", onKeyDown);

    // ─── scroll hint fade on hero exit ───
    const scrollHint = document.querySelector<HTMLElement>(".scroll-hint");
    const hero = document.getElementById("home");
    let heroIo: IntersectionObserver | null = null;
    if (scrollHint && hero) {
      heroIo = new IntersectionObserver(
        ([entry]) => {
          scrollHint.classList.toggle("is-hidden", !entry.isIntersecting || entry.intersectionRatio < 0.25);
        },
        { threshold: [0, 0.25, 0.5, 1] }
      );
      heroIo.observe(hero);
    }

    return () => {
      if (cursorAttached) {
        window.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseover", onOver);
        document.removeEventListener("mouseout", onOut);
        cancelAnimationFrame(rafId);
      }
      io.disconnect();
      if (logInterval) clearInterval(logInterval);
      filters?.removeEventListener("click", onFilterClick);
      toggleBtn?.removeEventListener("click", onToggleClick);
      closeBtn?.removeEventListener("click", onBackdropClick);
      backdrop?.removeEventListener("click", onBackdropClick);
      drawerLinks.forEach((a) => a.removeEventListener("click", onDrawerLinkClick));
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("nav-open");
      heroIo?.disconnect();
    };
  }, []);

  return null;
}
