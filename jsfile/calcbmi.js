function calcbmi(){
let a=parseInt(document.fr.textheight.value);
let b=parseInt(document.fr.textweight.value);
let c=a/100;

let prod =b/(c*c);
document.fr.textbmi.value = prod.toFixed(1);
}