const pancake_day = new Date()

    const pan_day = pancake_day.getDay()

    const pday = document.querySelector('.pancakes')

    if (pan_day === 5) {pday.style.display = 'block'}

    else {pday.style.display = 'none'}

