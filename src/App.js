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

function RecipePage(props) {
  const recipeCategories = props.recipeCategories;
  const recipePage = props.recipePage;

  if (recipePage === "") {
    return <h1>Homepage</h1>;
  } else {
    return (
      <div>
        {recipeCategories.map((category) =>
          category.recipes.map((recipe) => {
            if (recipePage === recipe.name) {
              return [
                <h1>{recipe.name}</h1>,
                <p>{recipe.description}</p>,
                <ContentsSection contents={recipe.contents}></ContentsSection>,
                <h2>Warnings</h2>,
                <p>{recipe.warnings}</p>,
                <EquipmentSection
                  equipment={recipe.equipment}
                ></EquipmentSection>,
                <IngridientsSection
                  ingridients={recipe.ingridients}
                ></IngridientsSection>,
                <StepsSection steps={recipe.steps}></StepsSection>,
                <NotesSection notes={recipe.notes}></NotesSection>,
                <SourcesSection sources={recipe.sources}></SourcesSection>,
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
          <img id="logo" src="/logo.png" alt="Dissenters Cookbook Logo"></img>
        </a>
        {recipeCategories.map((recipeCategory, index) => (
          <OverlayTrigger
            key="logo-popover"
            placement="right"
            overlay={
              <Tooltip id={"tooltip-right"}>
                {recipeCategory.recipes.length} Recipes
              </Tooltip>
            }
          >
            <Accordion.Item eventKey={index} key={"accordion_item_" + index}>
              <Accordion.Header>{recipeCategory.header}</Accordion.Header>
              <Accordion.Body>
                {recipeCategory.recipes.map((recipe, index) => (
                  <Button
                    className="recipe-side-panel-buttons"
                    key={recipe.name}
                    onClick={() => setRecipePage(recipe.name)}
                  >
                    {recipe.name}
                  </Button>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </OverlayTrigger>
        ))}
      </Accordion>
      <div id="recipe-page">
        <RecipePage
          recipeCategories={recipeCategories}
          recipePage={recipePage}
        ></RecipePage>
      </div>
    </div>
  );
}

export default App;
