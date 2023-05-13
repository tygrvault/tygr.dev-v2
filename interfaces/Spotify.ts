// Raw types are the types returned by the Spotify API.
type RawArtist = {
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
};

export type RawTrack = {
    album: {
        album_type: string;
        artists: RawArtist[];
        available_markets: string[];
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        images: {
            height: number;
            url: string;
            width: number;
        }[];
        name: string;
        release_date: string;
        release_date_precision: string;
        total_tracks: number;
        type: string;
        uri: string;
    };

    artists: RawArtist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;

    external_ids: {
        isrc: string;
    };

    external_urls: {
        spotify: string;
    };

    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export type RawStatus = {
    timestamp: number;
    context: {
        external_urls: {
            spotify: string;
        };
        href: string;
        type: string;
        uri: string;
    };
    progress_ms: number;
    item: RawTrack;
    currently_playing_type: string;
    actions: {
        disallows: {
            resuming: true | undefined;
            pausing: true | undefined;
        };
    };
    is_playing: boolean;
};

// Normalized types are the types used in the app.
export type Track = {
    album: {
        artists: {
            url: string
            name: string
        }[];
        url: string;
        cover: string;
        name: string;
        release_date: string;
    };
    artists: {
        url: string;
        name: string;
    }[];
    duration: number;
    explicit: boolean;
    url: string;
    name: string;
    preview_url: string;
};

export type Status = {
    context: {
        type: string;
        url: string;
    };
    song: Track;
    album: {
        url: string;
        cover: string;
        name: string;
        release_date: string;
        artists: {
            url: string,
            name: string
        }[];
    };
    artists: {
        url: string,
        name: string
    }[];
    duration: number;
    progress: number;
    explicit: boolean;
    url: string;
    name: string;
    preview_url: string;
    is_playing: boolean;
};