import { Component, OnInit } from '@angular/core';
import { Candidato, Candidatos } from '../interfaces';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../../global/components/header/header.component";

@Component({
  selector: 'app-view-candidates',
  standalone: true,
  imports: [TableModule, TagModule, RatingModule, ButtonModule, CommonModule, FormsModule, HeaderComponent],
  templateUrl: './view-candidates.component.html',
  styleUrl: './view-candidates.component.scss'
})
export class ViewCandidatesComponent implements OnInit {

  mockData: Candidatos = {
    "candidatos": [
      {
        "nome": "Kayky Rodrigues da Silva",
        "match": 95,
        "nota": 4.5,
        "pontos_fortes": [
          "Experiência com Angular, React, Node.js, Python, TypeScript",
          "Domínio de Git",
          "Experiência com desenvolvimento full-stack",
          "Experiência em projetos diversos, incluindo ciclo de vida completo de software",
          "Familiaridade com metodologias ágeis",
          "Experiência com bancos de dados SQL"
        ],
        "pontos_fracos": [
          "Falta de experiência com frameworks back-end além de Node.js e Python",
          "Nenhuma menção explícita a metodologias ágeis"
        ],
        "perguntas": [
          "Descreva sua experiência com desenvolvimento em Angular, citando um projeto específico e os desafios enfrentados.",
          "Como você utiliza o Git em seus projetos? Detalhe seu processo de versionamento e colaboração em equipe.",
          "Explique sua compreensão de APIs REST e como você as integraria em uma aplicação full-stack.",
          "Você já trabalhou com bancos de dados SQL? Detalhe sua experiência com algum SGBD específico (ex: MySQL, PostgreSQL).",
          "Descreva seu processo de desenvolvimento em um projeto, desde o levantamento de requisitos até a implantação."
        ]
      },
      {
        "nome": "Witor Oliveira",
        "match": 85,
        "nota": 3.5,
        "pontos_fortes": [
          "Experiência com React",
          "Experiência com Python",
          "Conhecimento de TypeScript",
          "Conhecimento de CSS e JavaScript",
          "Conhecimento de SQL",
          "Experiência com Git",
          "Boa comunicação"
        ],
        "pontos_fracos": [
          "Falta experiência com Node.js ou outros back-ends além de Python",
          "Falta experiência declarada com APIs REST e GraphQL",
          "Falta experiência declarada com metodologias ágeis",
          "Pouca ou nenhuma experiência com Angular (apesar de ter feito curso)"
        ],
        "perguntas": [
          "Descreva sua experiência com desenvolvimento front-end utilizando React, focando em um projeto específico.",
          "Como você lidaria com um problema de performance em um aplicativo web?",
          "Explique sua experiência com bancos de dados SQL, citando exemplos de consultas que você já realizou.",
          "Descreva seu processo de desenvolvimento em um projeto, desde a concepção até o deploy.",
          "Como você se mantém atualizado com as novas tecnologias e tendências de desenvolvimento?"
        ]
      },
      {
        "nome": "Mateus Restier de Sousa Noronha",
        "match": 45,
        "nota": 3,
        "pontos_fortes": [
          "Experiência com SQL (SQL Server)",
          "Experiência com Python",
          "Familiaridade com Power BI",
          "Conhecimento de metodologias ágeis",
          "Boa comunicação",
          "Experiência com análise de dados"
        ],
        "pontos_fracos": [
          "Falta de experiência com frameworks front-end (React, Vue ou Angular)",
          "Falta de experiência com desenvolvimento back-end com Node.js ou Python",
          "Pouca ou nenhuma experiência direta com desenvolvimento web fullstack"
        ],
        "perguntas": [
          "Descreva sua experiência com desenvolvimento de aplicações web, focando em projetos que envolveram HTML, CSS e JavaScript.",
          "Você tem familiaridade com algum framework front-end (React, Vue ou Angular)? Conte-me sobre sua experiência com ele, incluindo exemplos de projetos.",
          "Explique sua experiência com bancos de dados SQL. Que tipo de banco de dados você já utilizou e que tarefas você realizou?",
          "Como você utiliza o Git em seus projetos? Descreva seu processo de versionamento.",
          "Imagine que você precisa desenvolver um pequeno aplicativo web que permita a consulta de dados em um banco de dados. Como você abordaria este projeto, considerando as tecnologias que você domina?"
        ]
      },
      {
        "nome": "Gustavo Raia",
        "match": 75,
        "nota": 3.5,
        "pontos_fortes": [
          "Experiência com Java",
          "Experiência com bancos de dados (Oracle, MySQL)",
          "Conhecimento de APIs (mencionado em experiência com Microsserviços e integração de sistemas)",
          "Conhecimento de Nuvem (Azure)",
          "Familiaridade com SQL",
          "Inglês Avançado"
        ],
        "pontos_fracos": [
          "Pouca ou nenhuma experiência explícita com frameworks front-end (React, Vue, Angular)",
          "Experiência com Node.js e Python é mencionada de forma superficial",
          "Falta experiência declarada com metodologias ágeis (Scrum, Kanban)",
          "Falta experiência declarada com TypeScript"
        ],
        "perguntas": [
          "Descreva sua experiência com desenvolvimento web, focando em aplicações que você desenvolveu e as tecnologias utilizadas.",
          "Como você lida com a manutenção de bancos de dados, considerando cenários de performance e escalabilidade?",
          "Explique sua experiência com APIs REST, incluindo design, desenvolvimento e testes. Se você tiver experiência com GraphQL, por favor, comente também.",
          "Como você utiliza o Git no seu fluxo de trabalho de desenvolvimento?",
          "Descreva um projeto em que você aplicou conceitos de Engenharia de Dados e como você resolveu algum desafio encontrado."
        ]
      },
      {
        "nome": "Pedro Luis Gaspar Vieira de Souza",
        "match": 75,
        "nota": 3.5,
        "pontos_fortes": [
          "Conhecimento em HTML, CSS e JavaScript",
          "Experiência com frameworks front-end (React, Angular)",
          "Experiência com desenvolvimento back-end em Python e Java",
          "Familiaridade com bancos de dados SQL (MySQL)",
          "Noções de controle de versão com Git",
          "Conhecimento em TypeScript"
        ],
        "pontos_fracos": [
          "Falta de experiência com Node.js",
          "Falta de experiência com APIs REST e GraphQL",
          "Falta de experiência com metodologias ágeis"
        ],
        "perguntas": [
          "Descreva sua experiência com desenvolvimento front-end utilizando React ou Angular, citando exemplos de projetos e desafios enfrentados.",
          "Explique como você utiliza o Git no seu fluxo de trabalho, incluindo o uso de branches e merge requests.",
          "Descreva sua experiência com desenvolvimento back-end em Python ou Java, focando em um projeto específico.",
          "Como você lidaria com um bug crítico em produção, descrevendo o processo de identificação, solução e prevenção?",
          "Explique sua familiaridade com bancos de dados SQL, citando exemplos de consultas e otimização de queries."
        ]
      }
    ]
  }

  actualCandidates: Candidato[] = this.mockData.candidatos
  roleTitle: string = 'Desenvolvedor Full Stack Júnior'
  totalCandidates: number = 0;

  ngOnInit(): void {

    this.totalCandidates = this.actualCandidates.length

  }


}
