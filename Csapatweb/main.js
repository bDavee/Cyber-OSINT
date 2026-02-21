
$.ajax({
    url: 'https://ceg.atanarur.hu/api.php',
    type: 'POST',
    data: {
        username: localStorage.getItem("username"),
        hash: localStorage.getItem("hash"),
        password: 'randomszoveg',
        type: 'team'
    },
    success: function (result) {
        console.log(result);
    }
});