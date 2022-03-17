const {getAllAlbanianNouns} = require('./scrapper')
describe('getAllAlbanianNouns', () => { 
  jest.setTimeout(1000000)
  
  it('test expected behaviour', async () => {
    const allbanianNouns = await getAllAlbanianNouns();

    await expect(allbanianNouns).toContain('abakë');
    await expect(allbanianNouns).toContain('zôjë');
    await expect(allbanianNouns.length).toBeGreaterThan(3700); //3900
  });
 })