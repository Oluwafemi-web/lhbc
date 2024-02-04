import React, { useState, useRef, useEffect } from "react";
import classes from "../../../css/gallery.module.css";
import { FaPlay, FaPause, FaDownload, FaShare } from "react-icons/fa";

export default function MediaIcons(props) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showDuration, setShowDuration] = useState(false);

  // Track the active audio element
  const activeAudioRef = useRef(null);

  const toggleAudio = () => {
    activeAudioRef.current = audioRef.current;

    if (activeAudioRef.current !== audioRef.current) {
      console.log(true);
      // Pause the currently playing audio
      activeAudioRef.current.pause();
      activeAudioRef.current.currentTime = 0;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      activeAudioRef.current = audioRef.current;
    }

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleAudioPlay = () => {
    setShowDuration(true);
  };

  //share function

  const handleShare = async (event) => {
    event.preventDefault();

    try {
      await navigator.share({
        title: props.title,
        text: props.description,
        url: props.audio,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioRef.current.addEventListener("ended", handleAudioEnd);
    audioRef.current.addEventListener("play", handleAudioPlay);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className={classes.mediaIcons}>
      <div className={classes.mediaButton}>
        <a href="#/" onClick={toggleAudio}>
          {isPlaying ? (
            <FaPause className={classes["fa-pause"]} />
          ) : (
            <FaPlay className={classes["fa-play"]} />
          )}
        </a>
      </div>
      {showDuration && (
        <div className={classes.time}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      )}
      <div className={classes.progressBar}>
        <div
          className={classes.progress}
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>
      <div className={classes.mediaButton}>
        <a href={`${props.audio}?dl=`}>
          <FaDownload className={classes["fa-download"]} />
        </a>
      </div>
      <div className={classes.mediaButton}>
        <a href={props.audio} onClick={handleShare}>
          <FaShare className={classes["fa-share-nodes"]} />
        </a>
      </div>
      <audio ref={audioRef} src={props.audio} />
    </div>
  );
}
