(function () {
    const btns = document.querySelectorAll('.btn')
    const next = document.querySelector('#next')
    const score = document.querySelector('.isa')
    const container = document.querySelector('.container')
    let count = 0

    btns.forEach(btn => {
        btn.addEventListener('click', () => {

            if (btn.id === 'marina') {
                btn.style.background = "green"
                btn.disabled = true
                next.classList.add('marina')
                count = count + 2

            } else {
                btn.style.background = "red"
                btn.disabled = true
                count--
            }
            const res = document.querySelector('span.naoty')
            res.textContent = count
            if (count < 0) {
                score.style.background = 'red'
                score.style.color = '#2f3542'
                document.querySelector('.isa span').style.color = "#dfe4ea"
            }
            else if (count == 10) {
                score.style.background = 'green'
                score.style.color = '#2f3542'
                document.querySelector('.isa span').style.color = "#ffa502"
            }
            else {
                score.style.background = '#dfe4ea'
                score.style.color = '#2f3542'
                document.querySelector('.isa span').style.color = "#ffa502"
            }
        })

    })

    next.addEventListener('click', () => {
        nextSlide();
        next.classList.remove('marina')
        next.classList.add('manaraka')

    })
    const nextSlide = () => {
        const current = document.querySelector('.current');

        current.classList.remove('current');

        if (current.nextElementSibling) {
            current.nextElementSibling.classList.add('current');
        } else {
            container.classList.add('ok')
        }
        setTimeout(() => current.classList.remove('current'));
    }
})()