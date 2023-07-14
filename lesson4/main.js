//Khả năng lưu trữ: Local storage cho phép lưu trữ lượng dữ liệu tương đối lớn, thông thường khoảng 5MB trên hầu hết các trình duyệt.

//Dữ liệu lưu trữ: Local storage chỉ có thể lưu trữ dữ liệu dạng chuỗi (string).
//Để lưu trữ dữ liệu phức tạp hơn như đối tượng JavaScript, cần chuyển đổi dữ liệu thành chuỗi trước khi lưu trữ và
//chuyển đổi ngược lại khi truy xuất.

// Phạm vi lưu trữ: Dữ liệu local storage lưu trữ trên trình duyệt của người dùng và chỉ có
//thể truy cập từ cùng một trang web hoặc các trang web có cùng nguồn gốc (cùng tên miền và giao thức).

// Giao diện lập trình: Để làm việc với local storage, có thể sử dụng API localStorage trong JavaScript.
//API này cung cấp các phương thức như setItem(), getItem(), removeItem() và clear() để lưu trữ, truy xuất,
// xóa và xóa tất cả các mục trong local storage

// Hạn chế: Mặc dù local storage rất hữu ích trong việc lưu trữ dữ liệu người dùng,
// nó cũng có một số hạn chế. Đầu tiên, dữ liệu trong local storage chỉ được lưu trữ trên trình duyệt của người dùng
// và không được chia sẻ qua các thiết bị khác nhau. Thứ hai, dữ liệu trong local storage có thể bị xóa khi người dùng xóa lịch sử duyệt web hoặc quét máy tính để loại bỏ dữ liệu.

// Bảo mật: Local storage không cung cấp cơ chế bảo mật tích hợp. Dữ liệu trong local storage có thể bị truy cập
// hoặc sửa đổi bởi các đoạn mã JavaScript độc hại hoặc thông qua công cụ của trình duyệt.
// vậy, không nên lưu trữ dữ liệu nhạy cảm trong local storage mà không có bất kỳ biện pháp bảo mật bổ sung.

// // Lưu trữ dữ liệu vào local storage
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "25");

// // Truy xuất dữ liệu từ local storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");

// console.log(name); // 'John'
// console.log(age); // '25'

// // Xóa một mục trong local storage
// localStorage.removeItem("age");

// // Xóa tất cả các mục trong local storage
// // localStorage.clear();

// Lưu trữ đối tượng vào local storage
const person = {
  name: "John",
  age: 25,
  city: "New York",
};
// console.log(person);

const jsonPerson = JSON.stringify(person);
// console.log(jsonPerson);
localStorage.setItem("person", jsonPerson);

// Truy xuất và chuyển đổi từ chuỗi JSON thành đối tượng JavaScript
const storedPerson = localStorage.getItem("person");
console.log(storedPerson);
const parsedPerson = JSON.parse(storedPerson);
console.log(parsedPerson);

console.log(parsedPerson.name); // 'John'
console.log(parsedPerson.age); // 25
console.log(parsedPerson.city); // 'New York'

// const to_do_list = ["quét nhà", "lau nhà", "nấu cơm"];

// localStorage.setItem("to_do_list", JSON.stringify(to_do_list));

    function render_list() {
    let result = localStorage.getItem("to_do_list");
    result = JSON.parse(result);

    let list_container = document.getElementById("to-do-list");
    list_container.innerHTML = "";
    for (item of result) {
        let item_ele = document.createElement("li");
        item_ele.classList.add("to-do-item");
        item_ele.innerHTML = item;
        list_container.appendChild(item_ele);
    }
    }
    render_list();

let submit_btn = document.querySelector(".submit-btn");
let to_do_input = document.querySelector(".to-do-input");

submit_btn.addEventListener("click", function () {
  let value = to_do_input.value;
  if (value != "") {
    let new_list = localStorage.getItem("to_do_list");
    new_list = JSON.parse(new_list);
    new_list.push(value);
    localStorage.setItem("to_do_list", JSON.stringify(new_list));
    to_do_input.value = "";
    to_do_input.focus();
    render_list();
  }
});
