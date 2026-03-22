window.addEventListener("DOMContentLoaded", function () {
    const backBtn = document.createElement("a");

    // الرابط والنص (مع السهم كما في الصورة)
    backBtn.href = "../index.html";
    backBtn.innerText = "الرجوع إلى المحاضرات ←";

    // التنسيقات لمطابقة الصورة:
    // right-6: تم استبدال left-6 بـ right-6 لنقل الزر إلى أقصى اليمين
    // bg-[#00adef]: لون أزرق سماوي مطابق للصورة
    // text-white: نص أبيض
    // font-bold: خط عريض
    // rounded-xl: حواف دائرية عريضة
    // py-3 px-6: مسافات داخلية ليعطي شكل الزر في الصورة
    // shadow-md: ظل خفيف
    backBtn.className =
        "fixed top-6 right-6 bg-[#00adef] text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-[#0086b8] transition-all z-50 flex items-center justify-center gap-2 no-underline";

    document.body.appendChild(backBtn);
});
