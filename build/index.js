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
formTag.setAttribute('id','container-first__form-input1')
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
formTag_1.setAttribute('id','container-first__form-input2')
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
formTag_2.setAttribute('id','container-first__form-input3');
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
formTag_3.setAttribute('id','container-first__form-input4')
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
                var newlistsearch = document.getElementById('list2').innerHTML;
                var newlistsearch = newlistsearch + "<li>" + resultObject[y].name + " " + resultObject[y].surname + " " + resultObject[y].age + "</li>";
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


    
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwianMvQ29udHJvbGxlci5qcyIsImpzL01vZGVsLmpzIiwianMvVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBNb2RlbCA9IHJlcXVpcmUoJy4vanMvTW9kZWwuanMnKTtcclxuLy8gY29uc3QgVmlldyA9IHJlcXVpcmUoJy4vanMvVmlldy5qcycpO1xyXG4vLyBjb25zdCBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9qcy9Db250cm9sbGVyLmpzJyk7XHJcblxyXG4vLyBmdW5jdGlvbiBpbml0UHJvamVjdCgpIHtcclxuLy8gICAgIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCk7XHJcbi8vICAgICBjb25zdCB2aWV3ID0gbmV3IFZpZXcoKTtcclxuLy8gICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihtb2RlbCwgdmlldyk7XHJcbi8vIH1cclxuXHJcbi8vIGluaXRQcm9qZWN0KClcclxuXHJcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjcm9vdCcpO1xyXG5cclxuXHJcbi8vZmlyc3QgZm9ybS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5kaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250YWluZXItZmlyc3QzJylcclxucm9vdC5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuY29uc3QgZm9ybVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuZm9ybVRhZy5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFpbmVyLWZpcnN0X19mb3JtLWlucHV0MScpXHJcbmRpdi5hcHBlbmRDaGlsZChmb3JtVGFnKTtcclxuXHJcbmNvbnN0IFJlZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5SZWdEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaW5kJyk7XHJcblJlZ0Rpdi50aXRsZSA9ICfRgNC10LPQuNGB0YLRgNCw0YbQuNGPJztcclxuUmVnRGl2LnRleHRDb250ZW50ID0gJ9Cy0LLQtdC00LjRgtC1INC00LDQvdC90YvQtSc7XHJcbmZvcm1UYWcuYXBwZW5kQ2hpbGQoUmVnRGl2KTtcclxuXHJcbmNvbnN0IGxlYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxubGViZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xyXG5sZWJlbC5pbm5lckhUTUwgPSAn0JjQvNGPIDxzcGFuPio8L3NwYW4+JztcclxuZm9ybVRhZy5hcHBlbmRDaGlsZChsZWJlbCk7XHJcblxyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbmlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xyXG5pbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xyXG5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG5pbnB1dC5wbGFjZWhvbGRlciA9ICfQktCy0LXQtNC40YLQtSDQuNC80Y8nO1xyXG5mb3JtVGFnLmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHJcbmNvbnN0IGxlYmVsXzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5sZWJlbF8xLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3N1cm5hbWUnKTtcclxubGViZWxfMS5pbm5lckhUTUwgPSAn0KTQsNC80LjQu9C40Y8gPHNwYW4+Kjwvc3Bhbj4nO1xyXG5mb3JtVGFnLmFwcGVuZENoaWxkKGxlYmVsXzEpO1xyXG5cclxuY29uc3QgaW5wdXRfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbmlucHV0XzEuc2V0QXR0cmlidXRlKCdpZCcsICdzdXJuYW1lJyk7XHJcbmlucHV0XzEuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuaW5wdXRfMS5wbGFjZWhvbGRlciA9ICfQktCy0LXQtNC40YLQtSDQpNCw0LzQuNC70LjRjic7XHJcbmZvcm1UYWcuYXBwZW5kQ2hpbGQoaW5wdXRfMSk7XHJcblxyXG5jb25zdCBsZWJlbF8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxubGViZWxfMi5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdhZ2UnKTtcclxubGViZWxfMi5pbm5lckhUTUwgPSAn0JLQvtC30YDQvtGB0YIgPHNwYW4+Kjwvc3Bhbj4nO1xyXG5mb3JtVGFnLmFwcGVuZENoaWxkKGxlYmVsXzIpO1xyXG5cclxuY29uc3QgaW5wdXRfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbmlucHV0XzIuc2V0QXR0cmlidXRlKCdpZCcsICdhZ2UnKTtcclxuaW5wdXRfMi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcbmlucHV0XzIucGxhY2Vob2xkZXIgPSAn0JLQstC10LTQuNGC0LUg0JLQvtC30YDQvtGB0YInO1xyXG5pbnB1dF8yLm1pbiA9ICcxJztcclxuaW5wdXRfMi5tYXggPSAnMTAwJzsgICAgXHJcbmZvcm1UYWcuYXBwZW5kQ2hpbGQoaW5wdXRfMik7XHJcblxyXG5jb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuYnRuRGl2LnNldEF0dHJpYnV0ZSgnb25jbGljaycsICdzZW5kTmFtZSgpJyk7XHJcbmJ0bkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbmQnKTtcclxuYnRuRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnRuJyk7XHJcbmJ0bkRpdi50ZXh0Q29udGVudCA9ICfQntGC0L/RgNCw0LLQuNGC0YwnO1xyXG5mb3JtVGFnLmFwcGVuZENoaWxkKGJ0bkRpdik7XHJcblxyXG4vL2ZpcnN0LXBhZ2Vfc2Vjb25kIGZvcm0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgZm9ybVRhZ18xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5mb3JtVGFnXzEuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRhaW5lci1maXJzdF9fZm9ybS1pbnB1dDInKVxyXG5kaXYuYXBwZW5kQ2hpbGQoZm9ybVRhZ18xKTtcclxuXHJcbmNvbnN0IGZpbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZmluZERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpbmQnKTtcclxuZmluZERpdi50ZXh0Q29udGVudCA9ICfQodC/0LjRgdC+0Log0JjQvNC10L0nO1xyXG5maW5kRGl2LnRpdGxlID0gJ9Cy0Ysg0LzQvtC20LXRgtC1INC90LDQudGC0Lgg0YLRg9GCINGB0LLQvtGOINC40LzRjyc7XHJcbmZvcm1UYWdfMS5hcHBlbmRDaGlsZChmaW5kRGl2KTtcclxuXHJcbmNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZScpO1xyXG50ZXh0YXJlYS5uYW1lID0gJ21lc3NhZ2UnO1xyXG50ZXh0YXJlYS5wbGFjZWhvbGRlciA9ICfQmNC80Y8g0KTQsNC80LjQu9C40Y8g0JLQvtC30YDQvtGB0YInO1xyXG5mb3JtVGFnXzEuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xyXG5cclxuY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbmxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdsaXN0Jyk7XHJcbnRleHRhcmVhLmFwcGVuZENoaWxkKGxpc3QpO1xyXG5cclxuLy9zZWNvbmQgcGFnZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IGRpdl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRpdl8xLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGFpbmVyLXNlY29uZCcpO1xyXG5yb290LmFwcGVuZENoaWxkKGRpdl8xKTtcclxuXHJcbmNvbnN0IGZvcm1UYWdfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuZm9ybVRhZ18yLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWluZXItZmlyc3RfX2Zvcm0taW5wdXQzJyk7XHJcbmRpdl8xLmFwcGVuZENoaWxkKGZvcm1UYWdfMik7XHJcblxyXG5jb25zdCBSZWdEaXZfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5SZWdEaXZfMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZpbmQnKTtcclxuUmVnRGl2XzEudGl0bGUgPSAn0L3QsNC50LTQuNGC0LUg0YHQstC+0LUg0LjQvNGPJztcclxuUmVnRGl2XzEudGV4dENvbnRlbnQgPSAn0L/QvtC40YHQuiDRh9C10LvQvtCy0LXQutCwICEnO1xyXG5mb3JtVGFnXzIuYXBwZW5kQ2hpbGQoUmVnRGl2XzEpO1xyXG5cclxuY29uc3QgbGViZWxfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbmxlYmVsXzMuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZXMnKTtcclxubGViZWxfMy5pbm5lckhUTUwgPSAn0JjQvNGPPHNwYW4+Kjwvc3Bhbj4nO1xyXG5mb3JtVGFnXzIuYXBwZW5kQ2hpbGQobGViZWxfMyk7XHJcblxyXG5jb25zdCBpbnB1dF8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuaW5wdXRfMy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWVzJyk7XHJcbmlucHV0XzMuc2V0QXR0cmlidXRlKCduYW1lJywnbmFtZScpO1xyXG5pbnB1dF8zLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbmlucHV0XzMucGxhY2Vob2xkZXIgPSAn0JLQstC10LTQuNGC0LUg0LjQvNGPJztcclxuZm9ybVRhZ18yLmFwcGVuZENoaWxkKGlucHV0XzMpO1xyXG5cclxuY29uc3QgbGViZWxfNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbmxlYmVsXzQuc2V0QXR0cmlidXRlKCdmb3InLCAnc3VybmFtZXMnKTtcclxubGViZWxfNC5pbm5lckhUTUwgPSAn0KTQsNC80LjQu9C40Y8gPHNwYW4+Kjwvc3Bhbj4nO1xyXG5mb3JtVGFnXzIuYXBwZW5kQ2hpbGQobGViZWxfNCk7XHJcblxyXG5jb25zdCBpbnB1dF80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuaW5wdXRfNC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1cm5hbWVzJyk7XHJcbmlucHV0XzQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuaW5wdXRfNC5wbGFjZWhvbGRlciA9ICfQktCy0LXQtNC40YLQtSDQpNCw0LzQuNC70LjRjic7XHJcbmZvcm1UYWdfMi5hcHBlbmRDaGlsZChpbnB1dF80KTtcclxuXHJcbmNvbnN0IGxlYmVsXzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5sZWJlbF81LnNldEF0dHJpYnV0ZSgnZm9yJywgJ2FnZXMnKTtcclxubGViZWxfNS5pbm5lckhUTUwgPSAn0JLQvtC30YDQvtGB0YIgPHNwYW4+Kjwvc3Bhbj4nO1xyXG5mb3JtVGFnXzIuYXBwZW5kQ2hpbGQobGViZWxfNSk7XHJcblxyXG5jb25zdCBpbnB1dF81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuaW5wdXRfNS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FnZXMnKTtcclxuaW5wdXRfNS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcbmlucHV0XzUucGxhY2Vob2xkZXIgPSAn0JLQstC10LTQuNGC0LUg0JLQvtC30YDQvtGB0YInO1xyXG5pbnB1dF81Lm1pbiA9ICcxJztcclxuaW5wdXRfNS5tYXggPSAnMTAwJztcclxuZm9ybVRhZ18yLmFwcGVuZENoaWxkKGlucHV0XzUpO1xyXG5cclxuY29uc3QgYnRuRGl2XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuYnRuRGl2XzEuc2V0QXR0cmlidXRlKCdvbmNsaWNrJywgJ3NlYXJjaE5hbWUoKScpO1xyXG5idG5EaXZfMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2J0bicpO1xyXG5idG5EaXZfMS50ZXh0Q29udGVudCA9ICfQn9C+0LjRgdC6JztcclxuZm9ybVRhZ18yLmFwcGVuZENoaWxkKGJ0bkRpdl8xKTtcclxuXHJcbi8vc2Vjb25kLXBhZ2Vfc2Vjb25kLWZvcm0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IGZvcm1UYWdfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuZm9ybVRhZ18zLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWluZXItZmlyc3RfX2Zvcm0taW5wdXQ0JylcclxuZGl2XzEuYXBwZW5kQ2hpbGQoZm9ybVRhZ18zKTtcclxuXHJcbmNvbnN0IGZpbmREaXZfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5maW5kRGl2XzEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaW5kJyk7XHJcbmZpbmREaXZfMS50aXRsZSA9ICfQoNC10LfRg9C70YzRgtCw0YIg0L/QvtC40YHQutCwJztcclxuZmluZERpdl8xLnRleHRDb250ZW50ID0gJyDQoNC10LfRg9C70YzRgtCw0YIg0L/QvtC40YHQutCwJztcclxuZm9ybVRhZ18zLmFwcGVuZENoaWxkKGZpbmREaXZfMSk7XHJcblxyXG5jb25zdCB0ZXh0YXJlYV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnRleHRhcmVhXzEuc2V0QXR0cmlidXRlKCdpZCcsICdtZXNzYWdlJyk7XHJcbnRleHRhcmVhXzEubmFtZSA9ICdtZXNzYWdlJztcclxudGV4dGFyZWFfMS5wbGFjZWhvbGRlciA9ICfQmNC80Y8g0KTQsNC80LjQu9C40Y8g0JLQvtC30YDQvtGB0YInO1xyXG5mb3JtVGFnXzMuYXBwZW5kQ2hpbGQodGV4dGFyZWFfMSk7XHJcblxyXG5jb25zdCBsaXN0XzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5saXN0XzEuc2V0QXR0cmlidXRlKCdpZCcsICdsaXN0MicpXHJcbnRleHRhcmVhXzEuYXBwZW5kQ2hpbGQobGlzdF8xKTtcclxuXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbnZhciBwZW9wbGUgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIHNlbmROYW1lKCkge1xyXG4gICAgdmFyIHNOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcclxuICAgIHZhciBzU3VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdXJuYW1lJykudmFsdWU7XHJcbiAgICB2YXIgc0FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZ2UnKS52YWx1ZTtcclxuICAgIGlmICghKChzTmFtZSA9PT0gXCJcIikgJiYgKHNTdXJuYW1lID09PSBcIlwiKSAmJiAoc0FnZSA9PT0gXCJcIikpKSB7XHJcbiAgICAgICAgdmFyIHAgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHNOYW1lLFxyXG4gICAgICAgICAgICBzdXJuYW1lOiBzU3VybmFtZSxcclxuICAgICAgICAgICAgYWdlOiBzQWdlLCBcclxuICAgICAgICB9O1xyXG4gICAgcGVvcGxlLnB1c2gocCk7XHJcbiAgICBcclxuICAgIGZvciAoaSA9IDA7IGkgPCBwZW9wbGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgb2xkbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgcGVvcGxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIG5ld2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpLmlubmVySFRNTDtcclxuICAgICAgICB2YXIgbmV3bGlzdCA9IG5ld2xpc3QgKyBcIjxsaT5cIiArIHBlb3BsZVtpXS5uYW1lICsgXCIgXCIgKyBwZW9wbGVbaV0uc3VybmFtZSAgKyBcIiBcIiArICBwZW9wbGVbaV0uYWdlICsgXCI8L2xpPlwiO1xyXG4gICAgfTtcclxuICAgIG9sZGxpc3QuaW5uZXJIVE1MID0gIG5ld2xpc3Q7XHJcbiAgICB9O1xyXG4gIH07XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gc2VhcmNoTmFtZSgpIHtcclxuICAgIHZhciBzTmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZXMnKS52YWx1ZTtcclxuICAgIHZhciBzU3VybmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VybmFtZXMnKS52YWx1ZTtcclxuICAgIHZhciBzQWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZ2VzJykudmFsdWU7XHJcbiAgICBcclxuXHJcbiAgICB2YXIgcmVzbWFzc2l2ID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwZW9wbGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoKHBlb3BsZVtpXS5uYW1lID09PSBzTmFtZXMgJiYgc05hbWVzICE9PSBcIlwiKSB8fCAocGVvcGxlW2ldLnN1cm5hbWUgPT09IHNTdXJuYW1lcyAmJiBzU3VybmFtZXMgIT09IFwiXCIpIHx8IChwZW9wbGVbaV0uYWdlID09PSBzQWdlcyAmJiBzQWdlcyAhPT0gXCJcIikpIHtcclxuICAgICAgICAgICAgdmFyIG5ld2FycmF5ID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogcGVvcGxlW2ldLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBzdXJuYW1lOiBwZW9wbGVbaV0uc3VybmFtZSxcclxuICAgICAgICAgICAgICAgIGFnZTogcGVvcGxlW2ldLmFnZSxcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICByZXNtYXNzaXYucHVzaChuZXdhcnJheSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0MicpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIHJlc3VsdE9iamVjdCA9IHJlc21hc3NpdjtcclxuICAgICAgICBzZWFyY2hMaXN0ID0gcmVzdWx0T2JqZWN0Lmxlbmd0aDtcclxuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgc2VhcmNoTGlzdDsgeSsrKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgb2xkbGlzdHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0MicpO1xyXG4gICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgc2VhcmNoTGlzdDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3bGlzdHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0MicpLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgIHZhciBuZXdsaXN0c2VhcmNoID0gbmV3bGlzdHNlYXJjaCArIFwiPGxpPlwiICsgcmVzdWx0T2JqZWN0W3ldLm5hbWUgKyBcIiBcIiArIHJlc3VsdE9iamVjdFt5XS5zdXJuYW1lICsgXCIgXCIgKyByZXN1bHRPYmplY3RbeV0uYWdlICsgXCI8L2xpPlwiO1xyXG4gICAgICAgICAgICBvbGRsaXN0c2VhcmNoLmlubmVySFRNTCA9IG5ld2xpc3RzZWFyY2g7XHJcbiAgICAgICAgfTtcclxuICAgICB9O1xyXG4gICAgfTtcclxuIiwiLy8gZnVuY3Rpb24gQ29udHJvbGxlcih2aWV3LCBtb2RlbCkge1xyXG4vLyAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4vLyAgICAgdGhpcy52aWV3ID0gdmlldztcclxuLy8gfVxyXG5cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBDb250cm9sbGVyO1xyXG4iLCIvLyBmdW5jdGlvbiBNb2RlbCgpIHtcclxuXHJcbi8vIH1cclxuXHJcbi8vIG1vZHVsZS5leHBvcnRzID0gTW9kZWw7IiwiLy8gZnVuY3Rpb24gVmlldygpIHtcclxuXHJcbi8vIH1cclxuLy8gbW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xyXG5cclxuXHJcbiAgICBcclxuIl19
