export const newMap = (array, callBackFunction) => {
  let newArrayToReturn = [];
  if (!callBackFunction) {
    throw new Error('Not callback provided');
  }

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const argumentToAdd = callBackFunction(element);
    newArrayToReturn = createNewArray(newArrayToReturn, argumentToAdd);
  }

  return newArrayToReturn;
};

const createNewArray = (array, ...newElement) => [...array, ...newElement];
