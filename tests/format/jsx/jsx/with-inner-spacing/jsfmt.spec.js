// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

const dirPath = `${__dirname}/..`;

run_spec(dirPath, ["babel", "babel-flow", "flow", "typescript"], {
  singleQuote: false,
  jsxSingleQuote: false,
  // [prettierx] test with --paren-spacing
  spaceInParens: true,
  arrayBracketSpacing: true,
  computedPropertySpacing: true,
  templateCurlySpacing: true,
  typeAngleBracketSpacing: true,
  // recommended:
  arrowParens: "avoid",
  trailingComma: "none", // ("Standard JS")
});
