var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greeter(person) {
    return "Hello" + person;
}
var user = "Lisa Jeniphee";
document.body.textContent = greeter(user);
var Person = /** @class */ (function () {
    function Person(firtName, lastName) {
        this.firtName = firtName;
        this.lastName = lastName;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firtName, lastName, age, scoreHTML, scoreJS, scoreCSS) {
        var _this = _super.call(this, firtName, lastName) || this;
        _this.age = age;
        _this.scoreHTML = scoreHTML;
        _this.scoreJS = scoreJS;
        _this.scoreCSS = scoreCSS;
        return _this;
    }
    Student.prototype.info = function () {
        document.write("firtName:" + this.firtName + ", lastName:" + this.lastName);
    };
    Student.prototype.avgScore = function () {
        var avg = (this.scoreHTML + this.scoreCSS + this.scoreJS) / 3;
        return document.write("diem trung binh ca 3 mon la " + avg);
    };
    return Student;
}(Person));
var student = new Student('Cu Vi', 'Tuan Anh', 25, 9, 8, 6);
student.info();
student.avgScore();
console.log(student);
