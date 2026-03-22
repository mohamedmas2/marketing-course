alert("js شغال");
const backBtn = document.createElement("a");

backBtn.href = "../index.html";
backBtn.innerText = "← الرئيسية";

backBtn.className = "fixed top-6 left-6 bg-white border border-sky-200 text-sky-700 px-4 py-2 rounded-full shadow hover:bg-sky-50 transition z-50";

document.body.appendChild(backBtn);
