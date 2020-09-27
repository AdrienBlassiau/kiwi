import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import SeeMoreItem from './SeeMoreItem/index.js';
import IconAddLittle from '../../Icon/IconAddLittle';
import IconWatchlistLittle from '../../Icon/IconWatchlistLittle';
import IconWatchLittle from '../../Icon/IconWatchLittle';
import IconHeartLittle from '../../Icon/IconHeartLittle';
import IconList from '../../Icon/IconList';
import IconListMedia from '../../Icon/IconListMedia';
import IconBackLittle from '../../Icon/IconBackLittle';

const SeeMoreListManager = (props) =>{

  const [watch, setWatch] = useState(false);
  const [like, setLike] = useState(false);
  const [watchList, setWatchList] = useState(false);
  const [list, setList] = useState(false);

  const IconAddLittleWithBorder = <IconAddLittle />;

  let preparedComponent1 =
        <SeeMoreListManagerStyle>
          <SeeMoreItem
            Icon={IconHeartLittle}
            onClickFun={(e) => {e.stopPropagation(); setWatch(!watch)}}
            selector={watch}
            text={"Add to my sees"}
          />
          <SeeMoreItem
            Icon={IconWatchLittle}
            onClickFun={(e) => {e.stopPropagation(); setLike(!like)}}
            selector={like}
            text={"Add to my likes"}
          />
          <SeeMoreItem
            Icon={IconWatchlistLittle}
            onClickFun={(e) => {e.stopPropagation(); setWatchList(!watchList)}}
            selector={watchList}
            text={"Add to my watchlist"}
          />
          <SeeMoreItem
            Icon={IconAddLittle}
            onClickFun={(e) => {e.stopPropagation(); setList(!list)}}
            selector={list}
            text={"Add to a list"}
          />
        </SeeMoreListManagerStyle>;

  let preparedComponent2 =
    <SeeMoreListManagerStyle>
      <SeeMoreItem
        Icon={IconBackLittle}
        onClickFun={(e) => {e.stopPropagation(); setList(!list)}}
        selector={true}
        text={"Back"}
      />
      <SeeMoreItem
        Icon={null}
        onClickFun={null}
        selector={true}
        text={"Select"}
      />
      <SeeMoreItemOverflow>
        <SeeMoreItem
          Icon={IconAddLittle}
          onClickFun={(e) => null}
          selector={true}
          text={"Create a new list"}
        />
        <SeeMoreItem
          Icon={IconListMedia}
          onClickFun={(e) => null}
          selector={true}
          text={"list1"}
        />
        <SeeMoreItem
          Icon={IconListMedia}
          onClickFun={(e) => null}
          selector={true}
          text={"list2"}
        />
        <SeeMoreItem
          Icon={IconListMedia}
          onClickFun={(e) => null}
          selector={true}
          text={"list3"}
        />
      </SeeMoreItemOverflow>
    </SeeMoreListManagerStyle>;

  return (list ? preparedComponent2 : preparedComponent1);
};

const SeeMoreListManagerStyle = styled.div`
`;

const SeeMoreItemOverflow = styled.div`
  height: 120px;
  overflow: auto;
`;


export default SeeMoreListManager;
