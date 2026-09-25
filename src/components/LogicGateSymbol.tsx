import React from 'react';

export type SupportedGate = 'AND' | 'OR' | 'NOT' | 'BUFFER' | 'NAND' | 'NOR' | 'XOR' | 'XNOR';

interface LogicGateSymbolProps {
  gate: SupportedGate;
  inputA?: number; // 0 or 1
  inputB?: number; // 0 or 1
  output?: number; // 0 or 1
  className?: string;
  showLabels?: boolean;
}

export const LogicGateSymbol: React.FC<LogicGateSymbolProps> = ({
  gate,
  inputA = 0,
  inputB = 0,
  output = 0,
  className = 'w-full max-w-[320px] h-auto',
  showLabels = true
}) => {
  const isSingleInput = gate === 'NOT' || gate === 'BUFFER';

  // Pure clean colors without any effects/glow/animations matching logic gates.jpg
  // Input A: Red (#ef4444)
  // Input B: Blue/Cyan (#0ea5e9)
  // Output Z: Green (#22c55e)
  // Gate Body: Solid Sky-Cyan (#38bdf8) with solid border (#0284c7)
  const pinColorA = '#ef4444'; // Red
  const pinColorB = '#0ea5e9'; // Blue/Cyan
  const pinColorOut = '#22c55e'; // Green

  // Dynamic wire colors based on logic state (simple solid colors, no glow effects)
  const wireColorA = inputA === 1 ? '#ef4444' : '#64748b';
  const wireColorB = inputB === 1 ? '#0ea5e9' : '#64748b';
  const wireColorOut = output === 1 ? '#22c55e' : '#64748b';

  // Render Gate Graphic Body according to standard IEEE/ANSI logic symbols
  const renderGateShape = () => {
    switch (gate) {
      case 'AND':
        return (
          <path
            d="M 80 30 L 130 30 A 40 40 0 0 1 130 110 L 80 110 Z"
            fill="#38bdf8"
            stroke="#0284c7"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        );

      case 'NAND':
        return (
          <g>
            <path
              d="M 80 30 L 130 30 A 40 40 0 0 1 130 110 L 80 110 Z"
              fill="#38bdf8"
              stroke="#0284c7"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* Inversion Bubble */}
            <circle
              cx="178"
              cy="70"
              r="8"
              fill="#ffffff"
              stroke="#0284c7"
              strokeWidth="3.5"
            />
          </g>
        );

      case 'OR':
        return (
          <path
            d="M 80 30 Q 105 70 80 110 Q 135 105 175 70 Q 135 35 80 30 Z"
            fill="#38bdf8"
            stroke="#0284c7"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        );

      case 'NOR':
        return (
          <g>
            <path
              d="M 80 30 Q 105 70 80 110 Q 135 105 175 70 Q 135 35 80 30 Z"
              fill="#38bdf8"
              stroke="#0284c7"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* Inversion Bubble */}
            <circle
              cx="183"
              cy="70"
              r="8"
              fill="#ffffff"
              stroke="#0284c7"
              strokeWidth="3.5"
            />
          </g>
        );

      case 'XOR':
        return (
          <g>
            {/* Detached Input Curve */}
            <path
              d="M 68 30 Q 93 70 68 110"
              fill="none"
              stroke="#0284c7"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            {/* OR Body */}
            <path
              d="M 82 30 Q 107 70 82 110 Q 135 105 175 70 Q 135 35 82 30 Z"
              fill="#38bdf8"
              stroke="#0284c7"
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </g>
        );

      case 'XNOR':
        return (
          <g>
            {/* Detached Input Curve */}
            <path
              d="M 68 30 Q 93 70 68 110"
              fill="none"
              stroke="#0284c7"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            {/* OR Body */}
            <path
              d="M 82 30 Q 107 70 82 110 Q 135 105 175 70 Q 135 35 82 30 Z"
              fill="#38bdf8"
              stroke="#0284c7"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* Inversion Bubble */}
            <circle
              cx="183"
              cy="70"
              r="8"
              fill="#ffffff"
              stroke="#0284c7"
              strokeWidth="3.5"
            />
          </g>
        );

      case 'NOT':
        return (
          <g>
            {/* Triangle Body */}
            <polygon
              points="80,30 152,70 80,110"
              fill="#38bdf8"
              stroke="#0284c7"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* Inversion Bubble */}
            <circle
              cx="160"
              cy="70"
              r="8"
              fill="#ffffff"
              stroke="#0284c7"
              strokeWidth="3.5"
            />
          </g>
        );

      case 'BUFFER':
        return (
          <polygon
            points="80,30 162,70 80,110"
            fill="#38bdf8"
            stroke="#0284c7"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        );

      default:
        return null;
    }
  };

  // Determine starting point of output line
  const getOutputStartX = () => {
    switch (gate) {
      case 'AND': return 170;
      case 'NAND': return 186;
      case 'OR': return 175;
      case 'NOR': return 191;
      case 'XOR': return 175;
      case 'XNOR': return 191;
      case 'NOT': return 168;
      case 'BUFFER': return 162;
    }
  };

  const outputStartX = getOutputStartX();
  const outputLabel = gate === 'NOT' ? 'Ā' : (gate === 'BUFFER' ? 'A' : 'Z');

  return (
    <svg
      viewBox="0 0 280 140"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Inputs Wiring and Terminal Pins */}
      {isSingleInput ? (
        <g>
          {/* Centered Single Input A line */}
          <line
            x1="40"
            y1="70"
            x2="80"
            y2="70"
            stroke={wireColorA}
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Terminal Pin A Circle */}
          <circle
            cx="26"
            cy="70"
            r="14"
            fill={pinColorA}
            stroke="#b91c1c"
            strokeWidth="2"
          />
          <text
            x="26"
            y="75"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="13"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            A
          </text>
          {showLabels && (
            <text
              x="26"
              y="98"
              textAnchor="middle"
              fill={inputA === 1 ? '#ef4444' : '#94a3b8'}
              fontSize="12"
              fontWeight="bold"
              fontFamily="monospace"
            >
              {inputA}
            </text>
          )}
        </g>
      ) : (
        <g>
          {/* Input A Line (Top, y=45) */}
          <line
            x1="40"
            y1="45"
            x2={gate === 'XOR' || gate === 'XNOR' ? '68' : '80'}
            y2="45"
            stroke={wireColorA}
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Terminal Pin A Circle */}
          <circle
            cx="26"
            cy="45"
            r="14"
            fill={pinColorA}
            stroke="#b91c1c"
            strokeWidth="2"
          />
          <text
            x="26"
            y="50"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="13"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            A
          </text>
          {showLabels && (
            <text
              x="26"
              y="25"
              textAnchor="middle"
              fill={inputA === 1 ? '#ef4444' : '#94a3b8'}
              fontSize="12"
              fontWeight="bold"
              fontFamily="monospace"
            >
              {inputA}
            </text>
          )}

          {/* Input B Line (Bottom, y=95) */}
          <line
            x1="40"
            y1="95"
            x2={gate === 'XOR' || gate === 'XNOR' ? '68' : '80'}
            y2="95"
            stroke={wireColorB}
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Terminal Pin B Circle */}
          <circle
            cx="26"
            cy="95"
            r="14"
            fill={pinColorB}
            stroke="#0369a1"
            strokeWidth="2"
          />
          <text
            x="26"
            y="100"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="13"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            B
          </text>
          {showLabels && (
            <text
              x="26"
              y="122"
              textAnchor="middle"
              fill={inputB === 1 ? '#0ea5e9' : '#94a3b8'}
              fontSize="12"
              fontWeight="bold"
              fontFamily="monospace"
            >
              {inputB}
            </text>
          )}
        </g>
      )}

      {/* Logic Gate Body Symbol */}
      {renderGateShape()}

      {/* Output Wire and Terminal Pin */}
      <g>
        <line
          x1={outputStartX}
          y1="70"
          x2="238"
          y2="70"
          stroke={wireColorOut}
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Output Terminal Pin Z Circle */}
        <circle
          cx="252"
          cy="70"
          r="14"
          fill={pinColorOut}
          stroke="#15803d"
          strokeWidth="2"
        />
        <text
          x="252"
          y="75"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="13"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          {outputLabel}
        </text>
        {showLabels && (
          <text
            x="252"
            y="98"
            textAnchor="middle"
            fill={output === 1 ? '#22c55e' : '#94a3b8'}
            fontSize="12"
            fontWeight="bold"
            fontFamily="monospace"
          >
            {output}
          </text>
        )}
      </g>
    </svg>
  );
};
