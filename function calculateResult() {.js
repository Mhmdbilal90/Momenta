function calculateResult() {
  // Get all selected answers
  const q1 = parseInt(document.querySelector('input[name="q1"]:checked').value);
  const q2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
  const q3 = parseInt(document.querySelector('input[name="q3"]:checked').value);

  // Calculate total score
  const totalScore = q1 + q2 + q3;

  // Determine personality type
  let resultText;
  if (totalScore >= 2) {
    resultText = "You are more extroverted! You thrive in social settings and enjoy being around people.";
  } else {
    resultText = "You are more introverted! You prefer quieter, more intimate settings and value alone time.";
  }

  // Display result
  document.getElementById("resultText").innerText = resultText;
  document.getElementById("result").classList.remove("hidden");
}