export const generateTestUser = () => {
  const randomStr = Math.random().toString(36).substring(2, 8);
  return {
    firstName: `John${randomStr}`,
    lastName: `Doe${randomStr}`,
    email: `testuser_${randomStr}@example.com`,
  };
};

export const generateTestId = () => {
  return (randomeId = Math.floor(Math.random() * 1000000));
};
