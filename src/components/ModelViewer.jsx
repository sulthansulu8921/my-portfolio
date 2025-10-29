import React, { useState } from 'react'

/*
  Usage:
  - Put a glb file at /public/models/scene.glb
  - Add <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
    to your index.html head (only once)
*/

export default function ModelViewer({ src = '/models/scene.glb', caption = '3D Scene' }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="model-wrapper" role="figure" aria-label={caption} tabIndex={0}>
      {/* loader */}
      <div className={`model-loader ${loaded ? 'hidden' : ''}`} aria-hidden={loaded}>
        <div className="model-spinner" />
      </div>

      {/* model-viewer element */}
      <model-viewer
        src={src}
        alt={caption}
        auto-rotate
        camera-controls
        disable-zoom="false"
        exposure="1.0"
        shadow-intensity="1"
        style={{ width: '100%', height: '100%', display: 'block' }}
        onLoad={() => setLoaded(true)}
      />

      {/* vignette and meta */}
      <div className="model-vignette" aria-hidden />
      <div className="model-meta">
        <div>
          <div style={{ fontWeight: 700 }}>{caption}</div>
          <div className="model-caption">Interactive 3D preview</div>
        </div>
        <div className="model-tag">Auto-rotate</div>
      </div>
    </div>
  )
}
