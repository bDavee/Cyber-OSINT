$.ajax({
 url:'ceg.atanarur.hu/api.php',
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