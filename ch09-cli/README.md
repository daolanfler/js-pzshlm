## 如何发布

```bash
npm login --scope=@xxx --registry=https://registry.npmjs.org

npm publish --access public
```

[文档](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)

```bash
npm config list
# something like this
# @daolanfler:registry = "https://registry.npmjs.org/"  // user
# @funkey:registry = "https://registry.npmjs.org/"      // org
```