<template>
  <div class="container mt-5">
    <div class="section" v-for="exp in experiencies" :key="exp.date">
      <div class="section-header d-flex justify-content-evenly">
        <h3>{{ exp.company }}</h3>
        <h3>{{ exp.date_init }} até {{ exp.date_end }}</h3>
      </div>
      <div class="timeline" v-for="section in exp.sections" :key="section.title">
        <div class="timeline-item">
          <h5 class="mt-2">{{ section.title }}</h5>
          <div class="timeline-content mt-4">
            <p>{{ section.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const experiencies = [
  {
    company: 'Agência Novi',
    date_init: '01/2023',
    date_end: '02/2024',
    sections: [
      {
        title: 'Chegando como estágio',
        description: `Desenvolvedor Full Stack na Agência Novi, trabalhando em projetos variados com Vue.js, Pinia, Bootstrap, 
        TypeScript, JavaScript, Node.js com Express, Sequelize e Prisma. Papel crucial no desenvolvimento do front-end e back-end, 
        utilizando Scrum e práticas DevOps.`
      },
      {
        title: 'Após o período de estágio',
        description: `Desenvolvedor Full Stack na Agência Novi, trabalhando em projetos variados com Vue.js, Pinia, Bootstrap, 
        TypeScript, JavaScript, Node.js com Express, Sequelize e Prisma. Papel crucial no desenvolvimento do front-end e back-end, 
        utilizando Scrum e práticas DevOps.`
      },
      {
        title: 'Responsável pelo back-end de um projeto',
        description: `Desenvolvedor Full Stack na Agência Novi, trabalhando em projetos variados com Vue.js, Pinia, Bootstrap, 
        TypeScript, JavaScript, Node.js com Express, Sequelize e Prisma. Papel crucial no desenvolvimento do front-end e back-end, 
        utilizando Scrum e práticas DevOps.`
      }
    ]
  },
  {
    company: 'Freelancer',
    date_init: '02/2024',
    date_end: 'o momento atual',
    sections: [
      {
        title: 'Fazendo projetos próprios',
        description: `Desenvolvedor Full Stack na Agência Novi, trabalhando em projetos variados com Vue.js, Pinia, Bootstrap, 
        TypeScript, JavaScript, Node.js com Express, Sequelize e Prisma. Papel crucial no desenvolvimento do front-end e back-end, 
        utilizando Scrum e práticas DevOps.`
      }
    ]
  }
]
</script>

<style scoped>
.section {
  width: 100%;
  padding: 1.5rem;
  border-bottom: 2px solid;
}

.section-header {
  text-align: center;
  margin-bottom: 1rem;
}

.timeline {
  width: 100%;
}

.timeline-item {
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border-left: 0.25rem solid #0b5ed7;
  background-color: #555555;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
}

.timeline-content h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #ffffff;
}

.timeline-content p {
  margin: 0.5rem 0 0;
}

p {
  color: #ffffff;
}

h3,
h5 {
  color: #ffffff;
}
</style>
