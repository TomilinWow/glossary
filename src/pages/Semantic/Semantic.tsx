import { Header } from "../../components/Header/Header";
import {
  Background,
  Controls, EdgeText,
  ReactFlow,
  useEdgesState,
  useNodesState
} from "reactflow";
import "./Semantic.css";
import 'reactflow/dist/style.css';
import { mindMap } from "../../const/const";

export const Semantic = () => {

  const [nodes, , onNodesChange] = useNodesState(mindMap.nodes);
  const [edges, , onEdgesChange] = useEdgesState(mindMap.edges);

  return(
    <>
      <Header/>
      <div className="graph">
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          fitView
        >
          <EdgeText x={0} y={0}/>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </>
  )
}
