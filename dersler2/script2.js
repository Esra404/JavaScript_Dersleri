var marka='opel';
var model='astra';
var otomatik='yes'; 

if(otomatik =='yes'){
    console.log('araç otomatiktir');

}
else{
    console.log('araç otomatik değildir');
}
otomatik= true;

if(otomatik){
    console.log(marka+' '+model+'otomatik');
}


if(vites =='1'){
    console.log('araç manuel');
}
else if(vites =='2'){
    console.log('araç otomatiktir.');

}
else{
    console.log('yanlış bir değer girdiniz');
}

vites='3';
switch(vites){
    case '1':
        console.log('araç manuel');
    case '2':
        console.log('araç otomatik ');
    case '3':
        console.log('yanlış değer');
}