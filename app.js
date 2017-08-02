document.write("It's working.");
$.ajax({
    url:'/api/users',
    success:function(res){
        console.log(res);
    }
})
