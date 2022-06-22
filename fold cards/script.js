/*
 * @Author: Molly Pan
 * @Date: 2022-06-21 21:33:04
 * @LastEditTime: 2022-06-22 21:28:34
 * @FilePath: /50projects/50projects/fold cards/script.js
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
 */

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})