<template>
  <h1 class="text-center mb-4">Projetos</h1>
  <div class="row">
    <div class="col-md-4 mb-4" v-for="project in sortedProjects" :key="project.name">
      <div class="card h-100">
        <div class="card-body">
          <div class="d-flex card-title justify-content-between">
            <h3>{{ project.name }}</h3>
            <img v-if="project.icon" :src="project.icon" alt="Title Icon" class="title-icon" />
          </div>

          <p class="card-text">{{ project.description }}</p>
          <div class="card-text d-flex">
            <strong>Tecnologia(s):</strong>
            <div v-for="frame in project.frameworks" :key="frame">
              <img :src="frame" alt="Tecnology Icon" class="icon-tec" />
            </div>
          </div>
          <div class="group-btn mt-3">
            <a :href="project.githubLink" target="_blank" class="btn btn-primary">
              <img src="/githubicon.png" alt="GitHub Icon" class="github-icon" />
              Repositório
            </a>
            <a
              v-if="project.link"
              :href="project.githubLink"
              target="_blank"
              class="btn btn-primary"
            >
              Site
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    name: 'Unintegra',
    description:
      'Plataforma criada para recrutamento de pessoas para projetos de diferentes tópicos e gerenciamento de anúncio de vagas para esse projeto.',
    frameworks: ['/nest-js-icon.png'],
    githubLink: 'https://github.com/unintegra/backend',
    priority: 1
  },
  {
    name: 'Ficha Academia',
    icon: '/magic-hat.png',
    description:
      'Otimização de serviços de academia como organização de fichas, registro de atletas e atribuições automáticas de fichas.',
    frameworks: ['/nest-js-icon.png', '/vueIcon.png'],
    githubLink: 'https://github.com/joaomarcelo09/ficha-acad-api',
    link: '',
    priority: 2
  },
  {
    name: 'JG Banking',
    description:
      'Desenvolvimento de uma API simulando atividades bancárias básicas como depósitos, saques, transações PIX e saldos.',
    frameworks: ['/nest-js-icon.png'],
    githubLink: 'https://github.com/joaomarcelo09/jg-banking-api',
    priority: 2
  },
  {
    name: 'To Do List',
    icon: '/magic-hat.png',

    description:
      'Criação de uma ferramenta de organização de tarefas para melhorar a produtividade diária, permitindo o compartilhamento de tarefas com outros usuários.',
    frameworks: ['spring-boot-icon.png'],
    githubLink: 'https://github.com/joaomarcelo09/to-do-list-java',
    priority: 1
  }
]

function sortProjects(projects) {
  return projects.sort((a, b) => a.priority - b.priority)
}

const sortedProjects = sortProjects(projects)
</script>

<style scoped>
h1 {
  color: #ffffff;
}

.title-icon {
  width: 2rem;
  height: 2rem;
  margin-left: 1rem;
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
  height: 3rem;
  border-bottom: 2px solid #e0e0e0;
  color: #ffffff;
}

.card-text {
  color: #e0e0e0;
}

.icon-tec {
  width: 24px;
  margin-left: 0.5rem;
  border-radius: 8px;
}

.github-icon {
  width: 24px;
  margin-right: 10px;
}
</style>
