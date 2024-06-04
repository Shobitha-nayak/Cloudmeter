const mockUsers = [
    { id: 1, email: 'admin@example.com', password: 'password', role: 'admin' },
    { id: 2, email: 'user@example.com', password: 'password', role: 'user' },
  ];
  
  export const getUsers = () => mockUsers;
  
  export const addUser = (user) => {
    mockUsers.push(user);
  };
  
  export const findUserByEmail = (email) => {
    return mockUsers.find((u) => u.email === email);
  };
  