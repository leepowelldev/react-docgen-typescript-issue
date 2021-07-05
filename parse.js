const docgen = require('react-docgen-typescript');
const path = require('path');
const { assert } = require('console');

const compilerOptions = {
  skipChildrenPropWithoutDoc: false,
};

const result = docgen.parse(path.resolve('./component.tsx'), compilerOptions);
const result2 = docgen.parse(path.resolve('./component2.tsx'), compilerOptions);

assert(result[0].props.children.required, true);
assert(result2[0].props.children.required, true);
