<script setup lang="ts">
// No components needed for this minimal design
</script>

<template>
  <div class="container">
    <header class="profile">
      <h1>David</h1>
      <div class="social-links">
        <a href="https://x.com/realdume" class="social-link"
          ><i class="pi pi-twitter"></i
        ></a>
      </div>
      <p class="bio">Im usually building apps and tools</p>
    </header>

    <main>
      <h2>things i've built</h2>
      <div class="projects">
        <a href="https://www.fanta.chat/" target="_blank" class="project">
          <span class="project-emoji">🚀</span>
          <span class="project-name">Fanta Chat</span>
          <span class="project-desc">(AI Fantasy Football Assistant)</span>
          <span class="arrow">→</span>
        </a>
        <a href="https://www.shardicbot.com/" target="_blank" class="project">
          <span class="project-emoji">🚀</span>
          <span class="project-name">Shardic Bot</span>
          <span class="project-desc"
            >(Blockchain-based bot for onchain token analysis)</span
          >
          <span class="arrow">→</span>
        </a>
        <a
          href="https://apps.apple.com/us/app/chartwiz-ai-chart-trading/id6742327246"
          target="_blank"
          class="project"
        >
          <span class="project-emoji">🚀</span>
          <span class="project-name">Chartwiz</span>
          <span class="project-desc">(iOS app)</span>
          <span class="arrow">→</span>
        </a>
        <a
          href="https://cutter-image.vercel.app"
          target="_blank"
          class="project"
        >
          <span class="project-emoji">🚀</span>
          <span class="project-name">Image Cutter</span>
          <span class="project-desc">(simple image cutter)</span>
          <span class="arrow">→</span>
        </a>
        <a
          href="https://potion-leaderboard.vercel.app"
          target="_blank"
          class="project"
        >
          <span class="project-emoji">🚀</span>
          <span class="project-name">Potion Leaderboard</span>
          <span class="project-desc">(Crypto Leaderboard)</span>
          <span class="arrow">→</span>
        </a>
      </div>
      <p class="footer">+ many more</p>
      <p class="footer">
        dm me on
        <a href="https://x.com/realdume" class="link" target="_blank">x</a>
        to chat about your project
      </p>
    </main>
  </div>
</template>

<style lang="scss">
@import "primeicons/primeicons.css";

.footer {
  text-align: center;
  margin-top: 2rem;
  color: var(--text-secondary);

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 1.5rem;
  }
}

.link {
  color: var(--text-primary);
  text-decoration: underline;
}

:root {
  --text-primary: #e1e1e1;
  --text-secondary: #8b8b8b;
  --bg-color: #0a0a0a;
  --hover-color: #1a1a1a;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--bg-color);
  color: var(--text-primary);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 1rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
}

.profile {
  text-align: left;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  .social-links {
    margin: 1rem 0;

    .social-link {
      color: var(--text-secondary);
      text-decoration: none;
      margin-right: 1rem;
      font-size: 1.2rem;

      &:hover {
        color: var(--text-primary);
      }
    }
  }

  .bio {
    color: var(--text-secondary);
    max-width: 500px;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
}

.projects {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .project {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-primary);
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 4px;
    transition: background-color 0.2s;
    flex-wrap: wrap;

    @media (max-width: 480px) {
      font-size: 0.9rem;
      padding: 0.75rem 0.5rem;
    }

    &:hover {
      background-color: var(--hover-color);
    }

    .project-emoji {
      font-size: 1.2rem;

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    }

    .project-name {
      font-weight: 500;
    }

    .project-desc {
      color: var(--text-secondary);

      @media (max-width: 480px) {
        width: 100%;
        margin-left: 1.75rem;
        margin-top: 0.25rem;
      }
    }

    .arrow {
      margin-left: auto;
      color: var(--text-secondary);

      @media (max-width: 480px) {
        display: none;
      }
    }
  }
}
</style>
