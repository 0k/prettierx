// [prettierx] test script notice:
// This test script runs for test files in another directory,
// **not** on any files in *this* directory.

const dirpath = `${__dirname}/../../arrows`;

run_spec(dirpath, ["babel", "babel-flow", "flow", "typescript"], {
  // [prettierx] recommended option, especially in combo with --paren-spacing
  arrowParens: "avoid",
  // [prettierx] test with --paren-spacing
  spaceInParens: true,
  computedPropertySpacing: true,
  templateCurlySpacing: true,
  typeAngleBracketSpacing: true,
});
