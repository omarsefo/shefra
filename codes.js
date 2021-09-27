let textaria = document.getElementById("textaria");
let result = document.getElementById("result");
let select = document.getElementById("select");

textaria.addEventListener("input",()=>{
    go();
});
select.addEventListener("change",()=>{
    go();
});


function go(){
    if (select.value === "decode"){
        result.value =window.atob(textaria.value);
    }
else{
    result.value =window.btoa(textaria.value);
}
}


