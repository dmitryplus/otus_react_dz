import '@testing-library/jest-dom';
import * as axios from 'axios';
import { GetFilesList, GetGraphvizSvg, LoadXhprofFromFolder } from "../src/Services";

jest.mock('axios');

afterEach(() => {
  jest.resetAllMocks();
});

describe('Api', () => {
  test('GetFilesList', async () => {
    // @ts-ignore
    const mockGet = axios.get;

    mockGet.mockImplementation(() => Promise.resolve({ status: 200, data: {} }));

    GetFilesList();

    expect(mockGet).toHaveBeenCalledWith('/files-list.json');
  });

  test('GetGraphvizSvg', async () => {
    // @ts-ignore
    const mockPost = axios.post;
    mockPost.mockImplementation((body: string) => Promise.resolve({ status: 200, data: {} }));

    const testData = 'test';

    const result = await GetGraphvizSvg(testData);

    expect(mockPost).toHaveBeenCalledWith(
      'https://quickchart.io/graphviz',
      '{"graph":"test","layout":"dot","format":"svg"}',
      { headers: { 'Content-Type': 'application/json' } },
    );
  });

  test('LoadXhprofFromFolder', async () => {
    // @ts-ignore
    const mockGet = axios.get;

    mockGet.mockImplementation(() => Promise.resolve({ status: 200, data: {} }));

    await LoadXhprofFromFolder('test.xhprof');

    expect(mockGet).toHaveBeenCalledWith('../Data/test.xhprof');
  });
});
