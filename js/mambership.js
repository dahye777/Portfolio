const form = document.querySelector("#join .inner #member");
const btnSubmit = document.querySelector("input[type=submit]");
let toggleBtn = document.getElementById("toggleBtn");
let pwd = document.querySelector("#pwd1");

btnSubmit.addEventListener("click", (e) => {
    if (!isText("userid", 5)) e.preventDefault();
    if (!isText("comments", 20)) e.preventDefault();
    if (!isEmail("email")) e.preventDefault();

    if (!isCheck("gender")) e.preventDefault();
    if (!isCheck("hobby")) e.preventDefault();

    if (!isSelect("edu")) e.preventDefault();

    if (!isPwd("pwd1", "pwd2", 5)) e.preventDefault();
})

function isText(el, len) {
    if (len === undefined) len = 5;

    let input = form.querySelector(`[name=${el}]`);

    let txt = input.value;
    console.log(txt);

    if (txt.length >= len) {
        const isErrMsg = input.closest("td").querySelectorAll("p");

        if (isErrMsg.length > 0) input.closest("td").querySelector("p").remove();
        return true;
    } else {
        const isErrMsg = input.closest("td").querySelectorAll("p");
        if (isErrMsg.length > 0) return false;

        const errMsg = document.createElement("p");
        errMsg.append(`입력항목을 ${len}글자 이상 입력하세요`);
        input.closest("td").append(errMsg);
        return false;
    }
}
function isEmail(el) {
    let input = form.querySelector(`[name=${el}]`);
    let txt = input.value;


    if (/@/.test(txt)) {
        const isErrMsg = input.closest("td").querySelectorAll("p");
        if (isErrMsg.length > 0) input.closest("td").querySelector("p").remove();
        return true;
    } else {
        const isErrMsg = input.closest("td").querySelectorAll("p");
        if (isErrMsg.length > 0) return false;


        const errMsg = document.createElement("p");
        errMsg.append("@를 포함한 전체 이메일 주소를 입력하세요");
        input.closest("td").append(errMsg);
        return false;
    }
}

function isCheck(el) {
    let input = form.querySelectorAll(`[name=${el}]`);
    let isCheck = false;

    for (let el of input) {
        if (el.checked) isCheck = true;
    }

    if (isCheck) {
        const isErrMsg = input[0].closest("td").querySelectorAll("p");
        if (isErrMsg.length > 0) input[0].closest("td").querySelector("p").remove();
        return true;
    } else {
        const isErrMsg = input[0].closest("td").querySelectorAll("p");
        if (isErrMsg.length > 0) return false;

        const errMsg = document.createElement("p");
        errMsg.append("필수 입력항목을 체크해주세요");
        input[0].closest("td").append(errMsg);
        return false;
    }

}
function isSelect(el) {
    let sel = form.querySelector(`[name=${el}]`);
    let sel_index = sel.options.selectedIndex;

    let val = sel[sel_index].value;

    if (val !== "") {
        const isErrMsg = sel.closest("td").querySelectorAll("p");
        if (isErrMsg.length > 0) sel.closest("td").querySelector("p").remove();
        return true;
    } else {
        const isErrMsg = sel.closest("td").querySelectorAll("p");
        if (isErrMsg.length > 0) return false;

        const errMsg = document.createElement("p");
        errMsg.append("항목을 선택해 주세요");
        sel.closest("td").append(errMsg);
        return false;
    }
}

function isPwd(el1, el2, len) {
    let pwd1 = form.querySelector(`[name=${el1}]`);
    let pwd2 = form.querySelector(`[name=${el2}]`);
    let pwd1_val = pwd1.value;
    let pwd2_val = pwd2.value;
    const num = /[0-9]/;
    const eng = /[a-zA-Z]/;
    const spc = /[~!@#$%^&*()_+?><]/;

    const errMsgWrap = pwd1.closest("td");

    function removeErrMsg() {
        const errMsg = errMsgWrap.querySelector("p");
        if (errMsg) {
            errMsg.remove();
        }
    }
    function addErrMsg(msg) {
        const errMsg = document.createElement("p");
        errMsg.textContent = msg;
        errMsgWrap.append(errMsg);

    }

    if (
        pwd1_val === pwd2_val &&
        pwd1_val.length >= len &&
        num.test(pwd1_val) &&
        eng.test(pwd1_val) &&
        spc.test(pwd1_val)) {
        removeErrMsg();
        return true;
    } else {
        removeErrMsg();
        let err = "비밀번호는 ";
        if (pwd1_val.length < len) {
            err += `${len}글자 이상,`;
        }
        if (!num.test(pwd1_val)) {
            err += "숫자를 포함,";
        }
        if (!eng.test(pwd1_val)) {
            err += "영문을 포함,"
        }
        if (!spc.test(pwd1_val)) {
            err += "특수문자를 포함,"
        }
        err += "동일하게 입력하세요";
        addErrMsg(err);
        return false;
    }

}



toggleBtn.addEventListener("click", () => {
    if (pwd.type === 'password') {
        pwd.setAttribute("type", "text");
        toggleBtn.classList.add("hide");
    } else {
        pwd.setAttribute("type", "password");
        toggleBtn.classList.remove("hide");
    }

})