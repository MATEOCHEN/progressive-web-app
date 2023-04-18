const fadeXAnimation = (): AnimationMethods => {
    return {
        begin: fadeXInAnimation,
        reverse: fadeXOutAnimation
    }
}

const fadeYAnimation = (): AnimationMethods => {
    return {
        begin: fadeYInAnimation,
        reverse: fadeYOutAnimation
    }
}

const fadeYInAnimation = (element: HTMLElement) => {
    if (!element) return

    const target = element
    target.style.display = "block"

    target.animate(
        [{
            opacity: 0,
            transform: "translateY(-2rem)"
        }, {
            opacity: 1,
            transform: "translateY(0)"
        }],
        {
            duration: 300,
            easing: "ease-in-out",
            fill: "forwards"
        }
    )
}

const fadeYOutAnimation = (element: HTMLElement) => {
    if (!element) return

    const target = element

    const animation = target.animate(
        [{
            opacity: 1,
            transform: "translateY(0)"
        }, {
            opacity: 0,
            transform: "translateY(-2rem)"
        }],
        {
            duration: 300,
            easing: "ease-in-out",
            fill: "forwards"
        }
    )

    animation.onfinish = () => {
        target.style.display = "none"
    }
}

const fadeXInAnimation = (element: HTMLElement) => {
    if (!element) return

    const target = element
    target.style.display = "block"

    target.animate(
        [{
            opacity: 0,
            transform: "translateX(100px)"
        }, {
            opacity: 1,
            transform: "translateX(0)"
        }],
        {
            duration: 500,
            easing: "ease-in-out",
            fill: "forwards"
        }
    )
}

const fadeXOutAnimation = (element: HTMLElement) => {
    if (!element) return

    const target = element

    const animation = target.animate(
        [{
            opacity: 1,
            transform: "translateX(0)"
        }, {
            opacity: 0,
            transform: "translateX(100px)"
        }],
        {
            duration: 500,
            easing: "ease-in-out",
            fill: "forwards"
        }
    )

    animation.onfinish = () => {
        target.style.display = "none"
    }
}

export {
    fadeXAnimation,
    fadeYAnimation
}