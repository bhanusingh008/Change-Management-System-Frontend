import React, { useEffect, useState } from "react";
import { cmsAxiosGet } from "../../../utils/axiosHelper";
import { MyTicketsStyled } from "./styled";

interface MyTicket {
  title: string;
  description: string;
  priority: string;
  type: string;
  affectedSystems: string;
  status: string;
}

const MyTickets: React.FC = () => {
  const [myTickets, setMyTickets] = useState<MyTicket[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await cmsAxiosGet(`/get-my-tickets`);
        const tickets = res.map((item: any) => ({
          title: item.title,
          description: item.description,
          priority: item.priority,
          type: item.type,
          affectedSystems: item.affectedSystems,
          status: item.status,
        }));
        setMyTickets(tickets);
      } catch (err) {
        console.log(err);
      }
    };
    load();
  }, []);
  return (
    <MyTicketsStyled>
      <div>
        <div className="ticket-header">
          <div>Title</div>
          <div>Description</div>
          <div>Priority</div>
          <div>Type</div>
          <div>AffectedSystems</div>
          <div>Status</div>
        </div>
        {myTickets.map((item) => (
          <div className="ticket-row">
            <div>{item.title}</div>
            <div>{item.description}</div>
            <div>{item.priority}</div>
            <div>{item.type}</div>
            <div>{item.affectedSystems}</div>
            <div>{item.status}</div>
          </div>
        ))}
      </div>
    </MyTicketsStyled>
  );
};

export default MyTickets;
