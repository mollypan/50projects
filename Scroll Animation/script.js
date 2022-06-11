/*
 * @Author: Molly Pan
 * @Date: 2022-06-11 18:43:23
 * @LastEditTime: 2022-06-11 21:26:56
 * @FilePath: /50projects/Scroll Animation/script.js
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
 */

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (triggerBottom > boxTop) {
        box.classList.add('show')
    } else {
        box.classList.remove('show')
    }
})
}