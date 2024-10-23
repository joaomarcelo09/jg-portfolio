<template>
  <h1 class="text-center mb-4">Projetos</h1>
  <div class="row">
    <div class="col-md-4 mb-4" v-for="project in sortedProjects" :key="project.name">
      <div class="card h-100">
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <div class="d-flex card-title justify-content-between">
              <h3>{{ project.name }}</h3>
              <img v-if="project.icon" :src="project.icon" alt="Title Icon" class="title-icon" />
            </div>

            <p class="card-text">{{ project.description }}</p>
          </div>
          <div class="d-flex align-items-center justify-content-between mt-5">
            <div class="card-text d-flex text-center">
              <strong>Tecnologia(s):</strong>
              <div v-for="frame in project.frameworks" :key="frame">
                <img :src="frame" alt="Tecnology Icon" class="icon-tec" />
              </div>
            </div>
            <div class="group-btn">
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
  </div>
</template>

<script setup>
import { useCurriculumStore } from '@/stores/curriculumStore'

const crlStore = useCurriculumStore()

const projects = crlStore.projects

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
