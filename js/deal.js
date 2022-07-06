const menus = $('#section .lnb-wrapper .lnb a');
const sections = gsap.utils.toArray("section");
let currentSection = 0;

menus.on('click', function (e) {
    e.preventDefault();
    $(menus[currentSection]).removeClass('active');
    sections.forEach((section, i) => {
        if ($(this)[0].id.indexOf(section.id) > -1) {
            currentSection = i;
            $(menus[currentSection]).addClass('active');
            section.setAttribute('style', 'display:block');
        } else {
            section.setAttribute('style', 'display:none');
        }
    });
});

$('input[name="exposure_start_date"]').daterangepicker({
    singleDatePicker: true,
    timePicker: true,
    locale: {
        format: 'YYYY. M. D hh:mm A'
    }
});
$('input[name="selling_periods"]').daterangepicker({
    autoApply: true,
    locale: {
        format: 'YYYY. M. D'
    }
});
$('input[name="usage_period"]').daterangepicker({
    autoApply: true,
    locale: {
        format: 'YYYY. M. D'
    }
});

var myWidget = cloudinary.createUploadWidget({
        cloudName: 'kyte',
        uploadPreset: 'xm6nvbrf',
        folder: 'playwings/widget',
        sources: ['local'],
        showAdvanced_options: true,
        thumbnails: '.upload_multiple_images_holder'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
        }
    }
)

document.getElementById("upload_widget").addEventListener("click", function () {
    myWidget.open();
}, false);

function submitForm() {
    if (document.getElementsByClassName('upload_multiple_images_holder')[0].children.length == 0) {
        alert("이미지를 업로드해주세요.");
        return;
    }
    let form = document.getElementById('form');
    if (form.checkValidity()) {
        document.getElementById('hiddenFrame').onload = onLoad();
        document.getElementById('submitButton').setAttribute('style', 'opacity:.6');
        document.getElementById('form').setAttribute('style', 'opacity:.6');
        form.target = 'hiddenFrame';
        form.submit();
    }
}

function onLoad() {
    setTimeout(function () {
        document.getElementById('form').setAttribute('style', 'display:none');
        document.getElementById('thanks').setAttribute('style', 'display:block');
    }, 2500);
}