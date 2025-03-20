
# ATS - Front-End

Este é o front-end do sistema de **Applicant Tracking System (ATS)**, desenvolvido com **Angular**. O sistema é integrado a uma API para gerenciar currículos, avaliar candidatos com base em critérios específicos e gerar relatórios personalizados.

## Tecnologias Utilizadas

- **Framework JavaScript**: Angular
- **Biblioteca de UI**: PrimeNG (ou Material UI)
- **CSS Framework**: SASS
- **Autenticação**: JWT (se aplicável)
- **Comunicação com a API**: RESTful API

## Funcionalidades

- **Tela de Login**: Interface para login de administradores e usuários.
- **Visualização de Candidatos**: Listagem de candidatos que passaram pela triagem.
- **Filtro de Candidatos**: Filtros customizáveis para ordenar candidatos por pontos fortes, pontos fracos, etc.
- **Detalhes do Candidato**: Exibição dos dados do candidato, como notas e feedbacks detalhados.
- **Geração de Relatórios**: Geração de relatórios em formato PDF para cada candidato com sua pontuação, pontos fortes, e fracos.
- **Administração**: Área para gerenciar as vagas e configurar os critérios de avaliação.

## Como Rodar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/ats-frontend.git
   cd ats-frontend
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**:
   ```bash
   ng serve
   ```

   O servidor estará disponível em [http://localhost:4200](http://localhost:4200).

## Contribuindo

Se você deseja contribuir com melhorias ou correções, siga os passos abaixo:

1. **Faça um fork do repositório**.
2. **Crie uma branch** para a sua modificação:
   ```bash
   git checkout -b feature/nome-da-sua-modificacao
   ```
3. **Implemente suas mudanças** e escreva testes, se necessário.
4. **Faça o commit** das suas mudanças:
   ```bash
   git commit -m "Descrição das mudanças"
   ```
5. **Suba a branch** para o repositório:
   ```bash
   git push origin feature/nome-da-sua-modificacao
   ```
6. **Crie um pull request** explicando suas mudanças.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
