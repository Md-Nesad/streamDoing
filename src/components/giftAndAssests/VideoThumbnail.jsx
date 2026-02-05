import { Pause, Play, Volume2, VolumeX, LoaderCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function VideoThumbnail({ id, src, poster, activeVideo, setActiveVideo }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [buffering, setBuffering] = useState(false);

  const isPlaying = activeVideo === id;

  // pause if another video starts playing
  useEffect(() => {
    if (!isPlaying && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setActiveVideo(null);
    } else {
      setActiveVideo(id);
      videoRef.current.play();
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <div className="relative w-20 aspect-video rounded-md overflow-hidden bg-black group">
      {/* buffering loader */}
      {buffering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
          <LoaderCircle className="animate-spin text-white" size={18} />
        </div>
      )}

      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        className="w-full h-full object-cover"
        onWaiting={() => setBuffering(true)}
        onPlaying={() => setBuffering(false)}
        onEnded={() => setActiveVideo(null)}
      />

      {/* Play / Pause */}
      <button
        onClick={togglePlay}
        className="absolute bottom-1 left-1 bg-black/60 text-white p-1 rounded
        opacity-0 group-hover:opacity-100 transition"
      >
        {isPlaying ? (
          <Pause className="w-3 h-3" />
        ) : (
          <Play className="w-3 h-3" />
        )}
      </button>

      {/* Mute */}
      <button
        onClick={toggleMute}
        className="absolute bottom-1 right-1 bg-black/60 text-white p-1 rounded
        opacity-0 group-hover:opacity-100 transition"
      >
        {muted ? (
          <VolumeX className="w-3 h-3" />
        ) : (
          <Volume2 className="w-3 h-3" />
        )}
      </button>
    </div>
  );
}

export default VideoThumbnail;
