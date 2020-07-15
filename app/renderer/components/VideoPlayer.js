import React, { useState, useEffect, useRef } from 'react';
import { findDOMNode } from 'react-dom';
import ReactPlayer from 'react-player';

// fullscreen manager
import screenfull from 'screenfull';

// Duration manager
import Duration from './Duration';

// Controls bar icons
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import FullscreenExitRoundedIcon from '@material-ui/icons/FullscreenExitRounded';
import FullscreenRoundedIcon from '@material-ui/icons/FullscreenRounded';
import VolumeDownRoundedIcon from '@material-ui/icons/VolumeDownRounded';
import VolumeMuteRoundedIcon from '@material-ui/icons/VolumeMuteRounded';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import VolumeOffRoundedIcon from '@material-ui/icons/VolumeOffRounded';
import SpeedRoundedIcon from '@material-ui/icons/SpeedRounded';
import PictureInPictureRoundedIcon from '@material-ui/icons/PictureInPictureRounded';
import SubtitlesRoundedIcon from '@material-ui/icons/SubtitlesRounded';

// Sliders components for soud and control
import { Slider, Direction } from 'react-player-controls';


const VideoPlayer = (props) => {

  // [PROPS]: some props ...
  const setIsLoading = props.setIsLoading;
  const isLoading = props.isLoading;
  const movieUrl = props.movieUrl;

  // [URL]: about the url of th media
  // url: the url we want to read
  const [url, setUrl] = useState(movieUrl);

  // [MODE]: about some modes
  // pip: the status of the pip mode
  // light: the status of the light mode
  const [pip, setPip] = useState(false);
  const [light, setLight] = useState(false);

  // [CONTROLS]
  const [controls, setControls] = useState(false);
  const [timer, setTimer] = useState(null);
  const [showControls, setShowControls] = useState(true);

  // [VOLUME]
  const [volume, setVolume] = useState(1.0);
  const [muted, setMuted] = useState(false);

  // [VIDEO]
  const [playing, setPlaying] = useState(true);
  const [seeking, setSeeking] = useState(false);
  const [seeked, setSeeked] = useState(0);
  const [played, setPlayed] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [loadedSeconds, setLoadedSeconds] = useState(0);
  const [intent, setIntent] = useState(0);
  const [duration, setDuration] = useState(0);

  // [RATE]
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [enablePlaybackRate, setEnablePlaybackRate] = useState(false);
  const [speedOpen, setSpeedOpen] = useState(false);
  const speedSelection = [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0];

  // [LOOP]
  const [loop, setLoop] = useState(false);

  // [SUBTITLES]
  const [currentTrack, setCurrentTrack] = useState('');
  const [enableSubtitles, setEnableSubtitles] = useState(true);
  const [subtitlesOpen, setSubtitlesOpen] = useState(false);
  const [selectedSubtitles, setSelectedSubtitles] = useState(0);
  const [subtitlesSelection, setSubtitlesSelection] = useState([]);

  // [REF]
  const playerRef = useRef(null);
  const fullscreenRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [myState, _setMyState] = React.useState(0);

  const myStateRef = React.useRef(myState);
  const setMyState = (data) => {
    myStateRef.current = data;
    _setMyState(data);
  };

  const load = (url) => {
    setUrl(url);
    setPlayed(0);
    setLoaded(0);
    setPip(false);
  };

  const setnewTimer = () => {
    let state = myStateRef.current;
    let newTimer = setTimeout(() => {
        let showControls = state.showControls;
        handleControlsOff()
        setMyState({ ...state,showControls: false});
    },5000)
    setTimer(newTimer)
    setMyState({ ...state, timer: newTimer });
  }


  const handleControlsFullScreen = () => {
    if(!playing && isFullscreen){
      let state = myStateRef.current;
      console.log("We stop playing")

      handleControlsOn()
      setMyState({ ...state, showControls: true });
      clearTimeout(timer);
      setTimer(null)
      setMyState({ ...state, timer: null});
      handleControlsOn()
    }
    else if(playing && isFullscreen){
      let state = myStateRef.current;
      console.log("We start playing")

      handleControlsOn()
      setMyState({ ...state, showControls: true });
      clearTimeout(timer);
      setnewTimer()
    }
  }

  const handlePlayPause = () => {
    handleControlsFullScreen()
    setPlaying(!playing);
    // Manage controls showing (only usefull if we are fullscreen)
  };

  const handleStop = () => {
    setUrl(null);
    setPlaying(false);
  };

  const handleToggleControls = () => {
    setControls(!controls);
  };

  useEffect(() => {
    setUrl(null);
    load(url);
  }, [controls]);

  const listener = (e) => {
    let state = myStateRef.current;
    let duration = state.duration;
    let playedSeconds = state.playedSeconds;
    let playing = state.playing;

    if (e.keyCode == '37') {
      let newPlayedSeconds = playedSeconds - 10;
      let newPlayed = newPlayedSeconds / duration;
      playerRef.current.seekTo(parseFloat(newPlayed));
      setMyState({ ...state, played: newPlayed, playedSeconds: newPlayedSeconds });
    } else if (e.keyCode == '39') {
      let newPlayedSeconds = playedSeconds + 10;
      let newPlayed = newPlayedSeconds / duration;
      playerRef.current.seekTo(parseFloat(newPlayed));
      setMyState({ ...state, played: newPlayed, playedSeconds: newPlayedSeconds });
    } else if (e.keyCode == '32') {
      playing ? handlePause() : handlePlay();
      setMyState({ ...state, playing: !playing });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', listener);
    window.addEventListener('click', listener);
  }, []);

  const clickOnVideo = (e) => {
    let state = myStateRef.current;
    let duration = state.duration;
    let playedSeconds = state.playedSeconds;
    let playing = state.playing;
    let timer = state.timer;

    // Manage playing status
    playing ? handlePause() : handlePlay();
    setMyState({ ...state, playing: !playing });
    e.stopPropagation();

  };

  const moveOnVideo = () => {
    let state = myStateRef.current;
    let showControls = state.showControls;
    let isFullscreen = state.isFullscreen;
    let playing = state.playing;
    let timer = state.timer;

    if (isFullscreen && playing){
      console.log("C'est FULL SCREEN")
      handleControlsOn()
      setMyState({ ...state, showControls: true });
      clearTimeout(timer);
      setnewTimer()
    }
    else{
      clearTimeout(timer);
    }
  }

  const handleToggleLight = () => {
    setLight(!light);
  };

  const handleToggleLoop = () => {
    setLoop(!loop);
  };

  const handleVolumeChange = (changeValue) => {
    setVolume(parseFloat(changeValue));
  };

  const handleToggleMuted = () => {
    setMuted(!muted);
  };

  const handleSetPlaybackRate = (e) => {
    setPlaybackRate(parseFloat(e.target.value));
  };

  const handleTogglePIP = () => {
    setPip(!pip);
  };

  const handlePlay = () => {
    console.log('onPlay');
    handleControlsFullScreen();
    setPlaying(true);
  };

  const handleEnablePIP = () => {
    console.log('onEnablePIP');
    setPip(true);
  };

  const handleDisablePIP = () => {
    console.log('onDisablePIP');
    setPip(false);
  };

  const handleControlsOn = () => {
    console.log('Controls ON');
    setShowControls(true);
  };

  const handleControlsOff = () => {
    console.log('Controls OFF');
    setShowControls(false);
  };

  const handlePause = () => {
    console.log('onPause');
    handleControlsFullScreen();
    setPlaying(false);
  };

  const handleSeekMouseDown = (e) => {
    console.log('MOUSE DOWN');
    setSeeking(true);
  };

  const handleSeekChange = (changeValue) => {
    console.log('CHANGE:');
    console.log(changeValue);
    // console.log(e.target.value)
    console.log(parseFloat(changeValue));
    setPlayed(parseFloat(changeValue));
    playerRef.current.seekTo(parseFloat(changeValue));
  };

  const handleSeekMouseMove = (e) => {
    console.log('MOUSE MOVE:');
    console.log(e.target.value);
    // setPlayed(parseFloat(e.target.value))
  };

  const handleSeekMouseUp = (changeValue) => {
    console.log('MOUSE UP:');
    setSeeking(false);
    playerRef.current.seekTo(parseFloat(changeValue));
  };

  const handleReady = () => {
    console.log('onReady');

    // We remove the loading messages
    setIsLoading(false);

    // We setup the subtitles
    var video = document.querySelector('video');
    const tracks = video.textTracks;
    if (tracks) {
      console.log(tracks);
      const subtitleSelectionList = [];
      for (var i = 0, L = tracks.length; i < L; i++) {
        subtitleSelectionList.push(tracks[i].language);
        tracks[i].mode = 'hidden';
      }
      setSubtitlesSelection(subtitleSelectionList);
    }
    setSubtitlesOnProgress();
  };

  const onChangeSpeed = (e, item) => {
    e.stopPropagation();
    setEnablePlaybackRate(item !== 1.0);
    setPlaybackRate(item);
  };

  const setSubtitlesOnProgress = () => {
    var video = document.querySelector('video');

    if (video) {
      const tracks = video.textTracks;
      const activeTrack = selectedSubtitles;
      if (tracks) {
        if (activeTrack >= 0 && activeTrack < tracks.length) {
          for (var i = 0, L = tracks.length; i < L; i++) {
            var track = video.textTracks[i];
            if (i == activeTrack && enableSubtitles) {
              track.oncuechange = function (e) {
                var cue = this.activeCues[0];
                if (cue) {
                  setCurrentTrack(cue.text);
                } else {
                  setCurrentTrack('');
                }
              };
            } else {
              track.oncuechange = null;
            }
          }
        }
      }
    }
  };

  const onChangeSubtitles = (e, item) => {
    e.stopPropagation();
    setEnableSubtitles(true);
    const subtitlesLang = subtitlesSelection[item];
    setSelectedSubtitles(item);
  };

  useEffect(() => {
    setSubtitlesOnProgress();
  }, [selectedSubtitles]);

  useEffect(() => {
    if (enableSubtitles) {
      setSubtitlesOnProgress();
    }
  }, [enableSubtitles]);

  const handleProgress = (state) => {
    setMyState({ ...state, duration: duration, playing: playing, showControls: showControls,isFullscreen:isFullscreen,timer:timer});

    if (!seeking) {
      setPlayed(state.played);
      setPlayedSeconds(state.playedSeconds);
      setLoaded(state.loaded);
      setLoadedSeconds(state.loadedSeconds);
    }
  };

  const handleEnded = () => {
    console.log('onEnded');
    setPlaying(loop);
  };

  const handleDuration = (duration) => {
    console.log('onDuration', duration);
    setDuration(duration);
  };

  const handleClickFullscreen = () => {
    screenfull.toggle(findDOMNode(fullscreenRef.current));
    setIsFullscreen(!screenfull.isFullscreen);
  };

  const renderLoadButton = (url, label) => {
    return <button onClick={() => load(url)}>{label}</button>;
  };

  const handleKeyDown = (e) => {
    e = e || window.event;

    if (e.keyCode == '37') {
      console.log('VOICI:', playerRef.current.duration);
      console.log('VOICI:', played);
      // setPlayed(duration * played - 60)
    } else if (e.keyCode == '39') {
      console.log('VOICI:', playerRef.current.duration * played);
      // setPlayed(duration * played + 60)
    }
  };

  const fullScreenIcon = isFullscreen ? <FullscreenExitRoundedIcon /> : <FullscreenRoundedIcon />;

  const soundIcon = muted ? (
    <VolumeOffRoundedIcon />
  ) : volume.toFixed(3) > 0.5 ? (
    <VolumeUpRoundedIcon />
  ) : volume.toFixed(3) > 0 ? (
    <VolumeDownRoundedIcon />
  ) : (
    <VolumeMuteRoundedIcon />
  );

  const style1 = (value) => {
    return {
      position: 'absolute',
      borderRadius: '4px',
      top: '0px',
      bottom: '0px',
      left: '0px',
      width: value * 100 + '%',
    };
  };

  const style2 = (value) => {
    return {
      position: 'absolute',
      width: '16px',
      height: '16px',
      background: 'var(--good-color)',
      borderRadius: '100%',
      transform: 'scale(1)',
      transition: 'transform 0.2s ease 0s',
      top: '0px',
      marginTop: '-4px',
      marginLeft: '-8px',
      left: value * 100 + '%',
    };
  };

  const style3 = (width) => {
    return {
      position: 'relative',
      width: width,
      height: '8px',
      borderRadius: '4px',
      background: 'rgb(238,238,238)',
      transition: 'width 0.1s ease 0s',
      cursor: 'pointer',
      margin: '10px 20px',
    };
  };

  const SliderBar = ({ direction, value, style }) => <div style={{ ...style, ...style1(value) }} />;
  const SliderHandle = ({ direction, value, style }) => (
    <div style={{ ...style, ...style2(value) }} />
  );

  const progress = (
    <Slider
      isEnabled={true}
      direction={Direction.HORIZONTAL}
      onChange={(changeValue) => handleSeekChange(changeValue)}
      onChangeStart={(startValue) => console.log('On change Start:', startValue)}
      onChangeEnd={(endValue) => console.log('On change End', endValue)}
      onIntent={(intent) => {
        console.log('on intent', intent);
        setIntent(intent);
      }}
      onIntentStart={(intent) => console.log('On intent s: ', intent)}
      onIntentEnd={(intent) => setIntent(0)}
      style={style3('100%')}>
      <SliderBar
        direction={Direction.HORIZONTAL}
        value={played}
        style={{ background: 'var(--good-color)', zIndex: 9 }}
      />
      <SliderBar
        direction={Direction.HORIZONTAL}
        value={loaded}
        style={{ background: '#B3B3B3', zIndex: 8 }}
      />
      <SliderBar
        direction={Direction.HORIZONTAL}
        value={intent}
        style={{ background: '#B3B3B3', zIndex: 7 }}
      />
      <SliderHandle
        direction={Direction.HORIZONTAL}
        value={played}
        style={{ background: 'var(--good-color)', zIndex: 9 }}
      />
    </Slider>
  );

  const sound = (
    <Slider
      isEnabled={true}
      direction={Direction.HORIZONTAL}
      onChange={(changeValue) => handleVolumeChange(changeValue)}
      style={style3('100px')}>
      <SliderBar
        direction={Direction.HORIZONTAL}
        value={volume}
        style={{ background: 'var(--good-color)', zIndex: 9 }}
      />
      <SliderHandle
        direction={Direction.HORIZONTAL}
        value={volume}
        style={{ background: 'var(--good-color)', zIndex: 9 }}
      />
    </Slider>
  );

  const speed = speedOpen ? (
    <div
      className="speed-tab"
      onMouseEnter={() => setSpeedOpen(true)}
      onMouseLeave={() => setSpeedOpen(false)}>
      <div className="speed-title">Speed</div>
      {speedSelection.map((item, key) => (
        <div
          key={key}
          className={'speed-choice ' + (playbackRate === item ? 't-c-selected' : '')}
          onClick={(e) => onChangeSpeed(e, item)}>
          {item == 1.0 ? 'Normal' : 'x ' + item}
        </div>
      ))}
    </div>
  ) : null;

  const subtitles = subtitlesOpen ? (
    <div
      className="speed-tab"
      onMouseEnter={() => setSubtitlesOpen(true)}
      onMouseLeave={() => setSubtitlesOpen(false)}>
      <div className="speed-title">Subtitles</div>
      {subtitlesSelection.map((item, key) => (
        <div
          key={key}
          className={'captions-choice ' + (selectedSubtitles === key ? 't-c-selected' : '')}
          onClick={(e) => onChangeSubtitles(e, key)}>
          {item}
        </div>
      ))}
    </div>
  ) : null;

  const handleBuffer = (e) => {
    console.log('onBuffer',e)
  }

  const handleSeek = (e) => {
    console.log('onSeek',e)
  }

  const handleError = (e) => {
    console.log('onError', e)
  }

  const handleStart = (e) => {
    console.log('onStart')
  }

  return (
    <div className={'master-component ' + (isLoading ? 'player-none' : 'player-block')}>
      <div className="plyr-container">
        <div className="plyr-container-full" ref={fullscreenRef}>
          <div className={"plyr-controls-wrapper "+ (showControls ? '' : 'player-none')}>
            <div className="custom-video-button progress-bar">{progress}</div>
            <div
              className="custom-video-button track-text"
              dangerouslySetInnerHTML={{ __html: enableSubtitles ? currentTrack : '' }}></div>

            <div className="controls-bar-group">
              <div className="custom-video-button" onClick={handlePlayPause}>
                {playing ? <StopRoundedIcon /> : <PlayArrowRoundedIcon />}
              </div>
              <div className="custom-video-button custom-sound">
                <div className="custom-sound-icon" onClick={handleToggleMuted}>
                  {soundIcon}
                </div>
                <div>{sound}</div>
              </div>
            </div>

            <div className="custom-video-button">
              <div className="video-time">
                <Duration seconds={duration * played} />
              </div>
              <div>/</div>
              <div className="video-time">
                <Duration seconds={duration} />
              </div>
            </div>

            <div className="controls-bar-group">
              <div
                className={
                  'custom-video-button tab-container ' + (enablePlaybackRate ? 't-c-selected' : '')
                }
                onClick={() => setEnablePlaybackRate(!enablePlaybackRate)}
                onMouseEnter={() => setSpeedOpen(true)}
                onMouseLeave={() => setSpeedOpen(false)}>
                {speed}
                <SpeedRoundedIcon />
              </div>
              <div
                className={
                  'custom-video-button tab-container ' + (enableSubtitles ? 't-c-selected' : '')
                }
                onClick={() => setEnableSubtitles(!enableSubtitles)}
                onMouseEnter={() => setSubtitlesOpen(true)}
                onMouseLeave={() => setSubtitlesOpen(false)}>
                {subtitles}
                <SubtitlesRoundedIcon />
              </div>
              <div
                className={'custom-video-button tab-container ' + (pip ? 't-c-selected' : '')}
                onClick={() => setPip(!pip)}>
                <PictureInPictureRoundedIcon />
              </div>
            </div>

            <div className="custom-video-button" onClick={handleClickFullscreen}>
              {fullScreenIcon}
            </div>
          </div>
          <ReactPlayer
            tabIndex="0"
            className="react-player"
            width="100%"
            height="100%"
            ref={playerRef}
            url={url}
            pip={pip}
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            playbackRate={enablePlaybackRate ? playbackRate : 1.0}
            volume={volume}
            muted={muted}
            onClick={clickOnVideo}
            onMouseMove={moveOnVideo}
            onReady={handleReady}
            onStart={handleStart}
            onPlay={handlePlay}
            onEnablePIP={handleEnablePIP}
            onDisablePIP={handleDisablePIP}
            onPause={handlePause}
            onBuffer={handleBuffer}
            onSeek={handleSeek}
            onEnded={handleEnded}
            onError={handleError}
            onProgress={handleProgress}
            onDuration={handleDuration}
            onKeyDown={handleKeyDown}
            config={{
              file: {
                tracks: [
                  { kind: 'captions', src: './components/subs/fr.vtt', srcLang: 'fr' },
                  { kind: 'captions', src: './components/subs/ar.vtt', srcLang: 'ar' },
                ],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
