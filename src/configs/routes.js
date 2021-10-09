const routes = {
  MAIN() { return '/'; },
  DETAIL_USER(id = ':id') { return `/user/${id}`; },
};

export default routes;
