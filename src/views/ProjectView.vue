<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Projetos</h1>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="project in projects" :key="project.name">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="card-title text-primary">{{ project.name }}</h3>
            <p class="card-text">{{ project.description }}</p>
            <p class="card-text"><strong>Frameworks:</strong> {{ project.frameworks }}</p>
            <div class="group-btn">
              <a :href="project.githubLink" target="_blank" class="btn btn-primary">
                <img
                  src="../components/icons/githubicon.png"
                  alt="GitHub Icon"
                  class="github-icon"
                />
                Repositório
              </a>
              <a :href="project.githubLink" target="_blank" class="btn btn-primary"> Site </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    name: 'Ficha Academia',
    description:
      'Otimização de serviços de academia como organização de fichas, registro de atletas e atribuições automáticas de fichas.',
    frameworks: 'Nest.js e Vue.js',
    githubLink: 'https://github.com/joaomarcelo09/ficha-acad-api'
  },
  {
    name: 'JG Banking',
    description:
      'Desenvolvimento de uma API simulando atividades bancárias básicas como depósitos, saques, transações PIX e saldos.',
    frameworks: 'Nest.js',
    githubLink: 'https://github.com/joaomarcelo09/jg-banking-api'
  },
  {
    name: 'To Do List',
    description:
      'Criação de uma ferramenta de organização de tarefas para melhorar a produtividade diária, permitindo o compartilhamento de tarefas com outros usuários.',
    frameworks: 'Spring Boot',
    githubLink: 'https://github.com/joaomarcelo09/to-do-list-java'
  }
]
</script>

<style scoped>
h1 {
  color: #ffffff;
}

.group-btn {
  display: flex;
  gap: 1rem;
}

.card {
  background-color: #333333;
  color: #ffffff;
}

.card-title {
  color: #0b5ed7;
}

.card-text {
  color: #e0e0e0;
}

.github-icon {
  width: 24px;
  margin-right: 10px;
}
</style>
