const avanca=document.querySelectorAll('.btn-proximo');
avanca.forEach(button=>{
button.addEventListener('click',function(){
    const atual=document.queryselector('.ativo');
    const proximopasso='passo-'+this.getatribute('data-proximo');
    atual.classlist.remove('ativo');
    document.getElementById(proximopasso).classlist.add('ativo');
    })
    })