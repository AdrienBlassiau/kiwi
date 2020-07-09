import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
  @font-face {
    font-family: 'icomoon';
    src:  url('../fonts/icomoon.eot?38jjvz');
    src:  url('../fonts/icomoon.eot?38jjvz#iefix') format('embedded-opentype'),
      url('../fonts/icomoon.ttf?38jjvz') format('truetype'),
      url('../fonts/icomoon.woff?38jjvz') format('woff'),
      url('../fonts/icomoon.svg?38jjvz#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-activity:before {
    content: "\e900";
  }
  .icon-airplay:before {
    content: "\e901";
  }
  .icon-alert-circle:before {
    content: "\e902";
  }
  .icon-alert-octagon:before {
    content: "\e903";
  }
  .icon-alert-triangle:before {
    content: "\e904";
  }
  .icon-align-center:before {
    content: "\e905";
  }
  .icon-align-justify:before {
    content: "\e906";
  }
  .icon-align-left:before {
    content: "\e907";
  }
  .icon-align-right:before {
    content: "\e908";
  }
  .icon-anchor:before {
    content: "\e909";
  }
  .icon-aperture:before {
    content: "\e90a";
  }
  .icon-archive:before {
    content: "\e90b";
  }
  .icon-arrow-down:before {
    content: "\e90c";
  }
  .icon-arrow-down-circle:before {
    content: "\e90d";
  }
  .icon-arrow-down-left:before {
    content: "\e90e";
  }
  .icon-arrow-down-right:before {
    content: "\e90f";
  }
  .icon-arrow-left:before {
    content: "\e910";
  }
  .icon-arrow-left-circle:before {
    content: "\e911";
  }
  .icon-arrow-right:before {
    content: "\e912";
  }
  .icon-arrow-right-circle:before {
    content: "\e913";
  }
  .icon-arrow-up:before {
    content: "\e914";
  }
  .icon-arrow-up-circle:before {
    content: "\e915";
  }
  .icon-arrow-up-left:before {
    content: "\e916";
  }
  .icon-arrow-up-right:before {
    content: "\e917";
  }
  .icon-at-sign:before {
    content: "\e918";
  }
  .icon-award:before {
    content: "\e919";
  }
  .icon-bar-chart:before {
    content: "\e91a";
  }
  .icon-bar-chart-2:before {
    content: "\e91b";
  }
  .icon-battery:before {
    content: "\e91c";
  }
  .icon-battery-charging:before {
    content: "\e91d";
  }
  .icon-bell:before {
    content: "\e91e";
  }
  .icon-bell-off:before {
    content: "\e91f";
  }
  .icon-bluetooth:before {
    content: "\e920";
  }
  .icon-bold:before {
    content: "\e921";
  }
  .icon-book:before {
    content: "\e922";
  }
  .icon-bookmark:before {
    content: "\e923";
  }
  .icon-book-open:before {
    content: "\e924";
  }
  .icon-box:before {
    content: "\e925";
  }
  .icon-briefcase:before {
    content: "\e926";
  }
  .icon-calendar:before {
    content: "\e927";
  }
  .icon-camera:before {
    content: "\e928";
  }
  .icon-camera-off:before {
    content: "\e929";
  }
  .icon-cast:before {
    content: "\e92a";
  }
  .icon-check:before {
    content: "\e92b";
  }
  .icon-check-circle:before {
    content: "\e92c";
  }
  .icon-check-square:before {
    content: "\e92d";
  }
  .icon-chevron-down:before {
    content: "\e92e";
  }
  .icon-chevron-left:before {
    content: "\e92f";
  }
  .icon-chevron-right:before {
    content: "\e930";
  }
  .icon-chevrons-down:before {
    content: "\e931";
  }
  .icon-chevrons-left:before {
    content: "\e932";
  }
  .icon-chevrons-right:before {
    content: "\e933";
  }
  .icon-chevrons-up:before {
    content: "\e934";
  }
  .icon-chevron-up:before {
    content: "\e935";
  }
  .icon-chrome:before {
    content: "\e936";
  }
  .icon-circle:before {
    content: "\e937";
  }
  .icon-clipboard:before {
    content: "\e938";
  }
  .icon-clock:before {
    content: "\e939";
  }
  .icon-cloud:before {
    content: "\e93a";
  }
  .icon-cloud-drizzle:before {
    content: "\e93b";
  }
  .icon-cloud-lightning:before {
    content: "\e93c";
  }
  .icon-cloud-off:before {
    content: "\e93d";
  }
  .icon-cloud-rain:before {
    content: "\e93e";
  }
  .icon-cloud-snow:before {
    content: "\e93f";
  }
  .icon-code:before {
    content: "\e940";
  }
  .icon-codepen:before {
    content: "\e941";
  }
  .icon-command:before {
    content: "\e942";
  }
  .icon-compass:before {
    content: "\e943";
  }
  .icon-copy:before {
    content: "\e944";
  }
  .icon-corner-down-left:before {
    content: "\e945";
  }
  .icon-corner-down-right:before {
    content: "\e946";
  }
  .icon-corner-left-down:before {
    content: "\e947";
  }
  .icon-corner-left-up:before {
    content: "\e948";
  }
  .icon-corner-right-down:before {
    content: "\e949";
  }
  .icon-corner-right-up:before {
    content: "\e94a";
  }
  .icon-corner-up-left:before {
    content: "\e94b";
  }
  .icon-corner-up-right:before {
    content: "\e94c";
  }
  .icon-cpu:before {
    content: "\e94d";
  }
  .icon-credit-card:before {
    content: "\e94e";
  }
  .icon-crop:before {
    content: "\e94f";
  }
  .icon-crosshair:before {
    content: "\e950";
  }
  .icon-database:before {
    content: "\e951";
  }
  .icon-delete:before {
    content: "\e952";
  }
  .icon-disc:before {
    content: "\e953";
  }
  .icon-dollar-sign:before {
    content: "\e954";
  }
  .icon-download:before {
    content: "\e955";
  }
  .icon-download-cloud:before {
    content: "\e956";
  }
  .icon-droplet:before {
    content: "\e957";
  }
  .icon-edit:before {
    content: "\e958";
  }
  .icon-edit-2:before {
    content: "\e959";
  }
  .icon-edit-3:before {
    content: "\e95a";
  }
  .icon-external-link:before {
    content: "\e95b";
  }
  .icon-eye:before {
    content: "\e95c";
  }
  .icon-eye-off:before {
    content: "\e95d";
  }
  .icon-facebook:before {
    content: "\e95e";
  }
  .icon-fast-forward:before {
    content: "\e95f";
  }
  .icon-feather:before {
    content: "\e960";
  }
  .icon-file:before {
    content: "\e961";
  }
  .icon-file-minus:before {
    content: "\e962";
  }
  .icon-file-plus:before {
    content: "\e963";
  }
  .icon-file-text:before {
    content: "\e964";
  }
  .icon-film:before {
    content: "\e965";
  }
  .icon-filter:before {
    content: "\e966";
  }
  .icon-flag:before {
    content: "\e967";
  }
  .icon-folder:before {
    content: "\e968";
  }
  .icon-folder-minus:before {
    content: "\e969";
  }
  .icon-folder-plus:before {
    content: "\e96a";
  }
  .icon-gift:before {
    content: "\e96b";
  }
  .icon-git-branch:before {
    content: "\e96c";
  }
  .icon-git-commit:before {
    content: "\e96d";
  }
  .icon-github:before {
    content: "\e96e";
  }
  .icon-gitlab:before {
    content: "\e96f";
  }
  .icon-git-merge:before {
    content: "\e970";
  }
  .icon-git-pull-request:before {
    content: "\e971";
  }
  .icon-globe:before {
    content: "\e972";
  }
  .icon-grid:before {
    content: "\e973";
  }
  .icon-hard-drive:before {
    content: "\e974";
  }
  .icon-hash:before {
    content: "\e975";
  }
  .icon-headphones:before {
    content: "\e976";
  }
  .icon-heart:before {
    content: "\e977";
  }
  .icon-help-circle:before {
    content: "\e978";
  }
  .icon-home:before {
    content: "\e979";
  }
  .icon-image:before {
    content: "\e97a";
  }
  .icon-inbox:before {
    content: "\e97b";
  }
  .icon-info:before {
    content: "\e97c";
  }
  .icon-instagram:before {
    content: "\e97d";
  }
  .icon-italic:before {
    content: "\e97e";
  }
  .icon-layers:before {
    content: "\e97f";
  }
  .icon-layout:before {
    content: "\e980";
  }
  .icon-life-buoy:before {
    content: "\e981";
  }
  .icon-link:before {
    content: "\e982";
  }
  .icon-link-2:before {
    content: "\e983";
  }
  .icon-linkedin:before {
    content: "\e984";
  }
  .icon-list:before {
    content: "\e985";
  }
  .icon-loader:before {
    content: "\e986";
  }
  .icon-lock:before {
    content: "\e987";
  }
  .icon-log-in:before {
    content: "\e988";
  }
  .icon-log-out:before {
    content: "\e989";
  }
  .icon-mail:before {
    content: "\e98a";
  }
  .icon-map:before {
    content: "\e98b";
  }
  .icon-map-pin:before {
    content: "\e98c";
  }
  .icon-maximize:before {
    content: "\e98d";
  }
  .icon-maximize-2:before {
    content: "\e98e";
  }
  .icon-menu:before {
    content: "\e98f";
  }
  .icon-message-circle:before {
    content: "\e990";
  }
  .icon-message-square:before {
    content: "\e991";
  }
  .icon-mic:before {
    content: "\e992";
  }
  .icon-mic-off:before {
    content: "\e993";
  }
  .icon-minimize:before {
    content: "\e994";
  }
  .icon-minimize-2:before {
    content: "\e995";
  }
  .icon-minus:before {
    content: "\e996";
  }
  .icon-minus-circle:before {
    content: "\e997";
  }
  .icon-minus-square:before {
    content: "\e998";
  }
  .icon-monitor:before {
    content: "\e999";
  }
  .icon-moon:before {
    content: "\e99a";
  }
  .icon-more-horizontal:before {
    content: "\e99b";
  }
  .icon-more-vertical:before {
    content: "\e99c";
  }
  .icon-move:before {
    content: "\e99d";
  }
  .icon-music:before {
    content: "\e99e";
  }
  .icon-navigation:before {
    content: "\e99f";
  }
  .icon-navigation-2:before {
    content: "\e9a0";
  }
  .icon-octagon:before {
    content: "\e9a1";
  }
  .icon-package:before {
    content: "\e9a2";
  }
  .icon-paperclip:before {
    content: "\e9a3";
  }
  .icon-pause:before {
    content: "\e9a4";
  }
  .icon-pause-circle:before {
    content: "\e9a5";
  }
  .icon-percent:before {
    content: "\e9a6";
  }
  .icon-phone:before {
    content: "\e9a7";
  }
  .icon-phone-call:before {
    content: "\e9a8";
  }
  .icon-phone-forwarded:before {
    content: "\e9a9";
  }
  .icon-phone-incoming:before {
    content: "\e9aa";
  }
  .icon-phone-missed:before {
    content: "\e9ab";
  }
  .icon-phone-off:before {
    content: "\e9ac";
  }
  .icon-phone-outgoing:before {
    content: "\e9ad";
  }
  .icon-pie-chart:before {
    content: "\e9ae";
  }
  .icon-play:before {
    content: "\e9af";
  }
  .icon-play-circle:before {
    content: "\e9b0";
  }
  .icon-plus:before {
    content: "\e9b1";
  }
  .icon-plus-circle:before {
    content: "\e9b2";
  }
  .icon-plus-square:before {
    content: "\e9b3";
  }
  .icon-pocket:before {
    content: "\e9b4";
  }
  .icon-power:before {
    content: "\e9b5";
  }
  .icon-printer:before {
    content: "\e9b6";
  }
  .icon-radio:before {
    content: "\e9b7";
  }
  .icon-refresh-ccw:before {
    content: "\e9b8";
  }
  .icon-refresh-cw:before {
    content: "\e9b9";
  }
  .icon-repeat:before {
    content: "\e9ba";
  }
  .icon-rewind:before {
    content: "\e9bb";
  }
  .icon-rotate-ccw:before {
    content: "\e9bc";
  }
  .icon-rotate-cw:before {
    content: "\e9bd";
  }
  .icon-rss:before {
    content: "\e9be";
  }
  .icon-save:before {
    content: "\e9bf";
  }
  .icon-scissors:before {
    content: "\e9c0";
  }
  .icon-search:before {
    content: "\e9c1";
  }
  .icon-send:before {
    content: "\e9c2";
  }
  .icon-server:before {
    content: "\e9c3";
  }
  .icon-settings:before {
    content: "\e9c4";
  }
  .icon-share:before {
    content: "\e9c5";
  }
  .icon-share-2:before {
    content: "\e9c6";
  }
  .icon-shield:before {
    content: "\e9c7";
  }
  .icon-shield-off:before {
    content: "\e9c8";
  }
  .icon-shopping-bag:before {
    content: "\e9c9";
  }
  .icon-shopping-cart:before {
    content: "\e9ca";
  }
  .icon-shuffle:before {
    content: "\e9cb";
  }
  .icon-sidebar:before {
    content: "\e9cc";
  }
  .icon-skip-back:before {
    content: "\e9cd";
  }
  .icon-skip-forward:before {
    content: "\e9ce";
  }
  .icon-slack:before {
    content: "\e9cf";
  }
  .icon-slash:before {
    content: "\e9d0";
  }
  .icon-sliders:before {
    content: "\e9d1";
  }
  .icon-smartphone:before {
    content: "\e9d2";
  }
  .icon-speaker:before {
    content: "\e9d3";
  }
  .icon-square:before {
    content: "\e9d4";
  }
  .icon-star:before {
    content: "\e9d5";
  }
  .icon-stop-circle:before {
    content: "\e9d6";
  }
  .icon-sun:before {
    content: "\e9d7";
  }
  .icon-sunrise:before {
    content: "\e9d8";
  }
  .icon-sunset:before {
    content: "\e9d9";
  }
  .icon-tablet:before {
    content: "\e9da";
  }
  .icon-tag:before {
    content: "\e9db";
  }
  .icon-target:before {
    content: "\e9dc";
  }
  .icon-terminal:before {
    content: "\e9dd";
  }
  .icon-thermometer:before {
    content: "\e9de";
  }
  .icon-thumbs-down:before {
    content: "\e9df";
  }
  .icon-thumbs-up:before {
    content: "\e9e0";
  }
  .icon-toggle-left:before {
    content: "\e9e1";
  }
  .icon-toggle-right:before {
    content: "\e9e2";
  }
  .icon-trash:before {
    content: "\e9e3";
  }
  .icon-trash-2:before {
    content: "\e9e4";
  }
  .icon-trending-down:before {
    content: "\e9e5";
  }
  .icon-trending-up:before {
    content: "\e9e6";
  }
  .icon-triangle:before {
    content: "\e9e7";
  }
  .icon-truck:before {
    content: "\e9e8";
  }
  .icon-tv:before {
    content: "\e9e9";
  }
  .icon-twitter:before {
    content: "\e9ea";
  }
  .icon-type:before {
    content: "\e9eb";
  }
  .icon-umbrella:before {
    content: "\e9ec";
  }
  .icon-underline:before {
    content: "\e9ed";
  }
  .icon-unlock:before {
    content: "\e9ee";
  }
  .icon-upload:before {
    content: "\e9ef";
  }
  .icon-upload-cloud:before {
    content: "\e9f0";
  }
  .icon-user:before {
    content: "\e9f1";
  }
  .icon-user-check:before {
    content: "\e9f2";
  }
  .icon-user-minus:before {
    content: "\e9f3";
  }
  .icon-user-plus:before {
    content: "\e9f4";
  }
  .icon-users:before {
    content: "\e9f5";
  }
  .icon-user-x:before {
    content: "\e9f6";
  }
  .icon-video:before {
    content: "\e9f7";
  }
  .icon-video-off:before {
    content: "\e9f8";
  }
  .icon-voicemail:before {
    content: "\e9f9";
  }
  .icon-volume:before {
    content: "\e9fa";
  }
  .icon-volume-1:before {
    content: "\e9fb";
  }
  .icon-volume-2:before {
    content: "\e9fc";
  }
  .icon-volume-x:before {
    content: "\e9fd";
  }
  .icon-watch:before {
    content: "\e9fe";
  }
  .icon-wifi:before {
    content: "\e9ff";
  }
  .icon-wifi-off:before {
    content: "\ea00";
  }
  .icon-wind:before {
    content: "\ea01";
  }
  .icon-x:before {
    content: "\ea02";
  }
  .icon-x-circle:before {
    content: "\ea03";
  }
  .icon-x-square:before {
    content: "\ea04";
  }
  .icon-youtube:before {
    content: "\ea05";
  }
  .icon-zap:before {
    content: "\ea06";
  }
  .icon-zap-off:before {
    content: "\ea07";
  }
  .icon-zoom-in:before {
    content: "\ea08";
  }
  .icon-zoom-out:before {
    content: "\ea09";
  }
`;

export default Style;
