
export interface Profile {
  name: string;
  location: string;
  github: string;
  linkedin: string;
  about: string[];
}

export interface TechGroup {
  title: string;
  icon: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  repo: string;
  demo?: string;
  featured?: boolean;
  category: string;
  status: string;
}

export interface JourneyItem {
  period: string;
  type: string;
  title: string;
  place: string;
  description: string;
}

export const PROFILE: Profile = {
  name: 'Macelo Araujo',
  location: 'Paraíba, Brasil',
  github: 'https://github.com/Macelo2266',
  linkedin: 'https://linkedin.com/in/macelodev/',
  about: [
    'Sou estudante de Sistemas de Informação na Universidade Federal Rural de Pernambuco e Técnico em Manutenção e Suporte em Informática pelo IFPB.',
    'Tenho interesse em desenvolvimento Back-end, especialmente no ecossistema Java e Spring Boot. Venho desenvolvendo projetos práticos para aprimorar meus conhecimentos em construção de APIs REST, integração com bancos de dados e segurança.',
    'Busco minha primeira oportunidade como Desenvolvedor Java Júnior, onde possa contribuir com a equipe, aprender com profissionais experientes e evoluir continuamente como desenvolvedor.'
  ]
};

export const TECH_GROUPS: TechGroup[] = [
  {
    title: 'Back-end',
    icon: '⚙',
    items: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Spring Security',
      'Hibernate',
      'APIs REST',
      'Maven',
      'JUnit',
      'Mockito'
    ]
  },
  {
    title: 'Banco de dados',
    icon: '▤',
    items: [
      'PostgreSQL',
      'MySQL',
      'SQL',
      'Modelagem de dados'
    ]
  },
  {
    title: 'Ferramentas',
    icon: '⌘',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'IntelliJ IDEA',
      'Insomnia',
      'Postman',
      'Swagger',
      'pgAdmin'
    ]
  },
  {
    title: 'Front-end',
    icon: '◈',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'Angular',
      'React'
    ]
  }
];


export const PROJECTS: Project[] = [
  {
    name: 'Delivery Management API',
    description:
        'API REST para gerenciamento de entregas, com autenticação, controle de usuários, motoristas e veículos. Desenvolvida com arquitetura organizada e integração com PostgreSQL.',
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'Docker'
    ],
    repo: 'https://github.com/Macelo2266/delivery-management-api',
    category: 'BACK-END / API REST',
    status: 'Projeto pessoal',
    featured: true
  },
  {
    name: 'Alimente+',
    description:
        'Projeto acadêmico voltado ao combate ao desperdício de alimentos, conectando doadores, organizações e famílias por meio de uma plataforma digital.',
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'React',
      'TypeScript'
    ],
    repo: 'https://github.com/Macelo2266/alimente-',
    category: 'PROJETO ACADÊMICO',
    status: 'Projeto acadêmico',
    featured: true
  },
  {
    name: 'AgroManager API',
    description:
        'API REST desenvolvida para gerenciamento de informações relacionadas ao contexto agrícola, utilizando Java, Spring Boot e persistência de dados.',
    stack: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'JWT',
      'Maven'
    ],
    repo: 'https://github.com/Macelo2266/AgroManager-API',
    category: 'BACK-END / API REST',
    status: 'Projeto pessoal'
  },
  {
    name: 'CampoCerto',
    description:
        'Projeto em desenvolvimento para conectar produtores rurais a prestadores de serviços agrícolas, facilitando a divulgação e contratação de serviços no campo.',
    stack: [
      'Java',
      'Spring Boot',
      'Angular',
      'PostgreSQL',
      'TypeScript'
    ],
    repo: 'https://github.com/Macelo2266/campocerto',
    category: 'FULL STACK',
    status: 'Em desenvolvimento'
  }
];


export const JOURNEY: JourneyItem[] = [
  {
    period: '2026 — ATUAL',
    type: 'DESENVOLVIMENTO',
    title: 'Java e Spring Boot',
    place: 'Estudos e projetos práticos',
    description:
        'Aprofundamento em desenvolvimento Back-end, APIs REST, autenticação JWT, Spring Security, PostgreSQL, Docker e testes automatizados.'
  },
  {
    period: '2026 — ATUAL',
    type: 'FORMAÇÃO ACADÊMICA',
    title: 'Bacharelado em Sistemas de Informação',
    place: 'Universidade Federal Rural de Pernambuco (UFRPE)',
    description:
        'Estudante regularmente matriculado no 8º período, com foco em desenvolvimento de software e tecnologia.'
  },
  {
    period: 'CONCLUÍDO',
    type: 'FORMAÇÃO TÉCNICA',
    title: 'Técnico em Manutenção e Suporte em Informática',
    place: 'Instituto Federal da Paraíba (IFPB)',
    description:
        'Formação técnica com conhecimentos em manutenção de computadores, suporte técnico e infraestrutura de TI.'
  },
  {
    period: '2021 — 2022',
    type: 'EXPERIÊNCIA PROFISSIONAL',
    title: 'Jovem Aprendiz — Auxiliar Administrativo em TI',
    place: 'Engarrafamento Coroa LTDA',
    description:
        'Atuação em atividades de suporte e manutenção de equipamentos de informática e apoio às rotinas administrativas de TI.'
  }
];
