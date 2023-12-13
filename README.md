# Git Search Project

## Overview

The **git-search** project is a Node.js application that utilizes the GitHub Search API to find repositories based on a provided search query. It also includes a script that generates repository URLs for a list of specified GitHub repositories.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/git-search.git
   ```

2. Navigate to the project directory:

   ```bash
   cd git-search
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Finding Repositories

To find repositories based on a search query, use the following command:

```bash
npm start
```

This command will run the `index.js` file, and you will be prompted to enter a search query. The application will then utilize the GitHub Search API to fetch repositories matching the provided query.

### Generating Repository URLs

To generate repository URLs for a list of GitHub repositories, modify the list in the `index.js` file under the comment "// List of GitHub repositories." Add or remove repository names as needed. After making changes, run the following command:

```bash
npm start
```

The script will output an array of repository URLs.

## Configuration

Before using the GitHub Search API, make sure to set your GitHub credentials in the `.env` file:

```env
GITHUB_USERNAME=your-github-username
GITHUB_PASSWORD=your-github-password
```

Note: For enhanced security, consider using a personal access token instead of your password.

## Dependencies

The project relies on the following npm packages:

- `dotenv`: For loading environment variables from a `.env` file.
- `get-repository-url`: For generating GitHub repository URLs.
- `github-search-api`: For interacting with the GitHub Search API.

## License

This project is licensed under the ISC License.

## Author

<img src="https://skillicons.dev/icons?i=github" alt="Github" width="18"/> [serpean](https://github.com/serpean)

Feel free to contribute to the project or report issues on the GitHub repository. Happy coding!
