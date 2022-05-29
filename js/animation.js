//          Tác giả : Đinh Đức Anh
//          Mail    : anh.dd182330@sis.hust.edu.vn
//                    dinhanh21092000@gmail.com

// Object chứa giá trị cần hiển thị
let initialValue = {
    content1: ` Người anh thương chỉ có một. người anh nhớ chỉ có một.
                        Người anh yêu chỉ có một.
                        Người anh muốn sống trọn đời cũng chỉ có một.
                        Đó chính là em – người yêu xinh ngoan của anh.`,
    content2: `
      Anh chỉ có một tình yêu duy nhất.
                        Dành tặng em bây giờ và mãi mãi.
                        Dẫu anh đi đến tận cùng trái đất.
                        Vẫn hướng về em bằng trọn con tim.`
}

const year = document.querySelector('.mess')
let arrContent1 = initialValue.content1.split('')
let arrYearResult1 = []

let arrContent2 = initialValue.content2.split('')
let arrYearResult2 = []

// function chạy đầu tiên
function display() {
    setTimeout(() => {
        const timeOut = setInterval(() => {
            arrYearResult1.push(arrContent1.shift())
            year.classList.add('.animation')
            year.innerHTML = arrYearResult1.join("")
            year.classList.remove('.animation')
            if (arrContent1.length == 0) {
                clearInterval(timeOut)
                arrYearResult2.push(arrContent2.shift())
                year.classList.add('.animation')
                year.innerHTML = arrYearResult2.join("")

                setTimeout(() => {
                    display2()
                }, 500)
            }
        }, 100)
    }, 600)

}

function display2() {
    let img = document.querySelector('.img__loveyou')
    img.src = `https://res.cloudinary.com/ducanh21092000/image/upload/v1653786408/avatar/iloveyouu_pqiymo.gif`
    setTimeout(() => {
        const timeOut = setInterval(() => {
            arrYearResult2.push(arrContent2.shift())
            year.classList.add('.animation')
            year.innerHTML = arrYearResult2.join("")
            year.classList.remove('.animation')
            if (arrContent2.length == 0) {
                clearInterval(timeOut)
                let btn = document.querySelector('.btnCtn')
                btn.classList.remove('d-none')
            }
        }, 100)
    }, 600)

}
display()

const showabcd = () => {
    let abcd = document.querySelector('.abcd')
    let huyen = document.querySelector('.huyen1')
    huyen.classList.add('d-none')
    abcd.classList.remove('d-none')

}

const start = () => {
    let header = document.querySelector('.header')
    let start = document.querySelector('.show__start')
    start.classList.add('fade2')
    header.classList.add('show2')
    setTimeout( () => {
        start.classList.add('d-none')
        header.classList.remove('d-none')
        header.classList.remove('show2')
    },1000)
    
}

const showbtn = () => {
    let btn = document.querySelector('.no')
    btn.classList.remove('d-none')
}

const hidebtn = () => {
    let btn = document.querySelector('.no')
    btn.classList.add('d-none')
}

const wait = () => {
    let header = document.querySelector('.header')
    let huyen = document.querySelector('.huyen1')
    huyen.classList.remove('d-none')
    header.classList.add('d-none')
}

const send = () => {
    let mess = document.querySelector('.mess1')
    let data = {
        content: mess.value
    }
    fetch('https://ducanh-store.herokuapp.com/api/videos', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(() => {
            let show = document.querySelector('.show')
            show.classList.add('d-none')
            let show2 = document.querySelector('.show2')
            show2.classList.remove('d-none')

        })

}