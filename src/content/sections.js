function SourcesSection(props) {
  const sources = props.sources;

  if (sources.length !== 0) {
    return [
      <h2>Sources</h2>,
      <ul>
        {sources.map((source) => (
          <li>
            <a href={source}>{source.substring(source.indexOf("//") + 2)}</a>
          </li>
        ))}
      </ul>,
    ];
  } else {
    return <div id="sources-section"></div>;
  }
}

function NotesSection(props) {
  const notes = props.notes;

  if (notes.length !== 0) {
    return [<h2>Notes</h2>, <p>{notes}</p>];
  } else {
    return <div id="notes-section"></div>;
  }
}

function StepsSection(props) {
  return [
    <h2>Steps</h2>,
    <ol>
      {props.steps.map((step) => {
        if (typeof step === "object") {
          return [
            <li>{step.step}</li>,
            <ol>
              {step.sub_steps.map((sub_step) => {
                return (
                  <li className="indent_once" type="a">
                    {sub_step}
                  </li>
                );
              })}
            </ol>,
          ];
        } else {
          return <li>{step}</li>;
        }
      })}
    </ol>,
  ];
}

function IngridientsSection(props) {
  return [
    <h2>Ingridients</h2>,
    <ul>
      {props.ingridients.map((ingridient) => (
        <li>{ingridient}</li>
      ))}
    </ul>,
  ];
}

function EquipmentSection(props) {
  return [
    <h2>Equipment</h2>,
    <ul>
      {props.equipment.map((equipment) => (
        <li>{equipment}</li>
      ))}
    </ul>,
  ];
}

function ContentsSection(props) {
  if (props.contents.length !== 0) {
    return [
      <h2>Contents</h2>,
      <ul>
        {props.contents.map((content) => (
          <li>
            <a href={content.link}>{content.name}</a>
          </li>
        ))}
      </ul>,
    ];
  } else {
    return <div id="sources-section"></div>;
  }
}

export {
  SourcesSection,
  NotesSection,
  StepsSection,
  IngridientsSection,
  EquipmentSection,
  ContentsSection,
};
