<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h4>Redes Sociais</h4>
          <div class="social-icons">
            <a v-for="social in socialLinks" :key="social.name" :href="social.link" target="_blank">
              <!-- <img :src="social.icon" :alt="social.name" /> -->
              {{ social.name }}
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <h4>Contato</h4>
          <a href="https://w.app/JoaoGomes" target="_blank" class="btn btn-primary">
            <!-- <img src="./icons/wppicon.png" alt="WhatsApp" /> -->
            Converse diretamente comigo
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  {
    name: 'GitHub',
    icon: `"icons/githubicon.png"`,
    link: 'https://github.com/joaomarcelo09'
  },
  {
    name: 'LinkedIn',
    icon: 'icons/githubicon.png',
    link: 'https://www.linkedin.com/in/joao-marcelo-a31b75206/'
  },
  {
    name: 'Gmail',
    icon: 'icons/githubicon.png',
    link: 'mailto:jg0112360@gmail.com'
  }
]
</script>

<style scoped>
.footer {
  background-color: #333333;
  color: #ffffff;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.social-icons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.social-icons a img {
  width: 32px;
}
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #04aa6d;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
}
.btn-primary img {
  width: 24px;
  margin-right: 10px;
  background-color: none;
}
</style>
