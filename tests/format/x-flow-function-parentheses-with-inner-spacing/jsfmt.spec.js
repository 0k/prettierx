// [prettierx] test script notice:
// This test script runs for test files in another directory,
// **not** on any files in *this* directory.

const dirpath = `${__dirname}/../../flow_function_parentheses`;

// [prettierx] test with --paren-spacing, only with defaults
// including arrowParens: "avoid"
// (note that this combination is **not** recommended)
run_spec(dirpath, ["flow", "babel", "babel-flow"], {
  spaceInParens: true,
  typeAngleBracketSpacing: true,
});
