// React and external libraries
import React from "react";

// Components
import TabMenu from "../components/TabMenu/TabMenu";
import Helmet from "../components/Helmet/Helmet";

// Data
import helmet from "../components/Helmet/data/helmet";
import workspaceData from "../components/WorkSpace/data/workspace";

const Workspace = () => {
  return (
    <>
      {/* Helmet component to set the page title and meta description */}
      <Helmet title={helmet.workspace.title} desc={helmet.workspace.desc} />

      {/* TabMenu component for displaying workspace data in a tabbed layout */}
      <TabMenu json={workspaceData} />
    </>
  );
};

export default Workspace;