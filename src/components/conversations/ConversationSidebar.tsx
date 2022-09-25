import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  ConversationSidebarContainer,
  ConversationSidebarHeader,
  ConversationSidebarItem,
  ConversationSidebarStyle,
} from "../../utils/styles";
import { ConversationType } from "../../utils/types";
import styles from "./index.module.scss";

type Props = {
  conversations: ConversationType[];
};

const ConversationSidebar: FC<Props> = ({ conversations }) => {
  const navigate = useNavigate();
  return (
    <ConversationSidebarStyle>
      <ConversationSidebarHeader>
        <h1>Conversations</h1>
      </ConversationSidebarHeader>
      <ConversationSidebarContainer>
        {conversations.map((conversation) => (
          <ConversationSidebarItem
            key={conversation.id}
            onClick={() => navigate(`/conversations/${conversation.id}`)}
          >
            <div className={styles.conversationAvatar}></div>
            <div>
              <span className={styles.conversationName}>{conversation.name}</span>
              <span className={styles.conversationLastMessage}>{conversation.lastMessage}</span>
            </div>
          </ConversationSidebarItem>
        ))}
      </ConversationSidebarContainer>
    </ConversationSidebarStyle>
  );
};

export default ConversationSidebar;
