# pabloqpacin.github.io



## GitHub Pages

<!-- 
- [HOW TO](https://pages.github.com/)
    - [x] nope, rather use astro ig - [Jekyll (static site generator)](https://jekyllrb.com/docs/)
    - [ ] CNAME
    - [ ] [GitHub Pages: 404, submodules, ...](https://docs.github.com/en/pages)
- use an actual webdev framework maybe?
    - [ ] htmx
    - [ ] next.js
    - [ ] re*ct
    - [x] astro
 -->


- https://github.com/pabloqpacin/pabloqpacin.github.io
  - Settings: Pages:
    - [x] branch: devel
    - [x] root: /docs


<!-- 
## devel

```bash
cd server
vagrant up && vagrant ssh

sudo -i
cd /opt/docs
python3 -m http.server
# EDIT STUFF
```

---

-->


## Astro

<!-- ```bash
npm run dev -- --host
``` -->

<!--
- [ ] https://jekyllrb.com/docs/posts/
- [ ] https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll
- [ ] https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll
- [ ] https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- [ ] https://docs.astro.build/en/guides/deploy/github/
- [ ] https://astro.build/themes/
- [ ] https://docs.astro.build/en/basics/project-structure/
- [ ] https://astrofy-template.netlify.app/
-->

> Curso Udemy: [Desarrollo web ultra rápido con Astro](https://www.udemy.com/course/desarrollo-web-ultra-rapido-con-astro/?couponCode=SKILLS4SALEB)


### Preps

- [x] https://docs.astro.build/en/guides/deploy/github/
- SSR
  - [x] https://docs.astro.build/en/reference/errors/no-adapter-installed/
  - [ ] https://docs.astro.build/en/guides/server-side-rendering/
    - [ ] Any available **adapter** for **Github Pages**? Atm I can't figure it out
    - [x] Atm **no SSR** on **Github Pages** (INOP)

```log
# astro/action: CI/CD: Install, build, and upload your site
# https://github.com/pabloqpacin/pabloqpacin.github.io/actions/runs/10619370568/job/29436796855

[NoAdapterInstalled] Cannot use `output: 'server'` or `output: 'hybrid'` without an adapter. Please install and configure the appropriate server adapter for your final deployment.
  Hint:
    See https://docs.astro.build/en/guides/server-side-rendering/ for more information.
  Error reference:
    https://docs.astro.build/en/reference/errors/no-adapter-installed/
  Stack trace:
    at viteBuild (file:///home/runner/work/pabloqpacin.github.io/pabloqpacin.github.io/docs/node_modules/astro/dist/core/build/static-build.js:42:11)
    at async AstroBuilder.run (file:///home/runner/work/pabloqpacin.github.io/pabloqpacin.github.io/docs/node_modules/astro/dist/core/build/index.js:180:7)
    at async build (file:///home/runner/work/pabloqpacin.github.io/pabloqpacin.github.io/docs/node_modules/astro/dist/cli/build/index.js:24:3)
    at async cli (file:///home/runner/work/pabloqpacin.github.io/pabloqpacin.github.io/docs/node_modules/astro/dist/cli/index.js:168:5)
Error: Process completed with exit code 1.
```


### Next up

- [ ] https://docs.astro.build/en/guides/internationalization/



