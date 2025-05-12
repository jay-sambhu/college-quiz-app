const userModel = require('../../models/userModel');
const db = require('../../utils/db');

jest.mock('../../utils/db');

describe('User Model Unit Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('findAll should return array of users', async () => {
    const mockUsers = [{ id: 1 }, { id: 2 }];
    db.query.mockResolvedValue(mockUsers);

    const result = await userModel.findAll();
    expect(db.query).toHaveBeenCalled();
    expect(result).toEqual(mockUsers);
  });

  it('findById should return single user', async () => {
    const mockUser = [{ id: 5 }];
    db.query.mockResolvedValue(mockUser);

    const result = await userModel.findById(5);
    expect(db.query).toHaveBeenCalledWith(expect.any(String), [5]);
    expect(result).toEqual(mockUser[0]);
  });

  it('update should return affectedRows', async () => {
    db.query.mockResolvedValue({ affectedRows: 3 });

    const result = await userModel.update(7, { username: 'new' });
    expect(db.query).toHaveBeenCalledWith(expect.any(String), ['new', 7]);
    expect(result).toBe(3);
  });

  it('remove should return deleted rows', async () => {
    db.query.mockResolvedValue({ affectedRows: 2 });

    const result = await userModel.remove(9);
    expect(db.query).toHaveBeenCalledWith(expect.any(String), [9]);
    expect(result).toBe(2);
  });
}); 