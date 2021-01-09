#!/usr/bin/env node

const packageName = process.argv[2] ? process.argv[2] : process.exit();
const PackageDependents = require("package-dependents");
const sleep = require("sleep");

/* Store the dependents names and number */
const nameSet = new Set();
let counter = 0;

/* Get package dependents */
function getDependents (name) {
  PackageDependents(name).then(packages => {
    packages.forEach(c => {
      /* If the name has not appear again increase the counter */
      if (!nameSet.has(c.name)){
        nameSet.add(c.name);
        counter++;
        sleep.msleep(1000);
        getDependents(c.name);
      }
    })
  })
}

/* Add original name to set */
nameSet.add(packageName);
getDependents(packageName);

process.on('exit', () => {
    console.log("Package depentends:", counter)
});
