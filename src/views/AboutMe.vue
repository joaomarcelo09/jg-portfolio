<template>
  <div>
    <div class="section">
      <div class="d-flex">
        <div class="mt-4">
          <h3 class="mb-3">Informações</h3>
          <p>
            Meu nome é João Gomes, 21 anos. <br />
            Atualmente moro no Rio de Janeiro. <br />
            Me aventuro em computação desde os 10 anos. <br />
          </p>
          <h3 class="mb-3 mt-5">Entre em contato pelo linkedin ou pelo email</h3>
          <div class="d-flex">
            <div v-for="cont in contacts" :key="cont.link">
              <a :href="cont.link" target="_blank">
                <img :src="cont.icon" alt="Contact Icon" class="icon-contact" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5">
    <h2 class="text-center">Trajetória</h2>
    <div class="section">
      <div class="d-flex" v-for="about in about_me" :key="about.title">
        <div class="mt-4">
          <h3 class="mb-5">{{ about.title }}</h3>
          <p v-for="desc in about.description" :key="desc">{{ desc }}</p>
        </div>
        <img v-if="about.image" :src="about.image" alt="Education Icon" class="icon-mine" />
      </div>
    </div>
  </div>
</template>

<script setup>
const contacts = [
  {
    icon: '/linkedin.png',
    link: 'https://www.linkedin.com/in/joao-marcelo-a31b75206/'
  },
  {
    icon: '/gmail.png',
    link: 'https://www.linkedin.com/in/joao-marcelo-a31b75206/'
  }
]
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
a:hover {
  background-color: transparent !important;
}

.section {
  width: 100%;
  padding: 2rem;
  border-top: 3px solid;
}

.icon-contact {
  width: 2rem;
  margin-right: 0.5rem;
}

.icon-mine {
  width: 15rem;
}

.section-header {
  margin-bottom: 1rem;
}
</style>
