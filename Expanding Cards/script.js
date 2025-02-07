const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
        panel.addEventListner('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panel.classList.remove('active')
}