const {
  tambahDataBuku,
  tampilSemuaDataBuku,
  detailDatabuku,
  editDataBuku,
  hapusDataBuku,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: tambahDataBuku,
  },
  {
    method: 'GET',
    path: '/books',
    handler: tampilSemuaDataBuku,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: detailDatabuku,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editDataBuku,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: hapusDataBuku,
  },
];

module.exports = routes;
