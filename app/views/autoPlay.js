function renderAuto (data) {
    var str = '',lis = '';
    for (let i = 0;i < data.lunboData.length;i++) {
        str +=  `
            <div class="item">
                <img src="${data.lunboData[i].src}" alt=''>
            </div>
        `
        lis += '<li></li>';
    }
    $('.carousel-inner').html(str);
    $('.carousel-indicators').html(lis);
    $('.item').eq(0).addClass('active');
    $('.carousel-indicators li').eq(0).addClass('active');
}