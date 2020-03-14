export const getLabel = (loading, error) => {
  if (error) {
    return error;
  }

  return loading ? 'Loading...' : 'Load More';
};
