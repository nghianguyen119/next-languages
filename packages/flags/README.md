# Live Demo

You can see the package in action at [this link](https://next-flags-iota.vercel.app/).

# Next Languages Flags

The package provides a collection of flag components that can be used to represent different countries. It offers two ways to import flags: you can either import a specific flag component (like the French flag with `Fr`), or you can import a dynamic `Flag` component that accepts a country code as a prop. The country code can be an alpha-2, alpha-3, or numeric country code.

The package also includes a CSS file that provides the necessary styles for the flag components. This approach, as opposed to using styled components, ensures that the server-side components maintain their intended appearance during server-side rendering. This makes it easy to add beautiful, responsive flags to your internationalized website without compromising on performance or consistency.

# Flag Creation Process

- The SVGs for the flags are gathered from MIT licensed projects such as Flagpack, or from resources like https://flagicons.lipis.dev/.
- The flags are then optimized using SVGO. This step removes any redundant elements and minimizes the file size of each flag. The optimized SVGs are then converted into TSX format.
- Finally, Rollup is used to bundle the flags, making them accessible for both CommonJS (cjs) and ECMAScript Module (esm) formats.

## Setup

Here are the steps to add the `@next-languages/flags` package to your project. You can use the package manager of your choice:

- For `pnpm`, use the command: `pnpm add @next-languages/flags`
- For `npm`, use the command: `npm install @next-languages/flags`
- For `yarn`, use the command: `yarn add @next-languages/flags`

## How to Use

First, import the CSS file:

```javascript
import "@next-languages/flags/style.css";
```

You have two options for importing flags:

1. Importing a Specific Flag: If you need a specific flag, it's recommended to import it directly. For instance, to import the flag of France, you would use the corresponding alpha-2 country code from [this list](https://www.iban.com/country-codes). In our package, the country codes are capitalized only at the first letter. So, for France, the import statement would be:

```javascript
import { Fr } from "@next-languages/flags";
```

You can then use it in your component like so:

```javascript
<Fr />
```

2. Import a dynamic flag: This allows you to set the flag based on a country code. First, import the necessary components:

```javascript
import { countryCodeList, Flag, IFlagEntry } from "@next-languages/flags";
```

Then, use the Flag component in your code. The countryCode prop can be an alpha-2, alpha-3, or numeric country code. For example:

```javascript
<Suspense fallback={<div>...</div>}>
  <Flag countryCode={countryCode.alpha2} />
</Suspense>
```

In this example, the `Suspense` component is used to prevent infinite rendering while the `Flag` component is loading. By providing a fallback UI, `Suspense` ensures that the component rendering is controlled and doesn't lead to an infinite loop. For more information, refer to these discussions on [StackOverflow](https://stackoverflow.com/questions/71594952/react-18-infinite-rendering-when-passing-a-state-variable-for-lazy-loading) and [GitHub](https://github.com/facebook/react/issues/24534).
