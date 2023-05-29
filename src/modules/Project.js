export default ({ title = 'default', description = '' }) => {
  const project = {
    title,
    description,
    tasks: [],
  };

  return project;
};
