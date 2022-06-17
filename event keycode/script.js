/*
 * @Author: Molly Pan
 * @Date: 2022-06-17 21:51:44
 * @LastEditTime: 2022-06-17 22:22:25
 * @FilePath: /50projects/event keycode/script.js
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
 */

const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
    </div>

    <div class="key">
        ${event.keyCode}
        <small>event.keycode</small>
    </div>

    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>
    `
})