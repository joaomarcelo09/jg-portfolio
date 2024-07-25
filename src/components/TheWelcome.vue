<template>
  <div class="portfolio-header">
    <h3 class="portfolio-title">João Gomes</h3>
    <img src="/java-icon.png" alt="Java Icon" class="icon-tec" />
  </div>
</template>

<style scoped>
.portfolio-header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.icon-tec {
  width: 30px;
  margin-left: 0.5rem;
  border-radius: 8px;
}

.portfolio-title {
  color: #e0e0e0;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
