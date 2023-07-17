const container = document.querySelector('.container')
const uploadBtn = document.querySelector('.uploadImage')
const button = document.getElementById('upload')


uploadBtn.addEventListener('click', (e) => {

    button.click()
} )


button.addEventListener('change', (e) => {
    const files = e.target.files

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

    const reader = new FileReader()

    reader.onload = (e) => {
        const image = document.createElement('div')
        container.appendChild(image)
        image.classList.add("image")
        image.innerHTML = `<img src=${reader.result} alt='photos' id='photo'/>`

        console.log(reader.result);
    }
    reader.readAsDataURL(file)
    }
})
 
