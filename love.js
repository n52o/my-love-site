// ازاي تغير الوقت؟
// غير التاريخ اللي تحت ده بالتاريخ اللي انت عايزه (سنة-شهر-يوم ساعة:دقيقة:ثواني)
const targetDate = new Date("2026-12-31T00:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // حساب الأيام والساعات والدقائق والثواني
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // عرض النتيجة في العناصر
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // لو الوقت خلص
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "كل سنة وانتي طيبة! ❤️";
    }
}, 1000);