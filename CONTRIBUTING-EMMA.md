# Contributing to react-day-picker


### Use the website to manually test changes

The best way to develop and test a new idea or a bug fix is to check out the `v7` branch and run locally
[the website](https://react-day-picker.js.org):

```bash
$ git clone -b v7 git@github.com:emmadev/react-day-picker.git
$ cd react-day-picker
$ cd docs
$ yarn install
$ yarn develop
```

Then open [localhost:8000](http://localhost:8000).

> For example, change
> [./docs/src/code-samples/examples/basic.js](./docs/src/code-samples/examples/basic.js)
> to see it updated in
> [localhost:8000/examples/basic](http://localhost:8000/examples/basic).

In the code, using `import from react-day-picker` will load the
[source code](src) instead of the [compiled lib](lib).
