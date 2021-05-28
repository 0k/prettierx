// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

const dirPath = `${__dirname}/..`;

// [prettierx] test with --paren-spacing, only with defaults
// including arrowParens: "avoid"
// (note that this combination is **not** recommended)
run_spec(dirPath, ["flow", "babel", "babel-flow"], {
  spaceInParens: true,
  typeAngleBracketSpacing: true,
  typeBracketSpacing: false,
});
