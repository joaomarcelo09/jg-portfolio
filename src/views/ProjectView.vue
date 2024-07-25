<template>
  <h1 class="text-center mb-4">Projetos</h1>
  <div class="row">
    <div class="col-md-4 mb-4" v-for="project in projects" :key="project.name">
      <div class="card h-100">
        <div class="card-body">
          <h3 class="card-title">{{ project.name }}</h3>
          <p class="card-text">{{ project.description }}</p>
          <div class="card-text d-flex">
            <strong>Tecnologia(s):</strong>
            <div v-for="frame in project.frameworks" :key="frame">
              <img :src="frame" alt="Tecnology Icon" class="icon-tec" />
            </div>
          </div>
          <div class="group-btn mt-3">
            <a :href="project.githubLink" target="_blank" class="btn btn-primary">
              <img src="../components/icons/githubicon.png" alt="GitHub Icon" class="github-icon" />
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
    name: 'Ficha Academia',
    description:
      'Otimização de serviços de academia como organização de fichas, registro de atletas e atribuições automáticas de fichas.',
    frameworks: ['/nest-js-icon.png', '/vueIcon.png'],
    githubLink: 'https://github.com/joaomarcelo09/ficha-acad-api',
    link: ''
  },
  {
    name: 'JG Banking',
    description:
      'Desenvolvimento de uma API simulando atividades bancárias básicas como depósitos, saques, transações PIX e saldos.',
    frameworks: ['/nest-js-icon.png'],
    githubLink: 'https://github.com/joaomarcelo09/jg-banking-api'
  },
  {
    name: 'To Do List',
    description:
      'Criação de uma ferramenta de organização de tarefas para melhorar a produtividade diária, permitindo o compartilhamento de tarefas com outros usuários.',
    frameworks: ['spring-boot-icon.png'],
    githubLink: 'https://github.com/joaomarcelo09/to-do-list-java'
  },
  {
    name: 'Unintegra',
    description:
      'Uma plataforma projetada para unir pessoas em projetos colaborativos quer de aprendizado, quer para serem reconhecidos mundialmente.',
    frameworks: ['/nest-js-icon.png'],
    githubLink: 'https://github.com/unintegra/backend'
  },
  {
    name: 'Stock',
    description:
      'Sistema que visa a gestão da logística dos produtos de lojas, otimizando o serviço de organização e controlando melhor os dados.',
    frameworks: ['spring-boot-icon.png'],
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
