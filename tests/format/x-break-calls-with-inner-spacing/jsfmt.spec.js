// [prettierx] test script notice:
// This test script runs for test files in another directory,
// **not** on any files in *this* directory.

const dirpath = `${__dirname}/../../break-calls`;

run_spec(dirpath, ["babel-flow", "flow", "typescript"], {
  // [prettierx] test with --paren-spacing
  spaceInParens: true,
  arrayBracketSpacing: true,
  computedPropertySpacing: true,
  typeAngleBracketSpacing: true,
  trailingComma: "none", // ("Standard JS")
});
