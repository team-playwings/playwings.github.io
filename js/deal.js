const menus = $('#section .lnb-wrapper .lnb a');
let currentMenu = $(menus[0]);
let type;
let title;
let usage_period_title;
let usage_period_sub;

menus.on('click', function (e) {
    e.preventDefault();

    currentMenu.removeClass('active');
    currentMenu = $(this);
    currentMenu.addClass('active');

    type = $('#type')[0];
    title = $('#title')[0];
    usage_period_title = $('#usage_period_title')[0];
    usage_period_sub = $('#usage_period_sub')[0];

    switch ($(this)[0].id) {
        case 'menu_flight':
            type.value = '항공';
            title.innerHTML = '항공';
            usage_period_title.innerHTML = '국내선 탑승 기간';
            usage_period_sub.innerHTML = '국내선 항공 탑승 기간을 입력해주세요.';
            usage_period2.style.display = 'block';
            message_sub.innerHTML = '특가 상품 등록과 관련하여 문의하실 사항을 입력해주세요.<br>노선 별로 탑승기간이 상이한 경우, 문의사항에 기재 부탁 드립니다.';
            break;

        case 'menu_hotel':
            type.value = '호텔';
            title.innerHTML = '호텔';
            usage_period_title.innerHTML = '투숙 기간';
            usage_period_sub.innerHTML = '호텔 투숙 기간을 입력해주세요.';
            usage_period2.style.display = 'none';
            message_sub.innerHTML = '특가 상품 등록과 관련하여 문의하실 사항을 입력해주세요.<br>상품 별로 투숙기간이 상이한 경우, 문의사항에 기재 부탁 드립니다.';
            break;

        case 'menu_activity':
            type.value = '투어&액티비티';
            title.innerHTML = '투어&액티비티';
            usage_period_title.innerHTML = '사용 기간';
            usage_period_sub.innerHTML = '상품 사용 기간을 입력해주세요.';
            usage_period2.style.display = 'none';
            message_sub.innerHTML = '특가 상품 등록과 관련하여 문의하실 사항을 입력해주세요.<br>상품 별로 사용기간이 상이한 경우, 문의사항에 기재 부탁 드립니다.';
            break;

        case 'menu_package':
            type.value = '패키지';
            title.innerHTML = '패키지';
            usage_period_title.innerHTML = '사용 기간';
            usage_period_sub.innerHTML = '상품 사용 기간을 입력해주세요.';
            usage_period2.style.display = 'none';
            message_sub.innerHTML = '특가 상품 등록과 관련하여 문의하실 사항을 입력해주세요.<br>상품 별로 사용기간이 상이한 경우, 문의사항에 기재 부탁 드립니다.';
            break;
    }
});

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);

const tomorrowEnd = new Date();
tomorrowEnd.setDate(tomorrow.getDate());
tomorrowEnd.setHours(23, 59, 0, 0);

const theDayAfterTomorrow = new Date();
theDayAfterTomorrow.setDate(tomorrow.getDate() + 1);

$('input[name="exposure_start_date"]').daterangepicker({
    minDate: tomorrow,
    startDate: tomorrow,
    singleDatePicker: true,
    timePicker: true,
    timePicker24Hour: true,
    locale: {
        format: 'YYYY. M. D hh:mm A'
    }
});

$('input[name="exposure_end_date"]').daterangepicker({
    minDate: tomorrowEnd,
    startDate: tomorrowEnd,
    singleDatePicker: true,
    timePicker: true,
    timePicker24Hour: true,
    locale: {
        format: 'YYYY. M. D hh:mm A'
    }
});

$('input[name="selling_periods"]').daterangepicker({
    minDate: tomorrow,
    startDate: tomorrow,
    endDate: theDayAfterTomorrow,
    autoApply: true,
    locale: {
        format: 'YYYY. M. D'
    }
});

/*
$('input[name="usage_period"]').daterangepicker({
    minDate: tomorrow,
    startDate: tomorrow,
    endDate: theDayAfterTomorrow,
    autoApply: true,
    locale: {
        format: 'YYYY. M. D'
    }
});

$('input[name="usage_period2"]').daterangepicker({
    minDate: tomorrow,
    startDate: tomorrow,
    endDate: theDayAfterTomorrow,
    autoApply: true,
    locale: {
        format: 'YYYY. M. D'
    }
});
*/

let myWidget = cloudinary.createUploadWidget({
        cloudName: 'kyte',
        uploadPreset: 'xm6nvbrf',
        folder: 'playwings/widget',
        sources: ['local'],
        showAdvanced_options: true,
        thumbnails: '.upload_multiple_images_holder'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            /*
            if (result.info.resource_type == 'raw') {
                let filename = result.info.public_id.substring(result.info.public_id.lastIndexOf('/'));
                console.log(filename);
            }
            */
        }
    }
)

document.getElementById("upload_widget").addEventListener("click", function () {
    myWidget.open();
}, false);

function submitForm() {
    if (document.getElementsByClassName('upload_multiple_images_holder')[0].children.length == 0) {
        alert("첨부파일을 업로드해주세요.");
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