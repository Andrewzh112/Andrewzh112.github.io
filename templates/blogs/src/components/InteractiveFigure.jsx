import { useMemo, useState } from 'react';

const WIDTH = 640;
const HEIGHT = 260;

function buildWavePath(amplitude, frequency) {
  const points = [];
  const paddingX = 30;
  const paddingY = 40;
  const innerWidth = WIDTH - paddingX * 2;
  const midY = HEIGHT / 2;
  const maxAmp = (HEIGHT - paddingY * 2) / 2;
  const amp = amplitude * maxAmp;

  for (let i = 0; i <= 120; i += 1) {
    const t = i / 120;
    const x = paddingX + t * innerWidth;
    const y = midY + Math.sin(t * Math.PI * 2 * frequency) * amp;
    points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }

  return points.join(' ');
}

export default function InteractiveFigure({ title = 'Interactive signal', initial = 1 }) {
  const [frequency, setFrequency] = useState(initial);
  const [amplitude, setAmplitude] = useState(0.7);
  const ariaLabel = `${title} waveform`;

  const path = useMemo(
    () => buildWavePath(amplitude, frequency),
    [amplitude, frequency]
  );

  return (
    <figure className="interactive-figure">
      <figcaption>{title}</figcaption>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label={ariaLabel}>
        <defs>
          <linearGradient id="signal-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1c6b6a" />
            <stop offset="100%" stopColor="#c15a3a" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width={WIDTH} height={HEIGHT} fill="transparent" />
        <path d={path} fill="none" stroke="url(#signal-gradient)" strokeWidth="3" />
        <line x1="30" x2={WIDTH - 30} y1={HEIGHT / 2} y2={HEIGHT / 2} stroke="#1f1d1a" strokeOpacity="0.2" />
      </svg>
      <div className="figure-controls">
        <label>
          Frequency
          <input
            type="range"
            min="1"
            max="6"
            step="0.2"
            value={frequency}
            onChange={(event) => setFrequency(Number(event.target.value))}
          />
        </label>
        <div className="figure-stat">{frequency.toFixed(1)}x</div>
        <label>
          Amplitude
          <input
            type="range"
            min="0.2"
            max="1"
            step="0.05"
            value={amplitude}
            onChange={(event) => setAmplitude(Number(event.target.value))}
          />
        </label>
        <div className="figure-stat">{Math.round(amplitude * 100)}%</div>
      </div>
    </figure>
  );
}
