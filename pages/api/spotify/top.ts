import { type NextRequest } from 'next/server';
import Spotify from 'lib/Spotify';
import { RawTrack, Track } from 'interfaces/Spotify';

export const config = {
    runtime: 'experimental-edge'
};

export default async function handler(req: NextRequest) {
    const response = await Spotify.getTopTracks();
    const { items }: { items: RawTrack[] } = await response.json();

    const tracks: Track[] = items.slice(0, 15).map((track) => {
        return {
            album: {
                artists: track.album.artists.map((artist) => ({
                    url: artist.external_urls.spotify,
                    name: artist.name
                })),
                url: track.album.external_urls.spotify,
                cover: track.album.images[0].url,
                name: track.album.name,
                release_date: track.album.release_date
            },
            artists: track.artists.map((artist) => ({
                url: artist.external_urls.spotify,
                name: artist.name
            })),
            duration: track.duration_ms,
            explicit: track.explicit,
            url: track.external_urls.spotify,
            name: track.name,
            preview_url: track.preview_url
        }
    });

    return new Response(JSON.stringify({ tracks }), {
        status: 200,
        headers: {
            'content-type': 'application/json',
            'cache-control': 'public, s-maxage=600, stale-while-revalidate=300'
        }
    });
}