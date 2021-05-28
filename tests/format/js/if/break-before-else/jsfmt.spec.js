// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

const dirPath = `${__dirname}/..`;

run_spec(dirPath, ["babel", "babel-flow", "flow", "typescript"], {
  // [prettierx] test with --break-before-else
  breakBeforeElse: true,
  // recommended:
  trailingComma: "none", // ("Standard JS")
});
