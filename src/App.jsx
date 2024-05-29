import data from "./data.json";
import { useState } from "react";
import styled from "styled-components";
import MainContent from "./components/MainContent";

function App() {
  const [notifications, setNotifications] = useState(data);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((one) => ({ ...one, isRead: true })));
  };

  let unread = notifications.filter((obj) => obj.isRead == false).length;

  return (
    <MainContainer>
      <MainHeader>
        <h2>
          Notifications{" "}
          <div>
            <span>{unread}</span>
          </div>
        </h2>
        <button onClick={markAllAsRead}>Mark all as read</button>
      </MainHeader>
      <ListContainer>
        {notifications.map((notif) => (
          <MainContent
            key={notif.id}
            notif={notif}
            notifications={notifications}
            setNotifications={setNotifications}
          />
        ))}
      </ListContainer>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  width: 35.6rem;
  padding: 2.5rem 1.6rem;
  background-color: hsl(210, 60%, 98%);
  color: hsl(224, 21%, 14%);

  @media (min-width: 1440px) {
    width: 73rem;
  }
`;
const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  & > h2 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.52rem;
    text-align: left;
    display: flex;
    gap: 1rem;
  }
  & div {
    width: 3.2rem;
    height: 2.5rem;
    background-color: #0a327b;
    border-radius: 1rem;
    position: relative;
  }
  & span {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 800;
    line-height: 2rem;
    text-align: left;
    transform: translate(50%, -50%);
    position: absolute;
    top: 50%;
    right: 50%;
  }
  & > button {
    outline: none;
    border: none;
    background-color: inherit;
    color: hsl(219, 12%, 42%);
    cursor: pointer;
  }
`;

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default App;
