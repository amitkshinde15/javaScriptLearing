
let a = [85, 5, 65, 7, 57, 10, 22,65, 89, 78];
let sort;
for (let i = 0; i < a.length; i++) {
  for (let j = i; j < a.length; j++) {
    if (a[i] > a[j]) {
      sort = a[i];
      a[i] = a[j];
      a[j] = sort;
    }
  }
}
console.log(a);
