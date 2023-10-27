const ctx = document.getElementById('myChart');
    let Linguagens = ['JavaScript', 'HTML/Css', 'Python', 'SQL', 'TypeScript', 'Bash/Shell']
    let Notas = [63, 52, 49, 48, 38, 32]

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Linguagens,
            datasets: [{
                label: 'Mais Usadas',
                data: Notas,
                borderWidth: 1
            }]
         },
        options: {
            indexAxis: 'y', 
        }
    });

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entries.target.classList.remove('show')
        }
    })
})
    
const elements = document.querySelectorAll('.hidden')
    
elements.forEach (element => myObserver.observe(element))
    
    
const myObserver2 = new IntersectionObserver((entries2) =>{
    entries2.forEach(entry2 => {
        if(entry2.isIntersecting){
            entry2.target.classList.add('show2')
        }else{
            entries2.target.classList.remove('show2')
        }
    })
})
    
const elements2 = document.querySelectorAll('.hidden2')
    
elements2.forEach (element2 => myObserver2.observe(element2))