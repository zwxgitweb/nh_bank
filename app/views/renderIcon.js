function renderIcon (data) {
    var str = '';
    for (let i=0;i < data.iconData.length;i++) {
        str += `<a href="#"><i style='background:${data.iconData[i].iconBg}' class="iconfont ${data.iconData[i].iconCls}"></i><em>${data.iconData[i].info}</em></a>`
    }
    $('.shows').html(str);
}