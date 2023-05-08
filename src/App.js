import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { recipeCategories } from "./content/recipeCategory";
import {
  SourcesSection,
  NotesSection,
  StepsSection,
  IngridientsSection,
  EquipmentSection,
  ContentsSection,
} from "./content/sections";

import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const externalWebsites = [
  {
    name: "Substance Mixing Calculator",
    url: "https://samuel1212703.github.io/substanceMixer/",
  },
];

function RecipePage(props) {
  const recipeCategories = props.recipeCategories;
  const recipePage = props.recipePage;

  if (recipePage === "") {
    return [
      <h1>Dissenters Cookbook</h1>,
      <p>
        This webpage was made to promote safe and sane cooking. The cookbook
        presents many recipes, most illicit, with pride. This page was made to
        offer simple and effecient recipes. This webpage is handled by a single
        person, which makes it possible for me to say; contact me if you wish.
        The cookbook was made to be pragmatic, so help me keep it that way.
        Thank you.
      </p>,
    ];
  } else {
    return (
      <div>
        {recipeCategories.map((category) =>
          category.recipes.map((recipe) => {
            if (recipePage === recipe.name) {
              return [
                <h1 key="header">{recipe.name}</h1>,
                <p key="sub-header">{recipe.description}</p>,
                <ContentsSection contents={recipe.contents}></ContentsSection>,
                <h2 key="warnings">Warnings</h2>,
                <p key="warnings-text">{recipe.warnings}</p>,
                <EquipmentSection
                  key="equipment"
                  equipment={recipe.equipment}
                ></EquipmentSection>,
                <IngridientsSection
                  key="ingredients"
                  ingridients={recipe.ingridients}
                ></IngridientsSection>,
                <StepsSection key="steps" steps={recipe.steps}></StepsSection>,
                <NotesSection key="notes" notes={recipe.notes}></NotesSection>,
                <SourcesSection
                  key="sources"
                  sources={recipe.sources}
                ></SourcesSection>,
              ];
            }
          })
        )}
      </div>
    );
  }
}

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [recipePage, setRecipePage] = useState("");

  function DarkMode() {
    let element = document.body;
    element.classList.toggle("dark");
    setIsClicked((isClicked) => !isClicked);
  }

  return (
    <div className="App" id="site">
      <button className="dark" id="darkmode-button" onClick={DarkMode}>
        {isClicked ? "☾" : "☼"}
      </button>
      <Accordion id="recipe-side-panel" alwaysOpen>
        <a onClick={() => setRecipePage("")}>
          <img id="logo" src=".\logo.png" alt="Dissenters Cookbook"></img>
        </a>
        {recipeCategories.map((recipeCategory, index) => (
          <OverlayTrigger
            key={"logo-popover" + index}
            placement="right"
            overlay={
              <Tooltip id={"tooltip-right"}>
                {recipeCategory.recipes.length} Recipes
              </Tooltip>
            }
          >
            <Accordion.Item eventKey={index} key={"accordion_item_" + index}>
              <Accordion.Header>{recipeCategory.header}</Accordion.Header>
              {recipeCategory.recipes.length ? (
                <Accordion.Body>
                  {recipeCategory.recipes.map((recipe, index) => (
                    <Button
                      className="recipe-side-panel-buttons"
                      key={recipe.name + "-" + index}
                      onClick={() => setRecipePage(recipe.name)}
                    >
                      {recipe.name}
                    </Button>
                  ))}
                </Accordion.Body>
              ) : (
                <Accordion.Body>
                  <p className="no-recipes-text">No recipes yet</p>
                </Accordion.Body>
              )}
            </Accordion.Item>
          </OverlayTrigger>
        ))}
        {externalWebsites.map((website) => (
          <Button
            key={"external-website-" + website}
            target="_blank"
            href={website.url}
            className="tools-buttons"
          >
            {website.name}
          </Button>
        ))}
      </Accordion>
      <div id="recipe-page">
        <RecipePage
          key="recipe"
          recipeCategories={recipeCategories}
          recipePage={recipePage}
        ></RecipePage>
      </div>
    </div>
  );
}

export default App;
