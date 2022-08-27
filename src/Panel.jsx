import { speciesList } from './config'
import TurtleControls from './TurtleControls'
import TimeControl from './TimeControl'
import Credits from './Credits'

const Panel = ({
  time,
  timeRange,
  setTime,
  setHighlightedSpecies,
  setActiveSpeciesList,
  activeSpeciesList,
  isTimeRunning,
  setIsTimeRunning,
  sameYear,
  setSameYear,
  speed,
  setSpeed,
}) => {
  return (
    <div id="panel">
      <h1 className="u-mobileHidden">Migration Paths of some Turtles</h1>
      <TimeControl
        time={time}
        timeRange={timeRange}
        setTime={setTime}
        isTimeRunning={isTimeRunning}
        setIsTimeRunning={setIsTimeRunning}
        sameYear={sameYear}
        setSameYear={setSameYear}
        speed={speed}
        setSpeed={setSpeed}
      />
      <TurtleControls
        speciesList={speciesList}
        setHighlighted={setHighlightedSpecies}
        activeSpeciesList={activeSpeciesList}
        setActiveSpeciesList={setActiveSpeciesList}
      />
      <Credits />
    </div>
  )
}

export default Panel
