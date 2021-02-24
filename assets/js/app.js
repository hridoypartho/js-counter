const counturs = document.getElementById('counter');

counturs.forEach((counter) => {
    counter.innerHTML = 0;

    const updateCounter = () => {
        const targetCount =  +counter.getAttribute('data-target');
        const startingCount = Number(countur.innerHTML);
        const incr = targetCount / 100;

        if(startingCount < targetCount){
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter, 10);
        }else{
            counter.innerHTML = targetCount;
        }
    }

   updateCounter();
    
});