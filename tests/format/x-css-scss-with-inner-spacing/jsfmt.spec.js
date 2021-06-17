// [prettierx] test script notice:
// This test script runs for test files in another directory,
// **not** on any files in *this* directory.

const dirpath = `${__dirname}/../../css_scss`;

run_spec(dirpath, ["scss"], {
  // [prettierx] test with --css-paren-spacing
  cssParenSpacing: true,
});
