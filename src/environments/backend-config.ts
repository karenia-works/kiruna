export const apiConfig = {
  endpoints: {
    account: {
      login: '/connect/token',
      info: '/api/account/{id}',
    },
    professor: {
      apply: {
        add: '/api/professor/apply',
        query: '/api/professor/apply/{id}',
      },
    },
  },
};
