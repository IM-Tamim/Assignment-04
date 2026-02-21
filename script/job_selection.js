let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total-jobs");
let interview = document.getElementById("interview-jobs");
let rejected = document.getElementById("rejected-jobs");

function updateCounts() {
  total.innerText = allJobs.children.length - 1;
  interview.innerText = interviewList.length;
  rejected.innerText = rejectedList.length;
}
updateCounts();

allJobs.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview_btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const Title = parentNode.querySelector("h3").innerText;
    const job = parentNode.querySelector("h4").innerText;
    const type = parentNode.querySelector("p").innerText;
    const badge = "INTERVIEW";
    const text = parentNode.querySelector(".p_text").innerText;
    parentNode.querySelector('.status_badge').innerText = 'INTERVIEW';

    const cardInfo = {
      Title,
      job,
      type,
      badge,
      text,
    };

    const card_exist = interviewList.find(
      (item) => item.Title == cardInfo.Title,
    );
    if (!card_exist) {
      interviewList.push(cardInfo);
    }
    renderInterview();
  }
});

const interviewBlank = document.getElementById("interview_blank");

function renderInterview() {
  interviewBlank.innerHTML = "";
  for (let item of interviewList) {
    let div = document.createElement("div");
    div.className = "bg-white p-6 rounded-xl shadow relative";
    div.innerHTML = `
      <button
        class="delete_btn absolute top-4 right-4 text-gray-500 hover:text-red-500"
      >
        <div class="bg-gray-100 rounded-full p-2">
          <i class="fa-regular fa-trash-can"></i>
        </div>
      </button>

      <h3 class="text-lg font-semibold text-gray-800">${item.Title}</h3>
      <h4 class="text-gray-500">${item.job}</h4>
      <p class="text-sm text-gray-500 mt-2">${item.type}</p>

      <div class="mt-4">
        <span
          class="status_badge text-xs font-semibold px-4 py-2 rounded-md bg-green-100 text-green-700"
        >
          ${item.badge}
        </span>
      </div>

      <p class="mt-4 text-gray-600 text-sm">${item.text}</p>

      <div class="flex gap-3 mt-5">
        <button class="interview_btn border border-green-500 text-green-600 px-4 py-1 rounded-md hover:bg-green-500 hover:text-white transition">
          INTERVIEW
        </button>
        <button class="rejected_btn border border-red-500 text-red-600 px-4 py-1 rounded-md hover:bg-red-500 hover:text-white transition">
          REJECTED
        </button>
      </div>
    `;
    interviewBlank.appendChild(div);
  }
}
