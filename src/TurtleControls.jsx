import './TurtleControls.css'

const SpeciesToggle = ({
  species: { name, name_en, color },
  isActive,
  setActive = () => {},
  setHighlighted,
}) => {
  return (
    <label
      style={{ '--speciesColor': `rgb(${color})` }}
      className={`speciesToggle ${isActive ? 'active' : ''}`}
      onMouseEnter={() => setHighlighted(name)}
      onMouseLeave={() => setHighlighted(null)}
    >
      <input
        type="checkbox"
        checked={isActive}
        onChange={() => {
          setActive(!isActive)
        }}
      />
      <div
        className="speciesPic u-mobileHidden"
        style={{
          backgroundImage: `url(imgs/species/${name.replace(' ', '_').toLocaleLowerCase()}.jpg)`,
        }}
      />
      <div>
        <div className="speciesCommonName">{name_en}</div>
        <div className="speciesLatinName u-mobileHidden">{name}</div>
      </div>
    </label>
  )
}

const TurtleControls = ({ speciesList, activeSpeciesList, setActiveSpeciesList, setHighlighted }) => {
  const createToggle = species => (
    <SpeciesToggle
      species={species}
      key={species.name}
      setHighlighted={setHighlighted}
      isActive={activeSpeciesList.includes(species.name)}
      setActive={isActive => {
        setActiveSpeciesList(
          isActive
            ? [...activeSpeciesList, species.name]
            : activeSpeciesList.filter(s => s !== species.name)
        )
      }}
    />
  )

  return (
    <div className="turtleControls">
      <div className="turtleType">
        <h2 className="u-mobileHidden">Loggerhead Sea Turtle</h2>
        <div className="turtleToggles">
          {speciesList.filter(s => s.type === 'LoggerheadSeaTurtle').map(createToggle)}
        </div>
      </div>
      <div className="turtleType">
        <h2 className="u-mobileHidden">"Olive Ridley Sea Turtle"</h2>
        <div className="turtleToggles">
          {speciesList.filter(s => s.type !== 'OliveRidleySeaTurtle').map(createToggle)}
        </div>
      </div>
    </div>
  )
}

export default TurtleControls
