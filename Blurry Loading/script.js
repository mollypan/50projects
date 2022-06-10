/*
 * @Author: Molly Pan
 * @Date: 2022-06-10 20:33:47
 * @LastEditTime: 2022-06-10 21:41:40
 * @FilePath: /50projects/Blurry Loading/script.js
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
 */

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 10, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}