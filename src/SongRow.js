import React from 'react';
import "./SongRow.css"

const SongRow = ({ track = "test" }) => {
    return (
        <div className="songRow">
            <img classname="songRow__album" src={track.album.images[0].url} alt="track album" />
            <div classname="songRow__info">
                <h1>{track.name}</h1>
                <p>
                    {track.artist.map((artist) => artist.name).join(",")}-{""}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow;
