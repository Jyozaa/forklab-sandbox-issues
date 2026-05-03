# Forklab Sandbox Issues

This repository contains 20 simple JavaScript utility files, each with a specific bug or missing feature that can be fixed by modifying only that file.

## Project Structure

The source code is located in the `src/` directory.

## Issues

The following issues are present in the project:
1.  `mathUtils.js`: Incorrect addition logic.
2.  `stringUtils.js`: Incorrect capitalization logic.
3.  `arrayUtils.js`: Incorrect return value for empty arrays.
4.  `dateUtils.js`: Typo in month names.
5.  `validation.js`: Incomplete email regex.
6.  `converter.js`: Incorrect Celsius to Fahrenheit formula.
7.  `auth.js`: Hardcoded credentials.
8.  `config.js`: Missing protocol in URL.
9.  `logger.js`: Incorrect console method.
10. `formatter.js`: Incorrect currency spacing.
11. `filter.js`: Incorrect filtering logic.
12. `sorter.js`: Alphabetical instead of numerical sorting.
13. `mapper.js`: Missing field in mapping.
14. `generator.js`: Constant instead of random ID.
15. `parser.js`: Missing error handling.
16. `searcher.js`: Incorrect binary search mid calculation.
17. `transformer.js`: Non-global string replacement.
18. `helper.js`: Incorrect leap year logic.
19. `calculator.js`: Incorrect negative number handling.
20. `storage.js`: Incorrect storage type.

## How to Create GitHub Issues

I've provided a script `create_issues.js` to automate the creation of these issues on GitHub.

### Prerequisites

- Node.js installed.
- A GitHub Personal Access Token (PAT) with `repo` scope.

### Steps

1.  Set your GitHub token as an environment variable:
    ```bash
    export GITHUB_TOKEN=your_token_here
    ```
2.  Run the script:
    ```bash
    node create_issues.js
    ```

## How to Push Files

If you haven't pushed the files yet, run the following commands in this directory:

```bash
git add .
git commit -m "Add initial files and issue creation script"
git push
```
