export default async function handler(req, res) {
    // Get the GitHub API key from environment variables
    const apiKey = process.env.NEXT_PUBLIC_GITHUB_API_KEY;
  
    if (!apiKey) {
      return res.status(500).json({ error: 'API Key not found' });
    }
  
    // For example, use the GitHub API to fetch user info
    const githubApiUrl = `https://api.github.com/users/octocat`; // You can modify this URL as needed
  
    try {
      const response = await fetch(githubApiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
  
      if (!response.ok) {
        return res.status(response.status).json({ error: 'GitHub API request failed' });
      }
  
      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch data from GitHub' });
    }
  }