export const filterUsers = (
  users,
  {
    query = '',
    order = 'asc',
    sort = '',
  },
) => {
  let visibleUsers = [...users];

  if (query.trim() !== '') {
    const normalizedQuery = query.toLowerCase();

    visibleUsers = visibleUsers.filter(
      (user) => user.username.toLowerCase().includes(normalizedQuery)
    );
  }

  if (sort) {
    visibleUsers.sort((user1, user2) => {
      switch (sort) {
        case 'name':
        case 'username':
        case 'email':
          return user1[sort].localeCompare(user2[sort]);

        case 'id':
          return user1[sort] - user2[sort];
      }
    });
  }

  if (order === 'desc') {
    visibleUsers.reverse();
  }

  return visibleUsers;
};
