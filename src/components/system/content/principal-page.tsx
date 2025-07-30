import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Sidebar from "../sidebar/sidebar";

export default function PrincipalPage() {
  return (
    <PanelGroup direction="horizontal">
        {/* Sidebar */}
        <Panel defaultSize={25}>
            <Sidebar/>
        </Panel>
        <PanelResizeHandle className="border-r"/>

        {/* Content */}
        <Panel defaultSize={50}>

        </Panel>
        <PanelResizeHandle className="border-l"/>

        {/* IA */}
        <Panel defaultSize={25}>
            
        </Panel>
    </PanelGroup>
  )
}
