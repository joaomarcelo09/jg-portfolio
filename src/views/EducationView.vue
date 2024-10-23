<template>
  <div class="section">
    <div class="education-card">
      <div class="education-content">
        <h3 class="mb-4">Universidade Estácio de Sá</h3>
        <div class="d-flex">
          <p>
            Estou cursando Análise e Desenvolvimento de Sistemas, acredito que o curso está sendo de
            grande importância para a construção de uma base de conhecimento no que tange a área de
            desenvolvimento. Tenho contato com uma gama de teorias que completam minha rotina diária
            na programação.
          </p>
          <img src="/education.png" alt="Education Icon" class="icon-education" />
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="section">
    <div class="education-card">
      <div class="education-content">
        <h3 class="mb-5">Certificados de cursos:</h3>
        <img src="/certificado.png" alt="Education Icon" class="icon-certificates" />
      </div>
    </div>
  </div> -->
</template>

<script setup>
const certificates = ['/education.png']
</script>

<style scoped>
.section {
  width: 100%;
  padding: 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 1rem;
}

.icon-education {
  width: 20rem;
  margin-left: 0.5rem;
}

.icon-certificates {
  width: 60rem;
}

.education-card {
  padding: 1rem;
}

.education-content p {
  margin: 0;
  color: #e0e0e0;
}
</style>
