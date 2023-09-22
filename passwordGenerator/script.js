document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const generateButton = document.getElementById("generate");

    generateButton.addEventListener("click", function () {
        const password = generatePassword(12); // 12 karakterlik bir şifre oluşturun (istediğiniz uzunluğu ayarlayabilirsiniz)
        passwordInput.value = password;
    });

    function generatePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }
});
