var student;
(function (student) {
    student[student["ali"] = 0] = "ali";
    student[student["saba"] = 1] = "saba";
    student[student["maryam"] = 2] = "maryam";
    student[student["mansoor"] = 3] = "mansoor";
})(student || (student = {}));
console.log(student);
