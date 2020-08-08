const { Router } = require("express");

$(function () {

$(".personPlus").on("click", function(event) {

    const id= $(this).data("id"); //assign id later!


    $.ajax("/api/person"+ id, {
        type: "PUT",
        data: XXXXXXXXXXXXXXXXX //do we need this??
        
        //should be a form to add people, add seperate HBS

    }).then(
        function() {
            location.reload();

        }
    );

});

$(".home").on("click", function(event) {

    const id= $(this).data("id"); //do we need id if database gives us one??


    $.ajax("/api/home", {
        type: "PUT",
        
        
    }).then(
        function() {
            res.render("index"); //double check, should load home page
            location.reload();
        }
    );

});

$(".chat").on("click", function(event) {

    const id= $(this).data("id"); //do we need id if database gives us one??

    //bring up the post page for discussion
    $.ajax("/api/chat", {
        type: "PUT",
        
        
    }).then(
        function() {
            res.render("index"); //double check, should load home page
            location.reload();
        }
    );

});

})