import React from "react";
import { MeetObject } from "../MeetsPopup";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
interface Props {
  object: MeetObject;
}
const MeetCard: React.FC<Props> = ({ object }) => {
  return (
    <div className="meet-card">
      <div className="meet-card-top"></div>
      <div className="meet-card-divider" />
      <div className="meet-card-mid">test</div>
      <div className="meet-card-divider" />
      <div className="meet-card-bottom">test</div>
    </div>
  );
};

export default MeetCard;
