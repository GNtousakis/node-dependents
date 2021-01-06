# node-dependents

Tool to gather all dependents of a npm package. 

For example:
  - Package A has B, C as dependents.
  - Package B has D, E as dependents.
  - Package C has F, G as dependents.
  
  The tool should return the number __6__ as the number of dependents.

### Installation 

```sh
# With npm
npm i node-dependents -g
```

### How to use

```sh
node-dependents <package name>
```

