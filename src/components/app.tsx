import { useEffect, useState } from 'react'

const width = 255
const height = 255

const App = () => {
  // TODO: カスタムフックに切り出し ref: https://cam-inc.co.jp/p/techblog/405626500662953068 {{{
  const [png, setPng] = useState<string | null>(null)
  const [bgColor, setBgColor] = useState<string>('#888888')
  const [foColor, setFoColor] = useState<string>('#000000')
  useEffect(() => {
    const canvasElem = document.createElement('canvas')
    canvasElem.width = width
    canvasElem.height = height
    const ctx = canvasElem.getContext('2d') as CanvasRenderingContext2D

    // draw

    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, width, height)

    ctx.font = '30px Hiragino Maru Gothic Pro'
    ctx.fillStyle = foColor
    ctx.fillText('Hello ハロー', width / 6, height / 2)

    setPng(canvasElem.toDataURL())
  }, [bgColor, foColor])
  // }}}

  return (
    <>
      {png && (
        <div className="comp" style={{ display: 'flex' }}>
          <img alt="icon" src={png} />
          <img alt="round icon" src={png} style={{ borderRadius: '100%' }} />
        </div>
      )}
      <h4>背景色</h4>
        {['#f00', '#0f0', '#00f'].map((color) => (
          <button
            key={color}
            style={{ background: color }}
            onClick={() => setBgColor(color)}
          >
            {color}
          </button>
        ))}
      <h4>文字色</h4>
      {['#f00', '#0f0', '#00f'].map((color) => (
        <button style={{ color }} onClick={() => setFoColor(color)}>
          {color}
        </button>
      ))}
      <div className="upload"><input type="file" name="file" id="file"/></div>
      <button>create markdown</button>
    </>
  );
}

export default App;