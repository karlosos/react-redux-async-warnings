export const getValue = async () => {
    await new Promise(res => setTimeout(res, 2000));
    return getRandomInt(10);
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}