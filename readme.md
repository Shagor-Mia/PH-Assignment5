## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

- Ans: getElementById is used for getting single element from HTML tag.where you can add addEventListener directly.

2. How do you **create and insert a new element into the DOM**?

- Ans: first i get the parent container by using getElementById where new element will be inserted. then add addEventListener ,inside it we declare a new element such as section,div etc. and then write innerHTML for div or section and append it to parent element.

3. What is **Event Bubbling** and how does it work?

- Ans: Event Bubbling is a process to climbing child element to parent element.
suppose i have <div id="parent">
<button id="child">Click Me</button>
</div>
and script js is,document.getElementById("child").addEventListener("click", function() {
  alert("Button clicked!");
});

document.getElementById("parent").addEventListener("click", function() {
alert("Parent clicked!");
});
when i click button it will show me ,Button clicked then,i will not stop until its Parent clicked .

- so basically it climbing to find its root element.

4. What is **Event Delegation** in JavaScript? Why is it useful?

- Ans: adding multiple eventListener on child element, just get parent element and a single eventListener to it.parent handle child using event.target.this technique known as Event Delegation. suppose here,<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
and script js,const myList = document.getElementById("myList");

myList.addEventListener("click", function(e) {
if(e.target && e.target.tagName === "li") {
alert(`You clicked on ${e.target.innerText}`);
}
});

- it is useful for better performance ,clean code and dynamic.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

- Ans: event.preventDefault() is use to stop browser reload action when we do any action such as button click, form submit, navigation etc.
- event.stopPropagation() is used to stop event bubbling.such as, <div id="parent">
<button id="child">Click Me</button>
</div>
and script js is,document.getElementById("child").addEventListener("click", function(event) {
  event.stopPropagation()
  alert("Button clicked!");
});

document.getElementById("parent").addEventListener("click", function() {
alert("Parent clicked!");
});
