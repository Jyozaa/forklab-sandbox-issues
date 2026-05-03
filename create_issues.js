const issues = [
  { title: "Fix mathUtils.js add function", body: "The add function in mathUtils.js returns a-b instead of a+b. Fix it." },
  { title: "Fix stringUtils.js capitalize function", body: "The capitalize function in stringUtils.js converts the first letter to lowercase instead of uppercase. Fix it." },
  { title: "Fix arrayUtils.js findMax return value", body: "The findMax function in arrayUtils.js should return null for empty arrays, not undefined. Fix it." },
  { title: "Fix dateUtils.js month typo", body: "There is a typo 'Januray' in dateUtils.js. Fix it to 'January'." },
  { title: "Fix validation.js email regex", body: "The email validation regex in validation.js is too simple and missing the @ symbol. Fix it." },
  { title: "Fix converter.js celsiusToFahrenheit formula", body: "The formula (c * 9/5) - 32 is wrong. It should be + 32. Fix it." },
  { title: "Fix auth.js hardcoded credentials", body: "The login function has hardcoded 'admin' and '12345'. Move them to constants or handle properly. Fix it." },
  { title: "Fix config.js API_URL protocol", body: "The API_URL is missing the 'https://' protocol. Fix it." },
  { title: "Fix logger.js logInfo method", body: "logInfo should use console.log instead of console.error. Fix it." },
  { title: "Fix formatter.js formatCurrency spacing", body: "There should be no space between the currency symbol and the amount. Fix it." },
  { title: "Fix filter.js filterOdd logic", body: "The filterOdd function currently returns even numbers. Fix it." },
  { title: "Fix sorter.js sortAscending behavior", body: "The sortAscending function sorts alphabetically (e.g., 10 before 2). Fix it to sort numerically. Fix it." },
  { title: "Fix mapper.js missing field", body: "The mapToUser function is missing the 'id' field from the raw data. Fix it." },
  { title: "Fix generator.js constant ID", body: "The generateId function returns a constant string instead of a random ID. Fix it." },
  { title: "Fix parser.js missing error handling", body: "The parseJSON function should have a try-catch block to handle invalid JSON. Fix it." },
  { title: "Fix searcher.js binarySearch mid calculation", body: "The mid calculation `left + right / 2` is incorrect due to operator precedence. Fix it." },
  { title: "Fix transformer.js toSnakeCase global replace", body: "The toSnakeCase function only replaces the first space. Fix it to replace all spaces. Fix it." },
  { title: "Fix helper.js leap year logic", body: "The isLeapYear function is too simple and incorrectly returns true for 1900. Fix it." },
  { title: "Fix calculator.js multiply negative handling", body: "The multiply function returns 0 if any operand is negative. Fix it to allow negative multiplication. Fix it." },
  { title: "Fix storage.js storage type", body: "The saveToLocal function uses sessionStorage instead of localStorage. Fix it." }
];

const REPO = "Jyozaa/forklab-sandbox-issues";
const TOKEN = process.env.GITHUB_TOKEN;

if (!TOKEN) {
  console.error("Please set GITHUB_TOKEN environment variable.");
  process.exit(1);
}

async function createIssue(issue) {
  const response = await fetch(`https://api.github.com/repos/${REPO}/issues`, {
    method: "POST",
    headers: {
      "Authorization": `token ${TOKEN}`,
      "Content-Type": "application/json",
      "Accept": "application/vnd.github.v3+json"
    },
    body: JSON.stringify(issue)
  });

  if (response.ok) {
    console.log(`Created: ${issue.title}`);
  } else {
    console.error(`Failed: ${issue.title}`, await response.text());
  }
}

async function main() {
  for (const issue of issues) {
    await createIssue(issue);
    // Add a small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}

main();
