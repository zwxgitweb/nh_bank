function renderProduct (data) {
    var str = '';
    $(data.proData).each(function (i, v) {
        str += `
            <div class="panel">
                <div class="panel-heading">
                    <a data-toggle="collapse" data-parent="#accordion" 
                        href="#${v.cls}">
                        <span><i class="iconfont icon-wode"></i>${v.s1}</span><i class="iconfont icon-xiangxia"></i>
                    </a>
                </div>
                <div id="${v.cls}" class="panel-collapse collapse">
                    <h4>${v.tit}</h4>
                    <p class="tit2">${v.tit2}</p>
                    <button class="more">${v.more}</button>
                    <ul class="proList">
        `
        $(v.iconData).each(function (i, k) {
            str += `
                <li>
                    <i class="iconfont ${k.iconCls}" style="background: ${k.iconBg}"></i>
                    <em>${k.iconTit}</em>
                </li>
            `
        })
        str += ` </ul>
                </div>
            </div>
        `
    })
    $('.accordion2').html(str);
}