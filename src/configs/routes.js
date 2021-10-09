const routes = {
  MAIN() { return '/'; },
  DETAIL_USER(id = ':id') { return `/user/${id}`; },
  PHOTOS(id = ':id', albumId= ':albumId') { return `/user/${id}/photos/${albumId}`; },
};

export default routes;
