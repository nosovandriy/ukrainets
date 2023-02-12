# Start development

```sh
npm run dev
```


# Documentation

Specs for react framework and css

- [Next.js](https://nextjs.org/docs/getting-started)

- [Tailwindcss](https://tailwindcss.com/docs/configuration)
  Add **Tailwindcss** [extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) to VSCode

# Git branching

The simple convention for branch naming in *kebab-case* with component/feature/bugfix prefix.

```
  > component/some-huge-features
  > feature/some-feature-name
  > bugfix/bug-name
  > hotfix/description
              
```

# Style Guidelines
## Project structure

```
  > components
    > footer
    > pages
      > home
        
  > pages
    index.tsx [all pages of the project]
```



| Folder           | Purpose                                                                                           |
| -----------------| --------------------------------------------------------------------------------------------------|
| /components       | Shared components that can be used across the whole application                                  |
| /components/pages | Shared components that can be used in scope of one page                                          |
| /consts     | Reusable constants                                                                                     |
| /pages      | Main pages in the project (for now we have only one page as it is landing)                             |

---

## Components

### 1. Barrel file

We are using barrel rule for all the components. Each folder contain index.ts file which exports one or more components.
```
index.ts

export * from './component-name.tsx';
```
You can read more about barrel files [here](https://medium.com/suyeonme/barrel-adding-barrel-into-typescript-7141a6ac9003).

### 2. Structure

Component consist with *tsx* and *scss* (if needed) files. If your component is large, you can decompose some of the parts with nested folders.

```
Structure of the component:

  > hero-section.tsx
  > hero-section.module.scss
  > index.ts

  > hero-header
    > hero-header.tsx
    > index.ts
```

### 3. Scss files

Style files should always be created and used within component that needs those styles.
**Next.js** has specific rules for the *css* and *scss* files.


```
1. File name should be the same as component name
  > hero-section.tsx
  > hero-section.module.scss

2. Scss file should always have .module in the file name
  > hero-section.module.scss

3. Class names should be in camelCase so it will be easy to use it in the component
  > .someGreatClass {

    }

    <div className={style.someGreatClass} />

4. Import style file always on the top of the component page
  > import style from './some-great.module.scss';

    import React from 'react';
```
### 4. File naming

Typescript files should be always named in *kebab-case*

```
  > hero-section.tsx
```
