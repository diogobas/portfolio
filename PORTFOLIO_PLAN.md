# Portfólio profissional de Diogo Bastos

## Resumo

- Reiniciar a aplicação dentro do repositório atual, preservando o histórico Git.
- Substituir a base React/MUI existente por Astro com TypeScript; usar React apenas no filtro interativo do arquivo de projetos.
- Criar uma identidade escura e autoral, inspirada na estrutura editorial de Brittany Chiang sem copiar paleta, tipografia, textos ou componentes.
- Publicar inicialmente no Cloudflare Pages em um domínio `*.pages.dev`; DEV.to será apenas um canal futuro de artigos que apontem para o portfólio.
- Todo o conteúdo será em inglês e baseado no PDF atualizado de julho de 2026.

## Implementação e conteúdo

- Home responsiva:
  - Coluna fixa no desktop com nome, título “Senior Full-Stack Software Engineer”, apresentação, navegação e links sociais.
  - Conteúdo rolável com About, Experience, Featured Projects e Contact.
  - Em dispositivos móveis, transformar a estrutura em uma única coluna sem navegação fixa.
- Experience:
  - Pearson Education/eDynamic Learning, 2026–present.
  - HMH, 2022–2025.
  - TEKsystems/HMH, 2020–2022.
  - Neovation, 2017–2020.
  - Resumir a carreira anterior e direcionar ao résumé completo.
- Projetos destacados:
  - [Pearson Career Ready Launch Studio](https://www.pearson.com/en-us/career-ready.html)
  - [HMH Classcraft](https://www.hmhco.com/programs/classcraft)
  - Session Organizer, ligado à documentação pública da HMH. (https://support.hmhco.com/s/article/use-your-session-organizer-in-classcraft-as-a-teacher)
  - [HMH Coachly](https://www.hmhco.com/programs/coachly)
  - [Teacher Success Pathways] (https://youtu.be/cO-ZP9HM-r8?si=GyXG_xjRr-LMc2-V)
  - [OttoLearn](https://www.ottolearn.com/)
- Arquivo `/projects/`:
  - Incluir os cinco destaques e Teacher Success Pathways.
  - Ordenar por período profissional e permitir busca e filtros por empresa e tecnologia.
  - Sincronizar os filtros com query parameters para URLs compartilháveis.
  - Aceitar futuramente novos projetos sem mudanças nos componentes.
- Descrever contribuições de forma conservadora: somente fatos do résumé ou confirmados pelo usuário, sem métricas inventadas, código interno, screenshots privados ou alegações de autoria individual.
- Usar imagens oficiais públicas para Career Ready, Classcraft, Coachly e OttoLearn; criar composições abstratas próprias para Session Organizer e Teacher Success Pathways. Armazenar localmente versões otimizadas e registrar URL de origem e texto alternativo.
- Disponibilizar um PDF público atualizado sem telefone; mostrar somente email, LinkedIn e [GitHub](https://github.com/diogobas) na interface.

## Interfaces, qualidade e publicação

- Definir coleções tipadas para `projects`, `experience` e configuração do site.
- Cada projeto terá: `slug`, título, empresa, período profissional, resumo, contribuição, tecnologias, links externos, destaque, imagem, origem da imagem e texto alternativo.
- Rotas públicas: `/`, `/projects/`, `/resume/diogo-bastos-resume.pdf` e página 404.
- Adicionar metadados canônicos, Open Graph, sitemap, favicon, `robots.txt` e JSON-LD do tipo `Person`.
- Remover MUI, TanStack Query, serviços simulados, delays artificiais, fixtures usadas como produção e especificações antigas baseadas em dados fictícios.
- Configurar CI para lint, formatação, verificação Astro/TypeScript, testes e build.
- Configurar Cloudflare Pages com `pnpm build` e saída `dist`; habilitar previews por pull request e lançamento inicial em `pages.dev`. A plataforma oferece integração Git, previews e domínio próprio posteriormente, conforme a [documentação oficial](https://developers.cloudflare.com/pages/).
- Não incluir backend, CMS, analytics, formulário de contato, blog, multilíngue ou domínio próprio no primeiro lançamento.

## Testes e aceitação

- Testes unitários para validação das coleções, ordenação, busca e filtros.
- Testes E2E para navegação por teclado, links externos, download do résumé, filtros persistidos na URL e layout em 375, 768 e 1440 px.
- Auditoria automatizada com axe, sem violações críticas ou sérias, contraste WCAG 2.2 AA, foco visível e suporte a `prefers-reduced-motion`.
- Verificar todos os links públicos antes do lançamento e usar o link institucional mais próximo quando não existir uma demo.
- Executar Lighthouse no build publicado, buscando pelo menos 95 em acessibilidade/SEO e 90 em performance, com LCP abaixo de 2,5 s e CLS abaixo de 0,1.
- Revisão manual final do usuário para contribuições, datas, links, imagens oficiais e PDF sanitizado antes do deploy de produção.

## Premissas

- O PDF de julho de 2026 é a fonte principal; o `resume.md` antigo será atualizado ou substituído.
- Career Ready Launch Studio é um projeto confirmado pelo usuário.
- Os quatro projetos HMH registrados na especificação antiga correspondem aos trabalhos compartilhados com o colega.
- Datas específicas desconhecidas dos projetos usarão o período do respectivo emprego, sem inventar mês ou ano.
- O conteúdo pode afirmar colaboração e liderança descritas no résumé, mas não propriedade exclusiva dos produtos.
- Domínio próprio e publicação de artigos no DEV.to ficam para uma etapa posterior ao lançamento.
