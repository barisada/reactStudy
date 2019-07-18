import React from "react";
import { Route, Link } from "react-router-dom";

function Rooms({ match }) {
  return (
    <div>
      <h2>여기는 방을 소개하는 페이지 이다.</h2>
      <Link to={`${match.url}/blueRoom`}>파란 방 이오.</Link>
      <br />
      <Link to={`${match.url}/greenRoom`}>초록 방 이오.</Link>
      <br />
      <Route path={`${match.url}/:roomId`} component={Room} />
      <Route exact path={match.url} render={() => <h3>방을 선택하시오.</h3>} />
    </div>
  );
}

function Room({ match }) {
  return <h3>{`${match.params.roomId} 방을 선택했꾸나.`}</h3>;
}

export default Rooms;
