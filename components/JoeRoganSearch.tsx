'use client'

import { useEffect, useState } from "react";
import { joeRoganPodcastShow } from "../src/app/api/spotify/spotify";

function JoeRoganPage() {
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    async function fetchEpisodes() {
      try {
        const response = await joeRoganPodcastShow();
        const data = await response.json();
        setEpisodes(data.items);
      } catch (error) {
        console.error(error);
      }
    }

    fetchEpisodes();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {episodes ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className="bg-white rounded-lg shadow-lg p-4 h-full flex flex-col justify-between"
            >
              <div>
                <img
                  src={episode.images[0].url}
                  alt={episode.name}
                  className="w-full rounded-lg"
                />
                <h2 className="text-lg font-bold mt-4">{episode.name}</h2>
                <p className="text-gray-500 text-sm mt-2">
                  {episode.description}
                </p>
              </div>
              <div className="mt-4">
                <a
                  href={episode.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">Loading episodes...</div>
      )}
    </div>
  );
}

export default JoeRoganPage;
