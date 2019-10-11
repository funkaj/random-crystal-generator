## Random Crystal Name Generator

A simple function that returns a random crystal name string.

### Installation

`$ npm i --save random-crystal-generator`

## How to

- React example

```
import React from 'react';
import Crystal from 'random-crystal-generator';

function CrystalHeader() {
    const crystal = new Crystal();

    return (
        <h1>{crystal.name}<h1>
    );
};

export default CrystalHeader;

```

- NodeJS

```
const Crystal = require('random-crystal-generator');

const crystal = new Crystal();

console.log(crystal.name);

```
