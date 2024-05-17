import { Button } from '../ui/button';
import { Card } from '../ui/card';
import AudioProgressBar from './AudioProgressBar';
import VolumeInput from './VolumeInput';
import * as React from 'react';
import { MdPlayArrow, MdPause, MdVolumeUp, MdVolumeOff } from 'react-icons/md';

function formatDurationDisplay(duration: number) {
  const min = Math.floor(duration / 60);
  const sec = Math.floor(duration - min * 60);
  const formatted = [min, sec].map((n) => (n < 10 ? '0' + n : n)).join(':');

  return formatted;
}

export default function AudioPlayer(props: {
  src: any;
  handleClick: any;
  loading: any;
}) {
  const { src } = props;
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const [duration, setDuration] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const [currentProgress, setCurrentProgress] = React.useState(0);
  const [buffered, setBuffered] = React.useState(0);
  const [volume, setVolume] = React.useState(0.2);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const durationDisplay = formatDurationDisplay(duration);
  const elapsedDisplay = formatDurationDisplay(currentProgress);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current;
      audioRef.current?.pause();
      setIsPlaying(false);
    } else if (!started) {
      // @ts-ignore
      audioRef.current.load();
      // @ts-ignore
      audioRef.current.onloadeddata = () => {
        audioRef.current
          ?.play()
          .catch((error: any) => console.log('Error playing audio:', error));
        setIsPlaying(true);
        setStarted(true);
      };
    } else {
      audioRef.current
        ?.play()
        .catch((error: any) => console.log('Error playing audio:', error));
      setIsPlaying(true);
    }
  };

  const handleBufferProgress: React.ReactEventHandler<HTMLAudioElement> = (
    e,
  ) => {
    const audio = e.currentTarget;
    const dur = audio.duration;
    if (dur > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
        ) {
          const bufferedLength = audio.buffered.end(
            audio.buffered.length - 1 - i,
          );
          setBuffered(bufferedLength);
          break;
        }
      }
    }
  };

  const handleMuteUnmute = () => {
    if (!audioRef.current) return;

    if (audioRef.current.volume !== 0) {
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = 1;
    }
  };

  const handleVolumeChange = (volumeValue: number) => {
    if (!audioRef.current) return;
    audioRef.current.volume = volumeValue;
    setVolume(volumeValue);
  };

  const handleProgressChange = (val: number) => {
    if (!audioRef.current) return;
    setCurrentProgress(val);
    audioRef.current.currentTime = val;
  };
  return (
    <Card className="relative w-full p-5 dark:border-zinc-800">
      <div className="flex flex-row items-center gap-1 gap-2 self-center">
        <Button
          className="mt-auto flex h-12 w-12 items-center justify-center rounded-full px-2 py-2 text-base font-medium"
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <MdPause size={30} /> : <MdPlayArrow size={30} />}
        </Button>
        <AudioProgressBar
          duration={duration}
          currentProgress={currentProgress}
          setCurrentProgress={setCurrentProgress}
          elapsedDisplay={elapsedDisplay}
          durationDisplay={durationDisplay}
          handleProgressChange={handleProgressChange}
        />
        <audio
          ref={audioRef}
          preload="metadata"
          onDurationChange={(e) => setDuration(e.currentTarget.duration)}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={(e) => {
            setCurrentProgress(e.currentTarget.currentTime);
            handleBufferProgress(e);
          }}
          onProgress={handleBufferProgress}
          onVolumeChange={(e) => setVolume(e.currentTarget.volume)}
          src={src}
        />
        {/* >
          <source type="audio/mpeg" src={src}  />
        </audio> */}
      </div>
      <div className="mt-5 flex flex-col items-center md:mt-2.5 md:flex-row">
        <div className="mb-5 flex items-center justify-center md:mb-0">
          <div
            onClick={handleMuteUnmute}
            aria-label={volume === 0 ? 'unmute' : 'mute'}
          >
            {volume === 0 ? (
              <MdVolumeOff size={20} />
            ) : (
              <MdVolumeUp size={20} />
            )}
          </div>
          <div className="flex items-center gap-3 justify-self-end">
            <VolumeInput volume={volume} onVolumeChange={handleVolumeChange} />
          </div>
        </div>
      </div>
    </Card>
  );
}
