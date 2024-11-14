import { useState } from "react";
import { DashboardStyled } from "./styled";
import { cmsAxiosPost } from "../../../utils/axiosHelper";
import MyTickets from "../MyTickets";
import ReviewTickets from "../MyReview";
import { useNavigate } from "react-router";

interface ChangeTicket {
  title: string;
  description: string;
  priority: string;
  type: string;
}

interface User { 
  id: number;
  email: string;
  role: number;
}

const Dashboard: React.FC<{}> = () => {
  const user: User = JSON.parse(localStorage.getItem("user") || "{}");
  const [currPage, setCurrPage] = useState<number>(0);
  const nav = useNavigate();

  const [changeTicket, setChangeTicket] = useState<ChangeTicket>({
    title: "",
    description: "",
    priority: "",
    type: ""
  });

  const [showCreateTicketModal, setShowCreateTicketModal] =
    useState<boolean>(false);
  const [selectedImpacts, setSelectedImpacts] = useState<string[]>([]);

  const handleSubmit = async () => {
    const selectedImpactString = selectedImpacts.join(",");
    try {
      const res = await cmsAxiosPost('/add-change-ticket', {
        title: changeTicket.title,
        description: changeTicket.description,
        priority: changeTicket.priority,
        type: changeTicket.type,
        affectedSystems: selectedImpactString,
        createdById: user.id,
        creatorRole: user.role
      });
      console.log(res)
      window.location.reload();
    } catch (err) { 
      console.log(err);
    }
    console.log(changeTicket, selectedImpactString, user.email, user.id, user.role);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedImpacts([...selectedImpacts, value]);
    } else {
      setSelectedImpacts(selectedImpacts.filter((impact) => impact !== value));
    }
  };

  const handleLogout = () => { 
    localStorage.clear();
    nav('/login');
  }

  return (
    <DashboardStyled>
      <div className="dashb-ctn">
        <div>{`Hi, ${user.email}`}</div>
        <div
          className="change-tkt-btn"
          onClick={() => {
            setShowCreateTicketModal(true);
          }}
        >
          <button>Add Change Ticket</button>
        </div>
        <div
          className="logout-btn"
          onClick={() => {
            handleLogout();
          }}
        >
          <button>LogOut</button>
        </div>
        <div className="horizontal-line"></div>

        <div className="options-ctn">
          <div
            className="option"
            onClick={() => {
              setCurrPage(0);
            }}
          >
            My Tickets
          </div>
          <div
            className="option"
            onClick={() => {
              setCurrPage(1);
            }}
          >
            Review Tickets
          </div>
        </div>

        {currPage === 0 ? (
          <div><div>Viewing My Tickets</div><MyTickets></MyTickets></div>
        ) : (
          <div><div>Viewing Review Tickets</div><ReviewTickets></ReviewTickets></div>
        )}

        {showCreateTicketModal ? (
          <div>
            <div className="overlay"></div>
            <div className="create-change-tkt">
              <div className="modal-options-ctn">
                <div
                  className="close-btn"
                  onClick={() => {
                    setShowCreateTicketModal(false);
                  }}
                >
                  Close
                </div>
              </div>

              <div className="inps-ctn">
                <div className="inp-ctn">
                  <label>Title</label>
                  <input
                    className="inp"
                    type="text"
                    value={changeTicket.title}
                    onChange={(e) =>
                      setChangeTicket((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                  ></input>
                </div>

                <div className="inp-ctn">
                  <label>Description</label>
                  <textarea
                    className="inp"
                    value={changeTicket.description}
                    onChange={(e) =>
                      setChangeTicket((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                  ></textarea>
                </div>

                <div className="inp-ctn">
                  <label>Type</label>
                  <select
                    className="inp"
                    value={changeTicket.type}
                    onChange={(e) =>
                      setChangeTicket((prev) => ({
                        ...prev,
                        type: e.target.value,
                      }))
                    }
                  >
                    <option value="">Select type</option>
                    <option value="Standard">Standard</option>
                    <option value="Emergency">Emergency</option>
                    <option value="Major">Major</option>
                    <option value="Minor">Minor</option>
                  </select>
                </div>

                <div className="inp-ctn">
                  <label>Priority</label>
                  <select
                    className="inp"
                    value={changeTicket.priority}
                    onChange={(e) =>
                      setChangeTicket((prev) => ({
                        ...prev,
                        priority: e.target.value,
                      }))
                    }
                  >
                    <option value="">Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Critical">Critical</option>
                  </select>
                </div>

                <div className="inp-ctn">
                  <label>Select Change Impact</label>

                  <div className="checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        value="frontend"
                        onChange={handleCheckboxChange}
                      />
                      Frontend
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        value="backend"
                        onChange={handleCheckboxChange}
                      />
                      Backend
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        value="database"
                        onChange={handleCheckboxChange}
                      />
                      Database
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        value="performance"
                        onChange={handleCheckboxChange}
                      />
                      Performance
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        value="network"
                        onChange={handleCheckboxChange}
                      />
                      Network
                    </label>
                  </div>
                </div>
              </div>
              <div className="save-btn-ctn" onClick={() => handleSubmit()}>
                <button>Save</button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </DashboardStyled>
  );
};

export default Dashboard;
