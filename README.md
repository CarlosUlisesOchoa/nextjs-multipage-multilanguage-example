<div align="center">
  <h1>Next.js 13.4 + appDir enabled + i18n + <a href="https://github.com/svobik7/next-roots">next-roots</a></h1>
  <a href="https://github.com/CarlosUlisesOchoa/nextjs-multipage-multilanguage-example"><img src="https://img.shields.io/badge/latest%20release-v1.0.0-blue" /></a>
  <a href="https://github.com/CarlosUlisesOchoa/nextjs-multipage-multilanguage-example"><img src="https://img.shields.io/badge/coverage-100%25-brightgreen" /></a>
  <a href="https://github.com/CarlosUlisesOchoa/nextjs-multipage-multilanguage-example"><img src="https://img.shields.io/tokei/lines/github/carlosulisesochoa/nextjs-multipage-multilanguage-example" /></a>
  <a href="https://github.com/CarlosUlisesOchoa/nextjs-multipage-multilanguage-example"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen" /></a>
  <a href="https://github.com/CarlosUlisesOchoa/nextjs-multipage-multilanguage-example/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" /></a>
</div>

<br/>

This is a Next.js 13.4 project that leverages i18n, the experimental appDir feature, and the next-roots package for an improved internationalization experience and SEO friendly. <br/> <br/>

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [About developer](#about-developer)

<br/>

## Overview

In this application, I've implemented internationalization (i18n) by using the next-roots package. This approach simplifies routing by generating all localized file-routes (slugs) in advance, rather than using dynamic `[lang]` segments.

<br/>

## Getting Started

1. Clone the repository:

```bash
  git clone https://github.com/CarlosUlisesOchoa/nextjs-multipage-multilanguage-example.git
```

<br/>

2. Open the project's folder:

```bash
  cd nextjs-multipage-multilanguage-example
```

<br/>

3. Install dependencies:
 
```bash
  pnpm install
```

<br/>

4. Generate the routes (routes are generated and placed at ```src/app```
 
 ```bash
   pnpm next-roots
 ```

<br/>

5. Run the development server:

```bash
  npm run dev
```

<br/>

6. Open http://localhost:3000 in your browser to see the app in action.

<br/>

## Contributing

Pull requests and contributions are welcome. Please open an issue first to discuss your proposed changes or improvements.

<br/>

## License

This project is released under the [MIT License](LICENSE).

<br/>

## About developer

Visit my web [Carlos Ochoa](https://carlos8a.com)

<br/>

---

**Note:** If you encounter any issues with the project, please report them [here](https://github.com/CarlosUlisesOchoa/nextjs-multipage-multilanguage-example/issues). Contributions are welcome!
