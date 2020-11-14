import React, { useState } from 'react'

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

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value

    const data = {
      ...frameSize,
      [name]: value
    }
    updateFrameSize(data)
  }

  function swapState(e) {
    e.preventDefault()
    updateFrameSize({
      height: frameSize.width,
      width: frameSize.height
    })
  }

  function resetState(e) {
    e.preventDefault()
    updateFrameSize({
      height: '',
      width: ''
    })
    updateFrameType({
      isStandard: false,
      isInches: false,
      isCentimeters: false
    })
    setDisabled(false)
  }

  function handleStandard(e) {
    e.preventDefault()
    updateFrameType({
      isStandard: true,
      isInches: false,
      isCentimeters: false
    })
    setDisabled(true)
  }
  function handleInches(e) {
    e.preventDefault()
    updateFrameType({
      isStandard: false,
      isInches: true,
      isCentimeters: false
    })
    setDisabled(false)
  }
  function handleCentimeters(e) {
    e.preventDefault()
    updateFrameType({
      isStandard: false,
      isInches: false,
      isCentimeters: true
    })
    setDisabled(false)
  }

  function changeSize(e) {
    console.log(e.target.value)
    updateStandardSize(e.target.value)

    if (standardSize === 'Letter') {
      updateFrameSize({
        height: '8.5',
        width: '11'
      })
    }
  }


  return <div>
    <h1>FrameTool</h1>
    <h2>Please Choose Your Frame Type:</h2>
    <div className="buttons">
      <button
        className="button"
        onClick={handleStandard}
      >Standardized:<br />A, B or Letter</button>
      <button
        className="button"
        onClick={handleInches}
      >Custom:<br />Inches</button>
      <button
        className="button"
        onClick={handleCentimeters}
      >Custom:<br />Centimeters</button>
    </div>

    {frameType.isStandard &&
      <div className="field is-horizontal">
        <div className="control">
          <div className="select">
            <select onChange={changeSize}>
              <option value="a-default">A Sizes</option>
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
        <div className="control">
          <div className="select">
            <select onChange={changeSize}>
              <option value="b-default">B Sizes</option>
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
          className="button"
        >Letter</button>
      </div>}

    {(frameType.isStandard || frameType.isInches || frameType.isCentimeters) && <div>
      {frameType.isStandard && <h3>Measurements for {standardSize}</h3>}
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Height</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded">
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
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Width</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded">
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
    </div>}

    <div className="buttons">
      <button className="button">Generate Frame</button>
      <button
        className="button"
        onClick={swapState}
      >Swap Values</button>
      <button
        className="button"
        onClick={resetState}
      >Reset</button>
    </div>

  </div>
}

export default FrameTool