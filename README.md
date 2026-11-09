# Portfólio — Macelo Araújo

Portfólio pessoal desenvolvido com Angular, inspirado na linguagem visual do site de referência enviado: tema escuro, laranja como cor de destaque, tipografia expressiva, elementos inspirados em interfaces de API e seções bem definidas.

## Requisitos
- Node.js (versão LTS recomendada)
- npm

## Executar localmente
```bash
npm install
npm start
```
Acesse `http://localhost:4200`.

## Gerar build
```bash
npm run build
```

## Antes de publicar
1. Confira os links do GitHub e LinkedIn em `src/app/data.ts`.
2. Atualize o link do repositório do Delivery Management API caso o endereço definitivo seja diferente.
3. Confirme se o repositório do CampoCerto está público; se ainda não estiver, remova o link ou publique o projeto.
4. Se quiser exibir e-mail, substitua o `href="mailto:"` em `src/app/app.component.ts` por seu endereço profissional.
5. Adicione um PDF do currículo e um botão de download caso queira disponibilizá-lo.

## Estrutura
- `src/app/app.component.ts`: estrutura e seções da página.
- `src/app/data.ts`: dados pessoais, tecnologias, trajetória e projetos.
- `src/app/components/project-card.component.ts`: cartão reutilizável de projeto.
- `src/styles.css`: identidade visual e responsividade.

O conteúdo foi escrito para apresentar formação, projetos e objetivo profissional sem atribuir experiências ou competências não confirmadas.
