window.addEventListener("DOMContentLoaded", function () {
    const backBtn = document.createElement("a");

    // الرابط والنص (مع السهم كما في الصورة)
    backBtn.href = "../index.html";
    backBtn.innerText = "الرجوع إلى المحاضرات ←";

    // التنسيقات لمطابقة الصورة:
    // bg-[#00adef]: لون أزرق سماوي مطابق للصورة
    // text-white: نص أبيض
    // font-bold: خط عريض
    // rounded-xl: حواف دائرية عريضة لكن ليست دائرية بالكامل
    // py-3 px-6: مسافات داخلية ليعطي شكل الزر الضخم في الصورة
    // text-center: توسيط النص
    // shadow-md: ظل خفيف
    backBtn.className =
        "fixed top-6 left-6 bg-[#00adef] text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-[#0086b8] transition-all z-50 flex items-center justify-center gap-2 no-underline";

    document.body.appendChild(backBtn);
});
