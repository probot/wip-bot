module.exports = function isScopeValid([{ scope: scopes }], validScopes) {
  const isRegex = /(^\/|\/$)/g;
  const validRegex = (valid, scope) =>
    new RegExp(valid.replace(isRegex, "")).test(scope);
  const validExact = (valid, scope) => valid === scope;

  return (
    !validScopes ||
    !scopes ||
    scopes
      .split(",")
      .map((scope) => scope.trim())
      .every((scope) =>
        validScopes.some((valid) =>
          valid.match(isRegex)
            ? validRegex(valid, scope)
            : validExact(valid, scope)
        )
      )
  );
};
