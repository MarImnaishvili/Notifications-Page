/* eslint-disable react/prop-types */
import styled from "styled-components";

function MainContent({
  id,
  userName,
  profilePic,
  action,
  groupName,
  time,
  isRead,
  post,
  userPicture,
  text,
  notifications,
  setNotifications,
}) {
  const handleIsRead = () => {
    const newNotifications = notifications.map((currentNot) => {
      console.log(id);
      if (id == currentNot.id) {
        return { ...currentNot, isRead: true };
      }
      return currentNot;
    });
    setNotifications(newNotifications);
  };

  return (
    <NotificationSection isread={isRead} onClick={() => handleIsRead()}>
      <img className="profilePic" src={profilePic} alt="contact picture"></img>
      <div className="wrapper">
        <InfoContainer>
          <span className="userName">{userName}</span>&ensp;
          <span className="action">{action}</span>&ensp;
          <span className="post">{post}</span>&ensp;
          <span className="groupName">{groupName}</span>&ensp;
          {!isRead ? <div className="markAsRead"></div> : null}
        </InfoContainer>
        <span className="time">{time}</span>
        {text ? <TextContainer>{text}</TextContainer> : null}
      </div>
      {userPicture ? (
        <img className="userPicture" src={userPicture} alt="user picture"></img>
      ) : null}
    </NotificationSection>
  );
}

const NotificationSection = styled.section`
  width: 100%;
  padding: 1.6rem;
  background-color: ${(props) => (props.isread ? null : "hsl(211, 68%, 94%)")};
  display: flex;
  border-radius: 1rem;
  gap: 1.6rem;
  .wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .profilePic,
  .userPicture {
    width: 3.9rem;
    height: 3.9rem;
  }
  .time {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.764rem;
    text-align: left;
    color: #939cad;
  }
`;

const InfoContainer = styled.div`
  font-size: 1.4rem;
  line-height: 1.764rem;
  text-align: left;
  display: inline-block;
  color: #5e6778;

  .userName {
    font-weight: 800;
    color: #1c202b;
    text-align: left;
    cursor: pointer;
    &:hover {
      color: #0a327b;
    }
  }
  .action {
    font-weight: 500;
  }
  .post {
    font-weight: 700;
    cursor: pointer;
    &:hover {
      color: #0a327b;
    }
  }
  .groupName {
    cursor: pointer;
    font-weight: 700;
    color: #0a327b;
  }
  .markAsRead {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: #f65552;
    display: inline-block;
  }
`;
const TextContainer = styled.div`
  margin-top: 1rem;
  padding: 1.6rem;
  color: #5e6778;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.764rem;
  text-align: left;
  border-radius: 0.5rem;
  border: 0.1rem solid #dde7ee;
  &:hover {
    background-color: #dde7ee;
  }
`;
export default MainContent;
