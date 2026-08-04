export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  mark: string;
  tone:
    | 'linkedin'
    | 'traliant'
    | 'certiprof'
    | 'udemy'
    | 'eduardo-pires'
    | 'generic'
    | 'unigoias'
    | 'senac';
};

export const certifications: readonly Certification[] = [
  {
    name: 'Learning Kubernetes',
    issuer: 'LinkedIn',
    issued: 'Apr 2023',
    mark: 'in',
    tone: 'linkedin',
  },
  {
    name: 'Code of Conduct Essentials 2022',
    issuer: 'Traliant',
    issued: 'Nov 2022',
    mark: 'T',
    tone: 'traliant',
  },
  {
    name: 'Kanban Foundation (KIKF)',
    issuer: 'CertiProf',
    issued: 'Oct 2020',
    expires: 'Oct 2022',
    credentialId: '48888838',
    mark: 'C',
    tone: 'certiprof',
  },
  {
    name: 'CertiProf Continuous Learner',
    issuer: 'CertiProf',
    issued: 'Aug 2020',
    expires: 'Aug 2022',
    mark: 'C',
    tone: 'certiprof',
  },
  {
    name: 'Certified Scrum Professional (CSP)',
    issuer: 'CertiProf',
    issued: 'Jun 2020',
    credentialId: 'TLSZZDSDGV-MMYHRXTW-RPFHPTLTFK',
    mark: 'C',
    tone: 'certiprof',
  },
  {
    name: 'AWS Lambda 2016 - The Complete Guide (With Hands On Labs)',
    issuer: 'Udemy',
    issued: 'Mar 2017',
    credentialId: 'UC-3N5B3SFI',
    mark: 'U',
    tone: 'udemy',
  },
  {
    name: 'Introduction to TypeScript',
    issuer: 'Udemy',
    issued: 'Mar 2017',
    credentialId: 'UC-G8YMB8HT',
    mark: 'U',
    tone: 'udemy',
  },
  {
    name: 'The Complete React Web App Developer Course',
    issuer: 'Udemy',
    issued: 'Mar 2017',
    credentialId: 'UC-MRX2VF8N',
    mark: 'U',
    tone: 'udemy',
  },
  {
    name: 'Accelerated ES6 JavaScript Training',
    issuer: 'Udemy',
    issued: 'Mar 2017',
    credentialId: 'UC-GYMN44AC',
    mark: 'U',
    tone: 'udemy',
  },
  {
    name: 'ASP.NET MVC 5 – Enterprise Applications',
    issuer: 'Eduardo Pires - Treinamentos e Consultoria',
    issued: 'Nov 2015',
    mark: 'EP',
    tone: 'eduardo-pires',
  },
  {
    name: 'E-learning course ITIL® Foundation',
    issuer: 'TI Exames',
    issued: 'Sep 2014',
    credentialId: '54491-53',
    mark: 'TI',
    tone: 'generic',
  },
  {
    name: 'Mobile development with iOS',
    issuer: 'Caelum',
    issued: 'Jan 2014',
    mark: 'C',
    tone: 'generic',
  },
  {
    name: 'Preparatory Course for Java Certification – OCJP',
    issuer: 'UNIGOIÁS',
    issued: 'Jul 2008',
    mark: 'U',
    tone: 'unigoias',
  },
  {
    name: 'Training Developer for Java Web',
    issuer: 'Agrosol Tecnologia',
    issued: 'Aug 2006',
    mark: 'A',
    tone: 'generic',
  },
  {
    name: 'DELPHI programming and connection with SQL SERVER',
    issuer: 'Senac PR',
    issued: 'Aug 2005',
    mark: 'S',
    tone: 'senac',
  },
  {
    name: 'Mobile development with Google Android',
    issuer: 'Caelum',
    issued: 'Nov 2013',
    mark: 'C',
    tone: 'generic',
  },
  {
    name: 'Advanced training in Adobe Flex',
    issuer: 'Adobe ENG DTP & Multimídia',
    issued: 'Aug 2009',
    mark: 'A',
    tone: 'generic',
  },
];
