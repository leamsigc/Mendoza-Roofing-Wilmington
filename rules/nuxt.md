### Important context for the current project


    PROJECT NAME: Mendoza Roofing - Premier Solutions
    INDUSTRY: Construction / Roofing
    LOCATION: Wilmington & Supply, North Carolina (Brunswick County)
    TARGET AUDIENCE: Homeowners, Business Owners, Real Estate Agents
    GOAL: High-conversion, SEO-dominant website inspiring trust and showcasing 50+ years of experience.

    TECH STACK:
    - Framework: Nuxt 4 (static site)
    - Styling: Tailwind CSS v4
    - Icons: Lucide Vue

    DESIGN SYSTEM (TOKENS):
    - Aesthetic: "Industrial Trust". Solid, grounded, reliable. NO glassmorphism.
    - Colors:
      - Navy (Trust/Corporate): #102a43 (900) to #f0f4f8 (50)
      - Gold (Action/Quality): #f59e0b (500)
      - Teal (Safety/Accent): #14b8a6 (500)
      - Concrete (Neutral Backgrounds): #f8fafc (50)
    - Typography:
      - Headings: 'Oswald' (Bold, Uppercase, Condensed)
      - Body: 'Inter' (Clean, Legible)
    - Shapes: Slightly rounded corners (rounded-sm), Border-heavy details.
    - Shadows: 'hard' (solid offset shadows) for tactile feel.

    KEY FEATURES & ARCHITECTURE:
    1. Routing:
       - / (Home): Hero, Trust Stats, Services Grid, Testimonials, CTA.
       - /about: Company history, values, team.
       - /services: (Currently anchored in Home) detailed service breakdown.
       - /tools: Interactive Cost Calculator & Storm Damage Checklist (Lead Magnets). (THIS WILL BE A FILEBASE ROUTE)
       - /blog: List of articles + AI Generator button (Gemini).
       - /blog/:id: Individual article view (Markdown rendering).
       - /contact: Form + Office Info sidebar.


    2. Components:
       - Layout: Sticky Header (Navy/White), Industrial Footer (Navy/Gold).
       - SeoWrapper: Manages document title, meta description, and canonical tags per page.
       - ConfigContext: Handles Theme (Light/Dark) and Language (EN/ES) state.
       - types.ts: TypeScript interfaces for type safety.

    4. SEO Strategy:
       - Pre-rendered JSON-LD (Schema.org) for LocalBusiness/RoofingContractor
       - Keyword-rich content (Wilmington, Supply, Metal Roofs, Repairs).
       - Fast load times (Minimal heavy libraries).

    AI AGENT INSTRUCTIONS:
    - When modifying, maintain the "Industrial" design language.
    - Keep Tailwind config consistent with component usage
    - Preserve the "local business" tone: friendly but professional and authoritative.

```shell
├── app
│   ├── app.vue
│   ├── assets
│   │   └── css
│   │       └── tailwind.css
│   ├── components
│   │   ├── OgImage # Custom Og images components
│   ├── composables #Each feature will have it own composable for single item and for Managment as well
│   ├── layouts
│   │   ├── BlogLayout.vue
│   │   ├── DashboardLayout.vue
│   │   └── default.vue
│   ├── middleware
│   └── pages
│       ├── app # All proctected pages will go here
│       │   ├── admin
│       │   │   └── users
│       │   │       └──components #All comments related components will go here
│       │   │       └──composables #All comments related components will go here
│       │   │       └──index.json #All translation related to the index.vue will go here and if there is another page we create it own <pagename>.json for the translation
│       │   │       └── index.vue
│       │   ├── index.vue
│       └── [...slug].vue
├── components.json
├── config
│   ├── app.config.ts
│   ├── drizzle.config.ts
│   ├── env.config.ts
│   ├── formkit.config.ts
│   ├── tailwind.config.ts
├── content
│   ├── en/blog
│   │   ├── how-to-add-GIF-to-dev-dot-to-article.md

├── content.config.ts
├── docker-compose.dev.yml
├── docker-compose.yml
├── Dockerfile
├── Dockerfile.dev
├── .dockerignore
├── .env
├── .env-example
├── eslint.config.mjs
├── formkit
│   └── formkit.theme.ts
├── .gitignore
├── lib # Better auth related files
│   ├── auth-client.ts
│   ├── auth.ts
│   └── utils.ts
├── nuxt.config.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── public #Public files will go here and all static assets as well
├── README.md
├── server #All server related 
│   ├── api
│   │   └── auth
│   │       └── [...all].ts
│   │   └──v1/ #Every feature api will go here base on version 1 and if there are new version for that api we create a folder for v2 compatible with v1
│   ├── tsconfig.json
│   └── utils #All utility schemas or actions example the email templates for the project
│       ├── drizzle.ts
│       ├── emailTemplates.ts
│       └── email.ts
├── translation
│   ├── global.json
│   └── i18n.config.ts
├── tsconfig.json
├── types
│   └── BlueSkyTypes.ts

```


### Rules must follow
      You are an expert in TypeScript, Node.js, NuxtJS 4, Vue 3, Shadcn Vue, Radix Vue, VueUse, and Tailwind.

      - All components in the `/app/components` are global components and no need to import them.
      
      Code Style and Structure
      - Write concise, technical TypeScript code with accurate examples.
      - Use composition API and declarative programming patterns; avoid options API.
      - Prefer iteration and modularization over code duplication.
      - Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
      - Structure files: exported component, composables, helpers, static content, types.
      
      Naming Conventions
      - Use lowercase with dashes for directories (e.g., components/auth-wizard).
      - Use PascalCase for component names (e.g., AuthWizard.vue).
      - Use camelCase for composables (e.g., useAuthState.ts).
      
      TypeScript Usage
      - Use TypeScript for all code; prefer types over interfaces.
      - Avoid enums; use const objects instead.
      - Use Vue 3 with TypeScript, leveraging defineComponent and PropType.
      
      Syntax and Formatting
      - Use arrow functions for methods and computed properties.
      - Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
      - Use template syntax for declarative rendering.
      
      UI and Styling
      - If there is a /app/components/ui folder, use it for UI components otherwise Use the Nuxt ui v4 components.
      - Use Shadcn Vue or Nuxt ui v4, Radix Vue, and Tailwind for components and styling.
      - Implement responsive design with Tailwind CSS; use a mobile-first approach.
      
      Performance Optimization
      - Leverage Nuxt's built-in performance optimizations.
      - Use Suspense for asynchronous components.
      - Implement lazy loading for routes and components.
      - Optimize images: use WebP format, include size data, implement lazy loading.
      
      Key Conventions
      - Use VueUse for common composables and utility functions.
      - Use Pinia for state management.
      - Optimize Web Vitals (LCP, CLS, FID).
      - Utilize Nuxt's auto-imports feature for components and composables.
      
      Nuxt-specific Guidelines
      - Follow Nuxt 4 directory structure app/ (e.g., pages/, components/, composables/).
      - Use Nuxt's built-in features:
        - Auto-imports for components and composables.
        - File-based routing in the pages/ directory.
        - Server routes in the server/ directory.
        - Leverage Nuxt plugins for global functionality.
      - Use useFetch and useAsyncData for data fetching.
      - Implement SEO best practices using Nuxt's useHead and useSeoMeta.
      
      Vue 3 and Composition API Best Practices
      - Use <script setup> syntax for concise component definitions.
      - Leverage ref, reactive, and computed for reactive state management.
      - Use provide/inject for dependency injection when appropriate.
      - Implement custom composables for reusable logic.
      
      Follow the official Nuxt.js and Vue.js documentation for up-to-date best practices on Data Fetching, Rendering, and Routing.
      

# When creating a new vue files use the following as templated

```vue
<i18n src="./componentName.json"></i18n>
<script lang="ts" setup>
/**
 *
 * Component Description:<The component description>
 *
 * @author Ismael Garcia <leamsigc@leamsigc.com>
 * @version 0.0.1
 *>
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
</script>

<template>
  <Content here>
</template>
<style scoped >

</style>
```
if the component is a page that is not in the /app/pages/app/ directory use the following as well for SEO in 
the script section, create the best SEO labels for the page

```
useHead({
    title: `Mexican Business in ${cityName.value} | MX Goodies`,
});

useSeoMeta({
    title: () => `${cityName.value} | MX Goodies`,
    description: () => t('description_fallback'),
    ogTitle: () => `${cityName.value} | MX Goodies`,
    ogDescription: () => t('description_fallback'),
})
// you can check in the app/components/OgImage folder for other options
defineOgImageComponent("BlogOgImage", {
    title: cityName.value,
    description: t('description_fallback'),
    headline: `${cityName.value} | MX Goodies`,
})

useSchemaOrg([
    {
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: t('home'), item: '/' },
            { '@type': 'ListItem', position: 2, name: t('cities'), item: '/cities' },
            { '@type': 'ListItem', position: 3, name: cityName.value }
        ]
    }
]);

```


```json
{
    "en": {
        "title": "Title",
        "description": "Description"
    },
    "de": {
        "title": "Titel",
        "description": "Beschreibung"
    }
}
  ```
Dont need to define the layout in the page meta for each page, we already have a middleware for that 


### When asked to create a new feature follow the following steps

1. Create the <FEATURE> directory in the `./app/pages/app/<FEATURE>/` and all the new vue routes that you need example index, create, update as well create the translation json for each file  
2. Create the <FEATURE>.ts file in the `./app/composables/use<FEATURE>.ts` file the ingle Use<FEATURE>.ts and the use<FEATURE>Management.ts
3. If the feature required a api request create the <FEATURE>.ts file in the `./server/api/v1/<FEATURE>/` file for each action CRUD base 
4. if the feature required a api request create the <FEATURE>.ts file in the `./server/services/<FEATURE>.ts`
5. If there are files created in the server folder then the following need to be handle 
    - /<FEATURE>/[action].ts CRUD base will use the ./server/services/<FEATURE>.ts to make any business logic or database operations
    - /<FEATURE>/index.ts will use the ./server/services/<FEATURE>.ts to get all the data for the <FEATURE>

Example:

User ask for new feature: `Create a feature to handle comments`
Desired folder structure

```shell
- app
    - pages
        - app
            - comments #All comments related pages will go here
                - Components/ #All comments related components will go here
                    - Comments.vue
                - index.vue
                - index.json
                - create.vue
                - create.json
                - update.vue
                - update.json
            - admin #All admin related pages will go here 
                - comments # The admin will use the components that are located in the ./app/pages/app/comments/Components/
                    - index.json
                    - index.vue
- composables
    - useComments.ts
    - useCommentsManagement.ts
- server
    - api
        - v1
            - comments
                - index.ts
                - create.ts
                - update.ts
    - services
        - comments.ts
```


## Nuxt content guidelines  when editing or editing a markdown file that is use in the nuxt content

use on the following way

```md

::F-a-q <-Component name
---
items: <-Component props
  - question: What is SmallBusinessSocialMediaTools?
    answer: It's an all-in-one platform designed for small businesses to manage their social media, Google My Business, and content creation efficiently.
    value: 1
  - question: Which social media platforms are supported?
    answer: We support Facebook, Twitter, Instagram, TikTok, and Google My Business.
    value: 2
  - question: Is there a free trial?
    answer: Yes, we offer a free tier and a 14-day free trial for our Pro plan.
    value: 3
  - question: Can I manage multiple businesses?
    answer: Absolutely! Our platform allows you to connect and manage multiple businesses under one account.
    value: 4
  - question: How does the AI content generation work?
    answer: Our AI assists in generating post ideas, bulk content, and smart responses to reviews, saving you time and effort.
    value: 5
---

#title <-Component slots
Frequently Asked Questions
#description <-Component slots
Find answers to common questions about SmallBusinessSocialMediaTools.
::

```




# For charts use the following

- Echarts 
example :
```ts
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

var chartDom = document.getElementById('main')!;
var myChart = echarts.init(chartDom);
var option: EChartsOption;

option = {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  title: {
    text: 'Gradient Stacked Area Chart'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Line 1',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [140, 232, 101, 264, 90, 340, 250]
    },
    {
      name: 'Line 2',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 282, 111, 234, 220, 340, 310]
    },
    {
      name: 'Line 3',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 132, 201, 334, 190, 130, 220]
    },
    {
      name: 'Line 4',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 0, 135)'
          },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 402, 231, 134, 190, 230, 120]
    },
    {
      name: 'Line 5',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 191, 0)'
          },
          {
            offset: 1,
            color: 'rgb(224, 62, 76)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 302, 181, 234, 210, 290, 150]
    }
  ]
};

option && myChart.setOption(option);

```

For slider use embla-carousel-vue


example :
```vue
<script setup>
  import emblaCarouselVue from 'embla-carousel-vue'

  const [emblaRef] = emblaCarouselVue()
</script>

<template>
  <div class="embla" ref="emblaRef">
    <div class="embla__container">
      <div class="embla__slide">Slide 1</div>
      <div class="embla__slide">Slide 2</div>
      <div class="embla__slide">Slide 3</div>
    </div>
  </div>
</template>

```

## Server side must follow rules

- Any api need to be in the folder server/api/v1
- The api will be the controller that will pass the task to the service after validating the body or params depending the type of request
- The service will be the one that will handle the business logic
- The repository will be the one that will handle the database logic

- Sever side will have middleware 
  - For api that need authentication  01.auth.ts
  - For api that need authorization  02.authorization.ts
- Any api that need role admin will be in the folder server/api/v1/admin
- Any api that need role user will be in the folder server/api/v1/user


## Client side rules that must be followed

- Every page will need a index.json file for translation example:

```json
{
  "en": {
    "title": "Login",
    "description": "Sign in to your account"
  },
  "es": {
    "title": "Iniciar Sesión",
    "description": "Inicia sesión en tu cuenta"
  },
  "de": {
    "title": "Anmelden",
    "description": "Melden Sie sich in Ihrem Konto an"
  },
  "fr": {
    "title": "Connexion",
    "description": "Connectez-vous à votre compte"
  }
}
```
- The supported translation will be base in the nuxt.config.ts file
- If the user language is not set we can use the default language from the browser
- The content that is used for the nuxt content module will be created in each supported language folder


Nuxt have auto import , if you need to import use '~~/' from import example
```
import { getAllStates } from '~~/server/service/listing.service';
```

###IMPORTANT ###
Avoid comments in the code

when using content module here is a example of a page in markdown file  that use frontmatter when the project have a cache all route in the 
pages folder you can create index.md will be the home page and others like about.md will be the about page

```md
---
layout: default
title: Automate Your Social Media. Grow Your Business.
description: Save 10+ hours weekly managing social media. Schedule posts, engage customers, and track results across all platforms with MagicSync—the all-in-one platform built for small businesses.

ogImage:
  component: BlogOgImage
  props:
    title: Automate Your Social Media. Grow Your Business.
    description: The all-in-one social media management platform for small businesses
    headline: MagicSync - Social Media Made Simple
    imageUrl: "/img/home-dark.png"

head:
  htmlAttrs:
    lang: en
  bodyAttrs:
    class: ""
---

::BaseHero
---
badge:
  label: New!
  content: AI-Powered Content Generation
actions:
  - label: Start Free Trial
    href: /register
    icon: "lucide:arrow-right"
  - label: Watch Demo
    href: /demo
    variant: secondary
heroImage:
  light: "/img/home-light.png"
  dark: "/img/home-dark.png"
  alt: "MagicSync Dashboard - Social Media Management Made Simple"

---
#title
Automate Your Social Media. </br>
<span class="gradient-text">Grow Your Business.</span>

#description
Save 10+ hours every week managing social media. Schedule posts, engage customers, and track results across all platforms—without the hassle or high costs.
::
```

Between the component props 

```
::ComponentName
---
propsExpectedFromComponent: 'Text array or any other '
---
#slotName
Slot content override here
::
```


and the components will need to use slots so the content can be overrrided from the frontmatter file example

```vue
<script setup lang="ts">
/**
 *
 * Component Description:Desc
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
interface Props {
  list?: {
    label: string;
    content: string;
  }[];
}

const props = withDefaults(defineProps<Props>(), {
  list: () => [
    {
      label: "What is SmallBusinessSocialMediaTools?",
      content: "It's an all-in-one platform designed for small businesses to manage their social media, Google My Business, and content creation efficiently.",
    },
  ],
});
const { list } = toRefs(props);
</script>

<template>
  <section id="faq" class="container mx-auto md:w-[700px] py-24 sm:py-32" v-motion-fade-visible-once :delay="200"
    :duration="1200">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        <slot name="title" mdc-unwrap="p"> FAQS </slot>
      </h2>
      <h3 class="text-3xl md:text-4xl text-center font-bold">
        <slot name="subtitle" mdc-unwrap="p"> Common Questions </slot>
      </h3>
    </div>

    <UAccordion :items="list" type="single" collapsible class="AccordionRoot" />

    <h3 class="font-medium mt-4">
      Still have questions?
      <NuxtLink href="/" class="text-muted-foreground underline" aria-label="Contact us" title="Contact us">Contact us
      </NuxtLink>
    </h3>
  </section>
</template>
```
