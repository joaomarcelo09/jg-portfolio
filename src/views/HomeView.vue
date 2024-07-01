<template>
  <div class="container">
    <div class="section">
      <div class="section-header">
        <h2>Sobre Mim</h2>
      </div>
      <div class="card">
        <p>
          Sou João Gomes, um desenvolvedor Full Stack com experiência no desenvolvimento e
          manutenção de aplicações web. Possuo habilidades em Java, Spring Boot, Vue.js, Node.js e
          diversas outras tecnologias. Comprometido com aprendizado contínuo e melhoria.
        </p>
      </div>
    </div>

    <div class="section">
      <div class="section-header">
        <h2>Experiência Profissional</h2>
      </div>
      <!-- <div class="card"> -->
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-content">
            <h3>01/2023 - 02/2024</h3>
            <p>
              Desenvolvedor Full Stack na Agência Novi, trabalhando em projetos variados com Vue.js,
              Pinia, Bootstrap, TypeScript, JavaScript, Node.js com Express, Sequelize e Prisma.
              Papel crucial no desenvolvimento do front-end e back-end, utilizando Scrum e práticas
              DevOps.
            </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <h3>03/2024 - Presente</h3>
            <p>
              Freelancer em desenvolvimento de back-end com Java e Spring Boot, focando em projetos
              que requerem escalabilidade e robustez. Mantendo habilidades atualizadas e colaborando
              em projetos diversos.
            </p>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>

    <div class="section">
      <div class="section-header">
        <h2>Contribuições Adicionais</h2>
      </div>
      <div class="card">
        <p>
          Trabalho ativamente em comunidades de desenvolvimento de código aberto, especialmente em
          projetos que utilizam Java. Contribuo para expandir meu conhecimento e compartilhar boas
          práticas com a comunidade global de desenvolvedores.
        </p>
      </div>
    </div>

    <div class="section">
      <div class="section-header">
        <h2>Educação</h2>
      </div>
      <!-- <div class="card"> -->
      <div class="education-card">
        <div class="education-content">
          <h3>Estácio de Sá</h3>
          <p>Bacharelado em Análise e Desenvolvimento de Software, 2023 - 2025</p>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}

p {
  color: #ffffff;
}

h2 {
  color: #04aa6d;
}

.section {
  width: 100%;
  max-width: 800px;
  padding: 1.5rem;
  background-color: #333333;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
}

.section-header {
  text-align: center;
  margin-bottom: 1rem;
}

.card {
  padding: 1rem;
  background-color: #444444;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
}

.timeline {
  width: 100%;
}

.timeline-item {
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border-left: 0.25rem solid #04aa6d;
  background-color: #555555;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
}

.timeline-content h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #04aa6d;
}

.timeline-content p {
  margin: 0.5rem 0 0;
}

.education-card {
  padding: 1rem;
  background-color: #555555;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
}

.education-content h3 {
  color: #04aa6d;
  margin-bottom: 0.5rem;
}

.education-content p {
  margin: 0;
  color: #e0e0e0;
}
</style>
