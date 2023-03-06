const getAccessToken = async () => {
  const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });
  return response.json();
};

export const joeRoganPodcastShow = async () => {
  const { access_token } = await getAccessToken();
  return fetch(
    "https://api.spotify.com/v1/shows/4rOoJ6Egrf8K2IrywzwOMk/episodes",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
};
