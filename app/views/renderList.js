function renderList (data) {
    var str = '';
    $(data.listData).each(function (i, v) {
        str += `
            <div class="panel">
                <div class="panel-heading">
                    <a data-toggle="collapse" data-parent="#accordion" 
                        href="#${v.cls}">
                        <span><em></em>${v.tit}</span><i class="iconfont icon-xiangxia"></i>
                    </a>
                </div>
                <div id="${v.cls}" class="panel-collapse collapse">
                    <img src="${v.src}">
                    <ul class="list">
        `
        $(v.con).each(function (i, k) {
            str += `
                <li><em></em><span>${k}</span></li>
            `
        })
        str += `    </ul>
                </div>
            </div>
        `
    })
    $('.accordion1').html(str);
    // 默认列表样式
    $('.panel-heading a').eq(2).addClass('on').children('i').addClass('icon-xiangshang').removeClass('icon-xiangxia');
    $('.collapse').eq(2).addClass('in');
    // 点击列表展开样式切换
    $($('.panel')).each(function (i, v) {
        $('.panel .panel-heading a').eq(i).on('click', function () {
            $(this).toggleClass('on').children('i').toggleClass('icon-xiangshang').toggleClass('icon-xiangxia');
        })
    })
}