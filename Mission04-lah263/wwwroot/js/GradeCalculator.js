$("#submit-grades").click(function () {
    //determine the final percentage from the imported numbers from the form
    final_grade = ($("#assign").val() * .5376) + ($("#quizzes").val() * .086) +
        ($("#group-projects").val() * .0538) + ($("#intex").val() * .1075) +
        ($("#exams").val() * .2151) + ($("#ec").val())

    //calculate the letter grade
    if (final_grade >= 94) {
        letter_grade = "A"
    } else if (final_grade >= 90) {
        letter_grade = "A-"
    } else if (final_grade >= 87) {
        letter_grade = "B+"
    } else if (final_grade >= 84) {
        letter_grade = "B-"
    } else if (final_grade >= 80) {
        letter_grade = "C+"
    } else if (final_grade >= 77) {
        letter_grade = "C"
    } else if (final_grade >= 74) {
        letter_grade = "C-"
    } else if (final_grade >= 70) {
        letter_grade = "D+"
    } else if (final_grade >= 67) {
        letter_grade = "D"
    } else if (final_grade >= 60) {
        letter_grade = "D-"
    } else {
        letter_grade = "E"
    }
    //print out the percentage and letter grade
    $("#final-grade").html("Final Percentage: " + Math.ceil(final_grade) + "%");
    $("#letter-grade").html("Letter Grade: " + letter_grade);
})