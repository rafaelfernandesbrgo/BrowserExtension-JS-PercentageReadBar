
//add function on load
const mybody = document.querySelector('body')
mybody.addEventListener('onLoad', Loaded())


function Loaded() {

    //create div, set, add
    let bar = document.createElement("div");
    bar.style.height = "4px";
    bar.style.width = window.innerWidth + "px";
    bar.style.backgroundColor = "black";
    bar.style.position = "fixed";
    bar.style.top = "0";
    bar.style.left = "0"
    bar.style.zIndex = "9999"
    bar.style.transition = "0.2s"
    mybody.append(bar)

    //create label, set, add
    let label = document.createElement('label')
    label.style.backgroundColor = "#F2F2F2";
    label.style.color = "black;"
    label.style.position = "fixed";
    label.style.top = "10px";
    label.style.left = "10px"
    label.style.zIndex = "9999"
    label.style.width="2.3cm"
    label.style.textAlign="center"
    label.style.transition = "0.2s"
    label.style.padding = "5px"
    label.style.fontWeight = "bold"
    label.style.border = "solid 1px black"
    label.innerHTML = "<label> 0 % </label>"
    mybody.append(label)



    //go to end, get the position, and then back to begining
    window.scrollTo(0, mybody.offsetHeight)
    let TextHeight = window.pageYOffset
    window.scrollTo(0, 0)

    //add scrool event
    document.addEventListener("scroll", () => {

        //calculate the percentage of scroll y 
        let PagePosition = window.pageYOffset
        percentage = PagePosition * 100 / TextHeight

        //protect and set widht
        if (percentage > 100) percentage = 100
        bar.style.width = percentage + "%"

        //update percentage
        label.innerHTML = "<label>" + percentage.toFixed(2) + " % </label>"
        mybody.append(label)

    })
}

