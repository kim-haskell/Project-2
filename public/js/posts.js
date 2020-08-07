$(document).ready(function () {
   
    function handlePostSubmit() {
        console.log("Project 2 really really sucks!");
        var title = $("#title").val();
        console.log(title);
        var name = $("#name").val();
        console.log(name);
        var category = $("#category").val();
        console.log(category);
        var body = $("#textArea").val();
        console.log(body);
    }


    $("#buttonSubmit").on("click", handlePostSubmit);



    // $(document).on("click", "#buttonSubmit", handlePostSubmit);

    // var newPost = {
    //     title: titleInput
    //         .val()
    //         .trim(),
    //     name: bodyInput
    //         .val()
    //         .trim(),
    //     category: bodyInput
    //         .val(),

    //     body: bodyInput
    //         .val()
    //         .trim(),

    // };



    // function submitPost(post) {
    //     $.post("/api/posts", post, function () {
    //         window.location.href = "/posts";
    //         console.log(post);

    //     });
    // }
})