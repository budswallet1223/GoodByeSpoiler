function removejp() {
    var ForNumber = document.getElementsByClassName("gall_subject").length;
    var SubjextName
    for (var i = 0; i < ForNumber; i++) {
        if (document.getElementsByClassName("gall_subject")[i] !== undefined) {
            SubjextName = document.getElementsByClassName("gall_subject")[i].innerText;
            if (SubjextName.includes("🗾")) {
                var del = document.getElementsByClassName("gall_subject")[i];
                del.parentNode.remove();
                i--;
            }
        }
    }
}

function removespo() {
    var ForNumber = document.getElementsByClassName("gall_tit ub-word").length;
    var Title
    for (var i = 0; i < ForNumber; i++) {
        if (document.getElementsByClassName("gall_tit ub-word")[i] !== undefined) {
            Title = document.getElementsByClassName("gall_tit ub-word")[i].innerText;
            if (Title.includes("스포")) {
                var del = document.getElementsByClassName("gall_tit ub-word")[i];
                del.parentNode.remove();
                i--;
            }
        }
    }
}

removejp()
removespo()


/*
class="gall_tit ub-word"
1. 웹사이트 인식
- 사이트 이름이 디시인사이드일 때
2. 갤러리 글의 말머리 인식
- 말머리가 🗾JP일 때
3. 글 없애버리기
- 사라짐
-완료
*/
/*
글에 '스포'가 들어가 있을 때
글 차단
*/
