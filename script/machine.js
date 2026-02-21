// switching tabs
const btnAll = document.getElementById("tab_all");
const btnInterview = document.getElementById("tab_interview");
const btnRejected = document.getElementById("tab_rejected");

const allJobs = document.getElementById("all_jobs");
const interviewJobs = document.getElementById("interview_jobs");
const rejectedJobs = document.getElementById("rejected_jobs");

const count = document.getElementById("job_count");

// By default the all jobs tab will be active
btnAll.classList.remove("bg-gray-200", "text-gray-700");
btnAll.classList.add("bg-blue-600", "text-white");

// function to count real jobs
function countJobs(section) {
  let realJobs = 0;
  for (let i = 0; i < section.children.length; i++) {
    if (!section.children[i].classList.contains("dontCount")) {
      realJobs++;
    }
  }
  return realJobs;
}

// function to switch tabs
function switchTab(id) {
  allJobs.classList.add("hidden");
  interviewJobs.classList.add("hidden");
  rejectedJobs.classList.add("hidden");

  btnAll.classList.remove("bg-blue-600", "text-white");
  btnAll.classList.add("bg-gray-200", "text-gray-700");
  btnInterview.classList.remove("bg-blue-600", "text-white");
  btnInterview.classList.add("bg-gray-200", "text-gray-700");
  btnRejected.classList.remove("bg-blue-600", "text-white");
  btnRejected.classList.add("bg-gray-200", "text-gray-700");

  if (id === btnAll) {
    allJobs.classList.remove("hidden");
    count.innerText = countJobs(allJobs);
  } else if (id === btnInterview) {
    interviewJobs.classList.remove("hidden");
    count.innerText = countJobs(interviewJobs);
  } else if (id === btnRejected) {
    rejectedJobs.classList.remove("hidden");
    count.innerText = countJobs(rejectedJobs);
  }
  id.classList.remove("bg-gray-200", "text-gray-700");
  id.classList.add("bg-blue-600", "text-white");
}

btnAll.addEventListener("click", function () {
  switchTab(btnAll);
});
btnInterview.addEventListener("click", function () {
  switchTab(btnInterview);
});
btnRejected.addEventListener("click", function () {
  switchTab(btnRejected);
});
