//L, dl, kg, g

export const recipeCategories = [
  {
    header: "Amphetamines",
    recipes: [
      {
        name: "MDMA",
        description: "",
        contents: [
          {
            name: "Metylendioxymetamfetamin",
            link: "https://da.wikipedia.org/wiki/MDMA",
          },
        ],
        warnings: "",
        equipment: ["1", "2"],
        ingridients: ["1", "2", "3"],
        steps: [""],
        notes: "",
        sources: [""],
      },
    ],
  },
  {
    header: "Alcohol",
    recipes: [
      {
        name: "Hard Applecider",
        description: "Hard applecider is simply fermented applecider.",
        contents: [
          {
            name: "Ethanol",
            link: "https://en.wikipedia.org/wiki/Ethanol",
          },
        ],
        warnings: "Hard applecider is pretty simple to make, and quite safe.",
        equipment: ["Stove", "Fermentation container with airlock"],
        ingridients: [
          "38 L applecider (squashed apples boiled in water, or pure apple juices)",
          "12 kg sugar",
          "175 g champagne yeast",
        ],
        steps: [
          "Dissolve the sugar in the applecider (easier with hot water).",
          "Put the champagne yeast in 1.5 dl water heated lightly to 30-35 \u2103 for 2-3 hours.",
          "Pour the yeast mix into the juice (the temperature difference between the liquids should not be above 2 \u2103).",
          "Stir lightly and pour into fermentation container. It is done fermenting 1 - 2 days after you no longer see new airbubbles appearing.",
        ],
        notes: "",
        sources: [],
      },
      {
        name: "Moonshine (Sugarwash)",
        description:
          "Moonshine is high-proof liquor. It is a type of whiskey, with at least 40% ABV, and the finished product is usually clear to off-white. Sugarwash means that the moonshine will be sugarbased.",
        contents: [
          {
            name: "Ethanol",
            link: "https://en.wikipedia.org/wiki/Ethanol",
          },
        ],
        warnings:
          "Producing high-proof alcohol, will be incredibly dangerous, because of the explosion risk - choose your work environment carefully. Moonshine is very strong, so be careful when drinking. Sugarwash moonshine will, in contrast to potatowash moonshine, not produce methanol.",
        equipment: ["Stove", "Fermentation container with airlock"],
        ingridients: ["7 kg sugar", "175 g turbo yeast", "19 L water"],
        steps: [
          "Heat up the water to 25 \u2103 and add the sugar.",
          "Pour the mix into the fermentation container - the mix should be between 20 and 30 \u2103.",
          {
            step: "Make a yeast starter:",
            sub_steps: [
              "Pour 2.5 dl water into a sterilised container.",
              "Add 15 g yeast to the water and let sit for 10 minutes.",
            ],
          },
          "Pour the yeast starter into the fermentation container.",
          "Close the fermentation container that should have an airlock.",
        ],
        notes: "",
        sources: ["https://learntomoonshine.com/how-to-make-a-sugar-wash-101/"],
      },
    ],
  },
  {
    header: "Dissociatives",
    recipes: [
      {
        name: "Salvia Divinorum",
        description: "",
        contents: [
          {
            name: "Salvinorin A",
            link: "https://da.wikipedia.org/wiki/Salvinorin_A",
          },
        ],
        warnings: "",
        equipment: ["1", "2"],
        ingridients: ["1", "2", "3"],
        steps: [""],
        notes: "",
        sources: [],
      },
    ],
  },
  {
    header: "Psychedelics",
    recipes: [
      {
        name: "Amanita Muscaria (Citric Decarboxylation)",
        description:
          "Amanita Muscaria is a beautiful red mushroom, both poisonous and hallucinogenic. Follow the guide and unlock the plants potential. ",
        contents: [
          {
            name: "Ibotenic acid",
            link: "https://en.wikipedia.org/wiki/Ibotenic_acid",
          },
          {
            name: "Muscimol",
            link: "https://en.wikipedia.org/wiki/Muscimol",
          },
        ],
        warnings:
          "Amanita Muscaria is poisonous, hence the decarboxylation. Do not eat raw. Follow the guide and it should be fine.",
        equipment: [
          "Pot with lid",
          "Stove",
          "pH-meter",
          "Cheesecloth (or other thin cloth)",
        ],
        ingridients: [
          "Amanita Muscaria",
          "Water",
          "Citric acid",
          "Distilled water",
        ],
        steps: [
          "Clean your Amanita Muscaria and cut them into pieces.",
          "Optional - Measure the mushrooms and write down the weight.",
          "Place the mushrooms in the pot.",
          "Fill the pot with water and stir lightly.",
          "Wait 10 minutes for the pH to adjust.",
          "Add very small amounts of citric acid until the pH is between 2.5-3.",
          "Put the lid on , boil the mix, and let it sit.",
          "After 30 minutes, remove the mushrooms from the pot and sqeeze the liquid into the pot. The alkaloids are now in the liquid in the pot.",
          "Check the pH value every half hour and make sure it is between 2.5 and 3 (add citric acid accordingly). You should measure the pH by moving a little liquid into a separate container and letting it cool, so the value will be accurate.",
          "After having boiled for 3 hours total at the correct pH, lad the mixture cool.",
          "Optional - Note the amount of liquid.",
          "Set aside the liquid you need in the next week in the fridge. The rest can be put in the freezer (potion wise - icetray, small containers etc.).",
        ],
        notes: "",
        sources: ["https://www.erowid.org/plants/amanitas/amanitas.shtml"],
      },
      {
        name: "DMT (lye/naphtha extraction)",
        description: "",
        contents: [
          {
            name: "N,N-dimethyltryptamin",
            link: "https://da.wikipedia.org/wiki/N,N-dimethyltryptamin",
          },
        ],
        warnings:
          "Naphtha is extremely flammable and sodium hydroxide is hazardous in case of skin/eye, ingestion and respiration - hence the safety gear (please do use).",
        equipment: [
          "2 L glass container",
          "2 large pots",
          "Glass turkey baster",
          "Chemical resistant gloves",
          "Chemical splash goggles",
          "Repiratory mask",
          "Cheesecloth",
        ],
        ingridients: [
          "500 mL Naphtha",
          "120 g Sodium Hydroxide",
          "500 g Acacia confusa-/Mimosa hostilis- root bark",
          "200 mL Vinegar",
          "Distilled water",
        ],
        steps: [
          {
            step: "Separate DMT from plant material:",
            sub_steps: [
              "Powder the bark",
              "Freeze the bark and let it thaw.",
              "Add 1800 mL distilled water, vinegar, bark to pot A.",
              "Cover and boil on high heat, stir occasionally.",
              "At a rolling boil, reduce heat to medium and recover.",
              "Boil with a lid on and stir every 5-10 minutes for at least 1.5 hours.",
              "Strain the solution into pot B with the cheesecloth, there should be around 1000 mL.",
            ],
          },
          "Repeat step 1 no less than 3 times, using new water and vinegar each time, but reusing the bark (pot B should now contain 4000 mL).",
          {
            step: "Make DMT freebase:",
            sub_steps: [
              "Boil (with lid off) pot B's contents from 4000 mL to 1200 mL - should take about 40 minutes.",
              "Let pot B's contents cool, then pour it into a 2 L glass container, and wait 2 hours for it to cool completely.",
              "Put on your safety gear (Danger ahead).",
              "Add the sodium hydroxide VERY SLOWLY (in small amounts - observe reactions before adding more) to the solution in the glass container - the solution will have a pH of about 13 now. The DMT is now freebase.",
            ],
          },
          {
            step: "Extract freebase:",
            sub_steps: [
              "Optional - measure the pH of the solution, a pH of 13 is optimal.",
              "The solution should be warm from the previous step. If it has cooled down, suspend the jar in boiling water so it doesnt touch the bottom. Add 500 mL of naphtha to the jar and seal it.",
              "Shake vigorously for 3 mminutes, then let contents separate for 10 minutes - repeat 4-5 times (keep the contents heated, or it will not work).",
              "Let the jar sit for several hours to allow separation of the layers.",
              "Use the turkey baster to transfer the top layer into a crystallization container, without transferring ANY of the black liquid underneath.",
            ],
          },
          {
            step: "Crystallize DMT:",
            sub_steps: [
              "Place the crystallization container into the freezer for 48 hours.",
              "Take the crystallization container out of the freezer and pour off the naphtha into a separate container though a coffee filter.",
              "Let the crystallized material (DMT) dry for at least 10 hours - DMT is insoluble in naphtha at low temperatures so it will precipitate out.",
            ],
          },
          "Steps 3-5 can be repeated up to about 5 times for maximized yield. A pull can result in between 200 mg and 1 g of DMT dependent on the succes of the extraction.",
        ],
        notes: "",
        sources: [
          "https://psychonautwiki.org/wiki/DMT_extraction_using_lye_(sodium_hydroxide)_and_naphtha",
        ],
      },
      {
        name: "Magic Mushrooms",
        description: "",
        contents: [
          {
            name: "Psilocybin",
            link: "https://en.wikipedia.org/wiki/Psilocybin",
          },
        ],
        warnings: "",
        equipment: ["1", "2"],
        ingridients: ["1", "2", "3"],
        steps: [""],
        notes: "",
        sources: ["https://en.wikipedia.org/wiki/Psilocybin_mushroom"],
      },
      {
        name: "Mescaline",
        description: "",
        contents: [
          {
            name: "Trimethoxyphenethylamine",
            link: "https://en.wikipedia.org/wiki/Mescaline",
          },
        ],
        warnings: "",
        equipment: ["1", "2"],
        ingridients: ["1", "2", "3"],
        steps: [""],
        notes: "",
        sources: [],
      },
    ],
  },
];
