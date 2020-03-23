const onSanitize = (e) => {
    const inputEl = document.getElementById("user-input");

    if (!inputEl) {
        return;
    }

    const dirty = inputEl.value;
    const sanitized = DOMPurify.sanitize(dirty);

    const outputEl = document.getElementById('user-output');

    if (outputEl) {
        outputEl.innerHTML = sanitized;
    }
}

const onClear = () => {
    const inputEl = document.getElementById("user-input");
    const outputEl = document.getElementById('user-output');

    if (inputEl) {
        inputEl.value = "";
    }

    if (outputEl) {
        outputEl.innerHTML = "";
    }
}