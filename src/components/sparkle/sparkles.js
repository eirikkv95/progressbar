const DEFAULT_COLOR = 'hsl(50deg, 100%,50%)';

export const generateSparkle = (color = DEFAULT_COLOR) => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Data.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(0, 100) + '%',
      left: random(0, 100) + '%',
      zIndex: 2,
    },
  };
};
