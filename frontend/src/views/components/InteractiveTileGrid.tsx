import React, { useRef, useEffect, useCallback } from 'react';

/**
 * InteractiveTileGrid
 * 
 * A performant canvas-based interactive tile grid overlay.
 * Tiles are transparent by default (showing existing hero background through).
 * On mouse hover, the hovered tile and nearby tiles glow electric-blue (#1801AD)
 * with a smooth ripple falloff.
 * 
 * Desktop-only: hidden on mobile via CSS class.
 */

const TILE_SIZE = 150;
const GAP = 3;
const CELL = TILE_SIZE + GAP;
const GLOW_RADIUS = 3; // tiles away from cursor that receive glow
const BRAND_BLUE_R = 24;
const BRAND_BLUE_G = 1;
const BRAND_BLUE_B = 173;

interface TileState {
  opacity: number;
  targetOpacity: number;
}

export const InteractiveTileGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const tilesRef = useRef<TileState[][]>([]);
  const dimsRef = useRef<{ cols: number; rows: number }>({ cols: 0, rows: 0 });

  const initTiles = useCallback((cols: number, rows: number) => {
    const tiles: TileState[][] = [];
    for (let r = 0; r < rows; r++) {
      tiles[r] = [];
      for (let c = 0; c < cols; c++) {
        tiles[r][c] = { opacity: 0, targetOpacity: 0 };
      }
    }
    tilesRef.current = tiles;
    dimsRef.current = { cols, rows };
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    const w = parent.clientWidth;
    const h = parent.clientHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const cols = Math.ceil(w / CELL) + 1;
    const rows = Math.ceil(h / CELL) + 1;
    initTiles(cols, rows);
  }, [initTiles]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -1000, y: -1000 };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    handleResize();

    // Lerp factor — controls the smooth animation speed (~300ms feel)
    const LERP = 0.16;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const { cols, rows } = dimsRef.current;
      const tiles = tilesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Find hovered tile
      const hoverCol = Math.floor(mx / CELL);
      const hoverRow = Math.floor(my / CELL);

      // Update target opacities
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const dist = Math.sqrt((c - hoverCol) ** 2 + (r - hoverRow) ** 2);
          if (dist <= GLOW_RADIUS) {
            // Center tile is brightest, falloff toward edges
            tiles[r][c].targetOpacity = Math.max(0, 1 - dist / (GLOW_RADIUS + 0.5));
          } else {
            tiles[r][c].targetOpacity = 0;
          }
          // Lerp current opacity toward target
          tiles[r][c].opacity += (tiles[r][c].targetOpacity - tiles[r][c].opacity) * LERP;
          // Snap to 0 when very small
          if (tiles[r][c].opacity < 0.005) tiles[r][c].opacity = 0;
        }
      }

      // Clear
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Pass 1: Draw inactive/base tiles
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const op = tiles[r][c].opacity;
          if (op >= 0.005) continue; // Skip active tiles for pass 2

          drawTile(ctx, c * CELL, r * CELL, 0);
        }
      }

      // Pass 2: Draw active tiles so they overlap inactive ones
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const op = tiles[r][c].opacity;
          if (op < 0.005) continue;

          drawTile(ctx, c * CELL, r * CELL, op);
        }
      }

      function drawTile(ctx: CanvasRenderingContext2D, x: number, y: number, op: number) {
        const lift = op * 3; // lift up to 3px
        const scale = 1 + (op * 0.03); // scale up to 1.03
        const drawSize = TILE_SIZE * scale;
        const offset = (TILE_SIZE - drawSize) / 2;
        const drawX = x + offset;
        const drawY = y + offset - lift;

        // Outer Glow for active tiles
        if (op > 0.005) {
          ctx.shadowColor = `rgba(${BRAND_BLUE_R}, ${BRAND_BLUE_G}, ${BRAND_BLUE_B}, ${op * 0.8})`;
          ctx.shadowBlur = 25 * op;
          ctx.shadowOffsetY = lift * 2;
        } else {
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
          ctx.shadowOffsetY = 0;
        }

        // Tile base (White gradient)
        const grad = ctx.createLinearGradient(drawX, drawY, drawX + drawSize, drawY + drawSize);
        grad.addColorStop(0, '#FFFFFF');
        grad.addColorStop(1, '#F4F6F9');
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(drawX, drawY, drawSize, drawSize, 6);
        ctx.fill();

        // Reset shadow for borders
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;

        // Thin subtle border
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Inner bevel/highlight for 3D premium look
        ctx.beginPath();
        ctx.roundRect(drawX + 1, drawY + 1, drawSize - 2, drawSize - 2, 5);
        const innerGrad = ctx.createLinearGradient(drawX, drawY, drawX + drawSize, drawY + drawSize);
        innerGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        innerGrad.addColorStop(1, 'rgba(0, 0, 0, 0.02)');
        ctx.strokeStyle = innerGrad;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Active blue edge glow
        if (op > 0.005) {
          ctx.beginPath();
          ctx.roundRect(drawX, drawY, drawSize, drawSize, 6);
          ctx.strokeStyle = `rgba(${BRAND_BLUE_R}, ${BRAND_BLUE_G}, ${BRAND_BLUE_B}, ${op * 0.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave); // Fades out if mouse leaves browser window
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, handleMouseMove, handleMouseLeave]);

  return (
    <canvas
      ref={canvasRef}
      className="hero-tile-grid-canvas"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default InteractiveTileGrid;
