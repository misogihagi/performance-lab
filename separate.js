const str = "ABCDE".repeat(100000);

function pattern1(str) {
  let result1 = str.match(/.{3}/g);
}

function pattern2(str) {
  let result2 = [];
  for (let i = 0; i < str.length / 3; i++) {
    result2.push(str.substr(i * 3, 3));
  }
}

function pattern3(str) {
  let result3 = [];
  for (let i = 0; i < str.length; i += 3) {
    result3.push(str.substring(i, i + 3));
  }
}

function pattern4(str) {
  let result4 = [];
  for (let i = 0; i < str.length; i += 3) {
    result4.push(str.slice(i, i + 3));
  }
}

function pattern5(str) {
  const splitted = [...str];
  let result5 = splitted.reduce(
    (acc, c, i) => (i % 3 ? acc : [...acc, splitted.slice(i, i + 3).join("")]),
    []
  );
}

function measure(func) {
  const start = performance.now();
  func(str);
  const end = performance.now();
  console.log(end - start);
}

measure(pattern1);
measure(pattern2);
measure(pattern3);
measure(pattern4);
measure(pattern5);
