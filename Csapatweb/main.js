document.addEventListener("DOMContentLoaded", () => {
    const form_button = document.getElementById("login_button");

    const form = document.querySelector("form");
    const form_username = document.getElementById("login_username");
    const form_password = document.getElementById("login_password");

    $.ajax({
        url: 'ceg.atanarur.hu/api.php',
        type: 'POST',
        data: {
            username: 'Felhasználónév',
            password: 'JeLsZó',
            type: 'login'
        },
        success: function (result) {
            console.log(result);
        }
    });
});