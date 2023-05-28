export const Priority = {
  CRITICAL: 'critical',
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low',
};

export default (title = 'default', description = '', date = new Date(Date.now()), priority = Priority.LOW) => {
  const task = {
    title,
    description,
    date,
    priority,
  };

  return task;
};
