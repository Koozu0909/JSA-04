// var count = 10;

// for (var i = 1; i <= count; i++) {
//   console.log(i);
// }

// var numbers = [1, 2, 3, 4, 5, 6, 7];

// var food = ["tao", "thit", "nho"];

// var tonghop = [1, "a", null, true];

// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// console.log("---------------------------------------------------");
// numbers.splice(1, 2, 9, 10, 12, 64, 23);

// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

var cat = {
  cannang: 5,
  chieucao: 20,
  img: "",
};

var cats = [
  {
    id: 1,
    name: "Meo Nho",
    cannang: 6,
    chieucao: 20,
    img: "",
  },
  {
    id: 2,
    name: "Meo Lớn",
    cannang: 5,
    chieucao: 25,
    img: "",
    catcon: [
      {
        name: "Meo Lớn Hơn 1",
        cannang: 6,
        chieucao: 20,
        img: "",
      },
      {
        name: "Meo Lớn Hơn 2",
        cannang: 6,
        chieucao: 20,
        img: "",
      },
    ],
  },
];

console.log(cats[1].catcon[1].name);

// for (var i = 0; i < cats.length; i++) {
//   console.log("Con Meo Ten " + cats[i].name + " Can nang " + cats[i].cannang);
// }
