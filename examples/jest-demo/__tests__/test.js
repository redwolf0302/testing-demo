test('two plus two is four', function () {
    expect(2 + 2).not.toBe(5);
});


test.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added $b', ({a, b, expected}) => {
    expect(a + b).toBe(expected);
});