function ValidateEmail(mail)
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }
    return (false)
}
function random(min,max){
    this.min = min;
    this.max = max || 1;
    if(this.max === 1){
        return Math.random()*this.min;
    }else{
        return Math.random()*(this.max-this.min)+this.min;
    }
}
