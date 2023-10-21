import React from "react";
import { MeetEvent } from "../../../../commons/event.model";
type Props = {
  event: MeetEvent;
};
const EventTable = ({ event }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>{event.eventType}</th>
          <th>Seed Time/PB</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default EventTable;
