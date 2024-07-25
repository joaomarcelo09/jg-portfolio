<template>
  <div class="section">
    <div class="d-flex" v-for="about in about_me" :key="about.title">
      <div class="card mt-4">
        <h2 class="mb-4">{{ about.title }}</h2>
        <p v-for="desc in about.description" :key="desc">{{ desc }}</p>
      </div>
      <img v-if="about.image" :src="about.image" alt="Education Icon" class="icon-mine" />
    </div>
  </div>
</template>

<script setup>
const about_me = [
  {
    title: 'Aos 12 anos, programando plugins de servidor...',
    image: '/steve.png',
    description: [
      `Quando criança, jogava muito Minecraft e queria ter meu próprio servidor no jogo,
    por conta disso, fui atrás de formas de tornar meu servidor uma realidade, o que na época não era 
    tão fácil, pois só existia o Minecraft JAVA então programar os plugins demandaram conhecimento, mas eu pude
    sentir desde cedo o gosto pela programação.
    `,
      `Eu fiz servidores localmente mas para conseguir jogadores, precisava aprender sobre hospedagem de servidores e foi o que fiz.`,
      `Depois de conseguir hospedar meu servidor, chegou a hora de lidar com os plugins que iriam definir a estrutura
    do servidor, sobre o que ele iria ser, um dos plugins era o permissions que era responsável por qual grupo seria
    de qual jogador e o que esse grupo tinha permissão de fazer, assim por exemplo se criavam os vips nos servidores que tinham
    algumas vantagens sobre os outros membros.`
    ]
  },
  {
    title: 'Finalmente reencontrando o JAVA',
    image: '',
    description: [
      `Após 8 anos, desde que tive o primeiro contato com plugins, finalmente entrei como programador em uma empresa, não era utilizado JAVA porém pude utilizar conhecimentos que já havia contato
      como pensamento lógico, algoritmo, soluções de problemas. São coisas que você desenvolve construindo um servidor no Minecraft.`,
      `Mas claro que um programador que jogou Minecraft por tanto tempo, tinha que conhecer o JAVA, então no final de 2023 tive acesso a um minicurso
      de JAVA onde pude me aprofundar um pouco mais na linguagem porém dessa vez para desenvolvimento WEB.`
    ]
  }
]
</script>

<style scoped>
.section {
  width: 100%;
  padding: 2rem;
  background-color: #333333;
  background-image: url('/fundomine.png');

  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
}

.icon-mine {
  width: 15rem;
}

.section-header {
  margin-bottom: 1rem;
}

.card {
  padding: 1rem;
  background-color: #444444;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
}
</style>
