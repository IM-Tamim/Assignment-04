let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total-jobs");
let interview = document.getElementById("interview-jobs");
let rejected = document.getElementById("rejected-jobs");

const noJobAll = document.getElementById("no_job_all");

function updateCounts() {
  const allJobsCount = countJobs(allJobs);
  total.innerText = allJobsCount;
  interview.innerText = interviewList.length;
  rejected.innerText = rejectedList.length;

  // no job all tab placeholder
  if (allJobsCount === 0) {
    noJobAll.classList.remove("hidden");
  } else {
    noJobAll.classList.add("hidden");
  }

  if (!allJobs.classList.contains("hidden")) {
    count.innerText = allJobsCount;
  } else if (!interviewJobs.classList.contains("hidden")) {
    count.innerText = interviewList.length;
    no_job_interview.classList.toggle("hidden", interviewList.length > 0);
  } else if (!rejectedJobs.classList.contains("hidden")) {
    count.innerText = rejectedList.length;
    no_job_rejected.classList.toggle("hidden", rejectedList.length > 0);
  }
}
updateCounts();

function deleteJobCard(title) {
  interviewList = interviewList.filter((item) => item.Title !== title);
  rejectedList = rejectedList.filter((item) => item.Title !== title);

  const allTabCards = document.querySelectorAll("#all_jobs .job_card");
  allTabCards.forEach((card) => {
    if (card.querySelector("h3").innerText === title) {
      card.remove();
    }
  });
  const interviewTabCards = document.querySelectorAll(
    "#interview_blank .bg-white",
  );
  interviewTabCards.forEach((card) => {
    if (card.querySelector("h3").innerText === title) {
      card.remove();
    }
  });
  const rejectedTabCards = document.querySelectorAll(
    "#rejected_blank .bg-white",
  );
  rejectedTabCards.forEach((card) => {
    if (card.querySelector("h3").innerText === title) {
      card.remove();
    }
  });
  alert("Card Deleted !!!!");

  renderInterview();
  renderRejected();
  updateCounts();
}

allJobs.addEventListener("click", function (event) {
  if (event.target.closest(".delete_btn")) {
    const deleteBtn = event.target.closest(".delete_btn");
    const card = deleteBtn.closest(".job_card");
    const title = card.querySelector("h3").innerText;

    deleteJobCard(title);
    return;
  }
  if (event.target.classList.contains("interview_btn")) {
    const parentNode = event.target.closest(".job_card");
    const Title = parentNode.querySelector("h3").innerText;
    const job = parentNode.querySelector("h4").innerText;
    const type = parentNode.querySelector("p").innerText;
    const badge = "INTERVIEW";
    const text = parentNode.querySelector(".p_text").innerText;

    rejectedList = rejectedList.filter((item) => item.Title !== Title);
    const badgeElement = parentNode.querySelector(".status_badge");
    badgeElement.innerText = "INTERVIEW";
    badgeElement.classList.remove(
      "bg-blue-100",
      "text-blue-700",
      "bg-red-100",
      "text-red-700",
    );
    badgeElement.classList.add("bg-green-100", "text-green-700");

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
    updateCounts();
  } else if (event.target.classList.contains("rejected_btn")) {
    const parentNode = event.target.closest(".job_card");
    const Title = parentNode.querySelector("h3").innerText;
    const job = parentNode.querySelector("h4").innerText;
    const type = parentNode.querySelector("p").innerText;
    const badge = "REJECTED";
    const text = parentNode.querySelector(".p_text").innerText;

    interviewList = interviewList.filter((item) => item.Title !== Title);
    const badgeElement = parentNode.querySelector(".status_badge");
    badgeElement.innerText = "REJECTED";
    badgeElement.classList.remove(
      "bg-blue-100",
      "text-blue-700",
      "bg-green-100",
      "text-green-700",
    );
    badgeElement.classList.add("bg-red-100", "text-red-700");

    const cardInfo = {
      Title,
      job,
      type,
      badge,
      text,
    };

    const card_exist = rejectedList.find(
      (item) => item.Title == cardInfo.Title,
    );
    if (!card_exist) {
      rejectedList.push(cardInfo);
    }

    renderRejected();
    updateCounts();
  }
});

const interviewBlank = document.getElementById("interview_blank");
function renderInterview() {
  interviewBlank.innerHTML = "";
  for (let item of interviewList) {
    let div = document.createElement("div");
    div.className = "bg-white p-6 rounded-xl shadow relative my-4";
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

      <p class="p_text mt-4 text-gray-600 text-sm">${item.text}</p>

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

const rejectedBlank = document.getElementById("rejected_blank");
function renderRejected() {
  rejectedBlank.innerHTML = "";
  for (let item of rejectedList) {
    let div = document.createElement("div");
    div.className = "bg-white p-6 rounded-xl shadow relative my-4";
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
          class="status_badge text-xs font-semibold px-4 py-2 rounded-md bg-red-100 text-red-700"
        >
          ${item.badge}
        </span>
      </div>

      <p class="p_text mt-4 text-gray-600 text-sm">${item.text}</p>

      <div class="flex gap-3 mt-5">
        <button class="interview_btn border border-green-500 text-green-600 px-4 py-1 rounded-md hover:bg-green-500 hover:text-white transition">
          INTERVIEW
        </button>
        <button class="rejected_btn border border-red-500 text-red-600 px-4 py-1 rounded-md hover:bg-red-500 hover:text-white transition">
          REJECTED
        </button>
      </div>
    `;
    rejectedBlank.appendChild(div);
  }
}

function moveToInterview(cardInfo) {
  rejectedList = rejectedList.filter((item) => item.Title !== cardInfo.Title);
  const exists = interviewList.find((item) => item.Title === cardInfo.Title);

  if (!exists) {
    cardInfo.badge = "INTERVIEW";
    interviewList.push(cardInfo);
  }

  renderInterview();
  renderRejected();
  updateCounts();
}

function moveToRejected(cardInfo) {
  interviewList = interviewList.filter((item) => item.Title !== cardInfo.Title);
  const exists = rejectedList.find((item) => item.Title === cardInfo.Title);

  if (!exists) {
    cardInfo.badge = "REJECTED";
    rejectedList.push(cardInfo);
  }

  renderInterview();
  renderRejected();
  updateCounts();
}

interviewBlank.addEventListener("click", function (event) {
  const deleteBtn = event.target.closest(".delete_btn");
  if (deleteBtn) {
    const card = deleteBtn.closest(".bg-white");
    const title = card.querySelector("h3").innerText;
    deleteJobCard(title);
    return;
  }
  if (event.target.classList.contains("rejected_btn")) {
    const parentNode = event.target.closest(".bg-white");
    const cardInfo = {
      Title: parentNode.querySelector("h3").innerText,
      job: parentNode.querySelector("h4").innerText,
      type: parentNode.querySelector("p").innerText,
      text: parentNode.querySelector(".p_text").innerText,
      badge: "REJECTED",
    };
    moveToRejected(cardInfo);
  }
});

rejectedBlank.addEventListener("click", function (event) {
  const deleteBtn = event.target.closest(".delete_btn");
  if (deleteBtn) {
    const card = deleteBtn.closest(".bg-white");
    const title = card.querySelector("h3").innerText;
    deleteJobCard(title);
    return;
  }
  if (event.target.classList.contains("interview_btn")) {
    const parentNode = event.target.closest(".bg-white");
    const cardInfo = {
      Title: parentNode.querySelector("h3").innerText,
      job: parentNode.querySelector("h4").innerText,
      type: parentNode.querySelector("p").innerText,
      text: parentNode.querySelector(".p_text").innerText,
      badge: "INTERVIEW",
    };
    moveToInterview(cardInfo);
  }
});
