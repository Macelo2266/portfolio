const DEV = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export interface Tech { name: string; icon?: string; }
export interface TechGroup { title: string; hint: string; items: Tech[]; }
export interface Project { name: string; tag: string; description: string; highlights: string[]; stack: string[]; repo: string; }

export const PROFILE = {
  name: 'Macelo Araújo',
  role: 'Desenvolvedor Back-end Java',
  location: 'Paraíba, Brasil',
  github: 'https://github.com/Macelo2266',
  linkedin: 'https://linkedin.com/in/macelodev/',
  about: [
    'Sou estudante do 8º período de Sistemas de Informação na Universidade Federal Rural de Pernambuco (UFRPE), com formação técnica em Manutenção e Suporte em Informática pelo IFPB.',
    'Tenho interesse em desenvolvimento Back-end, especialmente utilizando Java e Spring Boot. Desenvolvo projetos práticos para aprimorar meus conhecimentos em APIs REST, banco de dados, autenticação e arquitetura de aplicações.',
    'Estou buscando uma oportunidade como Desenvolvedor Java Júnior para aplicar meus conhecimentos, aprender com profissionais experientes e contribuir com soluções tecnológicas.'
  ],
  education: [
    { title: 'Sistemas de Informação', place: 'UFRPE', period: '8º período' },
    { title: 'Técnico em Manutenção e Suporte em Informática', place: 'IFPB', period: 'Formação técnica' }
  ]
};

export const TECH_GROUPS: TechGroup[] = [
  { title: 'Back-end', hint: 'o núcleo das minhas aplicações', items: [
    { name: 'Java', icon: `${DEV}/java/java-original.svg` },
    { name: 'Spring Boot', icon: `${DEV}/spring/spring-original.svg` },
    { name: 'Spring Security', icon: `${DEV}/spring/spring-original.svg` },
    { name: 'Spring Data JPA', icon: `${DEV}/spring/spring-original.svg` },
    { name: 'APIs REST' } ] },
  { title: 'Banco de dados', hint: 'persistência relacional', items: [
    { name: 'PostgreSQL', icon: `${DEV}/postgresql/postgresql-original.svg` },
    { name: 'MySQL', icon: `${DEV}/mysql/mysql-original.svg` } ] },
  { title: 'Qualidade e infraestrutura', hint: 'testes, versionamento e containers', items: [
    { name: 'JUnit e Mockito' },
    { name: 'Docker', icon: `${DEV}/docker/docker-original.svg` },
    { name: 'Git e GitHub', icon: `${DEV}/github/github-original.svg` } ] },
  { title: 'Front-end', hint: 'para entregar a aplicação completa', items: [
    { name: 'Angular', icon: `${DEV}/angular/angular-original.svg` },
    { name: 'TypeScript', icon: `${DEV}/typescript/typescript-original.svg` } ] }
];

export const PROJECTS: Project[] = [
  {
    name: 'Delivery Management API',
    tag: 'API REST · Back-end',
    description: 'API REST para gerenciamento de entregas, cobrindo clientes, motoristas, veículos, pedidos e endereços.',
    highlights: [
      'Autenticação com JWT e quatro papéis de acesso: Admin, Operador, Motorista e Cliente',
      'Fluxo de status das entregas com regras de negócio e filtros',
      'Testes automatizados com JUnit, Mockito e Testcontainers',
      'Documentação com Swagger, Docker multi-stage e CI com GitHub Actions'
    ],
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Flyway', 'JWT'],
    repo: 'https://github.com/Macelo2266/delivery-management-api'
  },
  {
    name: 'Alimente+',
    tag: 'Full stack · Impacto social',
    description: 'Plataforma para conectar doadores de alimentos, organizações sociais e famílias, incentivando o combate ao desperdício de alimentos.',
    highlights: [
      'Backend em microsserviços com Java 21 e Spring Boot 3',
      'Painéis separados para Doador, ONG, Família e Voluntário',
      'Autenticação com JWT, chat, notificações e relatórios em CSV'
    ],
    stack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
    repo: 'https://github.com/Macelo2266/alimente-mais'
  },
  {
    name: 'CampoCerto',
    tag: 'Plataforma · Campo',
    description: 'Plataforma para conectar agricultores a prestadores de serviços.',
    highlights: [],
    stack: [],
    repo: 'https://github.com/Macelo2266/campocerto'
  }
];
