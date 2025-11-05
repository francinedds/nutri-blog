# Our Health

Blog de nutrição criado com Next.js.

## Sobre

Após concluir o Módulo 1 do curso de Next.js da Rocketseat, cujo desafio envolvia criar uma landing page e um blog, decidi desenvolver o meu próprio projeto para colocar em prática o que aprendi.
O **Our Helth** traz dicas práticas (fictícias!) sobre alimentação saudável, nutrição e bem-estar, com um layout simples, moderno e acolhedor, além de ser otimizado para performance com Next.js.

## Tecnologias utilizadas

- Next.js + TypeScript

- Tailwind CSS

- Markdown para os posts (localizados na pasta /posts)

- Sistema de busca client-side para filtrar posts por título, slug ou descrição

- Otimização de imagens com next/image

- Deploy e hospedagem fáceis (por exemplo via Vercel)

## Como rodar localmente

Clone o repositório:

``` bash
git clone https://github.com/francinedds/nutri-blog.git
```

Acesse a pasta do projeto:
``` bash
cd nutri-blog
```

Instale as dependências:
``` bash
npm install
```
ou
```bash
yarn
```

Execute em modo de desenvolvimento:
``` bash
npm run dev
```

Acesse http://localhost:3000 no navegador para ver o blog.

## Estrutura de pastas

/app — contém as páginas e layouts do Next.js (App Router)

/posts — arquivos Markdown dos posts (cada um com título, descrição, data, imagem, author e conteúdo)

/components — componentes reutilizáveis como PostList, SearchInput, PostCard, Header, Footer

/public — imagens, logo e outros assets públicos

 Outras configurações como tailwind.config.js, next.config.ts, etc.

## Busca de posts

Quando você digita algo no campo de busca, o sistema:

- Filtra os posts que contêm o termo buscado em título, slug ou descrição.

- Exibe apenas os posts filtrados, em tempo real, sem recarregar a página.

## Autoria
Desenvolvido com ❤️ por Francine.