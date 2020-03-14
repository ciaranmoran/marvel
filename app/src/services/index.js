import { isResponseOK, endpoints, GET } from './apis';

export const getCharacters = async ({
  ctx,
  setLoading,
  page,
  limit = 20,
}) => {
  setLoading(true);

  const params = { limit, offset: limit * (page - 1) };
  const res = await GET(endpoints.get.characters, params);

  if (isResponseOK(res)) {
    const { data } = res;

    const {
      data: { results },
    } = data;

    ctx.addCharacters(results);

    setLoading(false);
  } else {
    setLoading(false);
  }
};
