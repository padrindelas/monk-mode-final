
import React, { useRef, useState } from 'react';

const CanvasBoard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = () => setIsDrawing(true);
  const endDrawing = () => setIsDrawing(false);

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(e.nativeEvent.offsetX, e.nativeEvent.offsetY, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  return (
    <div>
      <h2>Quadro de Desenho Livre</h2>
      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        style={{ border: '1px solid black' }}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
      />
    </div>
  );
};

export default CanvasBoard;
    