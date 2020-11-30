
let svg = document.getElementById('graph');

$(function () {
    $('.graph').on('click', function (event) {
        XYR();
        let position = getMousePosition(svg, event);
        let x = position.x;
        let y = position.y;
        let y_val = ((200 - y) * r / 120).toFixed(4);
        if (y_val > 3) y_val = 3;
        if (y_val < -3) y_val = -3;
        let x_val = (((x - 200) * r / 120)).toFixed();
        if (x_val >= 2) x_val = 2;
        if (x_val <= -2) x_val = -2;
        if (x_val == "-0")  x_val = 0;
        point1(x_val, y_val, r);
        $("a[id='form:slider_x_handle']").attr("style", "left: "+(50 + x_val*25)+"%");
        $("input[id='form:slider_x_hidden']").attr("value",x_val);
        $("label[id='form:xValue']").text(x_val);
        $("input[name='form:y_in']").val(y_val);
    });
});

function point1(x, y, r) {
    $('#point').attr('cx', x*120/r + 200)
        .attr('cy', 200 - y*120/r );
}

function getMousePosition(svg, event) {
    let rect = svg.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}