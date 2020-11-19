enableTabButton = buttonId => {
    $(`#${buttonId}`)
        .removeClass("btn-outline-primary")
        .removeClass("border-0")
        .addClass("btn-primary")
        .prop("disabled",false);
};

disableTabButton = buttonId => {
    $(`#${buttonId}`)
        .removeClass("btn-primary")
        .addClass("btn-outline-primary")
        .addClass("border-0")
        .prop("disabled",true);
};

showTab = tabId => {
    $(`#${tabId}`).removeClass("d-none");
};

hideTab = tabId => {
    $(`#${tabId}`).addClass("d-none");
};

$("#login-tab-btn").click(() => {
    window.location.hash = "#login";
    enableTabButton("register-tab-btn");
    disableTabButton("login-tab-btn");
    hideTab("register-tab");
    showTab("login-tab");
});

$("#register-tab-btn").click(() => {
    console.log("here")
    window.location.hash = "#register";
    enableTabButton("login-tab-btn");
    disableTabButton("register-tab-btn");
    hideTab("login-tab");
    showTab("register-tab");
});