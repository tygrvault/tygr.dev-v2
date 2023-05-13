import { type NextRequest } from 'next/server';
import Spotify from 'lib/Spotify';
import { RawStatus, Status } from 'interfaces/Spotify';

export const config = {
    runtime: 'experimental-edge'
};

export default async function handler(req: NextRequest) {
    const response = await Spotify.getNowPlaying();

    if (response.status === 204 || response.status > 400) {
        return new Response(JSON.stringify({ isPlaying: false }), {
            status: 200,
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    const status: RawStatus = await response.json();

    if (status.item === null) {
        return new Response(JSON.stringify({ isPlaying: false }), {
            status: 200,
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    const context: Status['context'] = {
        type: status.context.type,
        url: status.context.external_urls.spotify,
    };

    const album: Status['album'] = {
        url: status.item.album.external_urls.spotify,
        cover: status.item.album.images[0].url,
        name: status.item.album.name,
        release_date: status.item.album.release_date,
        artists: status.item.album.artists.map((artist) => ({
            url: artist.external_urls.spotify,
            name: artist.name,
        }))
    };

    const artists: Status['artists'] = status.item.artists.map((artist) => ({
        url: artist.external_urls.spotify,
        name: artist.name,
    }));

    const duration: Status['duration'] = status.item.duration_ms;
    const progress: Status['progress'] = status.progress_ms;
    const explicit: Status['explicit'] = status.item.explicit;
    const url: Status['url'] = status.item.external_urls.spotify;
    const name: Status['name'] = status.item.name;
    // const preview_url: Status['preview_url'] = status.item.preview_url;
    const is_playing: Status['is_playing'] = status.is_playing;

    return new Response(
        JSON.stringify({
            context,
            album,
            artists,
            duration,
            progress,
            explicit,
            url,
            name,
            is_playing,
        }),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
            }
        }
    );
}