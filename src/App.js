import React, { useEffect, useState, useRef } from 'react';
import Graph from './components/Graph';
import Hawaii from './images/Hawaii.png';
import MNIST from './config/mnist.json';
import ReactFlow, { Controls, Background } from 'react-flow-renderer';
import SimulationScript from './scripts/SimulationScript';

import { Slider, IconButton, TextField, Button, FormControlLabel, Switch, Dialog, DialogActions, DialogTitle, CircularProgress } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';
import { BsGear } from "react-icons/bs";
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

function App() {

  let elements = [];
  const JSONdata = MNIST;
  const [adaptationStrategy, setAdaptationStrategy] = useState(JSONdata.adaptationStrategy[0]);
  const [tasks, setTasks] = useState(adaptationStrategy.tasks);
  const [knobs, setKnobs] = useState(adaptationStrategy.adaptiveVariables);
  const [flowChart, setFlowChart] = useState([]);

  const [appCompletions, setAppCompletions] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [extraData, setExtraData] = useState([])

  const [LaTeXEquation1, setLaTeXEquation1] = useState(String.raw`\mathit{if}\ (\mathit{s\_off}_{n} - \epsilon) < \frac{1}{n}\sum_{i=1}^{n-1} \mathit{s\_off}_{i}`);
  const [LaTeXEquation2, setLaTeXEquation2] = useState(String.raw`\mathit{if}\ (\mathit{s\_off}_{n} + \epsilon) > \frac{1}{n}\sum_{i=1}^{n-1} \mathit{s\_off}_{i}`);

  const [showModal, setShowModal] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [histArraySize, setHistArraySize] = useState(0);
  const [stepSize, setStepSize] = useState(0);
  let adapt = false;

  useEffect(() => {
    getElements();
    setFlowChart(elements);
  }, [])

  // Initializes and Arranges Task Map
  const getElements = async () => {
    let x = 150;
    let y = 50;
    tasks.map((item, index, array) => {
      if (index === 0) {
        elements.push({
          id: index + 1,
          //type: 'input', // input node
          data: { label: item.taskName },
          position: { x: x + 500, y: y },
          sourcePosition: 'right',
          targetPosition: 'bottom',
          style: { backgroundColor: '#E8E8FC', borderRadius: 10, padding: 40, fontSize: 9, fontWeight: 'bold' }
        }, {
          id: 'arrow' + index + 1,
          type: 'default',
          source: index + 1,
          target: index + 2,
          arrowHeadType: 'arrowclosed',
          animated: true,
          style: { stroke: '#ffffff', strokeWidth: 3 },
        });
      } else if (index + 1 === tasks.length) {
        if (x === 150) x = 400;
        else if (x === 400) x = 150;
        y = y + 100;
        elements.push({
          id: index + 1,
          //type: 'output', // input node
          data: { label: item.taskName },
          position: { x: x, y: y },
          sourcePosition: 'right',
          targetPosition: 'top',
          style: { backgroundColor: '#E8E8FC', borderRadius: 10, padding: 40, fontSize: 9, fontWeight: 'bold' }
        }, {
          id: 'arrow' + index + 1,
          type: 'default',
          source: index + 1,
          target: 1,
          arrowHeadType: 'arrowclosed',
          animated: true,
          style: { stroke: '#ffffff', strokeWidth: 3 },
        });
      } else {
        if (x === 150) x = 400;
        else if (x === 400) x = 150;
        y = y + 100;
        elements.push({
          id: index + 1,
          data: { label: item.taskName },
          position: { x: x, y: y },
          sourcePosition: 'right',
          targetPosition: 'top',
          style: { backgroundColor: '#E8E8FC', borderRadius: 10, padding: 40, fontSize: 9, fontWeight: 'bold' }
        }, {
          id: 'arrow' + index + 1,
          type: 'default',
          source: index + 1,
          target: index + 2,
          arrowHeadType: 'arrowclosed',
          animated: true,
          style: { stroke: '#ffffff', strokeWidth: 3 },
        })
      }
    })
  }

  // Initializes Custom Sliders
  const iOSBoxShadow = " 0px 2px 4px 0px #000000";
  function ValueLabelComponent(props) {
    const { children, open, value } = props;
    return (
      <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }
  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
  };
  const PrettoSlider = withStyles({
    root: {
      color: '#0058FF',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -10,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 8,
    },
    rail: {
      height: 8,
      borderRadius: 8,
      backgroundColor: "#000000",
      boxShadow: iOSBoxShadow,
    },
  })(Slider);

  // Handles AdaptUp Equation Changes
  const handleAdaptUp = (event) => {
    console.log(event.target.value)
    setLaTeXEquation1(String.raw`\mathit{if}\ ${event.target.value}`)
  }

  // Handles AdaptDown Equation Changes
  const handleAdaptDown = (event) => {
    console.log(event.target.value)
    setLaTeXEquation2(String.raw`\mathit{if}\ ${event.target.value}`)
  }

  // Excecutes Simulation Script
  const executeScript = () => {
    const equation = { adaptUp: LaTeXEquation1, adaptDown: LaTeXEquation2 }
    setShowModal(false);
    setShowLoading(true);
    console.log(histArraySize)
    console.log(stepSize)
    console.log(adapt)
    SimulationScript(histArraySize, stepSize, "onTimeHistory", adapt).then((response) => {
      console.log(response)
      setAppCompletions(response.appCompletions);
      setAccuracy(response.mlAccuracy);
      setExtraData(response.accuracyGraph);
      setShowLoading(false);
    })
  }

  return (
    <>

      <div style={showLoading ? { pointerEvents: "none", opacity: "0.5" } : {}}>

        {/* Task Map */}
        <div style={{ flex: 1, position: 'absolute', width: '68%', height: '70%', left: 0, top: 0, backgroundColor: '#69AA83', boxShadow: "inset 0px 0px 20px 0px #ffffff" }}>
          <ReactFlow elements={flowChart} arrowHeadColor={"#ffffff"}>
            <Controls />
            <Background
              variant="dots"
              gap={16}
              size={1}
            />
          </ReactFlow>
        </div>

        {/* Knobs */}
        <div style={{ flex: 1, position: 'absolute', width: '32%', height: '70%', right: 0, top: 0 }}>
          <div style={{ flex: 1, padding: 30, height: '93%' }}>
            <div style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
              <div style={{ fontFamily: "GemunuLibre-ExtraBold", fontSize: 45, fontWeight: '600', textAlign: 'center' }}>Configuration</div>
              <IconButton style={{ marginLeft: '90%', top: -45 }} onClick={() => setShowModal(!showModal)}>
                <BsGear size={24} color='#7F8489' />
              </IconButton>
            </div>
            <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: 25, fontFamily: "GemunuLibre-SemiBold", textDecoration: 'underline', marginBottom: '2%' }}>
              Step 1: Adjust Knobs
            </div>
            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" value={histArraySize} max={8} onChange={(event, value) => { setHistArraySize(value) }} onChangeCommitted={(event, value) => { setHistArraySize(value) }} />
            <div style={{ flex: 1, fontFamily: "GemunuLibre-Light", fontSize: 20, textAlign: 'center', marginBottom: 25 }}>History Array Size</div>
            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" value={stepSize} max={8} onChange={(event, value) => { setStepSize(value) }} onChangeCommitted={(event, value) => { setStepSize(value) }} />
            <div style={{ flex: 1, fontFamily: "GemunuLibre-Light", fontSize: 20, textAlign: 'center', marginBottom: 25 }}>Adaptation Step Size</div>
            <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: 25, fontFamily: "GemunuLibre-SemiBold", textDecoration: 'underline', marginBottom: '2%', marginTop: '5%' }}>
              Step 2: Enter Heuristic Equation
            </div>
            <div style={{ marginTop: '2%', borderWidth: 2, borderColor: "#000", borderStyle: 'solid', borderRadius: 5 }}>
              <div style={{ fontFamily: "GemunuLibre-Light", fontSize: 20, textAlign: 'center', fontWeight: 'bold', marginTop: '2%' }}>Adapt Up</div>
              <BlockMath>{LaTeXEquation1}</BlockMath>
              <div style={{ display: 'inline' }}>
                <TextField label="Adapt Up" variant="filled" style={{ width: '100%' }} onChange={(event) => handleAdaptUp(event)}></TextField>
              </div>
            </div>
            <div style={{ marginTop: '1%', borderWidth: 2, borderColor: "#000", borderStyle: 'solid', borderRadius: 5 }}>
              <div style={{ fontFamily: "GemunuLibre-Light", fontSize: 20, textAlign: 'center', fontWeight: 'bold', marginTop: '2%' }}>Adapt Down</div>
              <BlockMath>{LaTeXEquation2}</BlockMath>
              <div style={{ display: 'inline' }}>
                <TextField label="Adapt Down" variant="filled" style={{ width: '100%' }} onChange={(event) => handleAdaptDown(event)}></TextField>
              </div>
            </div>
            <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: 25, fontFamily: "GemunuLibre-SemiBold", textDecoration: 'underline', marginBottom: '2%', marginTop: '5%' }}>
              Step 3: Check Adaptation and Run
            </div>
            <div style={{ flexDirection: 'row', marginLeft: '32%' }}>
              <FormControlLabel
                control={<Switch size={'medium'} color="primary" onChange={() => adapt = !adapt} />}
                label="Adapt"
              />
              <Button size="large" variant="contained" color="primary" onClick={() => executeScript()} >
                Execute
              </Button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div style={{ flex: 1, position: 'absolute', width: '30%', height: '30%', right: 0, bottom: 0 }}>
          <div style={{ flex: 1, padding: 30 }}>
            <div style={{ flex: 1, fontFamily: "GemunuLibre-ExtraBold", fontSize: 45, textAlign: 'center' }}>Statistics</div>
            <div style={{ flexDirection: 'row', marginTop: 70 }}>
              <div style={{ fontFamily: "GemunuLibre-Light", fontSize: 40, display: 'inline' }}>App Completions:</div>
              <div style={{ fontFamily: "GemunuLibre-Light", fontSize: 40, display: 'inline', marginLeft: '40%' }}>{appCompletions}</div>
            </div>
            <div style={{ flexDirection: 'row', marginTop: 70 }}>
              <div style={{ fontFamily: "GemunuLibre-Light", fontSize: 40, display: 'inline' }}>Accuracy:</div>
              <div style={{ fontFamily: "GemunuLibre-Light", fontSize: 40, display: 'inline', marginLeft: '50%' }}>{accuracy}%</div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div style={{ flex: 1, position: 'absolute', width: '70%', height: '30%', left: 0, bottom: 0 }}>
          <Graph data={extraData} />
        </div>

        {/* Modal */}
        <Dialog open={showModal} onClose={() => setShowModal(false)} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Settings</DialogTitle>
          <DialogActions>
            <Button onClick={() => setShowModal(false)} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

      </div >

      {/* Loading */}
      {/* {showLoading ?
        <div style={{ position: 'absolute', left: '50%', top: '40%' }}>
          <CircularProgress
            size={300}
          />
        </div>
        : null
      } */}

    </>
  );
}

export default App;
