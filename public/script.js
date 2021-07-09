
// Firebase configs
var firebaseConfig = {
    apiKey: "AIzaSyDO4GZiiUn-sqRhq6TNuIQJncQZRG-RQkg",
    authDomain: "gfx-project-single-form-54856.firebaseapp.com",
    databaseURL: "https://gfx-project-single-form-54856-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gfx-project-single-form-54856",
    storageBucket: "gfx-project-single-form-54856.appspot.com",
    messagingSenderId: "898728155029",
    appId: "1:898728155029:web:78a8fb00614855845fc89c",
    measurementId: "G-Y66S375XJH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var _collection = firebase.database().ref('user-details-collection'); // Setting the user collection

getUsersFirebase();

// Form submission action
$(document).on('submit', '#form-fb', function (e) {
    e.preventDefault();
    var newDataset = _collection.push();
    newDataset.set({
        name: $('#name').val(),
        email: $('#email').val(),
        details: $('#details').val()
    });
    getUsersFirebase();
});

function getUsersFirebase()
{
    var str = '';
    _collection.once('value')
    .then((snapshot) => {
        if (snapshot.val() == null){
            return;
        }
        Object.keys(snapshot.val())
        .forEach((key) => {
            str = str + '<li><span>' + `${snapshot.val()[key].details}` + '</span> - <cite title="' + `${snapshot.val()[key].email}` + '">' + `${snapshot.val()[key].name}` + '</cite></li>';
            
        });
        $('#show-fb ul').html(str);
        $('#form-fb').trigger("reset");
    });
}