import React, { useState } from "react"; 
import axios from "axios"; 
import {
  ReactFlow,
  Background,
  Controls,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const Flow = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("Result will appear here");

  const handleRun = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/ask-ai", {
        prompt: input,
      });
      setResult(res.data.result);
    } catch (err) {
      console.error(err);
      setResult("Error fetching response");
    }
  };

  const handleSave = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/save", {
        prompt: input,
        response: result,
      });
      if (res.data.success) alert("Saved to MongoDB!");
    } catch (err) {
      console.error(err);
      alert("Failed to save");
    }
  };

  const nodes = [
    {
      id: "1",
      position: { x: 100, y: 100 },
      data: {
        label: (
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter prompt..."
            style={{ width: 150, height: 80 }}
          />
        ),
      },
    },
    {
      id: "2",
      position: { x: 400, y: 100 },
      data: {
        label: <div style={{ width: 150 }}>{result}</div>,
      },
    },
  ];

  const edges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
    },
  ];

  return (
    <ReactFlowProvider>
      <div style={{ height: "100vh", width: "100%" }}>
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Background />
          <Controls />
        </ReactFlow>

        <div style={{ position: "absolute", top: 20, right: 20 }}>
          <button onClick={handleRun} style={{ marginRight: 10, padding: "10px 20px" }}>
            Run Flow
          </button>
          <button onClick={handleSave} style={{ padding: "10px 20px" }}>
            Save
          </button>
        </div>
      </div>
    </ReactFlowProvider>
  );
};

export default Flow;