function renderAbout (data) {
    var str = '';
    $(data.about).each(function (i, v) {
        str += `
            <li>
                <em></em>
                ${v}
            </li>
        `
    })
    $('.abList').html(str);
}