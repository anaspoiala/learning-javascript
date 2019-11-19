const task3Element = document.getElementById('task-3');

function f1() {
    alert("some text");
}

function f2(name) {
    alert(name);
}

function f3(s1, s2, s3) {
    return `${s1}${s2}${s3}`;
}

f1();
f2("Ana");

task3Element.addEventListener("click", f1);

alert(f3("Cats ", "are ", "cute"));