document.addEventListener("DOMContentLoaded", () => {
    const form_button = document.getElementById("login_button");

    const form = document.querySelector("form");
    const form_username = document.getElementById("login_username");
    const form_password = document.getElementById("login_password");


    form_button.addEventListener("click", function (send) {

        send.preventDefault(); 

        $.ajax({
            url: 'https://ceg.atanarur.hu/api.php',
            type: 'POST',
            data: {
                username: form_username.value,
                password: form_password.value,
                type: 'login'
            },
            success: function (result) {
                console.log(result);
            let data = JSON.parse(result);
        if (data.status === "success") {
             setCookie("hash", data.hash, 1);}
        else {
                    console.log("Error:", data.message);
                }
            }
        });

    });
   


    function setCookie(cname, cvalue, exdays) {
    const d = new Date();
     d.setTime(d.getTime() + (exdays*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    
    
});
