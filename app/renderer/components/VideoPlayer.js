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
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';

// Sliders components for soud and control
import { Slider, Direction } from 'react-player-controls';

const VideoPlayer = (props) => {
  // [PROPS]: some props ...
  const setIsLoading = props.setIsLoading;
  const isLoading = props.isLoading;
  const serverList = props.serverList;
  const movieUrl = props.movieUrl;

  // [URL]: about the url of th media
  // url: the url we want to read
  const defaultServer = serverList.length === 0 ? null : serverList[0];
  const defaultUrl = defaultServer ? defaultServer.url : '';
  const [url, setUrl] = useState(defaultUrl);
  const [selectedServer, setSelectedServer] = useState(0);
  const [serverOpen, setServerOpen] = useState(false);
  const selectedItem = serverList[selectedServer];

  // [FULLSCREENs]: about the fullscreen state
  // isFullScreen: if we are fullscreen or not
  const [isFullscreen, setIsFullscreen] = useState(false);

  // [MODE]: about some modes
  // pip: the status of the pip mode
  // light: the status of the light mode
  const [pip, setPip] = useState(false);
  const [light, setLight] = useState(false);

  // [CONTROLS]: about the controls
  // defaultControls: if we want to show or not the default controls
  // customControls: if we want to show or not the custom controls
  // timer: the time after we hide the controls (fullscreen only)
  const [defaultControls, setDefaultControls] = useState(false);
  const [customControls, setCustomControls] = useState(true);
  const [timer, setTimer] = useState(null);

  // [VOLUME]: about the video volume
  // volume: the selected volume
  // muted: if the media is muted or not
  const [volume, setVolume] = useState(1.0);
  const [muted, setMuted] = useState(false);

  // [VIDEO]: about the video time and playing status
  // playing: if the video is paying or not
  // seeking: if we are seeking (changing video time) or not
  // played: the percentage of time played
  // playedSeconds: the number of seconds played
  // played: the percentage of time loaded
  // playedSeconds: the number of seconds loaded
  // intent: the percentage of time intended
  // duration: the duration of the video in seconds
  const [playing, setPlaying] = useState(true);
  const [seeking, setSeeking] = useState(false);
  const [played, setPlayed] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [loadedSeconds, setLoadedSeconds] = useState(0);
  const [intent, setIntent] = useState(0);
  const [duration, setDuration] = useState(0);

  // [RATE]: about the video frame rate
  // playbackRate: the current rate
  // enablePlaybackRate: if we enable the rate to be changed
  // rateOpen : if the rate box is open or not
  // rateSelection: the different rates
  const defaultRate = 1.0;
  const [playbackRate, setPlaybackRate] = useState(defaultRate);
  const [enablePlaybackRate, setEnablePlaybackRate] = useState(false);
  const [rateOpen, setRateOpen] = useState(false);
  const rateSelection = [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0];

  // [LOOP]: about the video loop status
  // loop: if we want to loop or not
  const [loop, setLoop] = useState(false);

  // [POSITION]: about cursor position status
  // move: the move position
  // click: the click position
  // keydown: the key down code
  const [move, setMove] = useState(null);
  const [click, setClick] = useState(null);
  const [keydown, setKeyDown] = useState(null);

  // [SUBTITLES]: about the video subtitles
  // currentSubtitles: the current text to show
  // subtitlesOpen: if the subtitles box is open or not
  // subtitlesSelection: the choice of subtitles languages
  // selectedSubtitles: the selected subtitles languages
  // index in subtitlesSelection
  const [currentSubtitles, setCurrentSubtitles] = useState('');
  const [enableSubtitles, setEnableSubtitles] = useState(true);
  const [subtitlesOpen, setSubtitlesOpen] = useState(false);
  const [selectedSubtitles, setSelectedSubtitles] = useState(0);
  const [subtitlesSelection, setSubtitlesSelection] = useState([]);

  // [REF]: some references for special features
  // playerRef: the video player ref
  // fullscreenRef: the container ref for fullscreen
  const playerRef = useRef(null);
  const fullscreenRef = useRef(null);

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////  HANDLING EVENTS  /////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const setNewTimer = (createNew) => {
    clearTimeout(timer);
    if (createNew) {
      let newTimer = setTimeout(() => {
        handleControlsOff();
      }, 5000);
      handleNewTimer(newTimer);
    } else {
      handleNewTimer(null);
    }
  };

  const handleChangeOnFullScreen = () => {
    // console.log('onChangeFullScreen');
    if (playing && isFullscreen) {
      // console.log('ON');
      handleControlsOn();
      setNewTimer(true);
    } else {
      // console.log('OFF');
      handleControlsOn();
      setNewTimer(false);
    }
  };

  const handlePlayPause = () => {
    // console.log('onPlayPause');
    handleChangeOnFullScreen();
    setPlaying(!playing);
  };

  const handleVolumeChange = (changeValue) => {
    // console.log('onVolumeChange');
    setVolume(parseFloat(changeValue));
  };

  const handleToggleMuted = () => {
    // console.log('onToggleMuted');
    setMuted(!muted);
  };

  const handleSetPlaybackRate = (e) => {
    // console.log('onSetPlaybackRate');
    setPlaybackRate(parseFloat(e.target.value));
  };

  const handleControlsOn = () => {
    // console.log('onControllOn');
    setCustomControls(true);
  };

  const handleControlsOff = () => {
    // console.log('onControllOff');
    setCustomControls(false);
  };

  const handleNewTimer = (newTimer) => {
    // console.log('onNewTimer');
    clearTimeout(timer);
    setTimer(newTimer);
  };

  const handleSeekChange = (changeValue) => {
    // console.log('onSeekCange:');
    setPlayed(parseFloat(changeValue));
    playerRef.current.seekTo(parseFloat(changeValue));
  };

  const handleChangeServer = (e, item, key) => {
    // console.log('onChangeServer');
    e.stopPropagation();
    setSelectedServer(key);
    setUrl(item.url);
    setIsLoading(true);
  };

  const handleChangeSpeed = (e, item) => {
    // console.log('onChangeSpeed');
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
                  setCurrentSubtitles(cue.text);
                } else {
                  setCurrentSubtitles('');
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

  useEffect(() => {
    if (enableSubtitles) {
      setSubtitlesOnProgress();
    }
  }, [enableSubtitles]);

  useEffect(() => {
    setSubtitlesOnProgress();
  }, [selectedSubtitles]);

  const handleChangeSubtitles = (e, item) => {
    // console.log('onChangeSubtitles');
    e.stopPropagation();
    setEnableSubtitles(true);
    const subtitlesLang = subtitlesSelection[item];
    setSelectedSubtitles(item);
  };

  useEffect(() => {
    handleChangeOnFullScreen();
  }, [isFullscreen]);

  const handleClickFullscreen = () => {
    // console.log('onClickFullScreen');
    screenfull.toggle(findDOMNode(fullscreenRef.current));
    setIsFullscreen(!screenfull.isFullscreen);
  };

  useEffect(() => {
    playing ? handlePause() : handlePlay();
  }, [click]);

  const handleClick = (e) => {
    // console.log('onClick');
    setClick([e.pageX, e.pageY]);
    e.stopPropagation();
  };

  useEffect(() => {
    handleChangeOnFullScreen();
  }, [move]);

  const handleMove = (e) => {
    // console.log('onMove');
    setMove([e.pageX, e.pageY]);
  };

  const handleReady = () => {
    // console.log('onReady');

    // We remove the loading messages
    setIsLoading(false);

    // We setup the subtitles
    var video = document.querySelector('video');
    const tracks = video.textTracks;
    if (tracks) {
      // console.log(tracks);
      const subtitleSelectionList = [];
      for (var i = 0, L = tracks.length; i < L; i++) {
        subtitleSelectionList.push(tracks[i].language);
        tracks[i].mode = 'hidden';
      }
      setSubtitlesSelection(subtitleSelectionList);
    }
    setSubtitlesOnProgress();
    handlePlay();
  };

  const handleStart = (e) => {
    // console.log('onStart');
  };

  const handlePlay = () => {
    // console.log('onPlay');
    handleChangeOnFullScreen();
    setPlaying(true);
  };

  const handleEnablePIP = () => {
    // console.log('onEnablePIP');
    setPip(true);
  };

  const handleDisablePIP = () => {
    // console.log('onDisablePIP');
    setPip(false);
  };

  const handlePause = () => {
    // console.log('onPause');
    handleChangeOnFullScreen();
    setPlaying(false);
  };

  const handleBuffer = (e) => {
    // console.log('onBuffer', e);
  };

  const handleSeek = (e) => {
    // console.log('onSeek', e);
  };

  const handleEnded = () => {
    // console.log('onEnded');
    setPlaying(loop);
  };

  const handleError = (e) => {
    // console.log('onError', e);
  };

  const handleProgress = (state) => {
    // console.log('onProgress');

    if (!seeking) {
      setPlayed(state.played);
      setPlayedSeconds(state.playedSeconds);
      setLoaded(state.loaded);
      setLoadedSeconds(state.loadedSeconds);
    }
  };

  const handleDuration = (duration) => {
    // console.log('onDuration', duration);
    setDuration(duration);
  };

  useEffect(() => {
    if (keydown == '37') {
      let newPlayedSeconds = playedSeconds - 5;
      let newPlayed = newPlayedSeconds / duration;
      playerRef.current.seekTo(parseFloat(newPlayed));
    } else if (keydown == '39') {
      let newPlayedSeconds = playedSeconds + 5;
      let newPlayed = newPlayedSeconds / duration;
      playerRef.current.seekTo(parseFloat(newPlayed));
    } else if (keydown == '32') {
      playing ? handlePause() : handlePlay();
    }
  }, [keydown]);

  const handleKeyDown = (e) => {
    // console.log('onKeyDown');
    setKeyDown([e.keyCode]);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////  CONTROLS  /////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  const soundIcon = muted ? (
    <VolumeOffRoundedIcon />
  ) : volume.toFixed(3) > 0.5 ? (
    <VolumeUpRoundedIcon />
  ) : volume.toFixed(3) > 0 ? (
    <VolumeDownRoundedIcon />
  ) : (
    <VolumeMuteRoundedIcon />
  );

  const fullScreenIcon = isFullscreen ? <FullscreenExitRoundedIcon /> : <FullscreenRoundedIcon />;

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
      // onChangeStart={(startValue) => console.log('On change Start:', startValue)}
      // onChangeEnd={(endValue) => console.log('On change End', endValue)}
      onIntent={(intent) => setIntent(intent)}
      // onIntentStart={(intent) => console.log('On intent s: ', intent)}
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

  const server = serverOpen ? (
    <div
      className="speed-tab"
      onMouseEnter={() => setServerOpen(true)}
      onMouseLeave={() => setServerOpen(false)}>
      <div className="speed-title">Servers</div>
      {serverList.map((item, key) => (
        <div
          key={key}
          className={'speed-choice ' + (selectedServer === key ? 't-c-selected' : '')}
          onClick={(e) => handleChangeServer(e, item, key)}>
          {item.type} {item.language} {item.quality}
        </div>
      ))}
    </div>
  ) : null;

  const speed = rateOpen ? (
    <div
      className="speed-tab"
      onMouseEnter={() => setRateOpen(true)}
      onMouseLeave={() => setRateOpen(false)}>
      <div className="speed-title">Speed</div>
      {rateSelection.map((item, key) => (
        <div
          key={key}
          className={'speed-choice ' + (playbackRate === item ? 't-c-selected' : '')}
          onClick={(e) => handleChangeSpeed(e, item)}>
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
          onClick={(e) => handleChangeSubtitles(e, key)}>
          {item}
        </div>
      ))}
    </div>
  ) : null;

  const controls = (
    <div className={'plyr-controls-wrapper ' + (customControls ? '' : 'player-none')}>
      <div className="custom-video-button progress-bar">{progress}</div>
      <div
        className="custom-video-button track-text"
        dangerouslySetInnerHTML={{ __html: enableSubtitles ? currentSubtitles : '' }}></div>

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
          className="custom-video-button tab-container t-c-selected"
          onMouseEnter={() => setServerOpen(true)}
          onMouseLeave={() => setServerOpen(false)}>
          {server}
          <DnsRoundedIcon />
        </div>
        <div
          className={
            'custom-video-button tab-container ' + (enablePlaybackRate ? 't-c-selected' : '')
          }
          onClick={() => setEnablePlaybackRate(!enablePlaybackRate)}
          onMouseEnter={() => setRateOpen(true)}
          onMouseLeave={() => setRateOpen(false)}>
          {speed}
          <SpeedRoundedIcon />
        </div>
        <div
          className={'custom-video-button tab-container ' + (enableSubtitles ? 't-c-selected' : '')}
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
  );

  var fs = require('fs');
  var files = fs.readdirSync(process.cwd() + '/build/renderer/subtitles/data/' + selectedItem.id);

  const tracks = files.map((lang) => {
    return {
      kind: 'captions',
      src:
        './subtitles/data/' +
        selectedItem.id +
        '/' +
        lang +
        '/' +
        selectedItem.type +
        '/' +
        'subtitles.vtt',
      srcLang: lang,
    };
  });

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////  COMPONENTS  ////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  return (
    <div className={'master-component ' + (isLoading ? 'player-none' : 'player-block')}>
      <div className="plyr-container">
        <div className="plyr-container-full" ref={fullscreenRef}>
          {controls}
          <ReactPlayer
            tabIndex="0"
            className="react-player"
            width="100%"
            height="100%"
            ref={playerRef}
            url={url}
            pip={pip}
            playing={playing}
            controls={defaultControls}
            light={light}
            loop={loop}
            playbackRate={enablePlaybackRate ? playbackRate : defaultRate}
            volume={volume}
            muted={muted}
            onClick={handleClick}
            onDoubleClick={handleClickFullscreen}
            onMouseMove={handleMove}
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
                tracks: tracks,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
