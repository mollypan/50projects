/*
 * @Author: Molly Pan
 * @Date: 2022-06-10 10:30:04
 * @LastEditTime: 2022-06-10 11:51:58
 * @FilePath: /50projects/Expanding Cards/script.js
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
 */
const panels = document.querySelectorAll('.panel')


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}