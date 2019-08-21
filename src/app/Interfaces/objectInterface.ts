export interface ObjectType {
  // name of the object
  name: string;
  // Whether or not the player has bought this object
  purchased: boolean;
  // initial cost to purchase a rank in the object
  initialCost: number;
  // current cost to buy the next rank in the object
  currentCost: number;
  // current number of ranks in the object
  ranks: number;
  // the constant to multiply the current ranks of the object by the initial cost
  // initialCost * (ranks * costMultiplier)
  costMultiplier: number;
  // initial number of objects that get made per event
  initialProd: number;
  // the constant to multiply by the current ranks of the object
  // initialProd * (ranks * prodMultiplier)
  prodMultiplier: number;
  // current output of the object by the number of ranks it has
  currentProd: number;
}

export interface Agent {
  name: string;
  amount: number;
}
