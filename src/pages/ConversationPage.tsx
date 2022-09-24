import { Outlet, useParams } from "react-router-dom";
import ConversationPanel from "../components/conversations/ConversationPanel";
import ConversationSidebar from "../components/conversations/ConversationSidebar";
import { Page } from "../utils/styles";

const ConversationPage = () => {
  const { id } = useParams();
  return (
    <Page>
      <ConversationSidebar />
      {!id && <ConversationPanel />}
      <Outlet />
    </Page>
  );
};

export default ConversationPage;
