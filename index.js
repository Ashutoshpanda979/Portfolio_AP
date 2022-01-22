console.log("Script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.naviGator').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo'))
    {
        setTimeout(()=>{
            document.querySelector('.nav').style.display = 'inline'
        }, 380);
        document.querySelector('.cross').style.display = 'none'
    }
    else{

        document.querySelector('.nav').style.display = 'none'
        setTimeout(() =>{
            document.querySelector('.cross').style.display = 'inline'
        }, 380);
    }
})
