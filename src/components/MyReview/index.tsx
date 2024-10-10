import React, { useEffect, useState } from "react";
import { cmsAxiosGet, cmsAxiosPost, cmsAxiosPut } from "../../../utils/axiosHelper";
import { StyledReviewTickets } from "./styled";

interface ReviewTicket {
  id: number;
  title: string;
  description: string;
  priority: string;
  type: string;
  affectedSystems: string;
  status: string;
  created: Date;
}

const ReviewTickets: React.FC = () => {
  const [reviewTicket, seReviewTicket] = useState<ReviewTicket[]>([]);

  const handleApprove = async (ticketId: number) => {
    try {
      const r = await cmsAxiosPut(`/ticket/approve`, {
        ticketId: ticketId
      });
      alert("Ticket Approved!")
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const load = async () => {
      try {
        const res = await cmsAxiosGet(`/get-my-review-tickets`);
        const tickets = res.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          priority: item.priority,
          type: item.type,
          affectedSystems: item.affectedSystems,
          status: item.status,
          created: item.createdAt,
        }));
        seReviewTicket(tickets);
      } catch (err) {
        console.log(err);
      }
    };
    load();
  }, []);
  return (
    <StyledReviewTickets>
      <div>
        <div className="ticket-header">
          <div>Title</div>
          <div>Description</div>
          <div>Priority</div>
          <div>Type</div>
          <div>AffectedSystems</div>
          <div>Status</div>
          <div>Created</div>
          <div>Approve</div>
        </div>
        {reviewTicket.map((item) => (
          <div className="ticket-row">
            <div>{item.title}</div>
            <div>{item.description}</div>
            <div>{item.priority}</div>
            <div>{item.type}</div>
            <div>{item.affectedSystems}</div>
            <div>{item.status}</div>
            <div> {new Date(item.created).toLocaleDateString()}</div>
            <div className="approve-btn" onClick={() => {handleApprove(item.id)}}>Approve</div>
          </div>
        ))}
      </div>
    </StyledReviewTickets>
  );
};

export default ReviewTickets;
