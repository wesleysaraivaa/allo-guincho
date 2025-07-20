# Allô Guincho - Website Oficial

![Allô Guincho](./src/assets/logo-allo-guincho.png)

Website oficial da **Allô Guincho**, empresa especializada em serviços de reboque 24h na Grande São Paulo, interior e litoral paulista.

## 🚀 Sobre o Projeto

Site institucional desenvolvido em React + TypeScript com foco em conversão e SEO local. Oferece informações completas sobre os serviços de reboque, com integração direta ao WhatsApp para atendimento imediato.

### 🎯 Objetivos

- Gerar leads qualificados para serviços de reboque
- Facilitar contato em situações de emergência
- Melhorar presença digital e SEO local
- Fornecer informações úteis sobre reboque e guincho

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Animations**: Tailwind CSS Animate

## 📋 Funcionalidades

### 🏠 Páginas Principais

- **Home**: Apresentação dos serviços e CTAs de conversão
- **Serviços**: Detalhamento completo dos tipos de reboque
- **Sobre**: História e valores da empresa
- **Blog**: Artigos sobre reboque e manutenção automotiva
- **FAQ**: Perguntas frequentes sobre os serviços
- **Contato**: Formulário e informações de contato

### 📱 Recursos Especiais

- **WhatsApp Integration**: Botões diretos para WhatsApp em todas as páginas
- **Responsive Design**: Otimizado para mobile, tablet e desktop
- **SEO Otimizado**: Meta tags, Schema.org e sitemap completos
- **Call-to-Action**: Botões de emergência estrategicamente posicionados
- **Formulário Inteligente**: Envia dados diretamente via WhatsApp

### 🎨 Design System

- **Cores**: Laranja (emergência) + Azul (confiança) + Verde WhatsApp
- **Typography**: Sistema de fontes responsivo
- **Components**: Biblioteca de componentes reutilizáveis
- **Animations**: Transições suaves e micro-interações

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn ou bun

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/allo-guincho.git

# Entre no diretório
cd allo-guincho

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Lint do código
npm run lint
```

## 📁 Estrutura do Projeto

```
allo-guincho/
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── logo-allo-guincho-branca.ico
├── src/
│   ├── assets/
│   │   ├── logo-allo-guincho.png
│   │   ├── logo-allo-guincho-branca.png
│   │   └── hero-tow-truck.jpg
│   ├── components/
│   │   ├── ui/              # Componentes shadcn/ui
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── WhatsAppButton.tsx
│   ├── config/
│   │   └── contact.ts       # Configurações de contato
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

## 🎨 Design System

### Cores Principais

```css
/* Emergência (Laranja) */
--primary: 24 95% 53%;

/* Confiança (Azul) */
--secondary: 217 91% 60%;

/* WhatsApp (Verde) */
--whatsapp: 142 70% 49%;
```

### Componentes

- **Buttons**: Variações primary, secondary, WhatsApp
- **Cards**: Layouts para serviços e informações
- **Forms**: Formulários com validação
- **Navigation**: Header responsivo com menu mobile

## 📞 Configuração de Contato

As informações de contato estão centralizadas em `src/config/contact.ts`:

```typescript
export const CONTACT_CONFIG = {
  phone: {
    display: "(11) 95820-4216",
    link: "+5511958204216",
    whatsapp: "5511958204216",
  },
};
```

## 🔍 SEO e Performance

### SEO Features

- **Meta Tags**: Título, descrição e keywords otimizados
- **Open Graph**: Compartilhamento social otimizado
- **Schema.org**: Dados estruturados para negócio local
- **Sitemap**: Mapeamento completo das páginas
- **Robots.txt**: Configuração para crawlers

### Performance

- **Vite**: Build tool rápido e otimizado
- **Code Splitting**: Carregamento sob demanda
- **Image Optimization**: Imagens otimizadas
- **CSS Purging**: Tailwind CSS otimizado para produção

## 🚀 Deploy

### Build para Produção

```bash
npm run build
```

### Plataformas Recomendadas

- **Vercel**: Deploy automático via Git
- **Netlify**: Deploy com formulários integrados
- **GitHub Pages**: Deploy gratuito
- **AWS S3 + CloudFront**: Deploy escalável

### Configurações de Deploy

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18+

## 📊 Analytics e Monitoramento

### Recomendações

- **Google Analytics 4**: Tracking de conversões
- **Google Search Console**: Monitoramento SEO
- **Google My Business**: Presença local
- **Facebook Pixel**: Remarketing

## 🔧 Manutenção

### Atualizações Regulares

- Atualizar informações de contato em `src/config/contact.ts`
- Adicionar novos posts no blog
- Atualizar preços e serviços
- Monitorar performance e SEO

### Backup

- Código versionado no Git
- Assets importantes em múltiplas localizações
- Configurações documentadas

## 📝 Licença

Este projeto é propriedade da **Allô Guincho**. Todos os direitos reservados.

## 📞 Suporte

Para suporte técnico ou dúvidas sobre o website:

- **WhatsApp**: (11) 95820-4216
- **Website**: https://alloguincho.com.br
- **Email**: contato@alloguincho.com.br

---

**Desenvolvido com ❤️ para a Allô Guincho**

_Reboque 24h na Grande São Paulo, interior e litoral paulista_
