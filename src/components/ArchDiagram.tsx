import classNames from 'classnames';
import { useState } from 'react';

import './ArchDiagram.scss';

export interface ArchNode {
  id: string;
  label: string;
  sublabel?: string;
  detail: string;
  x: number; // 0-100 (% of diagram width)
  y: number; // 0-100 (% of diagram height)
  type: 'agent' | 'service' | 'data' | 'external' | 'ui';
}

export interface ArchEdge {
  from: string;
  to: string;
  label?: string;
}

export interface Architecture {
  nodes: ArchNode[];
  edges: ArchEdge[];
}

const VIEW_W = 860;
const VIEW_H = 400;
const NODE_W = 168;
const NODE_H = 58;

const nodeCenter = (node: ArchNode) => ({
  cx: (node.x / 100) * VIEW_W,
  cy: (node.y / 100) * VIEW_H,
});

const ArchDiagram = ({ architecture }: { architecture: Architecture }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);

  const activeId = hoverId || selectedId;
  const selectedNode = architecture.nodes.find((node) => node.id === selectedId);

  const isEdgeActive = (edge: ArchEdge) =>
    activeId !== null && (edge.from === activeId || edge.to === activeId);

  return (
    <div className="arch">
      <svg
        className="arch__svg"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        role="img"
        aria-label="Architecture diagram"
      >
        {/* edges under nodes */}
        {architecture.edges.map((edge, index) => {
          const from = architecture.nodes.find((node) => node.id === edge.from);
          const to = architecture.nodes.find((node) => node.id === edge.to);
          if (!from || !to) return null;
          const a = nodeCenter(from);
          const b = nodeCenter(to);
          const midX = (a.cx + b.cx) / 2;
          const path = `M ${a.cx} ${a.cy} C ${midX} ${a.cy}, ${midX} ${b.cy}, ${b.cx} ${b.cy}`;
          const active = isEdgeActive(edge);
          return (
            <g key={index} className={classNames('arch__edge', { 'arch__edge--active': active })}>
              <path d={path} className="arch__edge-line" />
              {edge.label && (
                <text x={midX} y={(a.cy + b.cy) / 2 - 8} className="arch__edge-label">
                  {edge.label}
                </text>
              )}
            </g>
          );
        })}

        {architecture.nodes.map((node) => {
          const { cx, cy } = nodeCenter(node);
          const active = node.id === activeId;
          return (
            <g
              key={node.id}
              className={classNames('arch__node', `arch__node--${node.type}`, {
                'arch__node--active': active,
                'arch__node--selected': node.id === selectedId,
              })}
              transform={`translate(${cx - NODE_W / 2}, ${cy - NODE_H / 2})`}
              onMouseEnter={() => setHoverId(node.id)}
              onMouseLeave={() => setHoverId(null)}
              onClick={() => setSelectedId(node.id === selectedId ? null : node.id)}
            >
              <rect className="arch__node-box" width={NODE_W} height={NODE_H} rx={5} />
              <circle className="arch__node-light" cx={14} cy={NODE_H / 2} r={3.5} />
              <text x={28} y={node.sublabel ? 25 : NODE_H / 2 + 4} className="arch__node-label">
                {node.label}
              </text>
              {node.sublabel && (
                <text x={28} y={42} className="arch__node-sublabel">
                  {node.sublabel}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      <div className="arch__inspector">
        {selectedNode ? (
          <>
            <span className="arch__inspector-id">
              [{selectedNode.type.toUpperCase()}] {selectedNode.label}
            </span>
            <span className="arch__inspector-detail">{selectedNode.detail}</span>
          </>
        ) : (
          <span className="arch__inspector-hint">
            // click a node to inspect · hover to trace connections
          </span>
        )}
      </div>
    </div>
  );
};

export default ArchDiagram;
