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
import { useEffect } from "react";

export const Semantic = () => {

  const [nodes, setNodes , onNodesChange] = useNodesState([]);
  const [edges, setEdges , onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const getMindMap = async () => {
      try {
        const response = await fetch('http://localhost:5050/mindmap');
        const data = await response.json();
        setNodes(data.nodes)
        setEdges(data.edges)
      } catch (error) {
        console.log(error)
      }
    };

    getMindMap();
  }, [setEdges, setNodes])


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
