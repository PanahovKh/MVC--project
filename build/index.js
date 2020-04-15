// const Model = require('./js/Model.js');
// const View = require('./js/View.js');
// const Controller = require('./js/Controller.js');

// function initProject() {
//     const model = new Model();
//     const view = new View();
//     const controller = new Controller(model, view);
// }

// initProject()

const root = document.querySelector('div#root');


//first form--------------------------------------------------------
const div = document.createElement('div');
div.setAttribute('class', 'container-first3')
root.appendChild(div);

const formTag = document.createElement('form');
formTag.setAttribute('id','container-first__form-input')
div.appendChild(formTag);

const RegDiv = document.createElement('div');
RegDiv.setAttribute('class', 'find');
RegDiv.title = 'регистрация';
RegDiv.textContent = 'введите данные';
formTag.appendChild(RegDiv);

const lebel = document.createElement('label');
lebel.setAttribute('for', 'name');
lebel.innerHTML = 'Имя <span>*</span>';
formTag.appendChild(lebel);

const input = document.createElement('input');
input.setAttribute('id', 'name');
input.setAttribute('name', 'name');
input.setAttribute('type', 'text');
input.placeholder = 'Введите имя';
formTag.appendChild(input);

const lebel_1 = document.createElement('label');
lebel_1.setAttribute('for', 'surname');
lebel_1.innerHTML = 'Фамилия <span>*</span>';
formTag.appendChild(lebel_1);

const input_1 = document.createElement('input');
input_1.setAttribute('id', 'surname');
input_1.setAttribute('type', 'text');
input_1.placeholder = 'Введите Фамилию';
formTag.appendChild(input_1);

const lebel_2 = document.createElement('label');
lebel_2.setAttribute('for', 'age');
lebel_2.innerHTML = 'Возрост <span>*</span>';
formTag.appendChild(lebel_2);

const input_2 = document.createElement('input');
input_2.setAttribute('id', 'age');
input_2.setAttribute('type', 'number');
input_2.placeholder = 'Введите Возрост';
input_2.min = '1';
input_2.max = '100';    
formTag.appendChild(input_2);

const btnDiv = document.createElement('div');
btnDiv.setAttribute('onclick', 'sendName()');
btnDiv.setAttribute('id', 'send');
btnDiv.setAttribute('class', 'btn');
btnDiv.textContent = 'Отправить';
formTag.appendChild(btnDiv);

//first-page_second form------------------------------------------------
const formTag_1 = document.createElement('form');
formTag_1.setAttribute('id','container-first__form-input')
div.appendChild(formTag_1);

const findDiv = document.createElement('div');
findDiv.setAttribute('class', 'find');
findDiv.textContent = 'Список Имен';
findDiv.title = 'вы можете найти тут свою имя';
formTag_1.appendChild(findDiv);

const textarea = document.createElement('div');
textarea.setAttribute('id', 'message');
textarea.name = 'message';
textarea.placeholder = 'Имя Фамилия Возрост';
formTag_1.appendChild(textarea);

const list = document.createElement('ul');
list.setAttribute('id', 'list');
textarea.appendChild(list);

//second page -------------------------------------------------
const div_1 = document.createElement('div');
div_1.setAttribute('class', 'container-second');
root.appendChild(div_1);

const formTag_2 = document.createElement('form');
formTag_2.setAttribute('id','container-first__form-input');
div_1.appendChild(formTag_2);

const RegDiv_1 = document.createElement('div');
RegDiv_1.setAttribute('class', 'find');
RegDiv_1.title = 'найдите свое имя';
RegDiv_1.textContent = 'поиск человека !';
formTag_2.appendChild(RegDiv_1);

const lebel_3 = document.createElement('label');
lebel_3.setAttribute('for', 'names');
lebel_3.innerHTML = 'Имя<span>*</span>';
formTag_2.appendChild(lebel_3);

const input_3 = document.createElement('input');
input_3.setAttribute('id', 'names');
input_3.setAttribute('name','name');
input_3.setAttribute('type', 'text');
input_3.placeholder = 'Введите имя';
formTag_2.appendChild(input_3);

const lebel_4 = document.createElement('label');
lebel_4.setAttribute('for', 'surnames');
lebel_4.innerHTML = 'Фамилия <span>*</span>';
formTag_2.appendChild(lebel_4);

const input_4 = document.createElement('input');
input_4.setAttribute('id', 'surnames');
input_4.setAttribute('type', 'text');
input_4.placeholder = 'Введите Фамилию';
formTag_2.appendChild(input_4);

const lebel_5 = document.createElement('label');
lebel_5.setAttribute('for', 'ages');
lebel_5.innerHTML = 'Возрост <span>*</span>';
formTag_2.appendChild(lebel_5);

const input_5 = document.createElement('input');
input_5.setAttribute('id', 'ages');
input_5.setAttribute('type', 'number');
input_5.placeholder = 'Введите Возрост';
input_5.min = '1';
input_5.max = '100';
formTag_2.appendChild(input_5);

const btnDiv_1 = document.createElement('div');
btnDiv_1.setAttribute('onclick', 'searchName()');
btnDiv_1.setAttribute('class', 'btn');
btnDiv_1.textContent = 'Поиск';
formTag_2.appendChild(btnDiv_1);

//second-page_second-form-------------------------------
const formTag_3 = document.createElement('form');
formTag_3.setAttribute('id','container-first__form-input')
div_1.appendChild(formTag_3);

const findDiv_1 = document.createElement('div');
findDiv_1.setAttribute('class', 'find');
findDiv_1.title = 'Результат поиска';
findDiv_1.textContent = ' Результат поиска';
formTag_3.appendChild(findDiv_1);

const textarea_1 = document.createElement('div');
textarea_1.setAttribute('id', 'message');
textarea_1.name = 'message';
textarea_1.placeholder = 'Имя Фамилия Возрост';
formTag_3.appendChild(textarea_1);

const list_1 = document.createElement('ul');
list_1.setAttribute('id', 'list2')
textarea_1.appendChild(list_1);



//--------------------------------------------------------------------------------


var people = [];

function sendName() {
    var sName = document.getElementById('name').value;
    var sSurname = document.getElementById('surname').value;
    var sAge = document.getElementById('age').value;
    if (!((sName === "") && (sSurname === "") && (sAge === ""))) {
        var p = {
            name: sName,
            surname: sSurname,
            age: sAge, 
        };
    people.push(p);
    
    for (i = 0; i < people.length; i++) {
        let oldlist = document.getElementById('list');
    for (i = 0; i < people.length; i++) {
        var newlist = document.getElementById('list').innerHTML;
        var newlist = newlist + "<li>" + people[i].name + " " + people[i].surname  + " " +  people[i].age + "</li>";
    };
    oldlist.innerHTML =  newlist;
    };
  };
};


function searchName() {
    var sNames = document.getElementById('names').value;
    var sSurnames = document.getElementById('surnames').value;
    var sAges = document.getElementById('ages').value;
    

    var resmassiv = [];

    for (var i = 0; i < people.length; i++) {
        if ((people[i].name === sNames && sNames !== "") || (people[i].surname === sSurnames && sSurnames !== "") || (people[i].age === sAges && sAges !== "")) {
            var newarray = {
                name: people[i].name,
                surname: people[i].surname,
                age: people[i].age,
            } 
        resmassiv.push(newarray);
        };
    };

        document.getElementById('list2').innerHTML = "";
        var resultObject = resmassiv;
        searchList = resultObject.length;
        for (y = 0; y < searchList; y++) {
    
            oldlistsearch = document.getElementById('list2');
            for (y = 0; y < searchList; y++) {
                var newlistsearchh = document.getElementById('list2').innerHTML;
                var newlistsearch = newlistsearchh + "<li>" + resultObject[y].name + " " + resultObject[y].surname + " " + resultObject[y].age + "</li>";
            oldlistsearch.innerHTML = newlistsearch;
        };
     };
    };

// function Controller(view, model) {
//     this.model = model;
//     this.view = view;
// }

// module.exports = Controller;

// function Model() {

// }

// module.exports = Model;
// function View() {

// }
// module.exports = View;


    
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwianMvQ29udHJvbGxlci5qcyIsImpzL01vZGVsLmpzIiwianMvVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBNb2RlbCA9IHJlcXVpcmUoJy4vanMvTW9kZWwuanMnKTtcclxuLy8gY29uc3QgVmlldyA9IHJlcXVpcmUoJy4vanMvVmlldy5qcycpO1xyXG4vLyBjb25zdCBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9qcy9Db250cm9sbGVyLmpzJyk7XHJcblxyXG4vLyBmdW5jdGlvbiBpbml0UHJvamVjdCgpIHtcclxuLy8gICAgIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCk7XHJcbi8vICAgICBjb25zdCB2aWV3ID0gbmV3IFZpZXcoKTtcclxuLy8gICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihtb2RlbCwgdmlldyk7XHJcbi8vIH1cclxuXHJcbi8vIGluaXRQcm9qZWN0KClcclxuXHJcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjcm9vdCcpO1xyXG5cclxuXHJcbi8vZmlyc3QgZm9ybS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5kaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250YWluZXItZmlyc3QzJylcclxucm9vdC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuY29uc3QgZm9ybVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuZm9ybVRhZy5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFpbmVyLWZpcnN0X19mb3JtLWlucHV0JylcclxuZGl2LmFwcGVuZENoaWxkKGZvcm1UYWcpO1xyXG5cclxuY29uc3QgUmVnRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblJlZ0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpbmQnKTtcclxuUmVnRGl2LnRpdGxlID0gJ9GA0LXQs9C40YHRgtGA0LDRhtC40Y8nO1xyXG5SZWdEaXYudGV4dENvbnRlbnQgPSAn0LLQstC10LTQuNGC0LUg0LTQsNC90L3Ri9C1JztcclxuZm9ybVRhZy5hcHBlbmRDaGlsZChSZWdEaXYpO1xyXG5cclxuY29uc3QgbGViZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5sZWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XHJcbmxlYmVsLmlubmVySFRNTCA9ICfQmNC80Y8gPHNwYW4+Kjwvc3Bhbj4nO1xyXG5mb3JtVGFnLmFwcGVuZENoaWxkKGxlYmVsKTtcclxuXHJcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XHJcbmlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XHJcbmlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbmlucHV0LnBsYWNlaG9sZGVyID0gJ9CS0LLQtdC00LjRgtC1INC40LzRjyc7XHJcbmZvcm1UYWcuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuY29uc3QgbGViZWxfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbmxlYmVsXzEuc2V0QXR0cmlidXRlKCdmb3InLCAnc3VybmFtZScpO1xyXG5sZWJlbF8xLmlubmVySFRNTCA9ICfQpNCw0LzQuNC70LjRjyA8c3Bhbj4qPC9zcGFuPic7XHJcbmZvcm1UYWcuYXBwZW5kQ2hpbGQobGViZWxfMSk7XHJcblxyXG5jb25zdCBpbnB1dF8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuaW5wdXRfMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1cm5hbWUnKTtcclxuaW5wdXRfMS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG5pbnB1dF8xLnBsYWNlaG9sZGVyID0gJ9CS0LLQtdC00LjRgtC1INCk0LDQvNC40LvQuNGOJztcclxuZm9ybVRhZy5hcHBlbmRDaGlsZChpbnB1dF8xKTtcclxuXHJcbmNvbnN0IGxlYmVsXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5sZWJlbF8yLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2FnZScpO1xyXG5sZWJlbF8yLmlubmVySFRNTCA9ICfQktC+0LfRgNC+0YHRgiA8c3Bhbj4qPC9zcGFuPic7XHJcbmZvcm1UYWcuYXBwZW5kQ2hpbGQobGViZWxfMik7XHJcblxyXG5jb25zdCBpbnB1dF8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuaW5wdXRfMi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FnZScpO1xyXG5pbnB1dF8yLnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcclxuaW5wdXRfMi5wbGFjZWhvbGRlciA9ICfQktCy0LXQtNC40YLQtSDQktC+0LfRgNC+0YHRgic7XHJcbmlucHV0XzIubWluID0gJzEnO1xyXG5pbnB1dF8yLm1heCA9ICcxMDAnOyAgICBcclxuZm9ybVRhZy5hcHBlbmRDaGlsZChpbnB1dF8yKTtcclxuXHJcbmNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5idG5EaXYuc2V0QXR0cmlidXRlKCdvbmNsaWNrJywgJ3NlbmROYW1lKCknKTtcclxuYnRuRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VuZCcpO1xyXG5idG5EaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdidG4nKTtcclxuYnRuRGl2LnRleHRDb250ZW50ID0gJ9Ce0YLQv9GA0LDQstC40YLRjCc7XHJcbmZvcm1UYWcuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcclxuXHJcbi8vZmlyc3QtcGFnZV9zZWNvbmQgZm9ybS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBmb3JtVGFnXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbmZvcm1UYWdfMS5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFpbmVyLWZpcnN0X19mb3JtLWlucHV0JylcclxuZGl2LmFwcGVuZENoaWxkKGZvcm1UYWdfMSk7XHJcblxyXG5jb25zdCBmaW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmZpbmREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaW5kJyk7XHJcbmZpbmREaXYudGV4dENvbnRlbnQgPSAn0KHQv9C40YHQvtC6INCY0LzQtdC9JztcclxuZmluZERpdi50aXRsZSA9ICfQstGLINC80L7QttC10YLQtSDQvdCw0LnRgtC4INGC0YPRgiDRgdCy0L7RjiDQuNC80Y8nO1xyXG5mb3JtVGFnXzEuYXBwZW5kQ2hpbGQoZmluZERpdik7XHJcblxyXG5jb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG50ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2UnKTtcclxudGV4dGFyZWEubmFtZSA9ICdtZXNzYWdlJztcclxudGV4dGFyZWEucGxhY2Vob2xkZXIgPSAn0JjQvNGPINCk0LDQvNC40LvQuNGPINCS0L7Qt9GA0L7RgdGCJztcclxuZm9ybVRhZ18xLmFwcGVuZENoaWxkKHRleHRhcmVhKTtcclxuXHJcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5saXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbGlzdCcpO1xyXG50ZXh0YXJlYS5hcHBlbmRDaGlsZChsaXN0KTtcclxuXHJcbi8vc2Vjb25kIHBhZ2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBkaXZfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5kaXZfMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRhaW5lci1zZWNvbmQnKTtcclxucm9vdC5hcHBlbmRDaGlsZChkaXZfMSk7XHJcblxyXG5jb25zdCBmb3JtVGFnXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbmZvcm1UYWdfMi5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFpbmVyLWZpcnN0X19mb3JtLWlucHV0Jyk7XHJcbmRpdl8xLmFwcGVuZENoaWxkKGZvcm1UYWdfMik7XHJcblxyXG5jb25zdCBSZWdEaXZfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5SZWdEaXZfMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpbmQnKTtcclxuUmVnRGl2XzEudGl0bGUgPSAn0L3QsNC50LTQuNGC0LUg0YHQstC+0LUg0LjQvNGPJztcclxuUmVnRGl2XzEudGV4dENvbnRlbnQgPSAn0L/QvtC40YHQuiDRh9C10LvQvtCy0LXQutCwICEnO1xyXG5mb3JtVGFnXzIuYXBwZW5kQ2hpbGQoUmVnRGl2XzEpO1xyXG5cclxuY29uc3QgbGViZWxfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbmxlYmVsXzMuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZXMnKTtcclxubGViZWxfMy5pbm5lckhUTUwgPSAn0JjQvNGPPHNwYW4+Kjwvc3Bhbj4nO1xyXG5mb3JtVGFnXzIuYXBwZW5kQ2hpbGQobGViZWxfMyk7XHJcblxyXG5jb25zdCBpbnB1dF8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuaW5wdXRfMy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWVzJyk7XHJcbmlucHV0XzMuc2V0QXR0cmlidXRlKCduYW1lJywnbmFtZScpO1xyXG5pbnB1dF8zLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbmlucHV0XzMucGxhY2Vob2xkZXIgPSAn0JLQstC10LTQuNGC0LUg0LjQvNGPJztcclxuZm9ybVRhZ18yLmFwcGVuZENoaWxkKGlucHV0XzMpO1xyXG5cclxuY29uc3QgbGViZWxfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbmxlYmVsXzQuc2V0QXR0cmlidXRlKCdmb3InLCAnc3VybmFtZXMnKTtcclxubGViZWxfNC5pbm5lckhUTUwgPSAn0KTQsNC80LjQu9C40Y8gPHNwYW4+Kjwvc3Bhbj4nO1xyXG5mb3JtVGFnXzIuYXBwZW5kQ2hpbGQobGViZWxfNCk7XHJcblxyXG5jb25zdCBpbnB1dF80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuaW5wdXRfNC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1cm5hbWVzJyk7XHJcbmlucHV0XzQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuaW5wdXRfNC5wbGFjZWhvbGRlciA9ICfQktCy0LXQtNC40YLQtSDQpNCw0LzQuNC70LjRjic7XHJcbmZvcm1UYWdfMi5hcHBlbmRDaGlsZChpbnB1dF80KTtcclxuXHJcbmNvbnN0IGxlYmVsXzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5sZWJlbF81LnNldEF0dHJpYnV0ZSgnZm9yJywgJ2FnZXMnKTtcclxubGViZWxfNS5pbm5lckhUTUwgPSAn0JLQvtC30YDQvtGB0YIgPHNwYW4+Kjwvc3Bhbj4nO1xyXG5mb3JtVGFnXzIuYXBwZW5kQ2hpbGQobGViZWxfNSk7XHJcblxyXG5jb25zdCBpbnB1dF81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuaW5wdXRfNS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FnZXMnKTtcclxuaW5wdXRfNS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcbmlucHV0XzUucGxhY2Vob2xkZXIgPSAn0JLQstC10LTQuNGC0LUg0JLQvtC30YDQvtGB0YInO1xyXG5pbnB1dF81Lm1pbiA9ICcxJztcclxuaW5wdXRfNS5tYXggPSAnMTAwJztcclxuZm9ybVRhZ18yLmFwcGVuZENoaWxkKGlucHV0XzUpO1xyXG5cclxuY29uc3QgYnRuRGl2XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuYnRuRGl2XzEuc2V0QXR0cmlidXRlKCdvbmNsaWNrJywgJ3NlYXJjaE5hbWUoKScpO1xyXG5idG5EaXZfMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J0bicpO1xyXG5idG5EaXZfMS50ZXh0Q29udGVudCA9ICfQn9C+0LjRgdC6JztcclxuZm9ybVRhZ18yLmFwcGVuZENoaWxkKGJ0bkRpdl8xKTtcclxuXHJcbi8vc2Vjb25kLXBhZ2Vfc2Vjb25kLWZvcm0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IGZvcm1UYWdfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuZm9ybVRhZ18zLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWluZXItZmlyc3RfX2Zvcm0taW5wdXQnKVxyXG5kaXZfMS5hcHBlbmRDaGlsZChmb3JtVGFnXzMpO1xyXG5cclxuY29uc3QgZmluZERpdl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmZpbmREaXZfMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpbmQnKTtcclxuZmluZERpdl8xLnRpdGxlID0gJ9Cg0LXQt9GD0LvRjNGC0LDRgiDQv9C+0LjRgdC60LAnO1xyXG5maW5kRGl2XzEudGV4dENvbnRlbnQgPSAnINCg0LXQt9GD0LvRjNGC0LDRgiDQv9C+0LjRgdC60LAnO1xyXG5mb3JtVGFnXzMuYXBwZW5kQ2hpbGQoZmluZERpdl8xKTtcclxuXHJcbmNvbnN0IHRleHRhcmVhXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxudGV4dGFyZWFfMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2UnKTtcclxudGV4dGFyZWFfMS5uYW1lID0gJ21lc3NhZ2UnO1xyXG50ZXh0YXJlYV8xLnBsYWNlaG9sZGVyID0gJ9CY0LzRjyDQpNCw0LzQuNC70LjRjyDQktC+0LfRgNC+0YHRgic7XHJcbmZvcm1UYWdfMy5hcHBlbmRDaGlsZCh0ZXh0YXJlYV8xKTtcclxuXHJcbmNvbnN0IGxpc3RfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbmxpc3RfMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xpc3QyJylcclxudGV4dGFyZWFfMS5hcHBlbmRDaGlsZChsaXN0XzEpO1xyXG5cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxudmFyIHBlb3BsZSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gc2VuZE5hbWUoKSB7XHJcbiAgICB2YXIgc05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xyXG4gICAgdmFyIHNTdXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1cm5hbWUnKS52YWx1ZTtcclxuICAgIHZhciBzQWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FnZScpLnZhbHVlO1xyXG4gICAgaWYgKCEoKHNOYW1lID09PSBcIlwiKSAmJiAoc1N1cm5hbWUgPT09IFwiXCIpICYmIChzQWdlID09PSBcIlwiKSkpIHtcclxuICAgICAgICB2YXIgcCA9IHtcclxuICAgICAgICAgICAgbmFtZTogc05hbWUsXHJcbiAgICAgICAgICAgIHN1cm5hbWU6IHNTdXJuYW1lLFxyXG4gICAgICAgICAgICBhZ2U6IHNBZ2UsIFxyXG4gICAgICAgIH07XHJcbiAgICBwZW9wbGUucHVzaChwKTtcclxuICAgIFxyXG4gICAgZm9yIChpID0gMDsgaSA8IHBlb3BsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBvbGRsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBwZW9wbGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgbmV3bGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0JykuaW5uZXJIVE1MO1xyXG4gICAgICAgIHZhciBuZXdsaXN0ID0gbmV3bGlzdCArIFwiPGxpPlwiICsgcGVvcGxlW2ldLm5hbWUgKyBcIiBcIiArIHBlb3BsZVtpXS5zdXJuYW1lICArIFwiIFwiICsgIHBlb3BsZVtpXS5hZ2UgKyBcIjwvbGk+XCI7XHJcbiAgICB9O1xyXG4gICAgb2xkbGlzdC5pbm5lckhUTUwgPSAgbmV3bGlzdDtcclxuICAgIH07XHJcbiAgfTtcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hOYW1lKCkge1xyXG4gICAgdmFyIHNOYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lcycpLnZhbHVlO1xyXG4gICAgdmFyIHNTdXJuYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdXJuYW1lcycpLnZhbHVlO1xyXG4gICAgdmFyIHNBZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FnZXMnKS52YWx1ZTtcclxuICAgIFxyXG5cclxuICAgIHZhciByZXNtYXNzaXYgPSBbXTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBlb3BsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICgocGVvcGxlW2ldLm5hbWUgPT09IHNOYW1lcyAmJiBzTmFtZXMgIT09IFwiXCIpIHx8IChwZW9wbGVbaV0uc3VybmFtZSA9PT0gc1N1cm5hbWVzICYmIHNTdXJuYW1lcyAhPT0gXCJcIikgfHwgKHBlb3BsZVtpXS5hZ2UgPT09IHNBZ2VzICYmIHNBZ2VzICE9PSBcIlwiKSkge1xyXG4gICAgICAgICAgICB2YXIgbmV3YXJyYXkgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBwZW9wbGVbaV0ubmFtZSxcclxuICAgICAgICAgICAgICAgIHN1cm5hbWU6IHBlb3BsZVtpXS5zdXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgYWdlOiBwZW9wbGVbaV0uYWdlLFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIHJlc21hc3Npdi5wdXNoKG5ld2FycmF5KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QyJykuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB2YXIgcmVzdWx0T2JqZWN0ID0gcmVzbWFzc2l2O1xyXG4gICAgICAgIHNlYXJjaExpc3QgPSByZXN1bHRPYmplY3QubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBzZWFyY2hMaXN0OyB5KyspIHtcclxuICAgIFxyXG4gICAgICAgICAgICBvbGRsaXN0c2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QyJyk7XHJcbiAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCBzZWFyY2hMaXN0OyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdsaXN0c2VhcmNoaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0MicpLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdsaXN0c2VhcmNoID0gbmV3bGlzdHNlYXJjaGggKyBcIjxsaT5cIiArIHJlc3VsdE9iamVjdFt5XS5uYW1lICsgXCIgXCIgKyByZXN1bHRPYmplY3RbeV0uc3VybmFtZSArIFwiIFwiICsgcmVzdWx0T2JqZWN0W3ldLmFnZSArIFwiPC9saT5cIjtcclxuICAgICAgICAgICAgb2xkbGlzdHNlYXJjaC5pbm5lckhUTUwgPSBuZXdsaXN0c2VhcmNoO1xyXG4gICAgICAgIH07XHJcbiAgICAgfTtcclxuICAgIH07XHJcbiIsIi8vIGZ1bmN0aW9uIENvbnRyb2xsZXIodmlldywgbW9kZWwpIHtcclxuLy8gICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuLy8gICAgIHRoaXMudmlldyA9IHZpZXc7XHJcbi8vIH1cclxuXHJcbi8vIG1vZHVsZS5leHBvcnRzID0gQ29udHJvbGxlcjtcclxuIiwiLy8gZnVuY3Rpb24gTW9kZWwoKSB7XHJcblxyXG4vLyB9XHJcblxyXG4vLyBtb2R1bGUuZXhwb3J0cyA9IE1vZGVsOyIsIi8vIGZ1bmN0aW9uIFZpZXcoKSB7XHJcblxyXG4vLyB9XHJcbi8vIG1vZHVsZS5leHBvcnRzID0gVmlldztcclxuXHJcblxyXG4gICAgXHJcbiJdfQ==
