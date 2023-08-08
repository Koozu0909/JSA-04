async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function run() {
  const datas2 = await getData(`https://jsonplaceholder.typicode.com/posts`);


  var top1 = datas2.slice(0, 8);

console.log(top1);

}

run();
