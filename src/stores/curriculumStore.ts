// stores/cvStore.js
import { defineStore } from 'pinia'
import { jsPDF } from 'jspdf'

export const useCurriculumStore = defineStore('cvStore', {
  state: () => ({
    name: 'João Gomes',
    email: 'jg0112360@gmail.com',
    phone: '+55 21 9 7922-1745',
    address: 'Rio de Janeiro - Rio de Janeiro, Brasil',
    linkedin: 'https://www.linkedin.com/in/joao-marcelo-a31b75206/',
    github: 'https://github.com/joaomarcelo09',
    professionalSummary: 'Desenvolvedor fullstack com experiência em criação e manutenção...',
    experiences: [
      {
        company: 'Agência Novi',
        role: 'Desenvolvedor fullstack',
        date_init: '01/2023',
        date_end: '03/2024',
        responsibilities: [
          'Desenvolvi e mantive sistemas back-end utilizando tecnologias como Node.js, NestJs, Express, Sequelize e Prisma.',
          'Utilizei MySQL como banco de dados principal, implementando migrações e consultas otimizadas.',
          'Atuei na implementação de autenticação e controle de acesso em diversas aplicações.',
          'Coordenei com equipes de front-end utilizando Vue.js e Pinia para garantir a integração fluida entre camadas.'
        ]
      },
      {
        company: 'ISDB Flowtech',
        role: 'Estagiário em desenvolvimento de software',
        date_init: '11/2024',
        responsibilities: [
          'Desenvolvo em Java no backend das aplicações e javascript/jquery/css/html no frontend',
          'Utilizo docker para containerizaçao da aplicação.',
        ]
      }
    ],
    projects: [
      {
        name: 'Unintegra',
        description:
          'Plataforma criada para recrutamento de pessoas para projetos de diferentes tópicos e gerenciamento de anúncio de vagas para esse projeto.',
        frameworks: ['/nest-js-icon.png'],
        technologies: 'NestJs',
        githubLink: 'https://github.com/unintegra/backend',
        priority: 2
      },
      {
        name: 'Ficha Academia',
        icon: '/magic-hat.png',
        technologies: 'NestJs',
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
        technologies: 'NestJs',
        githubLink: 'https://github.com/joaomarcelo09/jg-banking-api',
        priority: 2
      },
      {
        name: 'RProductivyG',
        icon: '/magic-hat.png',

        description: `Projeto interativo de to-do list que mescla elementos de RPG. Ao completar tarefas, o usuário sobe de nível, evoluindo seu personagem com tarefas reais.`,
        frameworks: ['spring-boot-icon.png'],
        technologies: 'Spring Boot e React',
        githubLink: 'https://github.com/joaomarcelo09/rproductivityg-api',
        priority: 1
      },
      {
        name: 'Resgistration-system',
        icon: '',
        description: `Sistema de controle de acesso e login utilizando Java com Spring Boot, Spring Security e JWT token.`,
        frameworks: ['spring-boot-icon.png'],
        technologies: 'Spring Boot',
        githubLink: 'https://github.com/joaomarcelo09/registration-system-api',
        priority: 1
      },
      {
        name: 'BitBot',
        icon: '',
        description: `Um bot de servidor de Discord que automatiza tarefas, como agendamento de mensagens e gerenciamento
    de canais.`,
        frameworks: ['typescript.png'],
        technologies: 'Typescript',
        githubLink: 'https://github.com/joaomarcelo09/bitwizards-bot',
        priority: 1
      }
    ],
    education: [
      {
        institution: 'Estácio de Sá, Rio de Janeiro',
        degree: 'Bacharelado em Análise e Desenvolvimento de Software',
        year: '2023 - 2025'
      }
    ],
    languages: [
      { language: 'Inglês', level: 'Intermediário' },
      { language: 'Espanhol', level: 'Básico' }
    ],
    skills: [
      'Java',
      'JavaScript',
      'TypeScript',
      'Vue.js',
      'React.js',
      'Spring Boot',
      'Express.js',
      'Node.js',
      'Nest.js',
      'Prisma',
      'PostgreSQL',
      'MySQL',
      'Sequelize',
      'Git',
      'GitHub',
      'Docker',
      'Scrum'
    ]
  }),

  actions: {
    generatePdf() {
      const doc = new jsPDF()

      // Cabeçalho
      doc.setFontSize(22)
      doc.text(this.name, 105, 20, { align: 'center' })
      doc.setFontSize(12)
      doc.textWithLink(this.email, 105, 30, { align: 'center', url: `mailto:${this.email}` })
      doc.text(`Celular: ${this.phone}`, 105, 40, { align: 'center' })
      doc.text(`Endereço: ${this.address}`, 105, 50, { align: 'center' })
      doc.textWithLink(`LinkedIn: ${this.linkedin}`, 105, 60, {
        align: 'center',
        url: this.linkedin
      })
      doc.textWithLink(`GitHub: ${this.github}`, 105, 70, { align: 'center', url: this.github })

      // Resumo Profissional
      doc.setFontSize(16)
      doc.text('Resumo Profissional', 20, 90)
      doc.setFontSize(12)
      doc.text(this.professionalSummary, 20, 100, { maxWidth: 170 })

      // Experiência Profissional
      let currentHeight = 120
      doc.setFontSize(16)
      doc.text('Experiência Profissional', 20, currentHeight)
      currentHeight += 10

      this.experiences.forEach((exp) => {
        doc.setFontSize(14)
        doc.text(`${exp.company}`, 20, currentHeight)
        doc.setFontSize(12)
        doc.text(`${exp.role} (${exp.date_init} - ${exp.date_end})`, 20, currentHeight + 10)
        currentHeight += 20

        exp.responsibilities.forEach((responsibility) => {
          doc.text(`- ${responsibility}`, 25, currentHeight)
          currentHeight += 10
        })
        currentHeight += 10
      })

      // Projetos
      doc.setFontSize(16)
      doc.text('Projetos', 20, currentHeight)
      currentHeight += 10
      this.projects.forEach((proj) => {
        doc.setFontSize(14)
        doc.text(`${proj.name}`, 20, currentHeight)
        doc.setFontSize(12)
        doc.text(`${proj.description}`, 20, currentHeight + 10)
        currentHeight += 20
      })

      doc.save('curriculo.pdf')
    }
  }
})
