// on the submit of the #pet-form
$("#pet-form").on("submit", function(e){
    e.preventDefault();

    const pet = {
        name: $("#pet-name").val().trim(),
        age: $("#pet-age").val().trim()
    };

    console.log(pet);
    // send the data from the 

    $.ajax({
        url: "/api/pet",
        method: "POST",
        data: pet
    }).then(function(data) {
        console.log(data);
        window.location.reload("/");
    });

});

$(".adopt-pet").on("click", function(e) {
    e.preventDefault();
    const petId = $(this).attr("data-id");
    console.log(petId);

    $.ajax({
        url: `/api/pet/${petId}`,
        method: "PUT",
        data: {
            adopted: true
        }
    }).then(function(data) {
        console.log(data);
        // window.location.href = "/contact";
        window.location.reload("/");
    });
});