const fetchTimeEntries = require('../time-entries-api');

const mockedTimeEntries = [{
  client:{
    branch: '123',
    clientName: '123',
    contactPerson: 'test',
    contactPhoneNumber: 'test',
    id: 123,
    locality: '123',
    postalCode: '123'
  },
  id: 123,
  startTimestamp: 'bla',
  stopTimestamp: 'bla'
}]

it('fetches TimeEntries from the server', () => {
  const mockSuccessResponse = {mockedTimeEntries};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise); 
  
  fetchTimeEntries.fetchTimeEntries()
                          
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/time-entries?_sort=startTimestamp&_order=desc');

  global.fetch.mockClear();
  delete global.fetch;
});
