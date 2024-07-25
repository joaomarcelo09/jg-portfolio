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
        description: `Em janeiro de 2023, fui contratado como estágio para o cargo de Desenvolvedor Fullstack por 6 meses, 
        comecei fazendo pequenas tarefas para me adaptar ao código, conforme eu completava mais tarefas minha confiança 
        crescia eu pegava tarefas cada vez com mais complexidade tanto no front como no back. Nesse momento eu estava trabalhando em um projeto
        que fazia parte de um ecossistema de projetos de advocacia, o projeto que eu estava trabalhando era um Blog e Saas onde tinham duas 
        interfaces uma de clientes que servia para ver o blog, ficar por dentro de notícias do mundo da advocacia mas também tinha uma área prática
        onde os advogados podiam pegar materais pré-definidos por especialistas para otimizar seu serviço como teses, jurisprudências, entre outros e outra do administrator onde servia
        justamente para administrar o que iria aparecer para o cliente nesses materiais, os conteúdos do blog e administrar os próprios usuários. Nesse projeto era utilizado vue 2 com 
        javascript no front e node express com sequelize no back end.`
      },
      {
        title: 'Após o período de estágio',
        description: `Após o contrato de estágio acabar, eu continuei na empresa porém agora tinha mais responsabilidades pelas tarefas que 
        eu pegava, nesse ponto que comecei a focar mais no back end onde podia aplicar mais a regra de negócio, tratativa de dados, fazia 
        consultas no banco de dados quando retornava algum erro de um usuário. Uma funcionalidade muito interessante em que eu participei da 
        criação foi a de relatar as atividades do usuário para fazer uma estatística sobre o que era mais usado na plataforma.`
      },
      {
        title: 'Responsável pelo back-end de um projeto',
        description: `Após o projeto acabar a sprint de novas funcionalidades no projeto que eu estava, fui direcionado para outro projeto do mesmo
        ecossistema, o projeto era um Saas que visava administração do que acontece num escritório de advocacia, tendo funcionalidades de controle de casos, reuniões, funcionários em que cada funcionário
        tinha um login no site, quantidade de gastos e lucros de cada caso e do escritório em geral, entre outras funcionalidades. Por um tempo, 
        eram dois programadores no back-end entretanto meu colega de trabalho foi redirecionado para outro projeto, fazendo com que eu ficasse responsável pelo back-end do projeto.`
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
        description: `Acabei sofrendo um lay-off na empresa, então em busca de voltar ao mercado de trabalho comecei a fazer projetos próprios
        primeiramente apenas para aprendizagem porém alguns tinham ideias que realmente poderiam ser vendidas, trabalhando em projetos sozinho me deu uma ampla experiência sobre criação
        de base-code, gestão de tarefas, perspectiva, análise e desenvolvimento de regras de negócio.`
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
  background-color: #343434;
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

h3,
h5 {
  color: #ffffff;
}
</style>
