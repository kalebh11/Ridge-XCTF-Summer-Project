import React from "react";
import { Event } from "../../../../common/meet.model";
type Props = {
  event: Event;
};
export const EventTable = ({ event }: Props) => {
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
