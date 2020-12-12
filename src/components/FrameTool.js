import React, { useState } from 'react'
import GFALogo from '../images/WebBannerLogoWhite.png'

const FrameTool = () => {
  const [frameSize, updateFrameSize] = useState({
    height: '',
    width: ''
  })
  const [frameType, updateFrameType] = useState({
    isStandard: false,
    isInches: false,
    isCentimeters: false
  })
  const [disabled, setDisabled] = useState(false)
  const [standardSize, updateStandardSize] = useState('')
  const [aValue, updateAValue] = useState('A Sizes')
  const [bValue, updateBValue] = useState('B Sizes')
  const [holdValue, updateHoldValue] = useState('')
  const [generateFrameHeight, updateGenerateFrameHeight] = useState([])
  const [generateFrameWidth, updateGenerateFrameWidth] = useState([])
  const [cornerPieces, updateCornerPieces] = useState('')
  const [frameError, updateFrameError] = useState('')

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value

    const data = {
      ...frameSize,
      [name]: value
    }
    updateFrameSize(data)

  }

  const [activeSt, updateActiveSt] = useState('')
  const [activeCm, updateActiveCm] = useState('')
  const [activeIn, updateActiveIn] = useState('')
  const [activeFaq, updateActiveFaq] = useState('')

  function swapState(e) {
    e.preventDefault()
    updateFrameSize({
      height: frameSize.width,
      width: frameSize.height
    })
  }

  function resetState() {
    resetFrameSize()
    updateStandardSize('')
    updateGenerateFrameHeight([])
    updateGenerateFrameWidth([])
    updateCornerPieces('')
  }

  function resetFrameSize() {
    updateFrameSize({
      height: '',
      width: ''
    })
  }

  function handleFaq() {
    resetState()
    updateActiveFaq('is-active dark-blue')
    updateActiveCm('')
    updateActiveIn('')
    updateActiveSt('')
    updateFrameType({
      isStandard: false,
      isInches: false,
      isCentimeters: false
    })
  }

  function handleStandard(e) {
    e.preventDefault()
    resetFrameSize()
    updateFrameType({
      isStandard: true,
      isInches: false,
      isCentimeters: false
    })
    setDisabled(true)
    updateGenerateFrameHeight([])
    updateGenerateFrameWidth([])
    updateCornerPieces('')
    updateFrameError('')
    updateStandardSize('')
    updateActiveFaq('')
    updateActiveCm('')
    updateActiveIn('')
    updateActiveSt('is-active dark-blue')
  }
  function handleInches(e) {
    e.preventDefault()
    resetFrameSize()
    updateFrameType({
      isStandard: false,
      isInches: true,
      isCentimeters: false
    })
    setDisabled(false)
    updateGenerateFrameHeight([])
    updateGenerateFrameWidth([])
    updateCornerPieces('')
    updateFrameError('')
    updateStandardSize('Custom (Inches)')
    updateActiveFaq('')
    updateActiveCm('')
    updateActiveIn('is-active dark-blue')
    updateActiveSt('')
  }
  function handleCentimeters(e) {
    e.preventDefault()
    resetFrameSize()
    updateFrameType({
      isStandard: false,
      isInches: false,
      isCentimeters: true
    })
    setDisabled(false)
    updateGenerateFrameHeight([])
    updateGenerateFrameWidth([])
    updateCornerPieces('')
    updateFrameError('')
    updateStandardSize('Custom (Centimeters)')
    updateActiveFaq('')
    updateActiveCm('is-active dark-blue')
    updateActiveIn('')
    updateActiveSt('')
  }

  function changeSize(e) {
    updateGenerateFrameHeight([])
    updateGenerateFrameWidth([])
    updateHoldValue(e.target.value)
    updateBValue('B Sizes')
    updateAValue('A Sizes')

    updateCornerPieces('')
    if (e.target.value === 'Letter') {
      updateStandardSize(`${e.target.value} (Inches)`)
    } else {
      updateStandardSize(`${e.target.value} (Centimeters)`)
    }
    if (e.target.value === 'Letter') return handleLetter()
    if (e.target.value === '4A0') return handle4A0()
    if (e.target.value === '2A0') return handle2A0()
    if (e.target.value === 'A0') return handleA0()
    if (e.target.value === 'A1') return handleA1()
    if (e.target.value === 'A2') return handleA2()
    if (e.target.value === 'A3') return handleA3()
    if (e.target.value === 'A4') return handleA4()
    if (e.target.value === 'A5') return handleA5()
    if (e.target.value === 'A6') return handleA6()
    if (e.target.value === '4B0') return handle4B0()
    if (e.target.value === '2B0') return handle2B0()
    if (e.target.value === 'B0') return handleB0()
    if (e.target.value === 'B1') return handleB1()
    if (e.target.value === 'B2') return handleB2()
    if (e.target.value === 'B3') return handleB3()
    if (e.target.value === 'B4') return handleB4()
    if (e.target.value === 'B5') return handleB5()
    if (e.target.value === 'B6') return handleB6()
  }

  const handleLetter = () => updateFrameSize({ height: '8.5', width: '11' })
  const handle4B0 = () => updateFrameSize({ height: '282.8', width: '200' })
  const handle2B0 = () => updateFrameSize({ height: '200', width: '141.4' })
  const handleB0 = () => updateFrameSize({ height: '141.4', width: '100' })
  const handleB1 = () => updateFrameSize({ height: '100', width: '70.7' })
  const handleB2 = () => updateFrameSize({ height: '70.7', width: '50' })
  const handleB3 = () => updateFrameSize({ height: '50', width: '35.3' })
  const handleB4 = () => updateFrameSize({ height: '35.3', width: '25' })
  const handleB5 = () => updateFrameSize({ height: '25', width: '17.6' })
  const handleB6 = () => updateFrameSize({ height: '17.6', width: '12.5' })
  const handle4A0 = () => updateFrameSize({ height: '237.8', width: '168.2' })
  const handle2A0 = () => updateFrameSize({ height: '168.2', width: '118.9' })
  const handleA0 = () => updateFrameSize({ height: '118.9', width: '84.1' })
  const handleA1 = () => updateFrameSize({ height: '84.1', width: '59.4' })
  const handleA2 = () => updateFrameSize({ height: '59.4', width: '42' })
  const handleA3 = () => updateFrameSize({ height: '42', width: '29.7' })
  const handleA4 = () => updateFrameSize({ height: '29.7', width: '21' })
  const handleA5 = () => updateFrameSize({ height: '21', width: '14.8' })
  const handleA6 = () => updateFrameSize({ height: '14.8', width: '10.5' })


  function handleSubmit() {
    if (frameSize.height === '' || frameSize.width === '') return
    if (frameType.isCentimeters === true) return generateMetric()
    if (frameType.isInches) return generateInch()
    if (frameType.isStandard) return generateStandard()
  }

  // ! METRIC FRAME ALGO

  function generateMetric() {
    updateHoldValue('Centimeters')

    let solveHeight = frameSize.height - 20
    let solveWidth = frameSize.width - 20

    let extraLongHeight = 0
    let longHeight = 0
    let shortHeight = 0

    let extraLongWidth = 0
    let longWidth = 0
    let shortWidth = 0

    while (solveWidth > 0) {

      if (solveWidth === 21) solveWidth -= 21, longWidth += 2, shortWidth += 8
      if (solveWidth === 17) solveWidth -= 17, longWidth += 2, shortWidth += 6
      if (solveWidth === 16) solveWidth -= 16, shortWidth += 8
      if (solveWidth === 13) solveWidth -= 13, longWidth += 2, shortWidth += 4
      if (solveWidth === 12 || solveWidth === 11) solveWidth -= 12, shortWidth += 6
      if (solveWidth === 8 || solveWidth === 7 || solveWidth === 6) solveWidth -= 8, shortWidth += 4

      if (solveWidth >= 10) solveWidth -= 10, extraLongWidth += 2
      else if (solveWidth >= 5) solveWidth -= 5, longWidth += 2
      else if (solveWidth > 0) solveWidth -= 4, shortWidth += 2
    }

    while (solveHeight > 0) {
      if (solveHeight === 21) solveHeight -= 21, longHeight += 2, shortHeight += 8
      if (solveHeight === 17) solveHeight -= 17, longHeight += 2, shortHeight += 6
      if (solveHeight === 16) solveHeight -= 16, shortHeight += 8
      if (solveHeight === 13) solveHeight -= 13, longHeight += 2, shortHeight += 4
      if (solveHeight === 12 || solveHeight === 11) solveHeight -= 12, shortHeight += 6
      if (solveHeight === 8 || solveHeight === 7 || solveHeight === 6) solveHeight -= 8, shortHeight += 4

      if (solveHeight >= 10) solveHeight -= 10, extraLongHeight += 2
      else if (solveHeight >= 5) solveHeight -= 5, longHeight += 2
      else if (solveHeight > 0) solveHeight -= 4, shortHeight += 2
    }
    updateCornerPieces('4 x Corners')
    if (solveHeight < 0 && solveWidth < 0) updateFrameError(`There is not an exact fit for your required frame size. This frame is ${Math.abs(solveWidth)}cm too wide and ${Math.abs(solveHeight)}cm too tall.`)
    else if (solveHeight < 0) updateFrameError(`There is not an exact fit for your required frame size. This frame is ${Math.abs(solveHeight)}cm too tall.`)
    else if (solveWidth < 0) updateFrameError(`There is not an exact fit for your required frame size. This frame is ${Math.abs(solveWidth)}cm too wide.`)
    else updateFrameError('')
    return generateWidthCM(extraLongWidth, longWidth, shortWidth, solveHeight), generateHeightCM(extraLongHeight, longHeight, shortHeight)
  }

  const generateWidthCM = (XL, L, S) => {

    if (XL > 0 && L === 0 && S === 0) updateGenerateFrameWidth([`${XL} x Extra Long`])
    else if (L > 0 && XL === 0 && S === 0) updateGenerateFrameWidth([`${L} x Long`])
    else if (S > 0 && L === 0 && XL === 0) updateGenerateFrameWidth([`${S} x Small`])
    else if (XL > 0 && L > 0 && S === 0) updateGenerateFrameWidth([`${XL} x Extra Long`, `${L} x Long`])
    else if (XL > 0 && L === 0 && S > 0) updateGenerateFrameWidth([`${XL} x Extra Long`, `${S} x Small`])
    else if (XL === 0 && L > 0 && S > 0) updateGenerateFrameWidth([`${L} x Long`, `${S} x Small`])
    else updateGenerateFrameWidth([`${XL} x Extra Long`, `${L} x Long`, `${S} x Small`])
  }
  const generateHeightCM = (XL, L, S) => {

    if (XL > 0 && L === 0 && S === 0) updateGenerateFrameHeight([`${XL} x Extra Long`])
    else if (L > 0 && XL === 0 && S === 0) updateGenerateFrameHeight([`${L} x Long`])
    else if (S > 0 && L === 0 && XL === 0) updateGenerateFrameHeight([`${S} x Small`])
    else if (XL > 0 && L > 0 && S === 0) updateGenerateFrameHeight([`${XL} x Extra Long`, `${L} x Long`])
    else if (XL > 0 && L === 0 && S > 0) updateGenerateFrameHeight([`${XL} x Extra Long`, `${S} x Small`])
    else if (XL === 0 && L > 0 && S > 0) updateGenerateFrameHeight([`${L} x Long`, `${S} x Small`])
    else updateGenerateFrameHeight([`${XL} x Extra Long`, `${L} x Long`, `${S} x Small`])
  }

  // ! IMP FRAME ALGO

  function generateInch() {
    updateHoldValue('Inches')

    let solveHeight = frameSize.height - 8
    let solveWidth = frameSize.width - 8

    let longHeight = 0
    let shortHeight = 0

    let longWidth = 0
    let shortWidth = 0

    while (solveWidth > 0) {

      if (solveWidth === 4) solveWidth -= 4, shortWidth += 4

      if (solveWidth >= 3) solveWidth -= 3, longWidth += 2
      else if (solveWidth > 0) solveWidth -= 2, shortWidth += 2
    }

    while (solveHeight > 0) {
      if (solveHeight === 4) solveHeight -= 4, shortHeight += 4

      if (solveHeight >= 3) solveHeight -= 3, longHeight += 2
      else if (solveHeight > 0) solveHeight -= 2, shortHeight += 2
    }
    if (solveHeight < 0 && solveWidth < 0) updateFrameError(`There is not an exact fit for your required frame size. This frame is ${Math.abs(solveWidth)}" too wide and ${Math.abs(solveHeight)}" too tall.`)
    else if (solveHeight < 0) updateFrameError(`There is not an exact fit for your required frame size. This frame is ${Math.abs(solveHeight)}" too tall.`)
    else if (solveWidth < 0) updateFrameError(`There is not an exact fit for your required frame size. This frame is ${Math.abs(solveWidth)}" too wide.`)
    else updateFrameError('')
    updateCornerPieces('4 x Corners')
    return generateWidthInch(longWidth, shortWidth), generateHeightInch(longHeight, shortHeight)
  }

  const generateWidthInch = (L, S) => {

    if (L > 0 && S === 0) updateGenerateFrameWidth([`${L} x Long`])
    else if (S > 0 && L === 0) updateGenerateFrameWidth([`${S} x Small`])
    else updateGenerateFrameWidth([`${L} x Long`, `${S} x Small`])
  }
  const generateHeightInch = (L, S) => {

    if (L > 0 && S === 0) updateGenerateFrameHeight([`${L} x Long`])
    else if (S > 0 && L === 0) updateGenerateFrameHeight([`${S} x Small`])
    else updateGenerateFrameHeight([`${L} x Long`, `${S} x Small`])
  }

  // ! STANDARD FRAME ALGO

  function generateStandard() {

    const solveHeight = frameSize.height
    const solveWidth = frameSize.width

    if (solveWidth === '11') updateGenerateFrameWidth(['2 x Long'])
    if (solveWidth === '21') updateGenerateFrameWidth(['2 x Short'])
    if (solveWidth === '29.7') updateGenerateFrameWidth(['2 x Long'])
    if (solveWidth === '42') updateGenerateFrameWidth(['6 x Short'])
    if (solveWidth === '59.4') updateGenerateFrameWidth(['6 x Long'])
    if (solveWidth === '84.1') updateGenerateFrameWidth(['14 x Short'])
    if (solveWidth === '118.9') updateGenerateFrameWidth(['14 x Long'])
    if (solveWidth === '168.2') updateGenerateFrameWidth(['30 x Short'])
    if (solveWidth === '237.8') updateGenerateFrameWidth(['30 x Long'])
    if (solveWidth === '25') updateGenerateFrameWidth(['2 x Short'])
    if (solveWidth === '35.3') updateGenerateFrameWidth(['2 x Long'])
    if (solveWidth === '50') updateGenerateFrameWidth(['6 x Short'])
    if (solveWidth === '70.7') updateGenerateFrameWidth(['6 x Long'])
    if (solveWidth === '100') updateGenerateFrameWidth(['14 x Short'])
    if (solveWidth === '141.4') updateGenerateFrameWidth(['14 x Long'])
    if (solveWidth === '200') updateGenerateFrameWidth(['30 x Short'])
    if (solveWidth === '282.8') updateGenerateFrameWidth(['30 x Long'])

    if (solveHeight === '11') updateGenerateFrameHeight(['2 x Long'])
    if (solveHeight === '21') updateGenerateFrameHeight(['2 x Short'])
    if (solveHeight === '29.7') updateGenerateFrameHeight(['2 x Long'])
    if (solveHeight === '42') updateGenerateFrameHeight(['6 x Short'])
    if (solveHeight === '59.4') updateGenerateFrameHeight(['6 x Long'])
    if (solveHeight === '84.1') updateGenerateFrameHeight(['14 x Short'])
    if (solveHeight === '118.9') updateGenerateFrameHeight(['14 x Long'])
    if (solveHeight === '168.2') updateGenerateFrameHeight(['30 x Short'])
    if (solveHeight === '237.8') updateGenerateFrameHeight(['30 x Long'])
    if (solveHeight === '25') updateGenerateFrameHeight(['2 x Short'])
    if (solveHeight === '35.3') updateGenerateFrameHeight(['2 x Long'])
    if (solveHeight === '50') updateGenerateFrameHeight(['6 x Short'])
    if (solveHeight === '70.7') updateGenerateFrameHeight(['6 x Long'])
    if (solveHeight === '100') updateGenerateFrameHeight(['14 x Short'])
    if (solveHeight === '141.4') updateGenerateFrameHeight(['14 x Long'])
    if (solveHeight === '200') updateGenerateFrameHeight(['30 x Short'])
    if (solveHeight === '282.8') updateGenerateFrameHeight(['30 x Long'])

    if (solveHeight === '10.5' || solveHeight === '14.8' || solveHeight === '12.5' || solveHeight === '17.6' || solveHeight === '8.5') updateGenerateFrameHeight(['None'])
    if (solveWidth === '10.5' || solveWidth === '14.8' || solveWidth === '12.5' || solveWidth === '17.6' || solveWidth === '8.5') updateGenerateFrameWidth(['None'])
    updateCornerPieces('2 x Left Corners & 2 x Right Corners')
  }


  return <div id="main">
    <section className="hero is-primary is-bold is-small">
      <div className="hero-body">
        <div className="container">
          <figure className="image is-4500x100">
            <img alt="Geeky Faye Art And Logo" src={GFALogo} />
          </figure>
          <h1 className="title has-text-centered">
            Frame Planning Tool
          </h1>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li className={activeSt} onClick={handleStandard}>
                <div className="rounded-corners tab-background ml-5 mr-3">
                  <a className='has-text-centered'>Standardized:<br />A, B or Letter</a>
                </div>
              </li>
              <li className={activeIn} onClick={handleInches}>
                <div className="rounded-corners tab-background ml-3 mr-3">
                  <a className='has-text-centered'>Custom:<br />Inches</a>
                </div>
              </li>
              <li className={activeCm} onClick={handleCentimeters}>
                <div className="rounded-corners tab-background ml-3 mr-3">
                  <a className='has-text-centered'>Custom:<br />Centimeters</a>
                </div>
              </li>
              <li className={activeFaq} onClick={handleFaq}>
                <div className="rounded-corners tab-background ml-3 mr-5">
                  <a className='has-text-centered'>FAQ:<br />What is This?</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <main>
      <section className='form-section section'>
        {activeFaq === '' && <div className="m-3 form-container">
          <h2 className="m-2 sub-heading" >How to Use:</h2>
          <p className="mb-2">Select your frame size type from the above choices (A Sizes, B Sizes, Letter, Inches, or Centimeters). Input your custom measurements or choose from the provided drop down and click the Generate Frame button. </p>
          <p className="mb-2">Pieces will be listed according to what you need for the Top and Bottom lengths, as well as Left and Right. Keep in mind that the number provided is the amount required for BOTH listed sides (E.G. if 6 Long pieces are required for Top and Bottom then each side will use 3).</p> 
          <p className="mb-2">Names listed (long, short, etc) will correspond to the file names. </p>
        </div>}

        {activeFaq !== '' && <div className="m-3 form-container">
          <h2 className="m-2 sub-heading">What is this?</h2>
          <p>The GFA Frame Planning Tool is a web tool built with/in (whatever you want to share about how you made it) to aid in the creation of the GFA Ultimate Picture Frame by calculating the exact pieces required to create a frame of a particular size. More information about the frames can be found <a target="_blank" rel="noreferrer" href="https://geekyfaye.art/digital-shop/">here!</a></p>

        </div>}
        {frameType.isStandard &&
          <div className="field has-addons mt-4">
            <div className="control ml-4 mr-2">
              <div className="select">
                <select value={aValue} onChange={changeSize}>
                  <option value="A Sizes">A Sizes</option>
                  <option value="4A0">4A0</option>
                  <option value="2A0">2A0</option>
                  <option value="A0">A0</option>
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="A3">A3</option>
                  <option value="A4">A4</option>
                  <option value="A5">A5</option>
                  <option value="A6">A6</option>
                </select>
              </div>
            </div>
            <div className="control mr-2 ml-2">
              <div className="select">
                <select value={bValue} onChange={changeSize}>
                  <option value="B Sizes">B Sizes</option>
                  <option value="4B0">4B0</option>
                  <option value="2B0">2B0</option>
                  <option value="B0">B0</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
                  <option value="B3">B3</option>
                  <option value="B4">B4</option>
                  <option value="B5">B5</option>
                  <option value="B6">B6</option>
                </select>
              </div>
            </div>
            <button
              onClick={changeSize}
              value="Letter"
              className="button ml-2">
              Letter
            </button>
          </div>}


        {(frameType.isStandard || frameType.isInches || frameType.isCentimeters) && <div className="m-3 form-container">
          <h3 className="sub-heading">Measurements for {standardSize}</h3>
          <div className="field has-addons">
            <div className="label-box control p-2">
              <p className="label">Height</p>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    className="input is-rounded"
                    type="text"
                    placeholder="Height"
                    onChange={handleChange}
                    name="height"
                    value={frameSize.height}
                    disabled={disabled}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="field has-addons">
            <div className="label-box control p-2">
              <p className="label">Width</p>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    className="input is-rounded"
                    type="text"
                    placeholder="Width"
                    onChange={handleChange}
                    name="width"
                    value={frameSize.width}
                    disabled={disabled}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="buttons">
            <button
              className="button"
              onClick={handleSubmit}>
              Generate Frame
            </button>
            <button
              className="button"
              onClick={swapState}>
              Swap Values
            </button>
            <button
              className="button"
              onClick={resetState}>
              Reset
            </button>
          </div>
        </div>}
      </section>

      {cornerPieces !== '' && <section className="section read-container">
        <div>
          <h3>Pieces required for {holdValue}:</h3>
          <p>{cornerPieces}</p>
          <h3>For Left & Right-</h3>
          {generateFrameHeight.map((piece, i) => {

            return <p key={i}>{piece}</p>

          })}

          <h3>For Top & Bottom-</h3>
          {generateFrameWidth.map((piece, i) => {
            return <p key={i}>{piece}</p>

          })}
          {frameError}
        </div>
      </section>}
    </main>
  </div>
}

export default FrameTool