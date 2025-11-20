//custom type guard (is ---as)
type Fish = {
  swim: () => void;
};
type Bird = {
  fly: () => void;
};

function isFishe(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
function move(pet: Fish | Bird) {
  if (isFishe(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

const myFish: Fish = {
  swim: () => console.log("!!my fish is swiming!!"),
};

move(myFish);
