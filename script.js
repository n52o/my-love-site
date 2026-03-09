// حط كل الإجابات واللينك هنا
const config = {
    1: "بحبك",            // الكلمة
    2: "5/9",           // عيد ميلادها
    3: "20",             // سنها
    4: "12/11",          // يوم اللقاء
    5: "153",            // طولها
    6: "جاهزة",          // تأكيد النهاية
    redirectUrl: "love.html" // صفحتك اللي انت مصممها
};

function validateStep(stepNum) {
    const inputElement = document.getElementById(`input${stepNum}`);
    const errorElement = document.getElementById(`err${stepNum}`);
    const userValue = inputElement.value.trim();

    // تشيك لو الإجابة صح
    if (userValue === config[stepNum]) {
        errorElement.style.display = 'none';
        
        if (stepNum < 6) {
            // لو لسه فيه كروت تانية، انقل للي بعده
            goToNext(stepNum);
        } else {
            // لو خلصت كل الكروت، ودّيها لصفحتك
            window.location.href = config.redirectUrl;
        }
    } else {
        // لو الإجابة غلط، اظهر رسالة الخطأ
        errorElement.style.display = 'block';
    }
}

function goToNext(currentStep) {
    const currentCard = document.getElementById(`card${currentStep}`);
    const nextCard = document.getElementById(`card${currentStep + 1}`);
    
    currentCard.classList.remove('active');
    nextCard.classList.add('active');
}