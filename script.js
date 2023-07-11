var input = document.querySelector("#input");
var output = document.querySelector("#output");
var convert_btn = document.querySelector("#convert");
var copy_btn = document.querySelector("#copy");
function convertTextToCode(text) {
    var ascii_codes = [];
    // 배열에 텍스트의 아스키코드들을 넣습니다.
    for (var i = 0; i < text.length; i++) {
        var ascii = text.charCodeAt(i);
        ascii_codes.push(ascii);
    }
    var loop_code = "++++++++++[\n";
    var print_code = "";
    ascii_codes.forEach(function (ascii) {
        // 아스키코드의 1의 자리를 버리고 10씩 나누어 반복하며 메모리에 저장합니다.
        loop_code += ">" + "+".repeat(Math.floor(ascii * 0.1)) + "\n";
        // 버린 값들을 더하며 문자를 출력합니다.
        print_code += ">" + "+".repeat(parseInt(String(ascii).charAt(String(ascii).length - 1))) + ".\n";
    });
    loop_code += "<".repeat(ascii_codes.length) + "-]" + "\n";
    return loop_code + print_code;
}
if (input != null && output != null && convert_btn != null && copy_btn != null) {
    convert_btn.onclick = function () {
        output.value = input.value === "" ? "" : convertTextToCode(input.value);
    };
    copy_btn.onclick = function () {
        navigator.clipboard.writeText(output.value)
            .catch(function (err) {
            alert("브라우저가 클립보드 복사 기능을 지원하지 않습니다.\n" + err);
        });
    };
}
