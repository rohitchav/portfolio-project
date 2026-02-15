export default async function handler(req, res) {
  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `,
        variables: {
          username: "rohitchavan0",
        },
      }),
    });

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
