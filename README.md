# grunt-setup

Requirements:

* **Node.js** (tested with version **5.5.0**)
* **npm** (tested with version **3.4.1**)
* **Ruby** (tested with version **2.3.0**)
* **Sass** (tested with version **3.4.21**)

`cd` into the grunt directory and run:

```sh
npm install
```

To start the watching, run:

```sh
grunt watch
```

The `package.json` file contains only the name and version fields. Those are actually required.

```json
{
  "version": "0.0.1",
  "name": "grunt-sass-cssmin"
}
```

You may want to at least add the description, repository and license fields. Otherwise npm will spew out warnings.

More about the `package.json` file can be [found here](https://docs.npmjs.com/files/package.json).
