export const apiConfig = {
  endpoints: {
    account: {
      login: '/connect/token',
      info: '/api/account/{id}',
    },
    professor: {
      single: '/api/professor/{id}',
      query: '/api/professor',
      apply: {
        add: '/api/professor/apply',
        query: '/api/professor/apply/{id}',
      },
    },
    paper: {
      query: '/api/paper',
      single: '/api/paper/{id}',
    },
  },
};
