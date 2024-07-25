<template>
  <div class="d-flex" v-for="adit in aditionals" :key="adit.title">
    <img v-if="adit.image_left" :src="adit.image_left" alt="Tecnology Icon" class="icon-tec" />

    <div class="section">
      <div class="section-header">
        <h2>{{ adit.title }}</h2>
      </div>
      <div class="mt-5" v-for="desc in adit.description" :key="desc">
        <p>
          {{ desc }}
        </p>
      </div>
    </div>
    <img v-if="adit.image_right" :src="adit.image_right" alt="Tecnology Icon" class="icon-tec" />
  </div>
</template>

<script setup>
const aditionals = [
  {
    title: 'BitWizards',
    image_right: '/magic-hat.png',
    image_left: '',
    description: [
      `BitWizards é o meu servidor de discord onde eu realizo projetos comunitários, é um servidor estruturado que visa receber outros desenvolvedores para desenvolver 
    nos projetos para adquirir experiência e promovendo o networking entre os desenvolvedores.`,
      `Os projetos são idealizados por mim e posteriormente procuro desenvolvedores que estão em busca de experiência na tecnologia
      utilizada, que normalmente é uma tecnologia de acordo com o mercado de trabalho, e também formar contatos trabalhando com 
      outros programadores, afinal o que somos sozinhos.`
    ]
  },
  {
    title: 'Unintegra',
    image_left: '/unintegra.png',
    description: [
      `Este é um projeto comunitário em que estou no cargo apenas de desenvolvedor back-end, lá utilizo nest js,
       prisma, docker, clean architecture, vitest e diversos. A funcionalidade do projeto é basicamente ser um hub onde as pessoas
       possam divulgar projetos de diversas áreas não só de tecnologia.`,
      `Entrei nesse projeto com o intuito de poder focar mais em fazer tarefas como desenvolvedor e não precisar pensar tanto
       em outros aspectos como gestão do projeto, por isso optei por entrar num projeto fora do BitWizards.`
    ]
  },
  {
    title: 'Stock',
    image_right: '/stock.png',
    description: [
      `Outro projeto comunitário que eu entrei apenas sendo desenvolvedor back-end, porém entrei nesse projeto pois o framework utilizado
      é o spring boot, então para ampliar meus conhecimentos práticos em JAVA faço parte da equipe em que desenvolve esse projeto.`
    ]
  }
]
</script>
<style scoped>
.section {
  width: 100%;
  padding: 1.5rem;
}

.icon-tec {
  width: 25rem;
}

.section-header {
  text-align: center;
  margin-bottom: 1rem;
}

h2 {
  color: #ffffff;
}
</style>
