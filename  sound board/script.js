/*
 * @Author: Molly Pan
 * @Date: 2022-06-14 18:37:33
 * @LastEditTime: 2022-06-14 22:39:01
 * @FilePath: /50projects/ sound board/script.js
 * 只要卷不死，就往死里卷૮ ฅ'ㅅ'ฅ ა
 */
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSound()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons')
        .appendChild(btn)
})

function stopSound() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}