validate = () => {
    if ($("#name").val() === "") {
        alert("Please enter a name.")
    } else if ($("#email").val() === "") {
        alert("Please enter a valid email.")
    } else if ($("#add-info").val() === "") {
        alert("Please enter a message to submit.")
    } else {
        alert("Thank you for your inquiry. We will get back to you shortly.");
        // reset fields
        $("#name").val("");
        $("#email").val("");
        $("#reason").val("catering");
        $("#add-info").val("");
        $("#yes").prop("checked", false);
        $("#no").prop("checked", false);
        $("#m").prop("checked", false);
        $("#t").prop("checked", false);
        $("#w").prop("checked", false);
        $("#th").prop("checked", false);
        $("#f").prop("checked", false);
    }
}