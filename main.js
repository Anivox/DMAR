import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

let horizontalScroll;
let chooseTimeline;
let worksTl;



const DeskTimeline = () => {
    horizontalScroll = gsap.timeline({
        scrollTrigger: {
            trigger: '.section2',
            start: 'top top',
            end: '1200% top',
            scrub: 1,
            pin: true,
        }
    })

    const slideItem = document.getElementsByClassName('slideItem')[0]
    const sideScroll = () => {
        if (window.innerWidth > 1500) {
            console.log("this is being1")
            return 6.2
        }
        if (window.innerWidth > 1400) {
            console.log("this is being2")
            return 6.4
        }
        else if (window.innerWidth > 1200) {
            console.log("this is being3")
            return 6.5
        }
        else if (window.innerWidth > 1000) {
            console.log("this is being4")
            return 7.3
        }
        else if (window.innerWidth > 800) {
            console.log("this is being5")
            return 7.6
        }
        else {
            console.log("this is being6")
            return 3.5
        }
    }
    horizontalScroll
        .to('.slideCon', {
            x: -slideItem.offsetWidth * sideScroll(),
        })

    const coins = document.getElementsByClassName('chooseCoin')
    const lines = document.getElementsByClassName('chooseLine')
    const texts = document.getElementsByClassName('chooseText')
    const hiddenCoins = document.getElementsByClassName('smallCircleCon')[0]

    const chooseTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.section3Con',
            start: 'top top',
            end: '200% top',
            scrub: 1,
            pin: true,
        }
    })


    const returnWidths = () => {
        let widths = {}
        widths.first = 0
        widths.second = 0
        widths.third = 0

        if (window.innerWidth < 1150) {
            widths.first = -40
            widths.second = -100
            widths.third = -120
        }
        if (window.innerWidth < 1000) {
            widths.first = -50
            widths.second = -140
            widths.third = -170
        }
        return widths
    }

    const returnWidth = returnWidths()
    chooseTimeline
        .fromTo(coins[0], {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })
        .fromTo(lines[0], {
            x: -200,
            opacity: 0
        }, {
            x: returnWidth.first,
            opacity: 1
        }, '<')
        .fromTo(texts[0], {
            x: -300,
            opacity: 0
        }, {
            x: returnWidth.first,
            opacity: 1
        }, '<')

        .to(hiddenCoins, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)'
        }, '<')
        .fromTo(coins[1], {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })
        .fromTo(lines[1], {
            x: -200,
            opacity: 0
        }, {
            x: returnWidth.second,
            opacity: 1
        }, '<')
        .fromTo(texts[1], {
            x: -300,
            opacity: 0
        }, {
            x: returnWidth.second,
            opacity: 1
        }, '<')

        .to(hiddenCoins, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
        }, '>')
        .fromTo(coins[2], {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1
        })
        .fromTo(lines[2], {
            x: -200,
            opacity: 0
        }, {
            x: returnWidth.third,
            opacity: 1
        }, '<')
        .fromTo(texts[2], {
            x: -300,
            opacity: 0
        }, {
            x: returnWidth.third,
            opacity: 1
        }, '<')



    const works1 = document.getElementById('works1')
    const works2 = document.getElementById('works2')
    const works3 = document.getElementById('works3')
    const works4 = document.getElementById('works4')
    const line = document.getElementById('line')
    worksTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section4',
            start: 'top top',
            end: '400% top',
            scrub: 1,
            pin: true,
        }
    })
    worksTl
        //.set(works1, {
        //    zIndex: 10
        //})
        .set(works2, {
            zIndex: 10
        })
        .set(works3, {
            zIndex: 10
        })
        .set(works4, {
            zIndex: 5
        })
        .set(line, {
            x: '-100%',
        })

        //.fromTo(works1, {
        //    x: -100,
        //    opacity: 0
        //}, {
        //    x: 0,
        //    opacity: 1
        //})
        //.to(line, {
        //    x: '-100%'
        //})
        //
        .fromTo(works2, {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        })
        .to(line, {
            x: '-75%'
        }, "<")

        .fromTo(works3, {
            x: -200,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        }, '+=0.5')
        .to(line, {
            x: '-45%'
        }, "<")

        .fromTo(works4, {
            x: -300,
            opacity: 0
        }, {
            x: 0,
            opacity: 1
        }, '+=0.5')
        .to(line, {
            x: '-20%'
        }, "<")

}

const Mobiletimeline = () => {

    const worksElements = document.getElementsByClassName('works')
    const chooseElements = document.getElementsByClassName('choose')
    const slideElements = document.getElementsByClassName('slideItem')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                gsap.to(entry.target, {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.3
                })
            } else {
                gsap.to(entry.target, {
                    x: -100,
                    opacity: 0,
                    duration: 0.2
                })
            }
        })
    })

    for (let i = 0; i < worksElements.length; i++) {
        observer.observe(worksElements[i])
    }
    for (let i = 0; i < chooseElements.length; i++) {
        observer.observe(chooseElements[i])
    }
    for (let i = 0; i < slideElements.length; i++) {
        observer.observe(slideElements[i])
    }
}

let width = window.innerWidth
window.addEventListener('resize', () => {
    width = window.innerWidth
    //scrollTo the top of the page

    //reload the page
    if (window.innerWidth >= 768) {
        location.reload()
    }
    update_timelines()
})

const update_timelines = () => {
    if (horizontalScroll !== undefined)
        horizontalScroll.clear()
    if (chooseTimeline !== undefined)
        chooseTimeline.clear()
    if (worksTl !== undefined)
        worksTl.clear()

    if (width <= 768) {
        Mobiletimeline()
    } else {
        DeskTimeline()
    }
}

//window.addEventListener('load', () => {
update_timelines()
//window.scrollTo(0, 0)
//    console.log('loaded')
//})

window.addEventListener('load', () => {
    const isloaded = localStorage.getItem('isloaded')
    if (isloaded !== "true") {
        localStorage.setItem('isloaded', 'true')
        window.location.reload()
    } else {
        localStorage.setItem('isloaded', 'false')
    }
})


const launchappBtn = document.getElementsByClassName('launchappBtn')



for (let i = 0; i < launchappBtn.length; i++) {
    launchappBtn[i].addEventListener('mouseover', () => {
        launchappBtn[i].innerText = 'Coming Soon'
    })

    launchappBtn[i].addEventListener('mouseleave', () => {
        launchappBtn[i].innerText = 'Launch App'
    })
}

